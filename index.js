
'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');
Backbone.$ = $;

var app = {
        view : {},
        model: {}
    };

app.model.DayTodo = Backbone.Collection.extend({
    model: app.model.TodoItem
});

app.view.DayTodo = Backbone.View.extend({
    el: 'body',

    initialize: function () {
        var dayTodo = new app.model.DayTodo();
        dayTodo.add(new app.model.TodoItem());
        dayTodo.add(new app.model.TodoItem());
        dayTodo.add(new app.model.TodoItem());
        this.collection = dayTodo;
        this.render();
    },

    render: function () {
        var el = $(this.el);
        _(this.collection.models).each(function (todo) {
            el.append(new app.view.TodoItem({model: todo}).el);
        }, this);
    }
});

app.model.TodoItem = Backbone.Model.extend({
    defaults: {
        done: false
    }
});

app.view.TodoItem = Backbone.View.extend({
    className: 'checkbox',

    events: {
        click: 'onClick'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        var el     = $(this.el),
            fnName = this.model.get('done') ? 'addClass' : 'removeClass';
        el[fnName]('checkbox--done');
    },

    onClick: function () {
        this.model.set('done', !this.model.get('done'));
        this.render();
    }
});

new app.view.DayTodo();
