
var RandomUserGenerator = function () {
    var availableGeneratorConfiguration = {
        text: 'Random User Generator',
        url: 'https://randomuser.me/',
        sexes: [
            {
                name: 'Male',
                param: 'male'
            },
            {
                name: 'Female',
                param: 'female'
            }
        ],
        countries: [
            {
                name: 'Australia',
                param: 'AU'
            },
            {
                name: 'Brazil',
                param: 'BR'
            },
            {
                name: 'Canada',
                param: 'CA'
            },
            {
                name: 'Switzerland',
                param: 'CH'
            },
            {
                name: 'Germany',
                param: 'DE'
            },
            {
                name: 'Denmark',
                param: 'DK'
            },
            {
                name: 'Spain',
                param: 'ES'
            },
            {
                name: 'Finland',
                param: 'FI'
            },
            {
                name: 'France',
                param: 'FR'
            },
            {
                name: 'United Kingdom',
                param: 'GB'
            },
            {
                name: 'Ireland',
                param: 'IE'
            },
            {
                name: 'Iran',
                param: 'IR'
            },
            {
                name: 'Netherlands',
                param: 'NL'
            },
            {
                name: 'New Zealand',
                param: 'NZ'
            },
            {
                name: 'Turkey',
                param: 'TR'
            },
            {
                name: 'United States',
                param: 'US'
            }
        ]
    };
    var buildUrl = function (params) {
        var baseUrl = 'https://randomuser.me/api/';
        var urlParams = '';
        if (params.country) {
            urlParams += 'nat=' + this.getInfo().countries[params.country].param;
        }
        if (params.sex) {
            urlParams += (urlParams.length > 0 ? '&' : '') + 'gender=' + this.getInfo().sexes[params.sex].param;
        }
        return baseUrl + (urlParams.length > 0 ? '?' : '') + urlParams;
    };
    var convert = function (json) {
        return {
            firstName: Utils.capitalizeFirstLetter(json.results[0].name.first),
            lastName: Utils.capitalizeFirstLetter(json.results[0].name.last),
            email: json.results[0].email,
            password: json.results[0].login.password
        };
    };
    return {
        getCode: function () {
            return 'RandomUserGenerator';
        },
        update: function (configuration) {
            Utils.httpRequest({
                url: buildUrl(configuration.params),
                method: 'GET',
                onCompleted: function (responseText) {
                    var json = JSON.parse(responseText);
                    configuration.onCompleted(convert(json));
                },
                onError: function (exception) {
                    configuration.onError(exception);
                }
            })
        },
        getInfo: function () {
            return availableGeneratorConfiguration;
        }
    }
};
