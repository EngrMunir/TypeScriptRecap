{
    // type assertion
    let anything:any;
    anything ="Next Level Web Development";
    anything = 222;
    (anything as number)
}

const kgToGm = (value:string | number): string | number |undefined =>{
    if( typeof value ==='string'){
        const convertedData = parseFloat(value)*1000;
    }
    if(typeof value ==="number"){
        return value*1000;
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;
}