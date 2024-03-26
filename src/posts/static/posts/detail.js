const backBtn = document.getElementById('back-btn')
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')
const postBox = document.getElementById('post-box')
const url = window.location.href + "/data/"
const spinnerBox = document.getElementById('detail-spinner')

const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')

backBtn.addEventListener('click', () => {
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        const data = response.data
        if (data.logged_in !== data.author){
            console.log('different')
        } else {
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }

        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-3')
        const bodyEl = document.createElement('p')
        bodyEl.setAttribute('class', 'mt-1')

        titleEl.textContent = data.title
        bodyEl.textContent = data.body

        postBox.appendChild(titleEl)
        postBox.appendChild(bodyEl)

        titleInput.value = data.title
        bodyInput.value = data.body

        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }
})