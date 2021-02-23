function getInfo(){
  var x = document.getElementById("form1");
  var text = "Hi, " + x.elements[0].value + ". You will have " + x.elements[1].value + " children in the future. You will live in " + x.elements[2].value + " and you will be married to " + x.elements[3].value + ".";
  c = confirm("Do you want to see your future?");
  if(c){
    document.getElementById("second").innerHTML = text;
  }
  else{
    document.getElementById("second").innerHTML = "";
    alert("You chose to not continue. You will not see your future.");
  }
}

function getVolume(){
  var r = prompt("Enter the radius of the cylinder: ");
  var h = prompt("Enter the height of the cylinder: ");
  var volume = Math.PI * r * r * h;
  c = confirm("Do you want to see the answer?");
  if(c){
    document.getElementById("third").innerHTML = "cylinder volume = " + volume;
  }
  else{
    document.getElementById("third").innerHTML = "";
    alert("You chose to not continue. The answer will not print.");
  }
}

function getQuadratic(){
  var a = prompt("Enter the a value: ");
  var b = prompt("Enter the b value: ");
  var c = prompt("Enter the c value: ");;
  var discriminant = b * b - 4 * a * c;
  var root1 = (-b + Math.sqrt(discriminant))/(2*a);
  var root2 = (-b - Math.sqrt(discriminant))/(2*a);
  c = confirm("Do you want to see the answer?");
  if(c){
    document.getElementById("first").innerHTML = "x1 = " + root1 + " , x2 = " + root2;
  }
  else{
    document.getElementById("first").innerHTML = "";
    alert("You chose to not continue. The answer will not print.");
  }
}
