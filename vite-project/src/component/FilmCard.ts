export function createFilmCard(title: string, genre: string, rating: string, imageSrc: string): HTMLElement {
    const filmCard = document.createElement("div");
    const filmImage = document.createElement("div");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const filmTitle = document.createElement("h3");
    const filmGenre = document.createElement("p");
    const filmRating = document.createElement("div");
    
    filmCard.className = "film_characteristic";
    filmImage.className = "film_image";
    button.className = "film_button";

    img.src = imageSrc;
    img.alt = title;

    button.textContent = "Карточка фильма";
    button.onclick = () =>{
        location.assign('/src/Pages/Film/')        
    }

    filmImage.appendChild(img);
    filmImage.appendChild(button);

    filmTitle.textContent = title;

    filmGenre.className = "genre";
    filmGenre.textContent = genre;

    filmRating.className = "raiting";
    filmRating.textContent = rating;

    filmCard.appendChild(filmImage);
    filmCard.appendChild(filmTitle);
    filmCard.appendChild(filmGenre);
    filmCard.appendChild(filmRating);

    return filmCard;
}