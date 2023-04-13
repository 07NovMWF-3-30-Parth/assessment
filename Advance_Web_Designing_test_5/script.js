// full assessment mostly done by js DOM


// h1 heading created and append to body
let heading = document.createElement("h1")
document.body.appendChild(heading)
heading.textContent = "Advance Web Designing Test 5 (with DOM)"
heading.style.paddingBlock = "20px"
heading.style.fontSize = "50px"
heading.style.textAlign = "center"

// hr created and append to body
let hr = document.createElement("hr");
document.body.appendChild(hr);

// div created for date and time display and append to body, given id ("container")
let contain = document.createElement("div");
document.body.appendChild(contain);
contain.style.textAlign = "center";
contain.id = "container"
contain.style.width = "40%"
contain.style.margin = "auto"



// in ("container") we inserted a loop and created 2 div given id ("date") & ("time")
let boxName = ["date", "time"];
for(let i=0; i<2; i++)
{
    let box = document.createElement("div");
    contain.appendChild(box);
    box.id = boxName[i]
    box.style.fontSize = "50px"
    box.style.marginBlock = "20px"
    box.style.display = "inline-block"
    box.style.fontWeight = "bold"
    

    // print date and get day from array with Date() function
    if(box.id == "date")
    {
        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        let day = weekday[d.getDay()]
        let dt = Date().slice(3,10)
        let year = Date().slice(10,15)
        document.getElementById("date").innerHTML = day+', '+dt+', '+year
        box.style.background = "lightblue"
        box.style.border = "5px outset"
        box.style.borderRadius = "10px"
        box.style.borderColor = "teal"
        box.style.padding = "10px 10px"
        box.style.color = "rgb(39, 39, 39)"
    }


    // print time with a function and use of setInterval() function for live digital clock
    if(box.id == "time")
    {
        let span = document.createElement("span")
        box.appendChild(span)
        
        
        // function time(){
        // let time = Date().slice(16,25)
        // span.textContent = time
    
    // this is for showing AM & PM with 12 hour format clock version
        function time(){
        let time = new Date()
        let AMPMtime = time.toLocaleString('en-INDIA', {hour:'numeric', minute:'numeric',second:'numeric', hour12: true});
        span.textContent = AMPMtime
        
        
        box.style.padding = "0px 20px"
        }
        // with this, function will be executed with every 1 second
        setInterval(time,1000)
    }

}
// this will print function at the time of loading the page
time()