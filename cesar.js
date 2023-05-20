let dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

export default function cesar(str, key){

    let s = "";

    for(let i =0; i< str.length; i++){
        if(dictionary.includes(str[i]))
        s =s+dictionary[(dictionary.indexOf(str[i])+key)% (dictionary.length)];
        else
        s= s+str[i];
    }


    return s

}

