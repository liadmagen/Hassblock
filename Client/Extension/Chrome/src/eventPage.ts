class ServerInterface {
	threshold: number;
	serverURL: string;

	constructor(threshold: number) {
		this.threshold = threshold;
	}

	sendContentToClassification(locationID, content) {
		// send to server (background page?) the content for classification
	}

	handleClassificationResponse(response) {
		// if response is - harmful text, hide it
		if (response.result < this.threshold) {

		}
	}

	sendContentToTrain(content) {
		
	}
}


/**
 * Runs after chrome had navigated to a page.
 * @param {*} details 
 */
function onNavigationComplete(details) {

}

chrome.webNavigation.onCompleted.addListener(onNavigationComplete);