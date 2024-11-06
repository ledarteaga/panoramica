<template>
  <div class="video-area-two rel z-1">
    <div>
      <div class="video-part style-two wow fadeInUp delay-0-2s">
        <img :src="thumbnail" alt="Video thumbnail" />
        <a @click="visible = true" class="mfp-iframe video-play"
          ><i class="fas fa-play"></i
        ></a>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="visible" class="c-modal" modal content-class="h-100">
    <iframe
      class="mx-auto d-block container-fluid h-100"
      allow="autoplay fullscreen"
      :src="video"
    ></iframe>
  </Dialog>
</template>

<script setup lang="ts">
const visible = ref(false);

defineProps({
  video: {
    type: String,
    default: "https://www.youtube.com/embed/9Y7ma241N8k",
  },
  thumbnail: {
    type: String,
    default: "/assets/images/video/video-two-bg.jpg",
  },
  portrait: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="sass">

.c-modal
  height: 80%
  width: 80vw

  @media (max-width: 768px)
    height: 45%
    width: 80vw
</style>
