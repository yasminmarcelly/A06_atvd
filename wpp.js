document.getElementById('btn-enviar').addEventListener("click", () => {
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('msg').value;
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`;
    window.open(link);
})