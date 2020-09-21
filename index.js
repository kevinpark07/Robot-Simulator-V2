document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  function storeCommands() {
    const movementContainer = document.querySelector('#moves-container')
    
    const createList = arrowKey => {
      const movementLi = document.createElement('li')
      movementLi.textContent = arrowKey
      movementContainer.appendChild(movementLi);
    }

    document.addEventListener("keydown", function(e) {
      if(e.key === "ArrowLeft") {
        createList("left")
      } else if(e.key === "ArrowRight") {
        createList("right")
      } else if(e.key === "ArrowUp") {
        createList("up")
      } else if(e.key === "ArrowDown") {
        createList("down")
      } 
      
    })
  }

  const robotMovement = (direction) => {
    
    if(direction === "left") {
      move('left')
    } else if(direction === "right") {
      move("right")
    } else if(direction === "up") {
      move("up")
    } else if(direction === "down") {
      move("down")
    }

  }
  
  const moveRobot = () => {
    const button = document.querySelector('#move-button')
    let movementAray = []
    button.addEventListener('click', async (e) => {
      const allLi = document.querySelectorAll('li')
      // const first = allLi[0]
      // console.log(first)
      // const robotMoves = () => {
        console.log(allLi)
        let timer =500;
        //for(const li of allLi) {
          
        for(let i = 0; i < allLi.length; i++){
          await sleep(timer);
          setTimeout(robotMovement(allLi[i].innerText),timer);
          allLi[i].remove();
          
      }
      //   //clearInterval()
      // }   

      // setTimeout(() => {robotMoves(); }, 2000);
      // // let interval = setInterval(function(){
      // //   incrementNumber(+1)},1000);
    
      // const firstLi = allLi[0]
      // if(firstLi.textContent === "left") {
      //   move('left')
      //   firstLi.remove()
      // } else if(firstLi.textContent === "right") {
      //   move("right")
      //   firstLi.remove()
      // } else if(firstLi.textContent === "up") {
      //   move("up")
      //   firstLi.remove()
      // } else if(firstLi.textContent === "down") {
      //   move("down")
      //   firstLi.remove()
      // }
  
      // robotMoves();
    

      
    })
  }

  function sleep(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    //robotMovement(li.innerText);
    //li.remove();
  }
  moveRobot()
  storeCommands()
})
