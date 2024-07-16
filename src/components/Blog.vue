<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(["blog"]);

const blog = ref(props.blog)
</script>

<template>
    <div class="card">
        <div class="card-header">
            <span class="fw-bold">{{ blog.titel }}</span>
        </div>
        <div class="card-body">
            <div class="content-container mb-3">
                <p class="class-text font-monospace">{{ blog.content }}</p>
            </div>

            <p class="class-text"><span class="fw-bold">Author:</span> {{ blog.author }}</p>
        </div>
    </div>
</template>

<style scoped>
.content-container {
    max-height: 25vh;
    overflow-y: auto;
}
</style>