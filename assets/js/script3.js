var fortuneContainer = document.querySelector('#fortunes-container');

var storedFortuneArray = JSON.parse(localStorage.getItem("Fortunes"));

var i =1;
storedFortuneArray.forEach(element => {
    var newDiv = document.createElement("div");
    newDiv.textContent =  element.weekDay;
    newDiv.setAttribute("class","fortune")
    newDiv.setAttribute("id","fortune-"+i)
    fortuneContainer.appendChild(newDiv);
    i++;
});

