<template>
  <header
    class="bg-teal-800 px-6 text-white fixed z-20 top-0 h-[80px] py-[5px] left-0 right-0 flex items-center text-headerText select-none"
  >
    <!-- left side -->
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px]"
    >
      <img
        src="/images/icons/tree.svg"
        :alt="altImage"
        class="w-[34px] h-[34px] invert"
      />
      <span class="uppercase text-xs font-semibold">tree</span>
    </router-link>
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
    >
      <img
        src="/images/icons/comment.svg"
        :alt="altImage"
        class="w-[34px] h-[34px] invert"
      />
      <span class="uppercase text-xs font-semibold">comment</span>
    </router-link>
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
    >
      <img
        src="/images/icons/pencil.svg"
        :alt="altImage"
        class="w-[34px] h-[34px] invert"
      />
      <span class="uppercase text-xs font-semibold">edits</span>
    </router-link>
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
    >
      <img
        src="/images/icons/merge.svg"
        :alt="altImage"
        class="w-[34px] h-[34px] invert"
      />
      <span class="uppercase text-xs font-semibold">merge</span>
    </router-link>
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
    >
      <img
        src="/images/icons/reports.svg"
        :alt="altImage"
        class="w-[34px] h-[34px] invert"
      />
      <span class="uppercase text-xs font-semibold">reports</span>
    </router-link>
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
    >
      <img
        src="/images/icons/users.svg"
        :alt="altImage"
        class="w-[34px] h-[34px]"
      />
      <span class="uppercase text-xs font-semibold">care team</span>
    </router-link>
    <router-link
      :to="routes.home"
      class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
    >
      <img
        src="/images/icons/q-and-a.svg"
        :alt="altImage"
        class="w-[34px] h-[34px]"
      />
      <span class="uppercase text-xs font-semibold">QA comments</span>
    </router-link>

    <!-- right side -->
    <ul class="flex ml-auto items-center h-full">
      <button
        :to="routes.home"
        class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
      >
        <img
          src="/images/icons/save.svg"
          :alt="altImage"
          class="w-[34px] h-[34px]"
        />
        <span class="uppercase text-xs font-semibold">save</span>
      </button>
      <button
        :to="routes.home"
        class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
      >
        <img
          src="/images/icons/export.svg"
          :alt="altImage"
          class="w-[34px] h-[34px] invert"
        />
        <span class="uppercase text-xs font-semibold">export</span>
      </button>
      <button
        :to="routes.home"
        class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
      >
        <img
          src="/images/icons/undo.svg"
          :alt="altImage"
          class="w-[34px] h-[34px] invert"
        />
        <span class="uppercase text-xs font-semibold">undo</span>
      </button>
      <button
        :to="routes.home"
        class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
      >
        <img
          src="/images/icons/help.svg"
          :alt="altImage"
          class="w-[34px] h-[34px] invert"
        />
        <span class="uppercase text-xs font-semibold">help</span>
      </button>
      <button
        :to="routes.home"
        class="items-center flex flex-col justify-center text-2xl font-bold py-[0.9px] pl-[20px]"
      >
        <img
          src="/images/icons/close.svg"
          :alt="altImage"
          class="w-[34px] h-[34px]"
        />
        <span class="uppercase text-xs font-semibold">close</span>
      </button>
    </ul>
  </header>
</template>

<script setup>
import { altImage } from '@/configs/constants';
import routes from '@/configs/routes';
</script>
