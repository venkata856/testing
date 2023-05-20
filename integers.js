export function analyzeArray(arr){

    if(!Array.isArray(arr)){
        console.log("please input the array")
    }

    return {
        average: (arr.reduce((acc,val)=>acc+val,0))/arr.length,
        length:arr.length,
        max:arr.sort((a,b)=>b-a)[0],
        min:arr.sort((a,b)=>a-b)[0],
    };
}