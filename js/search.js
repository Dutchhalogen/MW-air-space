// js/search.js

function searchSite(query) {
  query = query.toLowerCase().trim();

  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = "<p>Bitte Suchbegriff eingeben.</p>";
    return;
  }

  if (typeof searchIndex === "undefined") {
    console.error("searchIndex fehlt!");
    resultsContainer.innerHTML = "<p>Suchdaten nicht geladen.</p>";
    return;
  }

  const snippetLength = 30;
  let totalResults = 0;

  searchIndex.forEach(item => {
    const contentLower = item.content.toLowerCase();
    let startIndex = 0;

    while ((startIndex = contentLower.indexOf(query, startIndex)) !== -1) {
      const snippetStart = Math.max(0, startIndex - snippetLength);
      const snippetEnd = Math.min(
        item.content.length,
        startIndex + query.length + snippetLength
      );

      let snippet = item.content.substring(snippetStart, snippetEnd);

      snippet = snippet.replace(
        new RegExp(query, "gi"),
        match => `<mark>${match}</mark>`
      );

      if (snippetStart > 0) snippet = "… " + snippet;
      if (snippetEnd < item.content.length) snippet += " …";

      resultsContainer.innerHTML += `
        <div class="result-item d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div class="me-3">
            <h5>${item.title}</h5>
            <p>${snippet}</p>
          </div>
          <a href="${item.url}" class="btn btn-secondary btn-lg mt-2">
            Zum Treffer
          </a>
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
