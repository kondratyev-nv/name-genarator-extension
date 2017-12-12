
function NameFakeGenerator() {
}

NameFakeGenerator.prototype = new NameGenerator();

NameFakeGenerator.prototype.url = function (params) {
    var baseUrl = 'https://api.namefake.com/';

    if (params.country) {
        baseUrl += this.getInfo().countries[params.country].param + '/';
    } else {
        baseUrl += 'random/';
    }

    if (params.sex) {
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
        url: 'https://namefake.com/',
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
                name: 'Arabic (Jordan)',
                param: 'arabic-jordan'
            },
            {
                name: 'Bulgarian (Bulgaria)',
                param: 'bulgarian-bulgaria'
            },
            {
                name: 'Bengali (Bangladesh)',
                param: 'bengali-bangladesh'
            },
            {
                name: 'Czech (Czech Republic)',
                param: 'czech-czech-republic'
            },
            {
                name: 'Danish (Denmark)',
                param: 'danish-denmark'
            },
            {
                name: 'German (Austria)',
                param: 'german-austria'
            },
            {
                name: 'German (Germany)',
                param: 'german_germany'
            },
            {
                name: 'Greek (Greece)',
                param: 'greek-greece'
            },
            {
                name: 'English (Australia)',
                param: 'english-australia'
            },
            {
                name: 'English (Canada)',
                param: 'english-canada'
            },
            {
                name: 'English (United Kingdom)',
                param: 'english-united-kingdom'
            },
            {
                name: 'English (New Zealand)',
                param: 'english-new-zealand'
            },
            {
                name: 'English (Philippines)',
                param: 'english-philippines'
            },
            {
                name: 'English (Uganda)',
                param: 'english-uganda'
            },
            {
                name: 'English (United States)',
                param: 'english-united-states" selected="'
            },
            {
                name: 'English (South Africa)',
                param: 'english-south-africa'
            },
            {
                name: 'Spanish (Argentina)',
                param: 'spanish-argentina'
            },
            {
                name: 'Spanish (Spain)',
                param: 'spanish-spain'
            },
            {
                name: 'Spanish (Peru)',
                param: 'spanish-peru'
            },
            {
                name: 'Spanish (Venezuela)',
                param: 'spanish-venezuela'
            },
            {
                name: 'Persian (Iran)',
                param: 'persian_Iran'
            },
            {
                name: 'Finnish (Finland)',
                param: 'finnish-finland'
            },
            {
                name: 'French (Belgium)',
                param: 'french-belgium'
            },
            {
                name: 'French (Canada)',
                param: 'french-canada'
            },
            {
                name: 'French (France)',
                param: 'french-france'
            },
            {
                name: 'Hungarian (Hungary)',
                param: 'hungarian-hungary'
            },
            {
                name: 'Armenian (Armenia)',
                param: 'armenian-armenia'
            },
            {
                name: 'Indonesian (Indonesia)',
                param: 'indonesian-indonesia'
            },
            {
                name: 'Icelandic (Iceland)',
                param: 'icelandic-iceland'
            },
            {
                name: 'Italian (Italy)',
                param: 'italian-italy'
            },
            {
                name: 'Japanese (Japan)',
                param: 'japanese-japan'
            },
            {
                name: 'Georgian (Georgia)',
                param: 'georgian-georgia'
            },
            {
                name: 'Kazakh (Kazakhstan)',
                param: 'kazakh-kazakhstan'
            },
            {
                name: 'Korean (South Korea)',
                param: 'korean-south-korea'
            },
            {
                name: 'Latvian (Latvia)',
                param: 'latvian-latvia'
            },
            {
                name: 'Montenegro (Montenegrin)',
                param: 'montenegro-montenegrin'
            },
            {
                name: 'Nepali (Nepal)',
                param: 'nepali-nepal'
            },
            {
                name: 'Dutch (Belgium)',
                param: 'dutch-belgium'
            },
            {
                name: 'Dutch (Netherlands)',
                param: 'dutch-netherlands'
            },
            {
                name: 'Norwegian (Norway)',
                param: 'norwegian-norway'
            },
            {
                name: 'Polish (Poland)',
                param: 'polish-poland'
            },
            {
                name: 'Portuguese (Brazil)',
                param: 'portuguese-brazil'
            },
            {
                name: 'Portuguese (Portugal)',
                param: 'portuguese-portugal'
            },
            {
                name: 'Romanian (Moldova)',
                param: 'romanian-moldova'
            },
            {
                name: 'Romanian (Romania)',
                param: 'romanian-romania'
            },
            {
                name: 'Russian (Russia)',
                param: 'russian-russia'
            },
            {
                name: 'Slovak (Slovakia)',
                param: 'slovak-slovakia'
            },
            {
                name: 'Slovenian (Slovenia)',
                param: 'slovenian-slovenia'
            },
            {
                name: 'Serbian (Cyrillic,  Serbia)',
                param: 'serbian-cyrillic-serbia'
            },
            {
                name: 'Serbian (Latin,  Serbia)',
                param: 'serbian-latin-serbia'
            },
            {
                name: 'Serbian (Serbia)',
                param: 'serbian-serbia'
            },
            {
                name: 'Swedish (Sweden)',
                param: 'swedish-sweden'
            },
            {
                name: 'Turkish (Turkey)',
                param: 'turkish-turkey'
            },
            {
                name: 'Ukrainian (Ukraine)',
                param: 'ukrainian-ukraine'
            },
            {
                name: 'Vietparamse (Vietnam)',
                param: 'vietparamse-vietnam'
            },
            {
                name: 'Chinese (China)',
                param: 'chinese-china'
            },
            {
                name: 'Chinese (Taiwan)',
                param: 'chinese-taiwan'
            }
        ]
    };
};
