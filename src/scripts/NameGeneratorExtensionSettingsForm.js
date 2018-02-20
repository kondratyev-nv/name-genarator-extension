var Utils = require('./Utils.js');
import $ from "jquery";

function NameGeneratorExtensionSettingsForm(document, refreshAction) {
    this.document = document;
    this.getElement('sex').change(refreshAction);
    this.getElement('country').change(refreshAction);
};

NameGeneratorExtensionSettingsForm.prototype.getGeneratorOption = function () {
    return this.getElement('generatortype').val();
};

NameGeneratorExtensionSettingsForm.prototype.setGeneratorInfo = function (info) {
    this.getElement('generatorurl').text(info.url);
    this.getElement('generatorurl').attr('href', info.url);
};

NameGeneratorExtensionSettingsForm.prototype.getGenerationParams = function () {
    return {
        sex: this.getElement('sex').val(),
        country: this.getElement('country').val()
    };
};

NameGeneratorExtensionSettingsForm.prototype.fillGeneratorParams = function (info) {
    var sexSelect = this.getElement('sex');
    this.fillSelectFromParams(sexSelect, info.sexes);

    var countrySelect = this.getElement('country');
    this.fillSelectFromParams(countrySelect, info.countries);
};

NameGeneratorExtensionSettingsForm.prototype.fillSelectFromParams = function (select, params) {
    Utils.clearSelect(select);
    if (params == null || params.length < 1) {
        select.prop('disabled', true);
        return;
    }

    var random = document.createElement('option');
    random.text = 'Random';
    random.value = '';
    select.append(random);

    var options = Object.keys(params).map(key => {
        return {
            name: params[key].name,
            value: key
        };
    });
    Utils.createOptions(this.document, select, options);
    select.prop('disabled', false);
};

NameGeneratorExtensionSettingsForm.prototype.getElement = function (id) {
    return $('#' + id);
};

module.exports = NameGeneratorExtensionSettingsForm;
