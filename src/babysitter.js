// input hours and get paid for work
// using a 24 hour clock

export function getPaid(start, end) {
	if (start >= 17) {
		return true;
	} else {
		return false;
	}
}