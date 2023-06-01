const inp1 = document.querySelector(".inp1")
const inp2 = document.querySelector(".inp2")
const btn = document.querySelector(".button")
const container = document.querySelector(".container")

let images = ``
for (const dataKey in localStorage) {
	console.log(localStorage.getItem(dataKey))
	if (localStorage.getItem(dataKey) !== null) {
		images += `<img src=${localStorage.getItem(dataKey)} width="200px">`
	}
}

container.innerHTML = images

function func() {
	container.textContent = ""
	let num1 = Number(inp1.value)
	let num2 = Number(inp2.value)
	if (isNaN(num1) || isNaN(num2)) {
		container.innerHTML = "<p>Введено не число!"
	} else if ((num1 < 1 || num1 > 10) && (num2 < 1 || num2 > 10)) {
		container.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10"
	} else if (num1 >= 1 && num1 <= 10 && (num2 < 1 || num2 > 10)) {
		container.innerHTML = "<p>Лимит вне диапазона от 1 до 10"
	} else if (num2 >= 1 && num2 <= 10 && (num1 < 1 || num1 > 10)) {
		container.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10"
	} else if (num1 >= 1 && num1 <= 10 && num2 >= 1 && num2 <= 10) {
		// сайт не работает на территории РФ, поэтому всегда вылетает ошибка
		// fetch(`https://picsum.photos/v2/list?page=${num1}&limit=${num2}`)
		// Попытался на другом сайте, но первый параметр start - начальный элемент, так что вывожу все
		fetch(`https://jsonplaceholder.typicode.com/photos?_start=${num1}&_limit=${num2}`)
			.then((resp) => {
				console.log("response", resp)
				const result = resp.json()
				return result
			})
			.then((data) => {
				// Не уверен, что именно такие данные будут у фотографии, проверить не могу
				console.log(data)
				let images = ``
				localStorage.clear()
				for (const dataKey in data) {
					images += `<img src=${data[dataKey].url} width="200px">`
					localStorage.setItem(dataKey, data[dataKey].url)
				}
				container.innerHTML = images
			})
			.catch(() => {console.log("error")})
	}
}

btn.addEventListener("click", func)
