function Mask(modal, config) {
    var needHiding = false, shown = false;
    config = config || {};
    modal.on('shown.bs.modal', function (e) {
        shown = true;
        if (needHiding) {
            modal.modal('hide');
        }
    });
    modal.on('hidden.bs.modal', function (e) {
        shown = false;
        needHiding = false;
    });
    return {
        show: function () {
            modal.modal(config);
        },
        hide: function () {
            needHiding = true;
            modal.modal('hide');
        }
    };
}

module.exports = Mask;
