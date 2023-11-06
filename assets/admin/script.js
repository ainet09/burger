product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 500,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 800,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 1200,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    pizza: {
        name: "PIZZA",
        price: 100000,
        amount: 0,
        kkal: 4520,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    hotDog: {
        name: "HOT DOG",
        price: 10000,
        amount: 0,
        kkal: 700,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    chicken: {
        name: "Chicken",
        price: 20000,
        amount: 0,
        kkal: 3250,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function () {
        count(this)
    })

}
function count(el) {
    let parent = el.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        attribute = el.getAttribute('data-symbol')

    if (attribute == '+' && product[parentId].amount < 30) {
        product[parentId].amount++
    } else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kkal.innerHTML = product[parentId].kkalSumm
}


const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out')

addCart.addEventListener('click', () => {
    receipt.style = `display:flex`;
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '15%'
    }, 500);

    const productList = Object.values(product).filter(number => number.amount)

    let total = ""
    let totalSumm = 0
    let totalKkal = 0
    for (let i = 0; i < productList.length; i++) {

        if (productList[i].amount > 0) {
            total += `
                <div class="product">
                    <span>${i + 1}</span>
                    <div class="product__name">${productList[i].name}</div>
                    <div class="product__amount">${productList[i].amount} x ${productList[i].price} = </div>
                    <div class="product__price">${productList[i].Summ} Sum</div>
                </div>`
            totalSumm += productList[i].Summ
            totalKkal += productList[i].kkalSumm

        }
    }
    receiptWindowOut.innerHTML = total +
        `<h2 class="total">Total Summ: ${totalSumm}</h2>` +
        `<h2 class="total">Total Kkal: ${totalKkal}</h2>`
})

const headerTimer = document.querySelector('.header__timer'),
    timeExtra = document.querySelector('.header__timer-extra');

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return `rgb(${r},${g},${b})`
}
function rec() {
    if (timeExtra.innerHTML < 70) {
        timeExtra.innerHTML++
        headerTimer.style.color = color()
        setTimeout(() => {
            rec()
        }, 50);
    } else if (timeExtra.innerHTML < 100) {
        timeExtra.innerHTML++
        headerTimer.style.color = color()
        setTimeout(() => {
            rec()
        }, 100);
    }
}
rec()


const mainProductInfo = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    viewClose = document.querySelector('.view__close'),
    viewImg = document.querySelector('.view img');

mainProductInfo.forEach(el => {
    el.addEventListener('dblclick', () => {
        view.classList.add('active')
        let img = el.querySelector('.main__product-img'),
            imgAtt = img.getAttribute('src')
        viewImg.setAttribute('src', imgAtt)
    })
});

viewClose.addEventListener('click', () => {
    view.classList.remove('active')
})

const pay = document.querySelector('.receipt__window-btn');
pay.addEventListener('click',()=>{
    document.location.reload()
})