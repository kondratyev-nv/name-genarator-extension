
var SettingsForm = function (document) {
    var getElement = function (id) {
        return $('#' + id);
    };

    var fillSelectFromParams = function (select, params) {
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
                var option = Utils.createOption(document, params[key].name, key);
                select.append(option);
            }
        }

        select.prop('disabled', false);
    };

    return {
        getGeneratorOption: function () {
            return getElement('generatortype').val();
        },
        setGeneratorInfo: function (info) {
            getElement('generatorurl').text(info.url);
            getElement('generatorurl').attr('href', info.url);
        },
        getGenerationParams: function () {
            return {
                sex: getElement('sex').val(),
                country: getElement('country').val()
            };
        },
        fillGeneratorParams: function (info) {
            var sexSelect = getElement('sex');
            fillSelectFromParams(sexSelect, info.sexes);

            var countrySelect = getElement('country');
            fillSelectFromParams(countrySelect, info.countries);
        }
    };
};
