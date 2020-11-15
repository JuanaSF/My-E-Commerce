export default function getProductsList() {
    return new Promise( resolve => {
        setTimeout(()=> {
            resolve(products)
        }, 2000);
    });
}

const products = `
[{
  "id": "664253892-7",
  "name": "etiam pretium iaculis",
  "price": "$1885.75",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  "stock": 209,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "908203874-9",
  "name": "sapien urna pretium nisl",
  "price": "$1185.86",
  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  "stock": 136,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "044916320-2",
  "name": "lobortis ligula sit amet",
  "price": "$504.08",
  "description": "Aliquam erat volutpat.",
  "stock": 81,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "983158360-4",
  "name": "quis odio consequat",
  "price": "$1745.33",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "stock": 53,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "967187061-9",
  "name": "sit amet",
  "price": "$4545.78",
  "description": "In sagittis dui vel nisl.",
  "stock": 70,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "634351159-8",
  "name": "luctus cum sociis natoque",
  "price": "$381.98",
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
  "stock": 152,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "962827985-8",
  "name": "amet",
  "price": "$2917.30",
  "description": "Proin interdum mauris non ligula pellentesque ultrices.",
  "stock": 107,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "219277694-2",
  "name": "felis fusce posuere felis",
  "price": "$1945.40",
  "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
  "stock": 225,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "469348544-6",
  "name": "tempus",
  "price": "$4634.05",
  "description": "Aliquam erat volutpat.",
  "stock": 5,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "517665628-0",
  "name": "venenatis turpis enim blandit",
  "price": "$2711.79",
  "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
  "stock": 165,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "057543177-6",
  "name": "porta",
  "price": "$1641.29",
  "description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
  "stock": 24,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "202271931-X",
  "name": "consequat morbi",
  "price": "$3444.87",
  "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
  "stock": 36,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "928405302-1",
  "name": "nulla neque libero convallis",
  "price": "$165.52",
  "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  "stock": 194,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "467105379-9",
  "name": "eget",
  "price": "$4241.95",
  "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "stock": 288,
  "img": "http://lorempixel.com/150/150/technics"
}, {
  "id": "632547067-2",
  "name": "mi integer ac",
  "price": "$291.86",
  "description": "Duis mattis egestas metus.",
  "stock": 32,
  "img": "http://lorempixel.com/150/150/technics"
}]
`;