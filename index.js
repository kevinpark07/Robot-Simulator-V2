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
    button.addEventListener('click', (e) => {
      const ul = document.querySelector('#moves-container')
      const allLi = ul.childNodes
      // const first = allLi[0]
      // console.log(first)

      // const robotMoves = () => {
        for(const li of allLi) {
          // let interval = setInterval(() => {
          movementArray.push(li.textContent);
          console.log(li)
          // }, 3000)
          // clearInterval(interval)
          //li.remove()
      //     // console.log(li)
          
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

  moveRobot()
  storeCommands()
})
