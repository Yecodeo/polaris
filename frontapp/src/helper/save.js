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

/**
 * Send file to backend
 * @param {*} url 
 * @param {*} body 
 */
export function addFile(url, body) {
	console.log(body, url)
	return axios.post(url, body, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
	}