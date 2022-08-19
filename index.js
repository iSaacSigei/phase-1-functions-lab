//function distanceFromHqInBlocks()returns a distance in blocks:

function distanceFromHqInBlocks(someValue) {
    let pickupLocation=42;
    let blocks=someValue-pickupLocation;
    
    if(someValue<42){
        return pickupLocation-someValue;
    }
    return blocks;
  }
  distanceFromHqInBlocks(55)



  //function distanceFromHqInFeet()returns a distance in feetfrom th HeadQuaters:

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let distanceInFeet= distanceFromHqInBlocks(someValue)*264;
    return distanceInFeet;
}
distanceFromHqInFeet(45)


//FunctiondistanceTravelledInFeet returns a distance travveld  in feet:

function distanceTravelledInFeet(start, destination) {
    if(destination>start){
        return (destination-start)*264;
     }
     else{
        return (start-destination)*264
     }
  }
    distanceTravelledInFeet()

//  function calculatesFarePrice(start, destination) returns the fare for the customer
function calculatesFarePrice(start, destination) {
   let distanceTravelled = distanceTravelledInFeet(start, destination);
   if (distanceTravelled < 400) {
     return 0;
   } else if (distanceTravelled < 2000 && distanceTravelled > 400) {
     return 0.02 * (distanceTravelled - 400);
   } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
     return 25;
   } else if (distanceTravelled > 2500) {
     return "cannot travel that far";
   }
 }