var fortuneContainer = document.querySelector('#fortunes-container');
var cardContainer = document.querySelector('#cards-container');

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
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
closeButton1.addEventListener("click", function(){
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
})

var fortune2 = document.querySelector('#fortune-2');
var card2 = document.querySelector('#card-2');
var closeButton2 = document.querySelector('#closeButton-2');

fortune2.addEventListener("click", function(){
    card2.classList.remove('hide');
    closeButton2.classList.remove('hide');
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
closeButton2.addEventListener("click", function(){
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
})

var fortune3 = document.querySelector('#fortune-3');
var card3 = document.querySelector('#card-3');
var closeButton3 = document.querySelector('#closeButton-3');

fortune3.addEventListener("click", function(){
    card3.classList.remove('hide');
    closeButton3.classList.remove('hide');
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
closeButton3.addEventListener("click", function(){
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
})

var fortune4 = document.querySelector('#fortune-4');
var card4 = document.querySelector('#card-4');
var closeButton4 = document.querySelector('#closeButton-4');

fortune4.addEventListener("click", function(){
    card4.classList.remove('hide');
    closeButton4.classList.remove('hide');
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
closeButton4.addEventListener("click", function(){
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
})

var fortune5 = document.querySelector('#fortune-5');
var card5 = document.querySelector('#card-5');
var closeButton5 = document.querySelector('#closeButton-5');

fortune5.addEventListener("click", function(){
    card5.classList.remove('hide');
    closeButton5.classList.remove('hide');
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
closeButton5.addEventListener("click", function(){
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
})

var fortune6 = document.querySelector('#fortune-6');
var card6 = document.querySelector('#card-6');
var closeButton6 = document.querySelector('#closeButton-6');

fortune6.addEventListener("click", function(){
    card6.classList.remove('hide');
    closeButton6.classList.remove('hide');
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
closeButton6.addEventListener("click", function(){
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
})

var fortune7 = document.querySelector('#fortune-7');
var card7 = document.querySelector('#card-7');
var closeButton7 = document.querySelector('#closeButton-7');

fortune7.addEventListener("click", function(){
    card7.classList.remove('hide');
    closeButton7.classList.remove('hide');
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
})
closeButton7.addEventListener("click", function(){
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
})
