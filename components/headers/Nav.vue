<template>
  <ul class="navigation clearfix">
    <li class="dropdown">
      <a href="/">Inicio</a>
      <!-- <ul>
        <li class="dropdown">
          <a href="#">MultiPage</a>
          <ul>
            <li><NuxtLink href="/">Web Design</NuxtLink></li>
            <li><NuxtLink href="/index2">Web Development</NuxtLink></li>
            <li>
              <NuxtLink href="/index3">Creative Design Studio</NuxtLink>
            </li>
            <li><NuxtLink href="/index4">Web Developer</NuxtLink></li>
            <li><NuxtLink href="/index5">Marketing Agency</NuxtLink></li>
            <li><NuxtLink href="/index6">Creative Agency</NuxtLink></li>
          </ul>
          <div v-html="dropdown"></div>
        </li>
        <li class="dropdown">
          <a href="#">OnePage</a>
          <ul>
            <li><NuxtLink href="/index1-onepage">Web Design</NuxtLink></li>
            <li>
              <NuxtLink href="/index2-onepage">Web Development</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/index3-onepage">Creative Design Studio</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/index4-onepage">Web Developer</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/index5-onepage">Marketing Agency</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/index6-onepage">Creative Agency</NuxtLink>
            </li>
          </ul>
          <div v-html="dropdown"></div>
        </li>
      </ul>
      <div v-html="dropdown"></div> -->
    </li>
    <!-- <li><NuxtLink href="/aboutmarketing">Marketing</NuxtLink></li> -->

    <li class="dropdown">
      <NuxtLink href="/about-marketing">Marketing</NuxtLink>
      <ul>
        <li><NuxtLink href="/portfolio">Portfolio</NuxtLink></li>
      </ul>
      <div v-html="dropdown"></div>
    </li>

    <li><NuxtLink href="/about-finanzas">Finanzas</NuxtLink></li>
    <li><NuxtLink href="/about">RRHH</NuxtLink></li>
    <li><NuxtLink href="/about">Nuestro Equipo</NuxtLink></li>
    <!-- Menu Button -->
    <li class="menu-btns">
      <div class="menu-sidebar">
        <button @click="toggleSidebar()">
          <span>Contáctanos</span>
          <!-- <img src="/assets/images/icons/toggler.svg" alt="Toggler" /> -->
        </button>
      </div>
    </li>

    <!-- <li class="dropdown">
      <a href="#">Nuestros Servicios</a>
      <ul>
        <li><NuxtLink href="/services">Our Services</NuxtLink></li>
        <li>
          <NuxtLink href="/service-details">Service Details One</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/service-details2">Service Details Two</NuxtLink>
        </li>
      </ul>
      <div v-html="dropdown"></div>
    </li>
    <li class="dropdown">
      <a href="#">Proyectos</a>
      <ul>
        <li><NuxtLink href="/projects">Project Grid</NuxtLink></li>
        <li><NuxtLink href="/project-list">Project List</NuxtLink></li>
        <li>
          <NuxtLink href="/project-details">Project Details</NuxtLink>
        </li>
      </ul>
      <div v-html="dropdown"></div>
    </li> -->
    <!-- <li class="dropdown">
      <a href="#">blog</a>
      <ul>
        <li><NuxtLink href="/blog">blog Grid</NuxtLink></li>
        <li><NuxtLink href="/blog-standard">blog standard</NuxtLink></li>
        <li><NuxtLink href="/blog-details">blog details</NuxtLink></li>
      </ul>
      <div v-html="dropdown"></div>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      dropdown:
        '<div class="dropdown-btn"><span class="far fa-plus"></span></div>',
    };
  },
  methods: {
    toggleSidebar() {
      document.querySelector("body").classList.add("side-content-visible");
    },
  },
};
</script>
