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
	if (checkStart(start) === true) {
		const hours = bedtime - start;
		return hours*12;
	}

	if (checkEnd(end) === true) {
		const laterHours = 24 - bedtime;
		console.log(laterHours)
		return laterHours*8;
	}
}