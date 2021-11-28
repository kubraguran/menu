const menu = [
    {
        id:1,
        title: "burrata",
        category:"starter",
        price:25.00,
        img:"item-1.jpg",
        desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",
    }, 
   
    {
        id:3,
    title: "salad",
    category:"starter",
    price:15.00,
    img:"item-3.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",

    },
    {
        id:4,
    title: "shrimp",
    category:"starter",
    price:20.00,
    img:"item-4.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",

    },
    {
        id:5,
    title: "fish",
    category:"mainCourse",
    price:19.00,
    img:"item-5.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",

    },
    {
        id:6,
    title: "pasta",
    category:"mainCourse",
    price:25.00,
    img:"item-6.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",

    },
    {

        id:7,
        title: "pasta",
        category:"mainCourse",
        price:27.00,
        img:"item-7.jpg",
        desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",
    },
    {

        id:9,
    title: "duck",
    category:"mainCourse",
    price:35.00,
    img:"item-9.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",
    },
    {
        id:10,
    title: "milfoy",
    category:"dessert",
    price:22.00,
    img:"item-10.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",
    },
    {
        id:11,
    title: "panna cottta",
    category:"dessert",
    price:15.00,
    img:"item-11.jpg",
    desc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis eveniet quod ipsa commodi labore, maxime consectetur repellat aut cupiditate!",
    },
    

    
]


const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
   });  
 

 filterBtns.forEach((btn) => {
     btn.addEventListener("click", function(e){
         const category = e.currentTarget.dataset.id;
         const menuCategory = menu.filter(function (menuItem){
             if(menuItem.category === category){
                 return menuItem
             }
         })
         if(category === "all"){
             displayMenuItems(menu)
         }else {
             displayMenuItems(menuCategory)
         }
     })
 })









function displayMenuItems(menuItems ) {
    let displayMenu = menuItems.map(function (item) {
        return ` <article class="menu-item">
        <img src = ${item.img} alt = ${item.title} class="photo"/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class = "item-text">
                ${item.desc}
            </p>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    console.log(displayMenu);
}