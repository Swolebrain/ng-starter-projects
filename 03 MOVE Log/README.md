1. Create a new module named MoveLogApp, and then attach it to the <body> element in the view.

2. In the controller, there is a property called $scope.exercises containing an array of objects. Attach the controller to the div.main element in the view, and then finish the view to display each item in the exercises array. Remember that for some reason, the ng-src directive needs the string within it to be an expression.

3. In the controller, add another property called $scope.increase. Set it equal to a function that takes in the index of the exercise that was clicked, and then adds one to that exercise's count property.

4. In the view in the span.increase element, use ng-click to tell AngularJS to run the increase() function when clicked. Use $index to pass in the index of the item that was clicked.

5. Implement decrease functionality.
