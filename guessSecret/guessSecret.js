let guessSecret = {
    tries: 3,
    createSecret: function(val1){
        guessSecret.secret = val1;
    },
    try: function(val2){
        if (guessSecret.secret == null){
        console.log("I have no secrets");
        } else {
        if (guessSecret.tries>0){
            guessSecret.tries--;
            if (guessSecret.secret == val2){
                console.log("The secret has been revealed!");
                tries = 0;
            } else {
                console.log("You guessed wrong. Tries: "+guessSecret.tries+" left.")
            }
        } else {
            console.log("Sorry, no guesses left. The secret can never be revealed.");
        }
        }
    }
}


module.exports=guessSecret;

