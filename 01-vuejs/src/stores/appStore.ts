import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      isShowDrawer: false,
    };
  },
  actions: {
    toogleDrawer() {
      this.isShowDrawer = !this.isShowDrawer;
    },
  },
});
