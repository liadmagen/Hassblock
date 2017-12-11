/**
 * This file is injected to every page.
 * When the page render is done, it will scan the page's content, to find hatefull text and remove it.
 */


class PageScanner {

	bgConnetor: BgConnetor;

	constructor(bgConnetor: BgConnetor) {
		this.bgConnetor = bgConnetor;

		window.document.addEventListener('load', this.scanPage);
	}

    /**
     * runs over the DOM and sends the content chunk by chunk to the server,
    * with it's ID as the DOM tree-location.
    */
	scanPage() {
		// perform tree scan
	}

	removeContent(locationID) {
		// removes text from the DOM according to the location
	}
}

class BgConnetor {
	threshold: number;
	serverURL: string;

	constructor(threshold: number) {
		this.threshold = threshold;
	}

	sendContentToServer(locationID, content) {
		// send to server (background page?) the content for classification
	}

	handleResponse(response) {
		// if response is - harmful text, hide it
		if (response.result < this.threshold) {

		}
	}

}

class SampleSubmitter {
	selectedText: string;

	constructor() {
		this.addEventToPage();
	}

	addEventToPage() {
		window.document.addEventListener('mouseup', this.onMouseClicked);
		window.document.addEventListener('keyup', this.onMouseClicked);
	}

	onMouseClicked() {
		this.selectedText = this.getSelectedText();
		if (this.selectedText) {
			this.showPopup();
		}
	}

	showPopup() {

	}

	submitSample() {
		
	}

	getSelectedText() {
		var text = "";
		if (typeof window.getSelection != "undefined") {
			text = window.getSelection().toString();
		} else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
			text = document.selection.createRange().text;
		}
		return text;
	}
	
}

let bgConnector = new BgConnetor(0);
let pageScanner = new PageScanner(bgConnector);
let sampleSubmitter = new SampleSubmitter();