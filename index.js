function submitData() {
    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(function(obj) {
        const id = obj.id;
        const p = document.createElement("p");
        p.innerHTML = id;
        document.querySelector("body").appendChild(p);
    })
    .catch(function(error) {
        const errorDiv = document.createElement("div");
        errorDiv.innerHTML = error.message
        document.querySelector("body").appendChild(errorDiv);
    })
}

let dataObj = {
    name: "Steve",
    email: "steve@steve.com"
};

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(dataObj)
};