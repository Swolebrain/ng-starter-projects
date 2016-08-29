1. Create a new module named OutboxApp, and then attach it to the body element in the view.

2. Visit [emails.json](https://www.codecademy.com/courses/learn-angularjs/projects/angularjs_outbox-1). It's a JSON object containing an array of emails. Let's fetch this data and display it in the app.

3. Create a service named emails for getting this email data:
  1. Make a new folder named js/services. In this folder, create a new file named js/services/emails.js.
  2. Use app.factory to create a new service named emails.
  3. Use $http to get the email data from emails.json.

4. Include this new JavaScript file in the view as a new script element.

5. In the controller, use the emails service to fetch data from the server:
  1. First add emails into HomeController as a dependency so that it's available to use.
  2. Then use emails within the controller to asynchronously fetch the email data from the server and store it into $scope.emails.

6. Attach the controller to the div.main element.

7. In the view, finish the code to display an email. Looking at the format of the data in emails.json, display each email's from, subject, and datetime in their corresponding span elements.
