
var num, su, du, res, exp, arg;

if(process.argv[2] !== undefined && process.argv[3] !== undefined && process.argv[5] !== undefined){
    num=process.argv[2];
    // Avoid too short variable names. I guess `su` stands for `source unit` but I am not sure.
    // Readers of your code should not have to do such guessing.
    su=process.argv[3];
    du=process.argv[5];



    exp=true;
    arg=true;
    res="";

    res+=num+" "+su+" are ";


    if(isNaN(num)===true){
        exp=false;
    }

    switch(su){
        case "m":
                switch(du){
                    case "cm": num*=100;
                        break;
                    case "mm":  num*=1000;
                        break;
                    case "m":
                        break;
                    default: exp=false;
                }
            break;
        case "cm":
                switch(du){
                    case "m": num/=100;
                        break;
                    case "cm":
                        break;
                    case "mm":  num*=10;
                        break;
                    default: exp=false;
                }
            break;
        case "mm":
                switch(du){
                    case "cm": num/=10;
                        break;
                    case "m":  num/=1000;
                        break;
                    case "mm":
                        break;
                    default: exp=false;
                }
            break;
        case "kg":
            switch(du){
                case "g": num*=1000;
                    break;
                case "kg":
                    break;
                default: exp=false;
            }
            break;
        case "g":
                switch(du){
                    case "kg": num/=1000;
                        break;
                    case "g":
                        break;
                    default: exp=false;
                }
            break;
        default: exp=false;
    }


    if(process.argv[4] !== "to" || process.argv[6] !== undefined ){
        earg=false;
    }

    if(isNaN(num)===true){
        exp=false;
    }

    if(exp===true && arg===true){
        res+=num+" "+du;
    }else{
        if(arg===false){
            res="Invalid parameters";
        }else{
            // Consider printing the requested `Invalid parameters` message here to turn some additional tests green.
            res="instructions: use <number> <unit> to <unit> (e.g. 5 m to mm)";
        }
        
    }

    console.log(res);

}else{
    // Consider printing the requested `Invalid parameters` message here to turn some additional tests green.
    res="instructions: use <number> <unit> to <unit> (e.g. 5 m to mm)";
    console.log(res);
}
