<template>
  <NuxtLayout name="ygency">
    <!-- Page Banner Section Start -->
    <section class="page-banner pt-210 rpt-150 pb-75 rel z-1 opacity-25">
      <div class="container container-1290">
        <div class="row">
          <div class="col-lg-12">
            <h1
              class="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s"
            >
              Corp Fung
            </h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Page Banner Section End -->

    <div class="d-flex justify-content-center">
      <VideoShowcase
        thumbnail="/assets/images/projects/corp-fung-thumbnail.png"
        video="https://drive.google.com/file/d/1W6lfhrZ33VsRAj8-7mIOM0Subtjnf0Il/preview"
      />
    </div>

    <!-- Project Details Content Area start -->
    <section class="project-details-area pt-80 rel z-1">
      <div class="container container-1290">
        <hr />
        <div class="row pt-50 pb-70 wow fadeInUp delay-0-2s">
          <div class="col-lg-4">
            <h3 class="title mb-30">El Reto</h3>
          </div>
          <div class="col-lg-8">
            <div class="big-letter text">
              Corp Fung es una empresa familiar con 3 décadas de trayectoria,
              dentro de rubro naval, se ha ganado su espacio entre los mejores
              astilleros del país, mientras que su comunicación en redes no
              reflejaba el crecimiento que había tenido durante tanto tiempo.
              <br />
              En el año 2022, Panorámica Consulting inicia sus servicios
              planteando una estrategia que transformaría la comunicación de la
              empresa a través de sus redes sociales, proponiendo un tono más
              profesional y educativo, partiendo de que su audiencia objetivo es
              B2B. Entendiendo la complejidad de los servicios que ofrece Corp
              Fung, decidimos comunicar mas sobre la empresa a través de
              proyectos audiovisuales, mostrando los resultados de cada
              embarcación que reparan o construyen, así como la participación de
              los implicados en cada proyecto.
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <VideoShowcase
            thumbnail="/assets/images/projects/corp-fung-wide-thumbnail-2.png"
            video="https://drive.google.com/file/d/1jiC4sMhB49LQrxvzjjp2o_MLpKWZ0orj/preview"
          />
        </div>

        <div class="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
          <div class="col-lg-4">
            <h3 class="title mb-30">El Resultado</h3>
          </div>
          <div class="col-lg-8">
            <div class="text">
              Corp Fung pasó de ser una pequeña empresa familiar y a ser uno de
              los referentes del rubro en el país, con un lenguaje de
              comunicación totalmente profesional y corporativo, respaldando la
              trayectoria y experiencia que posee.
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
    <!-- Project Details Content Area End -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import VideoShowcase from "./VideoShowcase.vue";
</script>
