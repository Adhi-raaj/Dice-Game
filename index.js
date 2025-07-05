var num = 6;
var randomNumber1 = (Math.floor(Math.random()*num)+1);
var randomImg = "dice" + randomNumber1 +".png";
var randomImgSource = "./images/"+ randomImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);
var randomNumber2 = (Math.floor(Math.random()* num)+ 1);
var randomImg2 = "dice"+ randomNumber2+".png";
var randomImgSource2 = "./images/"+randomImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2); 
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩🚩";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Its a Draww!! 🙌";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩🚩";
}