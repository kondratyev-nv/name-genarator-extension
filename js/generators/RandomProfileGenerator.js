
function RandomProfileGenerator() {
}

RandomProfileGenerator.prototype = new NameGenerator();
RandomProfileGenerator.prototype.url = function (params) {
    var baseUrl = 'http://randomprofile.com/api/api.php';
    var urlParams = 'format=json';
    var countries = params.country ?
        this.getInfo().countries[params.country].param :
        this.getAvailableCountries();
    urlParams += '&countries=' + countries;
    return baseUrl + (urlParams.length > 0 ? '?' : '') + urlParams;
};

RandomProfileGenerator.prototype.convert = function (json) {
    return {
        firstName: json.profile.firstName,
        lastName: json.profile.surname,
        email: json.profile.email,
        password: json.profile.password
    };
};

RandomProfileGenerator.prototype.getCode = function () {
    return 'RandomProfile';
};

RandomProfileGenerator.prototype.getAvailableCountries = function () {
    return this.getInfo().countries.map(function (c) {
        return c.param;
    }).join(',');
};

RandomProfileGenerator.prototype.getInfo = function () {
    return {
        text: 'Random Profile',
        url: 'http://randomprofile.com/',
        sexes: [
        ],
        countries: [
            {
                'name': 'China',
                'param': 'CHN'
            },
            {
                'name': 'United Kingdom',
                'param': 'GBR'
            },
            {
                'name': 'Japan',
                'param': 'JPN'
            },
            {
                'name': 'South Korea',
                'param': 'KOR'
            }
        ]
    };
};
