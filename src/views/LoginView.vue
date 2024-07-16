<script setup lang="ts">
import type ILogInForm from '@/Interfaces/ILogInForm';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';

// Stores
const userStore = useUserStore();

const logInForm = ref<ILogInForm>({
    username: '',
    password: ''
});

</script>

<template>
    <div class="mt-3 border p-3">
        <h4>Admin Login</h4>

        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Benutzername:</label>
                <input type="text" class="form-control" id="username">
            </div>

            <div>
                <label for="password" class="form-label">Passwort:</label>
                <input type="password" class="form-control" id="password">
            </div>

            <button class="btn btn-primary w-25 mt-3">Login</button>
        </form>
    </div>
</template>

<style scoped></style>