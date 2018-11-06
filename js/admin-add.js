// let image_url;

// window.onload = function getName () {
//     document.getElementById("admin-name").innerHTML = getCookie("user");
// }

// const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dqpceybfd/upload`;
// const CLOUDINARY_UPLOAD_PRESET = `icfju7eh`;
// let fileUpload = document.getElementById("file-upload");

// if (fileUpload) {fileUpload.addEventListener('change', function(event) {
//     let file = event.target.files[0];
//     let formData = new FormData();

//     formData.append('file', file);
//     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
//     axios({
//         url: CLOUDINARY_URL,
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data: formData
//     }).then(function(res) {
//         image_url = res.data.secure_url;
//         console.log(image_url);
//     }).catch(function (err) {
//         console.log(err)
//     });
// });};


// let addItemForm = document.forms["add-item-form"];
// let addSuccessMessage = document.getElementById("add-success");
// let addFailMessage = document.getElementById("add-fail");

// if (addItemForm) {addItemForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let formData = new FormData(e.target);
//     let menu_item = formData.get("menu_item");
//     let description = formData.get("description");
//     let price = formData.get("price");
    
    

//     let newMenuItem = {
//         menu_item:menu_item,
//         description:description,
//         price:price,
//         image_url:image_url
//     }


//     const url = `http://localhost:5000/api/v2/menu`;

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json",
//             "Authorization": `Bearer ${getCookie("token")}`
//         },
//         body: JSON.stringify(newMenuItem)
//     })
//     .then(function(response) {
//         if (response.status == 201) {
//             addSuccessMessage.style.display = "block";
//             addFailMessage.style.display = "none"

//         } else {
//             addFailMessage.style.display = "block"
//             addSuccessMessage.style.display = "none";
//         }
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })

//     console.log(JSON.stringify(newMenuItem));

// });};