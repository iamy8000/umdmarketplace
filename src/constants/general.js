const Paths = {
    Root: "/",
    // user
    Login: "/login",
    Register: "/register",
    Seller: "/seller",
    Account: "/account",
    // product
    Clothes: "/clothes",
    Electronics: "/electronics",
    Toys: "/toys",
    Books: "/books",
    Furnitures: "/furnitures",
    FAQ: "/faq"
};

const Categories = {
    Clothes: {
        label: "Clothes",
        path: Paths.Clothes,
    },
    Electronics: {
        label: "Electronics",
        path: Paths.Electronics,
    },
    Toys: {
        label: "Toys",
        path: Paths.Toys,
    },
    Books: {
        label: "Books",
        path: Paths.Books,
    },
    Furnitures: {
        label: "Furnitures",
        path: Paths.Furnitures,
    },
}

const SellingItems = [
    {
        name: "Coffee Table",
        picture: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        sold_price: "12.99",
        description: "Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table Coffee Table",
        view: 0,
        available: "",
        created_date: 1668469122,
    },
    {
        name: "levis pants",
        picture: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80",
        sold_price: "3.22",
        description: "levis pants levis pants levis pants levis pants levis pants levis pants levis pants levis pants",
        view: 0,
        available: "",
        created_date: 1668296322,
    },
    {
        name: "acne",
        picture: "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        sold_price: "100.33",
        description: "acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product acne product",
        view: 0,
        available: "",
        created_date: 1668382722,
    },
    {
        name: "jeans",
        picture: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        sold_price: "4.78",
        description: "jeans jeans jeans jeans jeans jeans jeans",
        view: 0,
        available: "",
        created_date: 1668123522,
    },
    {
        name: "lamp",
        picture: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        sold_price: "90.3",
        description: "lamp",
        view: 0,
        available: "",
        created_date: 1668209922,
    },
    {
        name: "Shoe Rack",
        picture: "https://images.unsplash.com/photo-1595593795628-5e32198b3ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        sold_price: "10.44",
        description: "Shoe Rack",
        view: 0,
        available: "",
        created_date: 1668037122,
    },
    // {
    //     name: "",
    //     picture: "",
    //     sold_price: "",
    //     description: "",
    //     view: "",
    //     available: "",
    //     created_date:"",
    // },
]

export { Paths, Categories, SellingItems };