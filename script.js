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
                "Moutains",
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
            var infoTexts = [
                "This landscape shows a beautiful winter scene covered in snow.",
                "This frosty image shows how cold and icy winter mornings can look.",
                "This footpath is covered in snow and creates a peaceful winter walkway.",
                "This sunrise shines through snowy trees and creates a peaceful winter walkway.",
                "This icy scene shows frozen outdoor scenery during the winter.",
                "These mountain top are covered in show and look calm and cold.",
                "This forest has a fresh winter atmosphere with snow all around.",
                "This sunset creats a warm view over a cold winter scene.",
                "This village is covered in show and looks quite and peachful.",
                "This snowman shows the fun side of winter and playing in the snow."
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
            document.getElementById("album").innerHTML += imageList.join("");
            
            var description = document.querySelectorAll(".description");
            for (let i = 0; i< description.length; i++) {
                description[i].addEventListener("click", function () {
                document.getElementById("infoHeading").innerHTML = captionTexts[i];
                document.getElementById("infoText").innerHTML = infoTexts[i];
                document.getElementById("infoBox").style.visibility = "visible";
                });
            }
            document.getElementById("closeInfo").addEventListener("click", function () {
                document.getElementById("infoBox").style.visibility = "hidden";
            });