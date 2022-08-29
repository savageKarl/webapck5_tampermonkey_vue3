import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isShowSetupPanel: false,
    
  }),
  actions: {
    toggleSetupPanel(): void {
      this.isShowSetupPanel = !this.isShowSetupPanel;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
