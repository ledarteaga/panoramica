<template>
  <NuxtLayout name="ygency">
    <PageBanner :pageName="'Nuestro Equipo'" />
    <!-- Skill Area start -->
    <section class="skill-area py-130 rpt-100 rpb-60 rel z-1">
      <div class="container container-1210">
        <div class="row gap-120 align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="skill-image wow fadeInUp delay-0-2s">
              <img src="/assets/images/team/skill-left.png" alt="Skill" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="skill-content pt-40 rpt-60 wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">Best Skills</span>
                <h2>We Have Lot’s Experience and Professionals</h2>
              </div>
              <p>
                Similique sunin culpa qui officia deserunt mollitia animi est
                laborum et dolorum fuga. Et harum quidem rerum facilis esty
                expedita distinctioam nobis est eligendi optio cumquey
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
        <div class="row justify-content-center">
          <div class="col">
            <div class="team-member style-two member-1 wow fadeInUp delay-0-2s">
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
            <div class="team-member style-two member-2 wow fadeInUp delay-0-3s">
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
            <div class="team-member style-two member-3 wow fadeInUp delay-0-4s">
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
            <div class="team-member style-two member-4 wow fadeInUp delay-0-5s">
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
