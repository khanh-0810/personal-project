console.debug('main.js is working')

function initialProducts() {
    // ** Get products list container element
    const container = document.querySelector('#product-list');
    if (!container) return;

    let result = `
        <div class="col-sm-12 col-md-12 col-12">
            <div class="subheading">
                <h1>Sản Phẩm Nổi Bật</h1>
            </div>
        </div>
    `;

    // ** Get list of trending products from localStorage and parse it to javascript object
    const productsListString = localStorage.getItem(TRENDING_PRODUCTS_KEY);
    const productsList = JSON.parse(productsListString);

    // ** Loop and get product item info
    for (let i = 0; i < productsList.length; ++i) {
        const productItem = getProductCard(productsList[i]);
        if (productItem) {
            result += productItem;
        }
    }

    if (!result || (result && result?.trim()?.length <= 0)) {
        return;
    }

    // ** Render products list into view
    container.innerHTML = result;
}

function initialAppState() {
    initialProducts();
}

