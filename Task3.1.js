const parser = new DOMParser()

const xmltext = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDOM = parser.parseFromString(xmltext, "text/xml")

const list = {list: []}
const listNode = xmlDOM.querySelector("list")
const studentsList = listNode.querySelectorAll("student")

studentsList.forEach(function (student) {
    const partOfName = student.querySelector("name")
    const lang = partOfName.getAttribute("lang")
    const name = partOfName.querySelector("first").textContent + " " + partOfName.querySelector("second").textContent
    const age = student.querySelector("age").textContent
    const prof = student.querySelector("prof").textContent

    const element = {
        name: name,
        age: Number(age),
        prof: prof,
        lang: lang
    }

    list.list.push(element)
})

console.log(list)
