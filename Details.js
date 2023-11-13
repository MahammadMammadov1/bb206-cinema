let filmId = new URLSearchParams(window.location.search).get("id");
let DetailContainer = document.getElementById("film-detail");

axios.get(`https://api.tvmaze.com/shows/${filmId}`)
    .then(response => {
        DetailContainer.innerHTML = `
            <img src="${response.data.image.medium}"  style="max-width: 100%; border-radius: 10px; margin-top: 200px;">
            <div class="p-4">
                <h1 class="display-2">${response.data.name}</h1>
                <p>Summary: ${response.data.summary}</p>
                <p>Premiere: ${response.data.premiered}</p>
                <p>IMDB Rating: ${response.data.rating.average}</p>
                <p>Genres: ${response.data.genres}</p>
                <p>Language: ${response.data.language}</p>
                <p>AverageRuntime: ${response.data.averageRuntime}</p>

            </div>
        `
    })

    


    