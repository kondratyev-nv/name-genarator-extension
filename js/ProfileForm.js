
var ProfileForm = function (document, updateStateCallback) {
    var form = {};
    var valuesMap = {
        firstName: 'firstname',
        lastName: 'lastname',
        email: 'email',
        password: 'password'
    };
    var getElement = function (id) {
        return $('#' + id);
    };
    var createGetFieldFunction = function (valueKey) {
        return function () {
            if (form[valueKey + 'Field'] == null) {
                form[valueKey + 'Field'] = getElement(valuesMap[valueKey]);
            }

            return form[valueKey + 'Field'];
        };
    };
    var createGetSetFunction = function (valueKey) {
        return function (value) {
            return form['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field']().val(value);
        };
    };
    for (var valueKey in valuesMap) {
        form['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field'] = createGetFieldFunction(valueKey);
        form['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field']().on('change paste keyup', updateStateCallback);
        form[valueKey] = createGetSetFunction(valueKey);
    }
    return {
        fill: function (fakeNameInfo) {
            for (var valueKey in valuesMap) {
                form[valueKey](fakeNameInfo[valueKey]);
            }
        },
        getState: function () {
            var state = {};
            for (var valueKey in valuesMap) {
                state[valueKey] = form['get' + Utils.capitalizeFirstLetter(valueKey) + 'Field']().val();
            }
            return state;
        }
    };
};
