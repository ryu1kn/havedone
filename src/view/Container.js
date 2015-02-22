
var Backbone = require('backbone'),
    $        = require('jquery');

module.exports = Backbone.View.extend({
    /**
     * @param {Backbone.View} cmp
     */
    add: function (cmp) {
        $(this.el).append(cmp.el);
    }
});
