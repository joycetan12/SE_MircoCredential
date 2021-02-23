function ageCalculator(){
  var arr = [];
  arr.push(prompt("What is your name?")); // arr[0] - name
  arr.push(prompt("What is your birth month?(1/2/3/4/5/6/7/8/9/10/11/12)")); // arr[1] - birth month
  arr.push(prompt("What is your birth date?")); // arr[2] - birth date
  arr.push(prompt("What is your birth year?")); // arr[3] - birth year
  arr.push(prompt("What is the future month?(1/2/3/4/5/6/7/8/9/10/11/12)")); // arr[4] - future month
  arr.push(prompt("What is the future date?")); // arr[5] - future date
  arr.push(prompt("What is the future year?")); // arr[6] - future year
  arr.push(arr[6] - arr[3]); // arr[7] - age if birthday passed already in future year

  // future month > birth month then birthday already passed in the future year
  if(arr[4] > arr[1]){
    var text = "Hi, " + arr[0] + ". Your birthday is " + arr[1] + "/" + arr[2] + "/" + arr[3] + ". In the future date of " + arr[4] + "/" + arr[5] + "/" + arr[6] + " you will be " + arr[7] + " years old."
  }
  // future month == birth month, check future date vs birth date to determine if birthday has already passed for the future year
  else if(arr[4] == arr[1]){
    // future date >= birth date then birthday already passed in the future year
    if(arr[5] >= arr[2]){
      var text = "Hi, " + arr[0] + ". Your birthday is " + arr[1] + "/" + arr[2] + "/" + arr[3] + ". In the future date of " + arr[4] + "/" + arr[5] + "/" + arr[6] + " you will be " + arr[7] + " years old."
    }
    // future date < birth date then birthday has not passed in the future year
    else{
      var text = "Hi, " + arr[0] + ". Your birthday is " + arr[1] + "/" + arr[2] + "/" + arr[3] + ". In the future date of " + arr[4] + "/" + arr[5] + "/" + arr[6] + " you will be " + (arr[7]-1) + " years old."
    }
  }
  // future month < birth month then birthday has not passed in the future year
  else{
    var text = "Hi, " + arr[0] + ". Your birthday is " + arr[1] + "/" + arr[2] + "/" + arr[3] + ". In the future date of " + arr[4] + "/" + arr[5] + "/" + arr[6] + " you will be " + (arr[7]-1) + " years old."
  }

  document.getElementById("first").innerHTML = text;
}
