// Animate review cards on scroll
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.review-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0) scale(1)";
            }
        });
    }, {
        threshold: 0.2
    });
    cards.forEach(card => observer.observe(card));
});