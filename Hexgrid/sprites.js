

sprite_status=0;

//Speed és player paraméter még nem él




sprites=[];
	
	
	
//Player1	
	
		item = {};
        item ["x"] = 2;
        item ["y"] = 15;
        item ["speed"] = 1;
        item ["movement"] = 7;
        item ["player"] = 1;
        sprites.push(item);	
	
	
	
	
	
		item = {};	
         item ["x"] = 4;
        item ["y"] = 15;
        item ["speed"] = 3;
        item ["movement"] = 3;
		 item ["player"] = 1;
        sprites.push(item);	
	
	
	
	
	
	
		item = {};
        item ["x"] = 6;
        item ["y"] = 15;
        item ["speed"] = 3;
        item ["movement"] = 4;
		 item ["player"] = 1;
        sprites.push(item);	
	
	
	
	
	




//Player2	
	
	
	
		item = {};
        item ["x"] = 1;
        item ["y"] = 1;
        item ["speed"] = 3;
        item ["movement"] = 5;
		 item ["player"] = 2;
        sprites.push(item);	
	
		
	
	
	
	
		item = {};
        item ["x"] = 3;
        item ["y"] = 1;
        item ["speed"] = 1;
        item ["movement"] = 6;
		 item ["player"] = 2;
        sprites.push(item);	
	
		
	
	
	
		item = {};
        item ["x"] = 5;
        item ["y"] = 1;
        item ["speed"] = 9;
        item ["movement"] = 3;
		 item ["player"] = 2;
        sprites.push(item);	
	
		
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
temp=[];



while(sprites.length>0){
startspeed=0;index=0;
for(i=0;i<sprites.length;i++){
if(sprites[i].speed>startspeed){startspeed=sprites[i].speed;index=i;}

}	



temp.push(sprites[index]);
sprites.splice(index,1);

}


sprites=temp;	
	
	
	for(i=0;i<sprites.length;i++){

$('#'+sprites[i]['x']+'_'+sprites[i]['y']).find('.hexagon-in2').addClass('sprite');	
$('#'+sprites[i]['x']+'_'+sprites[i]['y']).find('.hexagon-in2').addClass('unit'+i);	

}

	



