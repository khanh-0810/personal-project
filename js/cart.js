const CART_STORAGE_KEY = 'cart';

function initialCartState() {
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    let result = `
        <div class="information-cart d-flex mb-2">
            <div class="col-sm-6 col-md-6 col-6">
                <div class="product-name">
                    <p>Sản Phẩm</p>
                </div>
            </div>
            <div class="col-sm-2 col-md-2 col-2">
                <div class="product-price">
                    <p>Giá Tiền</p>
                </div>
            </div>
            <div class="col-sm-2 col-md-2 col-2">
                <div class="product-quantity">
                    <p>Số Lượng</p>
                </div>
            </div>
            <div class="col-sm-2 col-md-2 col-2">
                <div class="product-subtotal">
                    <p>Tạm Tính</p>
                </div>
            </div>
        </div>
    `;

    const container = document.querySelector('#cart-list-container');
    if (!container) return;

    for (let i = 0; i < cart.length; ++i) {
        const productItem = cart[i];
        const productItemTemplate = getCartItem(productItem);

        result += productItemTemplate;
    }

    container.innerHTML = result;

    // ** Render subtotal value
    initialCartSubtotal();
}

function initialCartSubtotal() {
    const container = document.querySelector('#cart-subtotal');
    if (!container) return;

    const result = getCartSubtotal();
    container.innerHTML = result;
}

function removeCartItem(productId) {
    // ** Check condition
    if (!productId) return;

    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    const tmp = cart.filter(item => item.id !== productId);

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(tmp));
    alert('Bạn Chắc Muốn Xóa Sản Phẩm!');

    // ** Re-render cart component
    initialCartState();
}
