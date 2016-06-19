
function NameGeneratorExtension(document, generators) {
    this.form = new NameGeneratorExtensionForm(document);
    this.generators = generators;
    this.generator = this.getGenerator();
    this.mask = $('#loading');
    this.savedNames = {};
    this.currentName = {};

    var self = this;
    chrome.storage.local.get(null, function (object) {
        self.form.fillSavedNamesSelector(object.savedNames);
        self.savedNames = object.savedNames || {};
        self.load();
    });
    this.changeGenerator();
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

NameGeneratorExtension.prototype.changeGenerator = function () {
    var generator = this.getGenerator();
    this.form.setGeneratorInfo(generator.getInfo());
    this.refresh();
};

NameGeneratorExtension.prototype.save = function (alias) {
    var self = this;
    self.savedNames[alias] = self.currentName;
    chrome.storage.local.set({ 'savedNames': this.savedNames }, function () {
        self.form.fillSavedNamesSelector(self.savedNames);
        self.form.changeSavedNamesOption(alias);
    });
};

NameGeneratorExtension.prototype.load = function () {
    var alias = this.form.getLoadOption();
    if(alias == null || alias === '') {
        return;
    }
    this.updateFormValues(this.savedNames[alias]);    
};