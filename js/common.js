// const API = "http://localhost:5000";
const API = "https://actlikewill-fastfoodfast.herokuapp.com";

let urls = {
    menu: "/api/v2/menu",
    orders: "/api/v2/users/orders"
}

function getUrl(param){    
        return API+urls[param];    
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
};

function getDomain() {
let domain = window.location.href;    
let domainArray = domain.split('/'); 
let newDomain = ``;   
for (i=0; i<domainArray.length - 1; i++) {
    newDomain += `${domainArray[i]}/`
    }
return newDomain
};

function getDomElementById(id) {
    let element = document.getElementById(id);
    if (element) {
        return element;
    };
};

function queryApi(setUrl, setMethodToUse=undefined, setHeaders=undefined, setBody=undefined) {
    let responseObject = {};    
    
    fetch(setUrl, {
        method: setMethodToUse,
        headers: setHeaders,
        body : setBody        
    })
    .then(function(response) {
        let res = response;
        responseObject["response"] = res;
        return response.json();
    })
    .then(function(data) {
        let responseData = data;
        responseObject["data"] = responseData;
    })
    .catch(function(error) {
        let responseError = error;
        responseObject["error"] = responseError;  
    })

    return responseObject;
};
