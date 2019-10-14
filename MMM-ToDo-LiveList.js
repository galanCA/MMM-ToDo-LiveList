"use strict";

Module.register("MMM-ToDo-LiveList",{
	results: {},
	defaults: {
		text: "Todo List:",
		Header: "Todo List:"
	},

	/*getStyle: function() {
		return ["MMM-ToDo-LiveList.css"];
	}
	*/

	getDom: function() {
		var wrapper = document.createElement("div");
		var header = document.createElement("div");
		var list = document.createElement("table");

		header.innerHTML = this.config.Header;
		wrapper.appendChild(header);

		// ITEM 1
		var row = document.createElement("tr");
		list.appendChild(row);
		row.innerHTML = "1) Be Great!";
		

		// ITEM 2
		var row2 = document.createElement("tr");
		list.appendChild(row2);
		row2.innerHTML = "2) Create awesome";
		wrapper.appendChild(list);
		

		return wrapper;
	}


});