
const selectorCheck = document.querySelector(".form__select");
const result = document.querySelector(".form__result");
const form = document.querySelector(".form");
let array = []
form.addEventListener("change", (event) => {
    event.preventDefault();


    let selectorCheckValue = selectorCheck.value;

    result.innerHTML = `${selectorCheckValue}`;
});


// o'lcham kod
document.getElementById("check11").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("textt")
    let uzbgar = p.textContent.replace("", "25 cm ")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
});

document.getElementById("check12").addEventListener("change", () => {

    let resultss = document.querySelector(".check__result")
    console.log("ishladi")
    let poragraff = document.createElement("p")
    poragraff.appendChild(document.createTextNode("30 cm"))
    resultss.appendChild(poragraff)
    console.log(poragraff)
})
document.getElementById("check13").addEventListener("change", () => {

    let resultss = document.querySelector(".check__result")
    console.log("ishladi")
    let poragraff = document.createElement("p")
    poragraff.appendChild(document.createTextNode("35 cm"))
    resultss.appendChild(poragraff)
    console.log(poragraff)
})



// ustgi cod //


document.getElementById("check").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    poragraf.appendChild(document.createTextNode("pomidor"))
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check1").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    poragraf.appendChild(document.createTextNode("Kurka go'shti"))
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check2").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    poragraf.appendChild(document.createTextNode("Zaytun"))
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check3").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    poragraf.appendChild(document.createTextNode("Tuzlangan bodiring"))
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("check4").addEventListener("change", () => {
    let results = document.querySelector(".text-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    poragraf.appendChild(document.createTextNode("Qo'ziqorin"))
    results.appendChild(poragraf)
    console.log(poragraf)
})
document.getElementById("boxcheck").addEventListener("change", () => {
    let results = document.querySelector(".ceck-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("puol")
    let uzbgar = p.textContent.replace("", "Achichiq ")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
});

document.getElementById("boxcheck1").addEventListener("change", () => {
    let results = document.querySelector(".ceck-result")
    console.log("ishladi")
    let poragraf = document.createElement("p")
    let p = document.getElementById("puol1")
    let uzbgar = p.textContent.replace("", "Sosiskali")
    p.innerHTML = uzbgar
    results.appendChild(poragraf)
    console.log(poragraf)
});

function usha() {

    let check5 = document.getElementById("check5")
    check5.addEventListener("change", () => {
        console.log('ishladi')
        let results = document.querySelector(".text-result")
        console.log("ishladi")
        let p = document.getElementById("prrr")
        let uzbgar = p.textContent.replace("Masalliqlar", "Qazi")
        p.innerHTML = uzbgar
        console.log(p)
        array.push("Qazi")
        array.push("llll")
    })

    if (array.length === 0) {
        let btn = document.getElementById("shop")
        btn.onclick = (e) => {
            e.preventDefault()
            let div = document.createElement("div")
            div.className = 'diven'
            div.style.width = '700px'
            div.style.height = '70vh'
            div.style.background = 'linear-gradient(rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.7))'
            div.style.textAlign = 'center'
            document.body.appendChild(div)
            let h1 = document.createElement("h1")
            h1.appendChild(document.createTextNode("Buyurtma qabul qilindi"))
            div.appendChild(h1)
            h1.style.color = "#FFF"
            let img = document.createElement("img")
            img.src = './images/ptichka.webp'
            div.appendChild(img)
            img.style.width = '50%'
            img.style.margin = '0 auto'
            let btn = document.createElement("button")
            btn.id = 'messi'
            btn.appendChild(document.createTextNode("X"))
            div.appendChild(btn)
            div.addEventListener("click", () => {
                div.remove()
            })
        }
    }
}
usha()


