/**
 * Runs after chrome had navigated to a page.
 * @param {*} details 
 */
function onNavigationComplete(details) {

}

chrome.webNavigation.onCompleted.addListener(onNavigationComplete);