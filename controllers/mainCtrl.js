/// <reference path="../scripts/angular.min.js" />


//Value, Factory, Service, Filter and Constant)

var injectModuleArr =
	[
		'ngRoute',
		'ngAnimate',

	];

// configure our routes
// Scope: http://jsfiddle.net/AXBut/223/
//var modulo = angular.module('appName', []);
var modulo = angular.module('appName', injectModuleArr);

function config() {
	//function config(obj)
	//function config($routeProvider, $locationProvider) 

	//clog('function config(obj), obj:', obj);

	//	//$routeProvider

	//	//	// route for the home page
	//	//	.when('/', {
	//	//		templateUrl: 'listaFilm.html',
	//	//		controller: 'listaController'
	//	//	})

	//	//	// route for the description page
	//	//	.when('/:phoneName', {
	//	//		templateUrl: 'description.html',
	//	//		controller: 'descriptionController'
	//	//	});
	//	var file = 'file:///E:/Dropbox/Projects/SourceControlProjects/Memos_AngulerApp/Basic_AngulerApp/Views/betSite.html'
	//	+'/**';

	//	//clog('$httpProvider', $httpProvider);

	//	//$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	//	//$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = file;

	//	//$httpProvider.defaults.headers.common['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';

	//	//$httpProvider.resourceUrlWhitelist([
	//    //    file
	//	//]);

	/**********************************************************************/

	//	$routeProvider
	//	 .when('/Book/:bookId', {
	//	 	templateUrl: 'book.html',
	//	 	controller: 'BookController',
	//	 	resolve: {
	//	 		// I will cause a 1 second delay
	//	 		delay: function ($q, $timeout) {
	//	 			var delay = $q.defer();
	//	 			$timeout(delay.resolve, 1000);
	//	 			return delay.promise;
	//	 		}
	//	 	}
	//	 });

	//	$routeProvider.when('/Book/:bookId/ch/:chapterId', {
	//		templateUrl: 'chapter.html',
	//		controller: 'ChapterController'
	//	});

	//	// configure html5 to get links working on jsfiddle
	//	$locationProvider.html5Mode(true);
}
//config();

modulo.
	config(['$routeProvider',
		function config($routeProvider) {
			$routeProvider
				//.when('/view1', { templateUrl: 'view1.html', controller: 'FirstController' })

				.when('/login', {
					template: '<login></login>'
				})
				.when('/books', {
					template: '<book-list></book-list>'
				})
				.when('/books/:bookId', {
					template: '<book-item></book-item>'
				})
				//.otherwise('/phones');
				.otherwise({
					redirectTo: '/login'
				})
		}
	]);


function mainCtrl($scope) {

	//clog('angular', angular);
	//clog('window', window);
	//clog('window.screenTop ', window.screenTop);

	var displayData = {
		// displayData.head
		head: {
			// displayData.head.title
			title: 'Coding Challenge- Senior Full Stack Developer - PROFTIT',
		},

	};
	$scope.$root.displayData = displayData;

}
modulo.controller('mainCtrl', mainCtrl);


function app() {

	function controller($scope) { }

	function link($scope, element, attrs, ctrl, transclude) { }

	function getScope() {
		var scope = {
			// The name after the char is the 'attr name'
			// = to get the prop as ngObject Two Way Bind
			// & to get the prop as ngObject One Way Bind
			//user: '=?person',

			// @ to get the prop as string
			//role: '@userRole',

		};

		return scope;

	}

	// app.html
	return {
		//An HTML template Url:
		templateUrl: 'app.html',

		//A - for attr, E- for element, C- for class, M- for comment.
		//Mix letters for multyple 
		restrict: 'E',

		//true: this attr replace the custom element to an HTML element, not needed.
		//false: defualt, Do not replace the custom element to an HTML element
		//Only work if: template is surround with one root HTML elementent like <div></div>
		replace: false,

		link: link,

		controller: controller,
		//In ANY of the cases $parent is the 'controller scope'.
		//false: defualt, SAME scope for 'perent scope' and 'directive controller scope'.
		//scope: false,

		//true: Inherited $scope, encapsulate the 'directive controller scope' and make any information on the 'directive controller scope', 
		//inaccessible to parent scope, prototype='controller scope'.
		//scope: true,

		//obj: isolate-scope, recomended in a case of 'Component(HTML) directive'
		scope: getScope(),

		transclude: true,

	};

}
modulo.directive('app', app);


function login() {

	function controller($scope, $location) {
		$scope.rememberMe = true;
		$scope.emailAddress = '';
		$scope.password = '';

		$scope.signIn = function () {
			//alert('signIn');
			let user = {
				rememberMe: $scope.rememberMe,
				emailAddress: $scope.emailAddress,
				password: $scope.password,
			};

			console.log('signIn', user, $scope);

			$location.path("/books");
		}
	}

	function link($scope, element, attrs, ctrl, transclude) { }

	function getScope() {
		var scope = {
			// The name after the char is the 'attr name'
			// = to get the prop as ngObject Two Way Bind
			// & to get the prop as ngObject One Way Bind
			//user: '=?person',

			// @ to get the prop as string
			//role: '@userRole',

		};

		return scope;

	}

	// login.html
	return {
		//An HTML template Url:
		templateUrl: 'login.html',

		//A - for attr, E- for element, C- for class, M- for comment.
		//Mix letters for multyple 
		restrict: 'E',

		//true: this attr replace the custom element to an HTML element, not needed.
		//false: defualt, Do not replace the custom element to an HTML element
		//Only work if: template is surround with one root HTML elementent like <div></div>
		replace: false,

		link: link,

		controller: controller,
		//In ANY of the cases $parent is the 'controller scope'.
		//false: defualt, SAME scope for 'perent scope' and 'directive controller scope'.
		//scope: false,

		//true: Inherited $scope, encapsulate the 'directive controller scope' and make any information on the 'directive controller scope', 
		//inaccessible to parent scope, prototype='controller scope'.
		//scope: true,

		//obj: isolate-scope, recomended in a case of 'Component(HTML) directive'
		scope: getScope(),

		transclude: true,

	};

}
modulo.directive('login', login);


function bookList() {
	/* 
intitle: מחזירה תוצאות שבהן נמצאה טקסט אחרי מילת המפתח הזו בכותרת.
inauthor: מחזירה תוצאות שבהן נמצא הטקסט שמופיע בעקבות מילת המפתח במחבר.
inpublisher: מחזירה תוצאות שבהן נמצא הטקסט אחרי מילת המפתח הזו בבעל האפליקציה.
subject: מחזירה תוצאות שבהן הטקסט שמופיע אחרי מילת המפתח הזו מופיע ברשימת הקטגוריות של הנפח.
isbn: מחזירה תוצאות שבהן הטקסט שמופיע אחרי מילת המפתח הזו הוא מספר ה-ISBN.
lccn: מחזירה תוצאות שבהן הטקסט שמופיע אחרי מילת המפתח הזו הוא מספר הבקרה של ספריית הקונגרס.
oclc: מחזירה תוצאות שבהן הטקסט שמופיע אחרי מילת המפתח הזו הוא המספר של ספריית המחשב המקוונת. -->
 */

	const inQweryProps = {
		'intitle': '', 'inauthor': '', 'inpublisher': '', 'subject': '', 'isbn': '', 'lccn': '', 'oclc': ''
	};

	/* https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey */
	function getQweryProps(paramsObj = inQweryProps) {
		let str = '';
		for (const propName in inQweryProps) {
			if (paramsObj.hasOwnProperty.call(paramsObj, propName)) {
				const element = paramsObj[propName];
				if (element && element != '') {
					str += `+${propName}:${element}`
				}

			}
		}

		if (str.length > 0) {
			str = str.substring(1);
		}

		return str;
	}

	const startIndexProps = { startIndex: 0, maxResults: 10 };
	function getStartIndexProps(paramsObj = startIndexProps) {
		const { startIndex, maxResults } = Object.assign({}, startIndexProps, paramsObj);
		if (startIndex == 0) {
			return '';
		}
		return `startIndex=${startIndex}&maxResults=${maxResults}`;
	}

	const itemsPaginationProps = { items: undefined, itemsPagination: undefined };
	function calcItemsPagination(length, maxResults) {
		console.log('calcItemsPagination', {length, maxResults});

		var num = Math.ceil(length / maxResults);
		var arr = [];
		for (let index = 0; index < num; index++) {
			arr.push(index);
		}

		console.log('calcItemsPagination res ', {num, arr});

		return arr;
	}

	function controller($scope, $http) {
		Object.assign($scope, inQweryProps, startIndexProps, itemsPaginationProps);
		
		function hasResponse(response) {
			if (response && response.data && response.data.items && response.data.items.length > 0) {
				$scope.items = response.data.items;
				$scope.itemsPagination = calcItemsPagination($scope.items.length, $scope.maxResults);
				
			}

			else {
				console.error('in else', params);
				console.alert('error in hasResponse');
			}

			console.log('sendQuery get', response);

		}

		$scope.fillExampleParams = function () {
			const inQweryExampleProps = {
				'intitle': 'flowers', 'inauthor': 'keyes', 'inpublisher': '', 'subject': '', 'isbn': '', 'lccn': '', 'oclc': ''
			};

			Object.assign($scope, inQweryExampleProps);

		}

		$scope.sendQuery = function () {
			const str = getQweryProps($scope);
			const startIndex = getStartIndexProps($scope);

			if (str && str != '') {
				const query = `https://www.googleapis.com/books/v1/volumes?${startIndex}&q=${str}`;

				//$http.get('/someUrl', config).then(successCallback, errorCallback);
				$http.get(query, {}).then(hasResponse);

				console.log('sendQuery', str, query);

			}

			console.log('sendQuery', str, $scope);
		}

		$scope.moveToPage = function (startIndex) {
			$scope.startIndex = startIndex;
			$scope.sendQuery();
		}

		$scope.clearParams = function () {
			Object.assign($scope, inQweryProps)

			console.log('clearParams', $scope);
		}


	}

	function link($scope, element, attrs, ctrl, transclude) { }

	function getScope() {
		var scope = {
			// The name after the char is the 'attr name'
			// = to get the prop as ngObject Two Way Bind
			// & to get the prop as ngObject One Way Bind
			//user: '=?person',

			// @ to get the prop as string
			//role: '@userRole',

		};

		return scope;

	}

	// bookList.html
	return {
		//An HTML template Url:
		templateUrl: 'bookList.html',

		//A - for attr, E- for element, C- for class, M- for comment.
		//Mix letters for multyple 
		restrict: 'E',

		//true: this attr replace the custom element to an HTML element, not needed.
		//false: defualt, Do not replace the custom element to an HTML element
		//Only work if: template is surround with one root HTML elementent like <div></div>
		replace: false,

		link: link,

		controller: controller,
		//In ANY of the cases $parent is the 'controller scope'.
		//false: defualt, SAME scope for 'perent scope' and 'directive controller scope'.
		//scope: false,

		//true: Inherited $scope, encapsulate the 'directive controller scope' and make any information on the 'directive controller scope', 
		//inaccessible to parent scope, prototype='controller scope'.
		//scope: true,

		//obj: isolate-scope, recomended in a case of 'Component(HTML) directive'
		scope: getScope(),

		transclude: true,

	};

}
modulo.directive('bookList', bookList);


const itemExample = {
	"kind": "books#volume",
	"id": "Fgn65IL3q4wC",
	"etag": "6sHjLj5ZcAU",
	"selfLink": "https://www.googleapis.com/books/v1/volumes/Fgn65IL3q4wC",
	"volumeInfo": {
		"title": "Flowers for Algernon",
		"authors": [
			"Daniel Keyes"
		],
		"publishedDate": "1972",
		"readingModes": {
			"text": false,
			"image": false
		},
		"pageCount": 228,
		"printType": "BOOK",
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "0.3.1.0.preview.0",
		"panelizationSummary": {
			"containsEpubBubbles": false,
			"containsImageBubbles": false
		},
		"imageLinks": {
			"smallThumbnail": "http://books.google.com/books/content?id=Fgn65IL3q4wC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
			"thumbnail": "http://books.google.com/books/content?id=Fgn65IL3q4wC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.com/books?id=Fgn65IL3q4wC&q=flowers+inauthor:keyes&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
		"infoLink": "http://books.google.com/books?id=Fgn65IL3q4wC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
		"canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=Fgn65IL3q4wC"
	},
	"saleInfo": {
		"country": "IL",
		"saleability": "NOT_FOR_SALE",
		"isEbook": false
	},
	"accessInfo": {
		"country": "IL",
		"viewability": "NO_PAGES",
		"embeddable": false,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
			"isAvailable": false
		},
		"pdf": {
			"isAvailable": false
		},
		"webReaderLink": "http://play.google.com/books/reader?id=Fgn65IL3q4wC&hl=&source=gbs_api",
		"accessViewStatus": "NONE",
		"quoteSharingAllowed": false
	}
};

function bookListDisplay() {

	const itemsExample = [
		itemExample,
		{
			"kind": "books#volume",
			"id": "gK98gXR8onwC",
			"etag": "RVxUBbKDXec",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
			"volumeInfo": {
				"title": "Flowers for Algernon",
				"subtitle": "One Act",
				"authors": [
					"David Rogers",
					"Daniel Keyes"
				],
				"publisher": "Dramatic Publishing",
				"publishedDate": "1969",
				"industryIdentifiers": [
					{
						"type": "ISBN_10",
						"identifier": "0871293870"
					},
					{
						"type": "ISBN_13",
						"identifier": "9780871293879"
					}
				],
				"readingModes": {
					"text": false,
					"image": true
				},
				"pageCount": 36,
				"printType": "BOOK",
				"categories": [
					"Drama"
				],
				"averageRating": 5,
				"ratingsCount": 1,
				"maturityRating": "NOT_MATURE",
				"allowAnonLogging": false,
				"contentVersion": "0.3.4.0.preview.1",
				"panelizationSummary": {
					"containsEpubBubbles": false,
					"containsImageBubbles": false
				},
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"language": "en",
				"previewLink": "http://books.google.com/books?id=gK98gXR8onwC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=2&source=gbs_api",
				"infoLink": "http://books.google.com/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
				"canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC"
			},
			"saleInfo": {
				"country": "IL",
				"saleability": "NOT_FOR_SALE",
				"isEbook": false
			},
			"accessInfo": {
				"country": "IL",
				"viewability": "PARTIAL",
				"embeddable": true,
				"publicDomain": false,
				"textToSpeechPermission": "ALLOWED",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"acsTokenLink": "http://books.google.com/books/download/Flowers_for_Algernon-sample-pdf.acsm?id=gK98gXR8onwC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
				},
				"webReaderLink": "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&source=gbs_api",
				"accessViewStatus": "SAMPLE",
				"quoteSharingAllowed": false
			}
		},
		{
			"kind": "books#volume",
			"id": "F1wgqlNi8AMC",
			"etag": "8ZnH9hZASrU",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/F1wgqlNi8AMC",
			"volumeInfo": {
				"title": "Flowers for Algernon",
				"subtitle": "Full",
				"authors": [
					"David Rogers",
					"Daniel Keyes"
				],
				"publisher": "Dramatic Publishing",
				"publishedDate": "1969",
				"description": "The compelling story of Charlie Gordon, willing victim of a strange experiment - a moron, a genius, a man in search of himself. Poignant, funny, tragic, but with a hope for the indomitable spirit of man, this unusual play tells a story you will long remember. It also offers a magnificent role.",
				"industryIdentifiers": [
					{
						"type": "ISBN_10",
						"identifier": "0871295377"
					},
					{
						"type": "ISBN_13",
						"identifier": "9780871295378"
					}
				],
				"readingModes": {
					"text": false,
					"image": true
				},
				"pageCount": 124,
				"printType": "BOOK",
				"categories": [
					"Juvenile Fiction"
				],
				"maturityRating": "NOT_MATURE",
				"allowAnonLogging": false,
				"contentVersion": "0.7.7.0.preview.1",
				"panelizationSummary": {
					"containsEpubBubbles": false,
					"containsImageBubbles": false
				},
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"language": "en",
				"previewLink": "http://books.google.com/books?id=F1wgqlNi8AMC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=3&source=gbs_api",
				"infoLink": "http://books.google.com/books?id=F1wgqlNi8AMC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
				"canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=F1wgqlNi8AMC"
			},
			"saleInfo": {
				"country": "IL",
				"saleability": "NOT_FOR_SALE",
				"isEbook": false
			},
			"accessInfo": {
				"country": "IL",
				"viewability": "PARTIAL",
				"embeddable": true,
				"publicDomain": false,
				"textToSpeechPermission": "ALLOWED",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"acsTokenLink": "http://books.google.com/books/download/Flowers_for_Algernon-sample-pdf.acsm?id=F1wgqlNi8AMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
				},
				"webReaderLink": "http://play.google.com/books/reader?id=F1wgqlNi8AMC&hl=&source=gbs_api",
				"accessViewStatus": "SAMPLE",
				"quoteSharingAllowed": false
			},
			"searchInfo": {
				"textSnippet": "The compelling story of Charlie Gordon, willing victim of a strange experiment - a moron, a genius, a man in search of himself."
			}
		},
	];

	const localStorageFavoriteKey = 'FavoriteKey';

	function controller($scope, $location) {
		//console.log('bookListDisplay', $scope);

		$scope.fillExampleData = function () {
			$scope.items = itemsExample;			
		}

		$scope.isFavorite = function (id) {
			const oldListStr = localStorage.getItem(localStorageFavoriteKey)
			const oldList = JSON.parse(oldListStr);

			// is Favorite
			if (oldList && oldList.includes && oldList.includes(id)) {
				return true;
			}

			// Not Favorite => add
			else {
				return false;
			}

		}

		$scope.changeIsFavorite = function (id) {

			const oldListStr = localStorage.getItem(localStorageFavoriteKey)
			var oldList = JSON.parse(oldListStr);

			if (!oldList || !oldList.includes) {
				oldList = [];
			}
			
			// is Favorite => remove
			if (oldList.includes(id)) {
				const index = oldList.indexOf(id);
				oldList.splice(index, 1);
			}

			// Not Favorite => add
			else {
				oldList.push(id);
			}

			localStorage.setItem(localStorageFavoriteKey, JSON.stringify(oldList));
			
		}

		// https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
		$scope.viewItem = function (id) {
			const url = "/books/"+id;
			//window.open(url, '_blank'); // in new tab
			window.open($location.$$absUrl.replace($location.$$path,url), '_blank');

			//$location.path(url);

		}
	}

	function link($scope, element, attrs, ctrl, transclude) { }

	function getScope() {
		var scope = {
			// The name after the char is the 'attr name'
			// = to get the prop as ngObject Two Way Bind
			// & to get the prop as ngObject One Way Bind
			//user: '=?person',
			items: '=',

			// @ to get the prop as string
			//role: '@userRole',

		};

		return scope;

	}

	// bookListDisplay.html
	return {
		//An HTML template Url:
		templateUrl: 'bookListDisplay.html',

		//A - for attr, E- for element, C- for class, M- for comment.
		//Mix letters for multyple 
		restrict: 'E',

		//true: this attr replace the custom element to an HTML element, not needed.
		//false: defualt, Do not replace the custom element to an HTML element
		//Only work if: template is surround with one root HTML elementent like <div></div>
		replace: false,

		link: link,

		controller: controller,
		//In ANY of the cases $parent is the 'controller scope'.
		//false: defualt, SAME scope for 'perent scope' and 'directive controller scope'.
		//scope: false,

		//true: Inherited $scope, encapsulate the 'directive controller scope' and make any information on the 'directive controller scope', 
		//inaccessible to parent scope, prototype='controller scope'.
		//scope: true,

		//obj: isolate-scope, recomended in a case of 'Component(HTML) directive'
		scope: getScope(),

		transclude: true,

	};

}
modulo.directive('bookListDisplay', bookListDisplay);


function bookItem() {

	
	function controller($scope, $routeParams, $http) {
		$scope.bookId = $routeParams.bookId;

		$scope.hasItem = function (data) {
			$scope.item = data;
			$scope.bookId = data.id;
		}

		function hasResponse(response) {
			if (response && response.data && response.data) {
				$scope.hasItem(response.data)
				
			}

			else {
				console.error('in else');
				console.alert('error in hasResponse');
			}

			console.log('sendQuery get', response);

		}

		// https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
		$scope.sendQuery = function () {

			if ($scope.bookId && $scope.bookId != '') {
				const query = `https://www.googleapis.com/books/v1/volumes/${$scope.bookId}`;

				//$http.get('/someUrl', config).then(successCallback, errorCallback);
				$http.get(query, {}).then(hasResponse);

				console.log('sendQuery', query);

			}

			console.log('sendQuery', $scope);
		}
		
		$scope.sendQuery();

	}

	function link($scope, element, attrs, ctrl, transclude) { }

	function getScope() {
		var scope = {
			// The name after the char is the 'attr name'
			// = to get the prop as ngObject Two Way Bind
			// & to get the prop as ngObject One Way Bind
			//user: '=?person',

			// @ to get the prop as string
			//role: '@userRole',

		};

		return scope;

	}

	// bookItem.html
	return {
		//An HTML template Url:
		templateUrl: 'bookItem.html',

		//A - for attr, E- for element, C- for class, M- for comment.
		//Mix letters for multyple 
		restrict: 'E',

		//true: this attr replace the custom element to an HTML element, not needed.
		//false: defualt, Do not replace the custom element to an HTML element
		//Only work if: template is surround with one root HTML elementent like <div></div>
		replace: false,

		link: link,

		controller: controller,
		//In ANY of the cases $parent is the 'controller scope'.
		//false: defualt, SAME scope for 'perent scope' and 'directive controller scope'.
		//scope: false,

		//true: Inherited $scope, encapsulate the 'directive controller scope' and make any information on the 'directive controller scope', 
		//inaccessible to parent scope, prototype='controller scope'.
		//scope: true,

		//obj: isolate-scope, recomended in a case of 'Component(HTML) directive'
		scope: getScope(),

		transclude: true,

	};

}
modulo.directive('bookItem', bookItem);
