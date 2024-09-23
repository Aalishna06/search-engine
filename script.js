document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const searchHistoryContainer = document.getElementById('search-history');
  
    
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  
    
    const displaySearchHistory = () => {
      searchHistoryContainer.innerHTML = '';
      searchHistory.forEach(item => {
        const searchItem = document.createElement('div');
        searchItem.classList.add('search-item');
        searchItem.textContent = item;
        searchHistoryContainer.appendChild(searchItem);
      });
    };
  
    
    displaySearchHistory();
  
    
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        searchHistory.push(searchTerm);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
        searchInput.value = ''; 
      }
    });
  
    
    clearBtn.addEventListener('click', () => {
      searchHistory = [];
      localStorage.setItem('searchHistory', JSON.stringify([]));
      displaySearchHistory();
    });
  });
  