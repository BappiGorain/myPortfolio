var userChoice = 0;
var totalGame = 0;
var userWin = 0;
var computerWin = 0;
var draw = 0;

$(document).ready(function () 
{
  $("#play").click(function () 
  {
    alert("Choose rock, paper, Scissor");

    $("#rock").click(function () {
      userChoice = 1;
      var computerChoice = Math.ceil(Math.random() * 3);
      if (computerChoice == 2) 
      {
        alert(
          "Computer is --> PAPER" +
            "\n" +
            "You Choose --> ROCK" +
            " \n" +
            " YOU LOOSE"
        );
        computerWin++;
        totalGame++;
        alert("If you want to continue choose again");
      } 
      else if (computerChoice == 2) {
        alert(
          "Computer is --> SCISSOR" +
            "\n" +
            "You Choose --> ROCK" +
            " \n" +
            " YOU WIN"
        );
        userWin++;
        totalGame++;
        alert("If you want to continue choose again");
      } else {
        alert(
          "Computer is --> ROCK" +
            "\n" +
            "You Choose --> ROCK" +
            " \n" +
            " MATCH DRAW"
        );
        draw++;
        totalGame++;
        alert("If you want to continue choose again");
      }
    });
  });

  $("#play").click(function () {
    $("#paper").click(function () {
      userChoice = 2;
      var computerChoice = Math.ceil(Math.random() * 3);
      if (computerChoice == 1) {
        alert(
          "Computer is --> ROCK" +
            "\n" +
            "You Choose --> PAPER" +
            " \n" +
            " YOU WIN"
        );
        userWin++;
        totalGame++;
        alert("If you want to continue choose again");
      } else if (computerChoice == 2) {
        alert(
          "Computer is --> SCISSOR" +
            "\n" +
            "You Choose --> PAPER" +
            " \n" +
            " YOU LOOSE"
        );
        computerWin++;
        totalGame++;
        alert("If you want to continue choose again");

      } else {
        alert(
          "Computer is --> PAPER" +
            "\n" +
            "You Choose --> PAPER" +
            " \n" +
            " MATCH DRAW"
        );
        draw++;
        totalGame++;
        alert("If you want to continue choose again");
      };
    });
  });

  $("#play").click(function () {
    $("#scissor").click(function () {
      userChoice = 3;
      var computerChoice = Math.ceil(Math.random() * 3);
      if (computerChoice == 1) {
        alert(
          "Computer is --> ROCK" +
            "\n" +
            "You Choose --> SCISSOR" +
            " \n" +
            " YOU LOOSE"
        );
        computerWin++;
        totalGame++;
        alert("If you want to continue choose again");
      } else if (computerChoice == 2) {
        alert(
          "Computer is --> PAPER" +
            "\n" +
            "You Choose --> SCISSOR" +
            " \n" +
            " YOU WIN"
        );
        userWin++;
        totalGame++;
        alert("If you want to continue choose again");
      } else {
        alert(
          "Computer is --> SCISSOR" +
            "\n" +
            "You Choose --> SCISSOR" +
            " \n" +
            " MATCH DRAW"
        );
        draw++;
        totalGame++;
        alert("If you want to continue choose again");
      }
    });
  });

  $("#result").click(function () {
    alert(
        "RESULT: " + 
        " \n" +
      "Total Game: " +
        totalGame +
        " \n" +
        "You Win: " +
        userWin +
        " \n" +
        "Computer Win: " +
        computerWin +
        " \n" +
        "Draw: " +
        draw
    );

    if(userWin>computerWin)
    {
        alert("Congratulations You Win")
    }
    else if(userWin<computerWin)
    {
        alert("Too Bad You Loose")
    }
    else
    {
        if(totalGame>0)
        {
            alert("No one wins");
        }
    }

  });
  $("#reset").click(function () {
    userChoice = 0;
    totalGame = 0;
    userWin = 0;
    computerWin = 0;
    draw = 0;
    alert("RESET successfull");
  });
});

