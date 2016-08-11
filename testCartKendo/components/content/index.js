'use strict';

app.content = kendo.observable({
    
    
    onShow: function(e) {
        //var viewparams = e.view.params;
        //var id = viewparams.id;
        
    },
    afterShow: function() {},
    
    addToCart:function () {
        //navigator.notification.alert("addToCart");
        
        //var array1 = ["TOP","BOO"];
        var dataSource1 = [{ "id": "1", "name": "Bob","qty":"1" }, { "id": "2", "name": "Mary" ,"qty":"1" }, { "id": "3", "name": "John","qty":"1"  }];
        var id=2;
    
    var index = dataSource1.map(function(e) {return e.id; }).indexOf(id);
    
    id = "3";
    index = dataSource1.map(function(e) {return e.id; }).indexOf(id);
    
    //navigator.notification.alert(dataSource1[index].name);
        
    //dataSource1[index].qty = dataSource1[index].qty+1;
    var addnum = parseInt(dataSource1[index].qty)   ;
      addnum += 1;  
    dataSource1[index].qty = addnum.toString();
    var text = dataSource1[index].name +":"+ dataSource1[index].qty
    navigator.notification.alert(text);
        
    }
        
});

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    /*
    var item = {"id": 1,
        "name": "Sashimi salad",
         "price": 12.00,
         "image": "sashimi-salad.jpg",
         "category": "Cold starters",
         "description": "Organic greens topped with market fresh sashimi, wasabi soy vinaigrette.",
         "featured": true};
        
        //navigator.notification.alert(item.id);

    app.content.set("currentItem", item);
    */
    app.content.set('title', 'content');
})();
// END_CUSTOM_CODE_settingsView