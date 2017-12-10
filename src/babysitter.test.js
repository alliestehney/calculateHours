import {checkStart} from './babysitter';
import {checkEnd} from './babysitter';
import {calculateHours} from './babysitter';

describe("", function() {
	it("starts no earlier than 5pm", function() {
		expect(checkStart(17)).toEqual(true);
	});

	it("starts no earlier than 5pm", function() {
		expect(checkStart(13)).toEqual(false);
	});

	it("starts no earlier than 5pm", function() {
		expect(checkStart(19)).toEqual(true);
	});

	it("ends no later than 4am", function() {
		expect(checkEnd(5)).toEqual(false);
	});

	it("ends no later than 4am", function() {
		expect(checkEnd(3)).toEqual(true);
	});

	it("ends no later than 4am", function() {
		expect(checkEnd(7)).toEqual(false);
	});

	it("ends at 11PM -- no later than 4am", function() {
		expect(checkEnd(23)).toEqual(true);
	});

	it("get paid 12$/hr from start time to bedtime", function() {
		expect(calculateHours(18, 2, 20)).toEqual(24+32+32);
	});

	it("get paid 12$/hr from start time to bedtime", function() {
		expect(calculateHours(18, 2, 22)).toEqual(48+16+32);
	});

	it("get paid 8$/hr from bedtime to midnight", function() {
		expect(calculateHours(18, 2, 20)).toEqual(24+32+32);
	});

	it("get paid 8$/hr from bedtime to midnight", function() {
		expect(calculateHours(18, 2, 23)).toEqual(60+8+32);
	});

	it("get paid 16$/hr from midnight to end", function() {
		expect(calculateHours(18, 2, 23)).toEqual(60+8+32);
	});

	it("get paid 16$/hr from midnight to end", function() {
		expect(calculateHours(17, 3, 19)).toEqual(24+40+48);
	});

	// should still fail if end is after 5am
	it("get paid 16$/hr from midnight to end", function() {
		expect(calculateHours(17, 5, 19)).toEqual(false);
	});
});