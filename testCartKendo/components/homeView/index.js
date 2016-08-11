'use strict';

app.homeView = kendo.observable({
    dataSource: new kendo.data.DataSource({
            transport: { 
                read: { 
                    url: "data/menu.json", 
                    dataType: "json" 
                } 
            }
        }),
    currentItem: null,
    onShow: function() {},
    afterShow: function() {},

});
     function showDetailsView(e) {
        var id = parseInt(e.view.params.id),
         
            item = app.homeView.dataSource.get(id);

        app.homeView.set("currentItem", item);
    }

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.homeView.set('title', 'Home');
})();
// END_CUSTOM_CODE_homeView