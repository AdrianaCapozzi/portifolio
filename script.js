function aumentarFoto() {
  const foto = document.getElementById('minha-foto');
  foto.style.transform =
    foto.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
}
document.getElementById('minha-foto').addEventListener('click', aumentarFoto);

// ---- Saudação baseada no horário ----
function saudacao() {
  const hora = new Date().getHours();
  let mensagem = "Olá, visitante!";
  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia, visitante!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde, visitante!";
  } else {
    mensagem = "Boa noite, visitante!";
  }

  // Mostra pop-up de boas-vindas
  alert(mensagem);

  // Também exibe no site (se tiver um <div id="saudacao"></div>)
  const saudacaoDiv = document.getElementById('saudacao');
  if (saudacaoDiv) {
    saudacaoDiv.textContent = mensagem;
  }
}
window.addEventListener("load", saudacao);

// ---- Imagens que aumentam ao passar o mouse ----
function hoverZoom(element) {
  element.addEventListener("mouseover", () => {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s";
  });
  element.addEventListener("mouseout", () => {
    element.style.transform = "scale(1)";
  });
}

// Aplica ao perfil e botões da navbar
hoverZoom(document.getElementById("minha-foto"));
document.querySelectorAll(".navbar button, .navbar a").forEach(btn => hoverZoom(btn));

// ---- Dark Mode / Light Mode ----
const btnTema = document.getElementById("btn-tema");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    btnTema.textContent = "🌙 Modo Claro";
  } else {
    btnTema.textContent = "☀️ Modo Escuro";
  }
});

// ---- Slideshow de imagens (section congressos) ----
let slideIndex = 0;
function mostrarSlides() {
  const slides = document.querySelectorAll(".congressos-slide");
  slides.forEach(s => s.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 4000); // muda a cada 4s
}
mostrarSlides();

// ---- Carrossel de projetos ----
let projetoIndex = 0;
function mostrarProjeto(index) {
  const projetos = document.querySelectorAll(".projeto");
  projetos.forEach(p => p.style.display = "none");
  if (projetos[index]) projetos[index].style.display = "block";
}
function proxProjeto() {
  const projetos = document.querySelectorAll(".projeto");
  projetoIndex = (projetoIndex + 1) % projetos.length;
  mostrarProjeto(projetoIndex);
}
function antProjeto() {
  const projetos = document.querySelectorAll(".projeto");
  projetoIndex = (projetoIndex - 1 + projetos.length) % projetos.length;
  mostrarProjeto(projetoIndex);
}
document.getElementById("seta-direita").addEventListener("click", proxProjeto);
document.getElementById("seta-esquerda").addEventListener("click", antProjeto);
mostrarProjeto(projetoIndex);

// ---- Tooltips ----
function adicionarTooltip(id, texto) {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute("title", texto);
  }
}
adicionarTooltip("minha-foto", "Since 1985");
adicionarTooltip("youtube-link", "Assista");
adicionarTooltip("linkedin-icon", "LinkedIn");
adicionarTooltip("github-icon", "GitHub");
adicionarTooltip("email-icon", "E-mail");

// ---- Quiz interativo ----
function quiz() {
  const resposta = confirm("Você gostou de passar por aqui?");
  if (resposta) {
    alert("Que bom! Obrigada por visitar 💖");
  } else {
    alert("Vou melhorar para sua próxima visita 😉");
  }
}
document.getElementById("quiz-btn").addEventListener("click", quiz);
