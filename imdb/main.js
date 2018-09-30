(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    background:rgb(4, 17, 0);\r\n    text-align:center;\r\n    padding:10px 0px 20px 0px;\r\n    color:rgb(200, 200, 150);\r\n}\r\n\r\n\r\n\r\n#footer{\r\n    background:rgb(63,102, 87);\r\n    text-align:center;\r\n    padding:10px 0px;\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" id=\"header\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>\n        Welcome to {{ title }}\n      </h1>\n    </div>\n  </div>  \n</div>\n\n\n  <router-outlet></router-outlet>\n      \n\n<div class=\"container\" id=\"footer\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p>Copyright&copy; Ramesh Kumar Munjal</p>\n      </div>\n    </div>  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'imdb';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _imdb_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imdb-http.service */ "./src/app/imdb-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-movie/single-movie.component */ "./src/app/single-movie/single-movie.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_7__["SingleMovieComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                    { path: 'singleMovie/:imdbID', component: _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_7__["SingleMovieComponent"] },
                    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
                    //blog/:blogId
                ])
            ],
            providers: [_imdb_http_service__WEBPACK_IMPORTED_MODULE_5__["ImdbHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    background:rgb(4, 17, 0);\r\n    color:rgb(200,200,150);\r\n    font-family:helvetica;\r\n    font-weight:bold;\r\n    padding:5px 20px;\r\n}\r\n#contents{\r\n    background:rgb(200, 240, 190);\r\n    text-align:center;\r\n    padding:10px 0px 20px 0px;\r\n    height:auto;\r\n    color:rgb(20,20,20)\r\n}\r\n.panel-heading{\r\n    height:80px;\r\n    padding-top:20px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"id=\"contents\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\"*ngIf=\"allMovies.length>0\">\n       <div *ngFor=\"let movie of allMovies\" class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4\">\n         <div class=\"panel panel-default\">\n           <div class=\"panel-heading\"><b>{{movie.Title | uppercase}}</b></div>\n           <div class=\"panel-body\">\n            <img class=\"moviePic\" [src]=\"movie.Poster\" width=\"200\" height=\"200\" >\n           </div>\n           <div class=\"panel-footer\">\n             <p> <a [routerLink]=\"['/singleMovie', movie.imdbID]\" class=\"btn\">View</a></p>\n           </div>\n         </div>\n       </div>\n      </div> \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imdb_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imdb-http.service */ "./src/app/imdb-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(imdbHttpService, elementRef) {
        this.imdbHttpService = imdbHttpService;
        this.elementRef = elementRef;
        this.titlesArray = ["boy", "girl", "man", "woman", "king", "queen", "city", "player", "day", "night", "dream"];
        this.index = Math.floor(Math.random() * (this.titlesArray.length - 1)) + 1;
        this.titleChoice = this.titlesArray[this.index];
        console.log("Home Component constructor called");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(200, 190, 50)';
        console.log("Home Component OnInit Called");
        this.allMovies = this.imdbHttpService.getAllMovies(this.titleChoice).subscribe(function (data) {
            console.log("logging data");
            _this.allMovies = data.Search;
            console.log(_this.allMovies);
        }, function (error) {
            console.log("some error occurred");
        });
        console.log(this.allMovies);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home Component Destroyed");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_imdb_http_service__WEBPACK_IMPORTED_MODULE_1__["ImdbHttpService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/imdb-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/imdb-http.service.ts ***!
  \**************************************/
/*! exports provided: ImdbHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImdbHttpService", function() { return ImdbHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImdbHttpService = /** @class */ (function () {
    function ImdbHttpService(_http) {
        this._http = _http;
        this.searchTitle = 'girl';
        this.baseUrl = 'http://www.omdbapi.com';
        this.authToken = "499e294";
        console.log("imdb http service called");
    }
    ImdbHttpService.prototype.getAllMovies = function (titleChoice) {
        this.searchTitle = titleChoice;
        var myResponse = this._http.get(this.baseUrl + "/?s=" + this.searchTitle + "&apikey=" + this.authToken);
        console.log(myResponse);
        return myResponse;
    };
    ImdbHttpService.prototype.getSingleMovie = function (singleMovieId) {
        var myResponse = this._http.get(this.baseUrl + "/?i=" + singleMovieId + "&apikey=" + this.authToken);
        console.log(myResponse);
        return myResponse;
    };
    ImdbHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImdbHttpService);
    return ImdbHttpService;
}());



/***/ }),

/***/ "./src/app/single-movie/single-movie.component.css":
/*!*********************************************************!*\
  !*** ./src/app/single-movie/single-movie.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#singleMovieContainer{\r\n    text-align:left;\r\n    font-family:helvetica;\r\n    padding:20px 40px;\r\n    min-height:70vh;\r\n    background:rgb(100, 162, 149);\r\n    color:rgb(240, 255, 240);\r\n}\r\n#currentMovieTitle{\r\n    text-align:center;\r\n    font-size:24px;\r\n    font-weight:bold;\r\n}\r\n#rating{\r\n    background:black;\r\n    color:yellow;\r\n    padding:4px 20px;\r\n    border-radius:5px;\r\n    float:right;\r\n    font-size:18px;\r\n}\r\n#currentMovieYear{\r\n    font-size:14px;\r\n}\r\n.btn{\r\n    background:black;    \r\n    padding:5px 20px;\r\n    font-weight:bold;\r\n}\r\n.btn a{\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/single-movie/single-movie.component.html":
/*!**********************************************************!*\
  !*** ./src/app/single-movie/single-movie.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"singleMovieContainer\">\n    <div class=\"row\" *ngIf=\"currentMovie\">\n      <div class=\"col-md-12\">\n       <p id=\"currentMovieTitle\"> <span>{{currentMovie.Title}}</span><span id=\"currentMovieYear\">({{currentMovie.Year}})</span><span id=\"rating\">{{currentMovie.imdbRating}}</span> </p>      \n       <p> <span style=\"margin-right:20px;\"><b>Type:</b>{{currentMovie.Type}}</span><span style=\"margin-right:20px;\"><b>Language:</b>{{currentMovie.Language}}</span><span><b>Runtime:</b>{{currentMovie.Runtime}}</span> </p>      \n       <p><b>Plot:</b> {{currentMovie.Plot}} </p>      \n       <p><span><b>Genre : </b>{{currentMovie.Genre}}</span></p>\n       <p><span><b>Director : </b>{{currentMovie.Director}}</span></p>\n       <p><span><b>Actors : </b>{{currentMovie.Actors}}</span></p>\n       <p><span><b>Writer : </b>{{currentMovie.Writer}}</span></p>\n       <p><span><b>Production: </b>{{currentMovie.Production}}</span></p>\n       <p><span><b>Released : </b>{{currentMovie.Released}}</span></p>\n       <p><span><b>ID : </b>{{currentMovie.imdbID}}</span></p>\n       <p style=\"text-align:center\"><button class=\"btn\"><a href=\"home\">Go Back</a></button></p>\n      </div>\n    </div>  \n  </div>\n\n  \n    \n    \t\n    \n    "

/***/ }),

/***/ "./src/app/single-movie/single-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-movie/single-movie.component.ts ***!
  \********************************************************/
/*! exports provided: SingleMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMovieComponent", function() { return SingleMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _imdb_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imdb-http.service */ "./src/app/imdb-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleMovieComponent = /** @class */ (function () {
    function SingleMovieComponent(_route, router, imdbHttpService) {
        this._route = _route;
        this.router = router;
        this.imdbHttpService = imdbHttpService;
        console.log("single-movie component constructor called");
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngInit single-movie component called");
        var singleMovieId = this._route.snapshot.paramMap.get('imdbID');
        console.log(singleMovieId);
        this.imdbHttpService.getSingleMovie(singleMovieId).subscribe(function (data) {
            console.log("logging data");
            _this.currentMovie = data;
            console.log(_this.currentMovie);
        }, function (error) {
            console.log("some error occurred");
        });
        console.log(this.currentMovie);
    };
    SingleMovieComponent.prototype.ngOnDestroy = function () {
        console.log("single-movie component destroyed");
    };
    SingleMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-movie',
            template: __webpack_require__(/*! ./single-movie.component.html */ "./src/app/single-movie/single-movie.component.html"),
            styles: [__webpack_require__(/*! ./single-movie.component.css */ "./src/app/single-movie/single-movie.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _imdb_http_service__WEBPACK_IMPORTED_MODULE_2__["ImdbHttpService"]])
    ], SingleMovieComponent);
    return SingleMovieComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sanket\imdb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map