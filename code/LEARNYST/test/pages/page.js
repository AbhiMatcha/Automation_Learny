'use strict';
function Page () {
}
Page.prototype.open = function (path) {
     browser.url('http://learnnew.learnyst.com/'+path);   
}
module.exports = new Page();
