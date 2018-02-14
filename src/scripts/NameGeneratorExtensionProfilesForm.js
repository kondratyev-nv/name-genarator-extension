var Utils = require('./Utils.js');
import $ from "jquery";

function NameGeneratorExtensionProfilesForm(document) {
    this.document = document;

    var aliasField = this.getElement('alias');
    var self = this;
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
    var options = Object.keys(savedNames).map(function (key) {
        return {
            name: key,
            value: key
        };
    });
    this.setDisabledSavedNamesSelector(options.length < 1);
    Utils.createOptions(this.document, select, options);
};

NameGeneratorExtensionProfilesForm.prototype.setDisabledSavedNamesSelector = function (disabled) {
    this.getElement('savednames').prop('disabled', disabled);
    this.getElement('loadbtn').prop('disabled', disabled);
};

NameGeneratorExtensionProfilesForm.prototype.changeSavedNamesOption = function (alias) {
    this.getElement('savednames').val(alias);
};

NameGeneratorExtensionProfilesForm.prototype.getElement = function (id) {
    return $('#' + id);
};

module.exports = NameGeneratorExtensionProfilesForm;
