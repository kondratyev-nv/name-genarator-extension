
var ProfilesForm = function (document) {
    var getElement = function (id) {
        return $('#' + id);
    };

    var aliasField = getElement('alias');
    aliasField.on('change paste keyup', function () {
        getElement('savebtn').prop('disabled', !aliasField.val());
    });

    return {
        getLoadOption: function () {
            return this.getElement('savednames').val();
        },
        alias: function (value) {
            if (value == null) {
                return aliasField.val();
            }
            aliasField.val(value);
            getElement('savebtn').prop('disabled', !aliasField.val());
        },
        changeSavedNamesOption: function (alias) {
            getElement('savednames').val(alias);
        },
        fillSavedNamesSelector: function (savedNames) {
            var select = getElement('savednames');
            Utils.clearSelect(select);
            for (var key in savedNames) {
                if (savedNames.hasOwnProperty(key)) {
                    var option = Utils.createOption(document, key, key);
                    select.append(option);
                }
            }
        }
    };
};
