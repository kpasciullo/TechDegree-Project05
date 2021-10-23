
// document.getElementById('search').addEventListener("keyup", myFunction);
// function myFunction() {
//    var searchInput = document.getElementById('search')
//     console.log(document.getElementById('search').value);
//     searchInput.value = searchInput.value.toLowerCase();

// }

var search = document.getElementById('#search');
var input = document.queryselectorAll('data-caption');
var handleSearch = event => {
    var searchTerm = event.target.value.toLowerCase();
    input.forEach(input => {
            var text = input.textContent.toLowerCase();
            var image = input.a;
            if(text.includes(searchTerm)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
    });
};
search.addEventListener('keyup', handleSearch);

