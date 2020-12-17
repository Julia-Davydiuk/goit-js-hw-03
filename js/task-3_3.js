const findBestEmployee = function(employees) {
    const values = Object.values(employees);
    let maxValue = values[0];
    console.log(values);

    for(let i = 1; i < values.length; i += 1) {
     if(values[i] > maxValue)
     maxValue = values[i];
    }
    return maxValue;
  };
  

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux