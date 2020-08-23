// THis is just a test plugin to show how can we create a plugin
registerPlugin({ // Register the plugin to be able to use it 
    install: function (less, pluginManager, functions) {
        // Add function that return number ten
        functions.add("ten", function () {
            return 10;
        });
        // Add function that calculare the avg 
        functions.add("avg", function () {
            let total = 0;
            for (let x = 0; x < arguments.length; x++){
                total += arguments[x].value;
            }
            return total / arguments.length;
        });
    }
});