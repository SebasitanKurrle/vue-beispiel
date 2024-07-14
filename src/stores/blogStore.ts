import type IBlog from "@/Interfaces/IBlog";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { toast } from "vue3-toastify";

export const useBlogStore = defineStore('blogStore', () => {
    const blogs = reactive(Array<IBlog>());

    const createBlog = (formData : IBlog) : void  => {
        formData.author = formData.author || "Anonym";

        if (!validateBlogFormData(formData)) {
            toast.error("Titel oder Inhalt leer!", { autoClose: 3000 })
            return;
        }

        blogs.push({...formData})

        console.log(blogs)

        toast.success("Blog erstellt", { autoClose: 3000 })
    }

    const validateBlogFormData = (formData : IBlog) : boolean => {
        return formData.titel !== '' && formData.content !== ''
    }

    return {
        createBlog
    };
});
