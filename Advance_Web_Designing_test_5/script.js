let heading = document.createElement("h1")
document.body.appendChild(heading)
heading.textContent = "Advance Web Designing Test 5"
heading.style.paddingBlock = "20px"
heading.style.fontSize = "50px"
heading.style.textAlign = "center"

let hr = document.createElement("hr");
document.body.appendChild(hr);


let contain = document.createElement("div");
document.body.appendChild(contain);
contain.style.textAlign = "center";
contain.id = "container"
contain.style.width = "40%"
contain.style.margin = "auto"




let boxName = ["date", "time"];
for(let i=0; i<2; i++)
{
    let box = document.createElement("div");
    contain.appendChild(box);
    box.id = boxName[i]
    box.style.fontSize = "50px"
    box.style.marginBlock = "20px"
    box.style.border = "5px outset"
    box.style.borderRadius = "10px"
    box.style.display = "inline-block"
    box.style.fontWeight = "bold"
    
    if(box.id == "date")
    {
        let dt = Date().slice(0,16) 
        document.getElementById("date").innerHTML = dt
        box.style.background = "lightblue"
        box.style.borderColor = "teal"
        box.style.padding = "10px 20px"
    }

    if(box.id == "time")
    {
        function time(){
        let time = Date().slice(16,25)
        document.getElementById("time").innerHTML = time
        box.style.padding = "10px 100px"
        }
        setInterval(time,1000)
    }

}
time()