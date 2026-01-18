// js/search.js

function searchSite(query) {
  query = query.toLowerCase().trim();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = "<p>Bitte Suchbegriff eingeben.</p>";
    return;
  }

  const snippetLength = 30; // Anzahl Zeichen vor/nach dem Suchwort
  let totalResults = 0;

  searchIndex.forEach(item => {
    const contentLower = item.content.toLowerCase();
    let startIndex = 0;

    while ((startIndex = contentLower.indexOf(query, startIndex)) !== -1) {
      
      // Ausschnitt berechnen
      const snippetStart = Math.max(0, startIndex - snippetLength);
      const snippetEnd = Math.min(item.content.length, startIndex + query.length + snippetLength);
      let snippet = item.content.substring(snippetStart, snippetEnd);

      // Markierung des Suchwortes
      snippet = snippet.replace(new RegExp(query, "gi"), match => `<mark>${match}</mark>`);

      // Optional: "..." wenn Ausschnitt nicht am Textanfang/ende liegt
      if (snippetStart > 0) snippet = "… " + snippet;
      if (snippetEnd < item.content.length) snippet = snippet + " …";

      // Treffer in Ergebnisliste einfügen
      resultsContainer.innerHTML += `
        <div class="list-group-item mb-3 p-3 shadow-sm rounded d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div class="me-3">
            <h5>${item.title}</h5>
            <p>${snippet}</p>
          </div>
          <a href="${item.url}" class="btn btn-primary btn-sm mt-2 mt-md-0">Zum Treffer</a>
        </div>
      `;
      
      startIndex += query.length;
      totalResults++;
    }
  });

  if (totalResults === 0) {
    resultsContainer.innerHTML = "<p>Keine Treffer gefunden.</p>";
  }
}
