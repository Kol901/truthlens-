async function loadHistory() {
  const res = await fetch("https://YOUR-WORKER.workers.dev/history");
  const data = await res.json();

  const container = document.getElementById("history");

  if (data.length === 0) {
    container.innerHTML = "No history yet.";
    return;
  }

  data.reverse().forEach(item => {
    container.innerHTML += `
      <div class="bg-gray-800 p-4 rounded mb-4">
        <h3 class="text-xl font-bold">
          Trust Score: ${item.trustScore}%
        </h3>
        <p>${item.classification}</p>
        <p class="mt-2 text-gray-400">
          ${item.summary}
        </p>
      </div>
    `;
  });
}

loadHistory();
