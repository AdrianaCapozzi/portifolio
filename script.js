// ===== Foto que aumenta ao clicar =====
function aumentarFoto() {
  const foto = document.getElementById('minha-foto');
  foto.style.transform =
    foto.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
}
document.getElementById('minha-foto').addEventListener('click', aumentarFoto);

// ===== Saudação baseada no horário =====
function saudacaoHorario() {
  const hora = new Date().getHours();
  if (hora < 12) return "Bom dia, visitante!";
  if (hora < 18) return "Boa tarde, visitante!";
  return "Boa noite, visitante!";
}

// ===== Hover em foto e navbar =====
function aplicarHoverZoom(selector) {
  const elementos = document.querySelectorAll(selector);
  elementos.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.1)";
      el.style.transition = "transform 0.3s ease";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });
}
aplicarHoverZoom("#minha-foto, .navbar button, .navbar a");

// ===== Dark mode =====
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===== Slideshow Congressos =====
let slideIndex = 0;
function mostrarSlides() {
  const slides = document.querySelectorAll(".slide-congresso");
  slides.forEach(s => (s.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 4000);
}
mostrarSlides();

// ===== Carrossel Projetos =====
let projetoIndex = 0;
function mostrarProjetos(n) {
  const projetos = document.querySelectorAll(".projeto");
  projetos.forEach(p => (p.style.display = "none"));
  projetoIndex += n;
  if (projetoIndex >= projetos.length) projetoIndex = 0;
  if (projetoIndex < 0) projetoIndex = projetos.length - 1;
  projetos[projetoIndex].style.display = "block";
}
document.getElementById("seta-esq").addEventListener("click", () => mostrarProjetos(-1));
document.getElementById("seta-dir").addEventListener("click", () => mostrarProjetos(1));
mostrarProjetos(0);

// ===== Tooltips =====
function aplicarTooltip(selector, texto) {
  const elemento = document.querySelector(selector);
  if (elemento) elemento.setAttribute("title", texto);
}
aplicarTooltip("#minha-foto", "Since 1985");
aplicarTooltip("#youtube-link", "Assista");
aplicarTooltip("#linkedin-link", "LinkedIn");
aplicarTooltip("#github-link", "GitHub");
aplicarTooltip("#email-link", "E-mail");

// ===== Quiz =====
const botaoQuiz = document.getElementById("botao-quiz");
if (botaoQuiz) {
  botaoQuiz.addEventListener("click", () => {
    const resposta = confirm("Você gostou de passar por aqui?");
    if (resposta) {
      alert("Que bom! 😊 Obrigada pela visita!");
    } else {
      alert("Poxa, vou melhorar então! 🙏");
    }
  });
}

// ===== Popup de boas-vindas =====
window.addEventListener("load", () => {
  const popup = document.getElementById("popup-boasvindas");
  const mensagem = document.getElementById("mensagem-saudacao");
  const botaoSim = document.getElementById("popup-sim");
  const botaoNao = document.getElementById("popup-nao");

  if (popup && mensagem && botaoSim && botaoNao) {
    mensagem.textContent = saudacaoHorario();
    popup.style.display = "flex";

    botaoSim.addEventListener("click", () => {
      alert("Que bom que você gostou! Se quiser, me mande um e-mail com a sua opinião 😊");
      popup.style.display = "none";
    });

    botaoNao.addEventListener("click", () => {
      alert("Poxa, vou melhorar então. Se quiser, me mande um e-mail com a sua opinião e, se tiver, sugestão de melhoria 🙏");
      popup.style.display = "none";
    });
  }
});
