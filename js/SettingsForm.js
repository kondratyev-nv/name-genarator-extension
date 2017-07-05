
function SettingsForm(document) {
    this.document = document;
};

SettingsForm.prototype.getGeneratorOption = function () {
    return this.getElement('generatortype').val();
};

SettingsForm.prototype.setGeneratorInfo = function (info) {
    this.getElement('generatorurl').text(info.url);
    this.getElement('generatorurl').attr('href', info.url);
};

SettingsForm.prototype.getGenerationParams = function () {
    return {
        sex: this.getElement('sex').val(),
        country: this.getElement('country').val()
    };
};

SettingsForm.prototype.fillGeneratorParams = function (info) {
    var sexSelect = this.getElement('sex');
    this.fillSelectFromParams(sexSelect, info.sexes);

    var countrySelect = this.getElement('country');
    this.fillSelectFromParams(countrySelect, info.countries);
};

SettingsForm.prototype.fillSelectFromParams = function (select, params) {
    Utils.clearSelect(select);
    if (params == null || params.length < 1) {
        select.prop('disabled', true);
        return;
    }

    var random = document.createElement('option');
    random.text = 'Random';
    random.value = '';
    select.append(random);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var option = Utils.createOption(this.document, params[key].name, key);
            select.append(option);
        }
    }

    select.prop('disabled', false);
};

SettingsForm.prototype.getElement = function (id) {
    return $('#' + id);
};
