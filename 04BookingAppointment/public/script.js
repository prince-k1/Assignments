function deleteUser(id){
    fetch('/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    }).then(() => location.reload());
}

function editUser(id){
    const name = prompt("enter new name");
    const email = prompt("enter new email");
    const phone = prompt("enter new Phone Number");
    fetch('/edit', {
        method : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id, name, email, phone})
    }).then(() => location.reload());
}