
function NameGeneratorExtension(document, generators) {
    this.form = new NameGeneratorExtensionForm(document);
    this.generators = generators;
    this.generator = this.getGenerator();
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
    this.getGenerator().next(function (json) {
        this.updateFormValues(json);
        this.currentName = json;
    }, this);
};

NameGeneratorExtension.prototype.save = function () {
    chrome.storage.local.set({ 'savedNames': this.currentName }, function () {
    });
};

NameGeneratorExtension.prototype.load = function () {
    var self = this;
    chrome.storage.local.get(null, function (object) {
        if (object.savedNames == null) {
            self.getGenerator().next(function (json) {
                self.updateFormValues(json);
            });
        } else {
            self.updateFormValues(object.savedNames);
        };
    });
};