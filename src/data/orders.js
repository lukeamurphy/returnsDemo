const orders = [
        {
          "order_id": "O-1000",
          "order_date": "01-02-2025",
          "customer_name": "Emma Peterson",
          "email_address": "emma.peterson84@gmail.com",
          "address": "384 Lakeside Drive\nAlbany, NY 12205",
          "items": [
            {
              "sku": "SKU-1000",
              "name": "KitchenAid Artisan Stand Mixer",
              "quantity": 1,
              "unit_price": 137.58,
              "discount_applied": 10,
              "image_url": "https://www.pexels.com/photo/white-kitchenaid-stand-mixer-159616/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1001",
          "order_date": "11-03-2025",
          "customer_name": "Marcus Dorsey",
          "email_address": "mdorsey21@yahoo.com",
          "address": "912 Elm Street\nLexington, KY 40508",
          "items": [
            {
              "sku": "SKU-1001",
              "name": "Samsung Galaxy Buds Pro",
              "quantity": 1,
              "unit_price": 59.62,
              "discount_applied": 10,
              "image_url": "https://www.pexels.com/photo/black-and-white-earphones-373701/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1002",
          "order_date": "13-03-2025",
          "customer_name": "Isabella Nguyen",
          "email_address": "isabella.nguyen@hotmail.com",
          "address": "1045 Meadowbrook Lane\nPlano, TX 75023",
          "items": [
            {
              "sku": "SKU-1002",
              "name": "Nikon D3500 DSLR Camera",
              "quantity": 1,
              "unit_price": 212.22,
              "discount_applied": 0,
              "image_url": "https://www.pexels.com/photo/black-dslr-camera-on-brown-wooden-table-274973/"
            }
          ]
        },
        {
          "order_id": "O-1003",
          "order_date": "13-03-2025",
          "customer_name": "Jonathan Myers",
          "email_address": "jon.myers@gmail.com",
          "address": "587 Park Avenue\nRochester, MN 55901",
          "items": [
            {
              "sku": "SKU-1003",
              "name": "JBL Flip 6 Bluetooth Speaker",
              "quantity": 1,
              "unit_price": 43.22,
              "discount_applied": 0,
              "image_url": "https://www.pexels.com/photo/black-portable-speaker-on-brown-wooden-table-164743/"
            }
          ],
          "is_loyalty": true
        },
        {
          "order_id": "O-1004",
          "testReason": "damaged",
          "order_date": "13-03-2025",
          "customer_name": "Lauren Matthews",
          "email_address": "lauren.matthews@outlook.com",
          "address": "223 Cherry Blossom Lane\nCharleston, SC 29407",
          "items": [
            {
              "sku": "SKU-1004",
              "name": "Dyson V11 Cordless Vacuum",
              "quantity": 1,
              "unit_price": 212.88,
              "discount_applied": 15,
              "image_url": "https://www.pexels.com/photo/white-and-black-vacuum-cleaner-38325/"
            }
          ],
          "is_loyalty": false
        }

           /*
    {
      "order_id": "O-1005",
      "customer_name": "Customer 5",
      "email_address": "customer5@example.com",
      "address": "5 Main Street\nCity 5, ST 10005",
      "items": [
        {
          "sku": "SKU-1005",
          "name": "Product 5",
          "quantity": 1,
          "unit_price": 239.91,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1006",
      "customer_name": "Customer 6",
      "email_address": "customer6@example.com",
      "address": "6 Main Street\nCity 6, ST 10006",
      "items": [
        {
          "sku": "SKU-1006",
          "name": "Product 6",
          "quantity": 1,
          "unit_price": 412.86,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1007",
      "customer_name": "Customer 7",
      "email_address": "customer7@example.com",
      "address": "7 Main Street\nCity 7, ST 10007",
      "items": [
        {
          "sku": "SKU-1007",
          "name": "Product 7",
          "quantity": 1,
          "unit_price": 311.08,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1008",
      "customer_name": "Customer 8",
      "email_address": "customer8@example.com",
      "address": "8 Main Street\nCity 8, ST 10008",
      "items": [
        {
          "sku": "SKU-1008",
          "name": "Product 8",
          "quantity": 1,
          "unit_price": 85.27,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1009",
      "customer_name": "Customer 9",
      "email_address": "customer9@example.com",
      "address": "9 Main Street\nCity 9, ST 10009",
      "items": [
        {
          "sku": "SKU-1009",
          "name": "Product 9",
          "quantity": 1,
          "unit_price": 471.99,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1010",
      "customer_name": "Customer 10",
      "email_address": "customer10@example.com",
      "address": "10 Main Street\nCity 10, ST 10010",
      "items": [
        {
          "sku": "SKU-1010",
          "name": "Product 10",
          "quantity": 1,
          "unit_price": 126.18,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    }
      */
  ];
  export default orders;