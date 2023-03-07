/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

// */
// const database = {
//     employees: [{
//         id: 1,
//         name: "Alphonse Meron",
//         email: "ameron0@mashable.com",
//         hourlyRate: 11.50,
//         sold: 10000000
        
//     }, {
//         id: 2,
//         name: "Damara Pentecust",
//         email: "dpentecust1@apache.org",
//         hourlyRate: 12,
//         sold: 7
        
//     }, {
//         id: 3,
//         name: "Anna Bowton",
//         email: "abowton2@wisc.edu",
//         hourlyRate:11,
//         sold: 212
        
//     }, {
//         id: 4,
//         name: "Hunfredo Drynan",
//         email: "hdrynan3@bizjournals.com",
//         hourlyRate:10,
//         sold: 8
        
//     }, {
//         id: 5,
//         name: "Elmira Bick",
//         email: "ebick4@biblegateway.com",
//         hourlyRate: 7,
//         sold: 1
        
//     }, {
//         id: 6,
//         name: "Bernie Dreger",
//         email: "bdreger5@zimbio.com",
//         hourlyRate: 12,
//         sold: 9
        
//     }, {
//         id: 7,
//         name: "Rolando Gault",
//         email: "rgault6@google.com",
//         hourlyRate: 8,
//         sold: 0
        
//     }, {
//         id: 8,
//         name: "Tiffanie Tubby",
//         email: "ttubby7@intel.com",
//         hourlyRate:11,
//         sold: 1
        
//     }, {
//         id: 9,
//         name: "Tomlin Cutill",
//         email: "tcutill8@marketwatch.com",
//         hourlyRate:2,
//         sold: 12
        
//     }, {
//         id: 10,
//         name: "Arv Biddle",
//         email: "abiddle9@cafepress.com",
//         hourlyRate:6,
//         sold: 13
        
//     }],
//     products: [{
//         id: 1, name: "Large Coffee", price: 6.00
//     }, {
//         id: 2, name: "Latte", price: 8.99
//     }, {
//         id: 3, name: "Blueberry Muffin", price: 9.49
//     }, {
//         id: 4, name: "Scone", price: 7.56
//     }, {
//         id: 5, name: "Bran Muffin", price: 9.10
//     }, {
//         id: 6, name: "Mocha Latte", price: 12.99
//     }, {
//         id: 7, name: "Espresso", price: 11.80
//     }, {
//         id: 8, name: "Americano", price: 11.00
//     }, {
//         id: 9, name: "Cubano", price: 14.99
//     }, {
//         id: 10, name: "Cappucino", price: 12.49
//     }],
//     orders: [{
//         id: 1, productId: 10, employeeId: 5, timestamp: 1613538111396
//     }, {
//         id: 2, productId: 5, employeeId: 1, timestamp: 1613038102396
//     }, {
//         id: 3, productId: 2, employeeId: 7, timestamp: 1612837112396
//     }, {
//         id: 4, productId: 8, employeeId: 5, timestamp: 1612836112396
//     }, {
//         id: 5, productId: 9, employeeId: 7, timestamp: 1612735112396
//     }, {
//         id: 6, productId: 4, employeeId: 1, timestamp: 1614528112396
//     }, {
//         id: 7, productId: 5, employeeId: 8, timestamp: 1614598112396
//     }, {
//         id: 8, productId: 2, employeeId: 9, timestamp: 1614630112396
//     }, {
//         id: 9, productId: 3, employeeId: 2, timestamp: 1612538112396
//     }, {
//         id: 10, productId: 9, employeeId: 6, timestamp: 1612438112396
//     }, {
//         id: 11, productId: 4, employeeId: 1, timestamp: 1612338112396
//     }, {
//         id: 12, productId: 6, employeeId: 10, timestamp: 1612238112396
//     }, {
//         id: 13, productId: 10, employeeId: 8, timestamp: 1630538112396
//     }, {
//         id: 14, productId: 9, employeeId: 9, timestamp: 1612738112396
//     }, {
//         id: 15, productId: 3, employeeId: 3, timestamp: 1612938112396
//     }, {
//         id: 16, productId: 4, employeeId: 7, timestamp: 1612638112396
//     }, {
//         id: 17, productId: 4, employeeId: 10, timestamp: 1612638112396
//     }]
// }

// export const getProducts = () => {
//     return database.products.map(product => ({...product}))
// }

// export const getEmployees = () => {
//     return database.employees.map(employee => ({...employee}))
// }

// export const getOrders = () => {
//     return database.orders.map(order => ({...order}))
// }

const database = {
    employees: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        hourlyRate: 11.50,
        sold: 4
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        hourlyRate: 10.75,
        sold: 5
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        hourlyRate: 12.30,
        sold: 6
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        hourlyRate: 12.00,
        sold: 9
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        hourlyRate: 12.30,
        sold: 494
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        hourlyRate: 11.50,
        sold: 33
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        hourlyRate: 11.80,
        sold: 44
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        hourlyRate: 21.00,
        sold: 34
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        hourlyRate: 12.10,
        sold: 3455
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        hourlyRate: 13.00,
        sold: 355
    }],
    products: [{
        id: 1, name: "Large Coffee", price: 6.00
    }, {
        id: 2, name: "Latte", price: 8.99
    }, {
        id: 3, name: "Blueberry Muffin", price: 9.49
    }, {
        id: 4, name: "Scone", price: 7.56
    }, {
        id: 5, name: "Bran Muffin", price: 9.10
    }, {
        id: 6, name: "Mocha Latte", price: 12.99
    }, {
        id: 7, name: "Espresso", price: 11.80
    }, {
        id: 8, name: "Americano", price: 11.00
    }, {
        id: 9, name: "Cubano", price: 14.99
    }, {
        id: 10, name: "Cappucino", price: 12.49
    }],
    orders: [{
        id: 1, productId: 10, employeeId: 5, timestamp: 1613538111396
    }, {
        id: 2, productId: 5, employeeId: 1, timestamp: 1613038102396
    }, {
        id: 3, productId: 2, employeeId: 7, timestamp: 1612837112396
    }, {
        id: 4, productId: 8, employeeId: 5, timestamp: 1612836112396
    }, {
        id: 5, productId: 9, employeeId: 7, timestamp: 1612735112396
    }, {
        id: 6, productId: 4, employeeId: 1, timestamp: 1614528112396
    }, {
        id: 7, productId: 5, employeeId: 8, timestamp: 1614598112396
    }, {
        id: 8, productId: 2, employeeId: 9, timestamp: 1614630112396
    }, {
        id: 9, productId: 3, employeeId: 2, timestamp: 1612538112396
    }, {
        id: 10, productId: 9, employeeId: 6, timestamp: 1612438112396
    }, {
        id: 11, productId: 4, employeeId: 1, timestamp: 1612338112396
    }, {
        id: 12, productId: 6, employeeId: 10, timestamp: 1612238112396
    }, {
        id: 13, productId: 10, employeeId: 8, timestamp: 1630538112396
    }, {
        id: 14, productId: 9, employeeId: 9, timestamp: 1612738112396
    }, {
        id: 15, productId: 3, employeeId: 3, timestamp: 1612938112396
    }, {
        id: 16, productId: 4, employeeId: 7, timestamp: 1612638112396
    }, {
        id: 17, productId: 4, employeeId: 10, timestamp: 1612638112396
    }]
}
export const getProducts = () => {
    return database.products.map(product => ({...product}))
}
export const getEmployees = () => {
    return database.employees.map(employee => ({...employee}))
}
export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}