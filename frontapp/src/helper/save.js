import toaster from '../helper/toaster';
import axios from 'axios';

/**
 * push modification to elastic search
 * @param {*} index 
 */
export function update(url, body) {
	axios.put(url, body).then((res) => {
		const { data: { data: { result }}} = res;
		if (result === 'updated') {
			toaster('Mise à jour effectué', 'success')
		}
	}).catch( (error) => {
		console.error(error);
		toaster('Echec de la mise à jour', 'danger')
	});
}
/**
 * add new document
 * @param {*} url 
 * @param {*} body 
 */
export function create(url, body) {
	axios.post(url, body).then((res) => {
		const { data: { data: { result }}} = res;
		if (result === 'created') {
			toaster('Mise à jour effectué', 'success')
		}
	}).catch( () => {
		// console.error(error);
		toaster('Echec de la mise à jour', 'danger')
	});
}