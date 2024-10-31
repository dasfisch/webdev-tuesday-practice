function printNamesToScreen(users) {
    for (let i = 0; i < users.length; i++) {
        printSingleUserToScreen(users[i]);
    }
}

function printSingleUserToScreen(newUser) {
    const listUsers = document.getElementById('list-users');

    const li = document.createElement('li');
    const p = document.createElement('p');

    p.innerText = `${ newUser.name } - ${ newUser.email }`;

    li.innerHTML += `<p>${ newUser.name } - ${ newUser.email }</p>`;

    listUsers.append(li);
}

export {
    printNamesToScreen,
    printSingleUserToScreen
};
