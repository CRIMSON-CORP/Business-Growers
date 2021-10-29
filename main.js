const stars = document.querySelectorAll(".star_icon");
const works = document.querySelectorAll(".work_icon");
const email = document.querySelector(".email_icon");
const ham = document.querySelector("span.fas.fa-bars");
const nav = document.querySelector("nav ul");
const fetch_star = fetch("/img/star.svg").then((res) => res.text());
const fetch_work = fetch("/img/work.svg").then((res) => res.text());
const fetch_email = fetch("/img/email.svg").then((res) => res.text());
stars.forEach(async (star) => {
    star.innerHTML = await fetch_star;
});
works.forEach(async (work) => {
    work.innerHTML = await fetch_work;
});

(async function () {
    email.innerHTML = await fetch_email;
})();

ham.addEventListener("click", () => {
    nav.classList.toggle("open");
    ham.classList.contains("fa-bars")
        ? ham.classList.replace("fa-bars", "fa-times")
        : ham.classList.replace("fa-times", "fa-bars");
});

// gsap
let count_img = 0;
let count_quote = 0;
const mobile = window.innerWidth < 500;
const targets = document.querySelectorAll(".img_wrapper img.hero_img");
const quote = document.querySelectorAll("#hero .quote p");
gsap.set(targets, { xPercent: -10, opacity: 0, scale: mobile ? 1.6 : 1.3 });
gsap.set(targets[0], { xPercent: mobile ? 0 : -50, opacity: 1, scale: mobile ? 1.6 : 1 });
gsap.set(quote, { xPercent: -10, opacity: 0 });
gsap.set(quote[0], { xPercent: 0, opacity: 1 });

function slideItImage() {
    gsap.to(targets[count_img], { xPercent: -200, duration: 1 });
    count_img = count_img < targets.length - 1 ? ++count_img : 0;
    gsap.fromTo(
        targets[count_img],
        { xPercent: mobile ? 0 : -50, opacity: 0, scale: mobile ? 1.9 : 1.3 },
        { xPercent: mobile ? 0 : -50, opacity: 1, scale: mobile ? 1.6 : 1, duration: 1, delay: 0.5 }
    );
    gsap.to({}, { duration: 5, onComplete: slideItImage });
}
gsap.delayedCall(10, () => slideItImage());

function slideItQuote() {
    gsap.to(quote[count_quote], { xPercent: -100, duration: 1, opacity: 0 });
    count_quote = count_quote < quote.length - 1 ? ++count_quote : 0;
    gsap.fromTo(
        quote[count_quote],
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.to({}, { duration: 5, onComplete: slideItQuote });
}
gsap.delayedCall(10, () => slideItQuote());

const tl = gsap.timeline();

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector("#hero .content");
    const comment = document.querySelectorAll(".img_wrapper .hero_comment");
    const percent = document.querySelectorAll(".img_wrapper .percent");
    const count = document.querySelectorAll(".img_wrapper .review_count");
    const heroImg = document.querySelectorAll(".img_wrapper .hero_img");

    tl.from(content.children, { y: 30, opacity: 0, stagger: 0.5, duration: 1, delay: 1 });
    tl.from(
        [heroImg, percent, count, comment],
        { y: 20, scale: 0.4, opacity: 0, stagger: 0.3, duration: 0.5, ease: "back.out" },
        "-=1.5"
    );
});
