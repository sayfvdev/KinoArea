import { createFilmCard } from "./FilmCard";

export function createFilmsList(films: { title: string; genre: string; rating: string; imageSrc: string }[]): HTMLElement {
    const filmsContainer = document.createElement("div");
    filmsContainer.className = "films_info";

    films.forEach(film => {
        const filmCard = createFilmCard(film.title, film.genre, film.rating, film.imageSrc);
        filmsContainer.appendChild(filmCard);
    });

    const allNowButton = document.createElement("button");
    allNowButton.className = "all_now";
    allNowButton.textContent = "Все новинки";
    filmsContainer.appendChild(allNowButton);

    

    return filmsContainer;
}
