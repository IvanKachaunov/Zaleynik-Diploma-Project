let deleteRowModal = document.getElementById("deleteRowModal");
let editRowModal = document.getElementById("editRowModal");
let modalContentEditContainer = document.querySelector(".inputInfo-container-edit");
let deleteRowButton = document.getElementById("delete-row-button");
let editRowButton = document.getElementById("edit-row-button");
let usernameModalDelete = document.getElementById("username-delete");
let passwordModalDelete = document.getElementById("password-delete");
let usernameLabelEdit = document.querySelector("#usernameLabel-edit");
let usernameModalEdit = document.getElementById("username-edit");
let passwordLabelEdit = document.querySelector("#passwordLabel-edit");
let passwordModalEdit = document.getElementById("password-edit");
let closeEditModal = document.querySelector(".close-editModal");
let closeDeleteModal = document.querySelector(".close-deleteModal");
let editingBilki = "";
let removedElement = "";
let editingBolka = "";
let tableTD = "";

let createEditedLabelBolka = "";
let createEditedInputBolka = "";

let createEditedLabelBilki = "";
let createEditedInputBilki = "";

let createEditedLabelApricotRawElement = "";
let createEditedInputApricotRawElement = "";

let createEditedLabelApricotDryElement = "";
let createEditedInputApricotDryElement = "";

let createEditedLabelAvocadoRawElement = "";
let createEditedInputAvocadoRawElement = "";

let createEditedLabelBananaElement = "";
let createEditedInputBananaElement = "";

let createEditedLabelBlackberryElement = "";
let createEditedInputBlackberryElement = "";

let createEditedLabelBlackcurrantRawElement = "";
let createEditedInputBlackcurrantRawElement = "";

let createEditedLabelBlueberryElement = "";
let createEditedInputBlueberryElement = "";

let createEditedLabelBreadfruitRawElement = "";
let createEditedInputBreadfruitRawElement = "";

let createEditedLabelCherryElement = "";
let createEditedInputCherryElement = "";

let createEditedLabelClementinesRawElement = "";
let createEditedInputClementinesRawElement = "";

let createEditedLabelCoconutRawElement = "";
let createEditedInputCoconutRawElement = "";

let createEditedLabelDatesElement = "";
let createEditedInputDatesElement = "";

let createEditedLabelGrapefruitRawElement = "";
let createEditedInputGrapefruitRawElement = "";

let createEditedLabelLemonElement = "";
let createEditedInputLemonElement = "";

let createEditedLabelLimeElement = "";
let createEditedInputLimeElement = "";

let createEditedLabelMelonElement = "";
let createEditedInputMelonElement = "";

let createEditedLabelOrangeElement = "";
let createEditedInputOrangeElement = "";

let createEditedLabelPeachElement = "";
let createEditedInputPeachElement = "";

let createEditedLabelPearsRawElement = "";
let createEditedInputPearsRawElement = "";

let createEditedLabelPineappleElement = "";
let createEditedInputPineappleElement = "";

let createEditedLabelPlumElement = "";
let createEditedInputPlumElement = "";

let createEditedLabelPumpkinElement = "";
let createEditedInputPumpkinElement = "";

let createEditedLabelQuinceElement = "";
let createEditedInputQuinceElement = "";

let createEditedLabelRaisinsElement = "";
let createEditedInputRaisinsElement = "";

let createEditedLabelRaspberryElement = "";
let createEditedInputRaspberryElement = "";

let createEditedLabelStrawberryElement = "";
let createEditedInputStrawberryElement = "";

let createEditedLabelWatermelonElement = "";
let createEditedInputWatermelonElement  = "";

let createEditedButton = "";

deleteRowButton.addEventListener("click", () => {
    if (usernameModalDelete.value !== "admin" || passwordModalDelete.value !== "admin") {
        alert("No valid information, can't proceed!");
        usernameModalDelete.value = "";
        passwordModalDelete.value = "";
        deleteRowModal.style.display = "none";
        console.log(deleteRowButton);
    } else {
        removedElement.remove();

        usernameModalDelete.value = "";
        passwordModalDelete.value = "";
        deleteRowModal.style.display = "none";

        // Update display and pagination
        updateTableDisplay();
        setupPagination(Math.ceil((table.querySelectorAll('tr').length - 1) / rowsPerPage));
    }
});

// Event listener for Edit Row button
editRowButton.addEventListener("click", () => {
    if (usernameModalEdit.value !== "admin" || passwordModalEdit.value !== "admin") {
        alert("No valid information, can't proceed!");
        usernameModalEdit.value = "";
        passwordModalEdit.value = "";
        editRowModal.style.display = "none";
    } else {
        usernameLabelEdit.style.display = "none";
        usernameModalEdit.style.display = "none";
        passwordLabelEdit.style.display = "none";
        passwordModalEdit.style.display = "none";
        editRowButton.style.display = "none";
        closeEditModal.style.display = "none";
        createEditedLabelBolka = document.createElement("label");
        createEditedInputBolka = document.createElement("input");
        createEditedLabelBilki = document.createElement("label");
        createEditedInputBilki = document.createElement("input");
        createEditedLabelApricotRawElement = document.createElement("label");
        createEditedInputApricotRawElement = document.createElement("input");
        createEditedLabelApricotDryElement = document.createElement("label");
        createEditedInputApricotDryElement = document.createElement("input");
        createEditedButton = document.createElement("button");

        createEditedLabelBolka.textContent = " Болка: ";
        createEditedLabelBilki.textContent = " Apple, Raw ";
        createEditedLabelApricotRawElement.textContent = " Apricot, Raw ";
        createEditedLabelAvocadoRawElement.textContent = " Avocado Raw ";
        createEditedLabelBananaElement.textContent = " Banana ";
        createEditedLabelBlackberryElement.textContent = " Blackberry ";
        createEditedLabelBlueberryElement.textContent = " Blueberry ";
        createEditedLabelBlackcurrantRawElement.textContent = " Blackcurrant Raw ";
        createEditedLabelBreadfruitRawElement.textContent = " Breadfruit Raw ";
        createEditedLabelCherryElement.textContent = " Cherry ";
        createEditedLabelClementinesRawElement.textContent = " Clementines Raw ";
        createEditedLabelCoconutRawElement.textContent = " Coconut Raw ";
        createEditedLabelDatesElement.textContent = " Dates ";
        createEditedLabelGrapefruitRawElement.textContent = " Grapefruit Raw ";
        createEditedLabelLemonElement.textContent = " Lemon ";
        createEditedButton.textContent = "Edit Current Row";
        modalContentEditContainer.append(createEditedLabelBolka, createEditedInputBolka);
        modalContentEditContainer.append(createEditedLabelBilki, createEditedInputBilki);
        modalContentEditContainer.append(createEditedLabelApricotRawElement, createEditedInputApricotRawElement);
        modalContentEditContainer.append(createEditedLabelApricotDryElement, createEditedInputApricotDryElement);
        modalContentEditContainer.append(createEditedLabelAvocadoRawElement, createEditedInputAvocadoRawElement);
        modalContentEditContainer.append(createEditedLabelBananaElement, createEditedInputBananaElement);
        modalContentEditContainer.append(createEditedLabelBlackberryElement, createEditedInputBlackberryElement);
        modalContentEditContainer.append(createEditedLabelBlackcurrantRawElement, createEditedInputBlackcurrantRawElement);
        modalContentEditContainer.append(createEditedLabelBlueberryElement, createEditedInputBlueberryElement);
        modalContentEditContainer.append(createEditedLabelBreadfruitRawElement, createEditedInputBreadfruitRawElement);
        modalContentEditContainer.append(createEditedLabelCherryElement, createEditedInputCherryElement);
        modalContentEditContainer.append(createEditedLabelClementinesRawElement, createEditedInputClementinesRawElement);
        modalContentEditContainer.append(createEditedLabelCoconutRawElement, createEditedInputCoconutRawElement);
        modalContentEditContainer.append(createEditedLabelDatesElement, createEditedInputDatesElement);
        modalContentEditContainer.append(createEditedLabelGrapefruitRawElement, createEditedInputGrapefruitRawElement);
        modalContentEditContainer.append(createEditedLabelLemonElement, createEditedInputLemonElement);
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append();
        modalContentEditContainer.append(createEditedButton);
        closeEditModal.style.display = "flex";

        createEditedButton.onclick = function(){
            if (createEditedInputBolka.value == "" || createEditedInputBilki.value == "") {
                alert("No valid information, can't proceed!")
            } else{
                tableTD[0].innerHTML = createEditedInputBolka.value;
                tableTD[1].innerHTML = createEditedInputBilki.value;
                tableTD[2].innerHTML = createEditedInputApricotRawElement.value;
                tableTD[3].innerHTML = createEditedInputApricotDryElement.value;
                tableTD[4].innerHTML = createEditedInputAvocadoRawElement.value;
                tableTD[5].innerHTML = createEditedInputBananaElement.value;
                tableTD[6].innerHTML = createEditedInputBlackberryElement.value;
                tableTD[7].innerHTML = createEditedInputBlackcurrantRawElement.value;
                tableTD[8].innerHTML = createEditedInputBlueberryElement.value;
                tableTD[9].innerHTML = createEditedInputBreadfruitRawElement.value;
                tableTD[10].innerHTML = createEditedInputCherryElement.value;
                tableTD[11].innerHTML = createEditedInputClementinesRawElement.value;
                tableTD[12].innerHTML = createEditedInputCoconutRawElement.value;
                tableTD[13].innerHTML = createEditedInputDatesElement.value;
                tableTD[14].innerHTML = createEditedInputGrapefruitRawElement.value;
                tableTD[15].innerHTML = createEditedInputLemonElement.value;
                createEditedLabelBolka.remove();
                createEditedInputBolka.remove();
                createEditedLabelBilki.remove();
                createEditedInputBilki.remove();
                createEditedLabelApricotRawElement.remove();
                createEditedInputApricotRawElement.remove();
                createEditedLabelApricotDryElement.remove();
                createEditedInputApricotDryElement.remove();
                createEditedLabelAvocadoRawElement.remove();
                createEditedInputAvocadoRawElement.remove();
                createEditedLabelBananaElement.remove();
                createEditedInputBananaElement.remove();
                createEditedLabelBlackberryElement.remove();
                createEditedInputBlackberryElement.remove();
                createEditedLabelBlackcurrantRawElement.remove();
                createEditedInputBlackcurrantRawElement.remove();
                createEditedLabelBlueberryElement.remove();
                createEditedInputBlueberryElement.remove();
                createEditedLabelBreadfruitRawElement.remove();
                createEditedInputBreadfruitRawElement.remove();
                createEditedLabelCherryElement.remove();
                createEditedInputCherryElement.remove();
                createEditedLabelClementinesRawElement.remove();
                createEditedInputClementinesRawElement.remove();
                createEditedLabelCoconutRawElement.remove();
                createEditedInputCoconutRawElement.remove();
                createEditedLabelDatesElement.remove();
                createEditedInputDatesElement.remove();
                createEditedLabelGrapefruitRawElement.remove();
                createEditedInputGrapefruitRawElement.remove();
                createEditedLabelLemonElement.remove();
                createEditedInputLemonElement.remove();
                createEditedButton.remove();
                usernameLabelEdit.style.display = "inline";
                usernameModalEdit.style.display = "inline";
                passwordLabelEdit.style.display = "inline";
                passwordModalEdit.style.display = "inline";
                editRowButton.style.display = "inline";
                closeEditModal.style.display = "inline";
                editRowModal.style.display = "none"; 
            }
        }
        
        // Reset form and hide modal
        usernameModalEdit.value = "";
        passwordModalEdit.value = "";
    }
});

// Event listener for table click
table.addEventListener('click', (event) => {
    if (event.target.textContent === 'Delete') {
        removedElement = event.target.closest('tr');
        deleteRowModal.style.display = "flex";
    }

    if(event.target.textContent === 'Edit'){
        editingBilki = event.target.closest('tr');
        tableTD = editingBilki.querySelectorAll("table td");
        editRowModal.style.display = "flex";
    }
});


closeDeleteModal.onclick = function() {
    resetModalDelete();
};

closeEditModal.onclick = function() {
    resetModalEdit();
};

window.onclick = function(event) {
    if (event.target == editRowModal) {
        resetModalEdit();
    }
    else if (event.target == deleteRowModal) {
        resetModalDelete();
    }
    else if (event.target == modal) {
        resetModalForm();
    }
};

function resetModalDelete() {
    deleteRowModal.style.display = "none";
}

function resetModalEdit() {
    editRowModal.style.display = "none";    
    usernameLabelEdit.style.display = "inline";
    usernameModalEdit.style.display = "inline";
    passwordLabelEdit.style.display = "inline";
    passwordModalEdit.style.display = "inline";
    editRowButton.style.display = "inline";
    closeEditModal.style.display = "inline";
    createEditedLabelBolka.remove();
    createEditedInputBolka.remove();
    createEditedLabelBilki.remove();
    createEditedInputBilki.remove();
    createEditedLabelApricotRawElement.remove();
    createEditedInputApricotRawElement.remove();
    createEditedLabelApricotDryElement.remove();
    createEditedInputApricotDryElement.remove();
    createEditedLabelAvocadoRawElement.remove();
    createEditedInputAvocadoRawElement.remove();
    createEditedLabelBananaElement.remove();
    createEditedInputBananaElement.remove();
    createEditedLabelBlackberryElement.remove();
    createEditedInputBlackberryElement.remove();
    createEditedLabelBlackcurrantRawElement.remove();
    createEditedInputBlackcurrantRawElement.remove();
    createEditedLabelBlueberryElement.remove();
    createEditedInputBlueberryElement.remove();
    createEditedLabelBreadfruitRawElement.remove();
    createEditedInputBreadfruitRawElement.remove();
    createEditedLabelCherryElement.remove();
    createEditedInputCherryElement.remove();
    createEditedLabelClementinesRawElement.remove();
    createEditedInputClementinesRawElement.remove();
    createEditedLabelCoconutRawElement.remove();
    createEditedInputCoconutRawElement.remove();
    createEditedLabelDatesElement.remove();
    createEditedInputDatesElement.remove();
    createEditedLabelGrapefruitRawElement.remove();
    createEditedInputGrapefruitRawElement.remove();
    createEditedLabelLemonElement.remove();
    createEditedInputLemonElement.remove();
    createEditedButton.remove();
}