let add = document.querySelector("#add");
let h5 = document.querySelector("h5");
// let remove = document.querySelector("#remove");
let check = 0

add.addEventListener("click",() => {
    if (check == 0 ){
        
                h5.innerHTML = "Friend";
                h5.style.color = "green";
                check = 1;
                add.innerHTML = "Unfriend";
    }else{
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        check = 0;
        add.innerHTML = "Add friend";
    }
})

// remove.addEventListener("click",() => {
//     h5.innerHTML = "Stranger";
//     h5.style.color = "red";
// })

