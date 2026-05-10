const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

const movieContainer =
document.getElementById("movieContainer");



const movies = [

    {
        Title: "Batman",
        Year: "2022",
        Poster:
        "https://m.media-amazon.com/images/I/71pFMuylTkL._AC_SL1500_.jpg"
    },

    {
        Title: "Interstellar",
        Year: "2014",
        Poster:
        "https://m.media-amazon.com/images/I/81kz06zs1VL.jpg"
    },

    {
        Title: "Avengers Endgame",
        Year: "2019",
        Poster:
        "https://m.media-amazon.com/images/I/81ExhpBEbHL.jpg"
    },

    {
        Title: "Naruto The Last",
        Year: "2014",
        Poster:
        "https://m.media-amazon.com/images/I/91zbi9M+mKL.jpg"
    }

];



function renderMovies(movieArray) {

    movieContainer.innerHTML = "";



    movieArray.forEach(function(movie) {

        const div = document.createElement("div");

        div.className =
        "bg-slate-800 p-5 rounded-xl shadow-lg";



        div.innerHTML = `<img src="${movie.Poster} "class="w-full h-96 object-cover rounded-lg">

            <h2 class="text-2xl font-bold mt-4">
                ${movie.Title}
            </h2>

            <p class="text-gray-400 mt-2">
                ${movie.Year}
            </p>

        `;

        movieContainer.appendChild(div);

    });

}



searchBtn.addEventListener("click", function () {

    const searchValue =
    searchInput.value.toLowerCase();



    const filteredMovies =
    movies.filter(function(movie) {

        return movie.Title
            .toLowerCase()
            .includes(searchValue);

    });



    renderMovies(filteredMovies);

});



renderMovies(movies);