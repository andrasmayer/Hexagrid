Basic Hexa grid for game developers with dinamic fieldsize, pathfinding routine, unit movements, unit speed and player indicator.


Actually i mad this lib to make browser version of  Heroes Of Might And Magic 3 .




Installation




Offical jquery framework:


<script src='jquery.js'></script>




Default unit information based on Json feed:


<script src='sprites.js'></script>



//////////////////////////////////////////



Unit info in sprites.js:

item = {};

item ["x"] = 2;                // Cordinates in table

item ["y"] = 15;

item ["speed"] = 1;             //Unit speed determines which unit comes next in row

item ["movement"] = 7;          //Maximum movement what a unit can take

item ["player"] = 1;            //Id for the player who controls the unit

        
        
sprites.push(item);	                   // Push the item to the feed












Event handling:


<script src='events.js'></script>







Determines the possible hexes what a unit can take
Neighbor get from cordinaltes  

cords=[[-1,-1],[-1,0],[0,-1],[0,+1],[+1,-1],[+1,0]];


If a unit can take more than one step the neighbors are calculated dinamically








Stylesheet for the content



<link rel="stylesheet" href="playfield.css">

Red background is player 1 unit
Blue background is player 2 unit
green background is passive unit
Black background is obstacle unit



Every unit block movement for itself and other nearby units
