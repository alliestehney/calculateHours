// input hours (24 hour clock) and get paid for work

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
	if (checkStart(start) === true && checkEnd(end) === true) {
		const earlyHours = bedtime - start;
		const laterHours = 24 - bedtime;
		const latestHours = 0 + end;
		return ((earlyHours*12) + (laterHours*8) + (latestHours*16));
	} else {
		return false;
	}
}