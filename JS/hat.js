var product = [
    {
        id: "Hat01",
        name: "Mũ Adiadas Original",
        img: "hat1.png",
        price_sale: 2000,
        price: 1500,
    },
    {
        id: "Hat02",
        name: "Mũ Adidas Trefoil",
        img: "hat2.png",
        price_sale: 1800,
        price: 1300,
    },
    {
        id: "Hat03",
        name: "Mũ A Mcqueen Black",
        img: "hat3.png",
        price_sale: 2200,
        price: 1900,
    },
    {
        id: "Hat04",
        name: "Mũ Lacoste Men",
        img: "hat4.png",
        price_sale: 1900,
        price: 1600,
    },
    {
        id: "Hat05",
        name: "Mũ len MLB",
        img: "hat5.png",
        price_sale: 1500,
        price: 1200,
    },
    {
        id: "Hat06",
        name: "Mũ MLB Coolfield LA",
        img: "hat6.png",
        price_sale: 3000,
        price: 2500,
    },
    {
        id: "Hat07",
        name: "Mũ MLB Mono Blue",
        img: "hat7.png",
        price_sale: 2000,
        price: 2000,
    },
    {
        id: "Hat08",
        name: "Mũ MLB NY Yankees",
        img: "hat8.png",
        price_sale: 1800,
        price: 1200,
    },
    
];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('hatProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('hatProduct'));
} 

// print to html
if (localStorage.getItem("hatProduct") != null) {
    load();
}
if (localStorage.getItem("hatProduct") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<img src="../assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<h5 class="name">'+ data.name +'</h5>';
        listProduct += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listProduct += '<p class="price-sale">'+ data.price +'</p>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';
        listProduct += '</div>';

        document.getElementById("products").innerHTML += listProduct;
    }
    Save();
}
listLocal();


var countProduct = function() {
    var count = 0, i = 0;
    for(var i in product) {
        count++;
        i++;
    }
    document.getElementById("countProductHat").innerHTML = count + " sản phẩm";
}
countProduct();

// Xoá dữ liệu trên localStorage
// localStorage.clear();