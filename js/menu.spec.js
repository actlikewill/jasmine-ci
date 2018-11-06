describe("menu.js", function() {

    afterAll(function () {
        document.body.innerHTML = '';
    });

    it("addItemToList adds item to list", function() {
        let html = `<div id="burger">
        <div class="menu-img">
        <img src="" alt="">
        </div>
        <div  class="menu-text">
        <h4>Burger</h4>
        </div>
        <div  class="menu-price">
        <h4>some-price</h4>
        </div>                            
        </div>`;
        const ul = document.createElement("ul");
        ul.setAttribute("id", "list");
        document.body.appendChild(ul);
        
        const item = document.createElement("div");
        item.setAttribute("id", "test");
        document.body.appendChild(item);
        getDomElementById("test").innerHTML = html;
        addItemToList("burger", "list");
        let result = getDomElementById("list").childNodes[0].innerText;
        document.body.innerHTML = "";
        expect(result).toBe("Burger --- some-price");
        
    });

    it("getItemList returns html", function() {
        let items = [{
        description: "Banana",
        image_url: "",
        menu_id: 1,
        menu_item: "Banana",
        price: "200"
        }];
        let result = getItemList(items);        
        expect(result).toBeHtmlString();
    });  
    
});


