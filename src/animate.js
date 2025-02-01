const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('hidden')) {
            entry.target.classList.add('show');
        }

        if (entry.isIntersecting && entry.target.classList.contains('slide-right')) {
            entry.target.classList.add('slide-now');
        }


    });
});


const homeTitle = document.querySelectorAll('.hidden');
homeTitle.forEach((el) => observer.observe(el));


const homeSlide = document.querySelectorAll('.slide-right');
homeSlide.forEach((el) => observer.observe(el));