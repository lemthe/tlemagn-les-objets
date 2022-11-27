function ageValidator(object){
    if (Object.prototype.hasOwnProperty.call(object, 'age')){
        for (const [key, value] of Object.entries(object)) {
              if (`${key}`== "age"){
                const valeur = Number(`${value}`);
                if (Number.isInteger(valeur)){
                    if ((`${value}`>150)||(`${value}`<0)){
                        console.log("false");
                      }else{                    
                        console.log("true");
                      }
                } else {
                    console.log("false");
                }          
              }
          }
    } 
}

//ageValidator({ age: 43, firstName: "James", lastName: "Bond"});

module.exports=ageValidator;

