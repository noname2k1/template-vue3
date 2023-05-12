import { defineStore } from 'pinia';

const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      sidebar: false,
    };
  },
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
});

export default useGlobalStore;
