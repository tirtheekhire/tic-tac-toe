export default winnerCalculation = (arr) => {
    const combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]



    for (let i=0 ; i<combination.length ; i++) {
        const [a,b,c] = combination[i];
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
            return arr[a]
        }
    }
    return null;
}

const arr = [
    null, null , null,
    x,x,x,
    null,0,0,
]

console.log(winnerCalculation(arr));