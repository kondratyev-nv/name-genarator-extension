
function ProfileForm(document, updateStateCallback) {
    this.document = document;
    this.valuesMap = {
        firstName: 'firstname',
        lastName: 'lastname',
        email: 'email',
        password: 'password'
    };
    this.init(updateStateCallback);
};

ProfileForm.prototype.init = function (updateStateCallback) {
    for (var valueKey in this.valuesMap) {
        this['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field'] = this.createGetFieldFunction(valueKey);
        this['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field']().on('change paste keyup', updateStateCallback);
        this[valueKey] = this.createGetSetFunction(valueKey);
    }
};

ProfileForm.prototype.createGetFieldFunction = function (valueKey) {
    return function () {
        if (this[valueKey + 'Field'] == null) {
            this[valueKey + 'Field'] = this.getElement(this.valuesMap[valueKey]);
        }

        return this[valueKey + 'Field'];
    };
};

ProfileForm.prototype.createGetSetFunction = function (valueKey) {
    return function (value) {
        return this['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field']().val(value);
    };
};

ProfileForm.prototype.fill = function (fakeNameInfo) {
    for (var valueKey in this.valuesMap) {
        this[valueKey](fakeNameInfo[valueKey]);
    }
};

ProfileForm.prototype.getState = function () {
    var state = {};
    for (var valueKey in this.valuesMap) {
        state[valueKey] = this['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field']().val();
    }
    return state;
};

ProfileForm.prototype.getElement = function (id) {
    return $('#' + id);
};
