
function NameGeneratorExtension(document, generators) {
    this.form = new NameGeneratorExtensionForm(document);
    this.generators = generators;
    this.generator = this.getGenerator();
    this.mask = $('#loading');
};

NameGeneratorExtension.prototype.getGenerator = function () {
    var generatorCode = this.form.getGeneratorOption();
    if (!this.generator || generatorCode !== this.generator.getCode()) {
        this.generator = this.generators.find(function (generator) {
            return generatorCode === generator.getCode();
        });
    }
    return this.generator;
};

NameGeneratorExtension.prototype.updateFormValues = function (json) {
    this.form.fill(json);
};

NameGeneratorExtension.prototype.refresh = function () {
    var self = this;
    self.mask.modal('show');
    this.getGenerator().next(function (json) {
        self.updateFormValues(json);
        self.currentName = json;
        self.mask.modal('hide');
    });
};

NameGeneratorExtension.prototype.save = function () {
    chrome.storage.local.set({ 'savedNames': this.currentName }, function () {
    });
};

NameGeneratorExtension.prototype.load = function () {
    var self = this;
    self.mask.modal('show');
    chrome.storage.local.get(null, function (object) {
        if (object.savedNames == null) {
            self.refresh();
        } else {
            self.updateFormValues(object.savedNames);
        };
        self.mask.modal('hide');
    });
};