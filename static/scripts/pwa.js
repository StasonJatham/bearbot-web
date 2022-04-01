"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("_service-worker.js",{scope:""})})),$(document).ready((function(){"use strict";function e(e){for(var n=e+"=",o=document.cookie.split(";"),t=0;t<o.length;t++){for(var i=o[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null}$("[data-pwa-version]").data("pwa-version","3.0"),setTimeout((function(){$(".pwa-dismiss").on("click",(function(){console.log("User Closed Add to Home / PWA Prompt"),function(e,n,o){var t=new Date;t.setTime(t.getTime()+1728e5);var i="; expires="+t.toGMTString();document.cookie="Sticky_pwa_rejected_install="+!0+i+"; path=/"}(),$("body").find("#menu-install-pwa-android, #menu-install-pwa-ios, .menu-hider").removeClass("menu-active")}))}),1500);var n={Android:function(){return navigator.userAgent.match(/Android/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},any:function(){return n.Android()||n.iOS()||n.Windows()}},o=1==window.navigator.standalone;if(window.matchMedia("(display-mode: standalone)").matches,n.Android()){let n;console.log("Android Detected"),window.addEventListener("beforeinstallprompt",(o=>{o.preventDefault(),n=o,$("#menu-install-pwa-android, .add-to-home").length?(console.log("Triggering PWA Menu for Android"),e("Sticky_pwa_rejected_install")||setTimeout((function(){$(".add-to-home").addClass("add-to-home-visible add-to-home-android"),$("#menu-install-pwa-android, .menu-hider").addClass("menu-active")}),4500)):console.log("The div #menu-install-pwa-android was not found. Please add this div to show the install window")})),$(".pwa-install").on("click",(function(e){n.prompt(),n.userChoice.then((e=>{e.outcome,n=null}))})),window.addEventListener("appinstalled",(e=>{$("#menu-install-pwa-android, .menu-hider").removeClass("menu-active")}))}function t(){$(".offline-message").addClass("offline-message-active"),$(".online-message").removeClass("online-message-active"),setTimeout((function(){$(".offline-message").removeClass("offline-message-active")}),2e3)}function i(){$(".online-message").addClass("online-message-active"),$(".offline-message").removeClass("offline-message-active"),setTimeout((function(){$(".online-message").removeClass("online-message-active")}),2e3)}function a(){if($(this).attr("href").match(/.html/))return t(),!1}n.iOS()&&(o||(console.log("iOS Detected"),$("#menu-install-pwa-ios, .add-to-home").length?e("Sticky_pwa_rejected_install")||(console.log("Triggering PWA / Add to Home Screen Menu for iOS"),setTimeout((function(){$(".add-to-home").addClass("add-to-home-visible add-to-home-ios"),$("#menu-install-pwa-ios, .menu-hider").addClass("menu-active")}),4500)):console.log("The div #menu-install-pwa-ios was not found. Please add this div to show the install window"))),$("body").on("click",".page-update, .reloadme",(function(){location.reload()})),navigator.onLine&&function(){if($("link[data-pwa-version]").length){function e(){var e=new Date,n=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),o=$('link[rel="manifest"]').data("pwa-version"),t="/static/manifest/bear_manifest.json?ver="+n,i="Connection Offline. Waiting to Reconect";$.getJSON(t,(function(e){i=e.version})),setTimeout((function(){i!=o&&"Connection Offline. Waiting to Reconect"!=i&&(function(){var e=$("body"),n=$("#menu-update"),o=new Date,t=o.getHours()+":"+o.getMinutes()+":"+o.getSeconds();n.length||(e.append('<div id="menu-update"></div>'),setTimeout((function(){e.find("#menu-update").load("menu-update.html?ver="+t)}),250))}(),console.log("New Version of Content Available. Refreshing. On Desktop Browsers a manual refresh maybe required."),setTimeout((function(){var e,n;$("body").find("#menu-update").addClass("menu-active"),$(".menu-hider").addClass("menu-active-no-click"),e=3,n=setInterval((function(){e--,console.log(e),$(".page-update").html("Updating in ... "+e+" seconds"),0==e&&(clearInterval(n),window.location.reload(!0))}),1e3),caches.delete("workbox-runtime").then((function(){console.log("Content Updated - Cache Removed!")})),localStorage.clear(),sessionStorage.clear(),caches.keys().then((e=>{e.forEach((e=>{caches.delete(e)}))}))}),500)),"Finding Online Version..."===i&&($(".reloadme").addClass("disabled"),$("body").find("#menu-update").removeClass("menu-active"),$(".menu-hider").removeClass("menu-active-no-click"))}),3e3)}setInterval((function(){e()}),5e4),setTimeout((function(){e()}),1e4)}}(),$(".offline-message").length||($("body").append('<p class="offline-message bg-red2-dark color-white center-text uppercase ultrabold">No internet connection detected</p> '),$("body").append('<p class="online-message bg-green1-dark color-white center-text uppercase ultrabold">You are back online</p>')),$(".simulate-offline").on("click",(function(){t()})),$(".simulate-online").on("click",(function(){i()})),window.addEventListener("online",(function(e){navigator.onLine,i(),console.log("Connection: Online"),$("a").off("click",a)})),window.addEventListener("offline",(function(e){t(),$("a").on("click",a),console.log("Connection: Offline")})),caches.delete("workbox-runtime").then((function(){})),localStorage.clear(),sessionStorage.clear(),caches.keys().then((e=>{e.forEach((e=>{caches.delete(e)}))}))}));
