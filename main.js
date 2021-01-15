(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+jZ9":
/*!****************************************************************!*\
  !*** ./src/app/pages/project-covid/project-covid.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectCovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCovidComponent", function() { return ProjectCovidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectCovidComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectCovidComponent.ɵfac = function ProjectCovidComponent_Factory(t) { return new (t || ProjectCovidComponent)(); };
ProjectCovidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCovidComponent, selectors: [["app-project-covid"]], decls: 66, vars: 0, consts: [[1, "mx-auto"], ["id", "title"], ["src", "assets/images/projects/covid.png", "alt", "Ilustra\u00E7\u00E3o de um v\u00EDrus"], ["id", "project-img", "src", "assets/images/captures/covid.png", "alt", "Imagem do Dashboard COVID-19"], ["id", "buttons"], [2, "display", "flex"], ["id", "github-button", "href", "https://github.com/danilovilhena/angular-covid-dashboard", "target", "_blank"], ["src", "assets/images/technologies/github.svg", "alt", "\u00CDcone do Github"], ["id", "figma-button", "href", "https://www.figma.com/file/qTJfTwpwZS4qElGaYfUkHQ/COVID-Dashboard", "target", "_blank"], ["src", "assets/images/technologies/figma.svg", "alt", "\u00CDcone do Figma"], ["id", "regular-button", "href", "https://vilhena-covid-dashboard.netlify.app", "target", "_blank"], ["id", "description"], [2, "display", "flex", "align-items", "center", "margin-top", "1rem"], ["src", "assets/images/ellipse.svg", "aria-hidden", "true"], ["id", "technologies"], [2, "display", "flex", "margin-left", "1rem", "margin-top", "1rem", "flex-direction", "column"], [1, "technology", 2, "margin-right", "2rem"], ["src", "assets/images/technologies/angular.svg", "alt", "\u00CDcone do Angular"], [1, "technology"], ["src", "assets/images/technologies/python.svg", "alt", "\u00CDcone do Python"], ["src", "assets/images/technologies/bootstrap.svg", "alt", "\u00CDcone do Bootstrap"], ["id", "details"], [2, "margin-top", "1rem"], ["id", "inverted-button", "routerLink", "/projects"]], template: function ProjectCovidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descri\u00E7\u00E3o da aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aplica\u00E7\u00E3o para exibir as informa\u00E7\u00F5es do COVID em cidades e estados do Brasil e do mundo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tecnologias usadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Detalhes da implementa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Componentizei e reutilizei os elementos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Consumi 4 APIs para coletar de forma mais completa os dados do COVID-19 no Brasil e no mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tratei os dados recebidos para melhorar a experi\u00EAncia do usu\u00E1rio em casos de falhas nas APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Web Scraping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Utilizei a biblioteca selenium do Python para coletar a quantia destinada a cada estado no combate ao COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n#title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    margin-left: 1rem;\r\n}\r\n#project-img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ececec;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n}\r\n#buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]{\r\n    background-color: #24292E;\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #2c3440;\r\n}\r\n#figma-button[_ngcontent-%COMP%]{\r\n    background-color: #E5E5E5;\r\n    color: #222831;\r\n    margin-right: 1rem;\r\n}\r\n#figma-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2f2f2;\r\n}\r\n#regular-button[_ngcontent-%COMP%]{\r\n    background-color: #FFCA3A;\r\n    color: #222831;\r\n}\r\n#regular-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #FFCA3A;\r\n}\r\n#description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n}\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n#technologies[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-left: 1rem;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 2rem;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: .5rem;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: .5rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY292aWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJwcm9qZWN0LWNvdmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxucCwgbGl7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuI3RpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiN0aXRsZSBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuI3Byb2plY3QtaW1ne1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5he1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA0MHB4IHJnYmEoNDgsIDExNSwgODEsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2VjZWNlYztcclxufVxyXG4jYnV0dG9uc3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNidXR0b25zIGltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4jZ2l0aHViLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MkU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2dpdGh1Yi1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzNDQwO1xyXG59XHJcbiNmaWdtYS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xyXG4gICAgY29sb3I6ICMyMjI4MzE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2ZpZ21hLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuI3JlZ3VsYXItYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0EzQTtcclxuICAgIGNvbG9yOiAjMjIyODMxO1xyXG59XHJcbiNyZWd1bGFyLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNGRkNBM0E7XHJcbn1cclxuI2Rlc2NyaXB0aW9uIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuI2Rlc2NyaXB0aW9uIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbiNkZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuI3RlY2hub2xvZ2llc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnRlY2hub2xvZ3l7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnRlY2hub2xvZ3kgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxuaDR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxudWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5saSBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcbiNpbnZlcnRlZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkNBM0E7XHJcbiAgICBjb2xvcjojRkZDQTNBO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4jaW52ZXJ0ZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg2ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmQ4NmU7XHJcbiAgICBjb2xvcjojMTkzMjNDO1xyXG59Il19 */", "@media (max-width: 767.98px) {\r\n    ul[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    #inverted-button[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n    }\r\n    main[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n    }\r\n    #buttons[_ngcontent-%COMP%]{\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        align-items: flex-start !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n    }\r\n    \r\n}\r\n@media (max-width: 549.98px){\r\n    #figma-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n    }\r\n    #regular-button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media (max-width: 364.98px) {\r\n    #buttons[_ngcontent-%COMP%], #buttons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #github-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n        padding-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-top: 2rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY292aWQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKIiwiZmlsZSI6InByb2plY3QtY292aWQucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAjaW52ZXJ0ZWQtYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG1haW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICNidXR0b25ze1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjZGVzY3JpcHRpb24gZGl2e1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjZGVzY3JpcHRpb24gZGl2IGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDkuOThweCl7XHJcbiAgICAjZmlnbWEtYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgICNyZWd1bGFyLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjQuOThweCkge1xyXG4gICAgI2J1dHRvbnMsICNidXR0b25zID4gZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAjZ2l0aHViLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICN0ZWNobm9sb2dpZXMgPiBkaXYgPiBkaXZ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIGxpLCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCovidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-covid',
                templateUrl: './project-covid.component.html',
                styleUrls: ['./project-covid.component.css', './project-covid.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\55859\Documents\Portfolio\vilhena-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class HomeComponent {
    constructor() { }
    ngOnInit() {
        fetch('https://vilhena-blog-backend.herokuapp.com/users/get');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 31, vars: 0, consts: [["id", "top-section", 1, "mx-auto"], ["src", "assets/images/avatar.webp", "alt", "Avatar do Danilo Vilhena"], ["id", "bottom-section", 1, "mx-auto"], [1, "section"], ["src", "assets/images/rocket.svg", "alt", "Ilustra\u00E7\u00E3o de um foguete"], ["routerLink", "/projects"], ["src", "assets/images/computer.svg", "alt", "Ilustra\u00E7\u00E3o de um computador"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ol\u00E1, eu sou o Danilo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sou um ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "desenvolvedor web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " em Fortaleza. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dou enf\u00E2se \u00E0 acessibilidade, usabilidade e a garantir uma boa experi\u00EAncia para os usu\u00E1rios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descubra mais detalhes sobre as aplica\u00E7\u00F5es que j\u00E1 desenvolvi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ver mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tecnologias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Conhe\u00E7a as tecnologias que tenho conhecimento e experi\u00EAncia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ver mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#top-section[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 37.5%;\r\n    margin-top: 3rem;\r\n}\r\n#top-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 10rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n#top-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 3rem;\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n}\r\n#top-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n#top-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    color: #FFCA3A;\r\n}\r\n\r\n#bottom-section[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n}\r\n.section[_ngcontent-%COMP%]{\r\n    padding: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #21414E;\r\n    box-shadow: 0px 25px 100px rgba(0, 0, 0, 0.15);\r\n    border-radius: 50px;\r\n    width: 25%;\r\n}\r\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 2.5rem;\r\n    margin-top: 1rem;\r\n}\r\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n}\r\n.section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.5rem;\r\n    background-color: #FFCA3A;\r\n    color: #19323C;\r\n    padding: 1rem 3rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    margin-top: 1rem;\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n}\r\n.section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9wLXNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzcuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcbiN0b3Atc2VjdGlvbiBpbWd7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuI3RvcC1zZWN0aW9uIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jdG9wLXNlY3Rpb24gcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jdG9wLXNlY3Rpb24gc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGQ0EzQTtcclxufVxyXG5cclxuLyogQm90dG9tIFNlY3Rpb24gKi9cclxuI2JvdHRvbS1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuLnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDE0RTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyNXB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4uc2VjdGlvbiBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLnNlY3Rpb24gcHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4uc2VjdGlvbiBidXR0b257XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQTNBO1xyXG4gICAgY29sb3I6ICMxOTMyM0M7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA0MHB4IHJnYmEoNDgsIDExNSwgODEsIDAuMTUpO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zZWN0aW9uIGJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbn0iXX0= */", "@media (max-width: 1399.98px) {\r\n    #top-section[_ngcontent-%COMP%]{\r\n        width: 50%;\r\n    }\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 30%;\r\n    }\r\n}\r\n@media (max-width: 1199.98px) {\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 35%;\r\n    }\r\n}\r\n@media (max-width: 991.98px) {\r\n    #top-section[_ngcontent-%COMP%]{\r\n        width: 65%;\r\n    }\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n    }\r\n}\r\n@media (max-width: 767.98px) {\r\n    #top-section[_ngcontent-%COMP%]{\r\n        width: 85%;\r\n    }\r\n    #bottom-section[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 65%;\r\n    }\r\n    .section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 2rem;\r\n    }\r\n    .section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.375rem;\r\n    }\r\n    .section[_ngcontent-%COMP%]:first-child{\r\n        margin-bottom: 2rem;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    #top-section[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n    #top-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 2rem;\r\n    }\r\n    #top-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.25rem;\r\n    }\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n    }\r\n}\r\n@media (max-width: 424.98px) {\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n    #top-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImhvbWUucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMzk5Ljk4cHgpIHtcclxuICAgICN0b3Atc2VjdGlvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgI3RvcC1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgI3RvcC1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbiAgICAjYm90dG9tLXNlY3Rpb257XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAjdG9wLXNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgICN0b3Atc2VjdGlvbiBoMntcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICAjdG9wLXNlY3Rpb24gcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI0Ljk4cHgpIHtcclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAjdG9wLXNlY3Rpb24gcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css', './home.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_18_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_19_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor() {
        this.language = 'pt';
        this.isProjects = document.location.pathname.includes('project');
        this.isTech = document.location.pathname.includes('tech');
        this.isContact = document.location.pathname.includes('contact');
    }
    ngOnInit() {
    }
    changeLanguage() {
        (this.language == 'pt') ? this.language = 'en' : this.language = 'pt';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "mx-auto"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#right-side", "aria-controls", "right-side", "aria-expanded", "false", "aria-label", "Exibir menu de navega\u00E7\u00E3o", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "right-side", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/projects", 1, "nav-link"], [1, "nav-item", "ms-lg-3"], ["routerLink", "/tech", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], [4, "ngIf"], ["src", "assets/images/brazil.svg", "alt", "Bandeira do Brasil", "id", "flag-btn", 3, "click"], ["src", "assets/images/usa.svg", "alt", "Bandeira dos EUA", "id", "flag-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Danilo Vilhena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tecnologias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_a_18_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_a_19_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isTech);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.language == "pt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.language != "pt");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["nav[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    color: #FFCA3A !important;\r\n    font-weight: 600;\r\n    font-size: 36px;\r\n    letter-spacing: 0.02em;\r\n    cursor: pointer;\r\n    margin-bottom: 0 !important;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color: #ECECEC;\r\n    font-weight: 400;\r\n    font-size: 1.25rem;\r\n    transition: all 0.25s ease-in-out;\r\n}\r\na[_ngcontent-%COMP%]:hover{\r\n    color: #FFCA3A;\r\n}\r\na.active[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    color: #FFCA3A\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    transition: all 0.25s ease-in-out;\r\n    width: 2.5rem;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    padding-top: 1rem;\r\n}\r\n.navbar-collapse[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%]{\r\n    border-color: #FFCA3A;\r\n    color: rgb(255, 202, 58);\r\n    border-width: 2px;\r\n}\r\n.navbar-toggler-icon[_ngcontent-%COMP%]{\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,202,58, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 0.1rem;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFDQUE2QjtJQUE3QixrQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc1FBQXNRO0FBQzFRO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogI0ZGQ0EzQSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjRUNFQ0VDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6ICNGRkNBM0E7XHJcbn1cclxuYS5hY3RpdmV7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNGRkNBM0FcclxufVxyXG5pbWd7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4ubmF2YmFyLWNvbGxhcHNle1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci10b2dnbGVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZDQTNBO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDIwMiwgNTgpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyLWljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsMjAyLDU4LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbTtcclxufVxyXG4ubmF2YmFyLW5hdntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn0iXX0= */", "@media (max-width: 992px){\r\n    .navbar-collapse[_ngcontent-%COMP%]{\r\n        width: 100% !important;\r\n    }\r\n    .navbar-nav[_ngcontent-%COMP%]{\r\n        align-items: center !important;\r\n    }\r\n    .nav-item[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]{\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n@media (max-width: 868.98px) {\r\n    header[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n    #right-side[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    #right-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: .5rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 424.98px) {\r\n    #right-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #right-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media (max-width: 416.98px) {\r\n    .container-fluid[_ngcontent-%COMP%]{\r\n        justify-content: center;\r\n    }\r\n    .navbar-brand[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-bottom: 1rem !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsOEJBQThCO0lBQ2xDO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgLm5hdmJhci1jb2xsYXBzZXtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdi1pdGVtLCAubmF2LWxpbmt7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODY4Ljk4cHgpIHtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAjcmlnaHQtc2lkZXtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSBuYXZ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjQuOThweCkge1xyXG4gICAgI3JpZ2h0LXNpZGUgbmF2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSBuYXYgYXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNi45OHB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css', './header.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7brX":
/*!**************************************************************!*\
  !*** ./src/app/pages/project-blog/project-blog.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectBlogComponent", function() { return ProjectBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectBlogComponent {
    constructor() { }
    ngOnInit() {
        fetch('https://vilhena-blog-backend.herokuapp.com/users/get');
    }
}
ProjectBlogComponent.ɵfac = function ProjectBlogComponent_Factory(t) { return new (t || ProjectBlogComponent)(); };
ProjectBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectBlogComponent, selectors: [["app-project-blog"]], decls: 79, vars: 0, consts: [[1, "mx-auto"], ["id", "title"], ["src", "assets/images/projects/blog.png", "alt", "Ilustra\u00E7\u00E3o de um computador"], ["id", "project-img", "src", "assets/images/captures/blog.png", "alt", "Imagem do Blog Tech News"], ["id", "buttons"], [2, "display", "flex"], ["id", "github-button", "href", "https://github.com/danilovilhena/angular-express-blog", "target", "_blank"], ["src", "assets/images/technologies/github.svg", "alt", "\u00CDcone do Github"], ["id", "figma-button", "href", "https://www.figma.com/file/sQaWT6nuNp4uw6ZsOfGpjV/Tech-News-Blog", "target", "_blank"], ["src", "assets/images/technologies/figma.svg", "alt", "\u00CDcone do Figma"], ["id", "regular-button", "href", "https://danilovilhena.github.io/angular-express-blog", "target", "_blank"], ["id", "description"], [2, "display", "flex", "align-items", "center", "margin-top", "1rem"], ["src", "assets/images/ellipse.svg", "aria-hidden", "true"], ["id", "technologies"], [2, "display", "flex", "margin-left", "1rem", "margin-top", "1rem", "flex-direction", "column"], [1, "technology", 2, "margin-right", "2rem"], ["src", "assets/images/technologies/angular.svg", "alt", "\u00CDcone do Angular"], [1, "technology"], ["src", "assets/images/technologies/express.svg", "alt", "\u00CDcone do Express"], ["src", "assets/images/technologies/bootstrap.svg", "alt", "\u00CDcone do Bootstrap"], ["src", "assets/images/technologies/mongodb.svg", "alt", "\u00CDcone do MongoDB"], ["id", "details"], [2, "margin-top", "1rem"], ["id", "inverted-button", "routerLink", "/projects"]], template: function ProjectBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blog Tech News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descri\u00E7\u00E3o da aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blog com not\u00EDcias de tecnologia, agrupadas por assunto ou meses do ano. Com a possibilidade de cadastro, voc\u00EA pode postar suas pr\u00F3prias produ\u00E7\u00F5es.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tecnologias usadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Detalhes da implementa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Componentizei e reutilizei os elementos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Utilizei tags sem\u00E2nticas, textos alternativos e outras pr\u00E1ticas para garantir a acessibilidade do site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Tornei o site responsivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Otimizei o site de acordo com o Google Lighthouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Utilizei o Mongoose, para interagir com o banco de dados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Encriptei as senhas do usu\u00E1rio com a biblioteca Bcrypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Utilizei JSON Web Token para validar o acesso do usu\u00E1rio, salvando-o no localStorage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n#title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    margin-left: 1rem;\r\n}\r\n#project-img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ececec;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n}\r\n#buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]{\r\n    background-color: #24292E;\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #2c3440;\r\n}\r\n#figma-button[_ngcontent-%COMP%]{\r\n    background-color: #E5E5E5;\r\n    color: #222831;\r\n    margin-right: 1rem;\r\n}\r\n#figma-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2f2f2;\r\n}\r\n#regular-button[_ngcontent-%COMP%]{\r\n    background-color: #FFCA3A;\r\n    color: #222831;\r\n}\r\n#regular-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #FFCA3A;\r\n}\r\n#description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n}\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n#technologies[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-left: 1rem;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 2rem;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: .5rem;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: .5rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCIiwiZmlsZSI6InByb2plY3QtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbnAsIGxpe1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbiN0aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4jdGl0bGUgaDJ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiNwcm9qZWN0LWltZ3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNDBweCByZ2JhKDQ4LCAxMTUsIDgxLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNlY2VjZWM7XHJcbn1cclxuI2J1dHRvbnN7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jYnV0dG9ucyBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2dpdGh1Yi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJFO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNnaXRodWItYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzQ0MDtcclxufVxyXG4jZmlnbWEtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIGNvbG9yOiAjMjIyODMxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNmaWdtYS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbiNyZWd1bGFyLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNBM0E7XHJcbiAgICBjb2xvcjogIzIyMjgzMTtcclxufVxyXG4jcmVndWxhci1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODZlO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRkZDQTNBO1xyXG59XHJcbiNkZXNjcmlwdGlvbiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiNkZXNjcmlwdGlvbiBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxufVxyXG4jZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiN0ZWNobm9sb2dpZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi50ZWNobm9sb2d5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi50ZWNobm9sb2d5IHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbnVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxubGkgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4jaW52ZXJ0ZWQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZDQTNBO1xyXG4gICAgY29sb3I6I0ZGQ0EzQTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuI2ludmVydGVkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZkODZlO1xyXG4gICAgY29sb3I6IzE5MzIzQztcclxufSJdfQ== */", "@media (max-width: 767.98px) {\r\n    ul[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    #inverted-button[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n    }\r\n    main[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n    }\r\n    #buttons[_ngcontent-%COMP%]{\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        align-items: flex-start !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n    }\r\n    \r\n}\r\n@media (max-width: 549.98px){\r\n    #figma-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n    }\r\n    #regular-button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media (max-width: 364.98px) {\r\n    #buttons[_ngcontent-%COMP%], #buttons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #github-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n        padding-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-top: 2rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtYmxvZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoicHJvamVjdC1ibG9nLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgI2ludmVydGVkLWJ1dHRvbntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBtYWlue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjYnV0dG9uc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9uIGRpdntcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9uIGRpdiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQ5Ljk4cHgpe1xyXG4gICAgI2ZpZ21hLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAjcmVndWxhci1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzY0Ljk4cHgpIHtcclxuICAgICNidXR0b25zLCAjYnV0dG9ucyA+IGRpdntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgI2dpdGh1Yi1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjdGVjaG5vbG9naWVzID4gZGl2ID4gZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBsaSwgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-blog',
                templateUrl: './project-blog.component.html',
                styleUrls: ['./project-blog.component.css', './project-blog.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8KUq":
/*!********************************************************************!*\
  !*** ./src/app/pages/project-landing/project-landing.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectLandingComponent", function() { return ProjectLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectLandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectLandingComponent.ɵfac = function ProjectLandingComponent_Factory(t) { return new (t || ProjectLandingComponent)(); };
ProjectLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectLandingComponent, selectors: [["app-project-landing"]], decls: 58, vars: 0, consts: [[1, "mx-auto"], ["id", "title"], ["src", "assets/images/projects/mail.png", "alt", "Ilustra\u00E7\u00E3o de um caixa de email"], ["id", "project-img", "src", "assets/images/captures/landing.png", "alt", "Imagem do Landing page para captura de e-mails"], ["id", "buttons"], [2, "display", "flex"], ["id", "github-button", "href", "https://github.com/danilovilhena/konrad-capture", "target", "_blank"], ["src", "assets/images/technologies/github.svg", "alt", "\u00CDcone do Github"], ["id", "regular-button", "href", "https://konradmota.com.br/#/", "target", "_blank"], ["id", "description"], [2, "display", "flex", "align-items", "center", "margin-top", "1rem"], ["src", "assets/images/ellipse.svg", "aria-hidden", "true"], ["id", "technologies"], [2, "display", "flex", "margin-left", "1rem", "margin-top", "1rem", "flex-direction", "column"], [1, "technology", 2, "margin-right", "2rem"], ["src", "assets/images/technologies/vue.svg", "alt", "\u00CDcone do Vue"], [1, "technology"], ["src", "assets/images/technologies/mailchimp.png", "alt", "\u00CDcone do Mailchimp"], ["src", "assets/images/technologies/bootstrap.svg", "alt", "\u00CDcone do Bootstrap"], ["id", "details"], ["id", "inverted-button", "routerLink", "/projects"]], template: function ProjectLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Landing page para captura de e-mails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Descri\u00E7\u00E3o da aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Landing page para reunir interessados no produto de um cliente em um grupo do Telegram e em uma lista de emails.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tecnologias usadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mailchimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Detalhes da implementa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Configurei o Mailchimp para armazenar os dados de poss\u00EDveis clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Conectei o site com o Mailchimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Tornei o site responsivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Otimizei o site de acordo com o Google Lighthouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n#title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    margin-left: 1rem;\r\n}\r\n#project-img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ececec;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n}\r\n#buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]{\r\n    background-color: #24292E;\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #2c3440;\r\n}\r\n#figma-button[_ngcontent-%COMP%]{\r\n    background-color: #E5E5E5;\r\n    color: #222831;\r\n    margin-right: 1rem;\r\n}\r\n#figma-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2f2f2;\r\n}\r\n#regular-button[_ngcontent-%COMP%]{\r\n    background-color: #FFCA3A;\r\n    color: #222831;\r\n}\r\n#regular-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #FFCA3A;\r\n}\r\n#description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n}\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n#technologies[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    padding-left: 0;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: .5rem;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: .5rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoicHJvamVjdC1sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxucCwgbGl7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuI3RpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiN0aXRsZSBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuI3Byb2plY3QtaW1ne1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5he1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA0MHB4IHJnYmEoNDgsIDExNSwgODEsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2VjZWNlYztcclxufVxyXG4jYnV0dG9uc3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNidXR0b25zIGltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4jZ2l0aHViLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MkU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2dpdGh1Yi1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzNDQwO1xyXG59XHJcbiNmaWdtYS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xyXG4gICAgY29sb3I6ICMyMjI4MzE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2ZpZ21hLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuI3JlZ3VsYXItYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0EzQTtcclxuICAgIGNvbG9yOiAjMjIyODMxO1xyXG59XHJcbiNyZWd1bGFyLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNGRkNBM0E7XHJcbn1cclxuI2Rlc2NyaXB0aW9uIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuI2Rlc2NyaXB0aW9uIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbiNkZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuI3RlY2hub2xvZ2llc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnRlY2hub2xvZ3l7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnRlY2hub2xvZ3kgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxudWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5saSBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcbiNpbnZlcnRlZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkNBM0E7XHJcbiAgICBjb2xvcjojRkZDQTNBO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4jaW52ZXJ0ZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg2ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmQ4NmU7XHJcbiAgICBjb2xvcjojMTkzMjNDO1xyXG59Il19 */", "@media (max-width: 767.98px) {\r\n    ul[_ngcontent-%COMP%]{\r\n        margin-left: 1rem;\r\n    }\r\n    #inverted-button[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n    }\r\n    main[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n    }\r\n    #buttons[_ngcontent-%COMP%]{\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        align-items: flex-start !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n    }\r\n    \r\n}\r\n@media (max-width: 549.98px){\r\n    #figma-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n    }\r\n    #regular-button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media (max-width: 364.98px) {\r\n    #buttons[_ngcontent-%COMP%], #buttons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #github-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n        padding-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-top: 2rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGFuZGluZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSiIsImZpbGUiOiJwcm9qZWN0LWxhbmRpbmcucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAjaW52ZXJ0ZWQtYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG1haW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICNidXR0b25ze1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjZGVzY3JpcHRpb24gZGl2e1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjZGVzY3JpcHRpb24gZGl2IGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDkuOThweCl7XHJcbiAgICAjZmlnbWEtYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgICNyZWd1bGFyLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjQuOThweCkge1xyXG4gICAgI2J1dHRvbnMsICNidXR0b25zID4gZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAjZ2l0aHViLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICN0ZWNobm9sb2dpZXMgPiBkaXYgPiBkaXZ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIGxpLCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectLandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-landing',
                templateUrl: './project-landing.component.html',
                styleUrls: ['./project-landing.component.css', './project-landing.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B7jJ":
/*!******************************************************************!*\
  !*** ./src/app/pages/project-movies/project-movies.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMoviesComponent", function() { return ProjectMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectMoviesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectMoviesComponent.ɵfac = function ProjectMoviesComponent_Factory(t) { return new (t || ProjectMoviesComponent)(); };
ProjectMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectMoviesComponent, selectors: [["app-project-movies"]], decls: 57, vars: 0, consts: [[1, "mx-auto"], ["id", "title"], ["src", "assets/images/projects/camera.png", "alt", "Ilustra\u00E7\u00E3o de uma c\u00E2mera"], ["id", "project-img", "src", "assets/images/captures/movies.png", "alt", "Imagem do Buscador de filmes"], ["id", "buttons"], [2, "display", "flex"], ["id", "github-button", "href", "https://github.com/danilovilhena/angular-themoviedb-spa", "target", "_blank"], ["src", "assets/images/technologies/github.svg", "alt", "\u00CDcone do Github"], ["id", "figma-button", "href", "https://www.figma.com/file/eFP78Pkpr4uMSxCjlJaDp5/SPA-The-Movie-DB", "target", "_blank"], ["src", "assets/images/technologies/figma.svg", "alt", "\u00CDcone do Figma"], ["id", "regular-button", "href", "https://vilhena-movies.netlify.app", "target", "_blank"], ["id", "description"], [2, "display", "flex", "align-items", "center", "margin-top", "1rem"], ["src", "assets/images/ellipse.svg", "aria-hidden", "true"], ["id", "technologies"], [2, "display", "flex", "margin-left", "1rem", "margin-top", "1rem", "flex-direction", "column"], [1, "technology", 2, "margin-right", "2rem"], ["src", "assets/images/technologies/angular.svg", "alt", "\u00CDcone do Angular"], ["src", "assets/images/technologies/bootstrap.svg", "alt", "\u00CDcone do Bootstrap"], ["id", "details"], ["id", "inverted-button", "routerLink", "/projects"]], template: function ProjectMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buscador de filmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descri\u00E7\u00E3o da aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Site que consome a API do The Movie DB para exibir, buscar e se aprofundar em mais detalhes de diversos filmes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tecnologias usadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Detalhes da implementa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Componentizei e reutilizei os elementos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Consumi a API do The Movie DB para receber os dados por g\u00EAnero de filme e realizar buscas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Implementei as funcionalidade de alto contraste e mudan\u00E7a no tamanho da fonte para acessibilizar mais a p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Utilizei tags sem\u00E2nticas, textos alternativos e outras pr\u00E1ticas para garantir a acessibilidade do site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n#title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    margin-left: 1rem;\r\n}\r\n#project-img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ececec;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n}\r\n#buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]{\r\n    background-color: #24292E;\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #2c3440;\r\n}\r\n#figma-button[_ngcontent-%COMP%]{\r\n    background-color: #E5E5E5;\r\n    color: #222831;\r\n    margin-right: 1rem;\r\n}\r\n#figma-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2f2f2;\r\n}\r\n#regular-button[_ngcontent-%COMP%]{\r\n    background-color: #FFCA3A;\r\n    color: #222831;\r\n}\r\n#regular-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #FFCA3A;\r\n}\r\n#description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n}\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n#technologies[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    padding-left: 0;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: .5rem;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: .5rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJwcm9qZWN0LW1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbnAsIGxpe1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbiN0aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4jdGl0bGUgaDJ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiNwcm9qZWN0LWltZ3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNDBweCByZ2JhKDQ4LCAxMTUsIDgxLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNlY2VjZWM7XHJcbn1cclxuI2J1dHRvbnN7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jYnV0dG9ucyBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2dpdGh1Yi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJFO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNnaXRodWItYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzQ0MDtcclxufVxyXG4jZmlnbWEtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIGNvbG9yOiAjMjIyODMxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNmaWdtYS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbiNyZWd1bGFyLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNBM0E7XHJcbiAgICBjb2xvcjogIzIyMjgzMTtcclxufVxyXG4jcmVndWxhci1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODZlO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRkZDQTNBO1xyXG59XHJcbiNkZXNjcmlwdGlvbiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiNkZXNjcmlwdGlvbiBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxufVxyXG4jZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiN0ZWNobm9sb2dpZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi50ZWNobm9sb2d5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi50ZWNobm9sb2d5IHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbnVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxubGkgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4jaW52ZXJ0ZWQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZDQTNBO1xyXG4gICAgY29sb3I6I0ZGQ0EzQTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuI2ludmVydGVkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZkODZlO1xyXG4gICAgY29sb3I6IzE5MzIzQztcclxufSJdfQ== */", "@media (max-width: 767.98px) {\r\n    ul[_ngcontent-%COMP%]{\r\n        margin-left: 1rem;\r\n    }\r\n    #inverted-button[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n    }\r\n    main[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n    }\r\n    #buttons[_ngcontent-%COMP%]{\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        align-items: flex-start !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n    }\r\n    \r\n}\r\n@media (max-width: 549.98px){\r\n    #figma-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n    }\r\n    #regular-button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media (max-width: 364.98px) {\r\n    #buttons[_ngcontent-%COMP%], #buttons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #github-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n        padding-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-top: 2rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbW92aWVzLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKIiwiZmlsZSI6InByb2plY3QtbW92aWVzLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI2ludmVydGVkLWJ1dHRvbntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBtYWlue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjYnV0dG9uc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9uIGRpdntcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9uIGRpdiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQ5Ljk4cHgpe1xyXG4gICAgI2ZpZ21hLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAjcmVndWxhci1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzY0Ljk4cHgpIHtcclxuICAgICNidXR0b25zLCAjYnV0dG9ucyA+IGRpdntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgI2dpdGh1Yi1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjdGVjaG5vbG9naWVzID4gZGl2ID4gZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBsaSwgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-movies',
                templateUrl: './project-movies.component.html',
                styleUrls: ['./project-movies.component.css', './project-movies.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J12B":
/*!********************************************************************!*\
  !*** ./src/app/pages/project-empathy/project-empathy.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectEmpathyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEmpathyComponent", function() { return ProjectEmpathyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectEmpathyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectEmpathyComponent.ɵfac = function ProjectEmpathyComponent_Factory(t) { return new (t || ProjectEmpathyComponent)(); };
ProjectEmpathyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectEmpathyComponent, selectors: [["app-project-empathy"]], decls: 50, vars: 0, consts: [[1, "mx-auto"], ["id", "title"], ["src", "assets/images/projects/game.png", "alt", "Ilustra\u00E7\u00E3o de um controle de videogame"], ["id", "project-img", "src", "assets/images/captures/empathy.png", "alt", "Imagem do Empathy Lab"], ["id", "buttons"], ["id", "regular-button", "href", "leadfortaleza.com.br/empathywal/", "target", "_blank"], ["id", "description"], [2, "display", "flex", "align-items", "center", "margin-top", "1rem"], ["src", "assets/images/ellipse.svg", "aria-hidden", "true"], ["id", "technologies"], [2, "display", "flex", "margin-left", "1rem", "margin-top", "1rem", "flex-direction", "column"], [2, "display", "flex"], [1, "technology", 2, "margin-right", "2rem"], ["src", "assets/images/technologies/angular.svg", "alt", "\u00CDcone do Angular"], ["src", "assets/images/technologies/bootstrap.svg", "alt", "\u00CDcone do Bootstrap"], ["id", "details"], ["id", "inverted-button", "routerLink", "/projects"]], template: function ProjectEmpathyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Empathy Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Descri\u00E7\u00E3o da aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Jogo para demonstrar as dificuldades de uma pessoa cega ou com baixa vis\u00E3o ao acessar a web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tecnologias usadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Detalhes da implementa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Projeto desenvolvido durante meu est\u00E1gio no LEAD Fortaleza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Internacionalizamos a aplica\u00E7\u00E3o para ingl\u00EAs, espanhol e portugu\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Criamos uma leitor de tela nativo de Javascript para simular a experi\u00EAncia do usu\u00E1rio cego na internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Utilizamos tags sem\u00E2nticas, textos alternativos e outras pr\u00E1ticas para garantir a acessibilidade do site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n#title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    margin-left: 1rem;\r\n}\r\n#project-img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ececec;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n}\r\n#buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]{\r\n    background-color: #24292E;\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #2c3440;\r\n}\r\n#figma-button[_ngcontent-%COMP%]{\r\n    background-color: #E5E5E5;\r\n    color: #222831;\r\n    margin-right: 1rem;\r\n}\r\n#figma-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2f2f2;\r\n}\r\n#regular-button[_ngcontent-%COMP%]{\r\n    background-color: #FFCA3A;\r\n    color: #222831;\r\n}\r\n#regular-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #FFCA3A;\r\n}\r\n#description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n}\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n#technologies[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    padding-left: 0;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: .5rem;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: .5rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZW1wYXRoeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakIiLCJmaWxlIjoicHJvamVjdC1lbXBhdGh5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxucCwgbGl7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuI3RpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiN0aXRsZSBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuI3Byb2plY3QtaW1ne1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5he1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA0MHB4IHJnYmEoNDgsIDExNSwgODEsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2VjZWNlYztcclxufVxyXG4jYnV0dG9uc3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNidXR0b25zIGltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4jZ2l0aHViLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MkU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2dpdGh1Yi1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzNDQwO1xyXG59XHJcbiNmaWdtYS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xyXG4gICAgY29sb3I6ICMyMjI4MzE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2ZpZ21hLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuI3JlZ3VsYXItYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0EzQTtcclxuICAgIGNvbG9yOiAjMjIyODMxO1xyXG59XHJcbiNyZWd1bGFyLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNGRkNBM0E7XHJcbn1cclxuI2Rlc2NyaXB0aW9uIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuI2Rlc2NyaXB0aW9uIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbiNkZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuI3RlY2hub2xvZ2llc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnRlY2hub2xvZ3l7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnRlY2hub2xvZ3kgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxudWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5saSBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcbiNpbnZlcnRlZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkNBM0E7XHJcbiAgICBjb2xvcjojRkZDQTNBO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4jaW52ZXJ0ZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg2ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmQ4NmU7XHJcbiAgICBjb2xvcjojMTkzMjNDO1xyXG59Il19 */", "@media (max-width: 767.98px) {\r\n    ul[_ngcontent-%COMP%]{\r\n        margin-left: 1rem;\r\n    }\r\n    #inverted-button[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n    }\r\n    main[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n    }\r\n    #buttons[_ngcontent-%COMP%]{\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        align-items: flex-start !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n    }\r\n    \r\n}\r\n@media (max-width: 549.98px){\r\n    #figma-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n    }\r\n    #regular-button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media (max-width: 364.98px) {\r\n    #buttons[_ngcontent-%COMP%], #buttons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #github-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n        padding-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-top: 2rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZW1wYXRoeS5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSiIsImZpbGUiOiJwcm9qZWN0LWVtcGF0aHkucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAjaW52ZXJ0ZWQtYnV0dG9ue1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG1haW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICNidXR0b25ze1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjZGVzY3JpcHRpb24gZGl2e1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjZGVzY3JpcHRpb24gZGl2IGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDkuOThweCl7XHJcbiAgICAjZmlnbWEtYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgICNyZWd1bGFyLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjQuOThweCkge1xyXG4gICAgI2J1dHRvbnMsICNidXR0b25zID4gZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAjZ2l0aHViLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICN0ZWNobm9sb2dpZXMgPiBkaXYgPiBkaXZ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIGxpLCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectEmpathyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-empathy',
                templateUrl: './project-empathy.component.html',
                styleUrls: ['./project-empathy.component.css', './project-empathy.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lat1":
/*!************************************************************!*\
  !*** ./src/app/pages/project-wal/project-wal.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectWalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectWalComponent", function() { return ProjectWalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectWalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectWalComponent.ɵfac = function ProjectWalComponent_Factory(t) { return new (t || ProjectWalComponent)(); };
ProjectWalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectWalComponent, selectors: [["app-project-wal"]], decls: 44, vars: 0, consts: [[1, "mx-auto"], ["id", "title"], ["src", "assets/images/projects/computer.png", "alt", "Ilustra\u00E7\u00E3o de um computador"], ["id", "project-img", "src", "assets/images/captures/wal.png", "alt", "Imagem do Plugin WAL"], ["id", "description"], [2, "display", "flex", "align-items", "center", "margin-top", "1rem"], ["src", "assets/images/ellipse.svg", "aria-hidden", "true"], ["id", "technologies"], [2, "display", "flex", "margin-left", "1rem", "margin-top", "1rem", "flex-direction", "column"], [2, "display", "flex"], [1, "technology", 2, "margin-right", "2rem"], ["src", "assets/images/technologies/vue.svg", "alt", "\u00CDcone do Vue"], ["src", "assets/images/technologies/bootstrap.svg", "alt", "\u00CDcone do Bootstrap"], ["id", "details"], ["id", "inverted-button", "routerLink", "/projects"]], template: function ProjectWalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Plugin WAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descri\u00E7\u00E3o da aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Plugin para tornar a web mais utiliz\u00E1vel e acess\u00EDvel para pessoas para pessoas com defici\u00EAncia visual.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tecnologias usadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Detalhes da implementa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Projeto ainda em desenvolvimento, no meu est\u00E1gio no LEAD Fortaleza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Internacionalizamos a aplica\u00E7\u00E3o para ingl\u00EAs, espanhol e portugu\u00EAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Implementamos uma s\u00E9rie de funcionalidades que acessibilizam a internet, como: modificar o tamanho e o tipo de fonte, o espa\u00E7amento, as cores da p\u00E1gina, ativar alto contraste, bloquear sons que reproduzem automaticamente, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n#title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n#title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    margin-left: 1rem;\r\n}\r\n#project-img[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ececec;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n}\r\n#buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]{\r\n    background-color: #24292E;\r\n    margin-right: 1rem;\r\n}\r\n#github-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #2c3440;\r\n}\r\n#figma-button[_ngcontent-%COMP%]{\r\n    background-color: #E5E5E5;\r\n    color: #222831;\r\n    margin-right: 1rem;\r\n}\r\n#figma-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #f2f2f2;\r\n}\r\n#regular-button[_ngcontent-%COMP%]{\r\n    background-color: #FFCA3A;\r\n    color: #222831;\r\n}\r\n#regular-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #FFCA3A;\r\n}\r\n#description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n}\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    margin-bottom: 2rem;\r\n}\r\n#technologies[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n.technology[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    margin-left: .5rem;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n    padding-left: 0;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: .5rem;\r\n}\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: .5rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\n#inverted-button[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Qtd2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQiIsImZpbGUiOiJwcm9qZWN0LXdhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbnAsIGxpe1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbiN0aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4jdGl0bGUgaDJ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiNwcm9qZWN0LWltZ3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNDBweCByZ2JhKDQ4LCAxMTUsIDgxLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNlY2VjZWM7XHJcbn1cclxuI2J1dHRvbnN7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jYnV0dG9ucyBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2dpdGh1Yi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJFO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNnaXRodWItYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzQ0MDtcclxufVxyXG4jZmlnbWEtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIGNvbG9yOiAjMjIyODMxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNmaWdtYS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbiNyZWd1bGFyLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNBM0E7XHJcbiAgICBjb2xvcjogIzIyMjgzMTtcclxufVxyXG4jcmVndWxhci1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODZlO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRkZDQTNBO1xyXG59XHJcbiNkZXNjcmlwdGlvbiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiNkZXNjcmlwdGlvbiBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxufVxyXG4jZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiN0ZWNobm9sb2dpZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi50ZWNobm9sb2d5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi50ZWNobm9sb2d5IHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcbnVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxubGkgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4jaW52ZXJ0ZWQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZDQTNBO1xyXG4gICAgY29sb3I6I0ZGQ0EzQTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuI2ludmVydGVkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZkODZlO1xyXG4gICAgY29sb3I6IzE5MzIzQztcclxufSJdfQ== */", "@media (max-width: 767.98px) {\r\n    ul[_ngcontent-%COMP%]{\r\n        margin-left: 1rem;\r\n    }\r\n    #inverted-button[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n    }\r\n    main[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n    }\r\n    #buttons[_ngcontent-%COMP%]{\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        align-items: flex-start !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n    }\r\n    \r\n}\r\n@media (max-width: 549.98px){\r\n    #figma-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n    }\r\n    #regular-button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media (max-width: 364.98px) {\r\n    #buttons[_ngcontent-%COMP%], #buttons[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #github-button[_ngcontent-%COMP%]{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    ul[_ngcontent-%COMP%]{\r\n        padding-left: 0;\r\n    }\r\n    li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n    h4[_ngcontent-%COMP%]{\r\n        margin-top: 2rem;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Qtd2FsLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKIiwiZmlsZSI6InByb2plY3Qtd2FsLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI2ludmVydGVkLWJ1dHRvbntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBtYWlue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjYnV0dG9uc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9uIGRpdntcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9uIGRpdiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQ5Ljk4cHgpe1xyXG4gICAgI2ZpZ21hLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAjcmVndWxhci1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzY0Ljk4cHgpIHtcclxuICAgICNidXR0b25zLCAjYnV0dG9ucyA+IGRpdntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgI2dpdGh1Yi1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjdGVjaG5vbG9naWVzID4gZGl2ID4gZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBsaSwgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectWalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-wal',
                templateUrl: './project-wal.component.html',
                styleUrls: ['./project-wal.component.css', './project-wal.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "mx-auto"], [1, "me-4"], ["href", "https://instagram.com/dev_danilo/", "target", "_blank", 1, "me-4"], ["width", "35", "height", "35", "viewBox", "0 0 35 35", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.4953 11.664C14.2819 11.664 11.6596 14.2863 11.6596 17.4997C11.6596 20.713 14.2819 23.3354 17.4953 23.3354C20.7087 23.3354 23.331 20.713 23.331 17.4997C23.331 14.2863 20.7087 11.664 17.4953 11.664ZM34.998 17.4997C34.998 15.0831 35.0199 12.6884 34.8842 10.2762C34.7485 7.47434 34.1093 4.9877 32.0605 2.93886C30.0073 0.885633 27.525 0.250841 24.7232 0.115127C22.3066 -0.0205873 19.9119 0.00130217 17.4997 0.00130217C15.0831 0.00130217 12.6884 -0.0205873 10.2762 0.115127C7.47434 0.250841 4.9877 0.890011 2.93886 2.93886C0.885633 4.99208 0.250841 7.47434 0.115127 10.2762C-0.0205873 12.6928 0.00130217 15.0875 0.00130217 17.4997C0.00130217 19.9119 -0.0205873 22.311 0.115127 24.7232C0.250841 27.525 0.890011 30.0116 2.93886 32.0605C4.99208 34.1137 7.47434 34.7485 10.2762 34.8842C12.6928 35.0199 15.0875 34.998 17.4997 34.998C19.9163 34.998 22.311 35.0199 24.7232 34.8842C27.525 34.7485 30.0116 34.1093 32.0605 32.0605C34.1137 30.0073 34.7485 27.525 34.8842 24.7232C35.0243 22.311 34.998 19.9163 34.998 17.4997ZM17.4953 26.4787C12.5264 26.4787 8.51627 22.4686 8.51627 17.4997C8.51627 12.5308 12.5264 8.52065 17.4953 8.52065C22.4642 8.52065 26.4743 12.5308 26.4743 17.4997C26.4743 22.4686 22.4642 26.4787 17.4953 26.4787ZM26.8421 10.2499C25.6819 10.2499 24.7451 9.31305 24.7451 8.15291C24.7451 6.99277 25.6819 6.05591 26.8421 6.05591C28.0022 6.05591 28.9391 6.99277 28.9391 8.15291C28.9394 8.42839 28.8854 8.70123 28.7801 8.9558C28.6749 9.21038 28.5204 9.44169 28.3256 9.63648C28.1308 9.83128 27.8995 9.98573 27.645 10.091C27.3904 10.1963 27.1175 10.2503 26.8421 10.2499Z", "fill", "#FFCA3A"], ["href", "https://github.com/danilovilhena/", "target", "_blank"], ["width", "36", "height", "35", "viewBox", "0 0 36 35", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.978 1.50404e-06C8.0451 -0.00401502 0 8.03707 0 17.9619C0 25.8102 5.03271 32.4816 12.0415 34.9317C12.9854 35.1687 12.8408 34.4979 12.8408 34.0401V30.9272C7.39041 31.5659 7.1695 27.959 6.80399 27.3566C6.06495 26.0954 4.31776 25.774 4.83991 25.1716C6.08102 24.5329 7.34622 25.3322 8.81226 27.4971C9.87262 29.0676 11.9411 28.8025 12.9894 28.5414C13.2184 27.5975 13.7084 26.7541 14.3832 26.0994C8.73594 25.0872 6.38226 21.641 6.38226 17.5442C6.38226 15.556 7.03695 13.7285 8.32224 12.2544C7.50287 9.82442 8.39855 7.74386 8.51905 7.43459C10.8527 7.22573 13.2786 9.10546 13.4674 9.25408C14.7929 8.8966 16.3071 8.70783 18.0021 8.70783C19.7051 8.70783 21.2233 8.90464 22.5608 9.26612C23.0147 8.9207 25.2639 7.30606 27.4329 7.50287C27.5493 7.81214 28.4249 9.8445 27.6538 12.2424C28.9551 13.7205 29.6179 15.564 29.6179 17.5562C29.6179 21.6611 27.2481 25.1113 21.5848 26.1074C22.0699 26.5845 22.455 27.1534 22.7178 27.7809C22.9805 28.4085 23.1156 29.0821 23.1151 29.7624V34.281C23.1472 34.6425 23.1151 35 23.7176 35C30.8308 32.6021 35.9519 25.8825 35.9519 17.9659C35.9519 8.03707 27.9028 1.50404e-06 17.978 1.50404e-06Z", "fill", "#FFCA3A"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "danilo.vilhena@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    width: 90%;\r\n    margin-bottom: 1rem;\r\n    margin-top: 5rem;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    color: #FFCA3A;\r\n    font-weight: 500;\r\n    font-size: 1.25rem;\r\n}\r\nsvg[_ngcontent-%COMP%]{\r\n    width: 1.75rem;\r\n}\r\npath[_ngcontent-%COMP%]{\r\n    transition: all 0.25s ease-in-out;\r\n}\r\npath[_ngcontent-%COMP%]:hover{\r\n    fill: #ffd86e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICNGRkNBM0E7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbnN2Z3tcclxuICAgIHdpZHRoOiAxLjc1cmVtO1xyXG59XHJcbnBhdGh7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxucGF0aDpob3ZlcntcclxuICAgIGZpbGw6ICNmZmQ4NmU7XHJcbn0iXX0= */", "@media (max-width: 767.98px) {\r\n    footer[_ngcontent-%COMP%]{\r\n        justify-content: center;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    footer[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        margin-top: 3rem;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-right: 0 !important;\r\n        margin-bottom: .5rem;\r\n        font-size: 1.125rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjtBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css', './footer.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'vilhena-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 25, vars: 0, consts: [[1, "mx-auto"], ["src", "assets/images/avatar.webp", "alt", "Avatar do Danilo Vilhena"], [1, "line"], ["src", "assets/images/mail.svg", "alt", "\u00CDcone de email"], ["src", "assets/images/github.svg", "alt", "\u00CDcone de Github"], ["src", "assets/images/instagram.svg", "alt", "\u00CDcone de Instagram"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "danilo.vilhena@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "danilovilhena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "dev_danilo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n}\r\nsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-top: 1.5rem;\r\n    background-color: #21414E;\r\n    box-shadow: 0px 25px 100px rgba(0, 0, 0, 0.15);\r\n    border-radius: 50px;\r\n    padding: 1rem 2rem;\r\n}\r\nsection[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 15rem;\r\n    height: auto;\r\n    margin-right: 2rem;\r\n    object-fit: contain;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    margin-bottom: .25rem;\r\n}\r\n.line[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #FFD154;\r\n    box-shadow: 0px 5px 10px rgba(48, 115, 81, 0.1);\r\n    padding: .25rem .5rem;\r\n    border-radius: 10px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-bottom: 1rem;\r\n}\r\n.line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 1.5rem;\r\n    margin-right: .5rem;\r\n}\r\n.line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #21414E;\r\n    margin-bottom: 0;\r\n    font-size: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLCtDQUErQztJQUMvQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTQxNEU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMjVweCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxufVxyXG5zZWN0aW9uID4gaW1ne1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5oMntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcbi5saW5le1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMTU0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNDgsIDExNSwgODEsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ubGluZSBpbWd7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4ubGluZSBwe1xyXG4gICAgY29sb3I6ICMyMTQxNEU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn0iXX0= */", "@media (max-width: 991.98px) {\r\n    section[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n        width: 12rem;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 1.75rem;\r\n    }\r\n}\r\n@media (max-width: 767.98px) {\r\n    section[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    section[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n        align-self: center;\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    section[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n        align-items: center;\r\n    }\r\n    section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    .line[_ngcontent-%COMP%]{\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n    .line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.25rem;\r\n    }\r\n}\r\n@media (max-width: 424.98px) {\r\n    .line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.125rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJjb250YWN0LnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIHNlY3Rpb24gPiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiA+IGltZ3tcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBzZWN0aW9uLCBzZWN0aW9uID4gZGl2e1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uIGgze1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5saW5le1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5saW5lIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI0Ljk4cHgpIHtcclxuICAgIC5saW5lIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css', './contact.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_project_blog_project_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/project-blog/project-blog.component */ "7brX");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_project_covid_project_covid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/project-covid/project-covid.component */ "+jZ9");
/* harmony import */ var _pages_project_empathy_project_empathy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/project-empathy/project-empathy.component */ "J12B");
/* harmony import */ var _pages_project_landing_project_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/project-landing/project-landing.component */ "8KUq");
/* harmony import */ var _pages_project_wal_project_wal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/project-wal/project-wal.component */ "Lat1");
/* harmony import */ var _pages_project_movies_project_movies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/project-movies/project-movies.component */ "B7jJ");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _pages_project_blog_project_blog_component__WEBPACK_IMPORTED_MODULE_9__["ProjectBlogComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        _pages_project_covid_project_covid_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCovidComponent"],
        _pages_project_empathy_project_empathy_component__WEBPACK_IMPORTED_MODULE_12__["ProjectEmpathyComponent"],
        _pages_project_landing_project_landing_component__WEBPACK_IMPORTED_MODULE_13__["ProjectLandingComponent"],
        _pages_project_wal_project_wal_component__WEBPACK_IMPORTED_MODULE_14__["ProjectWalComponent"],
        _pages_project_movies_project_movies_component__WEBPACK_IMPORTED_MODULE_15__["ProjectMoviesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _pages_project_blog_project_blog_component__WEBPACK_IMPORTED_MODULE_9__["ProjectBlogComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                    _pages_project_covid_project_covid_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCovidComponent"],
                    _pages_project_empathy_project_empathy_component__WEBPACK_IMPORTED_MODULE_12__["ProjectEmpathyComponent"],
                    _pages_project_landing_project_landing_component__WEBPACK_IMPORTED_MODULE_13__["ProjectLandingComponent"],
                    _pages_project_wal_project_wal_component__WEBPACK_IMPORTED_MODULE_14__["ProjectWalComponent"],
                    _pages_project_movies_project_movies_component__WEBPACK_IMPORTED_MODULE_15__["ProjectMoviesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "u/sh":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 78, vars: 0, consts: [[1, "mx-auto"], ["id", "sections"], [1, "section"], ["id", "title"], ["src", "assets/images/projects/blog.png", "alt", "Ilustra\u00E7\u00E3o de um computador"], ["id", "buttons"], ["routerLink", "/projects/blog", 1, "button-inverted"], ["href", "https://danilovilhena.github.io/angular-express-blog/", "target", "_blank"], ["src", "assets/images/projects/covid.png", "alt", "Ilustra\u00E7\u00E3o de um v\u00EDrus", "width", "56"], ["routerLink", "/projects/covid", 1, "button-inverted"], ["href", "https://vilhena-covid-dashboard.netlify.app", "target", "_blank"], ["src", "assets/images/projects/game.png", "alt", "Ilustra\u00E7\u00E3o de um controle de videogame", "width", "56", "width", "56"], ["routerLink", "/projects/empathy", 1, "button-inverted"], ["href", "leadfortaleza.com.br/empathywal/", "target", "_blank"], ["src", "assets/images/projects/mail.png", "alt", "Ilustra\u00E7\u00E3o de um caixa de email", "width", "56"], ["routerLink", "/projects/landing", 1, "button-inverted"], ["href", "https://konradmota.com.br/#/", "target", "_blank"], ["src", "assets/images/projects/computer.png", "alt", "Ilustra\u00E7\u00E3o de um computador", "width", "56"], ["routerLink", "/projects/wal", 1, "button-inverted"], ["href", "https://brasil.estadao.com.br/blogs/vencer-limites/dell-cria-software-que-inclui-acessibilidade-em-navegadores-e-sistemas/", "target", "_blank"], ["src", "assets/images/projects/camera.png", "alt", "Ilustra\u00E7\u00E3o de uma c\u00E2mera", "width", "56"], ["routerLink", "/projects/movies", 1, "button-inverted"], ["href", "https://vilhena-movies.netlify.app", "target", "_blank"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Blog Tech News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Blog com not\u00EDcias de tecnologia, agrupadas por assunto ou meses do ano. Com a possibilidade de cadastro, voc\u00EA pode postar suas pr\u00F3prias produ\u00E7\u00F5es.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mais detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ver aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dashboard COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aplica\u00E7\u00E3o para exibir as informa\u00E7\u00F5es do COVID em cidades e estados do Brasil e do mundo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mais detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ver aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Empathy Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Jogo para demonstrar as dificuldades de uma pessoa cega ou com baixa vis\u00E3o ao acessar a web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mais detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ver aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Landing page para captura de e-mails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Landing page para reunir interessados no produto de um cliente em um grupo do Telegram e em uma lista de emails.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mais detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ver aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Plugin WAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Plugin para tornar a web mais utiliz\u00E1vel e acess\u00EDvel para pessoas para pessoas com defici\u00EAncia visual.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mais detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Ver aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Buscador de filmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Site que consome a API do The Movie DB para exibir, buscar e se aprofundar em mais detalhes de diversos filmes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Mais detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Ver aplica\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n}\r\n#sections[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n.section[_ngcontent-%COMP%]{\r\n    padding: 1.5rem 2rem 1.5rem 2rem;\r\n    margin-top: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background-color: #21414E;\r\n    box-shadow: 0px 25px 100px rgba(0, 0, 0, 0.15);\r\n    border-radius: 50px;\r\n    width: 40%;\r\n}\r\n.section[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: .75rem;\r\n}\r\n.section[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n.section[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.75rem;\r\n    margin-bottom: 0;\r\n}\r\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n}\r\n.section[_ngcontent-%COMP%]   #buttons[_ngcontent-%COMP%]{\r\n    align-self: flex-end;\r\n    margin-top: .75rem;\r\n    margin-bottom: .75rem;\r\n}\r\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{\r\n    margin-right: 1rem;\r\n}\r\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    background-color: #FFCA3A;\r\n    color: #19323C;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n}\r\n.section[_ngcontent-%COMP%]   .button-inverted[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A;\r\n}\r\n.section[_ngcontent-%COMP%]   .button-inverted[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbmgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4jc2VjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbSAxLjVyZW0gMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDE0RTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyNXB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4uc2VjdGlvbiAjdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcclxufVxyXG4uc2VjdGlvbiAjdGl0bGUgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5zZWN0aW9uICN0aXRsZSBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5zZWN0aW9uIHB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuLnNlY3Rpb24gI2J1dHRvbnN7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IC43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcclxufVxyXG4uc2VjdGlvbiBhOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5zZWN0aW9uIGF7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0EzQTtcclxuICAgIGNvbG9yOiAjMTkzMjNDO1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDQwcHggcmdiYSg0OCwgMTE1LCA4MSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VjdGlvbiBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg2ZTtcclxufVxyXG4uc2VjdGlvbiAuYnV0dG9uLWludmVydGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZDQTNBO1xyXG4gICAgY29sb3I6I0ZGQ0EzQTtcclxufVxyXG4uc2VjdGlvbiAuYnV0dG9uLWludmVydGVkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDg2ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmQ4NmU7XHJcbiAgICBjb2xvcjojMTkzMjNDO1xyXG59Il19 */", "@media (max-width: 1299.98px) {\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 45%;\r\n    }\r\n    #sections[_ngcontent-%COMP%]{\r\n        justify-content: space-between;\r\n    }\r\n}\r\n@media (max-width: 1149.98px) {\r\n    .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{\r\n        margin-right: 0;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .section[_ngcontent-%COMP%]   #buttons[_ngcontent-%COMP%]{\r\n        align-self: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n        text-align: center;\r\n        align-self: center;\r\n    }\r\n}\r\n@media (max-width: 849.98px) {\r\n    .section[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: 1.75rem;\r\n    }\r\n}\r\n@media (max-width: 767.98px) {\r\n\r\n}\r\n@media (max-width: 575.98px) {\r\n    \r\n}\r\n@media (max-width: 424.98px) {\r\n    .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\r\n@media (max-width: 319.98px) {\r\n    .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 95%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMjk5Ljk4cHgpIHtcclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgICAjc2VjdGlvbnN7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQ5Ljk4cHgpIHtcclxuICAgIC5zZWN0aW9uIGE6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbiAjYnV0dG9uc3tcclxuICAgICAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uIGF7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDkuOThweCkge1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNC45OHB4KSB7XHJcbiAgICAuc2VjdGlvbiBhe1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMxOS45OHB4KSB7XHJcbiAgICAuc2VjdGlvbiBhe1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css', './projects.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");




class NotFoundComponent {
    constructor(_location) {
        this._location = _location;
    }
    ngOnInit() {
    }
    return() {
        this._location.back();
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 7, vars: 0, consts: [[1, "mx-auto"], ["src", "assets/images/404.png", "alt", "Imagem de p\u00E1gina n\u00E3o encontrada"], [3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "P\u00E1gina em constru\u00E7\u00E3o ou n\u00E3o encontrada!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_a_click_5_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width: 40rem;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    color: #FFCA3A;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n    padding: .75rem 1.5rem;\r\n    box-shadow: 0px 10px 40px rgba(48, 115, 81, 0.15);\r\n    border-radius: 100px;\r\n    border: none;\r\n    transition: all 0.25s ease-in-out;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: 3px solid #FFCA3A;\r\n    color:#FFCA3A !important;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n}\r\na[_ngcontent-%COMP%]:hover{\r\n    background-color: #ffd86e;\r\n    border: 3px solid #ffd86e;\r\n    color:#19323C !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkZDQTNBO1xyXG59XHJcbmF7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDQwcHggcmdiYSg0OCwgMTE1LCA4MSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0ZGQ0EzQTtcclxuICAgIGNvbG9yOiNGRkNBM0EgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4NmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZkODZlO1xyXG4gICAgY29sb3I6IzE5MzIzQyAhaW1wb3J0YW50O1xyXG59Il19 */", "@media (max-width: 767.98px) {\r\n    img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n}\r\n@media (max-width: 575.98px) {\r\n    h2[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n        font-size: 1.25rem;\r\n    }\r\n}\r\n@media (max-width: 424.98px) {\r\n    main[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6Im5vdC1mb3VuZC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICBoMiwgYXtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjQuOThweCkge1xyXG4gICAgbWFpbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG59ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css', './not-found.responsivity.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_project_blog_project_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project-blog/project-blog.component */ "7brX");
/* harmony import */ var _pages_project_covid_project_covid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project-covid/project-covid.component */ "+jZ9");
/* harmony import */ var _pages_project_empathy_project_empathy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/project-empathy/project-empathy.component */ "J12B");
/* harmony import */ var _pages_project_landing_project_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/project-landing/project-landing.component */ "8KUq");
/* harmony import */ var _pages_project_movies_project_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/project-movies/project-movies.component */ "B7jJ");
/* harmony import */ var _pages_project_wal_project_wal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/project-wal/project-wal.component */ "Lat1");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");














const routes = [
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "projects", component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"] },
    { path: "projects/blog", component: _pages_project_blog_project_blog_component__WEBPACK_IMPORTED_MODULE_5__["ProjectBlogComponent"] },
    { path: "projects/covid", component: _pages_project_covid_project_covid_component__WEBPACK_IMPORTED_MODULE_6__["ProjectCovidComponent"] },
    { path: "projects/empathy", component: _pages_project_empathy_project_empathy_component__WEBPACK_IMPORTED_MODULE_7__["ProjectEmpathyComponent"] },
    { path: "projects/landing", component: _pages_project_landing_project_landing_component__WEBPACK_IMPORTED_MODULE_8__["ProjectLandingComponent"] },
    { path: "projects/movies", component: _pages_project_movies_project_movies_component__WEBPACK_IMPORTED_MODULE_9__["ProjectMoviesComponent"] },
    { path: "projects/wal", component: _pages_project_wal_project_wal_component__WEBPACK_IMPORTED_MODULE_10__["ProjectWalComponent"] },
    { path: "contact", component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map