// FIXME: BUG FIX --> Text on hidden ads does not cut right when screen is shrunk
// FIXME: Get length of smallAds text including the username, but cut the text without it
function cutLongText(elements, maxLength) {
    for (let i = 0, len = elements.length; i < len; i += 1) {
        let currentText = elements[i].innerText;
        if (currentText.length > maxLength) {
            elements[i].innerText = currentText.slice(0, maxLength) + '...';
            console.log(elements[i].innerText);
        }
    }
}

function convertToLowerCaseWithoutFirstLetter(elements) {
    for (let i = 0, len = elements.length; i < len; i += 1) {

        let currentText = elements[i].innerText;
        if (currentText.length > 45) {
            currentText = currentText.slice(0, 45) + '...';
        }

        elements[i].innerText = currentText.slice(0, 1) + currentText.slice(1).toLowerCase();
    }
}

var utils = {
    cutLongText,
    convertToLowerCaseWithoutFirstLetter
};

export { utils };