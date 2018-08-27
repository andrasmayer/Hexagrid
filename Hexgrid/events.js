	lepes=4;
if(lepes>15){lepes=15;}





function activeUnitInfo(){
activeUnitClass=$('.active').attr('class');
activeUnitClass=activeUnitClass.split(' ');
activeUnitClass=activeUnitClass[1];
activeUnitIdactive=activeUnitClass.split('unit')[1];


//check player
playerInfo=sprites[activeUnitIdactive].player;

$('.player2').removeClass('player2');
if(playerInfo==1){$('.active').addClass('player2');}else{}


}














//Ha létezik aktív mező hozzáadja a potenciális társmezőket
function findActive(activeelement){


activeUnitInfo();


thisId=activeelement;
cordinates=thisId.split('_');
x=parseInt(cordinates[0]);
y=parseInt(cordinates[1]);	
addNeighbor();
for(lepesszamlalo=0;lepesszamlalo<sprites[activeUnitIdactive]['movement']-1;lepesszamlalo++){
additionalNeighbors();	
}}




//Társmezők hozzáadása
function addNeighbor(){
for(i=0;i<cords.length;i++){
if(x%2==0  ){modify=+1;
if(i==2 || i==3){modify=0;}else{modify=1;}
}else{modify=0;}









//Leendő lehetőségek ellenőrzése
elementToCheck=$('#'+(x+cords[i][0])+'_'+(y+cords[i][1]+modify)).find('.hexagon-in2');
isActive=elementToCheck.hasClass('active');
isPossible=elementToCheck.hasClass('possible');
isSprite=elementToCheck.hasClass('sprite');
isBlocked=elementToCheck.hasClass('blockedPath');
if(isActive==false && isPossible==false && isSprite==false && isBlocked==false){
$('#'+(x+cords[i][0])+'_'+(y+cords[i][1]+modify)).find('.hexagon-in2').addClass('possible');
}
	
}
}















function additionalNeighbors(){
if(lepes>1){	
$('.possible').each(function(){
thisId=$(this).parent().parent().parent().attr('id');
cordinates=thisId.split('_');
x=parseInt(cordinates[0]);
y=parseInt(cordinates[1]);
addNeighbor();
})	} }










function manageElements(clickedId){
sprite_status++;
if(sprite_status>sprites.length-1)	{sprite_status=0;}				//Következő aktív
	
$('.possible').removeClass('possible');//Ha már volt kattintás kiveszi őket	
$('#'+lastActive).find('.hexagon-in2').removeClass('sprite '+activeUnitClass);
$('#'+clickedId).find('.hexagon-in2').addClass('sprite '+activeUnitClass);
$('.active').removeClass('active');//Ha már volt kattintás kiveszi őket	
$('.unit'+sprite_status).addClass('active')	;



$('.active').removeClass('sprite');	

	

activeId=$('.active').parent().parent().parent().attr('id');
findActive(activeId);
addNeighbor();
}







$(document).ready(function() {

	
	
	
	
	





cords=[
[-1,-1],
[-1,0],
[0,-1],
[0,+1],
[+1,-1],
[+1,0]
];

	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	









$('body').on('click','.possible',function(){						//Ha olyan helyre kattintassz, ahová léphetsz
clickedId=$(this).parent().parent().parent().attr('id');
lastActive=$('.active').parent().parent().parent().attr('id');	
manageElements(clickedId);

})












//következő kör




for(i=0;i<sprites.length;i++){

$('#'+sprites[i]['x']+'_'+sprites[i]['y']).find('.hexagon-in2').addClass('sprite');	
$('#'+sprites[i]['x']+'_'+sprites[i]['y']).find('.hexagon-in2').addClass('unit'+i);	

}




$('.unit0').addClass('active');
$('.unit0').removeClass('sprite');







//Úttorlaszok
blockedPath=['2_10','3_10','4_10','5_10','6_10','8_10','9_10','6_10','10_10','8_9','8_8','7_8']	
	for(i=0;i<blockedPath.length;i++){
$('#'+blockedPath[i]).find('.hexagon-in2').addClass('blockedPath');	
}

	
	











activeId=$('.active').parent().parent().parent().attr('id');
findActive(activeId);






})
