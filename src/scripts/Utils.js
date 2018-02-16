
function Utils() {

}

Utils.capitalizeFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

Utils.createOptions = function (document, select, options) {
    options.forEach(option => {
        select.append(Utils.createOption(document, option.name, option.value));
    });
};

Utils.createOption = function (document, text, value) {
    var option = document.createElement('option');
    option.text = text;
    option.value = value;
    return option;
};

Utils.clearSelect = function (select) {
    select.empty();
};

module.exports = Utils;
