
var $ = require('jquery');

var Container = require('./Container');

module.exports = Container.extend({
    el: 'body',

    initialize: function () {
        this.render();
    },

    render: function () {
        $(this.el).addClass('viewport');
    }
});
