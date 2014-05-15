define(function () {
    return [
        '<div data-role="drawer" id="categories" style="width: 270px" data-model="APP.categories.model" data-before-show="APP.categories.events.beforeShow" data-views="[' + "'todos']" + '" class="hidden">',
  		'    <div class="km-group-title">Categories</div>',
  		'    <ul data-role="listview" data-bind="source: categories" data-template="categories-template"></ul>',
  		'	 <a data-role="button" data-icon="compose" class="full" data-rel="modalview" href="#newCategory">New</a>',
		'</div>',
        '<script type="text/x-kendo-template" id="categories-template">',
  		'	<a data-bind="click: onCategorySelect">#: name #</a>',
		'</script>'
    ].join('\n');
});