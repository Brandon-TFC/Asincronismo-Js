import fetch from 'node-fetch'; //Permite realizar solicitudes http
const API='https://api.escuelajs.co/api/v1';

//Esta funcion envia una solicitud POST a la url proporcionada con los datos especificos
function postData(urlApi,data){
    const response=fetch(urlApi,
        {method:'POST',mode:'cors',
        credentials:'same-origin',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }) ;return response;
    }
    //Datos que se enviaran en el POST
    const data={"title":"212",
        "price":212,
        "description":"A description",
        "categoryId":1,
        "images":["https://placeimg.com/640/480/any"]
}
postData(`${API}/products`,data)
.then(response=>response.json()) //Obtencion de datos tipo json
.then(data=>console.log(data));