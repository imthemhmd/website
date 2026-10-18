let support = document.querySelector(".support")

support.addEventListener("click", function name(params) {
    let chat_ai = document.getElementById("chat-ai")
    let chat_admin = document.getElementById("chat-admin")

    chat_ai.classList.toggle("chat-ai-move")
    chat_admin.classList.toggle("chat-admin-move")
})