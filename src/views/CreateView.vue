<script setup lang='ts'>
import type IBlog from "../Interfaces/IBlog"
import { useBlogStore } from "../stores/blogStore";
import { ref } from "vue";

const blogStore = useBlogStore();

const formData = ref<IBlog>({
    titel: '',
    content: '',
    author: ''
})

const submitForm = () : void => {
    blogStore.createBlog({...formData.value});

    formData.value.titel = '';
    formData.value.content = '';
    formData.value.author = '';
}
</script>

<template>
    <div class="mt-3">
        <h5>Neuer Blog</h5>

        <hr/>

        <div class="border p-3">
            <form @submit.prevent="submitForm()">
                <div class="mt-3">
                    <label for="titel" class="form-label">Titel *</label>
                    <input type="text" id="titel" class="form-control" v-model="formData.titel">
                </div>

                <div class="mt-3">
                    <label for="content" class="form-label">Inhalt *</label>
                    <textarea id="content" cols="30" rows="10" class="form-control" v-model="formData.content"></textarea>
                </div>

                <div class="mt-3">
                    <label for="author" class="form-label">Auhtor</label>
                    <input type="text" id="author" class="form-control" placeholder="Anonym" v-model="formData.author">
                </div>

                <div class="mt-3">
                    <button class="btn btn-primary w-100">Erstellen</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>