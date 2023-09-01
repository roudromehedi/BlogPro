<script setup>
import MenuItem from '@/components/Header/MenuItem.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-white shadow py-4 font-hind">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-sm font-medium text-pink-500">
        <span class="text-green-800 font-bold text-3xl">BlogPro </span>
      </h1>
      <ul class="flex gap-1 text-green-700 font-semibold">
        <MenuItem>
          <RouterLink to="/"> হোম </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'library', params: { id: '1' } }"> লাইব্রেরি </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'history', params: { id: '2' } }"> ইতিহাস </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'sport', params: { id: '3' } }"> খেলাধুলা </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'bangladesh', params: { id: '4' } }"> বাংলাদেশ </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'world', params: { id: '5' } }"> বিশ্ব </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'book', params: { id: '6' } }"> বই ও সিনেমা </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'science', params: { id: '7' } }"> বিজ্ঞান </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'biography', params: { id: '8' } }"> জীবনী </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'life', params: { id: '9' } }"> লাইফস্টাইল </RouterLink>
        </MenuItem>
        <MenuItem>
          <RouterLink :to="{ name: 'fable', params: { id: '10' } }"> উপকথা </RouterLink>
        </MenuItem>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
