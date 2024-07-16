<script setup lang='ts'>
import { RouterLink } from "vue-router"
import { useUserStore } from "@/stores/userStore";

// Stores
const userStore = useUserStore();

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">Blog</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'blog-create' }">Neuer Blog</RouterLink>
                    </li>
                    <li class="nav-item" v-if="!userStore.isAdmin">
                        <RouterLink class="nav-link" :to="{ name: 'admin-login' }">Log In</RouterLink>
                    </li>
                    <li class="nav-item" v-if="userStore.isAdmin">
                        <span class="nav-link">Logged In (Admin)</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style></style>