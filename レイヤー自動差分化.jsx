
	var activeLayerSet = activeDocument.activeLayer.parent;
	if( activeDocument.activeLayer.typename == "LayerSet" )
	{
		activeLayerSet = activeDocument.activeLayer;
	}
	
	setShowState( activeLayerSet );
	
	procLayerObj( activeLayerSet );




function setShowState( workLayerSet )
{
	var loopCount	= workLayerSet.artLayers.length;
	var lastNo 		= workLayerSet.artLayers.length - 1;
	
	for( var i = 0; i < loopCount; i++ )
	{
		workLayerSet.artLayers[i].visible = false;
	}
	
	workLayerSet.artLayers[lastNo].visible = true;
	
}



function procLayerObj( srcSet )
{
	var loopCount = srcSet.artLayers.length - 1;
	
	for( var i = 0; i < loopCount; i++ )
	{
		srcSet.artLayers[i].visible = true;;
		activeDocument.activeLayer = srcSet.artLayers[i];
		
		changeLayerDrawMode( "Dfrn" );
		selectByColor();
		executeAction( charIDToTypeID( "Dlt " ), undefined, DialogModes.NO );
		clearSelect();
		changeLayerDrawMode( "Nrml" );
		srcSet.artLayers[i].visible = false;
	}
}



//レイヤーの描画形式を切り替える。描画形式は引数の4文字文字列で指定。通常:"Nrml" 差の絶対値:"Dfrn"
function changeLayerDrawMode( modeType )
{
	var id29 = charIDToTypeID( "setd" );
    var desc6 = new ActionDescriptor();
    var id30 = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var id31 = charIDToTypeID( "Lyr " );
        var id32 = charIDToTypeID( "Ordn" );
        var id33 = charIDToTypeID( "Trgt" );
        ref3.putEnumerated( id31, id32, id33 );
    desc6.putReference( id30, ref3 );
    var id34 = charIDToTypeID( "T   " );
        var desc7 = new ActionDescriptor();
        var id35 = charIDToTypeID( "Md  " );
        var id36 = charIDToTypeID( "BlnM" );
        var id37 = charIDToTypeID( modeType );			//引数使用箇所
        desc7.putEnumerated( id35, id36, id37 );
    var id38 = charIDToTypeID( "Lyr " );
    desc6.putObject( id34, id38, desc7 );
	executeAction( id29, desc6, DialogModes.NO );
}



//色域指定の実行
function selectByColor()
{
	var id59 = charIDToTypeID( "ClrR" );
    var desc12 = new ActionDescriptor();
    var id60 = charIDToTypeID( "Fzns" );
    desc12.putInteger( id60, 0 );
    var id61 = charIDToTypeID( "Mnm " );
        var desc13 = new ActionDescriptor();
        var id62 = charIDToTypeID( "Lmnc" );
        desc13.putDouble( id62, 0.000000 );
        var id63 = charIDToTypeID( "A   " );
        desc13.putDouble( id63, 0.000000 );
        var id64 = charIDToTypeID( "B   " );
        desc13.putDouble( id64, 0.000000 );
    var id65 = charIDToTypeID( "LbCl" );
    desc12.putObject( id61, id65, desc13 );
    var id66 = charIDToTypeID( "Mxm " );
        var desc14 = new ActionDescriptor();
        var id67 = charIDToTypeID( "Lmnc" );
        desc14.putDouble( id67, 0.000000 );
        var id68 = charIDToTypeID( "A   " );
        desc14.putDouble( id68, 0.000000 );
        var id69 = charIDToTypeID( "B   " );
        desc14.putDouble( id69, 0.000000 );
    var id70 = charIDToTypeID( "LbCl" );
    desc12.putObject( id66, id70, desc14 );
	executeAction( id59, desc12, DialogModes.NO );
}


function clearSelect()
{
	// =======================================================
var id436 = charIDToTypeID( "setd" );
    var desc126 = new ActionDescriptor();
    var id437 = charIDToTypeID( "null" );
        var ref110 = new ActionReference();
        var id438 = charIDToTypeID( "Chnl" );
        var id439 = charIDToTypeID( "fsel" );
        ref110.putProperty( id438, id439 );
    desc126.putReference( id437, ref110 );
    var id440 = charIDToTypeID( "T   " );
    var id441 = charIDToTypeID( "Ordn" );
    var id442 = charIDToTypeID( "None" );
    desc126.putEnumerated( id440, id441, id442 );
	executeAction( id436, desc126, DialogModes.NO );
}