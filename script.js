let support = document.querySelector(".support")

support.addEventListener("click", function name(params) {
    let chat_ai = document.getElementById("chat-ai")
    let chat_admin = document.getElementById("chat-admin")

    chat_ai.classList.toggle("chat-ai-move")
    chat_admin.classList.toggle("chat-admin-move")
})


let open_chat_ai = document.getElementById("open-chat-ai")
let pages_chat_ai = document.getElementById("pages-chat-ai")
open_chat_ai.addEventListener("click", function name(params) {
    open_chat_ai.style.display = "block"
})
