document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactUs-Form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const token = "7317534517:AAGc_xjKku8_hwLmuTDrMHyoUhHZ9X-E8JY";
        const chatId = "6005215116";

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const comment = document.getElementById("comment").value;

        if (!name || !email || !subject || !comment) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        
        const mensagem = `📌 Novo email do portifolio recebido:\n\n👤 Nome: ${name}\n✉️ Email: ${email}\n📝 Assunto: ${subject}\n💬 Comentário: ${comment}`;
        
        
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: mensagem
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Mensagem enviada com sucesso!");
                location.reload();
            } else {
                alert("Erro ao enviar mensagem.");
                location.reload();
            }
        })
        .catch(error => console.error("Erro:", error));
    });
});
