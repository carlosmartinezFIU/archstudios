/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/feature.js":
/*!***********************************!*\
  !*** ./src/components/feature.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFeature": () => (/* binding */ createFeature)
/* harmony export */ });
/* harmony import */ var _assets_portfolio_desktop_image_del_sol_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/portfolio/desktop/image-del-sol.jpg */ "./src/assets/portfolio/desktop/image-del-sol.jpg");
/* harmony import */ var _assets_portfolio_desktop_image_228b_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/portfolio/desktop/image-228b.jpg */ "./src/assets/portfolio/desktop/image-228b.jpg");
/* harmony import */ var _assets_portfolio_desktop_image_prototype_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/portfolio/desktop/image-prototype.jpg */ "./src/assets/portfolio/desktop/image-prototype.jpg");



function createFeature() {
  var featureWrapper = document.createElement("div");
  featureWrapper.classList.add("feature_wrapper");
  var topFeatureContainer = document.createElement('div');
  topFeatureContainer.classList.add("feature_top_title_container");
  var featureLogoContainer = document.createElement("div");
  featureLogoContainer.classList.add("feature_logo_container");
  var featureLogo = document.createElement("p");
  featureLogo.innerText = "Featured";
  var seeAllBtnContainer = document.createElement("div");
  seeAllBtnContainer.classList.add("see_all_btn_container");
  var seeAllBtn = document.createElement("p");
  seeAllBtn.innerText = "See All";
  seeAllBtnContainer.append(seeAllBtn);
  featureLogoContainer.append(featureLogo);
  topFeatureContainer.append(featureLogoContainer, seeAllBtnContainer);
  var mainImageContainer = document.createElement("div");
  mainImageContainer.classList.add("feature_main_image_container");
  var firstImageContainer = document.createElement("div");
  firstImageContainer.classList.add("first_feature_image_container");
  var oneNumber = document.createElement("p");
  oneNumber.classList.add("feature_number_image_one");
  oneNumber.innerText = "1";
  var featureDescriptionContainerOne = document.createElement("div");
  featureDescriptionContainerOne.classList.add("first_image_lower_description");
  var upperfirstDescription = document.createElement("p");
  upperfirstDescription.classList.add("upper_first_feature_text");
  upperfirstDescription.innerText = "Project Del Sol";
  var lowerfirstDescription = document.createElement("p");
  lowerfirstDescription.classList.add("lower_first_feature_text");
  lowerfirstDescription.innerText = "View All Projects";
  featureDescriptionContainerOne.append(upperfirstDescription, lowerfirstDescription);
  var imageOne = document.createElement("img");
  imageOne.classList.add("feature_image_one");
  imageOne.src = _assets_portfolio_desktop_image_del_sol_jpg__WEBPACK_IMPORTED_MODULE_0__;
  firstImageContainer.append(imageOne, oneNumber, featureDescriptionContainerOne);
  var secondImageContainer = document.createElement("div");
  secondImageContainer.classList.add("second_feature_image_container");
  var twoNumber = document.createElement("p");
  twoNumber.classList.add("feature_number_image_two");
  twoNumber.innerText = "2";
  var featureDescriptionContainerTwo = document.createElement("div");
  featureDescriptionContainerTwo.classList.add("second_image_lower_description");
  var uppersecondDescription = document.createElement("p");
  uppersecondDescription.classList.add("upper_first_feature_text");
  uppersecondDescription.innerText = "228B Tower";
  var lowersecondDescription = document.createElement("p");
  lowersecondDescription.classList.add("lower_first_feature_text");
  lowersecondDescription.innerText = "View All Projects";
  featureDescriptionContainerTwo.append(uppersecondDescription, lowersecondDescription);
  var imageTwo = document.createElement("img");
  imageTwo.classList.add("feature_image_two");
  imageTwo.src = _assets_portfolio_desktop_image_228b_jpg__WEBPACK_IMPORTED_MODULE_1__;
  secondImageContainer.append(imageTwo, twoNumber, featureDescriptionContainerTwo);
  var thirdImageContainer = document.createElement("div");
  thirdImageContainer.classList.add("third_feature_image_container");
  var threeNumber = document.createElement("p");
  threeNumber.classList.add("feature_number_image_three");
  threeNumber.innerText = "3";
  var featureDescriptionContainerThree = document.createElement("div");
  featureDescriptionContainerThree.classList.add("third_image_lower_description");
  var upperthirdDescription = document.createElement("p");
  upperthirdDescription.classList.add("upper_first_feature_text");
  upperthirdDescription.innerText = "Le Prototype";
  var lowerthirdDescription = document.createElement("p");
  lowerthirdDescription.classList.add("lower_first_feature_text");
  lowerthirdDescription.innerText = "View All Projects";
  featureDescriptionContainerThree.append(upperthirdDescription, lowerthirdDescription);
  var imageThree = document.createElement("img");
  imageThree.classList.add("feature_image_three");
  imageThree.src = _assets_portfolio_desktop_image_prototype_jpg__WEBPACK_IMPORTED_MODULE_2__;
  thirdImageContainer.append(imageThree, threeNumber, featureDescriptionContainerThree);
  mainImageContainer.append(firstImageContainer, secondImageContainer, thirdImageContainer);
  featureWrapper.append(topFeatureContainer, mainImageContainer);
  return featureWrapper;
}

/***/ }),

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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _assets_home_desktop_image_hero_paramour_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home/desktop/image-hero-paramour.jpg */ "./src/assets/home/desktop/image-hero-paramour.jpg");

function createHeader() {
  var headerWrapper = document.createElement("div");
  headerWrapper.classList.add("header_wrapper");
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("header_image_container");
  var image = document.createElement("img");
  image.src = _assets_home_desktop_image_hero_paramour_jpg__WEBPACK_IMPORTED_MODULE_0__;
  imageContainer.append(image);
  var descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("header_description_container");
  var upperContainer = document.createElement("div");
  upperContainer.classList.add("upper_container");
  var titleUpper = document.createElement("p");
  titleUpper.classList.add("header_title_upper");
  titleUpper.innerText = "Project";
  var titleLower = document.createElement("p");
  titleLower.classList.add("header_title_lower");
  titleLower.innerText = "Paramour";
  upperContainer.append(titleUpper, titleLower);
  var paragrapghContainer = document.createElement("div");
  paragrapghContainer.classList.add("header_paragraph_container");
  var lowerParagraph = document.createElement("p");
  lowerParagraph.classList.add("header_lower_paragraph");
  lowerParagraph.innerText = "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.";
  paragrapghContainer.append(lowerParagraph);
  /*********************/

  descriptionContainer.append(upperContainer, paragrapghContainer);
  /***************** */

  var portfolioContainer = document.createElement("div");
  portfolioContainer.classList.add("header_portfolio_container");
  var innerPortfolio = document.createElement("p");
  innerPortfolio.classList.add("portfolio_inner_text");
  innerPortfolio.innerText = "See Our Portfolio";
  portfolioContainer.append(innerPortfolio);
  var bottomNavigation = document.createElement("div");
  bottomNavigation.classList.add("bottom_navigation_bar");
  var buttonOne = document.createElement("p");
  buttonOne.classList.add("bottom_one_btn");
  buttonOne.innerText = "01";
  var buttonTwo = document.createElement("p");
  buttonTwo.classList.add("bottom_two_btn");
  buttonTwo.innerText = "02";
  var buttonThree = document.createElement("p");
  buttonThree.classList.add("bottom_three_btn");
  buttonThree.innerText = "03";
  var buttonFour = document.createElement("p");
  buttonFour.classList.add("bottom_four_btn");
  buttonFour.innerText = "04";
  bottomNavigation.append(buttonOne, buttonTwo, buttonThree, buttonFour);
  headerWrapper.append(imageContainer, descriptionContainer, portfolioContainer, bottomNavigation);
  return headerWrapper;
}

/***/ }),

/***/ "./src/components/midsection.js":
/*!**************************************!*\
  !*** ./src/components/midsection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "midSection": () => (/* binding */ midSection)
/* harmony export */ });
/* harmony import */ var _assets_home_desktop_image_welcome_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home/desktop/image-welcome.jpg */ "./src/assets/home/desktop/image-welcome.jpg");
/* harmony import */ var _assets_home_desktop_image_small_team_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/home/desktop/image-small-team.jpg */ "./src/assets/home/desktop/image-small-team.jpg");


function midSection() {
  var middleWrapper = document.createElement("div");
  middleWrapper.classList.add("middle_section_wrapper");
  var middleContainer = document.createElement("div");
  middleContainer.classList.add("middle_section_title_container");
  var middleTitle = document.createElement("p");
  middleTitle.classList.add("middle_section_title");
  middleTitle.innerText = "Welcome";
  middleContainer.append(middleTitle);
  var middleDescriptionImageWrapper = document.createElement("div");
  middleDescriptionImageWrapper.classList.add("middle_image_description_container");
  var contentContainer = document.createElement("div");
  contentContainer.classList.add("middle_section_description_container");
  var descriptionTitle = document.createElement("p");
  descriptionTitle.innerText = "Welcome to Arch Studio";
  var middleDescription = document.createElement("p");
  middleDescription.classList.add("middle_section_description");
  middleDescription.innerText = "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results. Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight. We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.";
  contentContainer.append(descriptionTitle, middleDescription);
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("middle_image_container");
  var image = document.createElement("img");
  image.src = _assets_home_desktop_image_welcome_jpg__WEBPACK_IMPORTED_MODULE_0__;
  imageContainer.append(image);
  var imageContainerBottom = document.createElement("div");
  imageContainerBottom.classList.add("middle_image_bottom_container");
  var imageTwo = document.createElement("img");
  imageTwo.src = _assets_home_desktop_image_small_team_jpg__WEBPACK_IMPORTED_MODULE_1__;
  var smallTeamsContainer = document.createElement("div");
  smallTeamsContainer.classList.add("small_team_bottom_container");
  var smallTeamsTitle = document.createElement("p");
  smallTeamsTitle.classList.add("small_teams_title");
  smallTeamsTitle.innerText = "Small team, big ideas";
  var aboutBottomBtnContainer = document.createElement("div");
  aboutBottomBtnContainer.classList.add("about_bottom_button_container");
  var aboutBottomBtn = document.createElement("p");
  aboutBottomBtn.classList.add("about_bottom_button");
  aboutBottomBtn.innerText = "About us";
  aboutBottomBtnContainer.append(aboutBottomBtn);
  smallTeamsContainer.append(smallTeamsTitle, aboutBottomBtnContainer);
  imageContainerBottom.append(imageTwo, smallTeamsContainer);
  middleDescriptionImageWrapper.append(contentContainer, imageContainer);
  middleWrapper.append(middleContainer, middleDescriptionImageWrapper, imageContainerBottom);
  return middleWrapper;
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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-spartan: 'Spartan', sans-serif;\n}\n\n\nhtml, body{\n    margin: 0px;\n    padding: 0px;\n}\n/****************** Navbar **************************/\n.navbar_wrapper{\n    display: flex;\n    flex-direction: row;\n    width: 1000px;\n    margin: auto;\n    height: 114px;\n    align-items: center;\n}\n\n.nav_button_container{\n    display: flex;\n    margin-left: 18px;\n    width: 515px;\n    justify-content: space-evenly;\n}\n\n\n.portfolio_anchor, .about_anchor, .contact_anchor{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #7d828f;\n    font-weight: 700;\n    text-decoration: none;\n}\n\n.header_image_container{\n    text-align: center;\n}\n\n.header_description_container{\n    position: absolute;\n    top: 298px;\n    left: 357px;\n}\n\n.upper_container{\n    font-weight: 700;\n}\n.header_title_upper, .header_title_lower{\n    font-family: var(--font-spartan);\n    font-size: 80px;\n    letter-spacing: -2px;\n    color: #fff;\n    margin: 0px;\n}\n\n.header_paragraph_container{\n    width: 412px;\n}\n\n.header_lower_paragraph{\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 500;\n}\n\n.header_portfolio_container{\n    position: absolute;\n    top: 600px;\n    left: 357px;\n    width: 252px;\n    height: 72px;\n    background-color: #1b1d23;\n    font-weight: 700;\n}\n\n.portfolio_inner_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #fff;\n    margin-top: 11%;\n    margin-left: 36px;\n}\n\n.bottom_navigation_bar{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 320px;\n    height: 80px;\n    position: absolute;\n    bottom: -52px;\n    left: 85px;\n}\n\n.bottom_one_btn, .bottom_two_btn, .bottom_three_btn, .bottom_four_btn{\n    width: 80px;\n    height: 80px;\n    margin: 0px;\n    padding: 31px;\n    background-color: #fff;\n    border: 1px black solid;\n}\n\n.middle_section_wrapper{\n    height: auto;\n    width: auto;\n    margin-top: 75px;\n}\n\n.middle_section_title_container{\n    width: 968px;\n    margin-top: 56px;\n    margin-left: 159px;\n    font-weight: 700;\n}\n.middle_section_title{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    margin: 0px;\n    position: relative;\n    z-index: 1;\n}\n\n.middle_section_description_container{\n    width: 446px;\n    height: 493px;\n    margin-left: 349px;\n    margin-top: -44px;\n\n}\n.middle_section_description_container :first-child{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.middle_section_description{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.middle_image_description_container{\n    display: flex;\n}\n\n.middle_image_container{\n    position: relative;\n    top: -123px;\n    left: 122px;\n}\n\n.middle_image_bottom_container{\n    text-align: center;\n    height: 561px;\n    margin-top: 67px;\n}\n\n.small_team_bottom_container{\n    position: relative;\n    top: -404px;\n    width: 350px;\n    text-align: start;\n    left: 349px;\n}\n.small_teams_title{\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.about_bottom_button_container{\n    width: 187px;\n    height: 72px;\n    background-color: #1b1d23;\n    margin-top: 29px;\n}\n.about_bottom_button{\n    position: relative;\n    top: 24px;\n    left: 33px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n}\n\n.feature_wrapper{\n    margin: 186px 154px 0px 154px;\n}\n\n.feature_top_title_container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.feature_logo_container{\n    font-size: 56px;\n    font-family: var(--font-spartan);\n    letter-spacing: -2px;\n    font-weight: 700;\n}\n.feature_logo_container p{\n    margin: 0px;\n}\n\n.see_all_btn_container{\n    height: auto;\n    width: 169px;\n    background-color: #1b1d23;\n    color: #fff;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n}\n.see_all_btn_container p{\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n.feature_main_image_container{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 72px;\n}\n\n.first_feature_image_container, .second_feature_image_container, .third_feature_image_container{\n    height: 560px;\n}\n\n.feature_number_image_one{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 283px;\n    margin: 0px;\n    width: 86px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_two{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 217px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_three{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 232px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n\n.first_image_lower_description, .second_image_lower_description, .third_image_lower_description{\n    position: relative;\n    top: -344px;\n    left: 57px;\n}\n\n.upper_first_feature_text, .upper_second_feature_text, .upper_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 18px;\n    color: #fff;\n}\n\n.lower_first_feature_text, .lower_second_feature_text, .lower_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n    opacity: 0.7;\n    font-weight: 500;\n}\n\n.home_footer_container{\n    height: 330px;\n    position: relative;\n}\n\n.bottom_button_container{\n    display: flex;\n    position: absolute;\n    bottom: -8px;\n    left: 154px;\n    background-color: #eeeff4;\n}\n\n.footer_arch_container, .footer_portfolio_container, .footer_about_container{\n    width: 200px;\n    height: 200px;\n}\n.footer_portfolio_button, .footer_about_button, .footer_contact_button{\n    position: relative;\n    top: 79px;\n    left: 69px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #7d828f;\n}\n\n.footer_arch_container{\n    background-color: #1b1d23;\n}\n.footer_arch_container img{\n    position: relative;\n    top: 74px;\n    left: 46px;\n    filter: invert(100%) sepia(12%) saturate(7493%) hue-rotate(179deg) brightness(103%) contrast(113%);\n}\n\n.footer_contact_container{\n    width: 384px;\n}\n\n.footer_see_portfolio_button_container{\n    width: 252px;\n    height: 72px;\n    display: flex;\n    background-color: #1b1d23;\n    color: #fff;\n    position: relative;\n    left: 1018px;\n    top: 205px;\n    \n}\n.footer_see_portfolio_button{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    margin-top: 27px;\n    margin-left: 20px;\n}\n\n.footer_see_portfolio_button_container img{\n    width: 24px;\n    height: 18px;\n    margin-top: 27px;\n    margin-left: 31px;\n    filter: invert(99%) sepia(3%) saturate(731%) hue-rotate(298deg) brightness(116%) contrast(100%);\n}\n\n\n\n/******************* Portfolio Page  ********************************/\n.panel_holder_grid_container{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    place-items: center;\n    row-gap: 46px;\n}\n\n.content_container{\n    position: relative;\n    top: -111px;\n    left: 45px;\n}\n.portfolio_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #fff;\n    font-weight: 700;\n}\n.portfolio_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    font-weight: 500;\n    color: #fff;\n    opacity: 0.7;\n}\n\n\n\n.portfolio_container{\n    width: 350px;\n    height: 560px;\n}\n\n.portfolio_one_container, .portfolio_four_container,\n.portfolio_seven_container, .portfolio_ten_container{\n    margin-left: 161px;\n}\n\n.portfolio_three_container, .portfolio_six_container,\n.portfolio_nine_container, .portfolio_twelve_container{\n    margin-right: 161px;\n}\n\n\n/***********************About Page    ****************************/\n.about_header_wrapper{\n    display: flex;\n}\n\n.about_first_container{\n    width: 553px;\n}\n\n.about_first_title_container{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    font-weight: 700;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    position: relative;\n    left: -179px;\n    top: 95px;\n    z-index: 1;\n}\n.about_first_title_container p{\n    margin: 0px;\n}\n\n.about_image_container{\n    margin-left: 161px;\n}\n\n.about_content_container{\n    width: 692px;\n    height: 503px;\n    position: relative;\n    top: -20px;\n    left: -155px;\n    background-color: #fff;\n}\n\n.about_upper_title_text{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    font-weight: 700;\n    width: 400px;\n    margin: 0px;\n    position: relative;\n    top: 217px;\n    left: 200px;\n}\n\n.about_lower_title_text{\n    width: 445px;\n    height: 100px;\n    color: #60636d;\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    position: relative;\n    top: 250px;\n    left: 200px;\n    line-height: 25px;\n}\n\n\n.about_middle_wrapper{\n    display: flex;\n    margin-top: 169px;\n}\n\n.about_middle_content_container{\n    width: 500px;\n    margin-left: 161px;\n}\n.about_middle_upper_container{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    width: 263px;\n}\n\n.about_middle_lower_container{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.about_middle_image_container{\n    margin-left: 124px;\n}\n\n.about_leader_wrapper{\n    display: flex;\n    margin-top: 191px;\n}\n\n.about_leader_container_title{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    margin-left: 161px;\n    width: 249px;\n    height: 200px;\n}\n.about_leader_container_title p{\n    margin: 0px;\n}\n\n\n.about_leader_grid_container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 730px;\n    height: 860px;\n    margin-left: 185px;\n    column-gap: 30px;\n    margin-left: 185px;\n    column-gap: 30px;\n}\n\n.about_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #1b1d23;\n    font-weight: 700;\n}\n.about_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #1b1d23;\n    font-weight: 500;\n    opacity: 0.7;\n}\n\n", "",{"version":3,"sources":["webpack://./src/global-style.css"],"names":[],"mappings":"AAIA;IACI,qCAAqC;AACzC;;;AAGA;IACI,WAAW;IACX,YAAY;AAChB;AACA,qDAAqD;AACrD;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;AACjC;;;AAGA;IACI,gCAAgC;IAChC,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,oBAAoB;IACpB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,oBAAoB;IACpB,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iBAAiB;;AAErB;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,oBAAoB;IACpB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,gCAAgC;IAChC,WAAW;IACX,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,gCAAgC;IAChC,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,WAAW;IACX,WAAW;IACX,gCAAgC;IAChC,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kGAAkG;AACtG;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,UAAU;;AAEd;AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,+FAA+F;AACnG;;;;AAIA,qEAAqE;AACrE;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;;;AAIA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,mBAAmB;AACvB;;;AAGA,kEAAkE;AAClE;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,UAAU;AACd;AACA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Spartan:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Spartan:wght@500;700&display=swap');\n\n\n:root{\n    --font-spartan: 'Spartan', sans-serif;\n}\n\n\nhtml, body{\n    margin: 0px;\n    padding: 0px;\n}\n/****************** Navbar **************************/\n.navbar_wrapper{\n    display: flex;\n    flex-direction: row;\n    width: 1000px;\n    margin: auto;\n    height: 114px;\n    align-items: center;\n}\n\n.nav_button_container{\n    display: flex;\n    margin-left: 18px;\n    width: 515px;\n    justify-content: space-evenly;\n}\n\n\n.portfolio_anchor, .about_anchor, .contact_anchor{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #7d828f;\n    font-weight: 700;\n    text-decoration: none;\n}\n\n.header_image_container{\n    text-align: center;\n}\n\n.header_description_container{\n    position: absolute;\n    top: 298px;\n    left: 357px;\n}\n\n.upper_container{\n    font-weight: 700;\n}\n.header_title_upper, .header_title_lower{\n    font-family: var(--font-spartan);\n    font-size: 80px;\n    letter-spacing: -2px;\n    color: #fff;\n    margin: 0px;\n}\n\n.header_paragraph_container{\n    width: 412px;\n}\n\n.header_lower_paragraph{\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 500;\n}\n\n.header_portfolio_container{\n    position: absolute;\n    top: 600px;\n    left: 357px;\n    width: 252px;\n    height: 72px;\n    background-color: #1b1d23;\n    font-weight: 700;\n}\n\n.portfolio_inner_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #fff;\n    margin-top: 11%;\n    margin-left: 36px;\n}\n\n.bottom_navigation_bar{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 320px;\n    height: 80px;\n    position: absolute;\n    bottom: -52px;\n    left: 85px;\n}\n\n.bottom_one_btn, .bottom_two_btn, .bottom_three_btn, .bottom_four_btn{\n    width: 80px;\n    height: 80px;\n    margin: 0px;\n    padding: 31px;\n    background-color: #fff;\n    border: 1px black solid;\n}\n\n.middle_section_wrapper{\n    height: auto;\n    width: auto;\n    margin-top: 75px;\n}\n\n.middle_section_title_container{\n    width: 968px;\n    margin-top: 56px;\n    margin-left: 159px;\n    font-weight: 700;\n}\n.middle_section_title{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    margin: 0px;\n    position: relative;\n    z-index: 1;\n}\n\n.middle_section_description_container{\n    width: 446px;\n    height: 493px;\n    margin-left: 349px;\n    margin-top: -44px;\n\n}\n.middle_section_description_container :first-child{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.middle_section_description{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.middle_image_description_container{\n    display: flex;\n}\n\n.middle_image_container{\n    position: relative;\n    top: -123px;\n    left: 122px;\n}\n\n.middle_image_bottom_container{\n    text-align: center;\n    height: 561px;\n    margin-top: 67px;\n}\n\n.small_team_bottom_container{\n    position: relative;\n    top: -404px;\n    width: 350px;\n    text-align: start;\n    left: 349px;\n}\n.small_teams_title{\n    font-size: 56px;\n    letter-spacing: -2px;\n    font-family: var(--font-spartan);\n    color: #fff;\n    font-weight: 700;\n    margin: 0px;\n}\n\n.about_bottom_button_container{\n    width: 187px;\n    height: 72px;\n    background-color: #1b1d23;\n    margin-top: 29px;\n}\n.about_bottom_button{\n    position: relative;\n    top: 24px;\n    left: 33px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n}\n\n.feature_wrapper{\n    margin: 186px 154px 0px 154px;\n}\n\n.feature_top_title_container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.feature_logo_container{\n    font-size: 56px;\n    font-family: var(--font-spartan);\n    letter-spacing: -2px;\n    font-weight: 700;\n}\n.feature_logo_container p{\n    margin: 0px;\n}\n\n.see_all_btn_container{\n    height: auto;\n    width: 169px;\n    background-color: #1b1d23;\n    color: #fff;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n}\n.see_all_btn_container p{\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n.feature_main_image_container{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 72px;\n}\n\n.first_feature_image_container, .second_feature_image_container, .third_feature_image_container{\n    height: 560px;\n}\n\n.feature_number_image_one{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 283px;\n    margin: 0px;\n    width: 86px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_two{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 217px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n.feature_number_image_three{\n    position: relative;\n    top: -543px;\n    font-size: 200px;\n    color: #fff;\n    opacity: 0.5;\n    left: 232px;\n    margin: 0px;\n    width: 133px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n}\n\n.first_image_lower_description, .second_image_lower_description, .third_image_lower_description{\n    position: relative;\n    top: -344px;\n    left: 57px;\n}\n\n.upper_first_feature_text, .upper_second_feature_text, .upper_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 18px;\n    color: #fff;\n}\n\n.lower_first_feature_text, .lower_second_feature_text, .lower_third_feature_text{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #fff;\n    opacity: 0.7;\n    font-weight: 500;\n}\n\n.home_footer_container{\n    height: 330px;\n    position: relative;\n}\n\n.bottom_button_container{\n    display: flex;\n    position: absolute;\n    bottom: -8px;\n    left: 154px;\n    background-color: #eeeff4;\n}\n\n.footer_arch_container, .footer_portfolio_container, .footer_about_container{\n    width: 200px;\n    height: 200px;\n}\n.footer_portfolio_button, .footer_about_button, .footer_contact_button{\n    position: relative;\n    top: 79px;\n    left: 69px;\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    color: #7d828f;\n}\n\n.footer_arch_container{\n    background-color: #1b1d23;\n}\n.footer_arch_container img{\n    position: relative;\n    top: 74px;\n    left: 46px;\n    filter: invert(100%) sepia(12%) saturate(7493%) hue-rotate(179deg) brightness(103%) contrast(113%);\n}\n\n.footer_contact_container{\n    width: 384px;\n}\n\n.footer_see_portfolio_button_container{\n    width: 252px;\n    height: 72px;\n    display: flex;\n    background-color: #1b1d23;\n    color: #fff;\n    position: relative;\n    left: 1018px;\n    top: 205px;\n    \n}\n.footer_see_portfolio_button{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 15px;\n    margin-top: 27px;\n    margin-left: 20px;\n}\n\n.footer_see_portfolio_button_container img{\n    width: 24px;\n    height: 18px;\n    margin-top: 27px;\n    margin-left: 31px;\n    filter: invert(99%) sepia(3%) saturate(731%) hue-rotate(298deg) brightness(116%) contrast(100%);\n}\n\n\n\n/******************* Portfolio Page  ********************************/\n.panel_holder_grid_container{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    place-items: center;\n    row-gap: 46px;\n}\n\n.content_container{\n    position: relative;\n    top: -111px;\n    left: 45px;\n}\n.portfolio_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #fff;\n    font-weight: 700;\n}\n.portfolio_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    font-weight: 500;\n    color: #fff;\n    opacity: 0.7;\n}\n\n\n\n.portfolio_container{\n    width: 350px;\n    height: 560px;\n}\n\n.portfolio_one_container, .portfolio_four_container,\n.portfolio_seven_container, .portfolio_ten_container{\n    margin-left: 161px;\n}\n\n.portfolio_three_container, .portfolio_six_container,\n.portfolio_nine_container, .portfolio_twelve_container{\n    margin-right: 161px;\n}\n\n\n/***********************About Page    ****************************/\n.about_header_wrapper{\n    display: flex;\n}\n\n.about_first_container{\n    width: 553px;\n}\n\n.about_first_title_container{\n    font-family: var(--font-spartan);\n    font-size: 200px;\n    font-weight: 700;\n    letter-spacing: -5px;\n    color: #eeeff4;\n    position: relative;\n    left: -179px;\n    top: 95px;\n    z-index: 1;\n}\n.about_first_title_container p{\n    margin: 0px;\n}\n\n.about_image_container{\n    margin-left: 161px;\n}\n\n.about_content_container{\n    width: 692px;\n    height: 503px;\n    position: relative;\n    top: -20px;\n    left: -155px;\n    background-color: #fff;\n}\n\n.about_upper_title_text{\n    font-family: var(--font-spartan);\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    font-weight: 700;\n    width: 400px;\n    margin: 0px;\n    position: relative;\n    top: 217px;\n    left: 200px;\n}\n\n.about_lower_title_text{\n    width: 445px;\n    height: 100px;\n    color: #60636d;\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    position: relative;\n    top: 250px;\n    left: 200px;\n    line-height: 25px;\n}\n\n\n.about_middle_wrapper{\n    display: flex;\n    margin-top: 169px;\n}\n\n.about_middle_content_container{\n    width: 500px;\n    margin-left: 161px;\n}\n.about_middle_upper_container{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    width: 263px;\n}\n\n.about_middle_lower_container{\n    font-family: var(--font-spartan);\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 25px;\n    color: #60636d;\n}\n\n.about_middle_image_container{\n    margin-left: 124px;\n}\n\n.about_leader_wrapper{\n    display: flex;\n    margin-top: 191px;\n}\n\n.about_leader_container_title{\n    font-family: var(--font-spartan);\n    font-weight: 700;\n    font-size: 56px;\n    letter-spacing: -2px;\n    color: #1b1d23;\n    margin-left: 161px;\n    width: 249px;\n    height: 200px;\n}\n.about_leader_container_title p{\n    margin: 0px;\n}\n\n\n.about_leader_grid_container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 730px;\n    height: 860px;\n    margin-left: 185px;\n    column-gap: 30px;\n    margin-left: 185px;\n    column-gap: 30px;\n}\n\n.about_upper_text{\n    font-family: var(--font-spartan);\n    font-size: 18px;\n    color: #1b1d23;\n    font-weight: 700;\n}\n.about_lower_text{\n    font-family: var(--font-spartan);\n    font-size: 15px;\n    color: #1b1d23;\n    font-weight: 500;\n    opacity: 0.7;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/home/desktop/image-hero-paramour.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/home/desktop/image-hero-paramour.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4a318fcb14c11923b90.jpg";

/***/ }),

/***/ "./src/assets/home/desktop/image-small-team.jpg":
/*!******************************************************!*\
  !*** ./src/assets/home/desktop/image-small-team.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c392dbd9daa343522a96.jpg";

/***/ }),

/***/ "./src/assets/home/desktop/image-welcome.jpg":
/*!***************************************************!*\
  !*** ./src/assets/home/desktop/image-welcome.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d48da5ee73522dc5750c.jpg";

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

/***/ }),

/***/ "./src/assets/portfolio/desktop/image-228b.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/portfolio/desktop/image-228b.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c62543588a9b303279c.jpg";

/***/ }),

/***/ "./src/assets/portfolio/desktop/image-del-sol.jpg":
/*!********************************************************!*\
  !*** ./src/assets/portfolio/desktop/image-del-sol.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79782c0420450e8683da.jpg";

/***/ }),

/***/ "./src/assets/portfolio/desktop/image-prototype.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/portfolio/desktop/image-prototype.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3aa636fb8cd53744f08f.jpg";

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
  !*** ./src/components/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-style.css */ "./src/global-style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _midsection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./midsection */ "./src/components/midsection.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature */ "./src/components/feature.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");







function createHome() {
  var homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home_wrapper");
  return homeWrapper;
}

function loadHome() {
  var getHome = document.getElementById("home_page");
  var newNav = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.createNavbar)();
  var newHome = createHome();
  var newHeader = (0,_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)();
  var newMiddle = (0,_midsection__WEBPACK_IMPORTED_MODULE_3__.midSection)();
  var newFeature = (0,_feature__WEBPACK_IMPORTED_MODULE_4__.createFeature)();
  var newFooter = (0,_footer__WEBPACK_IMPORTED_MODULE_5__.createFooter)();
  newHome.append(newNav, newHeader);
  getHome.append(newHome, newMiddle, newFeature, newFooter);
}

loadHome();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jNTNkYzZkYjZhMzFhZDdjMGJhMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNHLGFBQVQsR0FBd0I7QUFDM0IsTUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQUYsRUFBQUEsY0FBYyxDQUFDRyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixpQkFBN0I7QUFFQSxNQUFJQyxtQkFBbUIsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTFCO0FBQ0FHLEVBQUFBLG1CQUFtQixDQUFDRixTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsNkJBQWxDO0FBRUEsTUFBSUUsb0JBQW9CLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUEzQjtBQUNBSSxFQUFBQSxvQkFBb0IsQ0FBQ0gsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLHdCQUFuQztBQUVBLE1BQUlHLFdBQVcsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWxCO0FBQ0FLLEVBQUFBLFdBQVcsQ0FBQ0MsU0FBWixHQUF3QixVQUF4QjtBQUVBLE1BQUlDLGtCQUFrQixHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7QUFDQU8sRUFBQUEsa0JBQWtCLENBQUNOLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyx1QkFBakM7QUFDQSxNQUFJTSxTQUFTLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBUSxFQUFBQSxTQUFTLENBQUNGLFNBQVYsR0FBc0IsU0FBdEI7QUFDQUMsRUFBQUEsa0JBQWtCLENBQUNFLE1BQW5CLENBQTBCRCxTQUExQjtBQUdBSixFQUFBQSxvQkFBb0IsQ0FBQ0ssTUFBckIsQ0FBNEJKLFdBQTVCO0FBQ0FGLEVBQUFBLG1CQUFtQixDQUFDTSxNQUFwQixDQUEyQkwsb0JBQTNCLEVBQWlERyxrQkFBakQ7QUFHQSxNQUFNRyxrQkFBa0IsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0FVLEVBQUFBLGtCQUFrQixDQUFDVCxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsOEJBQWpDO0FBR0EsTUFBSVMsbUJBQW1CLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUExQjtBQUNBVyxFQUFBQSxtQkFBbUIsQ0FBQ1YsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLCtCQUFsQztBQUNBLE1BQUlVLFNBQVMsR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWhCO0FBQ0FZLEVBQUFBLFNBQVMsQ0FBQ1gsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsMEJBQXhCO0FBQ0FVLEVBQUFBLFNBQVMsQ0FBQ04sU0FBVixHQUFzQixHQUF0QjtBQUVBLE1BQUlPLDhCQUE4QixHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckM7QUFDQWEsRUFBQUEsOEJBQThCLENBQUNaLFNBQS9CLENBQXlDQyxHQUF6QyxDQUE2QywrQkFBN0M7QUFDQSxNQUFJWSxxQkFBcUIsR0FBR2YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQTVCO0FBQ0FjLEVBQUFBLHFCQUFxQixDQUFDYixTQUF0QixDQUFnQ0MsR0FBaEMsQ0FBb0MsMEJBQXBDO0FBQ0FZLEVBQUFBLHFCQUFxQixDQUFDUixTQUF0QixHQUFrQyxpQkFBbEM7QUFDQSxNQUFJUyxxQkFBcUIsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUE1QjtBQUNBZSxFQUFBQSxxQkFBcUIsQ0FBQ2QsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLDBCQUFwQztBQUNBYSxFQUFBQSxxQkFBcUIsQ0FBQ1QsU0FBdEIsR0FBa0MsbUJBQWxDO0FBQ0FPLEVBQUFBLDhCQUE4QixDQUFDSixNQUEvQixDQUFzQ0sscUJBQXRDLEVBQTZEQyxxQkFBN0Q7QUFFQSxNQUFJQyxRQUFRLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBZ0IsRUFBQUEsUUFBUSxDQUFDZixTQUFULENBQW1CQyxHQUFuQixDQUF1QixtQkFBdkI7QUFDQWMsRUFBQUEsUUFBUSxDQUFDQyxHQUFULEdBQWV2Qix3RUFBZjtBQUNBaUIsRUFBQUEsbUJBQW1CLENBQUNGLE1BQXBCLENBQTJCTyxRQUEzQixFQUFxQ0osU0FBckMsRUFBZ0RDLDhCQUFoRDtBQUlBLE1BQUlLLG9CQUFvQixHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0FrQixFQUFBQSxvQkFBb0IsQ0FBQ2pCLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxnQ0FBbkM7QUFDQSxNQUFJaUIsU0FBUyxHQUFHcEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWhCO0FBQ0FtQixFQUFBQSxTQUFTLENBQUNsQixTQUFWLENBQW9CQyxHQUFwQixDQUF3QiwwQkFBeEI7QUFDQWlCLEVBQUFBLFNBQVMsQ0FBQ2IsU0FBVixHQUFzQixHQUF0QjtBQUVBLE1BQUljLDhCQUE4QixHQUFHckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJDO0FBQ0FvQixFQUFBQSw4QkFBOEIsQ0FBQ25CLFNBQS9CLENBQXlDQyxHQUF6QyxDQUE2QyxnQ0FBN0M7QUFFQSxNQUFJbUIsc0JBQXNCLEdBQUd0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBN0I7QUFDQXFCLEVBQUFBLHNCQUFzQixDQUFDcEIsU0FBdkIsQ0FBaUNDLEdBQWpDLENBQXFDLDBCQUFyQztBQUNBbUIsRUFBQUEsc0JBQXNCLENBQUNmLFNBQXZCLEdBQW1DLFlBQW5DO0FBRUEsTUFBSWdCLHNCQUFzQixHQUFHdkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQTdCO0FBQ0FzQixFQUFBQSxzQkFBc0IsQ0FBQ3JCLFNBQXZCLENBQWlDQyxHQUFqQyxDQUFxQywwQkFBckM7QUFDQW9CLEVBQUFBLHNCQUFzQixDQUFDaEIsU0FBdkIsR0FBbUMsbUJBQW5DO0FBQ0FjLEVBQUFBLDhCQUE4QixDQUFDWCxNQUEvQixDQUFzQ1ksc0JBQXRDLEVBQThEQyxzQkFBOUQ7QUFHQSxNQUFJQyxRQUFRLEdBQUd4QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBdUIsRUFBQUEsUUFBUSxDQUFDdEIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsbUJBQXZCO0FBQ0FxQixFQUFBQSxRQUFRLENBQUNOLEdBQVQsR0FBY3RCLHFFQUFkO0FBQ0F1QixFQUFBQSxvQkFBb0IsQ0FBQ1QsTUFBckIsQ0FBNEJjLFFBQTVCLEVBQXNDSixTQUF0QyxFQUFpREMsOEJBQWpEO0FBSUEsTUFBSUksbUJBQW1CLEdBQUd6QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7QUFDQXdCLEVBQUFBLG1CQUFtQixDQUFDdkIsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLCtCQUFsQztBQUNBLE1BQUl1QixXQUFXLEdBQUcxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbEI7QUFDQXlCLEVBQUFBLFdBQVcsQ0FBQ3hCLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLDRCQUExQjtBQUNBdUIsRUFBQUEsV0FBVyxDQUFDbkIsU0FBWixHQUF3QixHQUF4QjtBQUVBLE1BQUlvQixnQ0FBZ0MsR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF2QztBQUNBMEIsRUFBQUEsZ0NBQWdDLENBQUN6QixTQUFqQyxDQUEyQ0MsR0FBM0MsQ0FBK0MsK0JBQS9DO0FBQ0EsTUFBSXlCLHFCQUFxQixHQUFHNUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQTVCO0FBQ0EyQixFQUFBQSxxQkFBcUIsQ0FBQzFCLFNBQXRCLENBQWdDQyxHQUFoQyxDQUFvQywwQkFBcEM7QUFDQXlCLEVBQUFBLHFCQUFxQixDQUFDckIsU0FBdEIsR0FBa0MsY0FBbEM7QUFDQSxNQUFJc0IscUJBQXFCLEdBQUc3QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBNUI7QUFDQTRCLEVBQUFBLHFCQUFxQixDQUFDM0IsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLDBCQUFwQztBQUNBMEIsRUFBQUEscUJBQXFCLENBQUN0QixTQUF0QixHQUFrQyxtQkFBbEM7QUFDQW9CLEVBQUFBLGdDQUFnQyxDQUFDakIsTUFBakMsQ0FBd0NrQixxQkFBeEMsRUFBK0RDLHFCQUEvRDtBQUdBLE1BQUlDLFVBQVUsR0FBRzlCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBNkIsRUFBQUEsVUFBVSxDQUFDNUIsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIscUJBQXpCO0FBQ0EyQixFQUFBQSxVQUFVLENBQUNaLEdBQVgsR0FBaUJyQiwwRUFBakI7QUFDQTRCLEVBQUFBLG1CQUFtQixDQUFDZixNQUFwQixDQUEyQm9CLFVBQTNCLEVBQXVDSixXQUF2QyxFQUFxREMsZ0NBQXJEO0FBRUFoQixFQUFBQSxrQkFBa0IsQ0FBQ0QsTUFBbkIsQ0FBMEJFLG1CQUExQixFQUErQ08sb0JBQS9DLEVBQXFFTSxtQkFBckU7QUFHQTFCLEVBQUFBLGNBQWMsQ0FBQ1csTUFBZixDQUFzQk4sbUJBQXRCLEVBQTJDTyxrQkFBM0M7QUFDQSxTQUFPWixjQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0Q7QUFDQTtBQUVPLFNBQVNrQyxZQUFULEdBQXVCO0FBQzFCLE1BQU1DLGFBQWEsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBaUMsRUFBQUEsYUFBYSxDQUFDaEMsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIscUJBQTVCO0FBRUEsTUFBTWdDLGVBQWUsR0FBR25DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtBQUNBa0MsRUFBQUEsZUFBZSxDQUFDakMsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLHVCQUE5QjtBQUVBLE1BQU1pQyxtQkFBbUIsR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUE1QjtBQUNBbUMsRUFBQUEsbUJBQW1CLENBQUNsQyxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsdUJBQWxDO0FBRUEsTUFBSWtDLFdBQVcsR0FBR3JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBb0MsRUFBQUEsV0FBVyxDQUFDbkIsR0FBWixHQUFrQmEsNkNBQWxCO0FBQ0FLLEVBQUFBLG1CQUFtQixDQUFDMUIsTUFBcEIsQ0FBMkIyQixXQUEzQjtBQUtBLE1BQUlDLGtCQUFrQixHQUFHdEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0FxQyxFQUFBQSxrQkFBa0IsQ0FBQ3BDLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyx5QkFBakM7QUFFQSxNQUFJb0Msa0JBQWtCLEdBQUd2QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7QUFDQXNDLEVBQUFBLGtCQUFrQixDQUFDckMsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLDRCQUFqQztBQUNBLE1BQUlxQyxZQUFZLEdBQUd4QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbkI7QUFDQXVDLEVBQUFBLFlBQVksQ0FBQ2pDLFNBQWIsR0FBeUIsV0FBekI7QUFDQWlDLEVBQUFBLFlBQVksQ0FBQ3RDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLHlCQUEzQjtBQUNBb0MsRUFBQUEsa0JBQWtCLENBQUM3QixNQUFuQixDQUEwQjhCLFlBQTFCO0FBR0EsTUFBSUMsY0FBYyxHQUFHekMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0F3QyxFQUFBQSxjQUFjLENBQUN2QyxTQUFmLENBQXlCQyxHQUF6QixDQUE2Qix3QkFBN0I7QUFDQSxNQUFJdUMsUUFBUSxHQUFHMUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWY7QUFDQXlDLEVBQUFBLFFBQVEsQ0FBQ25DLFNBQVQsR0FBcUIsVUFBckI7QUFDQW1DLEVBQUFBLFFBQVEsQ0FBQ3hDLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHFCQUF2QjtBQUNBc0MsRUFBQUEsY0FBYyxDQUFDL0IsTUFBZixDQUFzQmdDLFFBQXRCO0FBR0EsTUFBSUMsZ0JBQWdCLEdBQUczQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQTBDLEVBQUFBLGdCQUFnQixDQUFDekMsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLDBCQUEvQjtBQUNBLE1BQUl5QyxVQUFVLEdBQUc1QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBakI7QUFDQTJDLEVBQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsR0FBdUIsU0FBdkI7QUFDQXFDLEVBQUFBLFVBQVUsQ0FBQzFDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLHVCQUF6QjtBQUNBd0MsRUFBQUEsZ0JBQWdCLENBQUNqQyxNQUFqQixDQUF3QmtDLFVBQXhCO0FBRUEsTUFBSUMsd0JBQXdCLEdBQUc3QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBL0I7QUFDQTRDLEVBQUFBLHdCQUF3QixDQUFDM0MsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLHVDQUF2QztBQUVBLE1BQUkyQyxnQkFBZ0IsR0FBRzlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUF2QjtBQUNBNkMsRUFBQUEsZ0JBQWdCLENBQUM1QyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsNkJBQS9CO0FBQ0EyQyxFQUFBQSxnQkFBZ0IsQ0FBQ3ZDLFNBQWpCLEdBQTZCLG1CQUE3QjtBQUVBLE1BQUl3QyxLQUFLLEdBQUcvQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBOEMsRUFBQUEsS0FBSyxDQUFDN0IsR0FBTixHQUFZYyx5REFBWjtBQUVBYSxFQUFBQSx3QkFBd0IsQ0FBQ25DLE1BQXpCLENBQWdDb0MsZ0JBQWhDLEVBQWtEQyxLQUFsRDtBQUVBVCxFQUFBQSxrQkFBa0IsQ0FBQzVCLE1BQW5CLENBQTBCMEIsbUJBQTFCLEVBQStDRyxrQkFBL0MsRUFBbUVFLGNBQW5FLEVBQW1GRSxnQkFBbkY7QUFDQVIsRUFBQUEsZUFBZSxDQUFDekIsTUFBaEIsQ0FBdUI0QixrQkFBdkIsRUFBMkNPLHdCQUEzQztBQUNBWCxFQUFBQSxhQUFhLENBQUN4QixNQUFkLENBQXFCeUIsZUFBckI7QUFFQSxTQUFPRCxhQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQy9ERDtBQUVPLFNBQVNlLFlBQVQsR0FBdUI7QUFDMUIsTUFBTUMsYUFBYSxHQUFHbEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0FpRCxFQUFBQSxhQUFhLENBQUNoRCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixnQkFBNUI7QUFFQSxNQUFNZ0QsY0FBYyxHQUFHbkQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0FrRCxFQUFBQSxjQUFjLENBQUNqRCxTQUFmLENBQXlCQyxHQUF6QixDQUE2Qix3QkFBN0I7QUFFQSxNQUFJaUQsS0FBSyxHQUFHcEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQW1ELEVBQUFBLEtBQUssQ0FBQ2xDLEdBQU4sR0FBWThCLHlFQUFaO0FBRUFHLEVBQUFBLGNBQWMsQ0FBQ3pDLE1BQWYsQ0FBc0IwQyxLQUF0QjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHckQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTdCO0FBQ0FvRCxFQUFBQSxvQkFBb0IsQ0FBQ25ELFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyw4QkFBbkM7QUFFQSxNQUFNbUQsY0FBYyxHQUFHdEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0FxRCxFQUFBQSxjQUFjLENBQUNwRCxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixpQkFBN0I7QUFFQSxNQUFJb0QsVUFBVSxHQUFHdkQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWpCO0FBQ0FzRCxFQUFBQSxVQUFVLENBQUNyRCxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixvQkFBekI7QUFDQW9ELEVBQUFBLFVBQVUsQ0FBQ2hELFNBQVgsR0FBdUIsU0FBdkI7QUFFQSxNQUFJaUQsVUFBVSxHQUFHeEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWpCO0FBQ0F1RCxFQUFBQSxVQUFVLENBQUN0RCxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixvQkFBekI7QUFDQXFELEVBQUFBLFVBQVUsQ0FBQ2pELFNBQVgsR0FBdUIsVUFBdkI7QUFFQStDLEVBQUFBLGNBQWMsQ0FBQzVDLE1BQWYsQ0FBc0I2QyxVQUF0QixFQUFrQ0MsVUFBbEM7QUFFQSxNQUFNQyxtQkFBbUIsR0FBR3pELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUE1QjtBQUNBd0QsRUFBQUEsbUJBQW1CLENBQUN2RCxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsNEJBQWxDO0FBRUEsTUFBSXVELGNBQWMsR0FBRzFELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBeUQsRUFBQUEsY0FBYyxDQUFDeEQsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsd0JBQTdCO0FBQ0F1RCxFQUFBQSxjQUFjLENBQUNuRCxTQUFmLEdBQTJCLHFIQUEzQjtBQUVBa0QsRUFBQUEsbUJBQW1CLENBQUMvQyxNQUFwQixDQUEyQmdELGNBQTNCO0FBRUE7O0FBQ0FMLEVBQUFBLG9CQUFvQixDQUFDM0MsTUFBckIsQ0FBNEI0QyxjQUE1QixFQUE0Q0csbUJBQTVDO0FBQ0E7O0FBRUEsTUFBTWxCLGtCQUFrQixHQUFHdkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0FzQyxFQUFBQSxrQkFBa0IsQ0FBQ3JDLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyw0QkFBakM7QUFFQSxNQUFJd0QsY0FBYyxHQUFHM0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXJCO0FBQ0EwRCxFQUFBQSxjQUFjLENBQUN6RCxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixzQkFBN0I7QUFDQXdELEVBQUFBLGNBQWMsQ0FBQ3BELFNBQWYsR0FBMkIsbUJBQTNCO0FBRUFnQyxFQUFBQSxrQkFBa0IsQ0FBQzdCLE1BQW5CLENBQTBCaUQsY0FBMUI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRzVELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtBQUNBMkQsRUFBQUEsZ0JBQWdCLENBQUMxRCxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsdUJBQS9CO0FBRUEsTUFBSTBELFNBQVMsR0FBRzdELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBNEQsRUFBQUEsU0FBUyxDQUFDM0QsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZ0JBQXhCO0FBQ0EwRCxFQUFBQSxTQUFTLENBQUN0RCxTQUFWLEdBQXNCLElBQXRCO0FBQ0EsTUFBSXVELFNBQVMsR0FBRzlELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBNkQsRUFBQUEsU0FBUyxDQUFDNUQsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZ0JBQXhCO0FBQ0EyRCxFQUFBQSxTQUFTLENBQUN2RCxTQUFWLEdBQXNCLElBQXRCO0FBQ0EsTUFBSXdELFdBQVcsR0FBRy9ELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFsQjtBQUNBOEQsRUFBQUEsV0FBVyxDQUFDN0QsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsa0JBQTFCO0FBQ0E0RCxFQUFBQSxXQUFXLENBQUN4RCxTQUFaLEdBQXdCLElBQXhCO0FBQ0EsTUFBSXlELFVBQVUsR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFqQjtBQUNBK0QsRUFBQUEsVUFBVSxDQUFDOUQsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsaUJBQXpCO0FBQ0E2RCxFQUFBQSxVQUFVLENBQUN6RCxTQUFYLEdBQXVCLElBQXZCO0FBRUFxRCxFQUFBQSxnQkFBZ0IsQ0FBQ2xELE1BQWpCLENBQXdCbUQsU0FBeEIsRUFBbUNDLFNBQW5DLEVBQThDQyxXQUE5QyxFQUEyREMsVUFBM0Q7QUFJQWQsRUFBQUEsYUFBYSxDQUFDeEMsTUFBZCxDQUFxQnlDLGNBQXJCLEVBQXFDRSxvQkFBckMsRUFBMkRkLGtCQUEzRCxFQUErRXFCLGdCQUEvRTtBQUNBLFNBQU9WLGFBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQzFFRDtBQUNBO0FBRU8sU0FBU2lCLFVBQVQsR0FBcUI7QUFFeEIsTUFBTUMsYUFBYSxHQUFHcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0FtRSxFQUFBQSxhQUFhLENBQUNsRSxTQUFkLENBQXdCQyxHQUF4QixDQUE0Qix3QkFBNUI7QUFFQSxNQUFNa0UsZUFBZSxHQUFHckUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXhCO0FBQ0FvRSxFQUFBQSxlQUFlLENBQUNuRSxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsZ0NBQTlCO0FBRUEsTUFBSW1FLFdBQVcsR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFsQjtBQUNBcUUsRUFBQUEsV0FBVyxDQUFDcEUsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsc0JBQTFCO0FBQ0FtRSxFQUFBQSxXQUFXLENBQUMvRCxTQUFaLEdBQXdCLFNBQXhCO0FBQ0E4RCxFQUFBQSxlQUFlLENBQUMzRCxNQUFoQixDQUF1QjRELFdBQXZCO0FBRUEsTUFBTUMsNkJBQTZCLEdBQUd2RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEM7QUFDQXNFLEVBQUFBLDZCQUE2QixDQUFDckUsU0FBOUIsQ0FBd0NDLEdBQXhDLENBQTRDLG9DQUE1QztBQUVBLE1BQU1xRSxnQkFBZ0IsR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtBQUNBdUUsRUFBQUEsZ0JBQWdCLENBQUN0RSxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0Isc0NBQS9CO0FBRUEsTUFBSXNFLGdCQUFnQixHQUFHekUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXZCO0FBQ0F3RSxFQUFBQSxnQkFBZ0IsQ0FBQ2xFLFNBQWpCLEdBQTZCLHdCQUE3QjtBQUVBLE1BQUltRSxpQkFBaUIsR0FBRzFFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUF4QjtBQUNBeUUsRUFBQUEsaUJBQWlCLENBQUN4RSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsNEJBQWhDO0FBQ0F1RSxFQUFBQSxpQkFBaUIsQ0FBQ25FLFNBQWxCLEdBQThCLDBqQkFBOUI7QUFFQWlFLEVBQUFBLGdCQUFnQixDQUFDOUQsTUFBakIsQ0FBd0IrRCxnQkFBeEIsRUFBMENDLGlCQUExQztBQUVBLE1BQUl2QixjQUFjLEdBQUduRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQWtELEVBQUFBLGNBQWMsQ0FBQ2pELFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLHdCQUE3QjtBQUVBLE1BQUlpRCxLQUFLLEdBQUdwRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBbUQsRUFBQUEsS0FBSyxDQUFDbEMsR0FBTixHQUFZK0MsbUVBQVo7QUFFQWQsRUFBQUEsY0FBYyxDQUFDekMsTUFBZixDQUFzQjBDLEtBQXRCO0FBSUEsTUFBSXVCLG9CQUFvQixHQUFHM0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0EwRSxFQUFBQSxvQkFBb0IsQ0FBQ3pFLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQywrQkFBbkM7QUFFQSxNQUFJcUIsUUFBUSxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQXVCLEVBQUFBLFFBQVEsQ0FBQ04sR0FBVCxHQUFlZ0Qsc0VBQWY7QUFHQSxNQUFNVSxtQkFBbUIsR0FBRzVFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUE1QjtBQUNBMkUsRUFBQUEsbUJBQW1CLENBQUMxRSxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsNkJBQWxDO0FBRUEsTUFBSTBFLGVBQWUsR0FBRzdFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUF0QjtBQUNBNEUsRUFBQUEsZUFBZSxDQUFDM0UsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLG1CQUE5QjtBQUNBMEUsRUFBQUEsZUFBZSxDQUFDdEUsU0FBaEIsR0FBNEIsdUJBQTVCO0FBRUEsTUFBSXVFLHVCQUF1QixHQUFHOUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTlCO0FBQ0E2RSxFQUFBQSx1QkFBdUIsQ0FBQzVFLFNBQXhCLENBQWtDQyxHQUFsQyxDQUFzQywrQkFBdEM7QUFFQSxNQUFJNEUsY0FBYyxHQUFHL0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXJCO0FBQ0E4RSxFQUFBQSxjQUFjLENBQUM3RSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixxQkFBN0I7QUFDQTRFLEVBQUFBLGNBQWMsQ0FBQ3hFLFNBQWYsR0FBMkIsVUFBM0I7QUFFQXVFLEVBQUFBLHVCQUF1QixDQUFDcEUsTUFBeEIsQ0FBK0JxRSxjQUEvQjtBQUVBSCxFQUFBQSxtQkFBbUIsQ0FBQ2xFLE1BQXBCLENBQTJCbUUsZUFBM0IsRUFBNENDLHVCQUE1QztBQUdBSCxFQUFBQSxvQkFBb0IsQ0FBQ2pFLE1BQXJCLENBQTRCYyxRQUE1QixFQUFzQ29ELG1CQUF0QztBQU1BTCxFQUFBQSw2QkFBNkIsQ0FBQzdELE1BQTlCLENBQXFDOEQsZ0JBQXJDLEVBQXVEckIsY0FBdkQ7QUFFQWlCLEVBQUFBLGFBQWEsQ0FBQzFELE1BQWQsQ0FBcUIyRCxlQUFyQixFQUFzQ0UsNkJBQXRDLEVBQXFFSSxvQkFBckU7QUFFQSxTQUFPUCxhQUFQO0FBRUg7Ozs7Ozs7Ozs7Ozs7OztBQy9FRDtBQUVPLFNBQVNhLFlBQVQsR0FBdUI7QUFDMUIsTUFBTUMsYUFBYSxHQUFHbEYsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0FpRixFQUFBQSxhQUFhLENBQUNoRixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixnQkFBNUI7QUFFQSxNQUFNZ0YsZ0JBQWdCLEdBQUduRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7QUFDQWtGLEVBQUFBLGdCQUFnQixDQUFDakYsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLG9CQUEvQjtBQUVBLE1BQU1pRixJQUFJLEdBQUdwRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBbUYsRUFBQUEsSUFBSSxDQUFDbEUsR0FBTCxHQUFXOEQsNkNBQVg7QUFDQUcsRUFBQUEsZ0JBQWdCLENBQUN6RSxNQUFqQixDQUF3QjBFLElBQXhCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUdyRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBM0I7QUFDQW9GLEVBQUFBLGtCQUFrQixDQUFDbkYsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLHNCQUFqQztBQUVBLE1BQUkwRCxTQUFTLEdBQUd5QixZQUFZLENBQUMsa0JBQUQsRUFBcUIsV0FBckIsRUFBa0MsZ0JBQWxDLENBQTVCO0FBQ0EsTUFBSXhCLFNBQVMsR0FBR3dCLFlBQVksQ0FBQyxjQUFELEVBQWlCLFVBQWpCLEVBQTZCLFlBQTdCLENBQTVCO0FBQ0EsTUFBSXZCLFdBQVcsR0FBR3VCLFlBQVksQ0FBQyxnQkFBRCxFQUFtQixTQUFuQixFQUE4QixjQUE5QixDQUE5QjtBQUVBRCxFQUFBQSxrQkFBa0IsQ0FBQzNFLE1BQW5CLENBQTBCbUQsU0FBMUIsRUFBcUNDLFNBQXJDLEVBQWdEQyxXQUFoRDtBQUVBbUIsRUFBQUEsYUFBYSxDQUFDeEUsTUFBZCxDQUFxQnlFLGdCQUFyQixFQUF1Q0Usa0JBQXZDO0FBRUEsU0FBT0gsYUFBUDtBQUNIOztBQUVELFNBQVNJLFlBQVQsQ0FBc0JDLFVBQXRCLEVBQWtDQyxXQUFsQyxFQUErQ0MsWUFBL0MsRUFBNEQ7QUFDeEQsTUFBSUMsTUFBTSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQXlGLEVBQUFBLE1BQU0sQ0FBQ3hGLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCb0YsVUFBckI7QUFDQUcsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLEdBQWNGLFlBQWQ7QUFFQSxNQUFJRyxXQUFXLEdBQUc1RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbEI7QUFDQTJGLEVBQUFBLFdBQVcsQ0FBQ3JGLFNBQVosR0FBd0JpRixXQUF4QjtBQUVBRSxFQUFBQSxNQUFNLENBQUNoRixNQUFQLENBQWNrRixXQUFkO0FBRUEsU0FBT0YsTUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnS0FBZ0s7QUFDaEssa0pBQWtKLGtCQUFrQjtBQUNwSztBQUNBLGdEQUFnRCw0Q0FBNEMsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLDBFQUEwRSxvQkFBb0IsMEJBQTBCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDBCQUEwQixHQUFHLDBCQUEwQixvQkFBb0Isd0JBQXdCLG1CQUFtQixvQ0FBb0MsR0FBRyx3REFBd0QsdUNBQXVDLHNCQUFzQixxQkFBcUIsdUJBQXVCLDRCQUE0QixHQUFHLDRCQUE0Qix5QkFBeUIsR0FBRyxrQ0FBa0MseUJBQXlCLGlCQUFpQixrQkFBa0IsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsMkNBQTJDLHVDQUF1QyxzQkFBc0IsMkJBQTJCLGtCQUFrQixrQkFBa0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLEdBQUcsNEJBQTRCLHVDQUF1QyxrQkFBa0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHlCQUF5QixpQkFBaUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsZ0NBQWdDLHVCQUF1QixHQUFHLDBCQUEwQix1Q0FBdUMsc0JBQXNCLGtCQUFrQixzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLG9CQUFvQiwwQkFBMEIscUNBQXFDLG1CQUFtQixtQkFBbUIseUJBQXlCLG9CQUFvQixpQkFBaUIsR0FBRywwRUFBMEUsa0JBQWtCLG1CQUFtQixrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyw0QkFBNEIsbUJBQW1CLGtCQUFrQix1QkFBdUIsR0FBRyxvQ0FBb0MsbUJBQW1CLHVCQUF1Qix5QkFBeUIsdUJBQXVCLEdBQUcsd0JBQXdCLHVDQUF1Qyx1QkFBdUIsMkJBQTJCLHFCQUFxQixrQkFBa0IseUJBQXlCLGlCQUFpQixHQUFHLDBDQUEwQyxtQkFBbUIsb0JBQW9CLHlCQUF5Qix3QkFBd0IsS0FBSyxxREFBcUQsdUNBQXVDLHNCQUFzQiwyQkFBMkIsdUJBQXVCLGtCQUFrQixHQUFHLGdDQUFnQyx1Q0FBdUMsdUJBQXVCLHNCQUFzQix3QkFBd0IscUJBQXFCLEdBQUcsd0NBQXdDLG9CQUFvQixHQUFHLDRCQUE0Qix5QkFBeUIsa0JBQWtCLGtCQUFrQixHQUFHLG1DQUFtQyx5QkFBeUIsb0JBQW9CLHVCQUF1QixHQUFHLGlDQUFpQyx5QkFBeUIsa0JBQWtCLG1CQUFtQix3QkFBd0Isa0JBQWtCLEdBQUcscUJBQXFCLHNCQUFzQiwyQkFBMkIsdUNBQXVDLGtCQUFrQix1QkFBdUIsa0JBQWtCLEdBQUcsbUNBQW1DLG1CQUFtQixtQkFBbUIsZ0NBQWdDLHVCQUF1QixHQUFHLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLGlCQUFpQix1Q0FBdUMsdUJBQXVCLHNCQUFzQixrQkFBa0IsR0FBRyxxQkFBcUIsb0NBQW9DLEdBQUcsaUNBQWlDLG9CQUFvQixxQ0FBcUMsR0FBRyw0QkFBNEIsc0JBQXNCLHVDQUF1QywyQkFBMkIsdUJBQXVCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLDJCQUEyQixtQkFBbUIsbUJBQW1CLGdDQUFnQyxrQkFBa0IsdUNBQXVDLHVCQUF1QixzQkFBc0IsR0FBRywyQkFBMkIseUJBQXlCLGdCQUFnQixpQkFBaUIsR0FBRyxrQ0FBa0Msb0JBQW9CLHFDQUFxQyx1QkFBdUIsR0FBRyxvR0FBb0csb0JBQW9CLEdBQUcsOEJBQThCLHlCQUF5QixrQkFBa0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsdUNBQXVDLHVCQUF1QixHQUFHLDRCQUE0Qix5QkFBeUIsa0JBQWtCLHVCQUF1QixrQkFBa0IsbUJBQW1CLGtCQUFrQixrQkFBa0IsbUJBQW1CLHVDQUF1Qyx1QkFBdUIsR0FBRyw4QkFBOEIseUJBQXlCLGtCQUFrQix1QkFBdUIsa0JBQWtCLG1CQUFtQixrQkFBa0Isa0JBQWtCLG1CQUFtQix1Q0FBdUMsdUJBQXVCLEdBQUcsb0dBQW9HLHlCQUF5QixrQkFBa0IsaUJBQWlCLEdBQUcscUZBQXFGLHVDQUF1Qyx1QkFBdUIsc0JBQXNCLGtCQUFrQixHQUFHLHFGQUFxRix1Q0FBdUMsdUJBQXVCLHNCQUFzQixrQkFBa0IsbUJBQW1CLHVCQUF1QixHQUFHLDJCQUEyQixvQkFBb0IseUJBQXlCLEdBQUcsNkJBQTZCLG9CQUFvQix5QkFBeUIsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsR0FBRyxpRkFBaUYsbUJBQW1CLG9CQUFvQixHQUFHLHlFQUF5RSx5QkFBeUIsZ0JBQWdCLGlCQUFpQix1Q0FBdUMsdUJBQXVCLHNCQUFzQixxQkFBcUIsR0FBRywyQkFBMkIsZ0NBQWdDLEdBQUcsNkJBQTZCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLHlHQUF5RyxHQUFHLDhCQUE4QixtQkFBbUIsR0FBRywyQ0FBMkMsbUJBQW1CLG1CQUFtQixvQkFBb0IsZ0NBQWdDLGtCQUFrQix5QkFBeUIsbUJBQW1CLGlCQUFpQixTQUFTLCtCQUErQix1Q0FBdUMsdUJBQXVCLHNCQUFzQix1QkFBdUIsd0JBQXdCLEdBQUcsK0NBQStDLGtCQUFrQixtQkFBbUIsdUJBQXVCLHdCQUF3QixzR0FBc0csR0FBRyw2R0FBNkcsb0JBQW9CLDRDQUE0QywwQkFBMEIsb0JBQW9CLEdBQUcsdUJBQXVCLHlCQUF5QixrQkFBa0IsaUJBQWlCLEdBQUcsd0JBQXdCLHVDQUF1QyxzQkFBc0Isa0JBQWtCLHVCQUF1QixHQUFHLHdCQUF3Qix1Q0FBdUMsc0JBQXNCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLG1CQUFtQixvQkFBb0IsR0FBRywrR0FBK0cseUJBQXlCLEdBQUcsa0hBQWtILDBCQUEwQixHQUFHLGlHQUFpRyxvQkFBb0IsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsaUNBQWlDLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLDJCQUEyQixxQkFBcUIseUJBQXlCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLDJCQUEyQix5QkFBeUIsR0FBRyw2QkFBNkIsbUJBQW1CLG9CQUFvQix5QkFBeUIsaUJBQWlCLG1CQUFtQiw2QkFBNkIsR0FBRyw0QkFBNEIsdUNBQXVDLHNCQUFzQiwyQkFBMkIscUJBQXFCLHVCQUF1QixtQkFBbUIsa0JBQWtCLHlCQUF5QixpQkFBaUIsa0JBQWtCLEdBQUcsNEJBQTRCLG1CQUFtQixvQkFBb0IscUJBQXFCLHVDQUF1Qyx1QkFBdUIsc0JBQXNCLHlCQUF5QixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLDRCQUE0QixvQkFBb0Isd0JBQXdCLEdBQUcsb0NBQW9DLG1CQUFtQix5QkFBeUIsR0FBRyxnQ0FBZ0MsdUNBQXVDLHVCQUF1QixzQkFBc0IsMkJBQTJCLHFCQUFxQixtQkFBbUIsR0FBRyxrQ0FBa0MsdUNBQXVDLHVCQUF1QixzQkFBc0Isd0JBQXdCLHFCQUFxQixHQUFHLGtDQUFrQyx5QkFBeUIsR0FBRywwQkFBMEIsb0JBQW9CLHdCQUF3QixHQUFHLGtDQUFrQyx1Q0FBdUMsdUJBQXVCLHNCQUFzQiwyQkFBMkIscUJBQXFCLHlCQUF5QixtQkFBbUIsb0JBQW9CLEdBQUcsa0NBQWtDLGtCQUFrQixHQUFHLG1DQUFtQyxvQkFBb0IsNENBQTRDLG1CQUFtQixvQkFBb0IseUJBQXlCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLEdBQUcsc0JBQXNCLHVDQUF1QyxzQkFBc0IscUJBQXFCLHVCQUF1QixHQUFHLG9CQUFvQix1Q0FBdUMsc0JBQXNCLHFCQUFxQix1QkFBdUIsbUJBQW1CLEdBQUcsV0FBVyx1RkFBdUYsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtB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QUFtQ0MsVUFBbkMsRUFBK0NDLFNBQS9DO0FBQ0g7O0FBRURSLFFBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FyY2hzdHVkaW9zLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL3NyYy9jb21wb25lbnRzL21pZHNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9zcmMvZ2xvYmFsLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy8uL3NyYy9nbG9iYWwtc3R5bGUuY3NzPzEzMDkiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FyY2hzdHVkaW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hcmNoc3R1ZGlvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyY2hzdHVkaW9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJjaHN0dWRpb3MvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyc3RJbWcgZnJvbSAnLi4vYXNzZXRzL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLWRlbC1zb2wuanBnJztcbmltcG9ydCBzZWNvbmRJbWcgZnJvbSAnLi4vYXNzZXRzL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLTIyOGIuanBnJztcbmltcG9ydCB0aGlyZEltZyBmcm9tICcuLi9hc3NldHMvcG9ydGZvbGlvL2Rlc2t0b3AvaW1hZ2UtcHJvdG90eXBlLmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGZWF0dXJlKCl7XG4gICAgY29uc3QgZmVhdHVyZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZlYXR1cmVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlX3dyYXBwZXJcIik7XG5cbiAgICBsZXQgdG9wRmVhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcEZlYXR1cmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVfdG9wX3RpdGxlX2NvbnRhaW5lclwiKTtcblxuICAgIGxldCBmZWF0dXJlTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmVhdHVyZUxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVfbG9nb19jb250YWluZXJcIik7XG5cbiAgICBsZXQgZmVhdHVyZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmZWF0dXJlTG9nby5pbm5lclRleHQgPSBcIkZlYXR1cmVkXCI7XG5cbiAgICBsZXQgc2VlQWxsQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWVBbGxCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlZV9hbGxfYnRuX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgc2VlQWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2VlQWxsQnRuLmlubmVyVGV4dCA9IFwiU2VlIEFsbFwiO1xuICAgIHNlZUFsbEJ0bkNvbnRhaW5lci5hcHBlbmQoc2VlQWxsQnRuKTtcblxuXG4gICAgZmVhdHVyZUxvZ29Db250YWluZXIuYXBwZW5kKGZlYXR1cmVMb2dvKTtcbiAgICB0b3BGZWF0dXJlQ29udGFpbmVyLmFwcGVuZChmZWF0dXJlTG9nb0NvbnRhaW5lciwgc2VlQWxsQnRuQ29udGFpbmVyKTtcblxuXG4gICAgY29uc3QgbWFpbkltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVfbWFpbl9pbWFnZV9jb250YWluZXJcIik7XG5cblxuICAgIGxldCBmaXJzdEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaXJzdEltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaXJzdF9mZWF0dXJlX2ltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgb25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgb25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlX251bWJlcl9pbWFnZV9vbmVcIik7XG4gICAgb25lTnVtYmVyLmlubmVyVGV4dCA9IFwiMVwiO1xuXG4gICAgbGV0IGZlYXR1cmVEZXNjcmlwdGlvbkNvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmVhdHVyZURlc2NyaXB0aW9uQ29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoXCJmaXJzdF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvblwiKTtcbiAgICBsZXQgdXBwZXJmaXJzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdXBwZXJmaXJzdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ1cHBlcl9maXJzdF9mZWF0dXJlX3RleHRcIik7XG4gICAgdXBwZXJmaXJzdERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiUHJvamVjdCBEZWwgU29sXCI7XG4gICAgbGV0IGxvd2VyZmlyc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvd2VyZmlyc3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibG93ZXJfZmlyc3RfZmVhdHVyZV90ZXh0XCIpO1xuICAgIGxvd2VyZmlyc3REZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlZpZXcgQWxsIFByb2plY3RzXCI7XG4gICAgZmVhdHVyZURlc2NyaXB0aW9uQ29udGFpbmVyT25lLmFwcGVuZCh1cHBlcmZpcnN0RGVzY3JpcHRpb24sIGxvd2VyZmlyc3REZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgaW1hZ2VPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlT25lLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlX2ltYWdlX29uZVwiKTtcbiAgICBpbWFnZU9uZS5zcmMgPSBmaXJzdEltZztcbiAgICBmaXJzdEltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZU9uZSwgb25lTnVtYmVyLCBmZWF0dXJlRGVzY3JpcHRpb25Db250YWluZXJPbmUpXG5cblxuXG4gICAgbGV0IHNlY29uZEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWNvbmRJbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2Vjb25kX2ZlYXR1cmVfaW1hZ2VfY29udGFpbmVyXCIpO1xuICAgIGxldCB0d29OdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0d29OdW1iZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVfbnVtYmVyX2ltYWdlX3R3b1wiKTtcbiAgICB0d29OdW1iZXIuaW5uZXJUZXh0ID0gXCIyXCI7XG5cbiAgICBsZXQgZmVhdHVyZURlc2NyaXB0aW9uQ29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmZWF0dXJlRGVzY3JpcHRpb25Db250YWluZXJUd28uY2xhc3NMaXN0LmFkZChcInNlY29uZF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvblwiKTtcblxuICAgIGxldCB1cHBlcnNlY29uZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdXBwZXJzZWNvbmREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidXBwZXJfZmlyc3RfZmVhdHVyZV90ZXh0XCIpO1xuICAgIHVwcGVyc2Vjb25kRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCIyMjhCIFRvd2VyXCI7XG5cbiAgICBsZXQgbG93ZXJzZWNvbmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvd2Vyc2Vjb25kRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImxvd2VyX2ZpcnN0X2ZlYXR1cmVfdGV4dFwiKTtcbiAgICBsb3dlcnNlY29uZERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVmlldyBBbGwgUHJvamVjdHNcIjtcbiAgICBmZWF0dXJlRGVzY3JpcHRpb25Db250YWluZXJUd28uYXBwZW5kKHVwcGVyc2Vjb25kRGVzY3JpcHRpb24sIGxvd2Vyc2Vjb25kRGVzY3JpcHRpb24pO1xuXG5cbiAgICBsZXQgaW1hZ2VUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlVHdvLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlX2ltYWdlX3R3b1wiKTtcbiAgICBpbWFnZVR3by5zcmM9IHNlY29uZEltZztcbiAgICBzZWNvbmRJbWFnZUNvbnRhaW5lci5hcHBlbmQoaW1hZ2VUd28sIHR3b051bWJlciwgZmVhdHVyZURlc2NyaXB0aW9uQ29udGFpbmVyVHdvKTtcblxuXG5cbiAgICBsZXQgdGhpcmRJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcmRJbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGhpcmRfZmVhdHVyZV9pbWFnZV9jb250YWluZXJcIik7XG4gICAgbGV0IHRocmVlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGhyZWVOdW1iZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVfbnVtYmVyX2ltYWdlX3RocmVlXCIpO1xuICAgIHRocmVlTnVtYmVyLmlubmVyVGV4dCA9IFwiM1wiO1xuXG4gICAgbGV0IGZlYXR1cmVEZXNjcmlwdGlvbkNvbnRhaW5lclRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmZWF0dXJlRGVzY3JpcHRpb25Db250YWluZXJUaHJlZS5jbGFzc0xpc3QuYWRkKFwidGhpcmRfaW1hZ2VfbG93ZXJfZGVzY3JpcHRpb25cIik7XG4gICAgbGV0IHVwcGVydGhpcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHVwcGVydGhpcmREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidXBwZXJfZmlyc3RfZmVhdHVyZV90ZXh0XCIpO1xuICAgIHVwcGVydGhpcmREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkxlIFByb3RvdHlwZVwiO1xuICAgIGxldCBsb3dlcnRoaXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb3dlcnRoaXJkRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImxvd2VyX2ZpcnN0X2ZlYXR1cmVfdGV4dFwiKTtcbiAgICBsb3dlcnRoaXJkRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJWaWV3IEFsbCBQcm9qZWN0c1wiO1xuICAgIGZlYXR1cmVEZXNjcmlwdGlvbkNvbnRhaW5lclRocmVlLmFwcGVuZCh1cHBlcnRoaXJkRGVzY3JpcHRpb24sIGxvd2VydGhpcmREZXNjcmlwdGlvbik7XG5cblxuICAgIGxldCBpbWFnZVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZVRocmVlLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlX2ltYWdlX3RocmVlXCIpO1xuICAgIGltYWdlVGhyZWUuc3JjID0gdGhpcmRJbWc7XG4gICAgdGhpcmRJbWFnZUNvbnRhaW5lci5hcHBlbmQoaW1hZ2VUaHJlZSwgdGhyZWVOdW1iZXIsICBmZWF0dXJlRGVzY3JpcHRpb25Db250YWluZXJUaHJlZSk7XG5cbiAgICBtYWluSW1hZ2VDb250YWluZXIuYXBwZW5kKGZpcnN0SW1hZ2VDb250YWluZXIsIHNlY29uZEltYWdlQ29udGFpbmVyLCB0aGlyZEltYWdlQ29udGFpbmVyKTtcblxuXG4gICAgZmVhdHVyZVdyYXBwZXIuYXBwZW5kKHRvcEZlYXR1cmVDb250YWluZXIsIG1haW5JbWFnZUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGZlYXR1cmVXcmFwcGVyO1xufSIsImltcG9ydCBhcmNoTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgYXJyb3dMb2dvIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvaWNvbi1hcnJvdy5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhvbWVfZm9vdGVyX3dyYXBwZXJcIik7XG5cbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZV9mb290ZXJfY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYm90dG9tTG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90dG9tTG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2FyY2hfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGFyY2hMb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhcmNoTG9nb0ltZy5zcmMgPSBhcmNoTG9nbztcbiAgICBib3R0b21Mb2dvQ29udGFpbmVyLmFwcGVuZChhcmNoTG9nb0ltZyk7XG5cblxuXG5cbiAgICBsZXQgYm90dG9tQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3R0b21CdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvdHRvbV9idXR0b25fY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9ydGZvbGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfcG9ydGZvbGlvX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgcG9ydGZvbGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcG9ydGZvbGlvQnRuLmlubmVyVGV4dCA9IFwiUG9ydGZvbGlvXCI7XG4gICAgcG9ydGZvbGlvQnRuLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfcG9ydGZvbGlvX2J1dHRvblwiKTtcbiAgICBwb3J0Zm9saW9Db250YWluZXIuYXBwZW5kKHBvcnRmb2xpb0J0bik7XG5cblxuICAgIGxldCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9hYm91dF9jb250YWluZXJcIik7XG4gICAgbGV0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBhYm91dEJ0bi5pbm5lclRleHQgPSBcIkFib3V0IFVzXCI7XG4gICAgYWJvdXRCdG4uY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9hYm91dF9idXR0b25cIik7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kKGFib3V0QnRuKTtcblxuXG4gICAgbGV0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9jb250YWN0X2NvbnRhaW5lclwiKTtcbiAgICBsZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29udGFjdEJ0bi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIlxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9jb250YWN0X2J1dHRvblwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0QnRuKTtcblxuICAgIGxldCBzZWVQb3J0Zm9saW9CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlZVBvcnRmb2xpb0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lclwiKTtcblxuICAgIGxldCBzZWV0UG9ydGZvbGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2VldFBvcnRmb2xpb0J0bi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9uXCIpO1xuICAgIHNlZXRQb3J0Zm9saW9CdG4uaW5uZXJUZXh0ID0gXCJTZWUgT3VyIFBvcnRmb2xpb1wiO1xuXG4gICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhcnJvdy5zcmMgPSBhcnJvd0xvZ287XG5cbiAgICBzZWVQb3J0Zm9saW9CdG5Db250YWluZXIuYXBwZW5kKHNlZXRQb3J0Zm9saW9CdG4sIGFycm93KTtcblxuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5hcHBlbmQoYm90dG9tTG9nb0NvbnRhaW5lciAscG9ydGZvbGlvQ29udGFpbmVyLCBhYm91dENvbnRhaW5lciwgY29udGFjdENvbnRhaW5lcik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZChib3R0b21CdG5Db250YWluZXIsIHNlZVBvcnRmb2xpb0J0bkNvbnRhaW5lcik7XG4gICAgZm9vdGVyV3JhcHBlci5hcHBlbmQoZm9vdGVyQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSIsImltcG9ydCBwYXJhbW91ckltZyBmcm9tICcuLi9hc3NldHMvaG9tZS9kZXNrdG9wL2ltYWdlLWhlcm8tcGFyYW1vdXIuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl93cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfaW1hZ2VfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBwYXJhbW91ckltZztcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9kZXNjcmlwdGlvbl9jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB1cHBlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdXBwZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwcGVyX2NvbnRhaW5lclwiKTtcblxuICAgIGxldCB0aXRsZVVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVVcHBlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3RpdGxlX3VwcGVyXCIpO1xuICAgIHRpdGxlVXBwZXIuaW5uZXJUZXh0ID0gXCJQcm9qZWN0XCI7XG5cbiAgICBsZXQgdGl0bGVMb3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlTG93ZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl90aXRsZV9sb3dlclwiKTtcbiAgICB0aXRsZUxvd2VyLmlubmVyVGV4dCA9IFwiUGFyYW1vdXJcIjtcblxuICAgIHVwcGVyQ29udGFpbmVyLmFwcGVuZCh0aXRsZVVwcGVyLCB0aXRsZUxvd2VyKTtcblxuICAgIGNvbnN0IHBhcmFncmFwZ2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhcmFncmFwZ2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9wYXJhZ3JhcGhfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGxvd2VyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG93ZXJQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcImhlYWRlcl9sb3dlcl9wYXJhZ3JhcGhcIik7XG4gICAgbG93ZXJQYXJhZ3JhcGguaW5uZXJUZXh0ID0gXCJQcm9qZWN0IG1hZGUgZm9yIGFuIGFydCBtdXNldW0gbmVhciBTb3V0aHdlc3QgTG9uZG9uLiBQcm9qZWN0IFBhcmFtb3VyIGlzIGEgc3RhdGVtZW50IG9mIGJvbGQsIG1vZGVybiBhcmNoaXRlY3R1cmUuXCI7XG5cbiAgICBwYXJhZ3JhcGdoQ29udGFpbmVyLmFwcGVuZChsb3dlclBhcmFncmFwaCk7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZCh1cHBlckNvbnRhaW5lciwgcGFyYWdyYXBnaENvbnRhaW5lcik7XG4gICAgLyoqKioqKioqKioqKioqKioqICovXG5cbiAgICBjb25zdCBwb3J0Zm9saW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcnRmb2xpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX3BvcnRmb2xpb19jb250YWluZXJcIik7XG5cbiAgICBsZXQgaW5uZXJQb3J0Zm9saW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpbm5lclBvcnRmb2xpby5jbGFzc0xpc3QuYWRkKFwicG9ydGZvbGlvX2lubmVyX3RleHRcIik7XG4gICAgaW5uZXJQb3J0Zm9saW8uaW5uZXJUZXh0ID0gXCJTZWUgT3VyIFBvcnRmb2xpb1wiO1xuXG4gICAgcG9ydGZvbGlvQ29udGFpbmVyLmFwcGVuZChpbm5lclBvcnRmb2xpbyk7XG5cbiAgICBjb25zdCBib3R0b21OYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3R0b21OYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJib3R0b21fbmF2aWdhdGlvbl9iYXJcIik7XG5cbiAgICBsZXQgYnV0dG9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYnV0dG9uT25lLmNsYXNzTGlzdC5hZGQoXCJib3R0b21fb25lX2J0blwiKTtcbiAgICBidXR0b25PbmUuaW5uZXJUZXh0ID0gXCIwMVwiO1xuICAgIGxldCBidXR0b25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBidXR0b25Ud28uY2xhc3NMaXN0LmFkZChcImJvdHRvbV90d29fYnRuXCIpO1xuICAgIGJ1dHRvblR3by5pbm5lclRleHQgPSBcIjAyXCJcbiAgICBsZXQgYnV0dG9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBidXR0b25UaHJlZS5jbGFzc0xpc3QuYWRkKFwiYm90dG9tX3RocmVlX2J0blwiKTtcbiAgICBidXR0b25UaHJlZS5pbm5lclRleHQgPSBcIjAzXCI7XG4gICAgbGV0IGJ1dHRvbkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBidXR0b25Gb3VyLmNsYXNzTGlzdC5hZGQoXCJib3R0b21fZm91cl9idG5cIik7XG4gICAgYnV0dG9uRm91ci5pbm5lclRleHQgPSBcIjA0XCI7XG5cbiAgICBib3R0b21OYXZpZ2F0aW9uLmFwcGVuZChidXR0b25PbmUsIGJ1dHRvblR3bywgYnV0dG9uVGhyZWUsIGJ1dHRvbkZvdXIpO1xuXG5cblxuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKGltYWdlQ29udGFpbmVyLCBkZXNjcmlwdGlvbkNvbnRhaW5lciwgcG9ydGZvbGlvQ29udGFpbmVyLCBib3R0b21OYXZpZ2F0aW9uKTtcbiAgICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0iLCJpbXBvcnQgaW1hZ2VtaWRkbGUgZnJvbSAnLi4vYXNzZXRzL2hvbWUvZGVza3RvcC9pbWFnZS13ZWxjb21lLmpwZyc7XG5pbXBvcnQgaW1hZ2VCb3R0b20gZnJvbSBcIi4uL2Fzc2V0cy9ob21lL2Rlc2t0b3AvaW1hZ2Utc21hbGwtdGVhbS5qcGdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZFNlY3Rpb24oKXtcblxuICAgIGNvbnN0IG1pZGRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pZGRsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1pZGRsZV9zZWN0aW9uX3dyYXBwZXJcIik7XG5cbiAgICBjb25zdCBtaWRkbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pZGRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWlkZGxlX3NlY3Rpb25fdGl0bGVfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IG1pZGRsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWlkZGxlVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1pZGRsZV9zZWN0aW9uX3RpdGxlXCIpO1xuICAgIG1pZGRsZVRpdGxlLmlubmVyVGV4dCA9IFwiV2VsY29tZVwiO1xuICAgIG1pZGRsZUNvbnRhaW5lci5hcHBlbmQobWlkZGxlVGl0bGUpO1xuXG4gICAgY29uc3QgbWlkZGxlRGVzY3JpcHRpb25JbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pZGRsZURlc2NyaXB0aW9uSW1hZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVfaW1hZ2VfZGVzY3JpcHRpb25fY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWlkZGxlX3NlY3Rpb25fZGVzY3JpcHRpb25fY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvblRpdGxlLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBBcmNoIFN0dWRpb1wiO1xuXG4gICAgbGV0IG1pZGRsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWlkZGxlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1pZGRsZV9zZWN0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgIG1pZGRsZURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiV2UgaGF2ZSBhIHVuaXF1ZSBuZXR3b3JrIGFuZCBza2lsbHNldCB0byBoZWxwIGJyaW5nIHlvdXIgcHJvamVjdHMgdG8gbGlmZS4gT3VyIHNtYWxsIHRlYW0gb2YgaGlnaGx5IHNraWxsZWQgaW5kaXZpZHVhbHMgY29tYmluZWQgd2l0aCBvdXIgbGFyZ2UgbmV0d29yayBwdXQgdXMgaW4gYSBzdHJvbmcgcG9zaXRpb24gdG8gZGVsaXZlciBleGNlcHRpb25hbCByZXN1bHRzLiBPdmVyIHRoZSBwYXN0IDEwIHllYXJzLCB3ZSBoYXZlIHdvcmtlZCBvbiBhbGwga2luZHMgb2YgcHJvamVjdHMuIEZyb20gc3RhdGlvbnMgdG8gaGlnaC1yaXNlIGJ1aWxkaW5ncywgd2UgY3JlYXRlIHNwYWNlcyB0aGF0IGluc3BpcmUgYW5kIGRlbGlnaHQuIFdlIHdvcmsgY2xvc2VseSB3aXRoIG91ciBjbGllbnRzIHNvIHRoYXQgd2UgdW5kZXJzdGFuZCB0aGUgaW50cmljYWNpZXMgb2YgZWFjaCBwcm9qZWN0LiBUaGlzIGFsbG93cyB1cyB0byB3b3JrIGluIGhhcm1vbnkgdGhlIHN1cnJvdW5kaW5nIGFyZWEgdG8gY3JlYXRlIHRydWx5IHN0dW5uaW5nIHByb2plY3RzIHRoYXQgd2lsbCBzdGFuZCB0aGUgdGVzdCBvZiB0aW1lLlwiXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvblRpdGxlLCBtaWRkbGVEZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVfaW1hZ2VfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZW1pZGRsZTtcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG5cblxuXG4gICAgbGV0IGltYWdlQ29udGFpbmVyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZUNvbnRhaW5lckJvdHRvbS5jbGFzc0xpc3QuYWRkKFwibWlkZGxlX2ltYWdlX2JvdHRvbV9jb250YWluZXJcIik7XG5cbiAgICBsZXQgaW1hZ2VUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlVHdvLnNyYyA9IGltYWdlQm90dG9tO1xuXG5cbiAgICBjb25zdCBzbWFsbFRlYW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbWFsbFRlYW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbWFsbF90ZWFtX2JvdHRvbV9jb250YWluZXJcIik7XG5cbiAgICBsZXQgc21hbGxUZWFtc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc21hbGxUZWFtc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbF90ZWFtc190aXRsZVwiKTtcbiAgICBzbWFsbFRlYW1zVGl0bGUuaW5uZXJUZXh0ID0gXCJTbWFsbCB0ZWFtLCBiaWcgaWRlYXNcIjtcblxuICAgIGxldCBhYm91dEJvdHRvbUJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRCb3R0b21CdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0X2JvdHRvbV9idXR0b25fY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGFib3V0Qm90dG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWJvdXRCb3R0b21CdG4uY2xhc3NMaXN0LmFkZChcImFib3V0X2JvdHRvbV9idXR0b25cIik7XG4gICAgYWJvdXRCb3R0b21CdG4uaW5uZXJUZXh0ID0gXCJBYm91dCB1c1wiO1xuXG4gICAgYWJvdXRCb3R0b21CdG5Db250YWluZXIuYXBwZW5kKGFib3V0Qm90dG9tQnRuKTtcblxuICAgIHNtYWxsVGVhbXNDb250YWluZXIuYXBwZW5kKHNtYWxsVGVhbXNUaXRsZSwgYWJvdXRCb3R0b21CdG5Db250YWluZXIpO1xuXG5cbiAgICBpbWFnZUNvbnRhaW5lckJvdHRvbS5hcHBlbmQoaW1hZ2VUd28sIHNtYWxsVGVhbXNDb250YWluZXIpO1xuXG5cblxuXG5cbiAgICBtaWRkbGVEZXNjcmlwdGlvbkltYWdlV3JhcHBlci5hcHBlbmQoY29udGVudENvbnRhaW5lciwgaW1hZ2VDb250YWluZXIpO1xuXG4gICAgbWlkZGxlV3JhcHBlci5hcHBlbmQobWlkZGxlQ29udGFpbmVyLCBtaWRkbGVEZXNjcmlwdGlvbkltYWdlV3JhcHBlciwgaW1hZ2VDb250YWluZXJCb3R0b20pO1xuXG4gICAgcmV0dXJuIG1pZGRsZVdyYXBwZXI7XG5cbn0iLCJpbXBvcnQgbmF2TG9nbyBmcm9tICcuLi9hc3NldHMvbG9nby5zdmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCl7XG4gICAgY29uc3QgbmF2YmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2YmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyX3dyYXBwZXJcIik7XG5cbiAgICBjb25zdCBuYXZMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZMb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZfbG9nb19jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvLnNyYyA9IG5hdkxvZ287XG4gICAgbmF2TG9nb0NvbnRhaW5lci5hcHBlbmQobG9nbyk7XG5cbiAgICBjb25zdCBuYXZCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2X2J1dHRvbl9jb250YWluZXJcIik7XG5cbiAgICBsZXQgYnV0dG9uT25lID0gY3JlYXRlQnV0dG9uKFwicG9ydGZvbGlvX2FuY2hvclwiLCBcIlBvcnRmb2xpb1wiLCBcInBvcnRmb2xpby5odG1sXCIpO1xuICAgIGxldCBidXR0b25Ud28gPSBjcmVhdGVCdXR0b24oXCJhYm91dF9hbmNob3JcIiwgXCJBYm91dCBVc1wiLCBcImFib3V0Lmh0bWxcIik7XG4gICAgbGV0IGJ1dHRvblRocmVlID0gY3JlYXRlQnV0dG9uKFwiY29udGFjdF9hbmNob3JcIiwgXCJDb250YWN0XCIsIFwiY29udGFjdC5odG1sXCIpO1xuXG4gICAgbmF2QnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b25PbmUsIGJ1dHRvblR3bywgYnV0dG9uVGhyZWUpO1xuXG4gICAgbmF2YmFyV3JhcHBlci5hcHBlbmQobmF2TG9nb0NvbnRhaW5lciwgbmF2QnV0dG9uQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBuYXZiYXJXcmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oYW5jaG9yTmFtZSwgaW5uZXJCdXR0b24sIGFuY2hvclNvdXJjZSl7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKGFuY2hvck5hbWUpO1xuICAgIGFuY2hvci5ocmVmID0gYW5jaG9yU291cmNlO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gaW5uZXJCdXR0b247XG5cbiAgICBhbmNob3IuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBhbmNob3I7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOndnaHRANzAwJmZhbWlseT1TcGFydGFuOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOndnaHRANzAwJmZhbWlseT1TcGFydGFuOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LXNwYXJ0YW46ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuaHRtbCwgYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKiBOYXZiYXIgKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLm5hdmJhcl93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogMTE0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZfYnV0dG9uX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxuICAgIHdpZHRoOiA1MTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcblxcbi5wb3J0Zm9saW9fYW5jaG9yLCAuYWJvdXRfYW5jaG9yLCAuY29udGFjdF9hbmNob3J7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjN2Q4MjhmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oZWFkZXJfaW1hZ2VfY29udGFpbmVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfZGVzY3JpcHRpb25fY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjk4cHg7XFxuICAgIGxlZnQ6IDM1N3B4O1xcbn1cXG5cXG4udXBwZXJfY29udGFpbmVye1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uaGVhZGVyX3RpdGxlX3VwcGVyLCAuaGVhZGVyX3RpdGxlX2xvd2Vye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaGVhZGVyX3BhcmFncmFwaF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA0MTJweDtcXG59XFxuXFxuLmhlYWRlcl9sb3dlcl9wYXJhZ3JhcGh7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhlYWRlcl9wb3J0Zm9saW9fY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjAwcHg7XFxuICAgIGxlZnQ6IDM1N3B4O1xcbiAgICB3aWR0aDogMjUycHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnBvcnRmb2xpb19pbm5lcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXRvcDogMTElO1xcbiAgICBtYXJnaW4tbGVmdDogMzZweDtcXG59XFxuXFxuLmJvdHRvbV9uYXZpZ2F0aW9uX2JhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01MnB4O1xcbiAgICBsZWZ0OiA4NXB4O1xcbn1cXG5cXG4uYm90dG9tX29uZV9idG4sIC5ib3R0b21fdHdvX2J0biwgLmJvdHRvbV90aHJlZV9idG4sIC5ib3R0b21fZm91cl9idG57XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAzMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLm1pZGRsZV9zZWN0aW9uX3dyYXBwZXJ7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxufVxcblxcbi5taWRkbGVfc2VjdGlvbl90aXRsZV9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA5NjhweDtcXG4gICAgbWFyZ2luLXRvcDogNTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1OXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubWlkZGxlX3NlY3Rpb25fdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTVweDtcXG4gICAgY29sb3I6ICNlZWVmZjQ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5taWRkbGVfc2VjdGlvbl9kZXNjcmlwdGlvbl9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA0NDZweDtcXG4gICAgaGVpZ2h0OiA0OTNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM0OXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNDRweDtcXG5cXG59XFxuLm1pZGRsZV9zZWN0aW9uX2Rlc2NyaXB0aW9uX2NvbnRhaW5lciA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLm1pZGRsZV9zZWN0aW9uX2Rlc2NyaXB0aW9ue1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgY29sb3I6ICM2MDYzNmQ7XFxufVxcblxcbi5taWRkbGVfaW1hZ2VfZGVzY3JpcHRpb25fY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWlkZGxlX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMjNweDtcXG4gICAgbGVmdDogMTIycHg7XFxufVxcblxcbi5taWRkbGVfaW1hZ2VfYm90dG9tX2NvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDU2MXB4O1xcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xcbn1cXG5cXG4uc21hbGxfdGVhbV9ib3R0b21fY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTQwNHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBsZWZ0OiAzNDlweDtcXG59XFxuLnNtYWxsX3RlYW1zX3RpdGxle1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYWJvdXRfYm90dG9tX2J1dHRvbl9jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxODdweDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDIzO1xcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xcbn1cXG4uYWJvdXRfYm90dG9tX2J1dHRvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIGxlZnQ6IDMzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZmVhdHVyZV93cmFwcGVye1xcbiAgICBtYXJnaW46IDE4NnB4IDE1NHB4IDBweCAxNTRweDtcXG59XFxuXFxuLmZlYXR1cmVfdG9wX3RpdGxlX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmVhdHVyZV9sb2dvX2NvbnRhaW5lcntcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mZWF0dXJlX2xvZ29fY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uc2VlX2FsbF9idG5fY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxNjlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zZWVfYWxsX2J0bl9jb250YWluZXIgcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblxcbi5mZWF0dXJlX21haW5faW1hZ2VfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxufVxcblxcbi5maXJzdF9mZWF0dXJlX2ltYWdlX2NvbnRhaW5lciwgLnNlY29uZF9mZWF0dXJlX2ltYWdlX2NvbnRhaW5lciwgLnRoaXJkX2ZlYXR1cmVfaW1hZ2VfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDU2MHB4O1xcbn1cXG5cXG4uZmVhdHVyZV9udW1iZXJfaW1hZ2Vfb25le1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTU0M3B4O1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBsZWZ0OiAyODNweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiA4NnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZlYXR1cmVfbnVtYmVyX2ltYWdlX3R3b3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC01NDNweDtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbGVmdDogMjE3cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTMzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZmVhdHVyZV9udW1iZXJfaW1hZ2VfdGhyZWV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNTQzcHg7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGxlZnQ6IDIzMnB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEzM3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZpcnN0X2ltYWdlX2xvd2VyX2Rlc2NyaXB0aW9uLCAuc2Vjb25kX2ltYWdlX2xvd2VyX2Rlc2NyaXB0aW9uLCAudGhpcmRfaW1hZ2VfbG93ZXJfZGVzY3JpcHRpb257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzQ0cHg7XFxuICAgIGxlZnQ6IDU3cHg7XFxufVxcblxcbi51cHBlcl9maXJzdF9mZWF0dXJlX3RleHQsIC51cHBlcl9zZWNvbmRfZmVhdHVyZV90ZXh0LCAudXBwZXJfdGhpcmRfZmVhdHVyZV90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxvd2VyX2ZpcnN0X2ZlYXR1cmVfdGV4dCwgLmxvd2VyX3NlY29uZF9mZWF0dXJlX3RleHQsIC5sb3dlcl90aGlyZF9mZWF0dXJlX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5ob21lX2Zvb3Rlcl9jb250YWluZXJ7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvdHRvbV9idXR0b25fY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLThweDtcXG4gICAgbGVmdDogMTU0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVmZjQ7XFxufVxcblxcbi5mb290ZXJfYXJjaF9jb250YWluZXIsIC5mb290ZXJfcG9ydGZvbGlvX2NvbnRhaW5lciwgLmZvb3Rlcl9hYm91dF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLmZvb3Rlcl9wb3J0Zm9saW9fYnV0dG9uLCAuZm9vdGVyX2Fib3V0X2J1dHRvbiwgLmZvb3Rlcl9jb250YWN0X2J1dHRvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDc5cHg7XFxuICAgIGxlZnQ6IDY5cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjN2Q4MjhmO1xcbn1cXG5cXG4uZm9vdGVyX2FyY2hfY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDIzO1xcbn1cXG4uZm9vdGVyX2FyY2hfY29udGFpbmVyIGltZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDc0cHg7XFxuICAgIGxlZnQ6IDQ2cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEyJSkgc2F0dXJhdGUoNzQ5MyUpIGh1ZS1yb3RhdGUoMTc5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDExMyUpO1xcbn1cXG5cXG4uZm9vdGVyX2NvbnRhY3RfY29udGFpbmVye1xcbiAgICB3aWR0aDogMzg0cHg7XFxufVxcblxcbi5mb290ZXJfc2VlX3BvcnRmb2xpb19idXR0b25fY29udGFpbmVye1xcbiAgICB3aWR0aDogMjUycHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMTAxOHB4O1xcbiAgICB0b3A6IDIwNXB4O1xcbiAgICBcXG59XFxuLmZvb3Rlcl9zZWVfcG9ydGZvbGlvX2J1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMjdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5mb290ZXJfc2VlX3BvcnRmb2xpb19idXR0b25fY29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWFyZ2luLXRvcDogMjdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDczMSUpIGh1ZS1yb3RhdGUoMjk4ZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDEwMCUpO1xcbn1cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKiBQb3J0Zm9saW8gUGFnZSAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnBhbmVsX2hvbGRlcl9ncmlkX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogNDZweDtcXG59XFxuXFxuLmNvbnRlbnRfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTExMXB4O1xcbiAgICBsZWZ0OiA0NXB4O1xcbn1cXG4ucG9ydGZvbGlvX3VwcGVyX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucG9ydGZvbGlvX2xvd2VyX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblxcblxcbi5wb3J0Zm9saW9fY29udGFpbmVye1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNTYwcHg7XFxufVxcblxcbi5wb3J0Zm9saW9fb25lX2NvbnRhaW5lciwgLnBvcnRmb2xpb19mb3VyX2NvbnRhaW5lcixcXG4ucG9ydGZvbGlvX3NldmVuX2NvbnRhaW5lciwgLnBvcnRmb2xpb190ZW5fY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTYxcHg7XFxufVxcblxcbi5wb3J0Zm9saW9fdGhyZWVfY29udGFpbmVyLCAucG9ydGZvbGlvX3NpeF9jb250YWluZXIsXFxuLnBvcnRmb2xpb19uaW5lX2NvbnRhaW5lciwgLnBvcnRmb2xpb190d2VsdmVfY29udGFpbmVye1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2MXB4O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKipBYm91dCBQYWdlICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmFib3V0X2hlYWRlcl93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWJvdXRfZmlyc3RfY29udGFpbmVye1xcbiAgICB3aWR0aDogNTUzcHg7XFxufVxcblxcbi5hYm91dF9maXJzdF90aXRsZV9jb250YWluZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTVweDtcXG4gICAgY29sb3I6ICNlZWVmZjQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTE3OXB4O1xcbiAgICB0b3A6IDk1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi5hYm91dF9maXJzdF90aXRsZV9jb250YWluZXIgcHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5hYm91dF9pbWFnZV9jb250YWluZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjFweDtcXG59XFxuXFxuLmFib3V0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogNjkycHg7XFxuICAgIGhlaWdodDogNTAzcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgbGVmdDogLTE1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWJvdXRfdXBwZXJfdGl0bGVfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjE3cHg7XFxuICAgIGxlZnQ6IDIwMHB4O1xcbn1cXG5cXG4uYWJvdXRfbG93ZXJfdGl0bGVfdGV4dHtcXG4gICAgd2lkdGg6IDQ0NXB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjb2xvcjogIzYwNjM2ZDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1MHB4O1xcbiAgICBsZWZ0OiAyMDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcblxcblxcbi5hYm91dF9taWRkbGVfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTY5cHg7XFxufVxcblxcbi5hYm91dF9taWRkbGVfY29udGVudF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2MXB4O1xcbn1cXG4uYWJvdXRfbWlkZGxlX3VwcGVyX2NvbnRhaW5lcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICB3aWR0aDogMjYzcHg7XFxufVxcblxcbi5hYm91dF9taWRkbGVfbG93ZXJfY29udGFpbmVye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgY29sb3I6ICM2MDYzNmQ7XFxufVxcblxcbi5hYm91dF9taWRkbGVfaW1hZ2VfY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTI0cHg7XFxufVxcblxcbi5hYm91dF9sZWFkZXJfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTkxcHg7XFxufVxcblxcbi5hYm91dF9sZWFkZXJfY29udGFpbmVyX3RpdGxle1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgY29sb3I6ICMxYjFkMjM7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjFweDtcXG4gICAgd2lkdGg6IDI0OXB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4uYWJvdXRfbGVhZGVyX2NvbnRhaW5lcl90aXRsZSBwe1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuXFxuLmFib3V0X2xlYWRlcl9ncmlkX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgd2lkdGg6IDczMHB4O1xcbiAgICBoZWlnaHQ6IDg2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTg1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxODVweDtcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXG59XFxuXFxuLmFib3V0X3VwcGVyX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYWJvdXRfbG93ZXJfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICMxYjFkMjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxxQ0FBcUM7QUFDekM7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQSxxREFBcUQ7QUFDckQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxn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ZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZmYW1pbHk9U3BhcnRhbjp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZmYW1pbHk9U3BhcnRhbjp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3R7XFxuICAgIC0tZm9udC1zcGFydGFuOiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbmh0bWwsIGJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKiogTmF2YmFyICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5uYXZiYXJfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDExNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2X2J1dHRvbl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbiAgICB3aWR0aDogNTE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5cXG4ucG9ydGZvbGlvX2FuY2hvciwgLmFib3V0X2FuY2hvciwgLmNvbnRhY3RfYW5jaG9ye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogIzdkODI4ZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyX2Rlc2NyaXB0aW9uX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI5OHB4O1xcbiAgICBsZWZ0OiAzNTdweDtcXG59XFxuXFxuLnVwcGVyX2NvbnRhaW5lcntcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmhlYWRlcl90aXRsZV91cHBlciwgLmhlYWRlcl90aXRsZV9sb3dlcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmhlYWRlcl9wYXJhZ3JhcGhfY29udGFpbmVye1xcbiAgICB3aWR0aDogNDEycHg7XFxufVxcblxcbi5oZWFkZXJfbG93ZXJfcGFyYWdyYXBoe1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5oZWFkZXJfcG9ydGZvbGlvX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwMHB4O1xcbiAgICBsZWZ0OiAzNTdweDtcXG4gICAgd2lkdGg6IDI1MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wb3J0Zm9saW9faW5uZXJfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi10b3A6IDExJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHg7XFxufVxcblxcbi5ib3R0b21fbmF2aWdhdGlvbl9iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNTJweDtcXG4gICAgbGVmdDogODVweDtcXG59XFxuXFxuLmJvdHRvbV9vbmVfYnRuLCAuYm90dG9tX3R3b19idG4sIC5ib3R0b21fdGhyZWVfYnRuLCAuYm90dG9tX2ZvdXJfYnRue1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMzFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5taWRkbGVfc2VjdGlvbl93cmFwcGVye1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcbn1cXG5cXG4ubWlkZGxlX3NlY3Rpb25fdGl0bGVfY29udGFpbmVye1xcbiAgICB3aWR0aDogOTY4cHg7XFxuICAgIG1hcmdpbi10b3A6IDU2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTlweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1pZGRsZV9zZWN0aW9uX3RpdGxle1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XFxuICAgIGNvbG9yOiAjZWVlZmY0O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubWlkZGxlX3NlY3Rpb25fZGVzY3JpcHRpb25fY29udGFpbmVye1xcbiAgICB3aWR0aDogNDQ2cHg7XFxuICAgIGhlaWdodDogNDkzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNDlweDtcXG4gICAgbWFyZ2luLXRvcDogLTQ0cHg7XFxuXFxufVxcbi5taWRkbGVfc2VjdGlvbl9kZXNjcmlwdGlvbl9jb250YWluZXIgOmZpcnN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5taWRkbGVfc2VjdGlvbl9kZXNjcmlwdGlvbntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiAjNjA2MzZkO1xcbn1cXG5cXG4ubWlkZGxlX2ltYWdlX2Rlc2NyaXB0aW9uX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1pZGRsZV9pbWFnZV9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTIzcHg7XFxuICAgIGxlZnQ6IDEyMnB4O1xcbn1cXG5cXG4ubWlkZGxlX2ltYWdlX2JvdHRvbV9jb250YWluZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1NjFweDtcXG4gICAgbWFyZ2luLXRvcDogNjdweDtcXG59XFxuXFxuLnNtYWxsX3RlYW1fYm90dG9tX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00MDRweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgbGVmdDogMzQ5cHg7XFxufVxcbi5zbWFsbF90ZWFtc190aXRsZXtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmFib3V0X2JvdHRvbV9idXR0b25fY29udGFpbmVye1xcbiAgICB3aWR0aDogMTg3cHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG4gICAgbWFyZ2luLXRvcDogMjlweDtcXG59XFxuLmFib3V0X2JvdHRvbV9idXR0b257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICBsZWZ0OiAzM3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZlYXR1cmVfd3JhcHBlcntcXG4gICAgbWFyZ2luOiAxODZweCAxNTRweCAwcHggMTU0cHg7XFxufVxcblxcbi5mZWF0dXJlX3RvcF90aXRsZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZlYXR1cmVfbG9nb19jb250YWluZXJ7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZmVhdHVyZV9sb2dvX2NvbnRhaW5lciBwe1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnNlZV9hbGxfYnRuX2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTY5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VlX2FsbF9idG5fY29udGFpbmVyIHB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZmVhdHVyZV9tYWluX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xcbn1cXG5cXG4uZmlyc3RfZmVhdHVyZV9pbWFnZV9jb250YWluZXIsIC5zZWNvbmRfZmVhdHVyZV9pbWFnZV9jb250YWluZXIsIC50aGlyZF9mZWF0dXJlX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA1NjBweDtcXG59XFxuXFxuLmZlYXR1cmVfbnVtYmVyX2ltYWdlX29uZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC01NDNweDtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbGVmdDogMjgzcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogODZweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mZWF0dXJlX251bWJlcl9pbWFnZV90d297XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNTQzcHg7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGxlZnQ6IDIxN3B4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEzM3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZlYXR1cmVfbnVtYmVyX2ltYWdlX3RocmVle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTU0M3B4O1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBsZWZ0OiAyMzJweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMzNweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5maXJzdF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvbiwgLnNlY29uZF9pbWFnZV9sb3dlcl9kZXNjcmlwdGlvbiwgLnRoaXJkX2ltYWdlX2xvd2VyX2Rlc2NyaXB0aW9ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM0NHB4O1xcbiAgICBsZWZ0OiA1N3B4O1xcbn1cXG5cXG4udXBwZXJfZmlyc3RfZmVhdHVyZV90ZXh0LCAudXBwZXJfc2Vjb25kX2ZlYXR1cmVfdGV4dCwgLnVwcGVyX3RoaXJkX2ZlYXR1cmVfdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5sb3dlcl9maXJzdF9mZWF0dXJlX3RleHQsIC5sb3dlcl9zZWNvbmRfZmVhdHVyZV90ZXh0LCAubG93ZXJfdGhpcmRfZmVhdHVyZV90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaG9tZV9mb290ZXJfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib3R0b21fYnV0dG9uX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC04cHg7XFxuICAgIGxlZnQ6IDE1NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZmY0O1xcbn1cXG5cXG4uZm9vdGVyX2FyY2hfY29udGFpbmVyLCAuZm9vdGVyX3BvcnRmb2xpb19jb250YWluZXIsIC5mb290ZXJfYWJvdXRfY29udGFpbmVye1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcbi5mb290ZXJfcG9ydGZvbGlvX2J1dHRvbiwgLmZvb3Rlcl9hYm91dF9idXR0b24sIC5mb290ZXJfY29udGFjdF9idXR0b257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA3OXB4O1xcbiAgICBsZWZ0OiA2OXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogIzdkODI4ZjtcXG59XFxuXFxuLmZvb3Rlcl9hcmNoX2NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQyMztcXG59XFxuLmZvb3Rlcl9hcmNoX2NvbnRhaW5lciBpbWd7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA3NHB4O1xcbiAgICBsZWZ0OiA0NnB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDc0OTMlKSBodWUtcm90YXRlKDE3OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMTMlKTtcXG59XFxuXFxuLmZvb3Rlcl9jb250YWN0X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM4NHB4O1xcbn1cXG5cXG4uZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDI1MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMjM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwMThweDtcXG4gICAgdG9wOiAyMDVweDtcXG4gICAgXFxufVxcbi5mb290ZXJfc2VlX3BvcnRmb2xpb19idXR0b257XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyX3NlZV9wb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lciBpbWd7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcbiAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDMlKSBzYXR1cmF0ZSg3MzElKSBodWUtcm90YXRlKDI5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMDAlKTtcXG59XFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKiogUG9ydGZvbGlvIFBhZ2UgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5wYW5lbF9ob2xkZXJfZ3JpZF9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDQ2cHg7XFxufVxcblxcbi5jb250ZW50X2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMTFweDtcXG4gICAgbGVmdDogNDVweDtcXG59XFxuLnBvcnRmb2xpb191cHBlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnBvcnRmb2xpb19sb3dlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG5cXG4ucG9ydGZvbGlvX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDU2MHB4O1xcbn1cXG5cXG4ucG9ydGZvbGlvX29uZV9jb250YWluZXIsIC5wb3J0Zm9saW9fZm91cl9jb250YWluZXIsXFxuLnBvcnRmb2xpb19zZXZlbl9jb250YWluZXIsIC5wb3J0Zm9saW9fdGVuX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDE2MXB4O1xcbn1cXG5cXG4ucG9ydGZvbGlvX3RocmVlX2NvbnRhaW5lciwgLnBvcnRmb2xpb19zaXhfY29udGFpbmVyLFxcbi5wb3J0Zm9saW9fbmluZV9jb250YWluZXIsIC5wb3J0Zm9saW9fdHdlbHZlX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjFweDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqQWJvdXQgUGFnZSAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5hYm91dF9oZWFkZXJfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFib3V0X2ZpcnN0X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDU1M3B4O1xcbn1cXG5cXG4uYWJvdXRfZmlyc3RfdGl0bGVfY29udGFpbmVye1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XFxuICAgIGNvbG9yOiAjZWVlZmY0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNzlweDtcXG4gICAgdG9wOiA5NXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4uYWJvdXRfZmlyc3RfdGl0bGVfY29udGFpbmVyIHB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYWJvdXRfaW1hZ2VfY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTYxcHg7XFxufVxcblxcbi5hYm91dF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDY5MnB4O1xcbiAgICBoZWlnaHQ6IDUwM3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IC0xNTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFib3V0X3VwcGVyX3RpdGxlX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDIxN3B4O1xcbiAgICBsZWZ0OiAyMDBweDtcXG59XFxuXFxuLmFib3V0X2xvd2VyX3RpdGxlX3RleHR7XFxuICAgIHdpZHRoOiA0NDVweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY29sb3I6ICM2MDYzNmQ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNTBweDtcXG4gICAgbGVmdDogMjAwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5cXG4uYWJvdXRfbWlkZGxlX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDE2OXB4O1xcbn1cXG5cXG4uYWJvdXRfbWlkZGxlX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNjFweDtcXG59XFxuLmFib3V0X21pZGRsZV91cHBlcl9jb250YWluZXJ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgd2lkdGg6IDI2M3B4O1xcbn1cXG5cXG4uYWJvdXRfbWlkZGxlX2xvd2VyX2NvbnRhaW5lcntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiAjNjA2MzZkO1xcbn1cXG5cXG4uYWJvdXRfbWlkZGxlX2ltYWdlX2NvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDEyNHB4O1xcbn1cXG5cXG4uYWJvdXRfbGVhZGVyX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDE5MXB4O1xcbn1cXG5cXG4uYWJvdXRfbGVhZGVyX2NvbnRhaW5lcl90aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3BhcnRhbik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICBtYXJnaW4tbGVmdDogMTYxcHg7XFxuICAgIHdpZHRoOiAyNDlweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLmFib3V0X2xlYWRlcl9jb250YWluZXJfdGl0bGUgcHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcblxcbi5hYm91dF9sZWFkZXJfZ3JpZF9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHdpZHRoOiA3MzBweDtcXG4gICAgaGVpZ2h0OiA4NjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4NXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTg1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxufVxcblxcbi5hYm91dF91cHBlcl90ZXh0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zcGFydGFuKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogIzFiMWQyMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmFib3V0X2xvd2VyX3RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNwYXJ0YW4pO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjMWIxZDIzO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tICcuLi9nbG9iYWwtc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZU5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgbWlkU2VjdGlvbiB9IGZyb20gJy4vbWlkc2VjdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVGZWF0dXJlIH0gZnJvbSAnLi9mZWF0dXJlJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGhvbWVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaG9tZV93cmFwcGVyXCIpO1xuXG4gICAgcmV0dXJuIGhvbWVXcmFwcGVyO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgY29uc3QgZ2V0SG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZV9wYWdlXCIpO1xuICAgIGNvbnN0IG5ld05hdiA9IGNyZWF0ZU5hdmJhcigpO1xuICAgIGNvbnN0IG5ld0hvbWUgPSBjcmVhdGVIb21lKCk7XG4gICAgY29uc3QgbmV3SGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgbmV3TWlkZGxlID0gbWlkU2VjdGlvbigpO1xuICAgIGNvbnN0IG5ld0ZlYXR1cmUgPSBjcmVhdGVGZWF0dXJlKCk7XG4gICAgY29uc3QgbmV3Rm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG5cblxuICAgIG5ld0hvbWUuYXBwZW5kKG5ld05hdiwgbmV3SGVhZGVyKTtcblxuXG4gICAgZ2V0SG9tZS5hcHBlbmQobmV3SG9tZSwgbmV3TWlkZGxlLCBuZXdGZWF0dXJlLCBuZXdGb290ZXIpO1xufVxuXG5sb2FkSG9tZSgpOyJdLCJuYW1lcyI6WyJmaXJzdEltZyIsInNlY29uZEltZyIsInRoaXJkSW1nIiwiY3JlYXRlRmVhdHVyZSIsImZlYXR1cmVXcmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9wRmVhdHVyZUNvbnRhaW5lciIsImZlYXR1cmVMb2dvQ29udGFpbmVyIiwiZmVhdHVyZUxvZ28iLCJpbm5lclRleHQiLCJzZWVBbGxCdG5Db250YWluZXIiLCJzZWVBbGxCdG4iLCJhcHBlbmQiLCJtYWluSW1hZ2VDb250YWluZXIiLCJmaXJzdEltYWdlQ29udGFpbmVyIiwib25lTnVtYmVyIiwiZmVhdHVyZURlc2NyaXB0aW9uQ29udGFpbmVyT25lIiwidXBwZXJmaXJzdERlc2NyaXB0aW9uIiwibG93ZXJmaXJzdERlc2NyaXB0aW9uIiwiaW1hZ2VPbmUiLCJzcmMiLCJzZWNvbmRJbWFnZUNvbnRhaW5lciIsInR3b051bWJlciIsImZlYXR1cmVEZXNjcmlwdGlvbkNvbnRhaW5lclR3byIsInVwcGVyc2Vjb25kRGVzY3JpcHRpb24iLCJsb3dlcnNlY29uZERlc2NyaXB0aW9uIiwiaW1hZ2VUd28iLCJ0aGlyZEltYWdlQ29udGFpbmVyIiwidGhyZWVOdW1iZXIiLCJmZWF0dXJlRGVzY3JpcHRpb25Db250YWluZXJUaHJlZSIsInVwcGVydGhpcmREZXNjcmlwdGlvbiIsImxvd2VydGhpcmREZXNjcmlwdGlvbiIsImltYWdlVGhyZWUiLCJhcmNoTG9nbyIsImFycm93TG9nbyIsImNyZWF0ZUZvb3RlciIsImZvb3RlcldyYXBwZXIiLCJmb290ZXJDb250YWluZXIiLCJib3R0b21Mb2dvQ29udGFpbmVyIiwiYXJjaExvZ29JbWciLCJib3R0b21CdG5Db250YWluZXIiLCJwb3J0Zm9saW9Db250YWluZXIiLCJwb3J0Zm9saW9CdG4iLCJhYm91dENvbnRhaW5lciIsImFib3V0QnRuIiwiY29udGFjdENvbnRhaW5lciIsImNvbnRhY3RCdG4iLCJzZWVQb3J0Zm9saW9CdG5Db250YWluZXIiLCJzZWV0UG9ydGZvbGlvQnRuIiwiYXJyb3ciLCJwYXJhbW91ckltZyIsImNyZWF0ZUhlYWRlciIsImhlYWRlcldyYXBwZXIiLCJpbWFnZUNvbnRhaW5lciIsImltYWdlIiwiZGVzY3JpcHRpb25Db250YWluZXIiLCJ1cHBlckNvbnRhaW5lciIsInRpdGxlVXBwZXIiLCJ0aXRsZUxvd2VyIiwicGFyYWdyYXBnaENvbnRhaW5lciIsImxvd2VyUGFyYWdyYXBoIiwiaW5uZXJQb3J0Zm9saW8iLCJib3R0b21OYXZpZ2F0aW9uIiwiYnV0dG9uT25lIiwiYnV0dG9uVHdvIiwiYnV0dG9uVGhyZWUiLCJidXR0b25Gb3VyIiwiaW1hZ2VtaWRkbGUiLCJpbWFnZUJvdHRvbSIsIm1pZFNlY3Rpb24iLCJtaWRkbGVXcmFwcGVyIiwibWlkZGxlQ29udGFpbmVyIiwibWlkZGxlVGl0bGUiLCJtaWRkbGVEZXNjcmlwdGlvbkltYWdlV3JhcHBlciIsImNvbnRlbnRDb250YWluZXIiLCJkZXNjcmlwdGlvblRpdGxlIiwibWlkZGxlRGVzY3JpcHRpb24iLCJpbWFnZUNvbnRhaW5lckJvdHRvbSIsInNtYWxsVGVhbXNDb250YWluZXIiLCJzbWFsbFRlYW1zVGl0bGUiLCJhYm91dEJvdHRvbUJ0bkNvbnRhaW5lciIsImFib3V0Qm90dG9tQnRuIiwibmF2TG9nbyIsImNyZWF0ZU5hdmJhciIsIm5hdmJhcldyYXBwZXIiLCJuYXZMb2dvQ29udGFpbmVyIiwibG9nbyIsIm5hdkJ1dHRvbkNvbnRhaW5lciIsImNyZWF0ZUJ1dHRvbiIsImFuY2hvck5hbWUiLCJpbm5lckJ1dHRvbiIsImFuY2hvclNvdXJjZSIsImFuY2hvciIsImhyZWYiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwiY3JlYXRlSG9tZSIsImhvbWVXcmFwcGVyIiwibG9hZEhvbWUiLCJnZXRIb21lIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdOYXYiLCJuZXdIb21lIiwibmV3SGVhZGVyIiwibmV3TWlkZGxlIiwibmV3RmVhdHVyZSIsIm5ld0Zvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=