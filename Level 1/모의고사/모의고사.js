
let arr = [2,1,2,3,2,4,2,5,1,2,3,4,3,3,4,1,2,3,4,5,1,2,3,4,5];

let  my =solution(arr);
console.log(my);
function solution(answers) {
    console.log(answers);
    let answer = []
    const user1 = [1,2,3,4,5]
    const user2 = [2,1,2,3,2,4,2,5]
    const user3 = [3,3,1,1,2,2,4,4,5,5]
    const count =[0,0,0]
    for(let i =0; i<answers.length; i++){

        if(user1[i%user1.length] === answers[i]){
            count[0] ++
        }
        if(user2[i%user2.length] === answers[i]){
            count[1] ++
        }
        if(user3[i%user3.length] === answers[i]){
            count[2] ++
        }
    }

    let maxCount =Math.max(count[0],count[1],count[2])
    count.forEach((curr,idx)=>{
        if(curr === maxCount){
            answer.push(idx+1)
        }
    })
    console.log(count)
    return answer
}

