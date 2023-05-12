<template>
  <div class="flex items-center">
    <input type="checkbox" class="ml-1" :name="name" :id="name" />
    <label :for="name" class="capitalize font-medium ml-1">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});
</script>
