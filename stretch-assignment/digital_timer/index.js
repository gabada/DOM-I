const ms = document.querySelectorAll(".digit")
const refresh = setInterval(refreshTimer, 10);


function refreshTimer() {
    let d = new Date();
    if (d.getSeconds() > 9) {
        ms[3].textContent = 1;
        ms[4].textContent = 0;
        ms[3].style.color="red";
        ms[4].style.color="red";
    } else {
        ms[3].textContent = 0;
        ms[4].textContent = d.getSeconds();
        ms[3].style.color="black";
        ms[4].style.color="black";
    }
}