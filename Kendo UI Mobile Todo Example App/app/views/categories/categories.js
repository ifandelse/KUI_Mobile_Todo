define([
    'views/view',
    'views/categories/categories_built',
    'app'
], function (View, html, app) {

    var model = {
        categories: app.data.categories,
        onCategorySelect : function(e) {
            var cat = e.data;
            localStorage.setItem("defaultCat", JSON.stringify(cat));
            $.publish('/category/selected', [ cat ]);
            APP.instance.navigate('todos?category=' + cat.Id);
        }
    };
    
    var events = {
        beforeShow: function() {
            app.data.categories.filter([]);
        }
    };

    return new View('categories', html, model, events);
});