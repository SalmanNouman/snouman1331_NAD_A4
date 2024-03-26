const backBtn = document.getElementById('back-btn')
const url = window.location.href + "/data/"
const spinnerBox = document.getElementById('detail-spinner')


backBtn.addEventListener('click', () => {
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(url)
        console.log(response)
        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }
})