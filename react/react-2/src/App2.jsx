import React from "react";
import Heading from "./Heading";
import Heading2 from "./Heading2";
// import youtuber from "./Vari" ; // we are import variable using this methods
// import youtuber , { youtuber2 } from "./Vari" ; // whener we are import more then one variable then we are use this methods
// import youtuber , { youtuber2 , Heading3 } from "./Vari" ;  // we are also import function whener their are not defaults and we are more then 2 import things
import * as ques from "./Vari" ;

function App2(){

    return (

        // <><Heading2></Heading2><Heading/>{youtuber}{youtuber2}{Heading3()}</> // whener we are import any variable form different files then we are print their value using this method ( write into { } )
        // we are also call import function here using this methods
        <><Heading2></Heading2><Heading/>{ques.default}{ques.youtuber2}{ques.Heading3()}{ques.add(10,3)}</> // whener we are import all the things using * then we are use this methods to print all the things
    );

}

export default App2;

// app is not running i think due to app.js