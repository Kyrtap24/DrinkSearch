const search = document.querySelector('.search')
const liList = document.querySelectorAll('li')

const searchEngine = e => {
	const text = e.target.value.toLowerCase()

	liList.forEach(el => {

		if (el.textContent.toLocaleLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

search.addEventListener('keyup', searchEngine)
