import { createFilmsList } from "../component/FilmsList";

export function reloadFilmsList(container: HTMLElement, films: { title: string; genre: string; rating: string; imageSrc: string }[]) {
    container.innerHTML = "";

    const newFilmsList = createFilmsList(films);
    container.appendChild(newFilmsList);
}
