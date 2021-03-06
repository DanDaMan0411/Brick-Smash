//////////////////////////////////////////////
//Sets up the blocks into different formations
//////////////////////////////////////////////

var rectangleMap = [
		["R", "R", "R", "R", "R", "R", "R", "R", "R", "R"],
		["O", "O", "O", "O", "O", "O", "O", "O", "O"],
		["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
		["G", "G", "G", "G", "G", "G", "G", "G", "G"],
		["LB", "LB", "LB", "LB", "LB", "LB", "LB", "LB", "LB", "LB"],
		["DB", "DB", "DB", "DB", "DB", "DB", "DB", "DB", "DB"],
		["P", "P", "P", "P", "P", "P", "P", "P", "P", "P"],
		["W", "W", "W", "W", "W", "W", "W", "W", "W"]
]

var smileyMap = [
	["W", "W", "W", "X", "X", "X", "X", "W", "W", "W"],
	["W", "W", "W", "X", "X", "X", "X", "W", "W", "W"],
	["W", "BL", "W", "X", "X", "X", "X", "W", "BL", "W"],
	["W", "W", "W", "X", "X", "X", "X", "W", "W", "W"],
	["W", "W", "W", "X", "X", "X", "X", "W", "W", "W"],
	["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
	["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
	["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
	["R", "R", "X", "X", "X", "X", "X", "X", "R", "R"],
	["R", "R", "X", "X", "X", "X", "X", "X", "R", "R"],
	["X", "R", "R", "X", "X", "X", "X", "R", "R", "X"],
	["X", "R", "R", "X", "X", "X", "X", "R", "R", "X"],
	["X", "X", "R", "R", "R", "R", "R", "R", "X", "X"],
	["X", "X", "R", "R", "R", "R", "R", "R", "X", "X"],
]

var pyramidMap = [
	["Y"],
	["Y", "Y", "Y"],
	["Y", "W", "W", "Y"],
	["Y", "W", "BL", "W", "Y"],
	["Y", "Y", "W", "W", "Y", "Y"],
	["Y", "Y", "Y", "Y", "Y", "Y", "Y"],
	["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
	["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
	["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
	["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
	["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
	["BR", "BR", "BR", "BR", "BR", "BR", "BR", "BR", "BR", "BR", "BR", "BR", "BR"],
]

var coolPatternMap = [
	["R", "R", "R", "R"],
	["R", "X", "W", "X", "R"],
	["R", "X", "W", "W", "X", "R"],
	["R", "R", "W", "LB", "W", "r", "R"],
	["R", "X", "W", "LB", "LB", "W", "X", "R"],
	["R", "X", "W", "LB", "LB", "LB", "W", "X", "R"],
	["R", "X", "W", "LB", "LB", "LB", "LB", "W", "X", "R"],
	["R", "X", "W", "LB", "LB", "LB", "LB", "LB", "W", "X", "R"],
	["R", "X", "W", "LB", "LB", "LB", "LB", "LB", "W", "X", "R"],
	["R", "X", "W", "LB", "LB", "LB", "LB", "W", "X", "R"],
	["R", "X", "W", "LB", "LB", "W", "X", "R"],
	["R", "R", "W", "LB", "W", "R", "R"],
	["R", "X", "W", "W", "X", "R"],
	["R", "X", "W", "X", "R"],
	["R", "R", "R", "R"],
]

var xMap = [
	["R", "R", "X", "X", "X", "X", "X", "X", "X", "R", "R"],
	["X", "R", "R", "X", "X", "X", "X", "X", "R", "R", "X"],
	["X", "X", "R", "R", "X", "X", "X", "R", "R", "X", "X"],
	["X", "X", "X", "R", "R", "X", "R", "R", "X", "X", "X"],
	["X", "X", "X", "X", "R", "R", "R", "X", "X", "X", "X"],
	["X", "X", "X", "X", "R", "R", "R", "X", "X", "X", "X"],
	["X", "X", "X", "R", "R", "X", "R", "R", "X", "X", "X"],
	["X", "X", "R", "R", "X", "X", "X", "R", "R", "X", "X"],
	["X", "R", "R", "X", "X", "X", "X", "X", "R", "R", "X"],
	["R", "R", "X", "X", "X", "X", "X", "X", "X", "R", "R"],
]

var butterflyMap = [
	["X"],
	["BL", "X",  "X", "X", "BL"],
	["BL", "X", "BL", "X", "BL", "X", "BL"],
	["BL", "X", "BL", "X", "BL", "X", "BL"],
	["BL", "X", "BL"],
	["G", "G", "X", "X", "BR", "BR", "X", "X", "G", "G"],
	["G", "R", "R", "G", "X", "BR", "BR", "X", "G", "R", "R", "G"],
	["G", "R", "LB", "R", "G", "BR", "BR", "G", "R", "LB", "R", "G"],
	["G", "R", "LB", "R", "G", "BR", "BR", "G", "R", "LB", "R", "G"],
	["G", "R", "LB", "R", "G", "BR", "BR", "G", "R", "LB", "R", "G"],
	["X", "G", "R", "R", "G", "BR", "BR", "G", "R", "R", "G", "X"],
	["X", "X", "G", "G", "G", "BR", "BR", "G", "G", "G", "X", "X"],
	["X", "X", "X", "G", "R", "BR", "BR", "R", "G", "X", "X", "X"],
	["X", "X", "G", "R", "R", "BR", "BR", "R", "R", "G", "X", "X"],
	["X", "G", "R", "R", "G", "BR", "BR", "G", "R", "R", "G", "X"],
	["X", "R", "R", "G", "X", "BR", "BR", "X", "G", "R", "R", "X"],
	["X", "G", "G", "X", "X", "BR", "BR", "X", "X", "G", "G", "X"],
	["BR", "BR"],
	["BR"],
]

window.drawMap = function(blockWidth, blockHeight, blockMap, blocks){
	frameKey = {"R": 0,
				"O": 1,
				"Y": 2,
				"W": 3,
				"G": 4,
				"LB": 5,
				"DB": 6,
				"P": 7,
				"BL": 8,
				"BR": 10,
				"X": 11}
	
	var numRows = blockMap.length;
	var blockYPos = 4;
	
	for (var row = 0; row < blockMap.length; row ++){
		for (var col = 0; col < blockMap[row].length; col++){
			if (frameKey[blockMap[row][col]] != 11){
				var numCols = blockMap[row].length
				
				var centerBlock = (game.world.width - numCols*blockWidth)/2;

				var block = blocks.create(col * blockWidth + centerBlock, blockYPos * blockHeight, 'block');
				
				block.scale.setTo(1.3, 1.3)
				
				block.enableBody = true;
				block.body.immovable = true;
				
				//This makes a rainbow design with the blocks
				block.frame = frameKey[blockMap[row][col]]
				
				blocksOnScreen ++;
			}
		}
		blockYPos ++
	}
}
