<script setup lang="ts">
import { usePosts } from "@jcamp/vitepress-blog-theme";

const data = usePosts();
</script>

<template>
  <a :href="data.posts[0].url" :title="data.posts[0].title">{{
    data.posts[0].title
  }}</a>
</template>
