import archLogo from "../assets/logo.svg";
import arrowLogo from "../assets/icons/icon-arrow.svg";

export function createFooter(){
    const footerWrapper = document.createElement("div");
    footerWrapper.classList.add("home_footer_wrapper");

    const footerContainer = document.createElement("div");
    footerContainer.classList.add("home_footer_container");

    const bottomLogoContainer = document.createElement("div");
    bottomLogoContainer.classList.add("footer_arch_container");

    let archLogoImg = document.createElement("img");
    archLogoImg.src = archLogo;
    bottomLogoContainer.append(archLogoImg);




    let bottomBtnContainer = document.createElement("div");
    bottomBtnContainer.classList.add("bottom_button_container");

    let portfolioContainer = document.createElement("div");
    portfolioContainer.classList.add("footer_portfolio_container");
    let portfolioBtn = document.createElement("a");
    portfolioBtn.innerText = "Portfolio";
    portfolioBtn.classList.add("footer_portfolio_button");
    portfolioBtn.href = "portfolio.html";
    portfolioContainer.append(portfolioBtn);


    let aboutContainer = document.createElement("div");
    aboutContainer.classList.add("footer_about_container");
    let aboutBtn = document.createElement("a")
    aboutBtn.innerText = "About Us";
    aboutBtn.classList.add("footer_about_button");
    aboutBtn.href = "about.html";
    aboutContainer.append(aboutBtn);


    let contactContainer = document.createElement("div");
    contactContainer.classList.add("footer_contact_container");
    let contactBtn = document.createElement("a")
    contactBtn.innerText = "Contact"
    contactBtn.classList.add("footer_contact_button");
    contactBtn.href = "contact.html";
    contactContainer.append(contactBtn);

    let seePortfolioBtnContainer = document.createElement("a");
    seePortfolioBtnContainer.classList.add("footer_see_portfolio_button_container");
    seePortfolioBtnContainer.href = "portfolio.html";

    let seetPortfolioBtn = document.createElement("p");
    seetPortfolioBtn.classList.add("footer_see_portfolio_button");
    seetPortfolioBtn.innerText = "See Our Portfolio";

    let arrow = document.createElement("img");
    arrow.src = arrowLogo;

    seePortfolioBtnContainer.append(seetPortfolioBtn, arrow);

    bottomBtnContainer.append(bottomLogoContainer ,portfolioContainer, aboutContainer, contactContainer);
    footerContainer.append(bottomBtnContainer, seePortfolioBtnContainer);
    footerWrapper.append(footerContainer);

    return footerWrapper;
}