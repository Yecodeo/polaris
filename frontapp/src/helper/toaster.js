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


function run(param) {
	toast.open({
		message: message[param],
		duration,
		type: `is-${label[param]}`
	})
}

/**
 * run toast componenet 
 * @param {*} message 
 * @param {*} label 
 */
export default {
	success: function () {
		run('success')
	},
	fail: function () {
		run('fail')
	},
}