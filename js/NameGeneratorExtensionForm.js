
function NameGeneratorExtensionForm(document) {
    this.document = document;
    this.valuesMap = {
        firstName: 'firstname',
        lastName: 'lastname',
        email: 'email',
        password: 'password'
    };
    this.init();
};

NameGeneratorExtensionForm.prototype.init = function () {
    for (var valueKey in this.valuesMap) {
        this['get' + valueKey.capitalizeFirstLetter() + 'Field'] = this.createGetFieldFunction(valueKey);
        this[valueKey] = this.createGetSetFunction(valueKey);
    }
};

NameGeneratorExtensionForm.prototype.createGetFieldFunction = function (valueKey) {
    return function () {
        if (this[valueKey + 'Field'] == null) {
            this[valueKey + 'Field'] = this.getElement(this.valuesMap[valueKey]);
        }

        return this[valueKey + 'Field'];
    };
};

NameGeneratorExtensionForm.prototype.createGetSetFunction = function (valueKey) {
    return function (value) {
        return this['get' + valueKey.capitalizeFirstLetter() + 'Field']().val(value);
    };
};

NameGeneratorExtensionForm.prototype.fill = function (fakeNameInfo) {
    for (var valueKey in this.valuesMap) {
        this[valueKey](fakeNameInfo[valueKey]);
    }
};

NameGeneratorExtensionForm.prototype.getElement = function (id) {
    return $('#' + id);
};
