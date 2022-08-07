function x(a){
    let b="";
    for(let i=a.length-1;i>=0;i--){
    b+=a[i];
    }
    return b
    }
    const string=prompt('Enter a string');
    const y=x(string);
    console.log(y);