
function NameGeneratorExtensionSettingsForm(document) {
    this.document = document;
};

NameGeneratorExtensionSettingsForm.prototype.getGeneratorOption = function () {
    return this.getElement('generatortype').val();
};

NameGeneratorExtensionSettingsForm.prototype.getLoadOption = function () {
    return this.getElement('savednames').val();
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
    this.clearSelect(select);
    if (params == null || params.length < 1) {
        select.prop('disabled', true);
        return;
    }

    var random = document.createElement('option');
    random.text = 'Random';
    random.value = 'random';
    select.append(random);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var option = this.createOption(params[key].name, key);
            select.append(option);
        }
    }

    select.prop('disabled', false);
};

NameGeneratorExtensionSettingsForm.prototype.alias = function (value) {
    if (value == null) {
        return this.getElement('alias').val();
    }
    return this.getElement('alias').val(value);
};

NameGeneratorExtensionSettingsForm.prototype.fillSavedNamesSelector = function (savedNames) {
    var select = this.getElement('savednames');
    this.clearSelect(select);
    for (var key in savedNames) {
        if (savedNames.hasOwnProperty(key)) {
            var option = this.createOption(key, key);
            select.append(option);
        }
    }
};

NameGeneratorExtensionSettingsForm.prototype.changeSavedNamesOption = function (alias) {
    this.getElement('savednames').val(alias);
};

NameGeneratorExtensionSettingsForm.prototype.changeSavedNamesOption = function (alias) {
    this.getElement('savednames').val(alias);
};

NameGeneratorExtensionSettingsForm.prototype.clearSelect = function (select) {
    select.empty();
};

NameGeneratorExtensionSettingsForm.prototype.createOption = function (text, value) {
    var option = this.document.createElement('option');
    option.text = text;
    option.value = value;
    return option;
};

NameGeneratorExtensionSettingsForm.prototype.getElement = function (id) {
    return $('#' + id);
};
