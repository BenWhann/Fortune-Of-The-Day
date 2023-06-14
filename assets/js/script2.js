var fortuneBtn = document.querySelector('#fortuneBtn');
var imageBox = document.querySelector('.imageTest');
var fortuneText = document.querySelector('#fortuneText');

/*cursor*/
var  cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', e => {
  console.log(e);
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})



var dayJs = dayjs();
var today = dayJs.format('MM/DD');
console.log(today);

fortuneBtn.addEventListener('click', function () {
    console.log('fortuneBtn works');
    document.location.replace('./thirdpage.html');
})

function DailyFortune(weekDay, fortune) {
    this.weekDay = weekDay;
    this.fortune = fortune;
};
var storedFortuneArray = JSON.parse(localStorage.getItem("Fortunes")) || [];

firstApiCall();

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
            console.log(data);
            fortuneText.textContent = data.answer;
            console.log(data.category);
            var newFortune = new DailyFortune(today, data.answer);
            
            if (storedFortuneArray != null) {
                var containsDate = storedFortuneArray.some(obj => obj["weekDay"] === today);
                if(!containsDate)
                {
                    console.log("todays date not stored");
                    storedFortuneArray.push(newFortune);
                    localStorage.setItem("Fortunes", JSON.stringify(storedFortuneArray));
                }
            }
            else {
                storedFortuneArray.push(newFortune);
                localStorage.setItem("Fortunes", JSON.stringify(storedFortuneArray));
            }
            console.log(storedFortuneArray);
            secondApiCall(data.category);
        },
        error: function (jqXHR, textStatus, errorThrown) {
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


function secondApiCall(category) {
    console.log("here");
    console.log(category);

    if (category == "General fortune") {
        category = "Fortune";
    }

    var queryURL = 'http://api.giphy.com/v1/stickers/search?q=' + category + '&limit=5&api_key=wZmi04Bta6Iozo1cs6TlyPaawcltolg1';
    //handles ajax request to Giphy API
    $.ajax({
        url: queryURL, method: 'GET', success: function (data) {
            console.log(data.data);
            //shuffle 5 returned stickers, and select 2 from shuffled array
            const shuffled = [...data.data].sort(() => 0.5 - Math.random());
            var resultArray =  shuffled.slice(0, 2);
            resultArray.forEach(element => {
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



