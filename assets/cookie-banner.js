class CookieBanner extends HTMLElement{constructor(){super(),this.classes={activeClass:"is-active",closingClass:"is-closing"},this.banner=this.querySelector(".cookie-banner"),"true"===this.dataset.testMode?(this.init(),this.querySelectorAll(".button").forEach((e=>e.addEventListener("click",this.close.bind(this))))):window.Shopify.loadFeatures([{name:"consent-tracking-api",version:"0.1"}],(e=>{if(e)throw e;this.beforeInit()}))}connectedCallback(){Shopify.designMode&&(this.onShopifySectionLoad=this.onSectionLoad.bind(this),this.onShopifySectionSelect=this.onSectionSelect.bind(this),this.onShopifySectionDeselect=this.onSectionDeselect.bind(this),document.addEventListener("shopify:section:load",this.onShopifySectionLoad),document.addEventListener("shopify:section:select",this.onShopifySectionSelect),document.addEventListener("shopify:section:deselect",this.onShopifySectionDeselect))}disconnectedCallback(){Shopify.designMode&&(document.removeEventListener("shopify:section:load",this.onShopifySectionLoad),document.removeEventListener("shopify:section:select",this.onShopifySectionSelect),document.removeEventListener("shopify:section:deselect",this.onShopifySectionDeselect))}onSectionLoad(e){filterShopifyEvent(e,this,(()=>this.open.bind(this)))}onSectionSelect(e){filterShopifyEvent(e,this,this.open.bind(this))}onSectionDeselect(e){filterShopifyEvent(e,this,this.close.bind(this))}beforeInit(){const e=window.Shopify.customerPrivacy.userCanBeTracked(),t=window.Shopify.customerPrivacy.getTrackingConsent();window.location.pathname.match(/^(\/[a-z]{2}(-[A-Z]{2})?)?\/cart$/)||e||"no_interaction"!==t||(this.init(),this.querySelectorAll(".button").forEach((e=>e.addEventListener("click",this.onButtonClick.bind(this)))))}init(){Shopify&&Shopify.designMode||setTimeout(function(){this.open()}.bind(this),1e3*parseInt(this.dataset.delay))}open(){this.banner.classList.add(this.classes.activeClass)}close(){this.banner.classList.add(this.classes.closingClass),setTimeout((()=>{this.banner.classList.remove(this.classes.activeClass),this.banner.classList.remove(this.classes.closingClass)}),500)}onButtonClick(e){e.preventDefault(),this.close(),"accept"===e.target.name?(window.Shopify.customerPrivacy.setTrackingConsent(!0,this.noop),document.addEventListener("trackingConsentAccepted",(()=>{console.log("trackingConsentAccepted event fired")}))):window.Shopify.customerPrivacy.setTrackingConsent(!1,this.noop)}noop(){}}customElements.define("cookie-banner",CookieBanner);