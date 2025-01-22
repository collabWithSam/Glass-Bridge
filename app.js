Player = document.getElementById("player");
Timer = document.getElementById("timer");
leftBtn = document.getElementById("left_btn");
rightBtn = document.getElementById("right_btn");
endPoint = document.getElementById("endpoint");
Pause = document.getElementById("pause");
bgm = document.getElementById("bgm");
volumnBtn = document.getElementById("volume");
// // bridge bases
b1=document.getElementById("1");
b2=document.getElementById("2");
b3=document.getElementById("3");
b4=document.getElementById("4");
b5=document.getElementById("5");
b6=document.getElementById("6");


volumnBtn.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play(); // Play the music
        volumnBtn.style.fill="white"; // Update button text
    } else {
        bgm.pause(); // Pause the music
        volumnBtn.style.fill="black"; // Update button text
    }
});


function generateRandomNumbers(n) {
    const result = [];
  
    for (let i = 1; i <= n; i += 2) {
      const lowerBound = i;        // Start of the range (odd number)
      const upperBound = i + 1;    // End of the range (even number)
  
      // Randomly pick either the lowerBound or upperBound
      const randomChoice = Math.random() < 0.5 ? lowerBound : upperBound;
  
      result.push(randomChoice);
    }
  
    return result;
  }
  
  // Example usage
  const Difficulty = 20; // Define the maximum number up to which you want random numbers
  const obstacles = generateRandomNumbers(Difficulty);
  console.log(obstacles);


steps=document.querySelectorAll(".steps");
// // 
currentPos = 0;
if(currentPos==0 || currentPos>20){
    Player.style.top="-18%";
    Player.style.left="45%";
}

document.addEventListener('keydown',(eventt)=>{
    switch(eventt.key){
        case'ArrowLeft':
            leftBtn.click();
            break;
        case'ArrowRight':
            rightBtn.click();
            break;
        default:
            break;
        
    }
})

leftBtn.addEventListener("click",()=>{
    
    if(currentPos == 20 || currentPos == 19){
        Player.style.top="-5%"
    
    Player.style.left="40%";
        console.log("you won!");
        endPoint.append(Player);
    }

    if(currentPos==0){
        currentPos = 1;
    }
    else if(currentPos%2==0){
        currentPos = currentPos + 1;
    }
    else{
        currentPos = currentPos + 2;
    }
    steps.forEach(function (item){
        // console.log(item)
        let id_name=item.getAttribute('id');
        if(id_name==currentPos){
            item.appendChild(Player);
            console.log(id_name+" id");
                Player.style.top="-114%";
                Player.style.left="16%";
            
        }
    })
    obstacles.forEach(function(item){
        if(currentPos==item){
            
            console.log("you broke glass");
            // Player.style.transform="scale(0.5)";
            Pause.style.display="flex";
            setTimeout(() => {
               console.log("restarting....") 
               location.reload();
            }, 2000);
        }
    })
    // console.log(currentPos)
    return currentPos ;
    
})

rightBtn.addEventListener("click",()=>{
    if(currentPos == 20 || currentPos == 19){
        Player.style.top="-5%";
        Player.style.left="40%";
        console.log("you won!");

        endPoint.append(Player);
        setTimeout(()=>{
            location.reload();
        },1000);
        
    }
    
    if(currentPos==0){
        currentPos = 2;
    }
    else if(currentPos%2==0){
        currentPos = currentPos + 2;
    }
    else{
        currentPos = currentPos + 3;
    }
    console.log(currentPos)
    steps.forEach((item)=>{
        let id_name=item.getAttribute('id');
        if(id_name==currentPos){

            item.appendChild(Player);
            console.log(id_name+" id");
                Player.style.top="-114%";
                Player.style.left="16%";
        }
    })
    obstacles.forEach(function(item){
        if(currentPos==item){
            console.log("you broke glass");
            // Player.style.transform="scale(0.5)";
            Pause.style.display="flex";
            setTimeout(() => {
               console.log("restarting....") 
               location.reload();
            }, 2000);
        }
    })
    
    return currentPos;
})


// function winCheck(){
    
// }
