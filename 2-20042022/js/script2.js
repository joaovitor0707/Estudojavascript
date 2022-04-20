function repeticao1() {
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
}
function galeria() {
  const miniatura = document.getElementById("miniatura");
  const painel = document.getElementById("painel");
  for (var i = 1; i <= 5; i++) {
    miniatura.innerHTML += "<img src=img/Foto" + i + ".jpg id=Foto" + i + ">";
  }
  abrirNoPainel();
}
function abrirNoPainel() {
  document.getElementById("Foto1").onclick = function () {
    painel.innerHTML = "<img src=img/Foto1.jpg>";
  };

  document.getElementById("Foto2").onclick = function () {
    painel.innerHTML = "<img src=img/Foto2.jpg>";
  };

  document.getElementById("Foto3").onclick = function () {
    painel.innerHTML = "<img src=img/Foto3.jpg>";
  };

  document.getElementById("Foto4").onclick = function () {
    painel.innerHTML = "<img src=img/Foto4.jpg>";
  };

  document.getElementById("Foto5").onclick = function () {
    painel.innerHTML = "<img src=img/Foto5.jpg>";
  };
}
