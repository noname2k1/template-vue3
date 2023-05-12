<template>
  <aside :class="['pl-4 bg-primary duration-700 fixed left-0']">
    <!-- select -->
    <Select
      placeholder="Default Required Field"
      label="Required Field"
      class="mt-1"
      dark
    />
    <!-- search bar -->
    <div class="search-bar flex border-2 bg-white py-1 mt-2 rounded-md">
      <input
        type="text"
        placeholder="Search Field"
        class="pl-3 placeholder:text-black"
      />
      <SearchIcon />
    </div>
    <ul
      class="flex flex-col mt-2 py-1 overflow-y-hidden hover:overflow-y-scroll pr-5 max-h-[calc(100vh-(54px*2))]"
    >
      <li
        @click="handleActiveTab(grandItem.id, 'grand')"
        v-for="grandItem in sidebarList"
        :key="grandItem.id"
        class="first:mt-5 min-w-[190px]"
      >
        <div
          :class="[
            'border-l-2 py-3 pl-2 mb-1 px-4 min-w-[200px] flex items-center text-sidebarIcon hover:bg-teal-100 cursor-pointer',
            {
              'bg-teal-100 text-teal-900 font-bold border-teal-800':
                activeTabId.grand === grandItem.id && !grandItem.children,
              'border-transparent':
                !grandItem.children && activeTabId.grand !== grandItem.id,
            },
          ]"
        >
          <img
            src="/images/icons/chevronRight.svg"
            :class="[
              'w-4 h-4 mr-2 duration-150',
              {
                'transform rotate-90': activeTabId.grand === grandItem.id,
              },
            ]"
            :alt="altImage"
            v-if="grandItem.children"
          />
          <!-- <img
            :src="grandItem.icon"
            :alt="altImage"
            class="mr-[14px] w-5 h-5"
          /> -->
          <span class="capitalize text-sm font-semibold text-[#0e1726]">{{
            grandItem.name
          }}</span>
        </div>
        <!-- parent menu -->
        <ul
          :class="[
            {
              '-translate-y-full invisible': activeTabId.grand !== grandItem.id,
              'translate-y-0 visible': activeTabId.grand === grandItem.id,
            },
          ]"
          v-if="grandItem.children && activeTabId.grand === grandItem.id"
        >
          <li
            v-for="parentItem in grandItem.children"
            :key="grandItem.id"
            @click.stop="handleActiveTab(parentItem.id, 'parent')"
            class="cursor-pointer hover:text-blue-600 text-neutral-500 hover:font-semibuld font-normal"
          >
            <span
              :class="[
                'py-2 ml-6 border-l-2 pl-2 flex items-center capitalize text-sm hover:bg-teal-100',
                {
                  'bg-teal-100 border-teal-800 text-teal-900 font-bold':
                    activeTabId.parent === parentItem.id &&
                    !parentItem.children,
                  'border-transparent':
                    !parentItem.children &&
                    activeTabId.parent !== parentItem.id,
                },
              ]"
            >
              <img
                src="/images/icons/chevronRight.svg"
                :class="[
                  'w-4 h-4 ml-1 mr-2 duration-150',
                  {
                    'transform rotate-90': activeTabId.parent === parentItem.id,
                  },
                ]"
                :alt="altImage"
                v-if="parentItem.children"
              />
              <span class="mr-1"></span>{{ parentItem.name }}
            </span>
            <!-- child menu -->
            <ul
              class=""
              v-if="parentItem.children && activeTabId.parent === parentItem.id"
            >
              <li
                v-for="childItem in parentItem.children"
                :key="childItem.id"
                @click.stop="handleActiveTab(childItem.id, 'children')"
                class="cursor-pointer hover:text-blue-600 text-neutral-500 hover:font-semibuld font-normal"
              >
                <span class="ml-10 pl-2 flex items-center capitalize text-sm">
                  <span
                    class="mr-1 w-full"
                    :class="[
                      'py-2 ml-5 border-l-2 pl-2 flex items-center capitalize text-sm hover:bg-teal-100',
                      {
                        'bg-teal-100 border-teal-800 text-teal-900 font-bold':
                          activeTabId.children === childItem.id,
                        'border-transparent':
                          activeTabId.children !== childItem.id,
                      },
                    ]"
                    >{{ childItem.name }}</span
                  ></span
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { altImage } from '@/configs/constants';
import sidebarList from '@/lists/sidebarList';
import Select from '../customs/Select.vue';
import { SearchIcon } from '@/components/icons';

const activeTabId = ref({
  grand: '',
  parent: '',
  children: '',
});
const handleActiveTab = (id, level) => {
  if (activeTabId.value[level] === id) {
    activeTabId.value[level] = '';
  } else {
    activeTabId.value[level] = id;
  }
};
</script>

<style scoped lang="scss">
/* style width scrollbar */
::-webkit-scrollbar {
  width: 5px;
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
