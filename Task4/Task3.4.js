const inp1 = document.querySelector(".inp1")
const inp2 = document.querySelector(".inp2")
const btn = document.querySelector(".button")
const container = document.querySelector(".container")

function func() {
	container.textContent = ""
	let num1 = Number(inp1.value)
	let num2 = Number(inp2.value)
	if (isNaN(num1) || isNaN(num2)) {
		container.innerHTML = "<p>Введено не число!"
	} else if (num1 >= 100 && num1 <= 300 && num2 >= 100 && num2 <= 300) {
		// сайт не работает на территории РФ, поэтому всегда вылетает ошибка
		fetch(`https://picsum.photos/${num1}/${num2},`)
			.then((resp) => {
				console.log("response", resp)
				const result = resp.json()
				return result
			})
			.then((data) => {
				// Не уверен, что именно такие данные будут у фотографии, проверить не могу
				console.log(data)
				container.innerHTML = `<img src=${data[0].url}>`
			})
			.catch(() => {console.log("error")})
	} else {
		container.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300"
	}
}

btn.addEventListener("click", func)
