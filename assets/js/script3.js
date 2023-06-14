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
    newDiv2.setAttribute("class", "card");
    newDiv2.classList.add("hide");
    newDiv2.setAttribute("id","card-"+i);
    fortuneContainer.appendChild(newDiv2);

    var closeButton = document.createElement('button');
    closeButton.textContent = "Close Fortune";
    closeButton.setAttribute('class', 'closeButton');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add("hide");
    closeButton.setAttribute('id', 'closeButton-'+i);
    fortuneContainer.appendChild(closeButton);

    i++;
});


var fortune1 = document.querySelector('#fortune-1');
var card1 = document.querySelector('#card-1');
var closeButton1 = document.querySelector('#closeButton-1');

fortune1.addEventListener("click", function(){
    card1.classList.remove('hide');
    closeButton1.classList.remove('hide');
})

closeButton1.addEventListener("click", function(){
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
})

