
var app = angular.module("instantSearch", []);


app.filter('searchFor', function(){

	
	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.body.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	

	$scope.items = [
		{
			url: '#',
			title: 'Utech Estimator',
			body:'iOS, Swift, Apple, MongoDB, Heroku, NoSQL, mobile app, android, Contract generation, Scalable',
			image: '../estimator.png'
		},
		{
			url: '#',
			title: 'Finance Management Software',
			body:'Java, VBA, Google Sheets, MySQL, Finance, Database',
			image: '../finance.jpg'
		},
		{
			url: '#',
			title: 'Paperless System',
			body: 'Zoho, Java, SQL Server, MySQL, database, CRM, front-end',
			image: '../paperless.png'
		},
		{
			url: '#',
			title: 'Inventory Management System',
			body: 'Zoho, Java, SQL Server, MySQL, database, CRM, front-end, Angular',
			image: '../inventory.jpg'
		},
		{
			url: '#',
			title: 'Contract Generation System',
			body: 'MS Access, Java, SQL Server, MySQL, database, CRM, Microsoft office, Github',
			image: '../contract.jpg'
		},
		{
			url: '#',
			title: 'Webpage redesign',
			body: 'back-end, Java, SQL Server, MySQL, database, HTML, CSS, JavaScript, PHP, Github, front-end',
			image: '../webpage1.jpg'
		},
		{
			url: '#',
			title: 'Billing Management System',
			body: 'Java, SQL 2000, MySQL, database, CRM, front-end, back-end, C++',
			image: '../bill.jpg'
		},
		{
			url: '#',
			title: 'Automated Restaurant Ordering System',
			body: 'Java, SQL 2000, MySQL, database, CRM, front-end, back-end, C++',
			image: '../zigbee.jpg'
		}
	];


}
