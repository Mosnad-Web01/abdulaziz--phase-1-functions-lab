// // // Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42; // Scuber headquarters is located on 42nd Street
  const distance = Math.abs(pickupLocation - hqLocation);
  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const distanceInFeet = distanceInBlocks * 264; // Each block is 264 feet long
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(destination - start);
  const distanceInFeet = distanceInBlocks * 264; // Each block is 264 feet long
  return distanceInFeet;
}

// function calculatesFarePrice(start, destination) {
//   const distanceInFeet = distanceTravelledInFeet(start, destination);

//   if (distanceInFeet <= 400) {
//     return 0; // First 400 feet are free
//   } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
//     return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
//   } else if (distanceInFeet >= 2000 && distanceInFeet < 2500) {
//     return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
//   } else {
//     return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
//   }
// }


function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  switch (true) {
    case distanceInFeet <= 400:
      return 0; // First 400 feet are free
    case distanceInFeet > 400 && distanceInFeet < 2000:
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    case distanceInFeet >= 2000 && distanceInFeet < 2500:
      return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
    default:
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
  }
}