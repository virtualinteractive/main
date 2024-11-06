// Example for interactivity - sidebar navigation
document.querySelectorAll(".sidebar ul li").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".sidebar ul li").forEach((li) => {
            li.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// Additional JavaScript can be added as required for links and other interactivity.
