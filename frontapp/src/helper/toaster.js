import {
	ToastProgrammatic as toast
} from 'buefy'
const message = {
	success: 'Mise à jour effectué',
	fail: 'Echec de la mise à jour'
}
const label = {
	success: 'success',
	fail: 'danger'
}
const duration = 2500;
/**
 * Show toast message
 * @param {*} message 
 * @param {*} label 
 */
export default {
	success: function () {
		toast.open({
			message: message.success,
			duration,
			type: `is-${label.success}`
		})
	},
	fail: function () {
		toast.open({
			message: message.fail,
			duration,
			type: `is-${label.fail}`
		})
	},
}