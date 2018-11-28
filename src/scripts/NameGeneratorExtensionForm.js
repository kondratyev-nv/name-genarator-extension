import $ from 'jquery';

import { capitalizeFirstLetter } from './Utils';

function NameGeneratorExtensionForm(document, updateStateCallback) {
    this.document = document;
    this.valuesMap = {
        firstName: 'firstname',
        lastName: 'lastname',
        email: 'email',
        password: 'password'
    };
    this.init(updateStateCallback);
}

NameGeneratorExtensionForm.prototype.init = function (updateStateCallback) {
    for (var valueKey in this.valuesMap) {
        this['get' + capitalizeFirstLetter(valueKey) + 'Field'] = this.createGetFieldFunction(valueKey);
        this['get' + capitalizeFirstLetter(valueKey) + 'Field']().on('change paste keyup', updateStateCallback);
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
        return this['get' + capitalizeFirstLetter(valueKey) + 'Field']().val(value);
    };
};

NameGeneratorExtensionForm.prototype.fill = function (fakeNameInfo) {
    for (var valueKey in this.valuesMap) {
        this[valueKey](fakeNameInfo[valueKey]);
    }
};

NameGeneratorExtensionForm.prototype.getState = function () {
    var state = {};
    for (var valueKey in this.valuesMap) {
        state[valueKey] = this['get' + capitalizeFirstLetter(valueKey) + 'Field']().val();
    }
    return state;
};

NameGeneratorExtensionForm.prototype.getElement = function (id) {
    return $('#' + id);
};

export { NameGeneratorExtensionForm };
