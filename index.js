let txts = document.querySelector("#fullname");
let btnsub = document.querySelector("#con");
let box = document.querySelector("#data");
let remo = document.querySelector("#rem");
 let randomm = document.querySelector("#ran");
 
 randomm.addEventListener("click",(e)=>{
   e.preventDefault();
   fetch(`https://api.giphy.com/v1/gifs/random?q=&api_key=zMssqti4N5aB8ohxXzWMbUE41deHIeZ9`, {
        method: "GET",
        Credentials: "same-arigin",
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
     
      .then((res) => res.json())
      .then((res) => {
     const uimg = res.data.images.original.url;
     const img = document.createElement("img");
      img.classList.add("imgv");
       const a = document.createElement("a");
        img.src = uimg;
       a.href = uimg;
        a.target = "_blank";
        a.appendChild(img)
         const boximg = document.createElement("div");
         boximg.classList.add("divim");
       boximg.appendChild(a);
       box.appendChild(boximg);
        });
     

 });

//event button remove
remo.addEventListener("click",funcrem);
//implement a function that remove box data
function funcrem(){
  box.textContent="";
}

btnsub.addEventListener("click", (e) => {
  // TODO Handle Empty Input 
  e.preventDefault();
  const searchVal = txts.value;
  //
  if (searchVal.trim() == "") {
    const errDiv = document.createElement("span");
    errDiv.textContent = "soory , try later";
    //errDiv.setAttribute("background-color","red");
    errDiv.style.color="red";
    errDiv.style.fontSize="30px";
   
    box.textContent = "";
    box.appendChild(errDiv);
    return;
  }
  box.textContent = "";
  //console.log(  `https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=zMssqti4N5aB8ohxXzWMbUE41deHIeZ9`);
  fetch(`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=zMssqti4N5aB8ohxXzWMbUE41deHIeZ9`, {
    method: "GET",
    Credentials: "same-arigin",
    headers: {
      "Content-Type": "application/json",
    },
  }
  )

    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
      if (res.data.length == 0) {
        const errDiv = document.createElement("span");
        errDiv.setAttribute("background-color","red");
        errDiv.textContent = "something went wrong please try agin later";
    errDiv.style.color="red";
    errDiv.style.fontSize="30px";
        box.textContent = "";
        box.appendChild(errDiv);

      } else {
    
          res.data.forEach((data) => {
            const url = data.images.original.url;
            const title = data.title;
            const img = document.createElement("img");
            img.classList.add("imgv");
            const a = document.createElement("a");
            img.src = url;
            a.href = url;
            a.target = "_blank";
            a.appendChild(img)
            const boximg = document.createElement("div");
            boximg.classList.add("divim");
            boximg.appendChild(a);
            const cont = document.createElement("p");
            cont.textContent = title;
          cont.classList.add("pimg");  
             cont.setAttribute("text-align","center");
            boximg.appendChild(cont);
            box.appendChild(boximg);
           
          });
        
    
       
  

        
      }
    })


  
    .catch((err) => {
      const errDiv = document.createElement("span");
      errDiv.textContent = "something went wrong please try agin later";
    errDiv.style.color="red";
    errDiv.style.fontSize="30px";
      box.textContent = "";
      box.appendChild(errDiv);
    });
});



