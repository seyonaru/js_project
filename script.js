const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".search-box input")
const cardWrapper = document.querySelector(".content-main_list")

const cardArray = [
    {
        id: 0,
        title: 'Первый материал 2й сорт' ,
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
     {
        id: 1,
        title: 'Второй материал 2й сорт' ,
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 2,
        title: 'Третий материал 2й сорт' ,
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 3,
        title: 'Четвертый материал 2й сорт' ,
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 4,
        title: 'Пятый материал 2й сорт' ,
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 5,
        title: 'Шестой материал 2й сорт' ,
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    }
]

const render = (cardArray) => {
    cardWrapper.innerHTML = ''

    cardArray.forEach( (item, index) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main_list-item">
                <div class="content-main_list-item-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main_list-item-title">
                    ${item.title}
                </h5>
                <strong class="content-main_list-item-price">
                    ${item.price}
                </strong>
                <div class="content-main_list-item-desc-box">
                    <span class="content-main_list-item-desc">
                        ${item.address}
                    </span>
                    <span class="content-main_list-item-desc">
                        ${item.date}
                    </span>
                </div>
            </a>
            `)
    })
} 

const filteredArray = (array, value) => {
    return array.filter(() => {
        return item.title.includes(value) || item.price.includes(value)
    })
}
cardWrapper.style.justifyContent = 'flex-start'
//cardWrapper.style.rowGap = 'normal'
cardWrapper.style.gap = '30px'

render(cardArray)
searchBtn.addEventListener('click', () =>{
    render(filteredArray(cardArray, searchInput.value))
})

