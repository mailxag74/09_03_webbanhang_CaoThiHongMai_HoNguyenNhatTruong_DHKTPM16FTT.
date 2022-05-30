var product = [
    {
        id: "Shoe01",
        name: "Dép Mules",
        img: "shoe1.png",
        price_sale: 2000,
        price: 1500,
    },
    {
        id: "Shoe02",
        name: "Giày búp bê",
        img: "shoe2.png",
        price_sale: 1800,
        price: 1300,
    },
    {
        id: "Shoe03",
        name: "Giày cao gót",
        img: "shoe3.png",
        price_sale: 2200,
        price: 1900,
    },
    {
        id: "Shoe04",
        name: "Giày lười",
        img: "shoe4.png",
        price_sale: 1900,
        price: 1600,
    },
    {
        id: "Shoe05",
        name: "Sandal cao gót",
        img: "shoe5.png",
        price_sale: 1500,
        price: 1200,
    },
    {
        id: "Shoe06",
        name: "Sandal Slingback",
        img: "shoe6.png",
        price_sale: 3000,
        price: 2500,
    },
    
];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('shoeProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('shoeProduct'));
} 

// print to html
if (localStorage.getItem("shoeProduct") != null) {
    load();
}
if (localStorage.getItem("shoeProduct") == null) {
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
    document.getElementById("countProductShoe").innerHTML = count + " sản phẩm";
}
countProduct();

// Xoá dữ liệu trên localStorage
// localStorage.clear();