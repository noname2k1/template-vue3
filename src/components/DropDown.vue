<template>
  <div class="relative h-full" @click="handleShowDropDown">
    <slot />
    <div
      :class="[
        'absolute transition-[top-[calc(100%+30px)]_1s,opacity_1.2,visible_1.5s]',
        {
          'top-[calc(100%+30px)] invisible opacity-0': !isShow,
          'top-[calc(100%+5px)] visible opacity-100': isShow,
          'left-1/2 -translate-x-1/2': position === 'center',
          'left-0': position === 'left',
          'right-0': position === 'right',
        },
      ]"
    >
      <ul
        @click.stop
        class="drop-down-list min-w-[150px] bg-white border rounded-md text-black dark:text-white max-h-[300px] duration-100"
      >
        <li
          v-for="item in data"
          :key="item.id"
          :class="[
            'hover:text-blue-500 hover:bg-black/5 cursor-pointer text-sm text-gray-500 py-3 px-4 flex items-center',
            {
              'border-b': item.complete !== undefined,
            },
          ]"
        >
          <Image
            :src="item.image"
            :size="size"
            :rounded="true"
            v-if="item.haveImage && item.image"
            class="mr-4"
          />
          <div
            v-else-if="item.haveImage && !item.image && !item.icon"
            class="min-w-[40px] mr-4 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-semibold"
          >
            {{
              item.name
                .split(' ')
                .map((item) => item[0])
                .join('')
            }}
          </div>
          <div
            class="mr-4 w-[18px] h-[18px]"
            v-if="item.haveImage && item.icon"
          >
            <img :src="item.icon" :alt="altImage" />
          </div>
          <div
            :class="[
              'flex flex-col whitespace-nowrap',
              {
                'w-52': size === 'medium',
              },
            ]"
          >
            <span class="font-normal">{{ item.name }}</span>
            <span
              class="uppercase text-gray-400 font-semibold text-[10px]"
              v-if="item.textBelow"
              >{{ item.textBelow }}</span
            >
          </div>
          <span
            v-if="item.complete !== undefined"
            :class="[
              'ml-auto text-headerText p-1',
              {
                'hover:text-red-600': !item.complete,
                'bg-green-500 rounded-full': item.complete,
              },
            ]"
          >
            <Check v-if="item.complete" />
            <X v-if="!item.complete" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Image from '@/components/customs/Image.vue';
import { altImage } from '@/configs/constants';
import { ref } from 'vue';
import Check from '@/components/icons/Check.vue';
import X from '@/components/icons/X.vue';
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'small',
  },
  position: {
    type: String,
    enum: ['left', 'center', 'right'],
    default: 'center',
  },
});

const isShow = ref(false);

const handleShowDropDown = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>
/* style width scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

ul.drop-down-list {
  overflow: hidden;
}

ul.drop-down-list:hover {
  overflow-y: auto;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #dadada;
  border-radius: 2px;
  &:hover {
    background: #555;
  }
}
</style>
