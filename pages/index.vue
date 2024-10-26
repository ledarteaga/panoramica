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
            <div class="hero-right-image mt-20 wow fadeInUp delay-0-4s">
              <!-- <img src="/assets/images/hero/hero-right.png" alt="Hero" /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-15">
        <div class="hero-bottom-image">
          <img src="/assets/images/hero/office-bg.webp" alt="Hero" />
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
      <div class="hero-bg">
        <img src="/assets/images/hero/hero-bg.png" alt="lines" />
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Us Area start -->
    <section class="about-area pt-130 rpt-100 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <!-- <div class="col-xl-5 col-lg-3">
            <div class="about-image rmb-45 wow fadeInUp delay-0-2s">
              <img
                src="/assets/images/about/circle-text.svg"
                alt="Circle Text"
              />
            </div>
          </div> -->
          <div class="col-xl-7 col-lg-9">
            <div class="about-content wow fadeInUp delay-0-4s">
              <div class="section-title mb-40">
                <span class="sub-title mb-15">Quienes Somos</span>
                <h2>Ayudamos a marcas a alcanzar su máximo potencial.</h2>
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
    <!-- About Us Area end -->

    <!-- What We Do start -->
    <section class="what-we-do-area pt-90 rpt-80 rel z-1">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-8">
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
                    El motor estratégico que impulsa un negocio, conectando tu
                    marca con las personas correctas en el momento adecuado. En
                    Panorámica Consulting usamos el mundo digital para crear
                    esta conexión, utilizando herramientas que maximizan el
                    alcance y potencian tus ventas para un crecimiento
                    sostenible.
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
                  <h5>Gestión Humana, Empresarial y Administrativa</h5>
                  <p>
                    Una consultora de recursos humanos brinda una variedad de
                    soluciones enfocadas en ayudar a las empresas a gestionar y
                    potenciar su talento, optimizando la gestión de personal y
                    mejorando sus estrategias y procesos.
                  </p>
                  <NuxtLink class="read-more style-two" href="service-details"
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
                    Ordenamos y transformamos tus finanzas en oportunidades de
                    crecimiento. Con planificación estratégica, optimizamos tus
                    recursos y ayudamos a tomar mejores decisiones para
                    garantizar un futuro sólido a tu negocio.
                  </p>
                  <NuxtLink class="read-more style-two" href="about-finanzas"
                    ><span>Ver Más</span> <i class="far fa-arrow-right"></i
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
              <!-- <img
                src="/assets/images/about/work-with-us.jpg"
                alt="What We Do"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- What We Do end -->

    <!-- Corporative start -->
    <section class="service-three-area pt-70 rpt-40 rel z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Nuestros Clientes</span>
              <h2>Marcas que confiaron en nosotros</h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-10 col-xl-11 px-0">
            <div class="client-logo-wrap gap-4 gap-xl-5">
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
              <!-- <span class="client-logo-item" href="contact">
                <img
                  src="/assets/images/projects/tequenos.png"
                  alt="Project TimeLine Image"
                />
              </span> -->
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Corporate Three end -->

    <!-- Team Area start -->
    <section class="team-area pt-70 rpt-40">
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
    <!-- Team Area end -->

    <!-- Headline area start -->
    <div class="headline-area pt-90 rpt-85 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span>Marketing <span>Finanzas</span> RRHH</span>
        </div>
      </div>
    </div>
    <!-- Headline Area end -->
    <!-- Pricing style three start -->
    <!-- <section class="pricing-area-three pt-85">
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Pricing Package</span>
              <h2>Best Pricing Package For All Web Design Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
            <div
              class="pricing-banner"
              style="
                background-image: url(assets/images/background/pricing-banner-bg.jpg);
              "
            >
              <span class="join-us">Join With Us</span>
              <h4>Amazing Pricing For Growth Business</h4>
              <NuxtLink class="details-btn" href="pricing"
                ><i class="far fa-arrow-right"></i
              ></NuxtLink>
              <div class="hand-shape">
                <img
                  src="/assets/images/shapes/pricing-banner-hand-shape.png"
                  alt="Pricing Banner Shape"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
            <div
              class="pricing-plan-item style-three"
              style="
                background-image: url(assets/images/shapes/pricing-plan-bg.png);
              "
            >
              <div class="icon-title">
                <div class="icon">
                  <img src="/assets/images/icons/price.svg" alt="Icon" />
                </div>
                <h5>Monthly Package</h5>
              </div>
              <p>
                We denounce with righteous indignation dislike beguiled and
                demoralize
              </p>
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <div class="price-offer">
                <span class="price-text"
                  ><span class="before">$</span
                  ><span class="price">18.3</span></span
                >
                <img src="/assets/images/shapes/right-arrow.png" alt="Arrow" />
                <span class="offer-text">Save 15%</span>
              </div>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 wow fadeInUp delay-0-6s">
            <div
              class="pricing-plan-item style-three"
              style="
                background-image: url(assets/images/shapes/pricing-plan-bg.png);
              "
            >
              <div class="icon-title">
                <div class="icon">
                  <img src="/assets/images/icons/price.svg" alt="Icon" />
                </div>
                <h5>Yearly Package</h5>
              </div>
              <p>
                We denounce with righteous indignation dislike beguiled and
                demoralize
              </p>
              <ul class="list-style-one">
                <li>Landing Page Design</li>
                <li>Web Development</li>
                <li>SEO Optimizations</li>
                <li>Mobile Applications Design</li>
                <li>Quality Assurance</li>
                <li>Customs Services</li>
              </ul>
              <div class="price-offer">
                <span class="price-text"
                  ><span class="before">$</span
                  ><span class="price">18.3</span></span
                >
                <img src="/assets/images/shapes/right-arrow.png" alt="Arrow" />
                <span class="offer-text">Save 15%</span>
              </div>
              <NuxtLink href="pricing" class="theme-btn w-100"
                >Choose Package <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Pricing style three end -->

    <!-- Why Choose Us Area start -->
    <!-- <section class="why-choose-area pt-90 rpt-60 rel z-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-7">
            <div class="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
              <img
                src="/assets/images/services/why-choose-left.jpg"
                alt="Why Choose Left Image"
              />
            </div>
          </div>
          <div class="col-xl-5">
            <div class="why-choose-two-wrap">
              <div class="section-title mb-55 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Why Choose Us</span>
                <h2>We Provide Services In One Places</h2>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-3s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                  <span class="icon-bottom-shape"></span>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="service-details"
                      >Competitive Rates</NuxtLink
                    >
                  </h4>
                  <p>
                    We denounce with righteous indignation and dislike beguiled
                    demoralized charms
                  </p>
                </div>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-5s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                  <span class="icon-bottom-shape"></span>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="service-details"
                      >No Contracts Needed</NuxtLink
                    >
                  </h4>
                  <p>
                    To take trivial example, which eundertakes laborious
                    physical exercise except
                  </p>
                </div>
              </div>
              <div class="why-choose-item-two wow fadeInUp delay-0-7s">
                <div class="icon">
                  <i class="fas fa-check"></i>
                </div>
                <div class="content">
                  <h4>
                    <NuxtLink href="service-details"
                      >Powerful Terminal Lines</NuxtLink
                    >
                  </h4>
                  <p>
                    At vero eos et accusamus eto dignissimos duc blanditiis
                    praesentium volupta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Why Choose Us Area end -->

    <!-- Headline area start -->
    <!-- <div class="headline-area pt-60 rpt-50 rel z-1">
      <div class="container-fluid">
        <div class="headline-text marquee">
          <span><span>clients</span> Say’s</span>
        </div>
      </div>
    </div> -->
    <!-- Headline Area end -->

    <!-- Testimonial Area start -->
    <!-- <SlidersTestimonial /> -->
    <!-- Testimonial Area end -->

    <!-- Blog Style Two start -->
    <!-- <section class="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
      <div class="container container-1290">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div
              class="section-title text-center mb-60 wow fadeInUp delay-0-2s"
            >
              <span class="sub-title mb-20">Blog & News</span>
              <h2>Read Our Latest News & Blog Get Every Updates</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="blog-item wow fadeInUp delay-0-2s">
              <div class="image">
                <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
              </div>
              <ul class="blog-meta">
                <li>
                  <i class="far fa-calendar-alt"></i>
                  <a href="#">February 18, 2023</a>
                </li>
                <li>
                  <i class="far fa-comments"></i>
                  <a href="#">Comment (5)</a>
                </li>
              </ul>
              <hr />
              <h4>
                <NuxtLink href="blog-details"
                  >Voice Skills For Google Assistant And Amazon Alexa</NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="blog-details"
                >Ver Más <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item wow fadeInUp delay-0-4s">
              <div class="image">
                <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
              </div>
              <ul class="blog-meta">
                <li>
                  <i class="far fa-calendar-alt"></i>
                  <a href="#">February 18, 2023</a>
                </li>
                <li>
                  <i class="far fa-comments"></i>
                  <a href="#">Comment (5)</a>
                </li>
              </ul>
              <hr />
              <h4>
                <NuxtLink href="blog-details"
                  >Inclusive Design And Accessibility Stream Heydon
                  Pickering</NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="blog-details"
                >Ver Más <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="blog-item wow fadeInUp delay-0-6s">
              <div class="image">
                <img src="/assets/images/blog/blog3.jpg" alt="Blog" />
              </div>
              <ul class="blog-meta">
                <li>
                  <i class="far fa-calendar-alt"></i>
                  <a href="#">February 18, 2023</a>
                </li>
                <li>
                  <i class="far fa-comments"></i>
                  <a href="#">Comment (5)</a>
                </li>
              </ul>
              <hr />
              <h4>
                <NuxtLink href="blog-details"
                  >Creating Online Environments The Work Well For Older
                  Users</NuxtLink
                >
              </h4>
              <NuxtLink class="read-more" href="blog-details"
                >Ver Más <i class="far fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Blog Style Two end -->
  </NuxtLayout>
</template>

<script>
import { ygencyUtilits } from "~/utilits";
import StaticsticsRow from "./StaticsticsRow.vue";
import ServieceDetailShowcaseRow from "./ServieceDetailShowcaseRow.vue";

export default {
  name: "index",
  mounted() {
    ygencyUtilits.counterUp();
  },
  components: { StaticsticsRow, ServieceDetailShowcaseRow },
};
</script>
