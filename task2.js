const jsonString = '{"list":[{"name":"Petr","age":"20","prof":"mechanic"},{"name":"Vova","age":"60","prof":"pilot"}]}'

const jsObj = JSON.parse(jsonString, (key, value) => +value || value)
console.log(jsObj)


//
const example = {
  list: [
    {name: 'Petr', age: 20, prof: 'mechanic'},
    {name: 'Vova', age: 60, prof: 'pilot'},
  ]
}
console.log(example)