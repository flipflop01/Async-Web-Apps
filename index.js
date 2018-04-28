const YT_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const apiKey = "AIzaSyCLca5LG3szn-Q24AmBOWyytenluU6DbQU"


//GET DATA FROM API FUNCTION 
function getDatafromAPI(searchTerms, callback) {
	const settings = {
		url: YT_SEARCH_URL,
		data: {
			part: 'snippet',
			key: apiKey,
			q: `${searchTerms} in:name`
		},
		dataType: 'json',
		type: 'GET',
		success: callback
	};
$.ajax(settings);
}


//RENDER RESULTS FUNCTION 
function renderResults(result) {
	return `
	<div>
		<h2>
		<a href="https://www.youtube.com/watch?v=${result.id.videoId}">${result.snippet.title}</a>
		</h2>
		<a href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank"><img alt="search-result-img" src="${result.snippet.thumbnails.medium.url}"></a>
	</div>  
	`;
}


//DISPLAY-APPEND TO HTML DATA AS RESULTS FUNCTION 
function displayYouTubeResults(data) {
	let results = data.items.map((item, index) => renderResults(item));
	$('.search-results').html(results);
}



//EVENT LISTENER FOR SUBMIT 
function listenSubmit () {
	$('#search-form').submit(event => {
		event.preventDefault();
		let searchTerms = document.getElementById('js-query').value;
		console.log(searchTerms);
		getDatafromAPI(searchTerms, displayYouTubeResults);
	})
}

listenSubmit();


