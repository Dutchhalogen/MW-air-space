// js/search.js

function searchSite(query) {
  query = query.toLowerCase().trim();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = "<p>Bitte Suchbegriff eingeben.</p>";
    return;
  }

  let totalResults = 0;

  searchIndex.forEach(item => {
    const contentLower = item.content.toLowerCase();
    let startIndex = 0;

    // Suche alle Vorkommen
    while ((startIndex = contentLower.indexOf(query, startIndex)) !== -1) {

      // Suchwort im Text markieren
      const highlighted = item.content.replace(
        new RegExp(query, "gi"),
        match => `<mark>${match}</mark>`
      );

      // Ergebnis erzeugen
      resultsContainer.innerHTML += `
        <div class="list-group-item mb-2">
          <h5>${item.title}</h5>
          <p>${highlighted}</p>
          <a href="${item.url}" class="btn btn-sm btn-primary">Zum Treffer</a>
        </div>
      `;

      startIndex += query.length; // nächster Suchstart nach diesem Treffer
      totalResults++;
    }
  });

  if (totalResults === 0) {
    resultsContainer.innerHTML = "<p>Keine Treffer gefunden.</p>";
  }
}
