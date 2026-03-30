
document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".expense-tabs .tab");
    const myExpensesSection = document.getElementById("myExpensesSection");
    const aiSummarySection = document.getElementById("aiSummarySection");

    // Default view: My Expenses
    myExpensesSection.classList.remove("hidden");
    aiSummarySection.classList.add("hidden");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // Make the clicked tab active
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Show / hide based on which tab was clicked
            if (tab.dataset.tab === "expenses") {
                myExpensesSection.classList.remove("hidden");
                aiSummarySection.classList.add("hidden");
            } else {
                myExpensesSection.classList.add("hidden");
                aiSummarySection.classList.remove("hidden");
            }
        });
    });

});

document.getElementById("logoutBtn").onclick = () => {
    window.location.href = "/index.html";
};
