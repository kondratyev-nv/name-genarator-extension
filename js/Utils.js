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
        },
        httpRequest: function (requestConfiguration) {
            var xhr = new XMLHttpRequest();
            xhr.open(requestConfiguration.method || 'GET',
                requestConfiguration.url,
                true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == xhr.DONE) {
                    try {
                        requestConfiguration.onCompleted(xhr.responseText);
                    } catch (ex) {
                        requestConfiguration.onError(ex);
                    }
                }
            };
            xhr.send();
        }
    };
})();
