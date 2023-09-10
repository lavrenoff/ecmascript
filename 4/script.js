// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const RowTable = document.querySelector('.table');
const url = 'https://jsonplaceholder.typicode.com/users';


const getData = async (Url) => {
    const res = await fetch(Url);
    const data = await res.json();
    return data;
}

try {
    const users = await getData(url);
    console.log(users);

    users.forEach((element, index) => {
        RowTable.insertAdjacentHTML('beforeend',
            `
        <tr id="${index}">
        <td class="table_tr">${element.name}</td>
        <td class="table_tr">${element.username}</td>
        <td class="table_tr">${element.email}</td>
        <td class="table_tr">${element.phone}</td>
        <td class="table_tr">${element.website}</td>
        <td class="table_tr"><button>delete</button></td>
        </tr>    
    `);
        localStorage.setItem(`${index}`, JSON.stringify(element.name));
    });

    const btns = document.querySelectorAll('button');
    btns.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            const delrowtable = document.getElementById(index);
            delrowtable.remove();
            localStorage.removeItem(index);
        })
    });

} catch (e) {
    console.log('Что-то пошло не так!' + e);
}