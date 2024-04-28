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
let createEditedInputWatermelonElement = "";
 
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
        createEditedLabelAvocadoRawElement = document.createElement("label");
        createEditedInputAvocadoRawElement = document.createElement("input");
        createEditedLabelBananaElement = document.createElement("label");
        createEditedInputBananaElement = document.createElement("input");
        createEditedLabelBlackberryElement = document.createElement("label");
        createEditedInputBlackberryElement = document.createElement("input");
        createEditedLabelBlackcurrantRawElement = document.createElement("label");
        createEditedInputBlackcurrantRawElement = document.createElement("input");
        createEditedLabelBlueberryElement = document.createElement("label");
        createEditedInputBlueberryElement = document.createElement("input");
        createEditedLabelBreadfruitRawElement = document.createElement("label");
        createEditedInputBreadfruitRawElement = document.createElement("input");
        createEditedLabelCherryElement = document.createElement("label");
        createEditedInputCherryElement = document.createElement("input");
        createEditedLabelClementinesRawElement = document.createElement("label");
        createEditedInputClementinesRawElement = document.createElement("input");
        createEditedLabelCoconutRawElement = document.createElement("label");
        createEditedInputCoconutRawElement = document.createElement("input");
        createEditedLabelDatesElement = document.createElement("label");
        createEditedInputDatesElement = document.createElement("input");
        createEditedLabelGrapefruitRawElement = document.createElement("label");
        createEditedInputGrapefruitRawElement = document.createElement("input");
        createEditedLabelLemonElement = document.createElement("label");
        createEditedInputLemonElement = document.createElement("input");
        createEditedLabelLimeElement = document.createElement("label");
        createEditedInputLimeElement = document.createElement("input");
        createEditedLabelMelonElement = document.createElement("label");
        createEditedInputMelonElement = document.createElement("input");
        createEditedLabelOrangeElement = document.createElement("label");
        createEditedInputOrangeElement = document.createElement("input");
        createEditedLabelPeachElement = document.createElement("label");
        createEditedInputPeachElement = document.createElement("input");
        createEditedLabelPearsRawElement = document.createElement("label");
        createEditedInputPearsRawElement = document.createElement("input");
        createEditedLabelPineappleElement = document.createElement("label");
        createEditedInputPineappleElement = document.createElement("input");
        createEditedLabelPlumElement = document.createElement("label");
        createEditedInputPlumElement = document.createElement("input");
        createEditedLabelPumpkinElement = document.createElement("label");
        createEditedInputPumpkinElement = document.createElement("input");
        createEditedLabelQuinceElement = document.createElement("label");
        createEditedInputQuinceElement = document.createElement("input");
        createEditedLabelRaisinsElement = document.createElement("label");
        createEditedInputRaisinsElement = document.createElement("input");
        createEditedLabelRaspberryElement = document.createElement("label");
        createEditedInputRaspberryElement = document.createElement("input");
        createEditedLabelStrawberryElement = document.createElement("label");
        createEditedInputStrawberryElement = document.createElement("input");
        createEditedLabelWatermelonElement = document.createElement("label");
        createEditedInputWatermelonElement = document.createElement("input");
        createEditedButton = document.createElement("button");
 
        createEditedLabelBolka.textContent = " Fruits & Vegetables: ";
        createEditedLabelBilki.textContent = " Apple, Raw ";
        createEditedLabelApricotRawElement.textContent = " Apricot, Raw ";
        createEditedLabelApricotDryElement.textContent = " Apricot, Dry ";
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
        createEditedLabelLimeElement.textContent = " Lime ";
        createEditedLabelMelonElement.textContent = " Melon ";
        createEditedLabelOrangeElement.textContent = " Orange ";
        createEditedLabelPeachElement.textContent = " Peach ";
        createEditedLabelPearsRawElement.textContent = " Pears ";
        createEditedLabelPineappleElement.textContent = " Pineapple ";
        createEditedLabelPlumElement.textContent = " Plum ";
        createEditedLabelPumpkinElement.textContent = " Pumpkin ";
        createEditedLabelQuinceElement.textContent = " Quince ";
        createEditedLabelRaisinsElement.textContent = " Raisins ";
        createEditedLabelRaspberryElement.textContent = " Raspberry ";
        createEditedLabelStrawberryElement.textContent = " Strawberry ";
        createEditedLabelWatermelonElement.textContent = " Watermelon ";
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
        modalContentEditContainer.append(createEditedLabelLimeElement, createEditedInputLimeElement);
        modalContentEditContainer.append(createEditedLabelMelonElement, createEditedInputMelonElement);
        modalContentEditContainer.append(createEditedLabelOrangeElement, createEditedInputOrangeElement);
        modalContentEditContainer.append(createEditedLabelPeachElement, createEditedInputPeachElement);
        modalContentEditContainer.append(createEditedLabelPearsRawElement, createEditedInputPearsRawElement);
        modalContentEditContainer.append(createEditedLabelPineappleElement, createEditedInputPineappleElement);
        modalContentEditContainer.append(createEditedLabelPlumElement, createEditedInputPlumElement);
        modalContentEditContainer.append(createEditedLabelPumpkinElement, createEditedInputPumpkinElement);
        modalContentEditContainer.append(createEditedLabelQuinceElement, createEditedInputQuinceElement);
        modalContentEditContainer.append(createEditedLabelRaisinsElement, createEditedInputRaisinsElement);
        modalContentEditContainer.append(createEditedLabelRaspberryElement, createEditedInputRaspberryElement);
        modalContentEditContainer.append(createEditedLabelStrawberryElement, createEditedInputStrawberryElement);
        modalContentEditContainer.append(createEditedLabelWatermelonElement, createEditedInputWatermelonElement);
        modalContentEditContainer.append(createEditedButton);
        closeEditModal.style.display = "flex";
 
        createEditedButton.onclick = function () {
            if (createEditedInputBolka.value == "" && createEditedInputBilki.value == "" &&
                createEditedInputApricotRawElement == "" && createEditedInputApricotDryElement == "" && createEditedInputAvocadoRawElement
                == "" && createEditedInputBananaElement
                == "" && createEditedInputBlackberryElement
                == "" && createEditedInputBlackcurrantRawElement
                == "" && createEditedInputBlueberryElement
                == "" && createEditedInputBreadfruitRawElement
                == "" && createEditedInputCherryElement
                == "" && createEditedInputClementinesRawElement
                == "" && createEditedInputCoconutRawElement
                == "" && createEditedInputDatesElement
                == "" && createEditedInputGrapefruitRawElement
                == "" && createEditedInputLemonElement
                == "" && createEditedInputLimeElement
                == "" && createEditedInputMelonElement
                == "" && createEditedInputOrangeElement
                == "" && createEditedInputPeachElement
                == "" && createEditedInputPearsRawElement
                == "" && createEditedInputPineappleElement
                == "" && createEditedInputPlumElement
                == "" && createEditedInputPumpkinElement
                == "" && createEditedInputQuinceElement
                == "" && createEditedInputRaisinsElement
                == "" && createEditedInputRaspberryElement
                == "" && createEditedInputStrawberryElement
                == "" && createEditedInputWatermelonElement == "") {
                alert("No valid information, can't proceed!")
            } else {
                if (createEditedInputBolka.value !== "") {
                tableTD[0].innerHTML = createEditedInputBolka.value;
                }
                if (createEditedInputBilki.value !== "") {
                tableTD[1].innerHTML = createEditedInputBilki.value;
                }
                if (createEditedInputApricotRawElement.value !== "") {
                tableTD[2].innerHTML = createEditedInputApricotRawElement.value;
                }
                if (createEditedInputApricotDryElement.value !== "") {
                tableTD[3].innerHTML = createEditedInputApricotDryElement.value;
                }
                if (createEditedInputAvocadoRawElement.value !== "") {
                tableTD[4].innerHTML = createEditedInputAvocadoRawElement.value;
                }
                if (createEditedInputBananaElement.value !== "") {
                tableTD[5].innerHTML = createEditedInputBananaElement.value;
                }
                if (createEditedInputBlackberryElement.value !== "") {
                tableTD[6].innerHTML = createEditedInputBlackberryElement.value;
                }
                if (createEditedInputBlackcurrantRawElement.value !== "") {
                tableTD[7].innerHTML = createEditedInputBlackcurrantRawElement.value;
                }
                if (createEditedInputBlueberryElement.value !== "") {
                tableTD[8].innerHTML = createEditedInputBlueberryElement.value;
                }
                if (createEditedInputBreadfruitRawElement.value !== "") {
                tableTD[9].innerHTML = createEditedInputBreadfruitRawElement.value;
                }
                if (createEditedInputCherryElement.value !== "") {
                tableTD[10].innerHTML = createEditedInputCherryElement.value;
                }
                if (createEditedInputClementinesRawElement.value !== "") {
                tableTD[11].innerHTML = createEditedInputClementinesRawElement.value;
                }
                if (createEditedInputCoconutRawElement.value !== "") {
                tableTD[12].innerHTML = createEditedInputCoconutRawElement.value;
                }
                if (createEditedInputDatesElement.value !== "") {
                tableTD[13].innerHTML = createEditedInputDatesElement.value;
                }
                if (createEditedInputGrapefruitRawElement.value !== "") {
                tableTD[14].innerHTML = createEditedInputGrapefruitRawElement.value;
                }
                if (createEditedInputLemonElement.value !== "") {
                tableTD[15].innerHTML = createEditedInputLemonElement.value;
                }
                if (createEditedInputLimeElement.value !== "") {
                tableTD[16].innerHTML = createEditedInputLimeElement.value;
                }
                if (createEditedInputMelonElement.value !== "") {
                tableTD[17].innerHTML = createEditedInputMelonElement.value;
                }
                if (createEditedInputOrangeElement.value !== "") {
                tableTD[18].innerHTML = createEditedInputOrangeElement.value;
                }
                if (createEditedInputPeachElement.value !== "") {
                tableTD[19].innerHTML = createEditedInputPeachElement.value;
                }
                if (createEditedInputPearsRawElement.value !== "") {
                tableTD[20].innerHTML = createEditedInputPearsRawElement.value;
                }
                if (createEditedInputPineappleElement.value !== "") {
                tableTD[21].innerHTML = createEditedInputPineappleElement.value;
                }
                if (createEditedInputPlumElement.value !== "") {
                tableTD[22].innerHTML = createEditedInputPlumElement.value;
                }
                if (createEditedInputPumpkinElement.value !== "") {
                tableTD[23].innerHTML = createEditedInputPumpkinElement.value;
                }
                if (createEditedInputQuinceElement.value !== "") {
                tableTD[24].innerHTML = createEditedInputQuinceElement.value;
                }
                if (createEditedInputRaisinsElement.value !== "") {
                tableTD[25].innerHTML = createEditedInputRaisinsElement.value;
                }
                if (createEditedInputRaspberryElement.value !== "") {
                tableTD[26].innerHTML = createEditedInputRaspberryElement.value;
                }
                if (createEditedInputStrawberryElement.value !== "") {
                tableTD[27].innerHTML = createEditedInputStrawberryElement.value;
                }
                if (createEditedInputWatermelonElement.value !== "") {
                tableTD[28].innerHTML = createEditedInputWatermelonElement.value;
                }
 
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
                createEditedLabelLimeElement.remove();
                createEditedInputLimeElement.remove();
                createEditedLabelMelonElement.remove();
                createEditedInputMelonElement.remove();
                createEditedLabelOrangeElement.remove();
                createEditedInputOrangeElement.remove();
                createEditedLabelPeachElement.remove();
                createEditedInputPeachElement.remove();
                createEditedLabelPearsRawElement.remove();
                createEditedInputPearsRawElement.remove();
                createEditedLabelPineappleElement.remove();
                createEditedInputPineappleElement.remove();
                createEditedLabelPlumElement.remove();
                createEditedInputPlumElement.remove();
                createEditedLabelPumpkinElement.remove();
                createEditedInputPumpkinElement.remove();
                createEditedLabelQuinceElement.remove();
                createEditedInputQuinceElement.remove();
                createEditedLabelRaisinsElement.remove();
                createEditedInputRaisinsElement.remove();
                createEditedLabelRaspberryElement.remove();
                createEditedInputRaspberryElement.remove();
                createEditedLabelStrawberryElement.remove();
                createEditedInputStrawberryElement.remove();
                createEditedLabelWatermelonElement.remove();
                createEditedInputWatermelonElement.remove();
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
 
    if (event.target.textContent === 'Edit') {
        editingBilki = event.target.closest('tr');
        tableTD = editingBilki.querySelectorAll("table td");
        editRowModal.style.display = "flex";
    }
});
 
 
closeDeleteModal.onclick = function () {
    resetModalDelete();
};
 
closeEditModal.onclick = function () {
    resetModalEdit();
};
 
window.onclick = function (event) {
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
    createEditedLabelLimeElement.remove();
    createEditedInputLimeElement.remove();
    createEditedLabelMelonElement.remove();
    createEditedInputMelonElement.remove();
    createEditedLabelOrangeElement.remove();
    createEditedInputOrangeElement.remove();
    createEditedLabelPeachElement.remove();
    createEditedInputPeachElement.remove();
    createEditedLabelPearsRawElement.remove();
    createEditedInputPearsRawElement.remove();
    createEditedLabelPineappleElement.remove();
    createEditedInputPineappleElement.remove();
    createEditedLabelPlumElement.remove();
    createEditedInputPlumElement.remove();
    createEditedLabelPumpkinElement.remove();
    createEditedInputPumpkinElement.remove();
    createEditedLabelQuinceElement.remove();
    createEditedInputQuinceElement.remove();
    createEditedLabelRaisinsElement.remove();
    createEditedInputRaisinsElement.remove();
    createEditedLabelRaspberryElement.remove();
    createEditedInputRaspberryElement.remove();
    createEditedLabelStrawberryElement.remove();
    createEditedInputStrawberryElement.remove();
    createEditedLabelWatermelonElement.remove();
    createEditedInputWatermelonElement.remove();
    createEditedButton.remove();
}