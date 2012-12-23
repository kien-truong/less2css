function LessCtrl($scope) {
	$scope.alert_message = "";
	$scope.output_css = "";

	$scope.convert = function() {
		input = $scope.input_less;
		if (typeof input == 'undefined') {
			input = '';
		}
		parser = new less.Parser({});
		try {
			parser.parse(input, function (error, root) {
				$scope.output_css = root.toCSS();
				$scope.alert_message = error;
			});
		} catch (err) {
			$scope.alert_message = "Less runtime error. Perhap invalid CSS ?";
		}
	};
}
