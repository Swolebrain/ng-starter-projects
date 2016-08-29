1. Create a new module named GameboardApp, and then attach it to the <body> element in the view.

2. In the controller, there is a property called $scope.scores containing an array of objects with information about each game. Attach the controller to the div.main element in the view.

3. Make a new file js/directives/game.js. In it, create a new directive named game:
  * Use app.directive to create the new directive
  * Use restrict to create a new Element
  * Use scope to specify that we'll pass information into this directive through an attribute named info
  * Use templateUrl to tell this directive to use the js/directives/game.html file

4. Include this new JavaScript file in index.html as a <script> element.

5. Next, write the directives template. In the file js/directives/game.html, finish the template so it displays a games details. Looking at the format of the data in $scope.scores, each game has five pieces of data - visitor_team, home_team, period, visitor_score, and home_score.

6. In the view inside the .row div, use the <game> directive to display the details of each game:
  1. On the <game> directive, use ng-repeat to loop through the scores.
  2. Pass each item into the <game> directive's info attribute.
