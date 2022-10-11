<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <div class="w-screen h-screen overflow-scroll no-scrollbar bg-black">
        <NavBar />
        <RouterView />
    </div>
</template>
