<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBlogStore } from "../stores/blogStore";

// Komponenten
import Blog from "./Blog.vue";

// Stores
const blogStore = useBlogStore();

const currentPage = ref(1);

// Maximale Anzahl von Blogs pro Seite
const blogsPerPage = 4;

const paginatedBlogs = computed(() => {
    const start = (currentPage.value - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    return blogStore.blogs.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(blogStore.blogs.length / blogsPerPage);
});

const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
</script>

<template>
    <div class="mt-3">
        <h3 class="text-center">Neuste Blogs</h3>

        <div class="blog-container">
            <div v-for="blog in paginatedBlogs" :key="blog.id" class="mt-3">
                <Blog :blog="blog" />
            </div>
        </div>

        <div class="pagination">
            <button @click="setPage(currentPage - 1)" :disabled="currentPage === 1">Zurück</button>
            <span>Seite {{ currentPage }} von {{ totalPages }}</span>
            <button @click="setPage(currentPage + 1)" :disabled="currentPage === totalPages">Weiter</button>
        </div>
    </div>
</template>

<style scoped>
.blog-container {
    min-height: 75vh;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.pagination button {
    margin: 0 0.5rem;
    height: 2.5rem;
}

.pagination span {
    line-height: 2.5rem;
}
</style>