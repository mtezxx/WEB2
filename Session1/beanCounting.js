function countChar(string, ch){
    let count= 0
    for(let i=0; i< string.length; i++){
        if(string[i]== ch){
            count +=1
        }
    }
    return count;
}

function countBs(string){
    return countChar(string, "B")
}

console.log(countBs("BBCC"))
console.log(countChar("hhhhsssasahh", "h"))