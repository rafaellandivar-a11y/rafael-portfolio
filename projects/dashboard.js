const candidates = [
  {
    name: "Kandidat 01",
    position: "Versandmitarbeiter",
    status: "Interview"
  },
  {
    name: "Kandidat 02",
    position: "Lagermitarbeiter",
    status: "Onboarding"
  },
  {
    name: "Kandidat 03",
    position: "Versandmitarbeiter",
    status: "Abgeschlossen"
  },
  {
    name: "Kandidat 04",
    position: "Sortierung",
    status: "Interview"
  },
  {
    name: "Kandidat 05",
    position: "Logistik",
    status: "Onboarding"
  },
  {
    name: "Kandidat 06",
    position: "Versandmitarbeiter",
    status: "Abgeschlossen"
  }
];

const totalCandidates = document.querySelector("#totalCandidates");
const interviews = document.querySelector("#interviews");
const onboarding = document.querySelector("#onboarding");
const completed = document.querySelector("#completed");
const candidateList = document.querySelector("#candidateList");
const filterButtons = document.querySelectorAll(".filter-button");

function countStatus(status) {
  return candidates.filter(function(candidate) {
    return candidate.status === status;
  }).length;
}

function updateDashboardNumbers() {
  totalCandidates.textContent = candidates.length;
  interviews.textContent = countStatus("Interview");
  onboarding.textContent = countStatus("Onboarding");
  completed.textContent = countStatus("Abgeschlossen");
}

function showCandidates(status) {
  candidateList.innerHTML = "";

  let filteredCandidates = candidates;

  if (status !== "all") {
    filteredCandidates = candidates.filter(function(candidate) {
      return candidate.status === status;
    });
  }

  filteredCandidates.forEach(function(candidate) {
    const card = document.createElement("div");
    card.className = "candidate-card";

    card.innerHTML = `
      <h3>${candidate.name}</h3>
      <p><strong>Position:</strong> ${candidate.position}</p>
      <p><strong>Status:</strong> ${candidate.status}</p>
    `;

    candidateList.appendChild(card);
  });
}

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    filterButtons.forEach(function(otherButton) {
      otherButton.classList.remove("active");
    });

    button.classList.add("active");

    const selectedStatus = button.dataset.status;
    showCandidates(selectedStatus);
  });
});

updateDashboardNumbers();
showCandidates("all");