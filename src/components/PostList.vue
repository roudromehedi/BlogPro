<script setup>
import PostCard from '@/components/PostCard.vue'
import axios from 'axios'
import { ref } from 'vue'
const posts = ref('')
const loading = ref(false)
async function getAllPost() {
  loading.value = true
  const response = await axios.get('https://basic-blog.teamrabbil.com/api/post-list/1')
  posts.value = response.data
  loading.value = false
}
getAllPost()
</script>

<template>
  <section class="bg-gray-200">
    <div class="container mx-auto">
      <h1
        class="text-center py-10 text-4xl font-hind font-bold underline underline-offset-[13px] text-indigo-700 decoration-dotted decoration-indigo-700"
      >
        <slot>সকল পোস্ট</slot>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-5">
        <div v-if="loading" class="col-span-full flex pt-28 justify-center h-screen">
          <div>Loading......</div>
          >
        </div>
        <section
          v-else
          v-for="post in posts"
          :key="post"
          class="bg-white max-w-sm rounded-lg shadow shadow-white p-2 font-hind ring ring-indigo-200 hover:ring-indigo-500 duration-300"
        >
          <PostCard>
            <template #postImage>
              <img class="rounded-t pb-3" :src="post.img" />
            </template>
            <template #postTitle>
              {{ post.title }}
            </template>
            <template #postShot>
              {{ post.short }}
            </template>
          </PostCard>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
