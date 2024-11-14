import "./style.css"

const res = await fetch("./data.json");
const days = await res.json()

const daysElement = document.querySelector(".days");
days.forEach(element => {
    const str = `<li class="day" id="${element.day}">
    <div class="shape ${element.amount<=50?"blue":"green"}" style="height:${element.amount*2}px"></div><span>${element.day}</span></li>`;
    daysElement.insertAdjacentHTML("beforeend",str)
});
console.log(days)