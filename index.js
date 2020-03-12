document.addEventListener("DOMContentLoaded", function() {
  createGrid();
  renderBot(currentPosition);

  let controller = document.getElementById("moves-container");
  let moveButton = document.getElementById("move-button");

  function keyPress() {
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft") {
        let newDirection = document.createElement("li");
        newDirection.innerText = "left";
        controller.appendChild(newDirection);
      }
      if (e.key === "ArrowRight") {
        let newDirection = document.createElement("li");
        newDirection.innerText = "right";
        controller.appendChild(newDirection);
      }
      if (e.key === "ArrowUp") {
        let newDirection = document.createElement("li");
        newDirection.innerText = "up";
        controller.appendChild(newDirection);
      }
      if (e.key === "ArrowDown") {
        let newDirection = document.createElement("li");
        newDirection.innerText = "down";
        controller.appendChild(newDirection);
      }
      if (e.key === "Backspace") {
        if (controller.childNodes.length != 0) {
          let last = controller.childNodes.length - 1;
          controller.childNodes[last].remove();
        } else {
          window.alert("Nothing to delete!");
        }
      }
    });
  }

  // function makeMove() {
  //   moveButton.addEventListener("click", function(e) {
  //     let direction = controller.childNodes[0].innerText;
  //     move(direction);
  //     controller.childNodes[0].remove();
  //   });
  // }

  function move2() {
    let direction = controller.childNodes[0].innerText;
    move(direction);
    controller.childNodes[0].remove();
  }

  function autoMove() {
    moveButton.addEventListener("click", function(e) {
        let mover = setInterval(function() {
          if (controller.childNodes.length != 0) {
          move2();}
          else {clearInterval(mover)}
        }, 500);

    });
  }

  keyPress();
  // makeMove();
  autoMove();
});
