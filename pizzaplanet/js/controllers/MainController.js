app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic,tomatoes,olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Chicken Sandwich',
      description: 'Chicken Sandwich',
      price: 8.95
    },
    {
      name: 'Deep Dish Pizza',
      description: 'Chicago Special',
      price: 9.95
    },
    {
      name: 'Chicken Fried Rice',
      description: 'Chinese Food',
      price: 10.95
    }
  ];
  $scope.extras = [
  	{
      name: 'Vanilla Ice Cream',
      description: 'Summer treat',
      price: 3.95
    },
    {
      name: 'Apple Pie',
      description: 'apple and pie',
      price: 4.95
    },
    {
      name: 'Chocolate Fudge Cake',
      description: 'Sweet Sweet Sweet',
      price: 4.95
    }
    
  ]

}]);