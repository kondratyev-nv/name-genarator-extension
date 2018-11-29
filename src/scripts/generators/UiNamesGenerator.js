import { NameGenerator } from '../NameGenerator';

function UiNamesGenerator() {
}

UiNamesGenerator.prototype = new NameGenerator();
UiNamesGenerator.prototype.url = function (params) {
    var baseUrl = 'https://uinames.com/api/';
    var urlParams = '?ext';
    if (params.country) {
        urlParams += '&region=' + this.getInfo().countries[params.country].param;
    }
    if (params.sex) {
        urlParams += '&gender=' + this.getInfo().sexes[params.sex].param;
    }
    return baseUrl + urlParams;
};

UiNamesGenerator.prototype.convert = function (json) {
    return {
        firstName: json.name,
        lastName: json.surname,
        email: json.email,
        password: json.password
    };
};

UiNamesGenerator.prototype.getCode = function () {
    return 'uinames.com';
};

UiNamesGenerator.prototype.getInfo = function () {
    return {
        text: 'uinames.com Generator',
        url: 'https://uinames.com/',
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
                'name': 'Albania',
                'param': 'Albania'
            },
            {
                'name': 'Argentina',
                'param': 'Argentina'
            },
            {
                'name': 'Armenia',
                'param': 'Armenia'
            },
            {
                'name': 'Australia',
                'param': 'Australia'
            },
            {
                'name': 'Austria',
                'param': 'Austria'
            },
            {
                'name': 'Azerbaijan',
                'param': 'Azerbaijan'
            },
            {
                'name': 'Bangladesh',
                'param': 'Bangladesh'
            },
            {
                'name': 'Belgium',
                'param': 'Belgium'
            },
            {
                'name': 'Bosnia and Herzegovina',
                'param': 'Bosnia and Herzegovina'
            },
            {
                'name': 'Brazil',
                'param': 'Brazil'
            },
            {
                'name': 'Bulgaria',
                'param': 'Bulgaria'
            },
            {
                'name': 'Canada',
                'param': 'Canada'
            },
            {
                'name': 'China',
                'param': 'China'
            },
            {
                'name': 'Colombia',
                'param': 'Colombia'
            },
            {
                'name': 'Costa Rica',
                'param': 'Costa Rica'
            },
            {
                'name': 'Denmark',
                'param': 'Denmark'
            },
            {
                'name': 'Egypt',
                'param': 'Egypt'
            },
            {
                'name': 'England',
                'param': 'England'
            },
            {
                'name': 'Estonia',
                'param': 'Estonia'
            },
            {
                'name': 'Finland',
                'param': 'Finland'
            },
            {
                'name': 'France',
                'param': 'France'
            },
            {
                'name': 'Georgia',
                'param': 'Georgia'
            },
            {
                'name': 'Germany',
                'param': 'Germany'
            },
            {
                'name': 'Greece',
                'param': 'Greece'
            },
            {
                'name': 'Hungary',
                'param': 'Hungary'
            },
            {
                'name': 'India',
                'param': 'India'
            },
            {
                'name': 'Iran',
                'param': 'Iran'
            },
            {
                'name': 'Israel',
                'param': 'Israel'
            },
            {
                'name': 'Italy',
                'param': 'Italy'
            },
            {
                'name': 'Japan',
                'param': 'Japan'
            },
            {
                'name': 'Korea',
                'param': 'Korea'
            },
            {
                'name': 'Mexico',
                'param': 'Mexico'
            },
            {
                'name': 'Morocco',
                'param': 'Morocco'
            },
            {
                'name': 'Nepal',
                'param': 'Nepal'
            },
            {
                'name': 'Netherlands',
                'param': 'Netherlands'
            },
            {
                'name': 'New Zealand',
                'param': 'New Zealand'
            },
            {
                'name': 'Nigeria',
                'param': 'Nigeria'
            },
            {
                'name': 'Norway',
                'param': 'Norway'
            },
            {
                'name': 'Pakistan',
                'param': 'Pakistan'
            },
            {
                'name': 'Poland',
                'param': 'Poland'
            },
            {
                'name': 'Portugal',
                'param': 'Portugal'
            },
            {
                'name': 'Romania',
                'param': 'Romania'
            },
            {
                'name': 'Russia',
                'param': 'Russia'
            },
            {
                'name': 'Saudi Arabia',
                'param': 'Saudi Arabia'
            },
            {
                'name': 'Slovakia',
                'param': 'Slovakia'
            },
            {
                'name': 'Slovenia',
                'param': 'Slovenia'
            },
            {
                'name': 'Spain',
                'param': 'Spain'
            },
            {
                'name': 'Sweden',
                'param': 'Sweden'
            },
            {
                'name': 'Switzerland',
                'param': 'Switzerland'
            },
            {
                'name': 'Turkey',
                'param': 'Turkey'
            },
            {
                'name': 'Ukraine',
                'param': 'Ukraine'
            },
            {
                'name': 'United States',
                'param': 'United States'
            },
            {
                'name': 'Vietnam',
                'param': 'Vietnam'
            }
        ]
    };
};

export { UiNamesGenerator };
