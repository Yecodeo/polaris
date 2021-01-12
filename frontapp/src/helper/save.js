import { ToastProgrammatic as toast } from 'buefy'
import axios from 'axios';

/**
 * fire a toast on page 
 * @param {*} message 
 * @param {*} label 
 */
function toaster(message, label) {
	toast.open({
		message,
		duration: 2500,
		type: `is-${label}`
	})
}

/**
 * push modification to elastic search
 * @param {*} index 
 */
export default function(url, body) {
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