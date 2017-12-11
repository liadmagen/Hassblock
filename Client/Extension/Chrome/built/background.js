var ServerInterface = /** @class */ (function () {
    function ServerInterface(threshold) {
        this.threshold = threshold;
    }
    ServerInterface.prototype.sendContentToClassification = function (locationID, content) {
        // send to server (background page?) the content for classification
    };
    ServerInterface.prototype.handleClassificationResponse = function (response) {
        // if response is - harmful text, hide it
        if (response.result < this.threshold) {
        }
    };
    ServerInterface.prototype.sendContentToTrain = function (content) {
    };
    return ServerInterface;
}());
/**
 * Runs after chrome had navigated to a page.
 * @param {*} details
 */
function onNavigationComplete(details) {
}
chrome.webNavigation.onCompleted.addListener(onNavigationComplete);
