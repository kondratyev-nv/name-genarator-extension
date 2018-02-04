function Mask(modal) {
    var needHiding = false, shown = false;
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
            modal.modal({
                backdrop: 'static',
                keyboard: false
            });
        },
        hide: function () {
            needHiding = true;
            modal.modal('hide');
        }
    };
}
