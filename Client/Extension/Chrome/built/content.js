/**
 * This file is injected to every page.
 * When the page render is done, it will scan the page's content, to find hatefull text and remove it.
 */
var PageScanner = /** @class */ (function () {
    function PageScanner(bgConnetor) {
        this.bgConnetor = bgConnetor;
    }
    /**
     * runs over the DOM and sends the content chunk by chunk to the server,
    * with it's ID as the DOM tree-location.
    */
    PageScanner.prototype.scanPage = function () {
        // perform tree scan
    };
    PageScanner.prototype.removeContent = function (locationID) {
        // removes text from the DOM according to the location
    };
    return PageScanner;
}());
var BgConnetor = /** @class */ (function () {
    function BgConnetor(threshold) {
        this.threshold = threshold;
    }
    BgConnetor.prototype.sendContentToServer = function (locationID, content) {
        // send to server (background page?) the content for classification
    };
    BgConnetor.prototype.handleResponse = function (response) {
        // if response is - harmful text, hide it
        if (response.result < this.threshold) {
        }
    };
    return BgConnetor;
}());
var bgConnector = new BgConnetor(0);
var pageScanner = new PageScanner(bgConnector);
window.document.addEventListener('load', pageScanner.scanPage);
