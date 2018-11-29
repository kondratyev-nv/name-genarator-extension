import $ from 'jquery';

import { clearSelect, createOptions } from './Utils';

function NameGeneratorExtensionSettingsForm(document, refreshAction) {
    this.document = document;
    this.sexOption = this.getElement('sex');
    this.countryOption = this.getElement('country');
    this.sexOption.change(refreshAction);
    this.countryOption.change(refreshAction);
}

NameGeneratorExtensionSettingsForm.prototype.getGeneratorOption = function () {
    return $('#generatortype').val();
};

NameGeneratorExtensionSettingsForm.prototype.setGeneratorInfo = function (info) {
    $('#generatorurl').text(info.url);
    $('#generatorurl').attr('href', info.url);
};

NameGeneratorExtensionSettingsForm.prototype.getGenerationParams = function () {
    return {
        sex: this.sexOption.val(),
        country: this.countryOption.val()
    };
};

NameGeneratorExtensionSettingsForm.prototype.fillGeneratorParams = function (info) {
    this.fillSelectFromParams(this.sexOption, info.sexes);
    this.fillSelectFromParams(this.countryOption, info.countries);
};

NameGeneratorExtensionSettingsForm.prototype.fillSelectFromParams = function (select, params) {
    clearSelect(select);
    if (params == null || params.length < 1) {
        select.prop('disabled', true);
        return;
    }

    let options = Object.keys(params).map(key => {
        return {
            name: params[key].name,
            value: key
        };
    });
    createOptions(this.document, select, [{ name: 'Random' }].concat(options));
    select.prop('disabled', false);
};

NameGeneratorExtensionSettingsForm.prototype.getElement = function (id) {
    return $('#' + id);
};

export { NameGeneratorExtensionSettingsForm };
