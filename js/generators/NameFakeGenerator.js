
function NameFakeGenerator() {
}

NameFakeGenerator.prototype = new NameGenerator();

NameFakeGenerator.prototype.url = function (params) {
    var baseUrl = 'http://api.namefake.com/';

    if (params.country != null && params.country != 'random') {
        baseUrl += this.getInfo().countries[params.country].param + '/';
    } else {
        baseUrl += 'random/';
    }

    if (params.sex != null && params.sex != 'random') {
        baseUrl += this.getInfo().sexes[params.sex].param + '/';
    } else {
        baseUrl += 'random/';
    }

    return baseUrl;
};

NameFakeGenerator.prototype.convert = function (json) {
    return {
        firstName: json.name,
        lastName: json.name,
        email: json.email_u + '@' + json.email_d,
        password: json.password
    };
};

NameFakeGenerator.prototype.getCode = function () {
    return 'NameFakeGenerator';
};

NameFakeGenerator.prototype.getInfo = function () {
    return {
        text: 'Fake Name Generator',
        url: 'http://namefake.com/',
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
                name: 'Russia',
                param: 'russian-russia'
            },
            {
                name: 'USA',
                param: 'english-united-states'
            }
        ]
    };
};
