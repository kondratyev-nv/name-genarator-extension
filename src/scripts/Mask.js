
export function Mask(modal, config) {
    var needHiding = false;
    config = config || {};
    modal.on('shown.bs.modal', function () {
        if (needHiding) {
            modal.modal('hide');
        }
    });
    modal.on('hidden.bs.modal', function () {
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
