<template>
  <NuxtLayout name="ygency" :header="1" :footer="1">
    <!-- Hero Section Start -->
    <section class="hero-area pt-185 rpt-150 rel z-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="hero-content wow fadeInLeft delay-0-2s">
              <h1>Consultora <span>Creativa</span> <i>Integral</i></h1>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="hero-right-image mt-20 wow fadeInUp delay-0-4s"></div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-15">
        <div class="hero-bottom-image">
          <img src="/assets/images/hero/index-bg.webp" alt="Hero" />
          <div class="hero-social">
            <a href="#"
              ><i class="fab fa-facebook-f"></i> <span>Facebook</span></a
            >
            <a href="#"><i class="fab fa-twitter"></i> <span>Twitter</span></a>
            <a href="#"
              ><i class="fab fa-dribbble"></i> <span>Dribbble</span></a
            >
            <a href="#"><i class="fab fa-behance"></i> <span>Behance</span></a>
          </div>
        </div>
      </div>
      <!-- <div class="hero-bg">
        <img src="/assets/images/hero/hero-bg.png" alt="lines" />
      </div> -->
    </section>
    <!-- Hero Section End -->

    <!-- Quienes Somos start -->
    <section class="about-area pt-130 rpt-100 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-9">
            <div class="about-content wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">Qué Hacemos</span>
                <h2>Ayudamos a tu negocio a lograr su máximo potencial</h2>
              </div>
              <div class="content">
                <p>
                  Nuestro servicio empieza desde el asesoramiento, la
                  estrategia, creación e implementación de planes de crecimiento
                  para tu negocio, en áreas como marketing, finanzas, gestión
                  humana y empresarial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Quienes Somos end -->

    <!-- Que Hacemos start -->
    <section class="what-we-do-area pt-130 rpt-80 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-6 col-lg-8">
            <div class="what-we-do-content mb-55">
              <div class="section-title mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15 text-capitalize"
                  >Nuestros Servicios</span
                >
                <h2>Todo lo que podemos hacer juntos</h2>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-3s">
                <div class="number">
                  <span>01</span>
                </div>
                <div class="content">
                  <h5>Marketing y Comunicaciones</h5>
                  <p>
                    Usamos el mundo digital para conectar tu marca con las
                    personas correctas en el momento adecuado.
                  </p>
                  <NuxtLink class="read-more style-two" href="about-marketing"
                    ><span>Ver Más</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-5s">
                <div class="number">
                  <span>02</span>
                </div>
                <div class="content">
                  <h5>Gestión Humana, Empresarial</h5>
                  <p>
                    Soluciones enfocadas en ayudar a las empresas a gestionar y
                    potenciar su talento, optimizando la gestión de personal y
                    mejorando sus estrategias y procesos.
                  </p>
                  <NuxtLink class="read-more style-two" href="about-humanos"
                    ><span>Ver Más</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
              <div class="what-we-do-item wow fadeInUp delay-0-7s">
                <div class="number">
                  <span>03</span>
                </div>
                <div class="content">
                  <h5>Soluciones Financieras</h5>
                  <p>
                    Con planificación estratégica, optimizamos tus recursos y
                    ayudamos a tomar mejores decisiones para garantizar un
                    futuro sólido a tu negocio.
                  </p>
                  <NuxtLink class="read-more style-two" href="about-finanzas"
                    ><span>Ver Más</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5">
            <div
              class="what-we-do-image mb-55 wow fadeInRight delay-0-2s"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Que Hacemos end -->

    <!-- Headline area start -->
    <div class="headline-area pt-130 rpt-85 rpb-20 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span>Marketing <span>Finanzas</span> RRHH</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- Quienes Somoms start -->
    <section class="team-area pt-130 rpt-40">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div
              class="section-title text-center mb-55 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Conocenos</span>
              <h2>Nuestro Equipo</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div
          class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center"
        >
          <div class="col">
            <div class="team-member member-1 wow fadeInUp delay-0-2s">
              <div class="image">
                <!-- <img src="/assets/images/team/member1.png" alt="Team Member" /> -->
              </div>
              <div class="content">
                <h4>Claudia Fung</h4>
                <span>Marketing</span>
              </div>
              <div class="btn-social">
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member member-2 wow fadeInUp delay-0-3s">
              <div class="image">
                <!-- <img src="/assets/images/team/member2.png" alt="Team Member" /> -->
              </div>
              <div class="content">
                <h4>Jorge Arteaga</h4>
                <span>Comunicador</span>
              </div>
              <div class="btn-social">
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member member-3 wow fadeInUp delay-0-4s">
              <div class="image">
                <!-- <img
                  src="/assets/images/team/member3.png"
                  class="h-100"
                  alt="Team Member"
                /> -->
              </div>
              <div class="content">
                <h4>Corina Montoya</h4>
                <span>RRHH</span>
              </div>
              <div class="btn-social">
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member member-4 wow fadeInUp delay-0-5s">
              <div class="image">
                <!-- <img src="/assets/images/team/member4.jpeg" alt="Team Member" /> -->
              </div>
              <div class="content">
                <h4>Rodrigo Merizalde</h4>
                <span>Economista</span>
              </div>
              <div class="btn-social">
                <div class="social-style-two">
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Quienes Somoms end -->

    <!-- Marcas start -->
    <section class="service-three-area pt-130 pb-100 rpt-40 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <h2>Marcas que confiaron en nuestro talento</h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-10 col-xl-11 px-0">
            <div class="client-logo-wrap gap-xl-3 ml-5 pl-5">
              <template v-for="_ of 3">
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/project-timeline1.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/project-timeline2.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/project-timeline3.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/sangucheria-22.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/aval-herrera.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/Rodizio Scheveningen Logo.png  "
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/Logo MB blanco.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/LOGO 500 GRADOS blanco.png"
                    alt="Project TimeLine Image"
                  />
                </span>
              </template>
            </div>
            <div class="client-logo-wrap gap-xl-4">
              <template v-for="_ of 3">
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/SAPIENS_logo blanco.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/LOGO CALLAO_blanco.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/Santos logo bruin_zwart.png"
                    alt="Project TimeLine Image"
                  />
                </span>
                <span class="client-logo-item" href="contact">
                  <img
                    src="/assets/images/projects/mayta.png"
                    alt="Project TimeLine Image"
                  />
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Marcas Three end -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ygencyUtilits } from "~/utilits";

onMounted(() => {
  ygencyUtilits.counterUp();
});
</script>
