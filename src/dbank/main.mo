import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Int "mo:base/Int";

actor DBank {
  stable var currentValue: Float = 300;
  //note that the keyword "stable" creates
  // a persistant variable that remembers state
  // currentValue := 100;

  stable var startTime = Time.now();
  Debug.print(debug_show (startTime));

  let id = 23456789;

  // Debug.print(debug_show(currentValue));
  // Debug.print(debug_show(id));

  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  //Allow the user to subtract an amount from the current value
  //decrease current value by that amount
  public func withDraw(amount : Float) {
    let tempValue : Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
    } else {
      Debug.print("Amount too large currentValue is less than zero");
    };
  };
  //query allow the data to be checked upomn rather than update which tAke longer
  public query func checkBalance() : async Float {
    return currentValue;
  };


//  topUp();
//intial interest amount set to interest at 1 percent per seconds passed by /1 million
public func compound() {
  let currentTime = Time.now();
  let timeElaspedNS = currentTime - startTime;
  let timeElapsedS = timeElaspedNS/1000000000;
  currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
  startTime := currentTime;
  }
};