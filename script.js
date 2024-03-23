let btn = document.getElementById("searchbtn");

let input = document.getElementsByTagName("input")[0];
let searchResults = document.getElementById("searchResults");
const key = "b9pfHkTDXkaFfu1MHq9F85wbblkIi4jY";
btn.addEventListener("click", function(){
    let q = input.value;
    let images = getImagesUsingXHR(q);

})


function getImagesUsingXHR(q){
    let images = [];

    let xhr = new XMLHttpRequest();
    let url = "https://api.giphy.com/v1/gifs/search?api_key="+ key +"&q=" + q;
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            let respText = xhr.responseText;
            let resObj = JSON.parse(respText);

            for(let item of resObj.data){
                images.push(item.images.downsized_medium.url);
            }
            generateImgElements(images);
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}

function generateImgElements(images){

        for(let imageURL of images){
            let imgElement = document.createElement("img");
            imgElement.src=imageURL;
            searchResults.appendChild(imgElement);
        }
}