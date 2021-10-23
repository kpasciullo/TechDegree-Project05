
// document.getElementById('search').addEventListener("keyup", myFunction);
// function myFunction() {
//    var searchInput = document.getElementById('search')
//     console.log(document.getElementById('search').value);
//     searchInput.value = searchInput.value.toLowerCase();

// }

const search = document.querySelector('#search');
const boxTexts = document.querySelectorAll('.col p');
const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    boxTexts.forEach(boxText => {
            const text = boxText.textContent.toLowerCase();
            const box = boxText.parentElement;
            if(text.includes(searchTerm)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
    });
}
search.addEventListener('keyup', handleSearch);

