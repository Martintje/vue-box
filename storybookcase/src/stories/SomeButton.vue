<script lang="ts" setup>
import { computed } from 'vue'

const properties = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * background color of the button
     */
    backgroundColor?: string
  }>(),
  { primary: false, size: 'medium', backgroundColor: '' },
)

const emit = defineEmits<{
  (event: 'click', id: number): void
}>()

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': properties.primary,
  'storybook-button--secondary': !properties.primary,
  [`storybook-button--${`${properties.size}` || 'medium'}`]: true,
}))

const style = computed(() => ({
  backgroundColor: properties.backgroundColor,
}))

const onClick = () => {
  emit('click', 1)
}
</script>

<template>
  <button :class="classes" :style="style" type="button" @click="onClick">{{ label }}</button>
</template>

<style lang="scss" scoped>
.storybook-button {
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.storybook-button--primary {
  background-color: #555ab9;
  color: white;
}
.storybook-button--secondary {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  background-color: transparent;
  color: #333;
}
.storybook-button--small {
  padding: 10px 16px;
  font-size: 12px;
}
.storybook-button--medium {
  padding: 11px 20px;
  font-size: 14px;
}
.storybook-button--large {
  padding: 12px 24px;
  font-size: 16px;
}
</style>
