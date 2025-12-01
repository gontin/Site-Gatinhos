const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function(e) {
  e.preventDefault()
  const mensagem = encodeURIComponent(document.getElementById("mensagem").value)
  const url = `https://wa.me/5581985550906?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank")
});