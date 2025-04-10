// Mensagem de boas-vindas no console
console.log("🍕 Bem-vindo à Pizzaria Verde Sabor!");

// Adiciona rolagem suave ao clicar nos links do menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Evento para destacar e alertar ao clicar em um card do cardápio
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
        alert(`Você selecionou: ${card.querySelector("h3").innerText}`);
        card.classList.add("highlight");

        setTimeout(() => {
            card.classList.remove("highlight");
        }, 1000);
    });
});
