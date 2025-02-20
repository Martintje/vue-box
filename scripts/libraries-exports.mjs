import fs from "node:fs";

const packages = ["typescript-utilities", "hyper", "design-system"];

function getFilePaths(dir, filePaths = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = `${dir}/${file}`;

    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes("node_modules") && !filePath.includes("dist")) {
        getFilePaths(filePath, filePaths);
      }
    } else if (filePath.endsWith(".vue") || filePath.endsWith(".ts")) {
      filePaths.push(filePath);
    }
  }

  return filePaths;
}

function getFileContents(filePath) {
  const fileContents = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });

  return fileContents;
}

function getFileContentsWithoutComments(fileContents) {
  const cleanFileContents = fileContents
    .replace(/\/\*[\s\S\n\r]+?\*\//g, "")
    .replace(/\/\/[\s\S]+/g, "");

  return cleanFileContents;
}

function getFromPath(rootDir, filePath) {
  const fromPath = filePath.replace(rootDir, "./src");

  const newFromPath = filePath.endsWith(".ts")
    ? fromPath.replace(".ts", "")
    : fromPath;

  return newFromPath;
}

function getDefaultVueExport(rootDir, filePath) {
  const vueFileName = filePath.substring(
    filePath.lastIndexOf("/") + 1,
    filePath.lastIndexOf(".vue")
  );

  const defaultVueExport = `default as ${vueFileName}`;

  return defaultVueExport;
}

function getNamedExport(match) {
  const clean = match
    .replace(/\n+/g, " ")
    .replace(/\r+/g, " ")
    .replace(/^export[\s]+type[\s]+/g, "type ")
    .replace(/^export[\s]+interface[\s]+/g, "type ")
    .replace(/^export[\s]+enum[\s]+/g, "")
    .replace(/^export[\s]+const[\s]+/g, "")
    .replace(/^export[\s]+function[\s]+/g, "")
    .replace(/^export[\s]+class[\s]+/g, "")
    .trim();

  return clean;
}

function getNamedExports(fileContents) {
  const namedExportMatchesRaw = [
    ...fileContents.matchAll(
      /export[\s\n\r]+(type|interface|enum|const|function|class)[\s\n\r]+[\w\d\-\_]+/g
    ),
  ];

  const namedExportMatches = namedExportMatchesRaw.map((match) => match[0]);

  const namedExports = namedExportMatches.map((match) => getNamedExport(match));

  namedExports.sort();

  return namedExports;
}

function getExport(simpleExports, fromPath) {
  if (simpleExports.every((exportName) => exportName.startsWith("type "))) {
    const simpleExportsJoined = simpleExports
      .map((name) => name.substring("type ".length))
      .join(", ");

    const fileTypeExport = `export type { ${simpleExportsJoined} } from "${fromPath}"`;

    return fileTypeExport;
  }

  const simpleExportsJoined = simpleExports.join(", ");

  const fileExport = `export { ${simpleExportsJoined} } from "${fromPath}"`;

  return fileExport;
}

function getExports(rootDir) {
  const filePaths = getFilePaths(rootDir);

  const exports = filePaths.reduce((accumulator, filePath) => {
    const defaultVueExports = filePath.endsWith(".vue")
      ? [getDefaultVueExport(rootDir, filePath)]
      : [];

    const fileContents = getFileContents(filePath);

    const fileContentsWithoutComments =
      getFileContentsWithoutComments(fileContents);

    const namedExports = getNamedExports(fileContentsWithoutComments);

    const simpleExports = [...defaultVueExports, ...namedExports];

    if (!simpleExports.length) return accumulator;

    const fromPath = getFromPath(rootDir, filePath);

    const fileExport = getExport(simpleExports, fromPath);

    return [...accumulator, fileExport];
  }, []);

  return exports;
}

function writeExportsToFile(target, exports) {
  const exportsContents = exports.join("\n");

  fs.writeFileSync(target, exportsContents, (error) => {
    if (error) throw error;
  });
}

packages.forEach((packageName) => {
  const source = `./${packageName}/src`;
  const target = `./${packageName}/index.ts`;
  const exports = getExports(source);

  console.log("exports", exports);

  writeExportsToFile(target, exports);
});
