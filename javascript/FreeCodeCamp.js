let count = 0;

function cc(card) {
  // Only change code below this line
 
  if (card = 10 || 'J' || 'Q' || 'K' || 'A') {
    count--;    
  }
 else if (card = 2 || 3 || 4 || 5 || 6) {
    count++;    
  }

  var action = 'Hold'
  if (count > 0) {
    action = 'Bet'
  }


  return count + " " + action;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');