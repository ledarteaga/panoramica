<template>
  <NuxtLayout name="ygency">
    <!-- Services Page About Area start -->
    <section class="service-page-about py-130 rpy-100 rel z-1">
      <div class="container">
        <div class="row gap-90 align-items-center justify-content-end">
          <div class="col-xl-5">
            <div class="about-content mb-35 wow fadeInUp delay-0-2s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">¿Qué Hacemos?</span>
                <h2>Soluciones a medida para tu negocio</h2>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="row">
              <div class="content">
                <p>
                  Somos un equipo dedicado a ayudarte a alcanzar tus metas
                  financieras. A través de un análisis detallado de tu situación
                  actual y tus objetivos a largo plazo, desarrollamos
                  estrategias personalizadas para optimizar tus finanzas y
                  asegurar tu futuro financiero.
                </p>
                <ul class="list-style-three pt-15 pb-25">
                  <li>Planificación Financiera</li>
                  <li>Gestión de Deudas</li>
                  <li>Análisis Financiero</li>
                  <li>Educación Financiera</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="image pt-30 wow fadeInUp delay-0-2s">
              <img
                src="/public/assets/images/banner/finanzas-banner.webp"
                alt="About"
              />
            </div>
          </div>
        </div>
      </div>

      <span class="big-text">Finanzas</span>
    </section>
    <!-- Services Page About Area end -->

    <!-- Service Style Two start -->
    <section class="service-two-area pt-90 rpt-45 pb-100 rpb-70">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7">
            <div class="row">
              <div class="col-xl-10">
                <div class="section-title mb-30 wow fadeInRight delay-0-2s">
                  <span class="sub-title mb-15">¿Qué Ofrecemos?</span>
                  <h2>Transforma tus finanzas</h2>
                  <div class="text pt-20">
                    Descubre como nuestras propuestas de solución pueden mejorar
                    tu estrategia financiera
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-2s">
              <div class="icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h5>Tranquilidad Financiera</h5>
              <p>
                Asegura la liquidez de la empresa para la atención de proyectos
                de innovación, crecimiento y expansión.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-4s">
              <div class="icon">
                <i class="fa-solid fa-piggy-bank"></i>
              </div>
              <h5>Flujo de caja saludable</h5>
              <p>
                Mantener un flujo de caja saludable, permite a tu empresa cubrir
                sus gastos y aprovechar oportunidades de negocios e inversión.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-2s">
              <div class="icon">
                <i class="fa-solid fa-brain"></i>
              </div>
              <h5>Mejora la toma de decisiones</h5>
              <p>
                Adquiere los conocimientos necesarios para tomar decisiones
                financieras inteligentes y evitar errores costosos.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-4s">
              <div class="icon">
                <i class="fa-solid fa-money-bill-trend-up"></i>
              </div>
              <h5>Crecimiento económico</h5>
              <p>
                Impulsa tu crecimiento económico a través de estrategias de
                inversión personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Style Two end -->

    <!-- Headline area start -->
    <!-- <div class="headline-area bgc-primary pt-80 pb-65">
      <div class="container-fluid">
        <div class="headline-wrap marquee">
          <span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Planificación</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Educación</b>
            </span>
            <span class="marquee-item">
              <i class="fas fa-star-of-life"></i>
              <b>Gestión</b>
            </span>
           
          </span>
        </div>
      </div>
    </div> -->
    <!-- Headline Area end -->

    <!-- FAQ's Area start -->
    <section class="faq-area pt-90 rpt-55 pb-130 rpb-75 rel z-1">
      <div class="container">
        <div class="row align-items-center gap-100">
          <div class="col-lg-5">
            <div class="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
              <img
                src="/public/assets/images/banner/team-banner-1.webp"
                alt="FAQs"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="faq-content-part wow fadeInRight delay-0-2s">
              <div class="section-title mb-60">
                <span class="sub-title mb-15">¿Tienes Dudas?</span>
                <h2>Preguntas Frecuentes</h2>
              </div>
              <div class="accordion" id="faq-accordion">
                <div class="accordion-item">
                  <h5 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      ¿Qué es un plan financiero?
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Un plan financiero es un documento personalizado que
                        detalla tus objetivos financieros, tu situación actual y
                        las estrategias que implementarás para alcanzar tus
                        metas.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header">
                    <button
                      class="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      ¿Cómo puedo reducir mis deudas?
                    </button>
                  </h5>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faq-accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Existen varias estrategias para reducir tus deudas, como
                        consolidar tus deudas, negociar con tus acreedores y
                        crear un presupuesto.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header">
                    <button
                      class="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      ¿Cuáles son los beneficios de la educación financiera?
                    </button>
                  </h5>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        La educación financiera te permite ahorrar dinero,
                        invertir de manera inteligente y alcanzar tus metas
                        financieras a largo plazo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-shapes">
        <img
          class="shape left"
          src="/assets/images/shapes/ellipse-left.png"
          alt="Shape"
        />
        <img
          class="shape right"
          src="/assets/images/shapes/ellipse-right.png"
          alt="Shape"
        />
      </div>
    </section>
    <!-- FAQ's Area end -->

    <!-- Work With Area start -->
    <section class="work-with-area pb-150 rpb-145 rel z-1">
      <div class="container">
        <div class="row justify-content-center pb-45 rpb-25">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-title mb-15">Trabaja con Nosotros</span>
              <h2>Escribenos tu problema y te enviamos una cotización</h2>
              <NuxtLink
                @click="toggleSidebar"
                class="explore-more text-center mt-30"
              >
                <i class="fas fa-arrow-right"></i> <span>Ver Más</span>
              </NuxtLink>
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
