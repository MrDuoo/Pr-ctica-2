// modal.js
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {
  card.addEventListener("click", function (event) {
    if (!event.target.classList.contains("favorite-btn")) {
      const movieTitle = this.querySelector("h3").textContent;
      const movieDescription = this.querySelector("p").textContent;
      const movieImage = this.querySelector(".movie-img").src;

      document.getElementById("movieTitle").textContent = movieTitle;
      document.getElementById("movieDescription").textContent =
        movieDescription;
      document.getElementById("modalMovieImage").src = movieImage;

      document.getElementById("movieModal").style.display = "block";
    }
  });
});

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}
