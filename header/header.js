function header(elHeader) {
  const divComponentHeader = document.createElement("header");
  divComponentHeader.className = "header";

  const main = document.querySelector(".main");

  elHeader.insertBefore(divComponentHeader, main);
}
