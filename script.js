function aumentarFoto() {
    const foto = document.getElementById("minha-foto");
    foto.style.transform = foto.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
}
