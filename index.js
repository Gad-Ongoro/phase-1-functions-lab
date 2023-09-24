// Code your solution in this file!
let scuberHq = 42;
function distanceFromHqInBlocks(pickUpLocation) {
	if (pickUpLocation > scuberHq) {
		return (pickUpLocation - scuberHq);
	} else{
		return(scuberHq - pickUpLocation);
	}
}

function distanceFromHqInFeet(pickUpLocation) {
	return ((distanceFromHqInBlocks(pickUpLocation)) * 264);
}

function distanceTravelledInFeet(start, destination) {
	if (start > destination) {
		return ((start - destination) * 264);
	} else if (destination > start) {
		return ((destination - start) * 264);
	}
}

function calculatesFarePrice(start, destination) {
	if (distanceTravelledInFeet(start, destination) <= 400) {
		return (0);
	} else if ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) <= 2000)) {
		return (((distanceTravelledInFeet(start, destination) - 400) * 0.02));
	} else if ((distanceTravelledInFeet(start, destination) > 2000) && (distanceTravelledInFeet(start, destination) <= 2500) ) {
		return (25);
	}
	
	else if (distanceTravelledInFeet(start, destination) > 2500) {
		return("cannot travel that far");
	}
}

console.log(calculatesFarePrice(300, 350))