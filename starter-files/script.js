// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

 let promesa = fetch(API_ENDPOINT,{method: "GET"});

 promesa.then((respuesta) =>{
     respuesta.json().then((datos) =>{
         console.log(datos);
         console.log(typeof datos);
         datos.forEach(ans => {
             if (ans.answer == "yes"){
                 keila.innerHTML += `<img src=${ans.image} height="500" style="border-radius:10px;margin-bottom:1rem;"/>
                 <div style="padding:0.35rem 0.7rem;
                     background: #94dbff;
                     border-radius:10px;
                     width:300px;
                     text-align:center;
                     font-weight:600;
                     font-size:0.85rem">
                 </div>`
             }
         });
     }).catch((error) =>{
         console.error(error);
     });
 }).catch((error) =>{
     console.log("Error en la solicitud" + error);
 });