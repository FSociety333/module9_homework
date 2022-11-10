const xmlString = `<list>
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

const parser = new DOMParser()

const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
const students = xmlDoc.querySelectorAll('student')

const jsObj = {list: []}

students.forEach(item => {
  const student = {}
  for (let child of item.children) {
    let childText = child.textContent.trim().split(/\n\s*/).join(' ')
    student[child.tagName] = +childText || childText
    if (child.hasAttribute('lang')) {                     // (child.tagName === 'name')
      student.lang = child.getAttribute('lang')
    }
  }
  jsObj.list.push(student)
})

console.log('результат', jsObj)


//
const example = {
  list: [
    {name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en'},
    {name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru'},
  ]
}
console.log('пример', example)