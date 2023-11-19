function getProductCard(product) {
    if (!product || (typeof(product) !== 'object') || (product && Object.keys(product)?.length <= 0)) {
        return;
    }

    const discountPrice = (product?.originalPrice * (product?.discount / 100)) + product?.originalPrice;

    return `
        <div class="col-sm-6 col-md-6 col-3 centered">
            <div class="product-item pb-2 mt-2">
                    <a href="#">
                        <img src="${product.images[0].url}" alt="${product.name}">
                    </a>
                <div class="infor">${product.name}</div>
                <div class="purchase-action">
                    <div class="discount">${discountPrice}đ</div>
                    <div class="price">${product.originalPrice}đ</div> 
                </div> 
                <button class="buy-now">
                        <a href="./pages/product/product-detail.html?id=${product.id}">XEM CHI TIẾT</a> 
                </button>
            </div>
        </div>
    `;
}

function getCartItem(product) {
    // ** Check condition

    return `
        <div class="image-information-cart mt-2 d-flex">
            <div class="col-sm-6 col-md-6 col-6">
                <div class="product-image">
                    <button onclick="removeCartItem(${product.id})">
                        <i class='bx bxs-x-circle'></i>
                    </button>
                        <img src="../.${product.images[0].url}" alt="${product.name}" />
                    <p>${product.name}</p>
                </div>
            </div>
            <div class="col-sm-2 col-md-2 col-2">
                <div class="product-price">
                    <p>${product.price}đ</p>
                </div>
            </div>
            <div class="col-sm-2 col-md-2 col-2">
                <div class="product-quantity">
                    <button class="button-1" onclick="decrease()">-</button>
                    <input type="text" id="quantity" value="${product.quantity || 1}" readonly>
                    <button class="button-2" onclick="increase()">+</button>
                </div>
            </div>
            <div class="col-sm-2 col-md-2 col-2">
                <div class="product-subtotal">
                    <p>${product.price * product.quantity}đ</p>
                </div>
            </div>
        </div>
    `;
}

function getCartSubtotal() {

    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    let subtotal = 0;
    for (let i = 0; i < cart.length; ++i) {
        const cartItem = cart[i];
        const subtotalCartItem = cart[i].price * cart[i].quantity;

        subtotal += subtotalCartItem;
    }

    return `
        <div class="product-name">
            <div class="col-sm-12 col-md-12 col-12">
                <p>Cộng Giỏ Hàng</p>
            </div>
        </div>
        <div class="product-subtotal">
            <div class="col-sm-6 col-md-6 col-6">
                <div class="name">
                    <p>Tạm Tính</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-6">
                <div class="price">
                    <p>${subtotal || 0}đ</p>
                </div>
            </div>
        </div>
        <div class="shipp">
            <div class="col-sm-6 col-md-6 col-6">
                <div class="name">
                    <p>Phí Vận Chuyển</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-6">
                <div class="price">
                    <p>30.000đ</p>
                </div>
            </div>
        </div>
        <div class="total">
            <div class="col-sm-6 col-md-6 col-6">
                <div class="name">
                    <p>Tổng Tiền Thanh Toán</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-6">
                <div class="price">
                    <p>${subtotal + 30000}đ</p>
                </div>
            </div>
        </div>
    `;
}