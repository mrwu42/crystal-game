$( document ).ready(function() {
    // console.log( "check" );

    

    var computerChoice = Math.floor((Math.random() * 50) + 1);
    $('#computerChoice').html(computerChoice);
    var red = Math.floor((Math.random() * 5) + 1);
    var blue = Math.floor((Math.random() * 10) + 1);
    var green = Math.floor((Math.random() * 15) + 1);
    var yellow = Math.floor((Math.random() * 100) + 1);
    var wins = 0;
    var loss= 0;

    var currentscore = 0;
    $('#currentscore').text(currentscore);

    function win() {
        wins++;
        $('#wins').text(wins);
        alert ("Victory!!!!!")
    }

    function losses() {
        loss++;
        $('#loss').text(loss);
        alert ("You Lose!!!!!!")
    }

    $('#red').click(() => {
        currentscore = currentscore + red;
        if (currentscore === computerChoice) {
            win();
            reset();
            }
        else if (currentscore > computerChoice) {
            losses();
            reset();
            }
        
        $('#currentscore').text(currentscore);
        // console.log (win)
        // console.log (loss)
    });

    $('#blue').click(() => {
        currentscore = currentscore + blue;
        if (currentscore === computerChoice) {
            win();
            reset();
            }
        else if (currentscore > computerChoice) {
            losses();
            reset();
            }
        
        $('#currentscore').text(currentscore);
    });

    $('#green').click(() => {
        currentscore = currentscore + green;
        if (currentscore === computerChoice) {
            win();
            reset();
            }
        else if (currentscore > computerChoice) {
            losses();
            reset();
            }
        
        $('#currentscore').text(currentscore);
    });

    $('#yellow').click(() => {
        currentscore = currentscore + yellow;
        if (currentscore === computerChoice) {
            win();
            reset();
            }
        else if (currentscore > computerChoice) {
            losses();
            reset();
            }
        
        $('#currentscore').text(currentscore);
    });

    function reset() {
        currentscore = 0;
        $('#currentscore').text(currentscore);
        computerChoice = Math.floor((Math.random() * 50) + 1);
        $('#computerChoice').html(computerChoice);
        red = Math.floor((Math.random() * 5) + 1);
        blue = Math.floor((Math.random() * 10) + 1);
        green = Math.floor((Math.random() * 15) + 1);
        yellow = Math.floor((Math.random() * 100) + 1);
    }

















    



});