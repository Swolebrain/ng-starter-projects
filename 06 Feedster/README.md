1. Create a new module named FeedsterApp, and then attach it to the body element in the view.

2. In the controller, there is a property called $scope.posts containing an array of objects with information about each post. Attach the controller to the div.posts element.

3. Create a directive named feedsterPost:
  1. Make a new file js/directives/feedsterPost.js. In it, create a new directive named feedsterPost.
  2. Use scope to specify that we'll pass information into this directive through an attribute named post
  3. Use templateUrl to tell this directive to use the js/directives/feedsterPost.html file

4. Include this new JavaScript file in index.html as a script element.

5. Next, write the directives template. In the file js/directives/feedsterPost.html, finish the template so it displays a posts details. Looking at the format of the data in $scope.posts, display each posts author name, author avatar, comment image, and comment text. Remember to use ng-src to display images.

6. In the view inside the .post div, use the feedster-post directive to display the details of each post:
  1. On the .post div, use ng-repeat to loop through posts.
  2. Pass each item into the feedster-post directive's post attribute.
