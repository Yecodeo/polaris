/**
 * Check if all object fields are filled
 * @param {*} array 
 */
export default function (array) {
	const arr = array.map(el => {
		let bools = []
		const keys = Object.keys(el);
		keys.map(key => {
			bools.push(Object.keys(el[key]).every(n => n.length == 0));
		})
		return bools;
	}).flat();

	return arr.every(n => n === false);
}