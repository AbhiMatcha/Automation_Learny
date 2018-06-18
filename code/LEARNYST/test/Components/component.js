'use strict';
function Component () {
    this.title = 'component';
    this.page = 'page';
}
Component.prototype.setTitle = function (title, page) {
    this.title = title;
    this.page = page;
}

module.exports = new Component()