export function capitalize(a){

    return a.charAt(0).toUpperCase()+ a.slice(1);

 
}

export function reverseString(a){
    return  a.split("").reverse().join("");;
}

export function calculate(a,b){

    return {
        a:a,
        b:b,
        add(a=this.a,b=this.b){
            return a+b;
        },
        subtract(a=this.a,b=this.b){
            return a-b
        },
        multiply(a=this.a,b=this.b){
            return a*b;
        },
        divide(a=this.a,b=this.b){

            return a/b;
        }
    };
}