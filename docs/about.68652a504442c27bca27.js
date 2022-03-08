/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_icons_icon_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/icon-arrow.svg */ "./src/assets/icons/icon-arrow.svg");


function createFooter() {
  var footerWrapper = document.createElement("div");
  footerWrapper.classList.add("home_footer_wrapper");
  var footerContainer = document.createElement("div");
  footerContainer.classList.add("home_footer_container");
  var bottomLogoContainer = document.createElement("div");
  bottomLogoContainer.classList.add("footer_arch_container");
  var archLogoImg = document.createElement("img");
  archLogoImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  bottomLogoContainer.append(archLogoImg);
  var bottomBtnContainer = document.createElement("div");
  bottomBtnContainer.classList.add("bottom_button_container");
  var portfolioContainer = document.createElement("div");
  portfolioContainer.classList.add("footer_portfolio_container");
  var portfolioBtn = document.createElement("p");
  portfolioBtn.innerText = "Portfolio";
  portfolioBtn.classList.add("footer_portfolio_button");
  portfolioContainer.append(portfolioBtn);
  var aboutContainer = document.createElement("div");
  aboutContainer.classList.add("footer_about_container");
  var aboutBtn = document.createElement("p");
  aboutBtn.innerText = "About Us";
  aboutBtn.classList.add("footer_about_button");
  aboutContainer.append(aboutBtn);
  var contactContainer = document.createElement("div");
  contactContainer.classList.add("footer_contact_container");
  var contactBtn = document.createElement("p");
  contactBtn.innerText = "Contact";
  contactBtn.classList.add("footer_contact_button");
  contactContainer.append(contactBtn);
  var seePortfolioBtnContainer = document.createElement("div");
  seePortfolioBtnContainer.classList.add("footer_see_portfolio_button_container");
  var seetPortfolioBtn = document.createElement("p");
  seetPortfolioBtn.classList.add("footer_see_portfolio_button");
  seetPortfolioBtn.innerText = "See Our Portfolio";
  var arrow = document.createElement("img");
  arrow.src = _assets_icons_icon_arrow_svg__WEBPACK_IMPORTED_MODULE_1__;
  seePortfolioBtnContainer.append(seetPortfolioBtn, arrow);
  bottomBtnContainer.append(bottomLogoContainer, portfolioContainer, aboutContainer, contactContainer);
  footerContainer.append(bottomBtnContainer, seePortfolioBtnContainer);
  footerWrapper.append(footerContainer);
  return footerWrapper;
}

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");

function createNavbar() {
  var navbarWrapper = document.createElement("div");
  navbarWrapper.classList.add("navbar_wrapper");
  var navLogoContainer = document.createElement("div");
  navLogoContainer.classList.add("nav_logo_container");
  var logo = document.createElement("img");
  logo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  navLogoContainer.append(logo);
  var navButtonContainer = document.createElement("div");
  navButtonContainer.classList.add("nav_button_container");
  var buttonOne = createButton("portfolio_anchor", "Portfolio", "portfolio.html");
  var buttonTwo = createButton("about_anchor", "About Us", "about.html");
  var buttonThree = createButton("contact_anchor", "Contact", "contact.html");
  navButtonContainer.append(buttonOne, buttonTwo, buttonThree);
  navbarWrapper.append(navLogoContainer, navButtonContainer);
  return navbarWrapper;
}

function createButton(anchorName, innerButton, anchorSource) {
  var anchor = document.createElement("a");
  anchor.classList.add(anchorName);
  anchor.href = anchorSource;
  var description = document.createElement("p");
  description.innerText = innerButton;
  anchor.append(description);
  return anchor;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global-style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global-style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Spartan:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Spartan:wght@500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-spartan: 'Spartan', sans-serif;\n}\n\n\nhtml, body{\n    margin: 0px;\n    padding: 0px;\n}\n/****************** Navbar **************************/\n.navbar_wrapper{\n    display: flex;\n    flex-direction: row;\n    width: 1000px;\n    margin: auto;\n    height: 114px;\n    align-items: center;\n}\n\n.nav_button_container{\n    display: flex;\n    margin-left: 18px;\n    width: 515px;\n    justify-content: space-evenly;\n}\n\n\n.portfolio_anchor, .about_anchor, .contact_anchor{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #7d828f;\n    font-weight: 700;\n    text-decoration: none;\n}\n\n.header_image_container{\n    text-align: center;\n}\n\n.header_description_container{\n    position: absolute;\n    top: 298px;\n    left: 357px;\n}\n\n.upper_container{\n    font-weight: 700;\n}\n.header_title_upper, .header_title_lower{\n    font-family: var(--font-spartan);\n    font-size: 80px;\n    letter-spacing: -2px;\n    color: #fff;\n    margin: 0px;\n}\n\n.header_paragraph_container{\n    width: 412px;\n}\n\n.header_lower_paragraph{\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 500;\n}\n\n.header_portfolio_container{\n    position: absolute;\n    top: 600px;\n    left: 357px;\n    width: 252px;\n    height: 72px;\n    background-color: #1b1d23;\n    font-weight: 700;\n}\n\n.portfolio_inner_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #fff;\n    margin-top: 11%;\n    margin-left: 36px;\n}\n\n.bottom_navigation_bar{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 320px;\n    height: 80px;\n    position: absolute;\n    bottom: -52px;\n    left: 85px;\n}\n\n.bottom_one_btn, .bottom_two_btn, .bottom_three_btn, .bottom_four_btn{\n    width: 80px;\n    height: 80px;\n    margin: 0px;\n    padding: 31px;\n    background-color: #fff;\n    border: 1px black solid;\n}\n\n.middle_section_wrapper{\n    height: auto;\n    width: auto;\n    margin-top: 75px;\n}\n\n.middle_section_title_container{\n    width: 968px;\n    margin-top: 56px;\n    margin-left: 159px;\n    font-weight: 700;\n}\n.middle_section_title{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    margin: 0px;\n    position: relative;\n    z-index: 1;\n}\n\n.middle_section_description_container{\n    width: 446px;\n    height: 493px;\n    margin-left: 349px;\n    margin-top: -44px;\n\n}\n.middle_section_description_container :first-child{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.middle_section_description{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.middle_image_description_container{\n    display: flex;\n}\n\n.middle_image_container{\n    position: relative;\n    top: -123px;\n    left: 122px;\n}\n\n.middle_image_bottom_container{\n    text-align: center;\n    height: 561px;\n    margin-top: 67px;\n}\n\n.small_team_bottom_container{\n    position: relative;\n    top: -404px;\n    width: 350px;\n    text-align: start;\n    left: 349px;\n}\n.small_teams_title{\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.about_bottom_button_container{\n    width: 187px;\n    height: 72px;\n    background-color: #1b1d23;\n    margin-top: 29px;\n}\n.about_bottom_button{\n    position: relative;\n    top: 24px;\n    left: 33px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n}\n\n.feature_wrapper{\n    margin: 186px 154px 0px 154px;\n}\n\n.feature_top_title_container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.feature_logo_container{\n    font-size: 56px;\n    font-family: var(--font-spartan);\n    letter-spacing: -2px;\n    font-weight: 700;\n}\n.feature_logo_container p{\n    margin: 0px;\n}\n\n.see_all_btn_container{\n    height: auto;\n    width: 169px;\n    background-color: #1b1d23;\n    color: #fff;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n}\n.see_all_btn_container p{\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n.feature_main_image_container{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 72px;\n}\n\n.first_feature_image_container, .second_feature_image_container, .third_feature_image_container{\n    height: 560px;\n}\n\n.feature_number_image_one{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 283px;\n    margin: 0px;\n    width: 86px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_two{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 217px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_three{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 232px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n\n.first_image_lower_description, .second_image_lower_description, .third_image_lower_description{\n    position: relative;\n    top: -344px;\n    left: 57px;\n}\n\n.upper_first_feature_text, .upper_second_feature_text, .upper_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 18px;\n    color: #fff;\n}\n\n.lower_first_feature_text, .lower_second_feature_text, .lower_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n    opacity: 0.7;\n    font-weight: 500;\n}\n\n.home_footer_container{\n    height: 330px;\n    position: relative;\n}\n\n.bottom_button_container{\n    display: flex;\n    position: absolute;\n    bottom: -8px;\n    left: 154px;\n    background-color: #eeeff4;\n}\n\n.footer_arch_container, .footer_portfolio_container, .footer_about_container{\n    width: 200px;\n    height: 200px;\n}\n.footer_portfolio_button, .footer_about_button, .footer_contact_button{\n    position: relative;\n    top: 79px;\n    left: 69px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #7d828f;\n}\n\n.footer_arch_container{\n    background-color: #1b1d23;\n}\n.footer_arch_container img{\n    position: relative;\n    top: 74px;\n    left: 46px;\n    filter: invert(100%) sepia(12%) saturate(7493%) hue-rotate(179deg) brightness(103%) contrast(113%);\n}\n\n.footer_contact_container{\n    width: 384px;\n}\n\n.footer_see_portfolio_button_container{\n    width: 252px;\n    height: 72px;\n    display: flex;\n    background-color: #1b1d23;\n    color: #fff;\n    position: relative;\n    left: 1018px;\n    top: 205px;\n    \n}\n.footer_see_portfolio_button{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    margin-top: 27px;\n    margin-left: 20px;\n}\n\n.footer_see_portfolio_button_container img{\n    width: 24px;\n    height: 18px;\n    margin-top: 27px;\n    margin-left: 31px;\n    filter: invert(99%) sepia(3%) saturate(731%) hue-rotate(298deg) brightness(116%) contrast(100%);\n}\n\n\n\n/******************* Portfolio Page  ********************************/\n.panel_holder_grid_container{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    place-items: center;\n    row-gap: 46px;\n}\n\n.content_container{\n    position: relative;\n    top: -111px;\n    left: 45px;\n}\n.portfolio_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #fff;\n    font-weight: 700;\n}\n.portfolio_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    font-weight: 500;\n    color: #fff;\n    opacity: 0.7;\n}\n\n\n\n.portfolio_container{\n    width: 350px;\n    height: 560px;\n}\n\n.portfolio_one_container, .portfolio_four_container,\n.portfolio_seven_container, .portfolio_ten_container{\n    margin-left: 161px;\n}\n\n.portfolio_three_container, .portfolio_six_container,\n.portfolio_nine_container, .portfolio_twelve_container{\n    margin-right: 161px;\n}\n\n\n/***********************About Page    ****************************/\n.about_header_wrapper{\n    display: flex;\n}\n\n.about_first_container{\n    width: 553px;\n}\n\n.about_first_title_container{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    font-weight: 700;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    position: relative;\n    left: -179px;\n    top: 95px;\n    z-index: 1;\n}\n.about_first_title_container p{\n    margin: 0px;\n}\n\n.about_image_container{\n    margin-left: 161px;\n}\n\n.about_content_container{\n    width: 692px;\n    height: 503px;\n    position: relative;\n    top: -20px;\n    left: -155px;\n    background-color: #fff;\n}\n\n.about_upper_title_text{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    font-weight: 700;\n    width: 400px;\n    margin: 0px;\n    position: relative;\n    top: 217px;\n    left: 200px;\n}\n\n.about_lower_title_text{\n    width: 445px;\n    height: 100px;\n    color: #60636d;\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    position: relative;\n    top: 250px;\n    left: 200px;\n    line-height: 25px;\n}\n\n\n.about_middle_wrapper{\n    display: flex;\n    margin-top: 169px;\n}\n\n.about_middle_content_container{\n    width: 500px;\n    margin-left: 161px;\n}\n.about_middle_upper_container{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    width: 263px;\n}\n\n.about_middle_lower_container{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.about_middle_image_container{\n    margin-left: 124px;\n}\n\n.about_leader_wrapper{\n    display: flex;\n    margin-top: 191px;\n}\n\n.about_leader_container_title{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    margin-left: 161px;\n    width: 249px;\n    height: 200px;\n}\n.about_leader_container_title p{\n    margin: 0px;\n}\n\n\n.about_leader_grid_container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 730px;\n    height: 860px;\n    margin-left: 185px;\n    column-gap: 30px;\n    margin-left: 185px;\n    column-gap: 30px;\n}\n\n.about_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #1b1d23;\n    font-weight: 700;\n}\n.about_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #1b1d23;\n    font-weight: 500;\n    opacity: 0.7;\n}\n\n", "",{"version":3,"sources":["webpack://./src/global-style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Spartan:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Spartan:wght@500;700&display=swap');\n\n\n:root{\n    --font-spartan: 'Spartan', sans-serif;\n}\n\n\nhtml, body{\n    margin: 0px;\n    padding: 0px;\n}\n/****************** Navbar **************************/\n.navbar_wrapper{\n    display: flex;\n    flex-direction: row;\n    width: 1000px;\n    margin: auto;\n    height: 114px;\n    align-items: center;\n}\n\n.nav_button_container{\n    display: flex;\n    margin-left: 18px;\n    width: 515px;\n    justify-content: space-evenly;\n}\n\n\n.portfolio_anchor, .about_anchor, .contact_anchor{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #7d828f;\n    font-weight: 700;\n    text-decoration: none;\n}\n\n.header_image_container{\n    text-align: center;\n}\n\n.header_description_container{\n    position: absolute;\n    top: 298px;\n    left: 357px;\n}\n\n.upper_container{\n    font-weight: 700;\n}\n.header_title_upper, .header_title_lower{\n    font-family: var(--font-spartan);\n    font-size: 80px;\n    letter-spacing: -2px;\n    color: #fff;\n    margin: 0px;\n}\n\n.header_paragraph_container{\n    width: 412px;\n}\n\n.header_lower_paragraph{\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 500;\n}\n\n.header_portfolio_container{\n    position: absolute;\n    top: 600px;\n    left: 357px;\n    width: 252px;\n    height: 72px;\n    background-color: #1b1d23;\n    font-weight: 700;\n}\n\n.portfolio_inner_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #fff;\n    margin-top: 11%;\n    margin-left: 36px;\n}\n\n.bottom_navigation_bar{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 320px;\n    height: 80px;\n    position: absolute;\n    bottom: -52px;\n    left: 85px;\n}\n\n.bottom_one_btn, .bottom_two_btn, .bottom_three_btn, .bottom_four_btn{\n    width: 80px;\n    height: 80px;\n    margin: 0px;\n    padding: 31px;\n    background-color: #fff;\n    border: 1px black solid;\n}\n\n.middle_section_wrapper{\n    height: auto;\n    width: auto;\n    margin-top: 75px;\n}\n\n.middle_section_title_container{\n    width: 968px;\n    margin-top: 56px;\n    margin-left: 159px;\n    font-weight: 700;\n}\n.middle_section_title{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    margin: 0px;\n    position: relative;\n    z-index: 1;\n}\n\n.middle_section_description_container{\n    width: 446px;\n    height: 493px;\n    margin-left: 349px;\n    margin-top: -44px;\n\n}\n.middle_section_description_container :first-child{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.middle_section_description{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.middle_image_description_container{\n    display: flex;\n}\n\n.middle_image_container{\n    position: relative;\n    top: -123px;\n    left: 122px;\n}\n\n.middle_image_bottom_container{\n    text-align: center;\n    height: 561px;\n    margin-top: 67px;\n}\n\n.small_team_bottom_container{\n    position: relative;\n    top: -404px;\n    width: 350px;\n    text-align: start;\n    left: 349px;\n}\n.small_teams_title{\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.about_bottom_button_container{\n    width: 187px;\n    height: 72px;\n    background-color: #1b1d23;\n    margin-top: 29px;\n}\n.about_bottom_button{\n    position: relative;\n    top: 24px;\n    left: 33px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n}\n\n.feature_wrapper{\n    margin: 186px 154px 0px 154px;\n}\n\n.feature_top_title_container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.feature_logo_container{\n    font-size: 56px;\n    font-family: var(--font-spartan);\n    letter-spacing: -2px;\n    font-weight: 700;\n}\n.feature_logo_container p{\n    margin: 0px;\n}\n\n.see_all_btn_container{\n    height: auto;\n    width: 169px;\n    background-color: #1b1d23;\n    color: #fff;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n}\n.see_all_btn_container p{\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n.feature_main_image_container{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 72px;\n}\n\n.first_feature_image_container, .second_feature_image_container, .third_feature_image_container{\n    height: 560px;\n}\n\n.feature_number_image_one{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 283px;\n    margin: 0px;\n    width: 86px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_two{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 217px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_three{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 232px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n\n.first_image_lower_description, .second_image_lower_description, .third_image_lower_description{\n    position: relative;\n    top: -344px;\n    left: 57px;\n}\n\n.upper_first_feature_text, .upper_second_feature_text, .upper_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 18px;\n    color: #fff;\n}\n\n.lower_first_feature_text, .lower_second_feature_text, .lower_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n    opacity: 0.7;\n    font-weight: 500;\n}\n\n.home_footer_container{\n    height: 330px;\n    position: relative;\n}\n\n.bottom_button_container{\n    display: flex;\n    position: absolute;\n    bottom: -8px;\n    left: 154px;\n    background-color: #eeeff4;\n}\n\n.footer_arch_container, .footer_portfolio_container, .footer_about_container{\n    width: 200px;\n    height: 200px;\n}\n.footer_portfolio_button, .footer_about_button, .footer_contact_button{\n    position: relative;\n    top: 79px;\n    left: 69px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #7d828f;\n}\n\n.footer_arch_container{\n    background-color: #1b1d23;\n}\n.footer_arch_container img{\n    position: relative;\n    top: 74px;\n    left: 46px;\n    filter: invert(100%) sepia(12%) saturate(7493%) hue-rotate(179deg) brightness(103%) contrast(113%);\n}\n\n.footer_contact_container{\n    width: 384px;\n}\n\n.footer_see_portfolio_button_container{\n    width: 252px;\n    height: 72px;\n    display: flex;\n    background-color: #1b1d23;\n    color: #fff;\n    position: relative;\n    left: 1018px;\n    top: 205px;\n    \n}\n.footer_see_portfolio_button{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    margin-top: 27px;\n    margin-left: 20px;\n}\n\n.footer_see_portfolio_button_container img{\n    width: 24px;\n    height: 18px;\n    margin-top: 27px;\n    margin-left: 31px;\n    filter: invert(99%) sepia(3%) saturate(731%) hue-rotate(298deg) brightness(116%) contrast(100%);\n}\n\n\n\n/******************* Portfolio Page  ********************************/\n.panel_holder_grid_container{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    place-items: center;\n    row-gap: 46px;\n}\n\n.content_container{\n    position: relative;\n    top: -111px;\n    left: 45px;\n}\n.portfolio_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #fff;\n    font-weight: 700;\n}\n.portfolio_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    font-weight: 500;\n    color: #fff;\n    opacity: 0.7;\n}\n\n\n\n.portfolio_container{\n    width: 350px;\n    height: 560px;\n}\n\n.portfolio_one_container, .portfolio_four_container,\n.portfolio_seven_container, .portfolio_ten_container{\n    margin-left: 161px;\n}\n\n.portfolio_three_container, .portfolio_six_container,\n.portfolio_nine_container, .portfolio_twelve_container{\n    margin-right: 161px;\n}\n\n\n/***********************About Page    ****************************/\n.about_header_wrapper{\n    display: flex;\n}\n\n.about_first_container{\n    width: 553px;\n}\n\n.about_first_title_container{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    font-weight: 700;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    position: relative;\n    left: -179px;\n    top: 95px;\n    z-index: 1;\n}\n.about_first_title_container p{\n    margin: 0px;\n}\n\n.about_image_container{\n    margin-left: 161px;\n}\n\n.about_content_container{\n    width: 692px;\n    height: 503px;\n    position: relative;\n    top: -20px;\n    left: -155px;\n    background-color: #fff;\n}\n\n.about_upper_title_text{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    font-weight: 700;\n    width: 400px;\n    margin: 0px;\n    position: relative;\n    top: 217px;\n    left: 200px;\n}\n\n.about_lower_title_text{\n    width: 445px;\n    height: 100px;\n    color: #60636d;\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    position: relative;\n    top: 250px;\n    left: 200px;\n    line-height: 25px;\n}\n\n\n.about_middle_wrapper{\n    display: flex;\n    margin-top: 169px;\n}\n\n.about_middle_content_container{\n    width: 500px;\n    margin-left: 161px;\n}\n.about_middle_upper_container{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    width: 263px;\n}\n\n.about_middle_lower_container{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.about_middle_image_container{\n    margin-left: 124px;\n}\n\n.about_leader_wrapper{\n    display: flex;\n    margin-top: 191px;\n}\n\n.about_leader_container_title{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    margin-left: 161px;\n    width: 249px;\n    height: 200px;\n}\n.about_leader_container_title p{\n    margin: 0px;\n}\n\n\n.about_leader_grid_container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 730px;\n    height: 860px;\n    margin-left: 185px;\n    column-gap: 30px;\n    margin-left: 185px;\n    column-gap: 30px;\n}\n\n.about_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #1b1d23;\n    font-weight: 700;\n}\n.about_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #1b1d23;\n    font-weight: 500;\n    opacity: 0.7;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/global-style.css":
/*!******************************!*\
  !*** ./src/global-style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/global-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/about/desktop/avatar-jackson.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/about/desktop/avatar-jackson.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d7b6c2e34b7e4f5651c.jpg";

/***/ }),

/***/ "./src/assets/about/desktop/avatar-jake.jpg":
/*!**************************************************!*\
  !*** ./src/assets/about/desktop/avatar-jake.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "853a6796a16b4d15fb8d.jpg";

/***/ }),

/***/ "./src/assets/about/desktop/avatar-maria.jpg":
/*!***************************************************!*\
  !*** ./src/assets/about/desktop/avatar-maria.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4676df09ebc7d5d572ad.jpg";

/***/ }),

/***/ "./src/assets/about/desktop/avatar-thompson.jpg":
/*!******************************************************!*\
  !*** ./src/assets/about/desktop/avatar-thompson.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a2d6fe874ae4458fb91.jpg";

/***/ }),

/***/ "./src/assets/about/desktop/image-heritage.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/about/desktop/image-heritage.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adb402eea585b6e5fb42.jpg";

/***/ }),

/***/ "./src/assets/about/desktop/image-hero.jpg":
/*!*************************************************!*\
  !*** ./src/assets/about/desktop/image-hero.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef2c4c1a402f3cb4e09a.jpg";

/***/ }),

/***/ "./src/assets/icons/icon-arrow.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/icon-arrow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "896e4b1575c673ad28f8.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddbfb6873fe10618a4a7.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-style.css */ "./src/global-style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _assets_about_desktop_image_hero_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/about/desktop/image-hero.jpg */ "./src/assets/about/desktop/image-hero.jpg");
/* harmony import */ var _assets_about_desktop_image_heritage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/about/desktop/image-heritage.jpg */ "./src/assets/about/desktop/image-heritage.jpg");
/* harmony import */ var _assets_about_desktop_avatar_jake_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/about/desktop/avatar-jake.jpg */ "./src/assets/about/desktop/avatar-jake.jpg");
/* harmony import */ var _assets_about_desktop_avatar_thompson_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/about/desktop/avatar-thompson.jpg */ "./src/assets/about/desktop/avatar-thompson.jpg");
/* harmony import */ var _assets_about_desktop_avatar_jackson_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/about/desktop/avatar-jackson.jpg */ "./src/assets/about/desktop/avatar-jackson.jpg");
/* harmony import */ var _assets_about_desktop_avatar_maria_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/about/desktop/avatar-maria.jpg */ "./src/assets/about/desktop/avatar-maria.jpg");










function createAbout() {
  var aboutWraper = document.createElement("div");
  aboutWraper.classList.add("about_wrapper");
  return aboutWraper;
}

function aboutHeader() {
  var headerWrapper = document.createElement("div");
  headerWrapper.classList.add("about_header_wrapper");
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("about_image_container");
  var image = document.createElement("img");
  image.src = _assets_about_desktop_image_hero_jpg__WEBPACK_IMPORTED_MODULE_3__;
  imageContainer.append(image);
  var firstContainer = document.createElement("div");
  firstContainer.classList.add("about_first_container");
  var titleContainer = document.createElement("div");
  titleContainer.classList.add("about_first_title_container");
  var firstTitle = document.createElement("p");
  firstTitle.innerText = "About";
  titleContainer.append(firstTitle);
  var contentContainer = document.createElement("div");
  contentContainer.classList.add("about_content_container");
  var upperTitle = document.createElement("p");
  upperTitle.classList.add("about_upper_title_text");
  upperTitle.innerText = "Your team of professionals";
  var lowerText = document.createElement("p");
  lowerText.classList.add("about_lower_title_text");
  lowerText.innerText = "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.";
  contentContainer.append(upperTitle, lowerText);
  firstContainer.append(titleContainer, contentContainer);
  headerWrapper.append(imageContainer, firstContainer);
  return headerWrapper;
}

function aboutHeritage() {
  var middleWrapper = document.createElement("div");
  middleWrapper.classList.add("about_middle_wrapper");
  var middleContentContainer = document.createElement("div");
  middleContentContainer.classList.add("about_middle_content_container");
  var upperMiddleContentContainer = document.createElement("div");
  upperMiddleContentContainer.classList.add("about_middle_upper_container");
  var aboutMiddleTitle = document.createElement("p");
  aboutMiddleTitle.innerText = "Our Heritage";
  upperMiddleContentContainer.append(aboutMiddleTitle);
  var lowerMiddleContentContainer = document.createElement("div");
  lowerMiddleContentContainer.classList.add("about_middle_lower_container");
  var middleContent = document.createElement("p");
  middleContent.innerText = "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country. Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. Our small team of world-class professionals provides input on every project.";
  lowerMiddleContentContainer.append(middleContent);
  var middleImageContentContainer = document.createElement("div");
  middleImageContentContainer.classList.add("about_middle_image_container");
  var middleImage = document.createElement("img");
  middleImage.src = _assets_about_desktop_image_heritage_jpg__WEBPACK_IMPORTED_MODULE_4__;
  middleImageContentContainer.append(middleImage);
  middleContentContainer.append(upperMiddleContentContainer, lowerMiddleContentContainer);
  middleWrapper.append(middleContentContainer, middleImageContentContainer);
  return middleWrapper;
}

function aboutLeaders() {
  var aboutLeaderWrapper = document.createElement("div");
  aboutLeaderWrapper.classList.add("about_leader_wrapper");
  var leaderTitle = document.createElement("div");
  leaderTitle.classList.add("about_leader_container_title");
  var theLeaders = document.createElement("p");
  theLeaders.innerText = "The Leaders";
  leaderTitle.append(theLeaders);
  var leaderGridImage = document.createElement("div");
  leaderGridImage.classList.add("about_leader_grid_container");
  var firstImage = aboutImagePanels("about_leader_container", "jake_richards_image", _assets_about_desktop_avatar_jake_jpg__WEBPACK_IMPORTED_MODULE_5__, "about_content_container_jake", "Jake Richards", "Chief Architect");
  var secondImage = aboutImagePanels("about_leader_container", "thomas_image", _assets_about_desktop_avatar_thompson_jpg__WEBPACK_IMPORTED_MODULE_6__, "about_content_container_smith", "Thompson Smith", "Head of Finance");
  var thirdImage = aboutImagePanels("about_leader_container", "jackson_image", _assets_about_desktop_avatar_jackson_jpg__WEBPACK_IMPORTED_MODULE_7__, "about_content_container_jackson", "Jackson Rourke", "Lead Designer");
  var fourthImage = aboutImagePanels("about_leader_container", "simpson_image", _assets_about_desktop_avatar_maria_jpg__WEBPACK_IMPORTED_MODULE_8__, "about_content_container_simpson", "Maria Simpson", "Senior Architect");
  leaderGridImage.append(firstImage, secondImage, thirdImage, fourthImage);
  aboutLeaderWrapper.append(leaderTitle, leaderGridImage);
  return aboutLeaderWrapper;
}

function aboutImagePanels(containerName, imageName, imageSource, contentContainerName, upper, lower) {
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("about_container");
  imageContainer.classList.add(containerName);
  var image = document.createElement("img");
  image.classList.add(imageName);
  image.src = imageSource;
  var contentContainer = document.createElement("div");
  contentContainer.classList.add(contentContainerName);
  var upperText = document.createElement("p");
  upperText.classList.add("about_upper_text");
  upperText.innerText = upper;
  var lowerText = document.createElement("p");
  lowerText.classList.add("about_lower_text");
  lowerText.innerText = lower;
  contentContainer.append(upperText, lowerText);
  imageContainer.append(image, contentContainer);
  return imageContainer;
}

function loadAbout() {
  var getAbout = document.getElementById("about_page");
  var navBar = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.createNavbar)();
  var newAbout = createAbout();
  var newHeader = aboutHeader();
  var newMiddle = aboutHeritage();
  var newLeader = aboutLeaders();
  var newFooter = (0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();
  newAbout.append(navBar, newHeader, newMiddle, newLeader, newFooter);
  getAbout.append(newAbout);
}

loadAbout();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFX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TUFBVCxDQUFnQjZFLFFBQWhCO0FBQ0g7O0FBRURKLFNBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FyY2hzdHVkaW9zLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vc3JjL2dsb2JhbC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9zcmMvZ2xvYmFsLXN0eWxlLmNzcz8xMzA5Iiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyY2hzdHVkaW9zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyY2hzdHVkaW9zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFyY2hMb2dvIGZyb20gXCIuLi9hc3NldHMvbG9nby5zdmdcIjtcbmltcG9ydCBhcnJvd0xvZ28gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9pY29uLWFycm93LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaG9tZV9mb290ZXJfd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lX2Zvb3Rlcl9jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBib3R0b21Mb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3R0b21Mb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfYXJjaF9jb250YWluZXJcIik7XG5cbiAgICBsZXQgYXJjaExvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFyY2hMb2dvSW1nLnNyYyA9IGFyY2hMb2dvO1xuICAgIGJvdHRvbUxvZ29Db250YWluZXIuYXBwZW5kKGFyY2hMb2dvSW1nKTtcblxuXG5cblxuICAgIGxldCBib3R0b21CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm90dG9tX2J1dHRvbl9jb250YWluZXJcIik7XG5cbiAgICBsZXQgcG9ydGZvbGlvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3J0Zm9saW9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9wb3J0Zm9saW9fY29udGFpbmVyXCIpO1xuICAgIGxldCBwb3J0Zm9saW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwb3J0Zm9saW9CdG4uaW5uZXJUZXh0ID0gXCJQb3J0Zm9saW9cIjtcbiAgICBwb3J0Zm9saW9CdG4uY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9wb3J0Zm9saW9fYnV0dG9uXCIpO1xuICAgIHBvcnRmb2xpb0NvbnRhaW5lci5hcHBlbmQocG9ydGZvbGlvQnRuKTtcblxuXG4gICAgbGV0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2Fib3V0X2NvbnRhaW5lclwiKTtcbiAgICBsZXQgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGFib3V0QnRuLmlubmVyVGV4dCA9IFwiQWJvdXQgVXNcIjtcbiAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2Fib3V0X2J1dHRvblwiKTtcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmQoYWJvdXRCdG4pO1xuXG5cbiAgICBsZXQgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2NvbnRhY3RfY29udGFpbmVyXCIpO1xuICAgIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb250YWN0QnRuLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiXG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2NvbnRhY3RfYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RCdG4pO1xuXG4gICAgbGV0IHNlZVBvcnRmb2xpb0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VlUG9ydGZvbGlvQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfc2VlX3BvcnRmb2xpb19idXR0b25fY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IHNlZXRQb3J0Zm9saW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWV0UG9ydGZvbGlvQnRuLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfc2VlX3BvcnRmb2xpb19idXR0b25cIik7XG4gICAgc2VldFBvcnRmb2xpb0J0bi5pbm5lclRleHQgPSBcIlNlZSBPdXIgUG9ydGZvbGlvXCI7XG5cbiAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFycm93LnNyYyA9IGFycm93TG9nbztcblxuICAgIHNlZVBvcnRmb2xpb0J0bkNvbnRhaW5lci5hcHBlbmQoc2VldFBvcnRmb2xpb0J0biwgYXJyb3cpO1xuXG4gICAgYm90dG9tQnRuQ29udGFpbmVyLmFwcGVuZChib3R0b21Mb2dvQ29udGFpbmVyICxwb3J0Zm9saW9Db250YWluZXIsIGFib3V0Q29udGFpbmVyLCBjb250YWN0Q29udGFpbmVyKTtcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kKGJvdHRvbUJ0bkNvbnRhaW5lciwgc2VlUG9ydGZvbGlvQnRuQ29udGFpbmVyKTtcbiAgICBmb290ZXJXcmFwcGVyLmFwcGVuZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RlcldyYXBwZXI7XG59IiwiaW1wb3J0IG5hdkxvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28uc3ZnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpe1xuICAgIGNvbnN0IG5hdmJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdmJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhcl93cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgbmF2TG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2TG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2X2xvZ29fY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nby5zcmMgPSBuYXZMb2dvO1xuICAgIG5hdkxvZ29Db250YWluZXIuYXBwZW5kKGxvZ28pO1xuXG4gICAgY29uc3QgbmF2QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdl9idXR0b25fY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGJ1dHRvbk9uZSA9IGNyZWF0ZUJ1dHRvbihcInBvcnRmb2xpb19hbmNob3JcIiwgXCJQb3J0Zm9saW9cIiwgXCJwb3J0Zm9saW8uaHRtbFwiKTtcbiAgICBsZXQgYnV0dG9uVHdvID0gY3JlYXRlQnV0dG9uKFwiYWJvdXRfYW5jaG9yXCIsIFwiQWJvdXQgVXNcIiwgXCJhYm91dC5odG1sXCIpO1xuICAgIGxldCBidXR0b25UaHJlZSA9IGNyZWF0ZUJ1dHRvbihcImNvbnRhY3RfYW5jaG9yXCIsIFwiQ29udGFjdFwiLCBcImNvbnRhY3QuaHRtbFwiKTtcblxuICAgIG5hdkJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uT25lLCBidXR0b25Ud28sIGJ1dHRvblRocmVlKTtcblxuICAgIG5hdmJhcldyYXBwZXIuYXBwZW5kKG5hdkxvZ29Db250YWluZXIsIG5hdkJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbmF2YmFyV3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGFuY2hvck5hbWUsIGlubmVyQnV0dG9uLCBhbmNob3JTb3VyY2Upe1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhbmNob3IuY2xhc3NMaXN0LmFkZChhbmNob3JOYW1lKTtcbiAgICBhbmNob3IuaHJlZiA9IGFuY2hvclNvdXJjZTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGlubmVyQnV0dG9uO1xuXG4gICAgYW5jaG9yLmFwcGVuZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gYW5jaG9yO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZmYW1pbHk9U3BhcnRhbjp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZmYW1pbHk9U3BhcnRhbjp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tZm9udC1zcGFydGFuOiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbmh0bWwsIGJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKiogTmF2YmFyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5uYXZiYXJfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDExNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2X2J1dHRvbl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbiAgICB3aWR0aDogNTE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5cXG4ucG9ydGZvbGlvX2FuY2hvciwgLmFib3V0X2FuY2hvciwgLmNvbnRhY3RfYW5jaG9ye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogIzdkODI4ZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyX2Rlc2NyaXB0aW9uX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI5OHB4O1xcbiAgICBsZWZ0OiAzNTdweDtcXG59XFxuXFxuLnVwcGVyX2NvbnRhaW5lcntcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmhlYWRlcl90aXRsZV91cHBlciwgLmhlYWRlcl90aXRsZV9sb3dlcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlcl9wYXJhZ3JhcGhfY29udGFpbmVye1xcbiAgICB3aWR0aDogNDEycHg7XFxufVxcblxcbi5oZWFkZXJfbG93ZXJfcGFyYWdyYXBoe1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5oZWFkZXJfcG9ydGZvbGlvX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwMHB4O1xcbiAgICBsZWZ0OiAzNTdweDtcXG4gICAgd2lkdGg6IDI1MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wb3J0Zm9saW9faW5uZXJfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi10b3A6IDExJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHg7XFxufVxcblxcbi5ib3R0b21fbmF2aWdhdGlvbl9iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNTJweDtcXG4gICAgbGVmdDogODVweDtcXG59XFxuXFxuLmJvdHRvbV9vbmVfYnRuLCAuYm90dG9tX3R3b19idG4sIC5ib3R0b21fdGhyZWVfYnRuLCAuYm90dG9tX2ZvdXJfYnRue1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMzFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5taWRkbGVfc2VjdGlvbl93cmFwcGVye1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcbn1cXG5cXG4ubWlkZGxlX3NlY3Rpb25fdGl0bGVfY29udGFpbmVye1xcbiAgICB3aWR0aDogOTY4cHg7XFxuICAgIG1hcmdpbi10b3A6IDU2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTlweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1pZGRsZV9zZWN0aW9uX3RpdGxle1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XFxuICAgIGNvbG9yOiAjZWVlZmY0O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubWlkZGxlX3NlY3Rpb25fZGVzY3JpcHRpb25fY29udGFpbmVye1xcbiAgICB3aWR0aDogNDQ2cHg7XFxuICAgIGhlaWdodDogNDkzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNDlweDtcXG4gICAgbWFyZ2luLXRvcDogLTQ0cHg7XFxuXFxufVxcbi5taWRkbGVfc2VjdGlvbl9kZXNjcmlwdGlvbl9jb250YWluZXIgOmZpcnN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5taWRkbGVfc2VjdGlvbl9kZXNjcmlwdGlvbntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiAjNjA2MzZkO1xcbn1cXG5cXG4ubWlkZGxlX2ltYWdlX2Rlc2NyaXB0aW9uX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1pZGRsZV9pbWFnZV9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTIzcHg7XFxuICAgIGxlZnQ6IDEyMnB4O1xcbn1cXG5cXG4ubWlkZGxlX2ltYWdlX2JvdHRvbV9jb250YWluZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1NjFweDtcXG4gICAgbWFyZ2luLXRvcDogNjdweDtcXG59XFxuXFxuLnNtYWxsX3RlYW1fYm90dG9tX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00MDRweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgbGVmdDogMzQ5cHg7XFxufVxcbi5zbWFsbF90ZWFtc190aXRsZXtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFib3V0X2JvdHRvbV9idXR0b25fY29udGFpbmVye1xcbiAgICB3aWR0aDogMTg3cHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG4gICAgbWFyZ2luLXRvcDogMjlweDtcXG59XFxuLmFib3V0X2JvdHRvbV9idXR0b257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICBsZWZ0OiAzM3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZlYXR1cmVfd3JhcHBlcntcXG4gICAgbWFyZ2luOiAxODZweCAxNTRweCAwcHggMTU0cHg7XFxufVxcblxcbi5mZWF0dXJlX3RvcF90aXRsZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZlYXR1cmVfbG9nb19jb250YWluZXJ7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZmVhdHVyZV9sb2dvX2NvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnNlZV9hbGxfYnRuX2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTY5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VlX2FsbF9idG5fY29udGFpbmVyIHB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZmVhdHVyZV9tYWluX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xcbn1cXG5cXG4uZmlyc3RfZmVhdHVyZV9pbWFnZV9jb250YWluZXIsIC5zZWNvbmRfZmVhdHVyZV9pbWFnZV9jb250YWluZXIsIC50aGlyZF9mZWF0dXJlX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA1NjBweDtcXG59XFxuXFxuLmZlYXR1cmVfbnVtYmVyX2ltYWdlX29uZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC01NDNweDtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbGVmdDogMjgzcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogODZweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mZWF0dXJlX251bWJlcl9pbWFnZV90d297XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNTQzcHg7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGxlZnQ6IDIxN3B4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEzM3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZlYXR1cmVfbnVtYmVyX2ltYWdlX3RocmVle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTU0M3B4O1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBsZWZ0OiAyMzJweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMzNweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5maXJzdF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvbiwgLnNlY29uZF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvbiwgLnRoaXJkX2ltYWdlX2xvd2VyX2Rlc2NyaXB0aW9ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM0NHB4O1xcbiAgICBsZWZ0OiA1N3B4O1xcbn1cXG5cXG4udXBwZXJfZmlyc3RfZmVhdHVyZV90ZXh0LCAudXBwZXJfc2Vjb25kX2ZlYXR1cmVfdGV4dCwgLnVwcGVyX3RoaXJkX2ZlYXR1cmVfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5sb3dlcl9maXJzdF9mZWF0dXJlX3RleHQsIC5sb3dlcl9zZWNvbmRfZmVhdHVyZV90ZXh0LCAubG93ZXJfdGhpcmRfZmVhdHVyZV90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaG9tZV9mb290ZXJfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib3R0b21fYnV0dG9uX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC04cHg7XFxuICAgIGxlZnQ6IDE1NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZmY0O1xcbn1cXG5cXG4uZm9vdGVyX2FyY2hfY29udGFpbmVyLCAuZm9vdGVyX3BvcnRmb2xpb19jb250YWluZXIsIC5mb290ZXJfYWJvdXRfY29udGFpbmVye1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcbi5mb290ZXJfcG9ydGZvbGlvX2J1dHRvbiwgLmZvb3Rlcl9hYm91dF9idXR0b24sIC5mb290ZXJfY29udGFjdF9idXR0b257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA3OXB4O1xcbiAgICBsZWZ0OiA2OXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogIzdkODI4ZjtcXG59XFxuXFxuLmZvb3Rlcl9hcmNoX2NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG59XFxuLmZvb3Rlcl9hcmNoX2NvbnRhaW5lciBpbWd7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA3NHB4O1xcbiAgICBsZWZ0OiA0NnB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDc0OTMlKSBodWUtcm90YXRlKDE3OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmZvb3Rlcl9jb250YWN0X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM4NHB4O1xcbn1cXG5cXG4uZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDI1MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwMThweDtcXG4gICAgdG9wOiAyMDVweDtcXG4gICAgXFxufVxcbi5mb290ZXJfc2VlX3BvcnRmb2xpb19idXR0b257XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lciBpbWd7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcbiAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDMlKSBzYXR1cmF0ZSg3MzElKSBodWUtcm90YXRlKDI5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMDAlKTtcXG59XFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKiogUG9ydGZvbGlvIFBhZ2UgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5wYW5lbF9ob2xkZXJfZ3JpZF9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDQ2cHg7XFxufVxcblxcbi5jb250ZW50X2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMTFweDtcXG4gICAgbGVmdDogNDVweDtcXG59XFxuLnBvcnRmb2xpb191cHBlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnBvcnRmb2xpb19sb3dlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG5cXG4ucG9ydGZvbGlvX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDU2MHB4O1xcbn1cXG5cXG4ucG9ydGZvbGlvX29uZV9jb250YWluZXIsIC5wb3J0Zm9saW9fZm91cl9jb250YWluZXIsXFxuLnBvcnRmb2xpb19zZXZlbl9jb250YWluZXIsIC5wb3J0Zm9saW9fdGVuX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDE2MXB4O1xcbn1cXG5cXG4ucG9ydGZvbGlvX3RocmVlX2NvbnRhaW5lciwgLnBvcnRmb2xpb19zaXhfY29udGFpbmVyLFxcbi5wb3J0Zm9saW9fbmluZV9jb250YWluZXIsIC5wb3J0Zm9saW9fdHdlbHZlX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjFweDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqQWJvdXQgUGFnZSAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5hYm91dF9oZWFkZXJfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFib3V0X2ZpcnN0X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDU1M3B4O1xcbn1cXG5cXG4uYWJvdXRfZmlyc3RfdGl0bGVfY29udGFpbmVye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XFxuICAgIGNvbG9yOiAjZWVlZmY0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNzlweDtcXG4gICAgdG9wOiA5NXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4uYWJvdXRfZmlyc3RfdGl0bGVfY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYWJvdXRfaW1hZ2VfY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTYxcHg7XFxufVxcblxcbi5hYm91dF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDY5MnB4O1xcbiAgICBoZWlnaHQ6IDUwM3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IC0xNTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFib3V0X3VwcGVyX3RpdGxlX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDIxN3B4O1xcbiAgICBsZWZ0OiAyMDBweDtcXG59XFxuXFxuLmFib3V0X2xvd2VyX3RpdGxlX3RleHR7XFxuICAgIHdpZHRoOiA0NDVweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY29sb3I6ICM2MDYzNmQ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNTBweDtcXG4gICAgbGVmdDogMjAwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5cXG4uYWJvdXRfbWlkZGxlX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDE2OXB4O1xcbn1cXG5cXG4uYWJvdXRfbWlkZGxlX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjFweDtcXG59XFxuLmFib3V0X21pZGRsZV91cHBlcl9jb250YWluZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgd2lkdGg6IDI2M3B4O1xcbn1cXG5cXG4uYWJvdXRfbWlkZGxlX2xvd2VyX2NvbnRhaW5lcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiAjNjA2MzZkO1xcbn1cXG5cXG4uYWJvdXRfbWlkZGxlX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDEyNHB4O1xcbn1cXG5cXG4uYWJvdXRfbGVhZGVyX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDE5MXB4O1xcbn1cXG5cXG4uYWJvdXRfbGVhZGVyX2NvbnRhaW5lcl90aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICBtYXJnaW4tbGVmdDogMTYxcHg7XFxuICAgIHdpZHRoOiAyNDlweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLmFib3V0X2xlYWRlcl9jb250YWluZXJfdGl0bGUgcHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcblxcbi5hYm91dF9sZWFkZXJfZ3JpZF9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHdpZHRoOiA3MzBweDtcXG4gICAgaGVpZ2h0OiA4NjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4NXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTg1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxufVxcblxcbi5hYm91dF91cHBlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmFib3V0X2xvd2VyX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWwtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0lBQ0kscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0EscURBQXFEO0FBQ3JEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNs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VUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6d2dodEA3MDAmZmFtaWx5PVNwYXJ0YW46d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6d2dodEA3MDAmZmFtaWx5PVNwYXJ0YW46d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbjpyb290e1xcbiAgICAtLWZvbnQtc3BhcnRhbjogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5odG1sLCBib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqIE5hdmJhciAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubmF2YmFyX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiAxMTRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdl9idXR0b25fY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogMThweDtcXG4gICAgd2lkdGg6IDUxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuXFxuLnBvcnRmb2xpb19hbmNob3IsIC5hYm91dF9hbmNob3IsIC5jb250YWN0X2FuY2hvcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICM3ZDgyOGY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhlYWRlcl9pbWFnZV9jb250YWluZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlcl9kZXNjcmlwdGlvbl9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyOThweDtcXG4gICAgbGVmdDogMzU3cHg7XFxufVxcblxcbi51cHBlcl9jb250YWluZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5oZWFkZXJfdGl0bGVfdXBwZXIsIC5oZWFkZXJfdGl0bGVfbG93ZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5oZWFkZXJfcGFyYWdyYXBoX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDQxMnB4O1xcbn1cXG5cXG4uaGVhZGVyX2xvd2VyX3BhcmFncmFwaHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaGVhZGVyX3BvcnRmb2xpb19jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MDBweDtcXG4gICAgbGVmdDogMzU3cHg7XFxuICAgIHdpZHRoOiAyNTJweDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDIzO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucG9ydGZvbGlvX2lubmVyX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAxMSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xcbn1cXG5cXG4uYm90dG9tX25hdmlnYXRpb25fYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTUycHg7XFxuICAgIGxlZnQ6IDg1cHg7XFxufVxcblxcbi5ib3R0b21fb25lX2J0biwgLmJvdHRvbV90d29fYnRuLCAuYm90dG9tX3RocmVlX2J0biwgLmJvdHRvbV9mb3VyX2J0bntcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDMxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4ubWlkZGxlX3NlY3Rpb25fd3JhcHBlcntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNzVweDtcXG59XFxuXFxuLm1pZGRsZV9zZWN0aW9uX3RpdGxlX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDk2OHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTU5cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5taWRkbGVfc2VjdGlvbl90aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtNXB4O1xcbiAgICBjb2xvcjogI2VlZWZmNDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm1pZGRsZV9zZWN0aW9uX2Rlc2NyaXB0aW9uX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDQ0NnB4O1xcbiAgICBoZWlnaHQ6IDQ5M3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMzQ5cHg7XFxuICAgIG1hcmdpbi10b3A6IC00NHB4O1xcblxcbn1cXG4ubWlkZGxlX3NlY3Rpb25fZGVzY3JpcHRpb25fY29udGFpbmVyIDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ubWlkZGxlX3NlY3Rpb25fZGVzY3JpcHRpb257XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogIzYwNjM2ZDtcXG59XFxuXFxuLm1pZGRsZV9pbWFnZV9kZXNjcmlwdGlvbl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5taWRkbGVfaW1hZ2VfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEyM3B4O1xcbiAgICBsZWZ0OiAxMjJweDtcXG59XFxuXFxuLm1pZGRsZV9pbWFnZV9ib3R0b21fY29udGFpbmVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTYxcHg7XFxuICAgIG1hcmdpbi10b3A6IDY3cHg7XFxufVxcblxcbi5zbWFsbF90ZWFtX2JvdHRvbV9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNDA0cHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGxlZnQ6IDM0OXB4O1xcbn1cXG4uc21hbGxfdGVhbXNfdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5hYm91dF9ib3R0b21fYnV0dG9uX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDE4N3B4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIG1hcmdpbi10b3A6IDI5cHg7XFxufVxcbi5hYm91dF9ib3R0b21fYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjRweDtcXG4gICAgbGVmdDogMzNweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mZWF0dXJlX3dyYXBwZXJ7XFxuICAgIG1hcmdpbjogMTg2cHggMTU0cHggMHB4IDE1NHB4O1xcbn1cXG5cXG4uZmVhdHVyZV90b3BfdGl0bGVfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mZWF0dXJlX2xvZ29fY29udGFpbmVye1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZlYXR1cmVfbG9nb19jb250YWluZXIgcHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5zZWVfYWxsX2J0bl9jb250YWluZXJ7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDE2OXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDIzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnNlZV9hbGxfYnRuX2NvbnRhaW5lciBwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMjBweDtcXG59XFxuXFxuLmZlYXR1cmVfbWFpbl9pbWFnZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNzJweDtcXG59XFxuXFxuLmZpcnN0X2ZlYXR1cmVfaW1hZ2VfY29udGFpbmVyLCAuc2Vjb25kX2ZlYXR1cmVfaW1hZ2VfY29udGFpbmVyLCAudGhpcmRfZmVhdHVyZV9pbWFnZV9jb250YWluZXJ7XFxuICAgIGhlaWdodDogNTYwcHg7XFxufVxcblxcbi5mZWF0dXJlX251bWJlcl9pbWFnZV9vbmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNTQzcHg7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGxlZnQ6IDI4M3B4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDg2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZmVhdHVyZV9udW1iZXJfaW1hZ2VfdHdve1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTU0M3B4O1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBsZWZ0OiAyMTdweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMzNweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mZWF0dXJlX251bWJlcl9pbWFnZV90aHJlZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC01NDNweDtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbGVmdDogMjMycHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTMzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZmlyc3RfaW1hZ2VfbG93ZXJfZGVzY3JpcHRpb24sIC5zZWNvbmRfaW1hZ2VfbG93ZXJfZGVzY3JpcHRpb24sIC50aGlyZF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zNDRweDtcXG4gICAgbGVmdDogNTdweDtcXG59XFxuXFxuLnVwcGVyX2ZpcnN0X2ZlYXR1cmVfdGV4dCwgLnVwcGVyX3NlY29uZF9mZWF0dXJlX3RleHQsIC51cHBlcl90aGlyZF9mZWF0dXJlX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubG93ZXJfZmlyc3RfZmVhdHVyZV90ZXh0LCAubG93ZXJfc2Vjb25kX2ZlYXR1cmVfdGV4dCwgLmxvd2VyX3RoaXJkX2ZlYXR1cmVfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhvbWVfZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm90dG9tX2J1dHRvbl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtOHB4O1xcbiAgICBsZWZ0OiAxNTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWZmNDtcXG59XFxuXFxuLmZvb3Rlcl9hcmNoX2NvbnRhaW5lciwgLmZvb3Rlcl9wb3J0Zm9saW9fY29udGFpbmVyLCAuZm9vdGVyX2Fib3V0X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4uZm9vdGVyX3BvcnRmb2xpb19idXR0b24sIC5mb290ZXJfYWJvdXRfYnV0dG9uLCAuZm9vdGVyX2NvbnRhY3RfYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNzlweDtcXG4gICAgbGVmdDogNjlweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICM3ZDgyOGY7XFxufVxcblxcbi5mb290ZXJfYXJjaF9jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxufVxcbi5mb290ZXJfYXJjaF9jb250YWluZXIgaW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNzRweDtcXG4gICAgbGVmdDogNDZweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSg3NDkzJSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi5mb290ZXJfY29udGFjdF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzODRweDtcXG59XFxuXFxuLmZvb3Rlcl9zZWVfcG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXJ7XFxuICAgIHdpZHRoOiAyNTJweDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDIzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMDE4cHg7XFxuICAgIHRvcDogMjA1cHg7XFxuICAgIFxcbn1cXG4uZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9ue1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmZvb3Rlcl9zZWVfcG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMzFweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgzJSkgc2F0dXJhdGUoNzMxJSkgaHVlLXJvdGF0ZSgyOThkZWcpIGJyaWdodG5lc3MoMTE2JSkgY29udHJhc3QoMTAwJSk7XFxufVxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqIFBvcnRmb2xpbyBQYWdlICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucGFuZWxfaG9sZGVyX2dyaWRfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiA0NnB4O1xcbn1cXG5cXG4uY29udGVudF9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTExcHg7XFxuICAgIGxlZnQ6IDQ1cHg7XFxufVxcbi5wb3J0Zm9saW9fdXBwZXJfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5wb3J0Zm9saW9fbG93ZXJfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuXFxuXFxuLnBvcnRmb2xpb19jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiA1NjBweDtcXG59XFxuXFxuLnBvcnRmb2xpb19vbmVfY29udGFpbmVyLCAucG9ydGZvbGlvX2ZvdXJfY29udGFpbmVyLFxcbi5wb3J0Zm9saW9fc2V2ZW5fY29udGFpbmVyLCAucG9ydGZvbGlvX3Rlbl9jb250YWluZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjFweDtcXG59XFxuXFxuLnBvcnRmb2xpb190aHJlZV9jb250YWluZXIsIC5wb3J0Zm9saW9fc2l4X2NvbnRhaW5lcixcXG4ucG9ydGZvbGlvX25pbmVfY29udGFpbmVyLCAucG9ydGZvbGlvX3R3ZWx2ZV9jb250YWluZXJ7XFxuICAgIG1hcmdpbi1yaWdodDogMTYxcHg7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKkFib3V0IFBhZ2UgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uYWJvdXRfaGVhZGVyX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hYm91dF9maXJzdF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA1NTNweDtcXG59XFxuXFxuLmFib3V0X2ZpcnN0X3RpdGxlX2NvbnRhaW5lcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtNXB4O1xcbiAgICBjb2xvcjogI2VlZWZmNDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMTc5cHg7XFxuICAgIHRvcDogOTVweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLmFib3V0X2ZpcnN0X3RpdGxlX2NvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFib3V0X2ltYWdlX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDE2MXB4O1xcbn1cXG5cXG4uYWJvdXRfY29udGVudF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA2OTJweDtcXG4gICAgaGVpZ2h0OiA1MDNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiAtMTU1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5hYm91dF91cHBlcl90aXRsZV90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgY29sb3I6ICMxYjFkMjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyMTdweDtcXG4gICAgbGVmdDogMjAwcHg7XFxufVxcblxcbi5hYm91dF9sb3dlcl90aXRsZV90ZXh0e1xcbiAgICB3aWR0aDogNDQ1cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGNvbG9yOiAjNjA2MzZkO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUwcHg7XFxuICAgIGxlZnQ6IDIwMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuXFxuXFxuLmFib3V0X21pZGRsZV93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxNjlweDtcXG59XFxuXFxuLmFib3V0X21pZGRsZV9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTYxcHg7XFxufVxcbi5hYm91dF9taWRkbGVfdXBwZXJfY29udGFpbmVye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgY29sb3I6ICMxYjFkMjM7XFxuICAgIHdpZHRoOiAyNjNweDtcXG59XFxuXFxuLmFib3V0X21pZGRsZV9sb3dlcl9jb250YWluZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogIzYwNjM2ZDtcXG59XFxuXFxuLmFib3V0X21pZGRsZV9pbWFnZV9jb250YWluZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMjRweDtcXG59XFxuXFxuLmFib3V0X2xlYWRlcl93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxOTFweDtcXG59XFxuXFxuLmFib3V0X2xlYWRlcl9jb250YWluZXJfdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgbWFyZ2luLWxlZnQ6IDE2MXB4O1xcbiAgICB3aWR0aDogMjQ5cHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcbi5hYm91dF9sZWFkZXJfY29udGFpbmVyX3RpdGxlIHB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5cXG4uYWJvdXRfbGVhZGVyX2dyaWRfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB3aWR0aDogNzMwcHg7XFxuICAgIGhlaWdodDogODYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxODVweDtcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4NXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXRfdXBwZXJfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICMxYjFkMjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5hYm91dF9sb3dlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vZ2xvYmFsLXN0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5cbmltcG9ydCBjb21wdXRlckltYWdlIGZyb20gJy4uL2Fzc2V0cy9hYm91dC9kZXNrdG9wL2ltYWdlLWhlcm8uanBnJztcbmltcG9ydCBtaWRkbGVMb2dvIGZyb20gJy4uL2Fzc2V0cy9hYm91dC9kZXNrdG9wL2ltYWdlLWhlcml0YWdlLmpwZyc7XG5pbXBvcnQgamFrZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2Fib3V0L2Rlc2t0b3AvYXZhdGFyLWpha2UuanBnJztcbmltcG9ydCBzbWl0aExvZ28gZnJvbSAnLi4vYXNzZXRzL2Fib3V0L2Rlc2t0b3AvYXZhdGFyLXRob21wc29uLmpwZyc7XG5pbXBvcnQgamFja3NvbkxvZ28gZnJvbSAnLi4vYXNzZXRzL2Fib3V0L2Rlc2t0b3AvYXZhdGFyLWphY2tzb24uanBnJztcbmltcG9ydCBzaW1wc29uTG9nbyBmcm9tICcuLi9hc3NldHMvYWJvdXQvZGVza3RvcC9hdmF0YXItbWFyaWEuanBnJztcblxuXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGNvbnN0IGFib3V0V3JhcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dFdyYXBlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfd3JhcHBlclwiKTtcblxuICAgIHJldHVybiBhYm91dFdyYXBlcjtcbn1cblxuZnVuY3Rpb24gYWJvdXRIZWFkZXIoKXtcblxuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFib3V0X2hlYWRlcl93cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dF9pbWFnZV9jb250YWluZXJcIik7XG5cbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IGNvbXB1dGVySW1hZ2U7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGltYWdlKTtcblxuXG4gICAgbGV0IGZpcnN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaXJzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfZmlyc3RfY29udGFpbmVyXCIpO1xuXG5cblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfZmlyc3RfdGl0bGVfY29udGFpbmVyXCIpO1xuICAgIGxldCBmaXJzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlyc3RUaXRsZS5pbm5lclRleHQgPSBcIkFib3V0XCI7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGZpcnN0VGl0bGUpO1xuXG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dF9jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICBsZXQgdXBwZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHVwcGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0X3VwcGVyX3RpdGxlX3RleHRcIik7XG4gICAgdXBwZXJUaXRsZS5pbm5lclRleHQgPSBcIllvdXIgdGVhbSBvZiBwcm9mZXNzaW9uYWxzXCI7XG4gICAgbGV0IGxvd2VyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvd2VyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfbG93ZXJfdGl0bGVfdGV4dFwiKTtcbiAgICBsb3dlclRleHQuaW5uZXJUZXh0ID0gXCJPdXIgc21hbGwgdGVhbSBvZiB3b3JsZC1jbGFzcyBwcm9mZXNzaW9uYWxzIHdpbGwgd29yayB3aXRoIHlvdSBldmVyeSBzdGVwIG9mIHRoZSB3YXkuIFN0cm9uZyByZWxhdGlvbnNoaXBzIGFyZSBhdCB0aGUgY29yZSBvZiBldmVyeXRoaW5nIHdlIGRvLiBUaGlzIGV4dGVuZHMgdG8gdGhlIHJlbGF0aW9uc2hpcCBvdXIgcHJvamVjdHMgaGF2ZSB3aXRoIHRoZWlyIHN1cnJvdW5kaW5ncy5cIjtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh1cHBlclRpdGxlLCBsb3dlclRleHQpO1xuXG4gICAgZmlyc3RDb250YWluZXIuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcblxuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKGltYWdlQ29udGFpbmVyLCBmaXJzdENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gYWJvdXRIZXJpdGFnZSgpe1xuICAgIGNvbnN0IG1pZGRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pZGRsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFib3V0X21pZGRsZV93cmFwcGVyXCIpO1xuXG4gICAgbGV0IG1pZGRsZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pZGRsZUNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0X21pZGRsZV9jb250ZW50X2NvbnRhaW5lclwiKTtcblxuICAgIGxldCB1cHBlck1pZGRsZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVwcGVyTWlkZGxlQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfbWlkZGxlX3VwcGVyX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgYWJvdXRNaWRkbGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFib3V0TWlkZGxlVGl0bGUuaW5uZXJUZXh0ID0gXCJPdXIgSGVyaXRhZ2VcIjtcbiAgICB1cHBlck1pZGRsZUNvbnRlbnRDb250YWluZXIuYXBwZW5kKGFib3V0TWlkZGxlVGl0bGUpO1xuXG5cblxuICAgIGxldCBsb3dlck1pZGRsZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvd2VyTWlkZGxlQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfbWlkZGxlX2xvd2VyX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgbWlkZGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1pZGRsZUNvbnRlbnQuaW5uZXJUZXh0ID0gXCJGb3VuZGVkIGluIDIwMDcsIHdlIHN0YXJ0ZWQgYXMgYSB0cmlvIG9mIGFyY2hpdGVjdHMuIE91ciBjb21wbGltZW50YXJ5IHNraWxscyBhbmQgcmVsZW50bGVzcyBhdHRlbnRpb24gdG8gZGV0YWlsIHR1cm5lZCBBcmNoIGludG8gb25lIG9mIHRoZSBtb3N0IHNvdWdodCBhZnRlciBib3V0aXF1ZSBmaXJtcyBpbiB0aGUgY291bnRyeS4gU3BlY2lsaWF6aW5nIGluIFVyYmFuIERlc2lnbiBhbGxvd2VkIHVzIHRvIGZvY3VzIG9uIGNyZWF0aW5nIGV4Y2VwdGlvbmFsIHN0cnVjdHVyZXMgdGhhdCBsaXZlIGluIGhhcm1vbnkgd2l0aCB0aGVpciBzdXJyb3VuZGluZ3MuIFdlIGNvbnNpZGVyIGV2ZXJ5IGRldGFpbCBmcm9tIGV2ZXJ5IHN1cnJvdW5kaW5nIGVsZW1lbnQgdG8gaW5mb3JtIG91ciBkZXNpZ25zLiBPdXIgc21hbGwgdGVhbSBvZiB3b3JsZC1jbGFzcyBwcm9mZXNzaW9uYWxzIHByb3ZpZGVzIGlucHV0IG9uIGV2ZXJ5IHByb2plY3QuXCI7XG4gICAgbG93ZXJNaWRkbGVDb250ZW50Q29udGFpbmVyLmFwcGVuZChtaWRkbGVDb250ZW50KTtcblxuXG4gICAgbGV0IG1pZGRsZUltYWdlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWlkZGxlSW1hZ2VDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dF9taWRkbGVfaW1hZ2VfY29udGFpbmVyXCIpO1xuICAgIGxldCBtaWRkbGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWlkZGxlSW1hZ2Uuc3JjID0gbWlkZGxlTG9nbztcbiAgICBtaWRkbGVJbWFnZUNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1pZGRsZUltYWdlKTtcblxuXG4gICAgbWlkZGxlQ29udGVudENvbnRhaW5lci5hcHBlbmQodXBwZXJNaWRkbGVDb250ZW50Q29udGFpbmVyLCBsb3dlck1pZGRsZUNvbnRlbnRDb250YWluZXIpO1xuICAgIG1pZGRsZVdyYXBwZXIuYXBwZW5kKG1pZGRsZUNvbnRlbnRDb250YWluZXIsIG1pZGRsZUltYWdlQ29udGVudENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbWlkZGxlV3JhcHBlcjtcblxufVxuXG5mdW5jdGlvbiBhYm91dExlYWRlcnMoKXtcbiAgICBjb25zdCBhYm91dExlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0TGVhZGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfbGVhZGVyX3dyYXBwZXJcIik7XG5cbiAgICBjb25zdCBsZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0X2xlYWRlcl9jb250YWluZXJfdGl0bGVcIik7XG4gICAgbGV0IHRoZUxlYWRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aGVMZWFkZXJzLmlubmVyVGV4dCA9IFwiVGhlIExlYWRlcnNcIjtcbiAgICBsZWFkZXJUaXRsZS5hcHBlbmQodGhlTGVhZGVycyk7XG5cbiAgICBjb25zdCBsZWFkZXJHcmlkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlYWRlckdyaWRJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfbGVhZGVyX2dyaWRfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGZpcnN0SW1hZ2UgPSBhYm91dEltYWdlUGFuZWxzKFwiYWJvdXRfbGVhZGVyX2NvbnRhaW5lclwiLCBcImpha2VfcmljaGFyZHNfaW1hZ2VcIiwgamFrZUxvZ28sIFwiYWJvdXRfY29udGVudF9jb250YWluZXJfamFrZVwiLCBcIkpha2UgUmljaGFyZHNcIiwgXCJDaGllZiBBcmNoaXRlY3RcIik7XG4gICAgbGV0IHNlY29uZEltYWdlID0gYWJvdXRJbWFnZVBhbmVscyhcImFib3V0X2xlYWRlcl9jb250YWluZXJcIiwgXCJ0aG9tYXNfaW1hZ2VcIiwgc21pdGhMb2dvLCBcImFib3V0X2NvbnRlbnRfY29udGFpbmVyX3NtaXRoXCIsIFwiVGhvbXBzb24gU21pdGhcIiwgXCJIZWFkIG9mIEZpbmFuY2VcIik7XG4gICAgbGV0IHRoaXJkSW1hZ2UgPSBhYm91dEltYWdlUGFuZWxzKFwiYWJvdXRfbGVhZGVyX2NvbnRhaW5lclwiLCBcImphY2tzb25faW1hZ2VcIiwgamFja3NvbkxvZ28sIFwiYWJvdXRfY29udGVudF9jb250YWluZXJfamFja3NvblwiLCBcIkphY2tzb24gUm91cmtlXCIsIFwiTGVhZCBEZXNpZ25lclwiKTtcbiAgICBsZXQgZm91cnRoSW1hZ2UgPSBhYm91dEltYWdlUGFuZWxzKFwiYWJvdXRfbGVhZGVyX2NvbnRhaW5lclwiLCBcInNpbXBzb25faW1hZ2VcIiwgc2ltcHNvbkxvZ28sIFwiYWJvdXRfY29udGVudF9jb250YWluZXJfc2ltcHNvblwiLCBcIk1hcmlhIFNpbXBzb25cIiwgXCJTZW5pb3IgQXJjaGl0ZWN0XCIpO1xuXG5cbiAgICBsZWFkZXJHcmlkSW1hZ2UuYXBwZW5kKGZpcnN0SW1hZ2UsIHNlY29uZEltYWdlLCB0aGlyZEltYWdlLCBmb3VydGhJbWFnZSk7XG5cbiAgICBhYm91dExlYWRlcldyYXBwZXIuYXBwZW5kKGxlYWRlclRpdGxlLCBsZWFkZXJHcmlkSW1hZ2UpO1xuICAgIHJldHVybiBhYm91dExlYWRlcldyYXBwZXI7XG5cbn1cblxuZnVuY3Rpb24gYWJvdXRJbWFnZVBhbmVscyhjb250YWluZXJOYW1lLCBpbWFnZU5hbWUsIGltYWdlU291cmNlLCBjb250ZW50Q29udGFpbmVyTmFtZSwgdXBwZXIsIGxvd2VyKXtcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0X2NvbnRhaW5lclwiKTtcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lck5hbWUpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoaW1hZ2VOYW1lKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZVxuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnRlbnRDb250YWluZXJOYW1lKTtcblxuICAgIGNvbnN0IHVwcGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHVwcGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRfdXBwZXJfdGV4dFwiKTtcbiAgICB1cHBlclRleHQuaW5uZXJUZXh0ID0gdXBwZXI7XG4gICAgY29uc3QgbG93ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG93ZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJhYm91dF9sb3dlcl90ZXh0XCIpO1xuICAgIGxvd2VyVGV4dC5pbm5lclRleHQgPSBsb3dlcjtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHVwcGVyVGV4dCwgbG93ZXJUZXh0KTtcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSwgY29udGVudENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaW1hZ2VDb250YWluZXI7XG59XG5cblxuXG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpe1xuICAgIGNvbnN0IGdldEFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dF9wYWdlXCIpO1xuICAgIGNvbnN0IG5hdkJhciA9IGNyZWF0ZU5hdmJhcigpO1xuICAgIGNvbnN0IG5ld0Fib3V0ID0gY3JlYXRlQWJvdXQoKTtcbiAgICBjb25zdCBuZXdIZWFkZXIgPSBhYm91dEhlYWRlcigpO1xuICAgIGNvbnN0IG5ld01pZGRsZSA9IGFib3V0SGVyaXRhZ2UoKTtcbiAgICBjb25zdCBuZXdMZWFkZXIgPSBhYm91dExlYWRlcnMoKTtcbiAgICBjb25zdCBuZXdGb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICAgIG5ld0Fib3V0LmFwcGVuZChuYXZCYXIsIG5ld0hlYWRlciwgbmV3TWlkZGxlLCBuZXdMZWFkZXIsIG5ld0Zvb3Rlcik7XG5cbiAgICBnZXRBYm91dC5hcHBlbmQobmV3QWJvdXQpO1xufVxuXG5sb2FkQWJvdXQoKTtcbiJdLCJuYW1lcyI6WyJhcmNoTG9nbyIsImFycm93TG9nbyIsImNyZWF0ZUZvb3RlciIsImZvb3RlcldyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb290ZXJDb250YWluZXIiLCJib3R0b21Mb2dvQ29udGFpbmVyIiwiYXJjaExvZ29JbWciLCJzcmMiLCJhcHBlbmQiLCJib3R0b21CdG5Db250YWluZXIiLCJwb3J0Zm9saW9Db250YWluZXIiLCJwb3J0Zm9saW9CdG4iLCJpbm5lclRleHQiLCJhYm91dENvbnRhaW5lciIsImFib3V0QnRuIiwiY29udGFjdENvbnRhaW5lciIsImNvbnRhY3RCdG4iLCJzZWVQb3J0Zm9saW9CdG5Db250YWluZXIiLCJzZWV0UG9ydGZvbGlvQnRuIiwiYXJyb3ciLCJuYXZMb2dvIiwiY3JlYXRlTmF2YmFyIiwibmF2YmFyV3JhcHBlciIsIm5hdkxvZ29Db250YWluZXIiLCJsb2dvIiwibmF2QnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uT25lIiwiY3JlYXRlQnV0dG9uIiwiYnV0dG9uVHdvIiwiYnV0dG9uVGhyZWUiLCJhbmNob3JOYW1lIiwiaW5uZXJCdXR0b24iLCJhbmNob3JTb3VyY2UiLCJhbmNob3IiLCJocmVmIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsImNvbXB1dGVySW1hZ2UiLCJtaWRkbGVMb2dvIiwiamFrZUxvZ28iLCJzbWl0aExvZ28iLCJqYWNrc29uTG9nbyIsInNpbXBzb25Mb2dvIiwiY3JlYXRlQWJvdXQiLCJhYm91dFdyYXBlciIsImFib3V0SGVhZGVyIiwiaGVhZGVyV3JhcHBlciIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2UiLCJmaXJzdENvbnRhaW5lciIsInRpdGxlQ29udGFpbmVyIiwiZmlyc3RUaXRsZSIsImNvbnRlbnRDb250YWluZXIiLCJ1cHBlclRpdGxlIiwibG93ZXJUZXh0IiwiYWJvdXRIZXJpdGFnZSIsIm1pZGRsZVdyYXBwZXIiLCJtaWRkbGVDb250ZW50Q29udGFpbmVyIiwidXBwZXJNaWRkbGVDb250ZW50Q29udGFpbmVyIiwiYWJvdXRNaWRkbGVUaXRsZSIsImxvd2VyTWlkZGxlQ29udGVudENvbnRhaW5lciIsIm1pZGRsZUNvbnRlbnQiLCJtaWRkbGVJbWFnZUNvbnRlbnRDb250YWluZXIiLCJtaWRkbGVJbWFnZSIsImFib3V0TGVhZGVycyIsImFib3V0TGVhZGVyV3JhcHBlciIsImxlYWRlclRpdGxlIiwidGhlTGVhZGVycyIsImxlYWRlckdyaWRJbWFnZSIsImZpcnN0SW1hZ2UiLCJhYm91dEltYWdlUGFuZWxzIiwic2Vjb25kSW1hZ2UiLCJ0aGlyZEltYWdlIiwiZm91cnRoSW1hZ2UiLCJjb250YWluZXJOYW1lIiwiaW1hZ2VOYW1lIiwiaW1hZ2VTb3VyY2UiLCJjb250ZW50Q29udGFpbmVyTmFtZSIsInVwcGVyIiwibG93ZXIiLCJ1cHBlclRleHQiLCJsb2FkQWJvdXQiLCJnZXRBYm91dCIsImdldEVsZW1lbnRCeUlkIiwibmF2QmFyIiwibmV3QWJvdXQiLCJuZXdIZWFkZXIiLCJuZXdNaWRkbGUiLCJuZXdMZWFkZXIiLCJuZXdGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9