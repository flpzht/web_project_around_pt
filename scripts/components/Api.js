// fetch("https://around-api.pt-br.tripleten-services.com/v1/users/me", {
//   method: "GET",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch("https://around-api.pt-br.tripleten-services.com/v1/cards", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch("https://around-api.pt-br.tripleten-services.com/v1/users/me", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
//   body: JSON.stringify({
//     name: "Jacques Cousteau",
//     about: "Explorador",
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch("https://around-api.pt-br.tripleten-services.com/v1/cards", {
//   method: "POST",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(
//     {
//       name: "Vale de Yosemite",
//       link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//     }
//   ),
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch(`https://around-api.pt-br.tripleten-services.com/v1/cards/${card._id}`, {
//   method: "DELETE",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch(`https://around-api.pt-br.tripleten-services.com/v1/cards/${card._id}/likes`, {
//   method: "POST",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   })

//   fetch(`https://around-api.pt-br.tripleten-services.com/v1/cards/${card._id}/likes`, {
//   method: "DELETE",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   })
