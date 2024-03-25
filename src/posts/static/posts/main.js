const postsBox = document.getElementById('posts-box')


$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        const data = response.data;
        data.forEach(el => {
            postsBox.innerHTML += `
                ${el.title} - <b>${el.body}</b><br>
            `
        });
    },
    error: function(error){
        console.log('error', error)
    }
})