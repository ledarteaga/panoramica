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
                <h2>Tu socio estratégico en gestión humana</h2>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="row">
              <div class="content">
                <p>
                  En PANORÁMICA CONSULTING tenemos soluciones integrales en
                  gestión humana y empresarial para negocios que buscan
                  organizar su información administrativa. Optimizamos tus
                  procesos, mejoramos la gestión del talento y potenciamos tus
                  estrategias, permitiendo que te enfoques en lo que más
                  importa: el crecimiento de tu negocio.
                </p>
                <ul class="list-style-three pt-15 pb-25">
                  <li>Gestión de compensaciones y beneficios</li>
                  <li>Reclutamiento y selección</li>
                  <li>Diseño de Estructura Salarial</li>
                  <li>Manuales laborales y contratos</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="image pt-30 wow fadeInUp delay-0-2s">
              <img src="/assets/images/services/humano-bg.jpg" alt="About" />
            </div>
          </div>
        </div>
      </div>

      <span class="big-text">Gestión Humana</span>
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
                    Descubre cómo nuestras soluciones pueden mejorar tu vida
                    financiera
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-2s">
              <div class="icon">
                <i class="fa-solid fa-calculator"></i>
              </div>
              <h5>Gestión de Compensaciones y Beneficios Sin Estrés</h5>
              <p>
                Gestionamos de forma eficiente y precisa todas las
                compensaciones de tu equipo.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-4s">
              <div class="icon">
                <i class="fa-solid fa-filter-circle-dollar"></i>
              </div>
              <h5>Optimización de Costos Laborales</h5>
              <p>
                Te ayudamos a identificar oportunidades de ahorro y a maximizar
                la inversión en tu capital humano.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-2s">
              <div class="icon">
                <i class="fa-solid fa-brain"></i>
              </div>
              <h5>Análisis y Desarrollo de Talento</h5>
              <p>
                Toma decisiones basadas en datos para desarrollar y retener a
                tus mejores talentos.
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="service-item style-two wow fadeInLeft delay-0-4s">
              <div class="icon">
                <i class="fa-solid fa-user-check"></i>
              </div>
              <h5>Reclutamiento y Selección de Talento Clave</h5>
              <p>
                Atraemos y seleccionamos a los mejores candidatos para cubrir
                tus vacantes estratégicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Style Two end -->

    <!-- Headline area start -->
    <div class="headline-area bgc-primary pt-80 pb-65">
      <div class="container-fluid">
        <div class="headline-wrap marquee">
          <span>
            <template v-for="_ of 5">
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
            </template>
          </span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->

    <!-- FAQ's Area start -->
    <section class="faq-area pt-90 rpt-55 pb-130 rpb-75 rel z-1">
      <div class="container">
        <div class="row align-items-center gap-100">
          <div class="col-lg-5">
            <div class="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
              <img src="/assets/images/faqs/faq-two.jpg" alt="FAQs" />
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
                      ¿Qué incluye su servicio de gestión de compensaciones?
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Nuestro servicio incluye cálculo de salarios, gestión de
                        beneficios sociales, declaración de impuestos, etc.
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
                      ¿Qué tipo de perfiles pueden reclutar?
                    </button>
                  </h5>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faq-accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Reclutamos perfiles de todos los niveles, desde
                        operarios hasta ejecutivos, en diversos sectores.
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
                      ¿Qué beneficios tiene realizar un análisis de clima
                      laboral?
                    </button>
                  </h5>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Permite identificar las fortalezas y debilidades de la
                        cultura organizacional, mejorar la satisfacción de los
                        empleados y aumentar la productividad.
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
              <h2>¿Quieres Ver Más? Explora Nuestros Trabajos</h2>
              <NuxtLink href="/portfolio" class="explore-more text-center mt-30"
                ><i class="fas fa-arrow-right"></i>
                <span>Ver Más</span></NuxtLink
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

<script>
export default {
  name: "service-details2",
};
</script>
