var Snake = Snake || {};

Snake.website = (function() {
    var game = {
        init: function() {
        	var j = null;
            var gameBoard = document.getElementsByClassName('container')[0];
            var dimension = 40;
            
            for (var i = 0; i < 40; i++ ) {
            	var rowDiv = "<div class=\"row\" id=\"row" + i + "\"></div>"
            	gameBoard.innerHTML(rowDiv);
            }
        }
    }
    return {
        run: function() {
            game.init();
        }
    }
})();

Snake.website.run();
