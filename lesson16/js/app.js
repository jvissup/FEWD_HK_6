(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var App = {

		init: function () {
			this.todos = [];
			this.$todoApp = $('#todoapp');
			this.$header = this.$todoApp.find('#header');
			this.$main = this.$todoApp.find('#main');
			this.$newTodo = this.$header.find('#new-todo');
			this.$toggleAll = this.$main.find('#toggle-all');
			this.$todoList = this.$main.find('#todo-list');

			this.bindEvents();
		},

		bindEvents: function () {
			this.$newTodo.on('keyup', this.create.bind(this));
			this.$toggleAll.on('change', this.toggleAll.bind(this));

			var list = this.$todoList;
			list.on('change', '.toggle', this.toggle.bind(this));
			list.on('dblclick', 'label', this.edit.bind(this));
			list.on('keyup', '.edit', this.editKeyup.bind(this));
			list.on('focusout', '.edit', this.update.bind(this));
			list.on('click', '.destroy', this.destroy.bind(this));
		},

		// 1: create list item structure represented by #todo-template
		// 2: iterate the array this.todos, get the object inside it and
		//    put todos.title as the text between the label tags
		// 3: append the list item structure into this.$todoList

		// Things to watch out for:
			
		// If a todo list item has been completed, the li must have a class="completed",
		//  and the checkbox needs to be checked
			
		// <li> must have a data-id attribute
			
		// the label must have the todo title text
		render: function () {
			this.$todoList.empty();

			for (var i = 0; i < this.todos.length; i++) {
				var $li = $('<li>' +
					'<div class="view">' +
					'<input class="toggle" type="checkbox" >' +
					'<label class="title"></label>' +
					'<button class="destroy"></button>' +
					'</div>' +
					'<input class="edit" />' +
					'</li>');

				var todo = this.todos[i];
				$li.attr('data-id', todo.id);
				$li.find('.title').text(todo.title);
				$li.find('.edit').text(todo.title);
				if (todo.completed) {
					$li.addClass('completed');
					$li.find('.toggle').prop('checked', true);
				}

				this.$todoList.append($li);
			}
		},

		toggleAll: function (e) {
			var isChecked = $(e.target).prop('checked');

			this.todos.forEach(function (todo) {
				todo.completed = isChecked;
			});

			this.render();
		},

		// accepts an element from inside the `.item` div and
		// returns the corresponding index in the `todos` array
		indexFromEl: function (el) {
			var id = $(el).closest('li').data('id');
			var todos = this.todos;
			var i = todos.length;

			while (i--) {
				if (todos[i].id === id) {
					return i;
				}
			}
		},

		create: function (e) {
			var $input = $(e.target);
			var val = $input.val().trim();

			if (e.which !== ENTER_KEY || !val) {
				return;
			}

			this.todos.push({
				id: this.todos.length + 1,
				title: val,
				completed: false
			});

			$input.val('');

			this.render();
		},

		toggle: function (e) {
			var i = this.indexFromEl(e.target);
			this.todos[i].completed = !this.todos[i].completed;
			this.render();
		},

		edit: function (e) {
			var $input = $(e.target).closest('li').addClass('editing').find('.edit');
			$input.val($input.val()).focus();
		},

		editKeyup: function (e) {
			if (e.which === ENTER_KEY) {
				e.target.blur();
			}

			if (e.which === ESCAPE_KEY) {
				$(e.target).data('abort', true).blur();
			}
		},

		update: function (e) {
			var el = e.target;
			var $el = $(el);
			var val = $el.val().trim();

			if ($el.data('abort')) {
				$el.data('abort', false);
				this.render();
				return;
			}

			var i = this.indexFromEl(el);

			if (val) {
				this.todos[i].title = val;
			} else {
				this.todos.splice(i, 1);
			}

			this.render();
		},

		destroy: function (e) {
			this.todos.splice(this.indexFromEl(e.target), 1);
			this.render();
		}
	};

  App.init();

})();
