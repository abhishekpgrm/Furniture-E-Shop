
let mainimag = document.querySelector("#mainimg")
let small_img = document.querySelectorAll(".smig")

small_img.forEach((item, k) => {
    item.onclick = function () {
        let a = item.src;
        mainimag.src = a;
        for (let i = 0; i < small_img.length; i++) {
            if (k == i) {
                small_img[i].classList.add("act")
            }
            else {

                small_img[i].classList.remove("act")

            }


        }
    }

})


 

let Bimg = document.querySelectorAll(".card-1")
let detail = document.querySelectorAll(".modl")


let smollimg = {
    bigimg1: ["./img/m1-1.jpg", "./img/m2-1.jpg", "./img/m3-1.jpg", "./img/m4-1.jpg"],
    bigimg2: ["./img/m1-2.jpg", "./img/m2-2.jpg", "./img/m3-2.jpg", "./img/m4-2.jpg"],
    bigimg3: ["./img/m1-3.jpg", "./img/m2-3.jpg", "./img/m3-3.jpg", "./img/m4-3.jpg"],
    bigimg4: ["./img/m1-4.jpg", "./img/m2-4.jpg", "./img/m3-4.jpg", "./img/m4-4.jpg"]
   

}

for(let i=0; i<Bimg.length; i++){
  let  modelimg=Bimg[i]
  modelimg.addEventListener ('click', (e)=>{
    let imgs = e.target.parentElement.parentElement.parentElement.parentElement.children[0].src
    let name = e.target.parentElement.parentElement.parentElement.parentElement.children[1].querySelector(".anker").innerText
    let price = e.target.parentElement.parentElement.parentElement.parentElement.children[1].querySelector(".price-2").children[0].innerText
    detail.forEach(element => {
        element.innerHTML=` <div class="row  gy-3 mb-4 ">
        <div class=" col-md-6 col-lg-4 ">
        <div class="  left-cart-det ">
        <img src="${imgs}" class="card-img-top main-img " alt="..."  id="mainimg">
        </div>
        <div class="row gx-2 mt-2 modlsho">
        <div class="col-3 ">
        <img src="${smollimg.bigimg1[i]}" class="card-img-top  smig" alt="..."  >
        
        </div>
        <div class="col-3 ">
        <img src="${smollimg.bigimg2[i]}" class="card-img-top  smig " alt="...">
        
        </div>
        <div class="col-3 ">
        <img src="${smollimg.bigimg3[i]}" class="card-img-top  smig " alt="...">
        
        </div>
         <div class="col-3 ">
           <img src="${smollimg.bigimg4[i]}" class="card-img-top smig " alt="...">
       
           </div>
           </div>
     </div>
        <div class="col-md-6 col-lg-6">
       <div class=" right-cart-det">
          <h5>${name}</h5>
         <p class="text-muted">$<span class="text-muted">${price}</span></p>
         Quantity   <input type="number" name="" value="1" class="qty"> 
           <button class="add-to-card "> Add to Cart</button>
             <h6 class="pro-info pb-2 pt-3">Product Details</h6>
             <span class="info text-muted">I'm a product detail. I'm a great place to add more information about your
             product such as sizing, material, care and cleaning instructions. This is also a great space
             to write what makes this product special and how your customers can benefit from this item.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda provident adipisci praesentium blanditiis repellat officiis eos obcaecati natus alias error omnis, ducimus excepturi numquam consequuntur, architecto deserunt aliquid at?
             
             </span>
             </div>
             </div>
             </div>`
});


let mainimag = document.querySelector("#mainimg")
let small_img = document.querySelectorAll(".smig")

small_img.forEach((item, k) => {
    item.onclick = function () {
        let a = item.src;
        mainimag.src = a;
        for (let i = 0; i < small_img.length; i++) {
            if (k == i) {
                small_img[i].classList.add("act")
            }
            else {

                small_img[i].classList.remove("act")

            }


        }
    }

})
})

}
