<script setup></script>

<template>
  <div class="relative">
    <slot name="postImage"></slot>
  </div>
  <div class="px-2 space-y-3">
    <h3 class="text-2xl font-semibold text-gray-800">
      <slot name="postTitle"></slot>
    </h3>
    <p class="text-sm text-gray-600 text-justify pb-3">
      <slot name="postShot"></slot>
    </p>
  </div>
</template>

<style scoped></style>
