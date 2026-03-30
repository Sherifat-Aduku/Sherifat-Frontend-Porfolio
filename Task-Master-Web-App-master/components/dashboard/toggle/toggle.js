
document.addEventListener("DOMContentLoaded", () => { 
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");

    if (!sidebar || !toggleBtn) {
        console.error("Sidebar or toggle button not found!");
        return;
    }

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
});
