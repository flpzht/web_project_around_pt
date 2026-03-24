fetch("https://around-api.pt-br.tripleten-services.com/v1/", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61"
  }
})
  .then(res => { 
    if (res.ok) { 
        return res.json();
    }
    return Promise.reject(`Error: ${res.status} ${res.statusText}`);
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));