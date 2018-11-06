function getItemList(menu) {
    let itemList = "";
    for(var i in menu) {
        itemList += `<div id="${menu[i]['menu_item'].toLowerCase()}" class="menu-item" onclick="addItemToList(this.id, 'order-list')">
                    <div class="menu-img">
                    <img src="${menu[i]['image_url']}" alt="">
                    </div>
                    <div  class="menu-text">
                    <h4>${menu[i]['menu_item']}</h4>
                    </div>
                    <div  class="menu-price">
                    <h4>${menu[i]['price']}</h4>
                    </div>                            
                    </div>`
    };
    return itemList;
};

let your_order = [];

function addItemToList(clicked_id, listElement) {
    var ul = getDomElementById(listElement);    
    var li = document.createElement("li");
    var order_item = getDomElementById(clicked_id).childNodes[3].innerText;
    var price = getDomElementById(clicked_id).childNodes[5].innerText;
    var listitem = `${order_item} --- ${price}`;
    li.appendChild(document.createTextNode(listitem));
    ul.appendChild(li);
    your_order.push(order_item);
};

function getMenu(url, element) {        
    let menu = queryApi(url, "GET");    
    setTimeout(function() {                        
        getDomElementById(element).innerHTML = getItemList(menu.data.Menu);
    }, 2000);
};


window.onload = function() {
    const url = getUrl("menu");    
    getMenu(url, "my-menu");
    let userName = getDomElementById("username")
    if(userName) {    
    userName.innerHTML = getCookie("user");
    }
    if (getCookie("role") == "admin") {
        let adminLink = getDomElementById("admin-link");
        if (adminLink){  
        adminLink.style.display = "block";
        }
    };
};
