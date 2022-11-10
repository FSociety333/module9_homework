document.querySelector('.task-4').style.display = 'block'
const task3 = document.querySelector('.task-3')
task3.parentNode.removeChild(task3)
//

const btn = document.querySelector('button')
const list = document.querySelector('.list')

btn.addEventListener('click', async () => {
  let url = 'https://picsum.photos'
  const inputs = document.querySelectorAll('input')

  for (const input of inputs) {
    if (+input.value < 100 || +input.value > 500 || isNaN(+input.value)) {
      console.log('число вне диапазона от 100 до 500')
      return
    } else {
      url += `/${input.value}`
    }
  }

  const res = await useRequest(url)
  list.innerHTML = `<img src="${res}" alt="photo">`
})

function useRequest(url) {
  return fetch(url)
    .then(response => {
      return response.url
    })
    .catch(err => console.log(err))
}