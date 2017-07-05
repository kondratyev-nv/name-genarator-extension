var Utils = (function () {
    return {
        capitalizeFirstLetter: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        createOption: function (document, text, value) {
            var option = document.createElement('option');
            option.text = text;
            option.value = value;
            return option;
        },
        clearSelect: function (select) {
            select.empty();
        }
    };
})();
