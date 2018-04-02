


recursiveDelNullLayer( activeDocument );







function recursiveDelNullLayer( srcSet )
{
	var loopCount = srcSet.layerSets.length;
	
	//再帰でレイヤーセットを繰り返し処理
	for( var i = 0; i < loopCount; i++ )
	{
		recursiveDelNullLayer( srcSet.layerSets[i] );
	}
	
	
	//再帰のレイヤーセット後の実際のレイヤー処理
	loopCount = srcSet.artLayers.length;
	
	for( var i = loopCount - 1; i >= 0; i-- )
	{
		if( IsNullLayer( srcSet.artLayers[i] ) == true )
		{
			srcSet.artLayers[i].remove();
		}
	}
}




function IsNullLayer( srcLayer )
{
	var ret		= false;
	var layObj 	= srcLayer.bounds;

	var x1 = parseInt(layObj[0]);
	var y1 = parseInt(layObj[1]);
	var x2 = parseInt(layObj[2]);
	var y2 = parseInt(layObj[3]);
	
	if( x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0 ) ret = true;
	
	return ret;
}