var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('https://asset.holidaycardsapp.com/assets/card/j_diwli_001-fa7a6906179fdde2cf5598408e22ae532457646a704498f3bd6f69331ce494bb.png',function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(500);
        block_image_object.scaleToHeight(500);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}
