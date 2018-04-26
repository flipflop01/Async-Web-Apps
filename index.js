const YT_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const apiKey = "AIzaSyCLca5LG3szn-Q24AmBOWyytenluU6DbQU"


//GET DATA FROM API FUNCTION 
function getDatafromAPI(searchTerm, callback) {
	const settings = {
		url: YT_SEARCH_URL,
		data: {
			part: 'snippet',
			key: apiKey,
			q: `${searchTerm} in:name`
		},
		dataType: 'json',
		type: 'GET',
		success: callback
	};
	$.ajax(settings);
}


//RENDER RESULTS FUNCTION 
function renderResults(result) {

}


//DISPLAY-APPEND TO HTML DATA AS RESULTS FUNCTION 



//EVENT LISTENER FOR SUBMIT 