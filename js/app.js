// declare a module
var myAppModule = angular.module('lessConverter', []);

// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('checkoutput', function() {
	return function(input) {
		if(input) {
			return "alert-error";
		} else {
			return "";
		}
	};
});
