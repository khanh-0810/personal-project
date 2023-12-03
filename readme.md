## Data Flow


### Bước 1:

* Khởi tạo danh sách sản phẩm (trendingProducts)
* Lưu danh sách sản phẩm vào localStorage

### Bước 2: 

* Lấy danh sách sản phẩm từ localStorage 
* Hiển thị ra trang chủ 

### Bước 3: Mua hàng

* Chọn sản phẩm theo id (product id)
* Tìm sản phẩm đã chọn theo id trong danh sách tất cả các sản phẩm (trendingProducts)

```
- Nếu không tìm thấy, tức là không có sản phẩm để bán, thì dừng lại
- Nếu tìm thấy sản phẩm có tồn tại trong danh sách sản phẩm (tredingProducts) thì làm tiếp các bước tiếp theo
```

### Bước 4:

* Lấy danh sách sản phẩm hiện có trong giỏ hàng (cart)
* Tìm sản phẩm vừa chọn trong giỏ hàng

```
- Nếu tìm thấy sản phẩm vừa chọn đã tồn tại trong giỏ hàng, thì tiến hành tăng số lượng sản phẩm đó (trong giỏ hàng) lên
- Nếu không tìm thấy sản phẩm vừa chọn trong giỏ hàng, thì tiến hành bỏ sản phẩm vừa chọn đó vào giỏ hàng
```

