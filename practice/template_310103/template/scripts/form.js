let form = document.querySelector("form");
let LSdata = JSON.parse(localStorage.getItem("guest-data"))||[];
form.addEventListener("submit",function(el){
    el.preventDefault();
    let obj={
        guestName:form.guestName.value,
        roomSize:form.roomSize.value,
        roomType:form.roomType.value,
        price:+form.price.value,
        extra:form.extra.value,
        id:Math.random(),
    }
    LSdata.push(obj)
    localStorage.setItem("guest-data",JSON.stringify(LSdata))
})