<template>
  <NuxtLayout name="ygency">
    <!-- Page Banner Section Start -->
    <section
      class="page-banner pt-210 rpt-150 pb-25 rel z-1"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1
              class="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s"
            >
              Soluciones Financieras
              <img
                class="mxw-10 leaf"
                src="/assets/images/banner/leaf.png"
                alt="Leaf"
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Page Banner Section End -->

    <!-- Services Page About Area start -->
    <section class="service-page-about py-130 rpy-100 rel z-1">
      <div class="container">
        <div class="row gap-90 align-items-center">
          <div class="col-lg-6">
            <div class="service-about-image rmb-55 wow fadeInUp delay-0-2s">
              <img src="/assets/images/about/work-with-us.jpg" alt="About" />
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 mx-xl-auto">
            <div class="about-content wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">Que Ofrecemos</span>
                <h2>Soluciones a medida para tu negocio</h2>
              </div>
              <div class="content">
                <p>
                  Un departamento de finanzas sólido es clave para el éxito de
                  tu negocio. Con profesionales gestionando eficientemente tus
                  recursos, puedes optimizar ganancias, minimizar riesgos y
                  tomar decisiones estratégicas con mayor confianza. En
                  PANORÁMICA CONSULTING nos especializamos en planificación
                  financiera, educación fiscal y gestión de deudas para ayudarte
                  a iniciar o mejorar las finanzas de tu proyecto.
                </p>
                <ul class="list-style-three pt-15 pb-25">
                  <li>Planificación Financiera y Fiscal</li>
                  <li>Gestión de Deudas</li>
                  <li>Analisis Financiero</li>
                  <li>Educación Financiera</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services Page About Area end -->
  </NuxtLayout>
</template>

<script>
export default {
  name: "service-details",
};
</script>
