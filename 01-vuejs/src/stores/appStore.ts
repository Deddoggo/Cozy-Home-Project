import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      isShowDrawer: false,
    };
  },
  actions: {
    toggleDrawer() {
      this.isShowDrawer = !this.isShowDrawer;
    },
    hiddenDrawer() {
      this.isShowDrawer = false;
    },
  },
});
