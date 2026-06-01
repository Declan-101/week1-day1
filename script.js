var photos = []; //Declare an empty array to store image element
            var fileNames = []; //Declare an empty element to store image file names
            var imageList = []; //Declare an empty array to store html list that contain an image
            var image; //Declare an empty variable to store the assembled image list codes
            var captionTexts = [
                "Landscape",
                "Frosty",
                "Footpath",
                "Sunrise",
                "Icy",
                "Moutain's",
                "Forest",
                "Sunset",
                "Village",
                "Snowman",
            ];
            var descTexts = [
                "Beautiful snowy landscape.",
                "Cold winter morning.",
                "Snow covered pathway.",
                "Sunrise from top of snowy trees.",
                "Frozen outdoor scenery.",
                "Snowy mountain tops.",
                "Fresh winter atmosphere.",
                "Winter sunset with a view.",
                "Snow covered village.",
                "Fun in the snow."
            ];
            var closeList = "</li>"; //Declare a variable to contain close list tag
            var openCaptionTag = "<p class='caption'>";
            var closeCaptionTag = "</p>";

            var openDescTag = "<p class='description'>";
            var closeDescTag = "</p>";

            //Create a loop to create 6 images starting with the index of 0
            for (var i=0; i<10; i++) {
                fileNames.push( "winterland"+(i+1)); //Create image file name and store in the array
                photos.push("<img src='images 2/"+fileNames[i]+".jpg'>"); //Assemble file name into image elements and store in an array
                var openList = "<li id='photo"+(i+1)+"'>";
                image = openList 
                      + photos[i]
                      + openCaptionTag + captionTexts[i] + closeCaptionTag
                      + openDescTag + descTexts[i] + closeDescTag
                      + closeList;                
                imageList.push(image); //Store(push) the assembled list codes into an array
            }
            //display all six image codes stored in the array
            document.getElementById("album").innerHTML = imageList.join("");