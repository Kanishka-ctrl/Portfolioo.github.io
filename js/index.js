document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let skillsSection = document.getElementById("skills-section");
        if (isInViewport(skillsSection)) {
            skillsSection.classList.add("ftco-animate");
        }
    });

    function isInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
});
