var fortuneBtn = document.querySelector('#fortuneBtn');
var imageBox = document.querySelector('.imageTest');
var fortuneText = document.querySelector('#fortuneText');

var dayJs = dayjs();
var today = dayJs.format('dddd');
console.log(today);
function DailyFortune(weekDay, fortune) {
    this.weekDay = weekDay;
    this.fortune = fortune;
};
var storedFortuneArray = JSON.parse(localStorage.getItem("Fortunes")) || [];

fortuneBtn.addEventListener('click', function () {
    console.log('fortuneBtn works');
    document.location.replace('./thirdpage.html');
})

firstApiCall();

function firstApiCall() {
    //handles ajax request to Fortune Cookie API
    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://fortune-cookie2.p.rapidapi.com/fortune',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fde979f6f0msh9481df6011d3bb2p1b653fjsna5f8b98efe87',
            'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
        },
        success: function (data) {
            //set fortunetext to returned fortune from API call
            fortuneText.textContent = data.answer;
            var newFortune = new DailyFortune(today, data.answer);
     
            if (storedFortuneArray != null) {
                //check if any object in array contains date value. If a fortune already exists for that day, we don't want
                //to add another. Only 1 fortune per day.
                var containsDate = storedFortuneArray.some(obj => obj["weekDay"] === today);
                if(!containsDate)
                {
                    storedFortuneArray.push(newFortune);
                    localStorage.setItem("Fortunes", JSON.stringify(storedFortuneArray));
                }
            }
            else {
                storedFortuneArray.push(newFortune);
                localStorage.setItem("Fortunes", JSON.stringify(storedFortuneArray));
            }
            //make call to second function, call second API
            secondApiCall(data.category);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 429) {
                // Handle 429 status code here -- too many api requests
                console.error('Too Many Requests:', jqXHR.responseText);
            } else {
                // Handle other errors here
                console.error('Other Error:', jqXHR.responseText);
            }
        }
    }).catch(function (error) {
        console.log("application error: " + error);
    });
}


function secondApiCall(category) {
    //if category returned from first API call is general fortune, pass fortune to next API call instead due to limited results
    if (category == "General fortune") {
        category = "Fortune";
    }

    //query string: limiting to return 5 result and rating is g or pg, search by category returned from first api call
    var queryURL = 'http://api.giphy.com/v1/stickers/search?q=' + category + '&limit=5&rating=pg&api_key=wZmi04Bta6Iozo1cs6TlyPaawcltolg1';
    //handles ajax request to Giphy API
    $.ajax({
        url: queryURL, method: 'GET', success: function (data) {
            console.log(data.data);
            //shuffle 5 returned stickers, and select 2 from shuffled array
            const shuffled = [...data.data].sort(() => 0.5 - Math.random());
            var resultArray =  shuffled.slice(0, 2);
            resultArray.forEach(element => {
                //create new image element and append to imageBox section
                imageBox.appendChild(new Image()).src = element.images.fixed_height.url;
            });
        },
        error: function (jqXHR) {
            if (jqXHR.status === 429) {
                // Handle 429 status code here -- too mayn api requests
                console.error('Too Many Requests:', jqXHR.responseText);
            } else {
                // Handle other errors here
                console.error('Other Error:', jqXHR.responseText);
            }
        }
    }).catch(function (error) {
        console.log("application error: " + error);
    });
}



