let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc:
// Tên - Giá - Thương Hiệu - Số lượng
console.log("Danh sách sản phẩm trong giỏ hàng:");
products.forEach(product => {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
let totalPrice = products.reduce((sum, product) => sum + (product.price * product.count), 0);
console.log(`Tổng tiền tất cả sản phẩm trong giỏ hàng: ${totalPrice} VND`);

// 3. Tìm các sản phẩm của thương hiệu "Apple"
let appleProducts = products.filter(product => product.brand === "Apple");
console.log("Sản phẩm của Apple:", appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
let expensiveProducts = products.filter(product => product.price > 20000000);
console.log("Sản phẩm có giá trên 20 triệu:", expensiveProducts);

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let proProducts = products.filter(product => product.name.toLowerCase().includes("pro"));
console.log('Sản phẩm có chữ "pro" trong tên:', proProducts);

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = { name: "Vivo X80 Pro", price: 23000000, brand: "Vivo", count: 2 };
products.push(newProduct);
console.log("Giỏ hàng sau khi thêm sản phẩm mới:", products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(product => product.brand !== "Samsung");
console.log("Giỏ hàng sau khi xóa sản phẩm Samsung:", products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log("Giỏ hàng sắp xếp theo giá tăng dần:", products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count - a.count);
console.log("Giỏ hàng sắp xếp theo số lượng giảm dần:", products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);
console.log("Hai sản phẩm ngẫu nhiên trong giỏ hàng:", randomProducts);
