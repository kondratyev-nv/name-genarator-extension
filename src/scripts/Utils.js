
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

export function getFirstKeyValueFromObject(obj) {
    const entries = Object.entries(obj || {});
    const [key, value] = entries[0] || [];

    return { key, value };
}
