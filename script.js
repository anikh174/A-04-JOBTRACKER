let interviewList = [];
let rejectList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let totalJob = document.getElementById('totalJob');
let interview = document.getElementById("interviewCount");
let rejected = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectList.length;
  totalJob.innerText = allCardSection.children.length;
}
calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-black", "text-white");
  interviewFilterBtn.classList.remove("bg-black", "text-white");
  rejectFilterBtn.classList.remove("bg-black", "text-white");

  allFilterBtn.classList.add("bg-base-100");
  interviewFilterBtn.classList.add("bg-base-100");
  rejectFilterBtn.classList.add("bg-base-100");

  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("bg-base-100");
  selected.classList.add("bg-black", "text-white");

  if (id == "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderReject();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const applicantName = parentNode.querySelector(".applicantName").innerText;
    const skillName = parentNode.querySelector(".skillName").innerText;
    const need = parentNode.querySelector(".need").innerText;
    const statuss = parentNode.querySelector(".statuss").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".statuss").innerText = "interview";
    const cardInfo = {
      applicantName,
      skillName,
      need,
      statuss: "Interview",
      notes,
    };

    const interviewExist = interviewList.find(
      (item) => item.applicantName == cardInfo.applicantName,
    );

    if (!interviewExist) {
      interviewList.push(cardInfo);
    }

    rejectList = rejectList.filter(
      (item) => item.applicantName != cardInfo.applicantName,
    );

    calculateCount();
    if (currentStatus == "rejected-filter-btn") {
      renderReject();
    }
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const applicantName = parentNode.querySelector(".applicantName").innerText;
    const skillName = parentNode.querySelector(".skillName").innerText;
    const need = parentNode.querySelector(".need").innerText;
    const statuss = parentNode.querySelector(".statuss").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".statuss").innerText = "Rejected";
    const cardInfo = {
      applicantName,
      skillName,
      need,
      statuss: "Rejected",
      notes,
    };

    const interviewExist = rejectList.find(
      (item) => item.applicantName == cardInfo.applicantName,
    );

    if (!interviewExist) {
      rejectList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.applicantName != cardInfo.applicantName,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    calculateCount();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";

  for (let inter of interviewList) {
    let div = document.createElement("div");
    div.className =
      "cards flex justify-between bg-base-100 p-6 mb-5 rounded-md";
    div.innerHTML = `
         <div class="space-y-5">
            <div>
              <p class="applicantName text-xl font-bold text-[#002C5C]">${inter.applicantName}</p>
              <p class="skillName text-[#64748B]">${inter.skillName}</p>
            </div>

            <div>
              <p class="need text-[#64748B]">${inter.need}</p>
            </div>

            <div>
              <p class="statuss px-3 py-2 bg-info/20 w-[120px] rounded-md text-[#002C5C] font-bold">
                ${inter.statuss}
              </p>
              <p class="notes text-[#64748B]">
                ${inter.notes}
              </p>
            </div>

            <div>
              <button
                class="interview-btn btn border border-success px-3 py-2 rounded-md font-bold text-success hover:bg-success hover:text-white"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn btn border border-error px-3 py-2 rounded-md font-bold text-error hover:bg-error hover:text-white"
              >
                REJECTED
              </button>
            </div>
          </div>
        `;
    filterSection.appendChild(div);
  }
}

function renderReject() {
  filterSection.innerHTML = "";

  for (let rejec of rejectList) {
    let div = document.createElement("div");
    div.className =
      "cards flex justify-between bg-base-100 p-6 mb-5 rounded-md";
    div.innerHTML = `
         <div class="space-y-5">
            <div>
              <p class="applicantName text-xl font-bold text-[#002C5C]">${rejec.applicantName}</p>
              <p class="skillName text-[#64748B]">${rejec.skillName}</p>
            </div>

            <div>
              <p class="need text-[#64748B]">${rejec.need}</p>
            </div>

            <div>
              <p class="statuss px-3 py-2 bg-info/20 w-[120px] rounded-md text-[#002C5C] font-bold">
                ${rejec.statuss}
              </p>
              <p class="notes text-[#64748B]">
                ${rejec.notes}
              </p>
            </div>

            <div>
              <button
                class="interview-btn btn border border-success px-3 py-2 rounded-md font-bold text-success hover:bg-success hover:text-white"
              >
                INTERVIEW
              </button>
              <button
                class="rejected-btn btn border border-error px-3 py-2 rounded-md font-bold text-error hover:bg-error hover:text-white"
              >
                REJECTED
              </button>
            </div>
          </div>
        `;
    filterSection.appendChild(div);
  }
};