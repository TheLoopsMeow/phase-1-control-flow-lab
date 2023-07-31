function scuberGreetingForFeet(amount){
  // Write your code here!
  if (amount < 400) {
    return 'This one is on me!';
  }
  else if (amount >= 400 && amount < 2000){
    return 'That will be twenty bucks.';
  }
  else if (amount > 2000 && amount <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (amount > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
switch (city) {
  case "NYC": return "Ok, sounds good."
  break;
  default: return 'No go.';
}
}

function switchOnCharmFromTip(stingyTest){
  // Write your code here!'
  if (stingyTest === 'generous') {
    return 'Thank you so much.';
  }
  else if (stingyTest === 'not as generous'){
    return 'Thank you.';
  }
  else if (stingyTest === 'thanks for everything'){
    return 'Bye.';
  }
}

let city = "NYC";
ternaryCheckCity(city);