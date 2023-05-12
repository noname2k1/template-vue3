<template>
  <div class="">
    <label for="" class="capitalize font-medium ml-1">{{ label }}</label>
    <div class="flex items-center relative">
      <div
        :class="[
          'rounded-md border border-neutral-200 w-full pl-1 pr-2 py-1 cursor-pointer',
          {
            'bg-gray-300 text-black font-semibold': dark,
            'bg-white text-gray-500/50 font-normal': !dark,
          },
        ]"
        :data-name="name"
      >
        <span class="pl-2">{{ placeholder }}</span>
      </div>
      <img
        :src="`/images/icons/${moreIcon ? 'more-horiz' : 'chevronDown'}.svg`"
        :alt="altImage"
        :class="[
          'w-4 h-4 absolute top-1/2 -translate-y-1/2 right-3',
          {
            'rotate-[90deg]': !moreIcon,
          },
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { altImage } from '@/configs/constants';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
  },
  placeholder: {
    type: String,
    default: 'Please Select',
  },
  moreIcon: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>
