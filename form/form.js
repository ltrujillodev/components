function form(elContact) {
  const divComponentForm = document.createElement("div");
  divComponentForm.className = "form__div";

  divComponentForm.innerHTML = `
  <h2 class="form__title">Contacto</h2>

  <form action="" class="form__fieldset">

    <label class="fieldset__name">
      <div class="fieldset__name--title">NOMBRE</div>
      <input class="fieldset__name--input" name="nombre" type="text" />
    </label>

    <label class="fieldset__email">
      <div class="fieldset__email--title">EMAIL</div>
      <input class="fieldset__email--input" name="email" type="text" />
    </label>

    <label class="fieldset__message">
      <div class="fieldset__message--title">MENSAJE</div>
      <textarea class="fieldset__message--input" name="message" id="" cols="30" rows="10"></textarea>
    </label>

    <div>
      <button class="fieldset__button">Enviar</button>
    </div>

  </form>
  `;
  elContact.appendChild(divComponentForm);
}
