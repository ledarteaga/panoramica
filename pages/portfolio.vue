<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Nuestros Trabajos'" />
    <!-- Project Grid Area start -->
    <section class="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
      <div class="container container-1210">
        <div class="row gap-110">
          <div class="col-lg-6">
            <div class="project-item">
              <div class="image wow fadeInUp delay-0-2s">
                <img
                  src="/assets/images/projects/portfolio-1.png"
                  alt="Project Grid"
                />
                <NuxtLink href="melange" class="project-btn"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="content wow fadeInUp delay-0-2s">
                <NuxtLink class="category"
                  >Art Direction | Fotografía | Social Media</NuxtLink
                >
                <h2>
                  <NuxtLink href="project-details">Melange</NuxtLink>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-item">
              <div class="image wow fadeInUp delay-0-2s">
                <img
                  src="/assets/images/projects/portfolio-2.png"
                  alt="Project Grid"
                />
                <NuxtLink href="corp-fung" class="project-btn"
                  ><i class="far fa-arrow-right"></i
                ></NuxtLink>
              </div>
              <div class="content wow fadeInUp delay-0-2s">
                <NuxtLink href="projects" class="category"
                  >Art Direction | Fotografía | Social Media | Diseño
                  Gráfico</NuxtLink
                >
                <h2>
                  <NuxtLink href="project-details">Corp <i>Fung</i></NuxtLink>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Project Grid Area end -->

    <!-- Work With Area start -->
    <section class="work-with-area pb-150 rpb-145 rel z-1">
      <div class="container">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Trabaja con Nosotros</span>
              <h2>¿Tienes un proyecto en mente? Dejanos un mensaje</h2>
              <NuxtLink
                @click="toggleSidebar"
                class="explore-more text-center mt-30"
                ><i class="fas fa-arrow-right"></i>
                <span>Escríbenos</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <span class="big-text light-opacity">Trabajemos Juntos</span>
    </section>
    <!-- Work With Area end -->
  </NuxtLayout>
</template>

<script setup lang="ts">
const toggleSidebar = () => {
  document.querySelector("body")?.classList.add("side-content-visible");
};
</script>
