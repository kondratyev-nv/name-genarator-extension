
function RandomUserGenerator() {
}

RandomUserGenerator.prototype = new NameGenerator();
RandomUserGenerator.prototype.url = function (params) {
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

RandomUserGenerator.prototype.convert = function (json) {
    return {
        firstName: Utils.capitalizeFirstLetter(json.results[0].name.first),
        lastName: Utils.capitalizeFirstLetter(json.results[0].name.last),
        email: json.results[0].email,
        password: json.results[0].login.password
    };
};

RandomUserGenerator.prototype.getCode = function () {
    return 'RandomUserGenerator';
};

RandomUserGenerator.prototype.getInfo = function () {
    return {
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
                name: 'USA',
                param: 'US'
            },
            {
                name: 'France',
                param: 'FR'
            }
        ]
    };
};
