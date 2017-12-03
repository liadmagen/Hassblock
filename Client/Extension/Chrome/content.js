/**
 * This file is injected to every page.
 * When the page render is done, it will scan the page's content, to find hatefull text and remove it.
 */


 /**
  * runs over the DOM and sends the content chunk by chunk to the server,
  * with it's ID as the DOM tree-location.
  */
 function scanPage() {
    // perform tree scan
 }

 function sendContentToServer(locationID, content) {
     // send to server (background page?) the content for classification
 }

 function handleResponse(response) {
     // if response is - harmful text, hide it
 }

 function removeContent(locationID) {
     // removes text from the DOM according to the location
 }

 window.document.addEventListener('load', scanPage);