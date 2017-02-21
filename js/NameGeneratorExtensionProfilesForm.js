
function NameGeneratorExtensionProfilesForm(document) {
    this.document = document;

    var aliasField = this.getElement('alias'), self = this;
    aliasField.on('input', function () {
        self.getElement('savebtn').prop('disabled', !aliasField.val());
    });
};

NameGeneratorExtensionProfilesForm.prototype.getLoadOption = function () {
    return this.getElement('savednames').val();
};

NameGeneratorExtensionProfilesForm.prototype.alias = function (value) {
    if (value == null) {
        return this.getElement('alias').val();
    }
    return this.getElement('alias').val(value);
};

NameGeneratorExtensionProfilesForm.prototype.fillSavedNamesSelector = function (savedNames) {
    var select = this.getElement('savednames');
    Utils.clearSelect(select);
    for (var key in savedNames) {
        if (savedNames.hasOwnProperty(key)) {
            var option = Utils.createOption(this.document, key, key);
            select.append(option);
        }
    }
};

NameGeneratorExtensionProfilesForm.prototype.changeSavedNamesOption = function (alias) {
    this.getElement('savednames').val(alias);
};

NameGeneratorExtensionProfilesForm.prototype.getElement = function (id) {
    return $('#' + id);
};
