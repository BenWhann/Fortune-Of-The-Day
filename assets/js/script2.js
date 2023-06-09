var fortuneBtn = document.querySelector('#fortuneBtn');

fortuneBtn.addEventListener('click', function() {
    console.log('fortuneBtn works');
    //document.location.replace('./thirdpage.html');
})

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://fortune-cookie2.p.rapidapi.com/fortune',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde979f6f0msh9481df6011d3bb2p1b653fjsna5f8b98efe87',
		'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});