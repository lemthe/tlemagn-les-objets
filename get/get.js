function get(object, path){
    if (path == ){
        const myArray = Object.values(person);
    }
}

module.exports=get;







let agent = {
    person: {
      name: "bond",
      spy: {
        code: "007"
      }
    }
  };


  get(agent, "person"); // Retournera : {name: "bond", spy: { code: "007" }}
  get(agent, "person.name"); //  Retournera : "bond"
  
  get(agent, "person.name.code"); // Retournera : undefined
  
  get(agent, "person.spy.code"); // Retournera : "007"