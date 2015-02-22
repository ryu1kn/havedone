
var $        = require('jquery'),
    _        = require('underscore'),
    Backbone = require('backbone');

var DayTodoModel  = require('../model/DayTodo'),
    TodoItemView  = require('./TodoItem');

module.exports = Backbone.View.extend({
    className: 'daytodo',

    initialize: function () {
        this.collection = new DayTodoModel();
        this.render();

        this.listenTo(this.collection, 'completed', this.onCompleted);
    },

    render: function () {
        var el = $(this.el);
        _(this.collection.models).each(function (todo) {
            el.append(new TodoItemView({model: todo}).el);
        }, this);
    },

    onCompleted: function (isOn) {
        var fnName = isOn ? 'addClass' : 'removeClass';
        $(this.el)[fnName]('daytodo--completed');
    }

});
