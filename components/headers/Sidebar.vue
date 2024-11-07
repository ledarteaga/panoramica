<template>
  <!--Form Back Drop-->
  <div class="form-back-drop" @click="toggleSidebar()"></div>

  <!-- Hidden Sidebar -->
  <section class="hidden-bar">
    <div class="inner-box text-center">
      <div class="cross-icon" @click="toggleSidebar()">
        <span class="fa fa-times"></span>
      </div>
      <div class="title">
        <h4>Déjanos tu mensaje</h4>
      </div>

      <!--Appointment Form-->
      <div class="appointment-form">
        <form ref="form" method="post" @submit.prevent="sendEmail">
          <div class="form-group">
            <input
              type="text"
              name="user_name"
              value=""
              placeholder="Nombre"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="user_email"
              value=""
              placeholder="Correo"
              required
            />
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="Mensaje" rows="5"></textarea>
          </div>
          <div class="form-group">
            <button :disabled="sending" type="submit" class="theme-btn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!--End Hidden Sidebar -->
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";
const toast = useToast();
const form = ref();
const config = useRuntimeConfig();
const sending = ref(false);

const toggleSidebar = () => {
  document.querySelector("body")?.classList.remove("side-content-visible");
};

const sendEmail = () => {
  sending.value = true;

  emailjs
    .sendForm("service_tw9z286", "template_qtb6ggn", form.value, {
      publicKey: config.public.emailToken,
    })
    .then(
      () => {
        toast.add({
          severity: "success",
          summary: "Enviado",
          detail: "Tu mensaje ha sido enviado correctamente",
          life: 3000,
        });

        toggleSidebar();
      },
      (error) => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "Ocurrio un error al enviar el mensaje",
          life: 3000,
        });

        console.error(error);
      }
    )

    .finally(() => {
      sending.value = false;
    });
};
</script>
