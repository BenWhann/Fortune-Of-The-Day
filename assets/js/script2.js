var fortuneBtn = document.querySelector('#fortuneBtn');
var mainPage = document.querySelector('#mainPage');
var imageBox = document.querySelector('.imageTest');
var fortuneText = document.querySelector('#fortuneText');
var crystalBall = document.querySelector('.crystalBall');



/*cursor*/
var  cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', e => {
  console.log(e);
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

var dayJs = dayjs();
var today = dayJs.format('dddd');

function DailyFortune(weekDay, fortune) {
    this.weekDay = weekDay;
    this.fortune = fortune;
};

//call local storage in global variable for page
var storedFortuneArray = JSON.parse(localStorage.getItem("Fortunes")) || [];

//button to advance to the third page
fortuneBtn.addEventListener('click', function () {
    console.log('fortuneBtn works');
    document.location.replace('./thirdpage.html');
})

mainPage.addEventListener('click', function () {
    console.log('mainPage works');
    document.location.replace('./index.html');
})

//adding mouse over event listener to crystal ball. After "Rubbing" ball for 4.5
//seconds we will call first api to get fortune
crystalBall.addEventListener('mouseover',callApiAfterTime);
function callApiAfterTime() {
    setTimeout(firstApiCall,4500);
}

function firstApiCall() {
    //handles ajax request to Fortune Cookie API
    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://fortune-cookie2.p.rapidapi.com/fortune',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa3285ea19msh8489627d707771ep12bab8jsnd7dcedac6924',
            'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com'
        },
        success: function (data) {
            //set fortunetext to returned fortune from API call
            fortuneText.textContent = "YOUR FORTUNE FOR THE DAY:" + "\n" +  data.answer;
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



