//Variables
var input = document.getElementById('#search');
var imgLinks = document.querySelectorAll('a');

// Event listener on keyup 
input.addEventListener('keyup', myFunction());

    //Change user input and data captions to lower case
    var search = input.value.toLowerCase();
        var caption = imgLinks.getAttribute('[data-caption]').toLowerCase();

        //filter results
        if (caption.includes(search)) {
            imgLinks.style.display ='block';
        } else {
            imgLinks.style.display = 'none';
        }
    search.addEventListener('keyup', myFunction);





