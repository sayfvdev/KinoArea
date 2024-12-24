interface SearchResult {
    title: string;
    genre: string;
    rating: string;
    image: string;
  }
  
  const data: SearchResult[] = [
    { title: "Опенгеймер", genre: "Драма", rating: "8.80", image: "/img/banner-films.png" },
    { title: "Барби", genre: "Комедия", rating: "7.50", image: "/img/banner-films.png" },
    { title: "Дюна", genre: "Фантастика", rating: "8.20", image: "/img/banner-films.png" },
    { title: "Миссия невыполнима", genre: "Боевик", rating: "7.90", image: "/img/banner-films.png" },
    { title: "Тёмные воды", genre: "Драма", rating: "7.00", image: "/img/banner-films.png" },
    { title: "Люди Икс", genre: "Фантастика", rating: "7.30", image: "/img/banner-films.png" },
    { title: "Джокер", genre: "Триллер", rating: "8.40", image: "/img/banner-films.png" },
    { title: "Бэтмен", genre: "Боевик", rating: "8.20", image: "/img/banner-films.png" },
    { title: "Человек-паук", genre: "Фантастика", rating: "7.90", image: "/img/banner-films.png" },
    { title: "Гарри Поттер", genre: "Фэнтези", rating: "9.10", image: "/img/banner-films.png" },
    { title: "Годзилла", genre: "Фантастика", rating: "6.90", image: "/img/banner-films.png" },
    { title: "Интерстеллар", genre: "Фантастика", rating: "8.80", image: "/img/banner-films.png" },
    { title: "Аватар", genre: "Фантастика", rating: "8.50", image: "/img/banner-films.png" },
    { title: "Звездные войны", genre: "Фантастика", rating: "8.00", image: "/img/banner-films.png" },
  ];
  
  
  export function initializeSearch() {
    const searchButton = document.querySelector('.search') as HTMLButtonElement;
    const dialog = document.getElementById('searchDialog') as HTMLDialogElement;
    const closeDialog = document.getElementById('closeDialog') as HTMLButtonElement;
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const results = document.getElementById('results') as HTMLDivElement;
  
    searchButton.addEventListener('click', () => {
      dialog.showModal();
    });
  
    closeDialog.addEventListener('click', () => {
      dialog.close();
    });
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      results.innerHTML = '';
  
      if (query) {
        const filteredData = data.filter(item =>
          item.title.toLowerCase().includes(query)
        );
  
        filteredData.forEach(item => {
          const resultItem = document.createElement('div');
          resultItem.className = 'result-item';
  
          resultItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="result-content">
              <p class="result-title">${item.title}</p>
              <p class="result-details">${item.genre}</p>
            </div>
            <div class="rating">${item.rating}</div>
          `;
  
          results.appendChild(resultItem);
        });
      }
    });
  }
  