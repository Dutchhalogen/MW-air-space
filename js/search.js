// js/search.js
function searchSite(query) {
  query = query.toLowerCase().trim();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = "<p>Bitte Suchbegriff eingeben.</p>";
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof searchData === "undefined") {
      console.error("searchData fehlt!");
      return;
    }
  
    const resultsContainer = document.getElementById("search-results");
    if (!resultsContainer) {
      console.error("#search-results nicht gefunden");
      return;
    }
  
    // restlicher Suchcode
  });

  const snippetLength = 30; // Zeichen vor/nach dem Suchwort
  let totalResults = 0;

  searchIndex.forEach(item => {
    const contentLower = item.content.toLowerCase();
    let startIndex = 0;

    while ((startIndex = contentLower.indexOf(query, startIndex)) !== -1) {

      const snippetStart = Math.max(0, startIndex - snippetLength);
      const snippetEnd = Math.min(item.content.length, startIndex + query.length + snippetLength);
      let snippet = item.content.substring(snippetStart, snippetEnd);

      snippet = snippet.replace(new RegExp(query, "gi"), match => `<mark>${match}</mark>`);

      if (snippetStart > 0) snippet = "… " + snippet;
      if (snippetEnd < item.content.length) snippet = snippet + " …";

      // Ergebnisbox erstellen
      resultsContainer.innerHTML += `
        <div class="result-item d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div class="me-3">
            <h5>${item.title}</h5>
            <p>${snippet}</p>
          </div>
          <a href="${item.url}" class="btn btn-secondary btn-lg mt-2 mt">Zum Treffer</a>
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
