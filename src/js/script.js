// Start of Expanding Cards code
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
}
// End of Expanding Cards code