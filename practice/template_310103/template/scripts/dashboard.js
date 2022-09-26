let LSdata = JSON.parse(localStorage.getItem("guest-data"))||[];
let tbody = document.querySelector("tbody");

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


let filterDOM = document.getElementById("filter");

filterDOM.addEventListener("change",function(el){
    if(filterDOM.value === ""){
        renderDOM(LSdata)
    }else{
        let filtered = LSdata.filter(function(ele){
            if(ele.roomType === filterDOM.value){
                return true
            }else{
                return false
            }
        })
        renderDOM(filtered)
    }
   
})

let search = document.getElementById("search");

search.addEventListener("input",function(){
    let searched = LSdata.filter(function(ele){
        return ele.guestName.toUpperCase().includes(search.value.toUpperCase())
    })
    renderDOM(searched)
})

