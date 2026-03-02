async function analyze() {
  const text = document.getElementById("inputText").value;
  const resultDiv = document.getElementById("result");

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "Analyzing...";

  const res = await fetch("https://truthlens1.lordsmj69.workers.dev/analyze", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  resultDiv.innerHTML = `
    <div class="bg-gray-800 p-6 rounded">
      <h2 class="text-2xl font-bold">
        Trust Score: ${data.trustScore}%
      </h2>
      <p class="mt-2">
        Classification: <span class="text-blue-400">
        ${data.classification}
        </span>
      </p>
      <p class="mt-4">${data.summary}</p>
      <div class="mt-4 text-gray-400">${data.reasoning}</div>
    </div>
  `;
}
