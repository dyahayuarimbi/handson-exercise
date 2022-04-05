function setQuery(value) {
    return {
      type: "set",
      payload: value
    };
  }
  
  function resetQuery(value) {
    return {
      type: "reset",
      payload: value
    };
  }
  
  export { setQuery, resetQuery };  