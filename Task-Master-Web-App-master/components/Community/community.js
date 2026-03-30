document.addEventListener("DOMContentLoaded", () => {
    console.log("Community page loaded");
});

document.getElementById("logoutBtn").onclick = () => {
    window.location.href = "/index..html";
};

const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const postsList = document.getElementById("postsList");

postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    if (text === "") return;

    const post = document.createElement("div");
    post.classList.add("post-card");

    post.innerHTML = `
        <div class="post-header">
            <div class="avatar avatar-sm">S</div>
            <strong>Sherifat</strong>
            <span class="time">just now</span>
        </div>

        <div class="post-body">
            <p>${text}</p>
        </div>
    `;

    postsList.prepend(post);
    postInput.value = "";
});
