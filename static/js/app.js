document.addEventListener("DOMContentLoaded", () => {
    // Aparición suave de contenido
    document.querySelectorAll(".hero, h1, .card").forEach((el, i) => {
        el.classList.add("fade-in");
        el.style.animationDelay = `${i * 0.12}s`;
    });

    // Filas de tabla escalonadas
    document.querySelectorAll("tbody tr").forEach((fila, i) => {
        fila.classList.add("fade-in");
        fila.style.animationDelay = `${0.3 + i * 0.08}s`;
    });

    // Navbar: sombra al hacer scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("sombra", window.scrollY > 10);
    });

    // Efecto "pulso" al hacer clic en botones
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.add("pulso");
            setTimeout(() => btn.classList.remove("pulso"), 300);
        });
    });
});
