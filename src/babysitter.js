// input hours and get paid for work
// using a 24 hour clock

export function checkStart(start) {
	if (start >= 17) {
		return true;
	} else {
		return false;
	}
}

export function checkEnd(end) {
	if (end <= 4) {
		return true;
	} else {
		return false;
	}
}

export function calculateHours(start, end, bedtime) {
	
}