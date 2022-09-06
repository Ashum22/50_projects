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

// Start of Progress Bar code

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let curentActive = 1

next.addEventListener ('click', () => {
	curentActive++

	if(curentActive > circles.length) {
		curentActive = circles.length
	}

	update()
})

prev.addEventListener ('click', () => {
	curentActive--

	if(curentActive < 1) {
		curentActive = 1
	}

	update()
})

function update() {
	circles.forEach((circle, idx) => {
		console.log(curentActive)
		if(idx < curentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})
	
	const actives = document.querySelectorAll('.active')

	progress.style.width = (actives.length -2) /(circles.length -1)*100 + '%'

	if(curentActive === 1) {
		prev.disabled = true
	}	else if(curentActive === circles.length) {
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
}