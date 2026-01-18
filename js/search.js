// js/search.js
function searchSite(query) {
  query = query.toLowerCase().trim();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (query.length < 1) {
    resultsContainer.innerHTML = "<p>Bitte einen Suchbegriff eingeben.</p>";
    return;
  }

  const results = searchIndex.filter(item =>
    item.content.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>Keine Treffer gefunden.</p>";
    return;
  }

  results.forEach(result => {
    // Optional: kurzen Ausschnitt um das Wort
    const index = result.content.toLowerCase().indexOf(query);
    let snippet = result.content.substring(index - 20 < 0 ? 0 : index - 20, index + 80);
    snippet = snippet.replace(new RegExp(query, "ig"), `<mark>${query}</mark>`);

    resultsContainer.innerHTML += `
      <div class="list-group-item mb-2">
        <h5>${result.title}</h5>
        <p>${snippet}...</p>
        <a href="${result.url}" class="btn btn-sm btn-primary">Zum Treffer</a>
      </div>
    `;
  });
}
