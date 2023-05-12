<template>
  <div
    :class="[
      'overflow-hidden',
      {
        'rounded-full': rounded,
        'min-w-[20px] w-5 h-5': size === 'small',
        'min-w-[40px] w-10 h-10': size === 'medium',
        'min-w-[64px] w-16 h-16': size === 'large',
      },
    ]"
  >
    <img :src="src" :alt="altImage" class="w-full h-full object-cover" />
  </div>
</template>

<script setup>
import { altImage } from '@/configs/constants';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'small',
  },
});
</script>
