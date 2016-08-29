1. Inside the directives folder, create a file js/directives/programListing.js. In this file,create a new directive named programListing:  
  * Use app.directive to create the new directive
  * Use restrict to create a new Element
  * Use scope to specify that we'll pass information into this directive through an attribute named listing
  * Use templateUrl to tell this directive to use the js/directives/programListing.html file

2. Include this new JavaScript file in the view as a <script> element.

3. Next, write the directive template. Make a new file js/directives/programListing.html. Move the HTML from index.html inside the .content div into the directive template file.

4. The programListing directive takes in information through the listing attribute. The data in listing becomes available to use in the directives template. Update the expressions in the directives template so that it uses listing to display each item.

5. In the view, use the <program-listing> directive to display the details of program.

6. Add another object to the controller. Feel free to use your favorite TV show.

7. Use another <program-listing> directive to display the details of the new object.