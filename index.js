document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  function storeCommands() {
    const movementContainer = document.querySelector('#moves-container')

    document.addEventListener("keydown", function(e) {
      if(e.key === "ArrowLeft") {
        const movementLi = document.createElement('li')
        const direction = "left"
        movementLi.textContent = direction
        movementContainer.appendChild(movementLi);
      } 
      if(e.key === "ArrowRight") {
        const movementLi = document.createElement('li')
        const direction = "right"
        movementLi.textContent = direction
        movementContainer.appendChild(movementLi);
      } 
      if(e.key === "ArrowUp") {
        const movementLi = document.createElement('li')
        const direction = "up"
        movementLi.textContent = direction
        movementContainer.appendChild(movementLi);
      } 
      if(e.key === "ArrowDown") {
        const movementLi = document.createElement('li')
        const direction = "down"
        movementLi.textContent = direction
        movementContainer.appendChild(movementLi);
      } 

      

      
      
    })
  }

  storeCommands()
})
