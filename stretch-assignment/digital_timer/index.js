const ms = document.querySelectorAll(".digit")
const refresh = setInterval(refreshTimer, 10);
const digits = document.querySelector('.digits');

const newDiv = document.createElement('p');
newDiv.textContent = "Wait for the top of the minute for the counter to start again...This is V1 and I am lazy"


function refreshTimer() {
    let d = new Date();
    if (d.getSeconds() > 9) {
        ms[3].textContent = 1;
        ms[4].textContent = 0;
        ms[3].style.color="red";
        ms[4].style.color="red";
        digits.append(newDiv);
    } else {
        ms[3].textContent = 0;
        ms[4].textContent = d.getSeconds();
        ms[3].style.color="black";
        ms[4].style.color="black";
        newDiv.style.display = "none";
    }
}

