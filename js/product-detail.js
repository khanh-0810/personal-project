function initialState() {
    const url = window.location.href;
    const params = url.split('?');
    const productIdParams = params.pop();

    const id = productIdParams.split('=').pop();

    let product;
    const productsList = JSON.parse(localStorage.getItem(TRENDING_PRODUCTS_KEY));
    for (let i = 0; i < productsList.length; ++i) {

        if (productsList[i].id === Number(id)) {
            product = productsList[i];
        }
    }

    const container = document.querySelector('#product-detail');
    if (!container) return;

    const productHTML = getProductDetail(product);

    container.innerHTML = productHTML;

    // Thời gian kết thúc của flash sale (đặt theo định dạng timestamp)
    const saleEndTime = new Date('December 25, 2023 23:59:59').getTime();

    // Cập nhật thời gian còn lại mỗi giây
    const updateTimer = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = saleEndTime - now;

    if (timeLeft > 0) {
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerText = `${hours} giờ ${minutes} phút ${seconds} giây`;
        
    } else {
        clearInterval(updateTimer);
        document.getElementById('timer').innerText = "Đã kết thúc";
        document.getElementById('flashSale').innerHTML += "<p>Flash sale đã kết thúc!</p>";
    }
    }, 1000);

}

// ** select
function decrease() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);

    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
}

function increase() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
}

const images = [
    '../../assets/img/sp2.png',
    '../../assets/img/sp3.png',
    '../../assets/img/sp5.png',
];

function selectImageUrlByIndex(index) {
    if ((!index && index !== 0) || (typeof index !== 'number') || (index < 0) || index > images?.length) {
        return null;
    }

    const imageUrl = images[index];

    const imageElm = document.querySelector('#product-thumbnail');
    if (!imageElm) return;

    imageElm.src = imageUrl;
}


function getProductDetail(product) {
    // ** Check condition
    if (!product) return;

    let defaultImageUrl = `../.${product.images[0].url}`;

    return `
        <div class="row">
            <div class="col-sm-12 col-md-12 col-12">
                <div class="name-product">
                    <h1>${product.name}</h1>
                </div>
            </div>
        </div>

        <div class="row no-gutter mt-2">
            <div class="col-sm-12 col-md-4 col-4">
                <div class="row h-unset p-1">
                    <div class="col-sm-12 col-md-12 col-12 mt-1">
                        <div class="image-wrapper">
                            <img id="product-thumbnail" src="${defaultImageUrl}" alt="${product.name}">
                        </div>
                    </div>
                </div>
                <div class="row h-unset mt-2">
                    <div class="col-sm-3 col-md-3 col-3">
                        <div class="small-image-wrapper" onClick="selectImageUrlByIndex(${0})">
                            <img src="../../assets/img/sp2.png" alt="">
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-3 col-3">
                        <div class="small-image-wrapper" onClick="selectImageUrlByIndex(${1})">
                            <img src="../../assets/img/sp3.png" alt="">
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-3 col-3">
                        <div class="small-image-wrapper" onClick="selectImageUrlByIndex(${2})">
                            <img src="../../assets/img/sp5.png" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="row mt-2 h-unset">
                    <div class="col-sm-12 col-md-12 col-12">
                        <div class="introduce">
                            <p>
                                Tổ Yến Quốc Việt được sản xuất thủ công luôn đảm bảo 100%
                                TỔ YẾN NGUYÊN CHẤT và KHÔNG PHA, TẨM ĐƯỜNG.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 col-4 mb-2">
                <div class="row h-unset">
                    <div class="col-sm-12 col-md-12 col-12">
                        <div class="row mt-3 p-1">
                            <div class="col-sm-12 col-md-12 col-12">
                                <div class="purchase-action">
                                    <div class="discount">${product.price}đ</div>
                                    <div class="price">${product.originalPrice}đ</div> 
                                </div>
                                <div id="flashSale">
                                    <h2>Flash Sale</h2>
                                    <p id="saleTimer"><span id="timer"></span></p>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-12">
                                <div class="sale">Giảm 19%</div>
                            </div>
                            <div class="col-sm-12 col-md-12 sol-12 centered ">
                                <div class="col-sm-4 col-md-4 col-4">
                                    <div class="select">
                                        <button class="button-1" onclick="decrease()">-</button>
                                        <input type="text" id="quantity" value="${product.quantity || 1}"readonly>
                                        <button class="button-2" onclick="increase()">+</button>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4 col-4 m-1">
                                    <button class="buy-now centered">Mua ngay</button> 
                                </div>
                                <div class="col-sm-4 col-md-4 col-4 m-1">
                                    <button onclick="addToCart(${product.id})" class="buy-now-2 centered"><i class='bx bxs-cart-download'></i></button> 
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-12">
                                <div class="introductory-title">
                                    <i class='bx bxl-venmo'></i>
                                    <h2>Yến Sào Quốc Việt</h2>
                                </div>
                                <div class="promotion">
                                    <ul>
                                        <li> <i class='bx bx-check'></i> Giao hàng miễn phí toàn quốc với đơn hàng từ 1.000.000đ</li>
                                        <li> <i class='bx bx-check'></i> Nhận ngay siêu tốc trong thị trấn Gành Hào</li>
                                        <li> <i class='bx bx-check'></i> Sản phẩm chính hãng, không pha trộn, tẩm đường..</li>
                                        <li> <i class='bx bx-check'></i> Kèm theo đường phèn hữu cơ cùng bộ hộp và túi giấy sang trọng.</li>
                                        <li> <i class='bx bx-check'></i> Bồi hoàn 100% nếu sản phẩm không như cam kết.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 col-4">
                <div class="row h-unset mt-1 p-1">
                    <div class="col-sm-12 col-md-12 col-12">
                        <div class="row h-unset f-column">
                            <div class="col-sm-12 col-md-12 col-12">
                                <div class="detail-information">
                                    <h2>THÔNG TINH CHI TIẾT</h2>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 co-12">
                                <div class="detail">
                                    <div class="col-sm-3 col-md-2 col-2">
                                        <strong>Loại :</strong>
                                    </div>
                                    <div class="col-sm-9 col-md-10 col-10">
                                        <p>Bạch Yến</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 co-12">
                                <div class="detail">
                                    <div class="col-sm-3 col-md-2 col-2">
                                        <strong>Mùi :</strong>
                                    </div>
                                    <div class="col-sm-9 col-md-10 col-10">
                                        <p>Tanh Nhẹ Đặt Đặt Trương Mù Biển</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 co-12">
                                <div class="detail">
                                    <div class="col-sm-3 col-md-2 col-2">
                                        <strong>Bộ Sản Phẩm  :</strong>
                                    </div>
                                    <div class="col-sm-9 col-md-10 col-10">
                                        <ul>
                                            <li>100gr Bạch Yến Tinh Chế</li>
                                            <li>1 Hộp Đường Phèn</li>
                                            <li>1 Bộ Hộp Và Túi Giấy Riêng Sang Trọng</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 co-12">
                                <div class="detail">
                                    <div class="col-sm-3 col-md-2 col-2">
                                        <strong>Đăt Chưng :</strong>
                                    </div>
                                    <div class="col-sm-9 col-md-10 col-10">
                                        <ul>
                                            <li>Được Làm Sạch Lông, Có Màu Trăng ánh Kim</li>
                                            <li>1 Hộp Đường Phèn</li>
                                            <li>1 Bộ Hộp Và Túi Giấy Riêng Sang Trọng</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function addToCart(productId) {
    // ** Check condition
    if (!productId) return;
    /**
     * B1: Khai bao 1 bien de nhan du lieu
     * B2: Lay danh san pham hien co trong localStorage
     * B3: Lap qua danh sach san pham tim san pham co id bang voi productId
     * B4: Gan san pham tim duoc cho bien o buoc 1
     **/
    let product;
    const productsList = JSON.parse(localStorage.getItem(TRENDING_PRODUCTS_KEY));
    for (let i = 0; i < productsList?.length; ++i) {
        if (productsList[i].id === productId) {
            product = productsList[i];
        }
    }

    const productsCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    let result = productsCart;

    const quantityElm = document.querySelector('#quantity');
    let quantity = 1;
    if (quantityElm) {
        quantity = quantityElm?.value || 1;
    }

    const isExisting = productsCart.findIndex(item => item.id === productId);
    if (isExisting > -1) {
    result = productsCart.map(item => {
        if (item.id === productId) {
            item.quantity = (item.quantity || 0) + (quantity || 1);
        }

        return item;
    });
    } else {
        product.quantity = quantity || 1;
        result.push(product);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(result));
    alert('Bạn Đã Thêm Sản Phẩm Vào Giỏ hàng!');
}
