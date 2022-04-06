function setQuery(value) {
    return {
      type: "set",
      payload: value
    };
  }
 
  // function resetquery(){
  //   return{
  //     type: "reset",
  //     payload:''
  //   }
  // }
  
  export { setQuery};