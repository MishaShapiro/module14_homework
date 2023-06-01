const jsonText = `{
    "list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}`;

const result = {"list": []}

const data = JSON.parse(jsonText);
const list = data.list;

list.forEach(function (element) {
    const name = element.name;
    const age = Number(element.age);
    const prof = element.prof;

    result.list.push({
        name: name,
        age: age,
        prof: prof
    })
})

console.log(result)