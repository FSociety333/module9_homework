document.querySelector('.task-4').style.display = 'block'
const task3 = document.querySelector('.task-3')
task3.parentNode.removeChild(task3)
//

const btn = document.querySelector('button')
const list = document.querySelector('.list')

/*const test = [
  {url: 'https://i.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM'},
  {url: 'https://i.picsum.photos/id/830/200/300.jpg?hmac=YHS3854_x-GHeQToxsiUmEvBJpDbZOAyixX9nxz61Sg'},
  {url: 'https://i.picsum.photos/id/1011/200/300.jpg?hmac=3OASTCcuMs99-ZFi2rl7Rh9DuaNJXZytGmDyOsRm7Hw'}
]
localStorage.setItem('json', JSON.stringify(test))*/

const storage = JSON.parse(localStorage.getItem('json'))
createList(storage)

btn.addEventListener('click', async () => {
  const url = getUrl()
  console.log(url)

  const res = await useRequest(url)
  createList(res)
  if (res) {
    localStorage.setItem('json', JSON.stringify(res))
  }
})

function useRequest(url) {
  if (!url) {
    return
  }
  return fetch(url)
    .then(response => {
      console.log(response)
      return response.json()
    }).then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log(err))
}

function createList(data) {
  if (!data || !(typeof data === 'object' && data.length)) {
    return
  }
  data.forEach(item => {
    const img = `<img src="${item.url}" alt="photo">`
    list.insertAdjacentHTML('beforeend', img)
  })
}

function getUrl() {
  let url = 'https://source.unsplash.com/collection/928423/'
  const inputs = document.querySelectorAll('input')
  let size = []

  for (const input of inputs) {
    if (+input.value < 100 || +input.value > 500 || isNaN(+input.value)) {
      // console.log('ширина или высота картинки вне диапазона от 100 до 500')
      input === inputs[0]
        ? console.log('ширина картинки вне диапазона от 100 до 500')
        : console.log('высота картинки вне диапазона от 100 до 500')
      return
    }
    size.push(input.value)
  }

  return url + size.join('x') + '/?sig=' + getRandomNumber(5)
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * (num)) + 1
}