var fortuneContainer = document.querySelector('#fortunes-container');
var cardContainer = document.querySelector('#cards-container');
var cardContainer2 = document.querySelector('#cards-container-2');
var cardBackground = document.querySelector('#card-background');

var page2Btn = document.querySelector('#page2Btn');
var page1Btn = document.querySelector('#page1Btn');

//button to return to fortune page
page2Btn.addEventListener('click', function () {
    console.log('btn1 works');
    document.location.replace('./secondpage.html');
})

//button to return to home page
page1Btn.addEventListener('click', function () {
    console.log('btn2 works');
    document.location.replace('./index.html');
})

var storedFortuneArray = JSON.parse(localStorage.getItem("Fortunes"));

var i = 1;
storedFortuneArray.forEach(element => {
    var newDiv = document.createElement("div");
    newDiv.textContent = element.weekDay;
    newDiv.setAttribute("class","fortune")
    newDiv.setAttribute("id","fortune-"+i)
    fortuneContainer.appendChild(newDiv);

    var newDiv2 = document.createElement("div");
    var span = document.createElement('span');
    span.textContent = element.fortune;
    newDiv2.setAttribute("class", "card");
    newDiv2.classList.add("hide");
    newDiv2.setAttribute("id","card-"+i);
    span.setAttribute('class', 'span');
    span.classList.add('hide');
    span.setAttribute('id', 'span-'+i);
    cardContainer2.appendChild(newDiv2);
    newDiv2.appendChild(span);

    var closeButton = document.createElement('button');
    closeButton.textContent = "Close Fortune";
    closeButton.setAttribute('class', 'closeButton');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add("hide");
    closeButton.setAttribute('id', 'closeButton-'+i);
    cardContainer2.appendChild(closeButton);

    cardBackground.setAttribute('class', 'hide');

    i++;
});

var fortune1 = document.querySelector('#fortune-1');
var card1 = document.querySelector('#card-1');
var closeButton1 = document.querySelector('#closeButton-1');
var span1 = document.querySelector('#span-1');

fortune1.addEventListener("click", function(){
    card1.classList.remove('hide');
    closeButton1.classList.remove('hide');
    span1.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');

    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');

    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');

    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');

    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');

    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
})

closeButton1.addEventListener("click", function(){
    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');
    cardBackground.classList.add('hide');
})

var fortune2 = document.querySelector('#fortune-2');
var card2 = document.querySelector('#card-2');
var closeButton2 = document.querySelector('#closeButton-2');
var span2 = document.querySelector('#span-2');

fortune2.addEventListener("click", function(){
    card2.classList.remove('hide');
    closeButton2.classList.remove('hide');
    span2.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');

    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');

    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');

    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');

    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');

    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
})

closeButton2.addEventListener("click", function(){
    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');
    cardBackground.classList.add('hide');
})

var fortune3 = document.querySelector('#fortune-3');
var card3 = document.querySelector('#card-3');
var closeButton3 = document.querySelector('#closeButton-3');
var span3 = document.querySelector('#span-3');

fortune3.addEventListener("click", function(){
    card3.classList.remove('hide');
    closeButton3.classList.remove('hide');
    span3.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');

    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');

    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');

    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');

    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');

    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
})

closeButton3.addEventListener("click", function(){
    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');
    cardBackground.classList.add('hide');
})

var fortune4 = document.querySelector('#fortune-4');
var card4 = document.querySelector('#card-4');
var closeButton4 = document.querySelector('#closeButton-4');
var span4 = document.querySelector('#span-4');

fortune4.addEventListener("click", function(){
    card4.classList.remove('hide');
    closeButton4.classList.remove('hide');
    span4.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');

    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');

    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');

    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');

    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');

    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
})

closeButton4.addEventListener("click", function(){
    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');
    cardBackground.classList.add('hide');
})

var fortune5 = document.querySelector('#fortune-5');
var card5 = document.querySelector('#card-5');
var closeButton5 = document.querySelector('#closeButton-5');
var span5 = document.querySelector('#span-5');

fortune5.addEventListener("click", function(){
    card5.classList.remove('hide');
    closeButton5.classList.remove('hide');
    span5.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');

    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');

    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');

    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');

    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');

    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
})

closeButton5.addEventListener("click", function(){
    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');
    cardBackground.classList.add('hide');
})

var fortune6 = document.querySelector('#fortune-6');
var card6 = document.querySelector('#card-6');
var closeButton6 = document.querySelector('#closeButton-6');
var span6 = document.querySelector('#span-6');

fortune6.addEventListener("click", function(){
    card6.classList.remove('hide');
    closeButton6.classList.remove('hide');
    span6.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');

    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');

    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');

    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');

    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');

    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
})

closeButton6.addEventListener("click", function(){
    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');
    cardBackground.classList.add('hide');
})

var fortune7 = document.querySelector('#fortune-7');
var card7 = document.querySelector('#card-7');
var closeButton7 = document.querySelector('#closeButton-7');
var span7 = document.querySelector('#span-7');

fortune7.addEventListener("click", function(){
    card7.classList.remove('hide');
    closeButton7.classList.remove('hide');
    span7.classList.remove('hide');
    cardBackground.classList.remove('hide');

    card2.classList.add('hide');
    closeButton2.classList.add('hide');
    span2.classList.add('hide');

    card3.classList.add('hide');
    closeButton3.classList.add('hide');
    span3.classList.add('hide');

    card4.classList.add('hide');
    closeButton4.classList.add('hide');
    span4.classList.add('hide');

    card5.classList.add('hide');
    closeButton5.classList.add('hide');
    span5.classList.add('hide');

    card6.classList.add('hide');
    closeButton6.classList.add('hide');
    span6.classList.add('hide');

    card1.classList.add('hide');
    closeButton1.classList.add('hide');
    span1.classList.add('hide');
})

closeButton7.addEventListener("click", function(){
    card7.classList.add('hide');
    closeButton7.classList.add('hide');
    span7.classList.add('hide');
    cardBackground.classList.add('hide');
})