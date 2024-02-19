function loop(start,test,increment,body){
    for(let i = start; test(i); i = increment(i)){
        body(i)
    }
}

loop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)