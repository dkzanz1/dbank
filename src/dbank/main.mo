import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 23456789;

  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));

  public func topUp(amount: Nat) {
    currentValue += amount; 
     Debug.print(debug_show(currentValue));
  };

  //Allow the user to subtract an amount from the current value
  //decrease current value by that amount
   public func withDraw(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;}
      else {
         Debug.print( "Amount too large currentValue is less than zero" );
         }
  };
  //query allow the data to be checked upomn rather than update which tAke longer
  public query func checkBalance():async Nat {
    return currentValue;
  }
  } 
 
//  topUp();

 
