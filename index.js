var n1 =Math.floor(Math.random()*6)+1;
var n2 =Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+n1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+n2+".png");
if(n1>n2)
{
  document.querySelector("h1").innerText="Player 1 wins..";
}
else if(n1<n2)
{
  document.querySelector("h1").innerText="Player 2 wins..";
}
else
{
  document.querySelector("h1").innerText="Match tie..";
}
