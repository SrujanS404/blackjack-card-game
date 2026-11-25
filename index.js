
let player={
    name:"Srujan",
    chip:200
};
let cardset=[1,2,3,4,5,6,7,8,9,10,11,12,13]
let Cards=[]
let sum=0
let newcard=0
// let hasBlackJack=false
let isAlive=true
let  message= ""
let n=2

let suml=document.getElementById("js-sum")
let cards=document.getElementById("js-cards")
let resultl=document.getElementById("js-result")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+" : $"+player.chip


function renderGame()
{
   
    random()
    sum+=Cards[0]
    random()
    sum+=Cards[1]
   
    func(sum)
    resultl.textContent=message
    cards.textContent=`Cards:${Cards.join(",")}`
    suml.textContent=`Sum:${sum}`
    

}


function newCard()
    {
       
          if (sum>=21)
        {
          return 0;
        }
        random()
        sum+=Cards[Cards.length-1]
        
        func(sum)
        resultl.textContent=message
        cards.textContent=`Cards: ${Cards.join(",")}`
        suml.textContent=`Sum:${sum}`
      
    }


function StartGame()
{
    renderGame()
}

function resetCard()
{
    Cards=[]
    sum=0;
    resultl.innerHTML="Want to play a round?";
    cards.innerHTML="Cards:";
    suml.innerHTML="Sum:";
}

function func(sum)
    {
    if(sum<21)
    {
        message="do you want to draw a new car"
    
    }else if(sum===21)
    {
        message="wohoo! you've got black jack"
        hasBlackJack=true
    }
    else 
    {
        message="you've out of the game!"
        isAlive=false

    }
    
}
function random()
{
  Cards.push(Math.floor(Math.random()*cardset.length)+1)
}