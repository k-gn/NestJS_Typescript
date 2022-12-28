let num = 0;

function showTime() {
    console.log(num++);
    if (num > 2) {
        clearInterval(tId)
    }
}

const tId = setInterval(showTime, 1000)



setTimeout(showTime, 5000)