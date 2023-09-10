// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url = 'https://dog.ceo/api/breeds/image/random';

const box = document.querySelector('.img');

const getData1 = async (Url) => {
    const res = await fetch(Url);
    const data = await res.json();
    return data;
}

async function Data() {
    const data = await getData1(url);
    console.log(data.message);
    box.innerHTML = `<img src="${data.message}" alt=""></img>`;
}

function ShowImg(count) {
    if (count < 10) {
        setTimeout(() => {
            Data();
            count++;
            ShowImg(count);
        }, 3000);
    }

}

ShowImg(0);
