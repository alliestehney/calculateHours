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
		expect(checkEnd(4)).toEqual(true);
	});

	it("ends no later than 4am", function() {
		expect(checkEnd(7)).toEqual(false);
	});

	it("get paid 12$/hr from start time to bedtime", function() {
		expect(calculateHours(18, 2, 20)).toEqual(24);
	});

	it("get paid 12$/hr from start time to bedtime", function() {
		expect(calculateHours(18, 2, 22)).toEqual(48);
	});
});