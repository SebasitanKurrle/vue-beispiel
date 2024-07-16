import type ILogInForm from "@/Interfaces/ILogInForm";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const isAdmin = ref(false);

    return {
        isAdmin
    }
});
