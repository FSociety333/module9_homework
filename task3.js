const btn = document.querySelector('button')
const list = document.querySelector('.list')

btn.addEventListener('click', function () {
  let url = 'https://picsum.photos/v2/list?limit='

  let value = +document.querySelector('input').value
  if (value < 1 || value > 10 || isNaN(value)) {
    console.log('значение вне диапазона от 1 до 10')
    return
  }
  url = url + value
  useRequest(url, createList)
})

function useRequest(url, cb) {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.onerror = function () {
    console.error('Что за черт!')
  }
  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log('xhr.status = ' + xhr.status)
      return
    }
    const res = JSON.parse(xhr.response)
    console.log(res)
    if (cb) {
      cb(res)
    }
  }
  xhr.send()
}

function createList(data) {
  data.forEach(item => {
    const img = `<img src="${item.url}" alt="photo">`
    list.insertAdjacentHTML('beforeend', img)
  })
}