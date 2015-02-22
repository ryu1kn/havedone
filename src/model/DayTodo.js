
var Backbone = require('backbone');

var TodoItem = require('./TodoItem');

module.exports = Backbone.Collection.extend({
    model: TodoItem,

    doneCount: 0,

    maxDoneCount: 3,

    constructor: function () {
        Backbone.Collection.prototype.constructor.call(this, arguments);

        var items = [];
        for (var i = 0; i < this.maxDoneCount; i++) {
            items.push(new TodoItem());
        }
        this.set(items);

        this.on('change:done', this.onItemStateChanged);
    },

    onItemStateChanged: function (item) {
        var maxDone = this.maxDoneCount;
        this.doneCount += item.get('done') ? 1 : -1;
        if (this.doneCount === maxDone) {
            this.trigger('completed', true);
        } else if (!item.get('done') && this.doneCount == maxDone - 1) {
            this.trigger('completed', false);
        }
    }

});
