

    //generate random number between 19 - 120
    var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randomNumber);


    //creates values for crystals between 1 - 12
    var amethyst = Math.floor(Math.random() * 12) + 1;
    var emld = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1; 

    //empty variables for wins/losses
    var wins = 0;
    var losses = 0;

    //empty variable that updates total score from crystals
    var totScore = 0;
    $('#totScore').text(totScore);

    //function to update wins when win occurs
    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    //function to update losses when loss occurs
    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    //crystal click functions that add together and calls win or lose functions
    $('#amethyst').click(() => {
        totScore = totScore + amethyst
        $('#totScore').text(totScore);
        if (totScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#emld').click(() => {
        totScore = totScore + emld;
        $('#totScore').text(totScore);
        if (totScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#ruby').click(() => {
        totScore = totScore + ruby;
        $('#totScore').text(totScore);
        if (totScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#sapphire').click(() => {
        totScore = totScore + sapphire;
        $('#totScore').text(totScore);
        if (totScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    
   //reset function that allows for new game without refresh once completed 
    function reset() {
        totScore = 0;
        $('#totScore').text(totScore);
    }

    // reset function that gives new values to crystals after each game
    function resetTwo() {
        randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randNum').html(randomNumber);
        amethyst = Math.floor(Math.random() * 12) + 1;
        emld = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
    }






