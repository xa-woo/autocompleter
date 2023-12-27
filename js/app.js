const searchInput = document.getElementById("searchInput");

const users = [{
    name: 'Rogelio',
    age: 17,
}, {
    name: 'Camilo',
    age: 23
}, {
    name: 'Regina',
    edad: 20
}]

document.addEventListener('DOMContentLoaded', function(){
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    

    const userList = document.getElementById("userList");

    console.log(autocompleterList);

    userList.innerHTML = "";

    users.forEach(userName => {

        console.log(userName);

        userList.innerHTML += `
        <div class="list__item list__item--bordered list__item--selectable">
            ${userName}
        </div>
        `;
    });

});

searchInput.addEventListener('input', function () {

    const autocompleterList = document.getElementById("autocompleterList");

    if (!searchInput.value) {
        autocompleterList.style.display = 'none';
        return;
    }

    const value = searchInput.value;

    const foundUsers = users.filter((user) => {
        return user.name.includes(value);
    })

    autocompleterList.innerHTML = "";

    foundUsers.forEach(user => {
        autocompleterList.innerHTML += `
        <div class="list__item list__item--bordered list__item--selectable">
            ${user.name}
        </div>
        `;
    });

    autocompleterList.querySelectorAll('.list__item').forEach(listItem => {
        listItem.addEventListener('click', function (event) {

            userList = document.getElementById("userList");

            const userName = listItem.textContent;

            userList.innerHTML += `
                <div class="list__item list__item--bordered">
                    ${userName}
                </div>
            `;

            autocompleterList.style.display = 'none';
            searchInput.value = "";

            User.store(userName)
        })
    });

    autocompleterList.style.display = 'block';
});


class User {
    static store(userName) {
        const users = JSON.parse(localStorage.getItem('users') || '[]') ;

        users.push(userName);

        localStorage.setItem('users', JSON.stringify(users));
    }
}