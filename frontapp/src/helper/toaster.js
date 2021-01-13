import { ToastProgrammatic as toast } from 'buefy'

/**
 * Show toast message
 * @param {*} message 
 * @param {*} label 
 */
export default function(message, label) {
	toast.open({
		message,
		duration: 2500,
		type: `is-${label}`
	})
}