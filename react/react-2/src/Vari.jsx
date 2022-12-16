const youtuber = "Thapa technical" ;

export default youtuber; // if we will be not use default and directly use other means normal methods to import and exports then we will be not received any error

// for export variable

const youtuber2 = "Thapa2 technical2" ;

function Heading3(){

    var sendfunvar = " sendfunvar " ;
    return sendfunvar ;

}

function add(a,b){

    var sum = a / b ;
    var sum = sum.toPrecision(2); // this function to we are get fixs 2 digit 
    return sum ;

}

export { youtuber2 , Heading3 , add } ; // we are also import  other variable means in remaning ( only default variable is not allowed and other all variable ) 
// we are also export function using this methodes whener function is not default and more then 2 things export