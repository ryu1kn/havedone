
var Backbone = require('backbone'),
    $        = require('jquery');

module.exports = Backbone.View.extend({
    tagName: 'button',

    className: 'todoitem',

    events: {
        click: 'onClick'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        var el     = $(this.el),
            fnName = this.model.get('done') ? 'addClass' : 'removeClass';
        el[fnName]('todoitem--done');
    },

    onClick: function () {
        this.model.set('done', !this.model.get('done'));
        this.render();
    }
});
