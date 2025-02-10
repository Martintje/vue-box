import type { RouteRecordRaw } from "vue-router";
import type { RouteNameType } from "./RouteNameType";

export type RouteType = RouteRecordRaw & {
  name: RouteNameType
}
