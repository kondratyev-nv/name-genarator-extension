
function NameGeneratorExtensionProfilesForm(document) {
    this.document = document;

    var aliasField = this.getElement('alias'), self = this;
    aliasField.on('change paste keyup', function () {
        self.getElement('savebtn').prop('disabled', !aliasField.val());
    });
};

NameGeneratorExtensionProfilesForm.prototype.getLoadOption = function () {
    return this.getElement('savednames').val();
};

NameGeneratorExtensionProfilesForm.prototype.alias = function (value) {
    var aliasField = this.getElement('alias');
    if (value == null) {
        return aliasField.val();
    }
    aliasField.val(value);
    this.getElement('savebtn').prop('disabled', !aliasField.val());
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
