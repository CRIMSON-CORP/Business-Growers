const stars = document.querySelectorAll(".star_icon");
const works = document.querySelectorAll(".work_icon");
const emails = document.querySelectorAll(".email_icon");
const fetch_star = fetch("/img/star.svg").then((res) => res.text());
const fetch_work = fetch("/img/work.svg").then((res) => res.text());
const fetch_email = fetch("/img/email.svg").then((res) => res.text());
stars.forEach(async (star) => {
    star.innerHTML = await fetch_star;
});
works.forEach(async (work) => {
    work.innerHTML = await fetch_work;
});
emails.forEach(async (email) => {
    email.innerHTML = await fetch_email;
});
