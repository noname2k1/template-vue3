<template>
  <div class="">
    <label for="" class="capitalize font-medium ml-1">{{ label }}</label>
    <div class="flex items-center relative">
      <input
        class="rounded-md border border-neutral-200 w-full px-2 py-1"
        :type="type"
        :placeholder="placeholder"
        :name="name"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Please Input',
  },
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
