import axios from 'axios';

/**
 * push modification to elastic search
 * @param {*} index 
 */
export function update(url, body) {
	return axios.put(url, body);
}
/**
 * add new document
 * @param {*} url 
 * @param {*} body 
 */
export function create(url, body) {
	return axios.post(url, body)
}