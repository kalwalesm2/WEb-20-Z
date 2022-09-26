let LSdata = JSON.parse(localStorage.getItem("guest-data"))||[];
let tbody = document.querySelector("tbody");
let filterDOM = document.getElementById("filter");
let search = document.getElementById("search");
let sortDOM = document.getElementById("sort");

function renderDOM(data){
    tbody.innerHTML = null
    data.forEach(function(el){
        let tr = document.createElement("tr");
        
        let guestName = document.createElement("td");
        guestName.innerText = el.guestName;

        let roomSize = document.createElement("td");
        roomSize.innerText = el.roomSize;

        let roomType = document.createElement("td");
        roomType.innerText = el.roomType;

        let price = document.createElement("td");
        price.innerText = el.price;

        let extra = document.createElement("td");
        extra.innerText = el.extra;

        let removeEl = document.createElement("td");
        removeEl.innerText = "Remove";
        removeEl.addEventListener("click",function(){
            
        })

        tr.append(guestName,roomSize,roomType,price,extra,removeEl)
        tbody.append(tr)
    })
}

renderDOM(LSdata);




filterDOM.addEventListener("change",function(el){
    let filtered;
    if(filterDOM.value === ""){
        filtered = LSdata
    }else{
        filtered = LSdata.filter(function(ele){
            if(ele.roomType === filterDOM.value){
                return true
            }else{
                return false
            }
        })
        let searched = filtered.filter(function(ele){
            return ele.guestName.toUpperCase().includes(search.value.toUpperCase())
        })
        renderDOM(searched)
    }
    
    
   
})



search.addEventListener("input",function(){
    let filtered;
    if(filterDOM.value === ""){
        filtered = LSdata
    }else{
        filtered = LSdata.filter(function(ele){
            if(ele.roomType === filterDOM.value){
                return true
            }else{
                return false
            }
        })
        let searched = filtered.filter(function(ele){
            return ele.guestName.toUpperCase().includes(search.value.toUpperCase())
        })
        renderDOM(searched)
    }
    
})

sortDOM.addEventListener("change",function(){
    if(sortDOM.value === ""){
        renderDOM(LSdata)
    }else{
        let copyLSdata = LSdata.map(function(el){
            return el
        })
        let sorted = copyLSdata.sort(function(ele1,ele2){
           if(sortDOM.value === "High-Low"){
            return ele2.price-ele1.price
           }else if ("Low-High"){
            return ele1.price-ele2.price
           }
        })
        renderDOM(sorted)
    }
})

