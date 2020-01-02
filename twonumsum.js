// let arr = [];
// function ernum(num) {
//     // console.log(num)
//     if (num < 10) {
//         return arr.push(num);
//     }
//     arr.push(num % 10);
//     // console.log(arr)
//     ernum((num - num % 10) / 10)
//     return arr;
// }
// console.log(ernum(123))
//上面的代码与预期不符，我以为是输入的数字，结果他直接给我数组，呵呵呵
function sum(num1,num2){
    let arr=[];
    if(num1.length&&num2.length){
        var len=num1.length<num2.length?num1.length:num2.length
        for(let i=0;i<len;i++){
            if(num1[i]+num2[i]<10){
                if(arr[i]){
                    arr[i]+=num1[i]+num2[i]
                }else{
                    arr[i]=num1[i]+num2[i]
                }
            }else{
                if(arr[i]){   
                    arr[i]+=(num1[i]+num2[i])%10
                    arr.push(1)
                }else{
                    arr[i]=(num1[i]+num2[i])%10
                }
            }
            // console.log(num1[i]+num2[i])
            console.log(arr[i],"----",arr[i+1])

        }
    }
    return arr
}

[2,4,3]
[5,6,4]
console.log(sum([2,4,3],[5,6,4]))


