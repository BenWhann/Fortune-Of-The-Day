var fortuneContainer = document.querySelector('#fortunes-container');

var storedFortuneArray = JSON.parse(localStorage.getItem("Fortunes"));

var i = 1;
storedFortuneArray.forEach(element => {

    var newDiv = document.createElement("div");
    newDiv.textContent = element.weekDay;
    newDiv.setAttribute("class","fortune")
    newDiv.setAttribute("id","fortune-"+i)
    fortuneContainer.appendChild(newDiv);

    var newDiv2 = document.createElement("div");
    newDiv2.textContent = element.fortune;
    newDiv2.setAttribute("class","card");
    newDiv2.setAttribute("class", "hide");
    newDiv2.setAttribute("id","card-"+i);
    fortuneContainer.appendChild(newDiv2);

    i++;
});


newDiv.addEventListener("click", function(){
    newDiv2.removeClass('hide');
})