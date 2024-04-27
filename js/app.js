let createRowButton = document.querySelector("#addTable");
let modal = document.getElementById("createRowModal");
let modalInfoContainer = document.querySelector(".inputInfo-container");
let span = document.getElementsByClassName("close-createRowModal")[0];
let createRowButtonModal = document.querySelector("#create-row-button");
let usernameModal = document.querySelector("#username");
let passwordModal = document.querySelector("#password");
let usernameLabel = document.querySelector("#usernameLabel");
let passwordLabel = document.querySelector("#passwordLabel");
let table = document.querySelector("table");

let createLabelPainElement = "";
let createInputPainElement = "";

let createLabelAppleRawElement = "";
let createInputAppleRawElement = "";

let createLabelAppricotRawElement = "";
let createInputAppricotRawElement = "";

let createLabelApricotDryElement = "";
let createInputApricotDryElement = "";

let createLabelAvocadoRawElement = "";
let createInputAvocadoRawElement = "";

let createLabelBananaElement = "";
let createInputBananaElement = "";

let createLabelBlackberryElement = "";
let createInputBlackberryElement = "";

let createLabelBlackcurrantRawElement = "";
let createInputBlackcurrantRawElement = "";

let createLabelBlueberryElement = "";
let createInputBlueberryElement = "";

let createLabelBreadfruitRawElement = "";
let createInputBreadfruitRawElement = "";

let createLabelCherryElement = "";
let createInputCherryElement = "";

let createLabelClementinesRawElement = "";
let createInputClementinesRawElement = "";

let createLabelCoconutRawElement = "";
let createInputCoconutRawElement = "";

let createLabelDatesElement = "";
let createInputDatesElement = "";

let createLabelGrapefruitRawElement = "";
let createInputGrapefruitRawElement = "";

let createLabelLemonElement = "";
let createInputLemonElement = "";

let createLabelLimeElement = "";
let createInputLimeElement = "";

let createLabelMelonElement = "";
let createInputMelonElement = "";

let createLabelOrangeElement = "";
let createInputOrangeElement = "";

let createLabelPeachElement = "";
let createInputPeachElement = "";

let createLabelPearsRawElement = "";
let createInputPearsRawElement = "";

let createLabelPineappleElement = "";
let createInputPineappleElement = "";

let createLabelPlumElement = "";
let createInputPlumElement = "";

let createLabelPumpkinElement = "";
let createInputPumpkinElement = "";

let createLabelQuinceElement = "";
let createInputQuinceElement = "";

let createLabelRaisinsElement = "";
let createInputRaisinsElement = "";

let createLabelRaspberryElement = "";
let createInputRaspberryElement = "";

let createLabelStrawberryElement = "";
let createInputStrawberryElement = "";

let createLabelWatermelonElement = "";
let createInputWatermelonElement = "";

let createNewButtonModal = "";
let pageButton = "";
let appleRaw = "";
let painDescription = "";

let pagination = document.getElementById("pagination");
let currentPage = 1;
const rowsPerPage = 8;

// tables nav functuonality

const navLinks = document.querySelectorAll(".tables-nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default link behavior if you want to stay on the page
    // event.preventDefault();

    // Remove the 'active' class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

// Start of Search values logic

document.getElementById("search").addEventListener("input", function (e) {
  searchTable(e.target.value);
});

function searchTable(query) {
  let trs = table.querySelectorAll("tr:not(:first-child)");
  trs.forEach((tr) => {
    if (tr.textContent.toLowerCase().includes(query.toLowerCase())) {
      tr.classList.remove("search-hidden");
    } else {
      tr.classList.add("search-hidden");
    }
  });
  updatePaginationBasedOnSearch();
}

function updatePaginationBasedOnSearch() {
  let visibleRows =
    Array.from(table.querySelectorAll("tr:not(.search-hidden)")).length - 1;
  let pageCount = Math.ceil(visibleRows / rowsPerPage);
  setupPagination(pageCount);
  updateTableDisplay();
}

function setupPagination(pageCount) {
  pagination.innerHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    let pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.addEventListener("click", () => {
      if (currentPage !== i) {
        currentPage = i;
        updateActiveButton(i);
        updateTableDisplay();
      }
    });
    pagination.appendChild(pageButton);
  }
  updateActiveButton(currentPage);
}

function updateActiveButton(activePage) {
  document.querySelectorAll("#pagination button").forEach((btn) => {
    btn.classList.remove("Active");
  });
  if (activePage && pagination.children[activePage - 1]) {
    pagination.children[activePage - 1].classList.add("Active");
  }
}

function setupPagination() {
  pagination.innerHTML = "";
  let rowCount = table.querySelectorAll("tr").length - 1;
  let pageCount = Math.ceil(rowCount / rowsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    let pageButton = document.createElement("button");
    pageButton.innerText = i;
    if (i === currentPage) {
      pageButton.classList.add("Active"); // Add 'Active' class to the current page button
    }
    pageButton.addEventListener("click", () => {
      if (currentPage !== i) {
        currentPage = i;
        updateActiveButton(i); // Update active class on all buttons
        updateTableDisplay();
      }
    });
    pagination.appendChild(pageButton);
  }
}

function updateActiveButton(activePage) {
  // Remove 'Active' class from all buttons
  document.querySelectorAll("#pagination button").forEach((btn) => {
    btn.classList.remove("Active");
  });
  if (activePage) {
    let currentButton = pagination.querySelector(
      "button:nth-child(" + activePage + ")"
    );
    if (currentButton) {
      currentButton.classList.add("Active");
    }
  }
}

function updateTableDisplay() {
  let trs = table.querySelectorAll("tr:not(:first-child)");
  let startIndex = (currentPage - 1) * rowsPerPage;
  let endIndex = startIndex + rowsPerPage;
  let visibleIndex = 0;

  trs.forEach((tr) => {
    if (!tr.classList.contains("search-hidden")) {
      if (visibleIndex >= startIndex && visibleIndex < endIndex) {
        tr.style.display = "";
      } else {
        tr.style.display = "none";
      }
      visibleIndex++;
    } else {
      tr.style.display = "none";
    }
  });
}

setupPagination();
updateTableDisplay();

createRowButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

span.onclick = function () {
  resetModalForm();
};

createRowButtonModal.addEventListener("click", () => {
  if (usernameModal.value != "admin" || passwordModal.value != "admin") {
    alert("No valid information, can't proceed!");
    resetModalForm();
  } else {
    // Hide the admin login form
    usernameModal.style.display = "none";
    passwordModal.style.display = "none";
    usernameLabel.style.display = "none";
    passwordLabel.style.display = "none";
    createRowButtonModal.style.display = "none";

    // Create form fields for adding a row
    createLabelPainElement = document.createElement("label");
    createLabelPainElement.textContent = " Болка: ";
    createInputPainElement = document.createElement("input");
    createInputPainElement.setAttribute("id", "pain_description");
    modalInfoContainer.appendChild(createLabelPainElement);
    modalInfoContainer.appendChild(createInputPainElement);

    createLabelAppleRawElement = document.createElement("label");
    createLabelAppleRawElement.textContent = "Apple, raw: ";
    createInputAppleRawElement = document.createElement("input");
    createInputAppleRawElement.setAttribute("id", "Apple, raw");
    modalInfoContainer.appendChild(createLabelAppleRawElement);
    modalInfoContainer.appendChild(createInputAppleRawElement);

    createLabelAppricotRawElement = document.createElement("label");
    createLabelAppricotRawElement.textContent = "Appricot raw ";
    createInputAppricotRawElement = document.createElement("input");
    createInputAppricotRawElement.setAttribute("id", "Appricot, raw");

    createLabelApricotDryElement = document.createElement("label");
    createLabelApricotDryElement.textContent = "Apricot Dry";
    createInputApricotDryElement = document.createElement("input");
    createInputApricotDryElement.setAttribute("id", "Apricot dry");
    modalInfoContainer.appendChild(createLabelApricotDryElement);
    modalInfoContainer.appendChild(createInputApricotDryElement);

    createLabelAvocadoRawElement = document.createElement("label");
    createLabelAvocadoRawElement.textContent = "Avocado Raw";
    createInputAvocadoRawElement = document.createElement("input");
    createInputAvocadoRawElement.setAttribute("id", "Avocado raw");
    modalInfoContainer.appendChild(createLabelAvocadoRawElement);
    modalInfoContainer.appendChild(createInputAvocadoRawElement);

    createLabelBananaElement = document.createElement("label");
    createLabelBananaElement.textContent = "Banana";
    createInputBananaElement = document.createElement("input");
    createInputBananaElement.setAttribute("id", "Banana");
    modalInfoContainer.appendChild(createLabelBananaElement);
    modalInfoContainer.appendChild(createInputBananaElement);

    createLabelBlackberryElement = document.createElement("label");
    createLabelBlackberryElement.textContent = "Blackberry";
    createInputBlackberryElement = document.createElement("input");
    createInputBlackberryElement.setAttribute("id", "Blackberry");
    modalInfoContainer.appendChild(createLabelBlackberryElement);
    modalInfoContainer.appendChild(createInputBlackberryElement);

    createLabelBlackcurrantRawElement = document.createElement("label");
    createLabelBlackcurrantRawElement.textContent = "Blackcurrant Raw";
    createInputBlackcurrantRawElement = document.createElement("input");
    createInputBlackcurrantRawElement.setAttribute("id", "Blackcurrant raw");
    modalInfoContainer.appendChild(createLabelBlackcurrantRawElement);
    modalInfoContainer.appendChild(createInputBlackcurrantRawElement);

    createLabelBlueberryElement = document.createElement("label");
    createLabelBlueberryElement.textContent = "Blueberry";
    createInputBlueberryElement = document.createElement("input");
    createInputBlueberryElement.setAttribute("id", "Blueberry");
    modalInfoContainer.appendChild(createLabelBlueberryElement);
    modalInfoContainer.appendChild(createInputBlueberryElement);

    createLabelBreadfruitRawElement = document.createElement("label");
    createLabelBreadfruitRawElement.textContent = "Breadfruit Raw";
    createInputBreadfruitRawElement = document.createElement("input");
    createInputBreadfruitRawElement.setAttribute("id", "Breadfruit raw");
    modalInfoContainer.appendChild(createLabelBreadfruitRawElement);
    modalInfoContainer.appendChild(createInputBreadfruitRawElement);

    createLabelCherryElement = document.createElement("label");
    createLabelCherryElement.textContent = "Cherry";
    createInputCherryElement = document.createElement("input");
    createInputCherryElement.setAttribute("id", "Cherry");
    modalInfoContainer.appendChild(createLabelCherryElement);
    modalInfoContainer.appendChild(createInputCherryElement);

    createLabelClementinesRawElement = document.createElement("label");
    createLabelClementinesRawElement.textContent = "Clementines Raw";
    createInputClementinesRawElement = document.createElement("input");
    createInputClementinesRawElement.setAttribute("id", "Clementines raw");
    modalInfoContainer.appendChild(createLabelClementinesRawElement);
    modalInfoContainer.appendChild(createInputClementinesRawElement);

    createLabelCoconutRawElement = document.createElement("label");
    createLabelCoconutRawElement.textContent = "Coconut Raw";
    createInputCoconutRawElement = document.createElement("input");
    createInputCoconutRawElement.setAttribute("id", "Coconut raw");
    modalInfoContainer.appendChild(createLabelCoconutRawElement);
    modalInfoContainer.appendChild(createInputCoconutRawElement);

    createLabelDatesElement = document.createElement("label");
    createLabelDatesElement.textContent = "Dates";
    createInputDatesElement = document.createElement("input");
    createInputDatesElement.setAttribute("id", "Dates");
    modalInfoContainer.appendChild(createLabelDatesElement);
    modalInfoContainer.appendChild(createInputDatesElement);

    createLabelGrapefruitRawElement = document.createElement("label");
    createLabelGrapefruitRawElement.textContent = "Grapefruit";
    createInputGrapefruitRawElement = document.createElement("input");
    createInputGrapefruitRawElement.setAttribute("id", "Grapefruit");
    modalInfoContainer.appendChild(createLabelGrapefruitRawElement);
    modalInfoContainer.appendChild(createInputGrapefruitRawElement);

    createLabelLemonElement = document.createElement("label");
    createLabelLemonElement.textContent = "Lemon";
    createInputLemonElement = document.createElement("input");
    createInputLemonElement.setAttribute("id", "Lemon");
    modalInfoContainer.appendChild(createLabelLemonElement);
    modalInfoContainer.appendChild(createInputLemonElement);

    createLabelLimeElement = document.createElement("label");
    createLabelLimeElement.textContent = "Lime";
    createInputLimeElement = document.createElement("input");
    createInputLimeElement.setAttribute("id", "Lime");
    modalInfoContainer.appendChild(createLabelLimeElement);
    modalInfoContainer.appendChild(createInputLimeElement);

    createLabelMelonElement = document.createElement("label");
    createLabelMelonElement.textContent = "Melon";
    createInputMelonElement = document.createElement("input");
    createInputMelonElement.setAttribute("id", "Melon");
    modalInfoContainer.appendChild(createLabelMelonElement);
    modalInfoContainer.appendChild(createInputMelonElement);

    createLabelOrangeElement = document.createElement("label");
    createLabelOrangeElement.textContent = "Orange";
    createInputOrangeElement = document.createElement("input");
    createInputOrangeElement.setAttribute("id", "Orange");
    modalInfoContainer.appendChild(createLabelOrangeElement);
    modalInfoContainer.appendChild(createInputOrangeElement);

    createLabelPeachElement = document.createElement("label");
    createLabelPeachElement.textContent = "Peach";
    createInputPeachElement = document.createElement("input");
    createInputPeachElement.setAttribute("id", "Peach");
    modalInfoContainer.appendChild(createLabelPeachElement);
    modalInfoContainer.appendChild(createInputPeachElement);

    createLabelPearsRawElement = document.createElement("label");
    createLabelPearsRawElement.textContent = "Pears Raw";
    createInputPearsRawElement = document.createElement("input");
    createInputPearsRawElement.setAttribute("id", "Pears raw");
    modalInfoContainer.appendChild(createLabelPearsRawElement);
    modalInfoContainer.appendChild(createInputPearsRawElement);

    createLabelPineappleElement = document.createElement("label");
    createLabelPineappleElement.textContent = "Pineapple";
    createInputPineappleElement = document.createElement("input");
    createInputPineappleElement.setAttribute("id", "Pineapple");
    modalInfoContainer.appendChild(createLabelPineappleElement);
    modalInfoContainer.appendChild(createInputPineappleElement);

    createLabelPlumElement = document.createElement("label");
    createLabelPlumElement.textContent = "Plum";
    createInputPlumElement = document.createElement("input");
    createInputPlumElement.setAttribute("id", "Plum");
    modalInfoContainer.appendChild(createLabelPlumElement);
    modalInfoContainer.appendChild(createInputPlumElement);

    createLabelPumpkinElement = document.createElement("label");
    createLabelPumpkinElement.textContent = "Pumpkin";
    createInputPumpkinElement = document.createElement("input");
    createInputPumpkinElement.setAttribute("id", "Pumpkin");
    modalInfoContainer.appendChild(createLabelPumpkinElement);
    modalInfoContainer.appendChild(createInputPumpkinElement);

    createLabelQuinceElement = document.createElement("label");
    createLabelQuinceElement.textContent = "Quince";
    createInputQuinceElement = document.createElement("input");
    createInputQuinceElement.setAttribute("id", "Quince");
    modalInfoContainer.appendChild(createLabelQuinceElement);
    modalInfoContainer.appendChild(createInputQuinceElement);

    createLabelRaisinsElement = document.createElement("label");
    createLabelRaisinsElement.textContent = "Raisins";
    createInputRaisinsElement = document.createElement("input");
    createInputRaisinsElement.setAttribute("id", "Raisins");
    modalInfoContainer.appendChild(createLabelRaisinsElement);
    modalInfoContainer.appendChild(createInputRaisinsElement);

    createLabelRaspberryElement = document.createElement("label");
    createLabelRaspberryElement.textContent = "Raspberry";
    createInputRaspberryElement = document.createElement("input");
    createInputRaspberryElement.setAttribute("id", "Raspberry");
    modalInfoContainer.appendChild(createLabelRaspberryElement);
    modalInfoContainer.appendChild(createInputRaspberryElement);

    createLabelStrawberryElement = document.createElement("label");
    createLabelStrawberryElement.textContent = "Strawberry";
    createInputStrawberryElement = document.createElement("input");
    createInputStrawberryElement.setAttribute("id", "Strawberry");
    modalInfoContainer.appendChild(createLabelStrawberryElement);
    modalInfoContainer.appendChild(createInputStrawberryElement);

    createLabelWatermelonElement = document.createElement("label");
    createLabelWatermelonElement.textContent = "Watermelon";
    createInputWatermelonElement = document.createElement("input");
    createInputWatermelonElement.setAttribute("id", "Watermelon");
    modalInfoContainer.appendChild(createLabelWatermelonElement);
    modalInfoContainer.appendChild(createInputWatermelonElement);

    createNewButtonModal = document.createElement("button");
    createNewButtonModal.setAttribute("id", "rowForm");
    createNewButtonModal.setAttribute("type", "submit");
    createNewButtonModal.textContent = "Add New Row";
    modalInfoContainer.appendChild(createNewButtonModal);

    createNewButtonModal.addEventListener("click", () => {
      // If all of the input elements are empty show alert message else append to table along with the buttons
      if (
        createInputPainElement.value == "" &&
        createInputAppleRawElement.value == "" &&
        createInputAppricotRawElement.value == "" &&
        createInputApricotDryElement.value == "" &&
        createInputAvocadoRawElement.value == "" &&
        createInputBananaElement.value == "" &&
        createInputBlackberryElement.value == "" &&
        createInputBlackcurrantRawElement.value == "" &&
        createInputBlueberryElement.value == "" &&
        createInputBreadfruitRawElement.value == "" &&
        createInputCherryElement.value == "" &&
        createInputClementinesRawElement.value == "" &&
        createInputCoconutRawElement.value == "" &&
        createInputDatesElement.value == "" &&
        createInputGrapefruitRawElement.value == "" &&
        createInputLemonElement.value == "" &&
        createInputLimeElement.value == "" &&
        createInputMelonElement.value == "" &&
        createInputOrangeElement.value == "" &&
        createInputPeachElement.value == "" &&
        createInputPearsRawElement.value == "" &&
        createInputPineappleElement.value == "" &&
        createInputPlumElement.value == "" &&
        createInputPumpkinElement.value == "" &&
        createInputQuinceElement.value == "" &&
        createInputRaisinsElement.value == "" &&
        createInputRaspberryElement.value == "" &&
        createInputStrawberryElement.value == "" &&
        createInputWatermelonElement.value == ""
      ) {
        alert("No valid information, can't proceed!");
      } else {
        appleRaw = document.getElementById("Apple, raw").value;
        painDescription = document.getElementById("pain_description").value;
        addNewRow();
        setupPagination();
        updateTableDisplay();
        resetModalForm();
      }

      console.log(appleRaw);

      console.log(painDescription);

      // fetch('/add-row', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ Apple, raw: appleRaw, pain_description: painDescription }),
      // })
      // .then(response => response.json())
      // .then(data => {
      //     console.log(data.message);
      // })
      // .catch((error) => {
      //     console.error('Error:', error);
      // });
    });
  }
});

function addNewRow() {
  let createNewTR = document.createElement("tr");
  let createFirstNewTD = document.createElement("td");
  let createSecondNewTD = document.createElement("td");
  // Add more td
  let createAppricotRawTD = document.createElement("td");
  let createThirdNewTD = document.createElement("td");
  let createForthNewTD = document.createElement("td");
  let createFifthNewTD = document.createElement("td");
  let createSixthNewTD = document.createElement("td");
  let createSeventsNewTD = document.createElement("td");
  let createEightNewTD = document.createElement("td");
  let createNinthNewTD = document.createElement("td");
  let createTenthNewTD = document.createElement("td");
  let createEleventhNewTD = document.createElement("td");
  let createTwelvethNewTD = document.createElement("td");
  let createThirteenthNewTD = document.createElement("td");
  let createFourteenthNewTD = document.createElement("td");
  let createFifteenthNewTD = document.createElement("td");
  let createSixteenthNewTD = document.createElement("td");
  let createSeventeenthNewTD = document.createElement("td");
  let createEightteenthNewTD = document.createElement("td");
  let createNineteenthNewTD = document.createElement("td");
  let createTwenteethNewTD = document.createElement("td");
  let createTwentyOneNewTD = document.createElement("td");
  let createTwentyTwoNewTD = document.createElement("td");
  let createTwentyThreeNewTD = document.createElement("td");
  let createTwentyFourNewTD = document.createElement("td");
  let createTwentyFivedNewTD = document.createElement("td");
  let createTwentySixNewTD = document.createElement("td");
  let createTwentySevenNewTD = document.createElement("td");
  let createTwentyEightNewTD = document.createElement("td");
  // parent td for button container div element
  let createButtonContainerNewTDParent = document.createElement("td");
  let createNewDivButtonContainer = document.createElement("div");
  let createDeleteButtonNew = document.createElement("button");
  let createEditButtonNew = document.createElement("button");

  createFirstNewTD.textContent = createInputPainElement.value;
  createSecondNewTD.textContent = createInputAppleRawElement.value;
  createAppricotRawTD.textContent = createInputAppricotRawElement.value;
  createThirdNewTD.textContent = createInputApricotDryElement.value;
  createForthNewTD.textContent = createInputAvocadoRawElement.value;
  createFifthNewTD.textContent = createInputBananaElement.value;
  createSixthNewTD.textContent = createInputBlackberryElement.value;
  createSeventsNewTD.textContent = createInputBlackcurrantRawElement.value;
  createEightNewTD.textContent = createInputBlueberryElement.value;
  createNinthNewTD.textContent = createInputBreadfruitRawElement.value;
  createTenthNewTD.textContent = createInputCherryElement.value;
  createEleventhNewTD.textContent = createInputClementinesRawElement.value;
  createTwelvethNewTD.textContent = createInputCoconutRawElement.value;
  createThirteenthNewTD.textContent = createInputDatesElement.value;
  createFourteenthNewTD.textContent = createInputGrapefruitRawElement.value;
  createFifteenthNewTD.textContent = createInputLemonElement.value;
  createSixteenthNewTD.textContent = createInputLimeElement.value;
  createSeventeenthNewTD.textContent = createInputMelonElement.value;
  createEightteenthNewTD.textContent = createInputOrangeElement.value;
  createNineteenthNewTD.textContent = createInputPeachElement.value;
  createTwenteethNewTD.textContent = createInputPearsRawElement.value;
  createTwentyOneNewTD.textContent = createInputPineappleElement.value;
  createTwentyTwoNewTD.textContent = createInputPlumElement.value;
  createTwentyThreeNewTD.textContent = createInputPumpkinElement.value;
  createTwentyFourNewTD.textContent = createInputQuinceElement.value;
  createTwentyFivedNewTD.textContent = createInputRaisinsElement.value;
  createTwentySixNewTD.textContent = createInputRaspberryElement.value;
  createTwentySevenNewTD.textContent = createInputStrawberryElement.value;
  createTwentyEightNewTD.textContent = createInputWatermelonElement.value;

  createButtonContainerNewTDParent.className = "third-td-row";

  createDeleteButtonNew.textContent = "Delete";
  createEditButtonNew.textContent = "Edit";
  createNewDivButtonContainer.className = "button-container";
  createNewDivButtonContainer.append(
    createDeleteButtonNew,
    createEditButtonNew
  );

  createNewTR.append(
    createFirstNewTD,
    createSecondNewTD,
    createAppricotRawTD,
    createThirdNewTD,
    createForthNewTD,
    createFifthNewTD,
    createSixthNewTD,
    createSeventsNewTD,
    createEightNewTD,
    createNinthNewTD,
    createTenthNewTD,
    createEleventhNewTD,
    createTwelvethNewTD,
    createThirteenthNewTD,
    createFourteenthNewTD,
    createFifteenthNewTD,
    createSixteenthNewTD,
    createSeventeenthNewTD,
    createEightteenthNewTD,
    createNineteenthNewTD,
    createTwenteethNewTD,
    createTwentyOneNewTD,
    createTwentyTwoNewTD,
    createTwentyThreeNewTD,
    createTwentyFourNewTD,
    createTwentyFivedNewTD,
    createTwentySixNewTD,
    createTwentySevenNewTD,
    createTwentyEightNewTD
  );
  createNewTR.append(createButtonContainerNewTDParent);
  createButtonContainerNewTDParent.append(createNewDivButtonContainer);

  table.appendChild(createNewTR);
}

function resetModalForm() {
  modal.style.display = "none";
  usernameModal.style.display = "inline";
  usernameModal.value = "";
  passwordModal.style.display = "inline";
  passwordModal.value = "";
  usernameLabel.style.display = "inline";
  passwordLabel.style.display = "inline";
  createRowButtonModal.style.display = "inline";
  createLabelPainElement.remove();
  createLabelAppleRawElement.remove();
  createInputPainElement.remove();
  createInputAppleRawElement.remove();
  createLabelAppleRawElement.remove();
  createInputAppleRawElement.remove();
  createLabelAppricotRawElement.remove();
  createInputAppricotRawElement.remove();
  createLabelApricotDryElement.remove();
  createInputApricotDryElement.remove();
  createLabelAvocadoRawElement.remove();
  createInputAvocadoRawElement.remove();
  createLabelBananaElement.remove();
  createInputBananaElement.remove();
  createLabelBlackberryElement.remove();
  createInputBlackberryElement.remove();
  createLabelBlackcurrantRawElement.remove();
  createInputBlackcurrantRawElement.remove();
  createLabelBlueberryElement.remove();
  createInputBlueberryElement.remove();
  createLabelBreadfruitRawElement.remove();
  createInputBreadfruitRawElement.remove();
  createLabelCherryElement.remove();
  createInputCherryElement.remove();
  createLabelClementinesRawElement.remove();
  createInputClementinesRawElement.remove();
  createLabelCoconutRawElement.remove();
  createInputCoconutRawElement.remove();
  createLabelDatesElement.remove();
  createInputDatesElement.remove();
  createLabelGrapefruitRawElement.remove();
  createInputGrapefruitRawElement.remove();
  createLabelLemonElement.remove();
  createInputLemonElement.remove();
  createLabelLimeElement.remove();
  createInputLimeElement.remove();
  createLabelMelonElement.remove();
  createInputMelonElement.remove();
  createLabelOrangeElement.remove();
  createInputOrangeElement.remove();
  createLabelPeachElement.remove();
  createInputPeachElement.remove();
  createLabelPearsRawElement.remove();
  createInputPearsRawElement.remove();
  createLabelPineappleElement.remove();
  createInputPineappleElement.remove();
  createLabelPlumElement.remove();
  createInputPlumElement.remove();
  createLabelPumpkinElement.remove();
  createInputPumpkinElement.remove();
  createLabelQuinceElement.remove();
  createInputQuinceElement.remove();
  createLabelRaisinsElement.remove();
  createInputRaisinsElement.remove();
  createLabelRaspberryElement.remove();
  createInputRaspberryElement.remove();
  createLabelStrawberryElement.remove();
  createInputStrawberryElement.remove();
  createLabelWatermelonElement.remove();
  createInputWatermelonElement.remove();
  createInputPainElement.removeAttribute("id");
  createInputAppleRawElement.removeAttribute("id");
  createInputAppricotRawElement.removeAttribute("id");
  createInputApricotDryElement.removeAttribute("id");
  createInputAvocadoRawElement.removeAttribute("id");
  createInputBananaElement.removeAttribute("id");
  createInputBlackberryElement.removeAttribute("id");
  createInputBlackcurrantRawElement.removeAttribute("id");
  createInputBlueberryElement.removeAttribute("id");
  createInputBreadfruitRawElement.removeAttribute("id");
  createInputCherryElement.removeAttribute("id");
  createInputClementinesRawElement.removeAttribute("id");
  createInputCoconutRawElement.removeAttribute("id");
  createInputDatesElement.removeAttribute("id");
  createInputGrapefruitRawElement.removeAttribute("id");
  createInputLemonElement.removeAttribute("id");
  createInputLimeElement.removeAttribute("id");
  createInputMelonElement.removeAttribute("id");
  createInputOrangeElement.removeAttribute("id");
  createInputPeachElement.removeAttribute("id");
  createInputPearsRawElement.removeAttribute("id");
  createInputPineappleElement.removeAttribute("id");
  createInputPlumElement.removeAttribute("id");
  createInputPumpkinElement.removeAttribute("id");
  createInputQuinceElement.removeAttribute("id");
  createInputRaisinsElement.removeAttribute("id");
  createInputRaspberryElement.removeAttribute("id");
  createInputStrawberryElement.removeAttribute("id");
  createInputWatermelonElement.removeAttribute("id");
  if (createNewButtonModal) {
    createNewButtonModal.removeAttribute("type");
    createNewButtonModal.removeAttribute("id");
    createNewButtonModal.remove();
  }
}
