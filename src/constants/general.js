const Paths = {
    Root: "/",
    // user
    Login: "/login",
    Register: "/register",
    Seller: "/seller",
    Account: "/account",
    Auth: "/auth",
    // product
    FAQ: "/faq"
};

const CookieId = "user_id"

// const Categories = {
//     Clothes: {
//         label: "Clothes",
//         path: Paths.Clothes,
//         id: 1,
//     },
//     Electronics: {
//         label: "Electronics",
//         path: Paths.Electronics,
//         id: 2,
//     },
//     Toys: {
//         label: "Toys",
//         path: Paths.Toys,
//         id: 3,
//     },
//     Books: {
//         label: "Books",
//         path: Paths.Books,
//         id: 4,
//     },
//     Furnitures: {
//         label: "Furnitures",
//         path: Paths.Furnitures,
//         id: 5,
//     },
// }

const SellingItems = [
    {
        product_id: 1,
        name: "Coffee Table",
        picture: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        selling_price: "12.99",
        description: "Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table",
        view: 0,
        status: 1,
        created_date: 1668469122,
        category: "Clothes",
        user_id: "43f63f17-3b7b-45a7-9e4e-52dfe3c11584",
    },
    {
        product_id: 2,
        name: "levis pants",
        picture: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80",
        selling_price: "3.22",
        description: "levis pants levis pants levis pants levis pants levis pants levis pants levis pants levis pants",
        view: 0,
        status: 1,
        created_date: 1668296322,
        category: "Clothes",
        user_id: "43f63f17-3b7b-45a7-9e4e-52dfe3c11584",
    },
    {
        product_id: 3,
        name: "acne",
        picture: "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        selling_price: "100.33",
        description: "acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product",
        view: 0,
        status: 1,
        created_date: 1668382722,
        category: "Clothes",
        user_id: "43f63f17-3b7b-45a7-9e4e-52dfe3c11584",
    },
    {
        product_id: 4,
        name: "jeans",
        picture: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        selling_price: "4.78",
        description: "jeans jeans jeans jeans jeans jeans jeans",
        view: 0,
        status: 1,
        created_date: 1668123522,
        category: "Clothes",
        user_id: "43f63f17-3b7b-45a7-9e4e-52dfe3c11584",
    },
    {
        product_id: 5,
        name: "lamp",
        picture: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        selling_price: "90.3",
        description: "lamp",
        view: 0,
        status: 1,
        created_date: 1668209922,
        category: "Clothes",
        user_id: "43f63f17-3b7b-45a7-9e4e-52dfe3c11584",
    },
    {
        product_id: 6,
        name: "Shoe Rack",
        picture: "https://images.unsplash.com/photo-1595593795628-5e32198b3ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        selling_price: "10.44",
        description: "Shoe Rack",
        view: 0,
        status: 1,
        created_date: 1668037122,
        category: "Clothes",
        user_id: "43f63f17-3b7b-45a7-9e4e-52dfe3c11584",
    },
]

export { Paths, SellingItems, CookieId };