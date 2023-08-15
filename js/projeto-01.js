function mudah1() { 
	const h1 = document.querySelector('h1')
	const title = document.querySelector('title')
	const button = document.querySelector('button')
	h1.innerText = button.innerText
	title.innerText = button.innerText
	if (button.innerText == 'hello') {
		button.innerText = 'goodbye'
	} else {
		button.innerText = 'hello'
	}
}
