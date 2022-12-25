let liste = ["Images/glacon2.png","Images/glacons2.png","Images/glacon1.jpg"];
let current = 0;



function appendImage() {
    inputBar = document.getElementById("inputBar");
    url = inputBar.value;
    console.log(inputBar);
    liste.push(url);
    update(0);
}

function update(nb) {
    img = document.getElementById("imageGalerie");
    p   = document.getElementById("displayImageNb");
    current = (current + nb)%(liste.length);
    if(current < 0) current = liste.length + current;
    img.src = liste[current];
    p.innerHTML = "Image "+ (current+1) + " sur " + liste.length;
    
}

update(0);
