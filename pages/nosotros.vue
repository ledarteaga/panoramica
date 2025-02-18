<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Nuestro Equipo'" />
    <!-- Skill Area start -->
    <section class="skill-area py-130 rpt-100 rpb-60 rel z-1">
      <div class="container container-1210">
        <div class="row gap-120 align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="skill-image wow fadeInUp delay-0-2s">
              <img
                src="/public/assets/images/banner/team-banner-3.webp"
                alt="Skill"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="skill-content pt-40 rpt-60 wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <h2>Un Equipo con amplio conocimiento y dedicación</h2>
              </div>
              <p>
                Cada miembro de nuestro equipo conoce su campo y se dedica
                diariamente a mejorar su desempeño en él para ofrecer siempre el
                mejor servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Skill Area end -->

    <!-- Team Area start -->
    <section
      class="team-page-area pt-130 rpt-100 pb-70 rpb-40 rel"
      style="background-image: url(assets/images/hero/hero-two-bg.png)"
    >
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div
              class="section-title text-center mb-55 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Miembros</span>
              <h2>Conoce nuestro equipo de profesionales</h2>
            </div>
          </div>
        </div>
        <TeamRow></TeamRow>
      </div>
    </section>
    <!-- Team Area end -->

    <!-- Work With Area start -->
    <section class="work-with-area pt-100 pb-150 rpb-145 rel z-1">
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
  name: "team",
};
</script>
