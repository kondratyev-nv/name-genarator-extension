
function NameGeneratorExtensionForm(document) {
    this.document = document;
};

NameGeneratorExtensionForm.prototype.firstName = function (name) {
    if (name != null) {
        this.getFirstNameField().value = name;
    }

    return this.getFirstNameField().value;
};

NameGeneratorExtensionForm.prototype.lastName = function (name) {
    if (name != null) {
        this.getLastNameField().value = name;
    }

    return this.getLastNameField().value;
};

NameGeneratorExtensionForm.prototype.email = function (name) {
    if (name != null) {
        this.getEmailField().value = name;
    }

    return this.getEmailField().value;
};

NameGeneratorExtensionForm.prototype.password = function (name) {
    if (name != null) {
        this.getPasswordField().value = name;
    }

    return this.getPasswordField().value;
};

NameGeneratorExtensionForm.prototype.getFirstNameField = function () {
    if (this.firstNameField == null) {
        this.firstNameField = this.getElement('firstname');
    }

    return this.firstNameField;
};

NameGeneratorExtensionForm.prototype.getLastNameField = function () {
    if (this.lastNameField == null) {
        this.lastNameField = this.getElement('lastname');
    }

    return this.lastNameField;
};

NameGeneratorExtensionForm.prototype.getEmailField = function () {
    if (this.emailField == null) {
        this.emailField = this.getElement('email');
    }

    return this.emailField;
};

NameGeneratorExtensionForm.prototype.getPasswordField = function () {
    if (this.passwordField == null) {
        this.passwordField = this.getElement('password');
    }

    return this.passwordField;
};

NameGeneratorExtensionForm.prototype.getGeneratorOption = function () {
    return this.getElement('generatortype').value;
};

NameGeneratorExtensionForm.prototype.fill = function (fakeNameInfo) {
    this.firstName(fakeNameInfo.firstName);
    this.lastName(fakeNameInfo.lastName);
    this.email(fakeNameInfo.email);
    this.password(fakeNameInfo.password);
};

NameGeneratorExtensionForm.prototype.getElement = function (id) {
    return this.document.getElementById(id);
};