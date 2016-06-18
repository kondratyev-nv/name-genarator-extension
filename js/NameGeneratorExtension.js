
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
    this.mask.modal('show');
    this.getGenerator().next(function (json) {
        this.updateFormValues(json);
        this.currentName = json;
        this.mask.modal('hide');
    }, this);
};

NameGeneratorExtension.prototype.save = function () {
    chrome.storage.local.set({ 'savedNames': this.currentName }, function () {
    });
};

NameGeneratorExtension.prototype.load = function () {
    var self = this;
    this.mask.modal('show');
    chrome.storage.local.get(null, function (object) {
        if (object.savedNames == null) {
            self.refresh();
        } else {
            self.updateFormValues(object.savedNames);
        };
        self.mask.modal('hide');
    });
};