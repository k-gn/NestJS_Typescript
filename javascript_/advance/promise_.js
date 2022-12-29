/*
    new Promise((resolve, reject) => {

    })
*/

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("OK")
        // reject(new Error('err...'))
    }, 1000)
})

// pr.then(
//     function(result) {
//         console.log(result);
//     },
//     function(err) {
//         console.log(err);
//     }
// );

pr.then(
    function(result) {
        console.log(result);
    }
).catch(
    function(err) {
        console.log(err);
    }
).finally(
    function() {
        console.log("end");
    }
);

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문");
        }, 1000)
    })
}

const f2 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // rej("2번 주문 실패");
            res("2번 주문")
        }, 3000)
    })
}


const f3 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문");
        }, 2000)
    })
}

// 각각 실행
f1()
.then(res => f2(res))
.then(res => f3(res))
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => {
    console.log("end");
})

// promise all - 한번에 실행 / 예외 시 어떤 데이터도 주지 않음 => 다 보여주거나 아예 안보여줄 때 사용
Promise.all([f1(), f2(), f3()])
.then(res => console.log(res))

// 경주 (하나라도 끝나면 아예 끝낸다.)
Promise.race([f1(), f2(), f3()])
.then(res => console.log(res))