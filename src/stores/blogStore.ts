import type IBlog from "@/Interfaces/IBlog";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { toast } from "vue3-toastify";
import { v4 as uuidv4 } from "uuid"

export const useBlogStore = defineStore('blogStore', () => {
    const blogs = reactive(Array<IBlog>());

    const createBlog = (formData : IBlog) : void  => {
        formData.id = uuidv4();
        formData.author = formData.author || "Anonym";

        if (!validateBlogFormData(formData)) {
            toast.error("Titel oder Inhalt leer!", { autoClose: 3000 });
            return;
        }

        blogs.unshift({...formData});
        saveBlog();

        toast.success("Blog erstellt", { autoClose: 3000 });
    }

    const loadAllBlogs = () : void => {
        const json = localStorage.getItem("blogs")
        if (!json) return;

        for (let blog of JSON.parse(json)) {
            blogs.push(blog);
        }

        console.log(blogs)
    }

    const saveBlog = () : void => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }

    const validateBlogFormData = (formData : IBlog) : boolean => {
        return formData.titel !== '' && formData.content !== ''
    }

    return {
        createBlog,
        loadAllBlogs,

        blogs
    };
});
