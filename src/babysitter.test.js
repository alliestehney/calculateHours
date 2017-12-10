import {getPaid} from './babysitter';

describe("", function() {
	it("starts no earlier than 5pm", function() {
		expect(getPaid(17)).toEqual(true);
	});
});