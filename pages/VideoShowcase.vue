<template>
  <div class="video-area-two rel z-1">
    <div class="container-fluid">
      <div class="video-part style-two wow fadeInUp delay-0-2s">
        <img :src="thumbnail" alt="Video" />
        <a :href="video" class="mfp-iframe video-play"
          ><i class="fas fa-play"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  video: {
    type: String,
    default: "https://www.youtube.com/embed/9Y7ma241N8k",
  },
  thumbnail: {
    type: String,
    default: "/assets/images/video/video-two-bg.jpg",
  },
});
</script>
