'use strict';

app.contactsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_contactsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.contactsView.set('title', 'Contacts');
    
    var dataSource = new kendo.data.DataSource({
        data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    });
    app.contactsView.set('dataSource', dataSource);
    
    var dataSource1 = [{ "id": "1", "name": "Bob","qty":"1" }, { "id": "2", "name": "Mary" ,"qty":"1" }, { "id": "3", "name": "John","qty":"1"  }];
    //var orderstore = new kendo.data.DataSource({ data: dataSource1 });
    dataSource1.push({"id": "4", "name": "Top","qty":"1" })
    
    var id="3";
    
    var index = dataSource1.map(function(e) {return e.id; }).indexOf(id);
    
    dataSource1.splice(index, 1);
    
    
    id = "4";
    index = dataSource1.map(function(e) {return e.id; }).indexOf(id);
    var addnum = parseInt(dataSource1[index].qty)   ;
      addnum += 1;  
    dataSource1[index].qty = addnum.toString();
    
    

    app.contactsView.set('orderstore', dataSource1);
    
    app.contactsView.set('alert', function (e) { alert(e.data.id); });
})();
// END_CUSTOM_CODE_contactsView