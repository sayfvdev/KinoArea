interface Film {
  title: string;
  genre: string;
  rating: string;
  imageSrc: string;
}

const films: Film[] = [
  { title: "Опенгеймер", genre: "Драма", rating: "8.80", imageSrc: "/img/banner-films.png" },
  { title: "Барби", genre: "Комедия", rating: "7.50", imageSrc: "/img/banner-films.png" },
  { title: "Дюна", genre: "Фантастика", rating: "8.20", imageSrc: "/img/banner-films.png" },
  { title: "Миссия невыполнима", genre: "Боевик", rating: "7.90", imageSrc: "/img/banner-films.png" },
  { title: "Тёмные воды", genre: "Драма", rating: "7.00", imageSrc: "/img/banner-films.png" },
  { title: "Люди Икс", genre: "Фантастика", rating: "7.30", imageSrc: "/img/banner-films.png" },
  { title: "Джокер", genre: "Триллер", rating: "8.40", imageSrc: "/img/banner-films.png" },
  { title: "Бэтмен", genre: "Боевик", rating: "8.20", imageSrc: "/img/banner-films.png" },
  { title: "Человек-паук", genre: "Фантастика", rating: "7.90", imageSrc: "/img/banner-films.png" },
  { title: "Гарри Поттер", genre: "Фэнтези", rating: "9.10", imageSrc: "/img/banner-films.png" },
  { title: "Годзилла", genre: "Фантастика", rating: "6.90", imageSrc: "/img/banner-films.png" },
  { title: "Интерстеллар", genre: "Фантастика", rating: "8.80", imageSrc: "/img/banner-films.png" },
  { title: "Аватар", genre: "Фантастика", rating: "8.50", imageSrc: "/img/banner-films.png" },
  { title: "Звездные войны", genre: "Фантастика", rating: "8.00", imageSrc: "/img/banner-films.png" },
];

function createFilmCard(film: Film): HTMLElement {
  const filmCard = document.createElement("div");
  filmCard.className = "film-item";

  filmCard.innerHTML = `
    <div class="film-image">
      <img src="${film.imageSrc}" alt="${film.title}">
      <button class="film-details-button">Карточка фильма</button>
    </div>
    <h3 class="film-title">${film.title}</h3>
    <p class="film-genre">${film.genre}</p>
    <div class="film-rating">${film.rating}</div>
  `;

  return filmCard;
}

function renderFilms(films: Film[], containerSelector: string): void {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  films.forEach((film) => {
    const filmCard = createFilmCard(film);
    container.appendChild(filmCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const firstSectionFilms = films.slice(0, 8);
  const secondSectionFilms = films.slice(0, 4);

  renderFilms(firstSectionFilms, ".films_info");
  renderFilms(secondSectionFilms, ".films-list");
});





import { initializeSearch } from '../src/component/search';

document.addEventListener('DOMContentLoaded', () => {
  initializeSearch();
});
