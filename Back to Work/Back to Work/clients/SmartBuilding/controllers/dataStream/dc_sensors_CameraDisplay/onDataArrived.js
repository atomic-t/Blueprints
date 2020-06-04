
    
    if (data.type === "Camera"){
    

        var imagepath = data.data.value.imagepath;

        var scaleFactor = 1;

        var design = client.getDocumentUrl(imagepath);
        var canvas = $("#cameracanvas").get(0);
        var img = new Image();
        var ctx = canvas.getContext("2d");



        var yoloResults = data.data.value.results;
        var objCount = data.data.value.personcount;
        
        client.getWidget("StaticTextPersonCount").text = objCount;

        img.onload = function() {
            canvas.width = this.width / scaleFactor;
            canvas.height = this.height / scaleFactor;
            ctx.drawImage(this, 0, 0, this.width / scaleFactor, this.height / scaleFactor);ctx.beginPath();
            yoloResults.forEach(function(result){
                ctx.lineWidth="3";	
                ctx.strokeStyle=result.distanceColor;
                ctx.strokeRect(result.location.left / scaleFactor, result.location.top / scaleFactor , (result.location.right - result.location.left) / scaleFactor, (result.location.bottom -  result.location.top) / scaleFactor); 

            });
        };
        img.src = design;

        // center it
        $("#cameracanvas").css( {
            padding: "0",
            margin: "auto",
            display: "block",
            width: "800px",
            height: "600px",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0"
        });
    }
