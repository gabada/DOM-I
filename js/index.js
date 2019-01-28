const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// NAV Links
const navLinks = document.querySelectorAll("a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// CTA
const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"].h1;

const ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent["cta"].button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Main Content

// Top Content
const featureHeader = document.querySelector("div h4");
featureHeader.textContent = siteContent["main-content"]["features-h4"];

const featureContent = document.querySelector("div p");
featureContent.textContent = siteContent["main-content"]["features-content"];

const aboutHeader = document.querySelectorAll("div h4");
aboutHeader[1].textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll("div p");
aboutContent[1].textContent = siteContent["main-content"]["about-content"];

// Middle Img
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content
const servicesHeader = document.querySelectorAll("div h4");
servicesHeader[2].textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelectorAll("div p");
servicesContent[2].textContent = siteContent["main-content"]["services-content"];

const productHeader = document.querySelectorAll("div h4");
productHeader[3].textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelectorAll("div p");
productContent[3].textContent = siteContent["main-content"]["product-content"];

const visionHeader = document.querySelectorAll("div h4");
visionHeader[4].textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelectorAll("div p");
visionContent[4].textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];