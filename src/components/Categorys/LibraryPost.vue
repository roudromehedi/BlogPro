<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PostCard from '@/components/PostCard.vue'
const loading = ref(false)

const catPost = ref('')
const route = useRoute()
async function getCatPost(id) {
  const url = 'https://basic-blog.teamrabbil.com/api/post-list/'
  const response = await axios.get(url + id)
  catPost.value = response.data
}
onMounted(() => {
  loading.value = true
  getCatPost(route.params.id)
  loading.value = false
})
</script>

<template>
  <section class="bg-gray-200 pb-16">
    <div class="container mx-auto">
      <h1
        class="text-center py-10 text-4xl font-hind font-bold underline underline-offset-[13px] text-indigo-700 decoration-dotted decoration-indigo-700"
      >
        <slot>লাইব্রেরি পোস্ট</slot>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-5">
        <div v-if="loading" class="col-span-full flex pt-28 justify-center h-screen">
          <img class="w-56 h-56" src="../../assets/loading%20(2).gif" alt="" />
        </div>
        <section
          v-else
          v-for="post in catPost"
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
