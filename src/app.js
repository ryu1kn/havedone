
'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');
Backbone.$ = $;

var Viewport = require('./view/Viewport'),
    DayTodo  = require('./view/DayTodo');

(new Viewport()).add(new DayTodo());
