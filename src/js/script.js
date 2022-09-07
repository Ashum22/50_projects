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

// End of Progress Bar code

// Start of Rotated Navigatoin code

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container-rotated')

open.addEventListener('click', () => container.classList.add
('show-nav'))

close.addEventListener('click', () => container.classList.remove
('show-nav'))

// End of Rotated Navigatoin code

// Start of Hidden Search Widget code

const search = document.querySelector('.search')
const btn = document.querySelector('.btn-search')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
	search.classList.toggle('active')
	input.focus()

})

// End of Hidden Search Widget code

// Start of Blurry Loading code

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
	load++
	if(load > 99) {
		clearInterval(int)
	}
	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// End of Blurry Loading code

// Start of Scroll Animation code

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top

		if(boxTop < triggerBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
}

// End of Scroll Animation code