
function NameGeneratorExtension(document, generators) {
    this.form = new NameGeneratorExtensionForm(document);
    this.settings = new NameGeneratorExtensionSettingsForm(document);
    this.profiles = new NameGeneratorExtensionProfilesForm(document);
    this.generators = generators;
    this.generator = this.getGenerator();
    this.mask = $('#loading');
    this.savedNames = {};
    this.currentName = {};

    var self = this;
    chrome.storage.local.get(null, function (object) {
        self.profiles.fillSavedNamesSelector(object.savedNames);
        self.savedNames = object.savedNames || {};
        self.load();
    });
    this.changeGenerator();
};

NameGeneratorExtension.prototype.getGenerator = function () {
    var generatorCode = this.settings.getGeneratorOption();
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
    var params = self.settings.getGenerationParams();
    this.getGenerator().next(function (json) {
        self.updateFormValues(json);
        self.currentName = json;
        self.mask.modal('hide');
    }, params);
};

NameGeneratorExtension.prototype.changeGenerator = function () {
    var generator = this.getGenerator();
    var info = generator.getInfo();
    this.settings.setGeneratorInfo(info);
    this.settings.fillGeneratorParams(info);
    this.refresh();
};

NameGeneratorExtension.prototype.save = function () {
    var self = this;
    var alias = self.profiles.alias();
    self.savedNames[alias] = self.currentName;
    chrome.storage.local.set({ 'savedNames': this.savedNames }, function () {
        self.profiles.fillSavedNamesSelector(self.savedNames);
        self.profiles.changeSavedNamesOption(alias);
    });
};

NameGeneratorExtension.prototype.load = function () {
    var alias = this.profiles.getLoadOption();
    if (alias == null || alias === '') {
        return;
    }
    this.profiles.alias(alias);
    this.updateFormValues(this.savedNames[alias]);
};