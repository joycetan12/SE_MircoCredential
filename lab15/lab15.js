// creates a ninja
function createNinja(){
  // asks user for info on the ninja
  var ninja = {
    ninjaName: prompt("What is your ninja's name?"),
    beltColor: prompt("What level belt is your ninja?(black, red, green, blue)"),
    powers: prompt("What 3 super powers does your ninja have? (you seperate each power with a coma):").split(",")
  };
  // displays ninja's name
  document.getElementById("ninjaInfo").innerHTML = "Hello, Ninja " + ninja.ninjaName + ". You are a " + ninja.beltColor + " belt with the powers: " + ninja.powers[0] + ", " + ninja.powers[1] + ", " + ninja.powers[2];
  // hides create ninja button and displays the power buttons
  document.getElementById("create").style.display = "none";
  document.getElementById("power1").innerHTML = ninja.powers[0];
  document.getElementById("power1").style.display = "inline-block";
  document.getElementById("power2").innerHTML = ninja.powers[1];
  document.getElementById("power2").style.display = "inline-block";
  document.getElementById("power3").innerHTML = ninja.powers[2];
  document.getElementById("power3").style.display = "inline-block";
  // change background color of ninja image depending on belt color
  if(ninja.beltColor.toLowerCase() == "black"){
    document.getElementById("ninjaImg").style.backgroundColor = "black";
  }
  else if(ninja.beltColor.toLowerCase() == "red"){
    document.getElementById("ninjaImg").style.backgroundColor = "red";
  }
  else if(ninja.beltColor.toLowerCase() == "green"){
    document.getElementById("ninjaImg").style.backgroundColor = "green";
  }
  else if(ninja.beltColor.toLowerCase() == "blue"){
    document.getElementById("ninjaImg").style.backgroundColor = "blue";
  }
  else{
    alert("Belt color must be black, red, green, or blue");
  }
}
