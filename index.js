let dataObj = {
    name: "Steve",
    email: "steve@steve.com"
}

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(dataObj)
}

function submitData(name, email) {
    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(data => document.body.innerHTML = data["id"])
    .catch(function (error) {
        alert("Unauthorized Access")
        document.body.innerHTML = error.message
    })
}