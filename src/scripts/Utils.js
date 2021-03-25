
export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createOptions(document, select, options) {
    options.forEach(option => {
        select.append(createOption(document, option.name, option.value));
    });
}

export function createOption(document, text, value) {
    var option = document.createElement('option');
    option.text = text;
    option.value = value || '';
    return option;
}

export function clearSelect(select) {
    select.empty();
}

export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getFirstObjectFromArray(array) {
    for (var key in array)
        if (array.hasOwnProperty(key)) {
            return { key: key, value: array[key]};
        };

    return {};
}
