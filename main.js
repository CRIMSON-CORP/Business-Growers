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
