import faker from 'faker';

import { getRandomInteger } from '../Utils';

export function FakerGenerator() {
    const locales = Object.keys(faker.locales).map(locale => ({
        name: faker.locales[locale].title,
        param: locale
    }));
    return {
        next: function (configuration) {
            try {
                const localeIndex = configuration.params.country || getRandomInteger(0, locales.length);
                faker.locale = locales[localeIndex].param;
                configuration.onCompleted({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    password: faker.internet.password()
                });
            } catch (ex) {
                configuration.onError(ex);
            }
        },
        getCode: function () {
            return 'FakerGenerator';
        },
        getInfo: function () {
            return {
                text: 'faker.js Generator',
                url: 'https://github.com/marak/faker.js/',
                sexes: [],
                countries: locales
            };
        }
    };
}
