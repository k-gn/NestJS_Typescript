async function getName() {
    return "mike";
    // return Promise.resolve("mike")
    // throw new Error("err..")
}

getName()
.then(name => console.log(name))
.catch(err => console.log(err));


async function getName2(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(name);
        }, 1000)
    })
}

async function showName() {
    try {
        // const result = await getName2('mike') // 기다렷다가 할당
        const result = await Promise.all([getName("mike"), getName2("tom")] ) // 기다렷다가 할당
        console.log(result);
    } catch (error) {
        console.log(error);        
    }
}

showName()
