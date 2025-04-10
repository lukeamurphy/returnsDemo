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
          "order_date": "18-03-2025",
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
        },
        {
          "order_id": "O-1005",
          "testReason": "No Longer wanted",
          "order_date": "02-04-2025",
          "customer_name": "Bob Randal",
          "email_address": "lauren.matthews@outlook.com",
          "address": "223 Cherry Blossom Lane\nCharleston, SC 29407",
          "items": [
            {
              "sku": "SKU-1005",
              "name": "Apple Iphone 16 Pro Max",
              "quantity": 1,
              "unit_price": 400.88,
              "discount_applied": 15,
              "image_url": "https://www.pexels.com/photo/white-and-black-vacuum-cleaner-38325/"
            }
          ],
          "is_loyalty": false
        },
        {
          "order_id": "O-1011",
          "order_date": "09-03-2025",
          "customer_name": "Alice Johnson",
          "email_address": "alice.johnson@example.com",
          "address": "101 Maple Street\nSpringfield, IL 62701",
          "items": [
            {
              "sku": "SKU-1011",
              "name": "Bose QuietComfort 35 II",
              "quantity": 1,
              "unit_price": 299.99,
              "discount_applied": 5,
              "image_url": "https://www.pexels.com/photo/headphones-1011/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1012",
          "order_date": "09-03-2025",
          "customer_name": "David Smith",
          "email_address": "david.smith@example.com",
          "address": "202 Oak Avenue\nMadison, WI 53703",
          "items": [
            {
              "sku": "SKU-1012",
              "name": "Sony WH-1000XM4 Noise Cancelling Headphones",
              "quantity": 1,
              "unit_price": 348.00,
              "discount_applied": 8,
              "image_url": "https://www.pexels.com/photo/headphones-1012/"
            }
          ],
          "is_vip": true
        },
        {
          "order_id": "O-1013",
          "order_date": "09-03-2025",
          "customer_name": "Olivia Brown",
          "email_address": "olivia.brown@example.com",
          "address": "303 Pine Road\nAustin, TX 78701",
          "items": [
            {
              "sku": "SKU-1013",
              "name": "Apple AirPods Pro",
              "quantity": 1,
              "unit_price": 249.00,
              "discount_applied": 0,
              "image_url": "https://www.pexels.com/photo/airpods-1013/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1014",
          "order_date": "09-03-2025",
          "customer_name": "Michael Turner",
          "email_address": "m.turner@example.com",
          "address": "404 Cedar Street\nDenver, CO 80203",
          "items": [
            {
              "sku": "SKU-1014",
              "name": "Google Pixel 6 Pro",
              "quantity": 1,
              "unit_price": 899.00,
              "discount_applied": 12,
              "image_url": "https://www.pexels.com/photo/google-pixel-6-pro-1014/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1015",
          "order_date": "09-03-2025",
          "customer_name": "Sophia Martinez",
          "email_address": "s.martinez@example.com",
          "address": "505 Birch Boulevard\nSan Diego, CA 92101",
          "items": [
            {
              "sku": "SKU-1015",
              "name": "Microsoft Surface Pro 8",
              "quantity": 1,
              "unit_price": 999.00,
              "discount_applied": 10,
              "image_url": "https://www.pexels.com/photo/surface-pro-1015/"
            }
          ],
          "is_vip": true
        },
        {
          "order_id": "O-1016",
          "order_date": "09-03-2025",
          "customer_name": "Ethan Walker",
          "email_address": "ethan.walker@example.com",
          "address": "606 Aspen Lane\nPortland, OR 97201",
          "items": [
            {
              "sku": "SKU-1016",
              "name": "Canon EOS Rebel T7 DSLR Camera",
              "quantity": 1,
              "unit_price": 449.99,
              "discount_applied": 5,
              "image_url": "https://www.pexels.com/photo/canon-eos-1016/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1017",
          "order_date": "09-03-2025",
          "customer_name": "Ava Rodriguez",
          "email_address": "ava.rodriguez@example.com",
          "address": "707 Walnut Street\nOrlando, FL 32801",
          "items": [
            {
              "sku": "SKU-1017",
              "name": "HP Spectre x360",
              "quantity": 1,
              "unit_price": 1299.00,
              "discount_applied": 15,
              "image_url": "https://www.pexels.com/photo/hp-spectre-1017/"
            }
          ],
          "is_vip": true
        },
        {
          "order_id": "O-1018",
          "order_date": "09-03-2025",
          "customer_name": "William Chen",
          "email_address": "william.chen@example.com",
          "address": "808 Elm Court\nSan Jose, CA 95112",
          "items": [
            {
              "sku": "SKU-1018",
              "name": "Dell XPS 13",
              "quantity": 1,
              "unit_price": 999.99,
              "discount_applied": 7,
              "image_url": "https://www.pexels.com/photo/dell-xps-1018/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1019",
          "order_date": "09-03-2025",
          "customer_name": "Mia Patel",
          "email_address": "mia.patel@example.com",
          "address": "909 Oak Terrace\nHouston, TX 77002",
          "items": [
            {
              "sku": "SKU-1019",
              "name": "Logitech MX Master 3 Mouse",
              "quantity": 1,
              "unit_price": 99.99,
              "discount_applied": 0,
              "image_url": "https://www.pexels.com/photo/logitech-mx-master-1019/"
            }
          ],
          "is_vip": false
        },
        {
          "order_id": "O-1020",
          "order_date": "09-03-2025",
          "customer_name": "Lucas Green",
          "email_address": "lucas.green@example.com",
          "address": "1010 Pine Crest Drive\nSeattle, WA 98101",
          "items": [
            {
              "sku": "SKU-1020",
              "name": "Samsung 55\" QLED TV",
              "quantity": 1,
              "unit_price": 699.99,
              "discount_applied": 20,
              "image_url": "https://www.pexels.com/photo/samsung-tv-1020/"
            }
          ],
          "is_vip": true
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