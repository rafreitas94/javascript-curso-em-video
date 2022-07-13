function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minutos}`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = "fotomanha.jpg";
    document.body.style.background = "#C98323";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = "fototarde.jpg";
    document.body.style.background = "#778CAB";
  } else {
    //BOA NOITE!
    img.src = "fotonoite.jpg";
    document.body.style.background = "#303030";
  }
}
