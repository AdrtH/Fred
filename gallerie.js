let liste = ["Images/oui.png","Images/Dimitri-Mendeleiev.png","https://imgs.search.brave.com/aMxza_7Zisq3zaJ9dWcSrPXJcklazcZMxGRQI5mvuxs/rs:fit:780:928:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly00ZTNwQ2lfMHZV/SS9VVGw4aU9nUW9t/SS9BQUFBQUFBQUJ4/OC9VbVNDRXNpTjdY/by9zMTYwMC9uaWtv/bGEtdGVzbGEuanBl/Zw"]
let current = 0


function update(nb) {
    img = document.getElementById("imageGalerie")
    p   = document.getElementById("displayImageNb")
    current = (current + nb)%(liste.length)
    if(current < 0) current = liste.length + current
    img.src = liste[current]
    p.innerHTML = "Image "+ (current+1) + " sur " + liste.length
    
}

update(0)
