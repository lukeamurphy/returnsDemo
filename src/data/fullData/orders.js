const orders = [
    {
      "order_id": "O-1000",
      "customer_name": "Customer 0",
      "email_address": "customer0@example.com",
      "address": "0 Main Street\nCity 0, ST 10000",
      "items": [
        {
          "sku": "SKU-1000",
          "name": "Product 0",
          "quantity": 1,
          "unit_price": 137.58,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1001",
      "customer_name": "Customer 1",
      "email_address": "customer1@example.com",
      "address": "1 Main Street\nCity 1, ST 10001",
      "items": [
        {
          "sku": "SKU-1001",
          "name": "Product 1",
          "quantity": 1,
          "unit_price": 59.62,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1002",
      "customer_name": "Customer 2",
      "email_address": "customer2@example.com",
      "address": "2 Main Street\nCity 2, ST 10002",
      "items": [
        {
          "sku": "SKU-1002",
          "name": "Product 2",
          "quantity": 1,
          "unit_price": 212.22,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1003",
      "customer_name": "Customer 3",
      "email_address": "customer3@example.com",
      "address": "3 Main Street\nCity 3, ST 10003",
      "items": [
        {
          "sku": "SKU-1003",
          "name": "Product 3",
          "quantity": 1,
          "unit_price": 58.28,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1004",
      "customer_name": "Customer 4",
      "email_address": "customer4@example.com",
      "address": "4 Main Street\nCity 4, ST 10004",
      "items": [
        {
          "sku": "SKU-1004",
          "name": "Product 4",
          "quantity": 1,
          "unit_price": 212.88,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
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
    },
    {
      "order_id": "O-1011",
      "customer_name": "Customer 11",
      "email_address": "customer11@example.com",
      "address": "11 Main Street\nCity 11, ST 10011",
      "items": [
        {
          "sku": "SKU-1011",
          "name": "Product 11",
          "quantity": 1,
          "unit_price": 432.11,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1012",
      "customer_name": "Customer 12",
      "email_address": "customer12@example.com",
      "address": "12 Main Street\nCity 12, ST 10012",
      "items": [
        {
          "sku": "SKU-1012",
          "name": "Product 12",
          "quantity": 1,
          "unit_price": 468.77,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1013",
      "customer_name": "Customer 13",
      "email_address": "customer13@example.com",
      "address": "13 Main Street\nCity 13, ST 10013",
      "items": [
        {
          "sku": "SKU-1013",
          "name": "Product 13",
          "quantity": 1,
          "unit_price": 248.8,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1014",
      "customer_name": "Customer 14",
      "email_address": "customer14@example.com",
      "address": "14 Main Street\nCity 14, ST 10014",
      "items": [
        {
          "sku": "SKU-1014",
          "name": "Product 14",
          "quantity": 1,
          "unit_price": 153.56,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1015",
      "customer_name": "Customer 15",
      "email_address": "customer15@example.com",
      "address": "15 Main Street\nCity 15, ST 10015",
      "items": [
        {
          "sku": "SKU-1015",
          "name": "Product 15",
          "quantity": 1,
          "unit_price": 267.68,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1016",
      "customer_name": "Customer 16",
      "email_address": "customer16@example.com",
      "address": "16 Main Street\nCity 16, ST 10016",
      "items": [
        {
          "sku": "SKU-1016",
          "name": "Product 16",
          "quantity": 1,
          "unit_price": 73.45,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1017",
      "customer_name": "Customer 17",
      "email_address": "customer17@example.com",
      "address": "17 Main Street\nCity 17, ST 10017",
      "items": [
        {
          "sku": "SKU-1017",
          "name": "Product 17",
          "quantity": 1,
          "unit_price": 341.78,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1018",
      "customer_name": "Customer 18",
      "email_address": "customer18@example.com",
      "address": "18 Main Street\nCity 18, ST 10018",
      "items": [
        {
          "sku": "SKU-1018",
          "name": "Product 18",
          "quantity": 1,
          "unit_price": 378.96,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1019",
      "customer_name": "Customer 19",
      "email_address": "customer19@example.com",
      "address": "19 Main Street\nCity 19, ST 10019",
      "items": [
        {
          "sku": "SKU-1019",
          "name": "Product 19",
          "quantity": 1,
          "unit_price": 405.17,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1020",
      "customer_name": "Customer 20",
      "email_address": "customer20@example.com",
      "address": "20 Main Street\nCity 20, ST 10020",
      "items": [
        {
          "sku": "SKU-1020",
          "name": "Product 20",
          "quantity": 1,
          "unit_price": 313.45,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1021",
      "customer_name": "Customer 21",
      "email_address": "customer21@example.com",
      "address": "21 Main Street\nCity 21, ST 10021",
      "items": [
        {
          "sku": "SKU-1021",
          "name": "Product 21",
          "quantity": 1,
          "unit_price": 242.5,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1022",
      "customer_name": "Customer 22",
      "email_address": "customer22@example.com",
      "address": "22 Main Street\nCity 22, ST 10022",
      "items": [
        {
          "sku": "SKU-1022",
          "name": "Product 22",
          "quantity": 1,
          "unit_price": 264.95,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1023",
      "customer_name": "Customer 23",
      "email_address": "customer23@example.com",
      "address": "23 Main Street\nCity 23, ST 10023",
      "items": [
        {
          "sku": "SKU-1023",
          "name": "Product 23",
          "quantity": 1,
          "unit_price": 265.6,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1024",
      "customer_name": "Customer 24",
      "email_address": "customer24@example.com",
      "address": "24 Main Street\nCity 24, ST 10024",
      "items": [
        {
          "sku": "SKU-1024",
          "name": "Product 24",
          "quantity": 1,
          "unit_price": 307.62,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1025",
      "customer_name": "Customer 25",
      "email_address": "customer25@example.com",
      "address": "25 Main Street\nCity 25, ST 10025",
      "items": [
        {
          "sku": "SKU-1025",
          "name": "Product 25",
          "quantity": 1,
          "unit_price": 254.47,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1026",
      "customer_name": "Customer 26",
      "email_address": "customer26@example.com",
      "address": "26 Main Street\nCity 26, ST 10026",
      "items": [
        {
          "sku": "SKU-1026",
          "name": "Product 26",
          "quantity": 1,
          "unit_price": 429.9,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1027",
      "customer_name": "Customer 27",
      "email_address": "customer27@example.com",
      "address": "27 Main Street\nCity 27, ST 10027",
      "items": [
        {
          "sku": "SKU-1027",
          "name": "Product 27",
          "quantity": 1,
          "unit_price": 53.2,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1028",
      "customer_name": "Customer 28",
      "email_address": "customer28@example.com",
      "address": "28 Main Street\nCity 28, ST 10028",
      "items": [
        {
          "sku": "SKU-1028",
          "name": "Product 28",
          "quantity": 1,
          "unit_price": 467.26,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1029",
      "customer_name": "Customer 29",
      "email_address": "customer29@example.com",
      "address": "29 Main Street\nCity 29, ST 10029",
      "items": [
        {
          "sku": "SKU-1029",
          "name": "Product 29",
          "quantity": 1,
          "unit_price": 71.94,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1030",
      "customer_name": "Customer 30",
      "email_address": "customer30@example.com",
      "address": "30 Main Street\nCity 30, ST 10030",
      "items": [
        {
          "sku": "SKU-1030",
          "name": "Product 30",
          "quantity": 1,
          "unit_price": 243.54,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1031",
      "customer_name": "Customer 31",
      "email_address": "customer31@example.com",
      "address": "31 Main Street\nCity 31, ST 10031",
      "items": [
        {
          "sku": "SKU-1031",
          "name": "Product 31",
          "quantity": 1,
          "unit_price": 435.84,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1032",
      "customer_name": "Customer 32",
      "email_address": "customer32@example.com",
      "address": "32 Main Street\nCity 32, ST 10032",
      "items": [
        {
          "sku": "SKU-1032",
          "name": "Product 32",
          "quantity": 1,
          "unit_price": 186.29,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1033",
      "customer_name": "Customer 33",
      "email_address": "customer33@example.com",
      "address": "33 Main Street\nCity 33, ST 10033",
      "items": [
        {
          "sku": "SKU-1033",
          "name": "Product 33",
          "quantity": 1,
          "unit_price": 431.08,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1034",
      "customer_name": "Customer 34",
      "email_address": "customer34@example.com",
      "address": "34 Main Street\nCity 34, ST 10034",
      "items": [
        {
          "sku": "SKU-1034",
          "name": "Product 34",
          "quantity": 1,
          "unit_price": 273.81,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1035",
      "customer_name": "Customer 35",
      "email_address": "customer35@example.com",
      "address": "35 Main Street\nCity 35, ST 10035",
      "items": [
        {
          "sku": "SKU-1035",
          "name": "Product 35",
          "quantity": 1,
          "unit_price": 473.01,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1036",
      "customer_name": "Customer 36",
      "email_address": "customer36@example.com",
      "address": "36 Main Street\nCity 36, ST 10036",
      "items": [
        {
          "sku": "SKU-1036",
          "name": "Product 36",
          "quantity": 1,
          "unit_price": 465.08,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1037",
      "customer_name": "Customer 37",
      "email_address": "customer37@example.com",
      "address": "37 Main Street\nCity 37, ST 10037",
      "items": [
        {
          "sku": "SKU-1037",
          "name": "Product 37",
          "quantity": 1,
          "unit_price": 411.4,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1038",
      "customer_name": "Customer 38",
      "email_address": "customer38@example.com",
      "address": "38 Main Street\nCity 38, ST 10038",
      "items": [
        {
          "sku": "SKU-1038",
          "name": "Product 38",
          "quantity": 1,
          "unit_price": 61.33,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1039",
      "customer_name": "Customer 39",
      "email_address": "customer39@example.com",
      "address": "39 Main Street\nCity 39, ST 10039",
      "items": [
        {
          "sku": "SKU-1039",
          "name": "Product 39",
          "quantity": 1,
          "unit_price": 307.62,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1040",
      "customer_name": "Customer 40",
      "email_address": "customer40@example.com",
      "address": "40 Main Street\nCity 40, ST 10040",
      "items": [
        {
          "sku": "SKU-1040",
          "name": "Product 40",
          "quantity": 1,
          "unit_price": 348.74,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1041",
      "customer_name": "Customer 41",
      "email_address": "customer41@example.com",
      "address": "41 Main Street\nCity 41, ST 10041",
      "items": [
        {
          "sku": "SKU-1041",
          "name": "Product 41",
          "quantity": 1,
          "unit_price": 275.61,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1042",
      "customer_name": "Customer 42",
      "email_address": "customer42@example.com",
      "address": "42 Main Street\nCity 42, ST 10042",
      "items": [
        {
          "sku": "SKU-1042",
          "name": "Product 42",
          "quantity": 1,
          "unit_price": 217.9,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1043",
      "customer_name": "Customer 43",
      "email_address": "customer43@example.com",
      "address": "43 Main Street\nCity 43, ST 10043",
      "items": [
        {
          "sku": "SKU-1043",
          "name": "Product 43",
          "quantity": 1,
          "unit_price": 342.22,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1044",
      "customer_name": "Customer 44",
      "email_address": "customer44@example.com",
      "address": "44 Main Street\nCity 44, ST 10044",
      "items": [
        {
          "sku": "SKU-1044",
          "name": "Product 44",
          "quantity": 1,
          "unit_price": 300.88,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1045",
      "customer_name": "Customer 45",
      "email_address": "customer45@example.com",
      "address": "45 Main Street\nCity 45, ST 10045",
      "items": [
        {
          "sku": "SKU-1045",
          "name": "Product 45",
          "quantity": 1,
          "unit_price": 149.55,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1046",
      "customer_name": "Customer 46",
      "email_address": "customer46@example.com",
      "address": "46 Main Street\nCity 46, ST 10046",
      "items": [
        {
          "sku": "SKU-1046",
          "name": "Product 46",
          "quantity": 1,
          "unit_price": 143.17,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1047",
      "customer_name": "Customer 47",
      "email_address": "customer47@example.com",
      "address": "47 Main Street\nCity 47, ST 10047",
      "items": [
        {
          "sku": "SKU-1047",
          "name": "Product 47",
          "quantity": 1,
          "unit_price": 169.9,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1048",
      "customer_name": "Customer 48",
      "email_address": "customer48@example.com",
      "address": "48 Main Street\nCity 48, ST 10048",
      "items": [
        {
          "sku": "SKU-1048",
          "name": "Product 48",
          "quantity": 1,
          "unit_price": 269.28,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1049",
      "customer_name": "Customer 49",
      "email_address": "customer49@example.com",
      "address": "49 Main Street\nCity 49, ST 10049",
      "items": [
        {
          "sku": "SKU-1049",
          "name": "Product 49",
          "quantity": 1,
          "unit_price": 221.69,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1050",
      "customer_name": "Customer 50",
      "email_address": "customer50@example.com",
      "address": "50 Main Street\nCity 50, ST 10050",
      "items": [
        {
          "sku": "SKU-1050",
          "name": "Product 50",
          "quantity": 1,
          "unit_price": 485.58,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1051",
      "customer_name": "Customer 51",
      "email_address": "customer51@example.com",
      "address": "51 Main Street\nCity 51, ST 10051",
      "items": [
        {
          "sku": "SKU-1051",
          "name": "Product 51",
          "quantity": 1,
          "unit_price": 325.64,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1052",
      "customer_name": "Customer 52",
      "email_address": "customer52@example.com",
      "address": "52 Main Street\nCity 52, ST 10052",
      "items": [
        {
          "sku": "SKU-1052",
          "name": "Product 52",
          "quantity": 1,
          "unit_price": 397.46,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1053",
      "customer_name": "Customer 53",
      "email_address": "customer53@example.com",
      "address": "53 Main Street\nCity 53, ST 10053",
      "items": [
        {
          "sku": "SKU-1053",
          "name": "Product 53",
          "quantity": 1,
          "unit_price": 141.56,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1054",
      "customer_name": "Customer 54",
      "email_address": "customer54@example.com",
      "address": "54 Main Street\nCity 54, ST 10054",
      "items": [
        {
          "sku": "SKU-1054",
          "name": "Product 54",
          "quantity": 1,
          "unit_price": 468.59,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1055",
      "customer_name": "Customer 55",
      "email_address": "customer55@example.com",
      "address": "55 Main Street\nCity 55, ST 10055",
      "items": [
        {
          "sku": "SKU-1055",
          "name": "Product 55",
          "quantity": 1,
          "unit_price": 231.44,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1056",
      "customer_name": "Customer 56",
      "email_address": "customer56@example.com",
      "address": "56 Main Street\nCity 56, ST 10056",
      "items": [
        {
          "sku": "SKU-1056",
          "name": "Product 56",
          "quantity": 1,
          "unit_price": 193.23,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1057",
      "customer_name": "Customer 57",
      "email_address": "customer57@example.com",
      "address": "57 Main Street\nCity 57, ST 10057",
      "items": [
        {
          "sku": "SKU-1057",
          "name": "Product 57",
          "quantity": 1,
          "unit_price": 312.97,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1058",
      "customer_name": "Customer 58",
      "email_address": "customer58@example.com",
      "address": "58 Main Street\nCity 58, ST 10058",
      "items": [
        {
          "sku": "SKU-1058",
          "name": "Product 58",
          "quantity": 1,
          "unit_price": 201.87,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1059",
      "customer_name": "Customer 59",
      "email_address": "customer59@example.com",
      "address": "59 Main Street\nCity 59, ST 10059",
      "items": [
        {
          "sku": "SKU-1059",
          "name": "Product 59",
          "quantity": 1,
          "unit_price": 69.49,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1060",
      "customer_name": "Customer 60",
      "email_address": "customer60@example.com",
      "address": "60 Main Street\nCity 60, ST 10060",
      "items": [
        {
          "sku": "SKU-1060",
          "name": "Product 60",
          "quantity": 1,
          "unit_price": 170.16,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1061",
      "customer_name": "Customer 61",
      "email_address": "customer61@example.com",
      "address": "61 Main Street\nCity 61, ST 10061",
      "items": [
        {
          "sku": "SKU-1061",
          "name": "Product 61",
          "quantity": 1,
          "unit_price": 61.71,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1062",
      "customer_name": "Customer 62",
      "email_address": "customer62@example.com",
      "address": "62 Main Street\nCity 62, ST 10062",
      "items": [
        {
          "sku": "SKU-1062",
          "name": "Product 62",
          "quantity": 1,
          "unit_price": 84.46,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1063",
      "customer_name": "Customer 63",
      "email_address": "customer63@example.com",
      "address": "63 Main Street\nCity 63, ST 10063",
      "items": [
        {
          "sku": "SKU-1063",
          "name": "Product 63",
          "quantity": 1,
          "unit_price": 216.75,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1064",
      "customer_name": "Customer 64",
      "email_address": "customer64@example.com",
      "address": "64 Main Street\nCity 64, ST 10064",
      "items": [
        {
          "sku": "SKU-1064",
          "name": "Product 64",
          "quantity": 1,
          "unit_price": 216.69,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1065",
      "customer_name": "Customer 65",
      "email_address": "customer65@example.com",
      "address": "65 Main Street\nCity 65, ST 10065",
      "items": [
        {
          "sku": "SKU-1065",
          "name": "Product 65",
          "quantity": 1,
          "unit_price": 189.54,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1066",
      "customer_name": "Customer 66",
      "email_address": "customer66@example.com",
      "address": "66 Main Street\nCity 66, ST 10066",
      "items": [
        {
          "sku": "SKU-1066",
          "name": "Product 66",
          "quantity": 1,
          "unit_price": 228.76,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1067",
      "customer_name": "Customer 67",
      "email_address": "customer67@example.com",
      "address": "67 Main Street\nCity 67, ST 10067",
      "items": [
        {
          "sku": "SKU-1067",
          "name": "Product 67",
          "quantity": 1,
          "unit_price": 121.23,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1068",
      "customer_name": "Customer 68",
      "email_address": "customer68@example.com",
      "address": "68 Main Street\nCity 68, ST 10068",
      "items": [
        {
          "sku": "SKU-1068",
          "name": "Product 68",
          "quantity": 1,
          "unit_price": 260.33,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1069",
      "customer_name": "Customer 69",
      "email_address": "customer69@example.com",
      "address": "69 Main Street\nCity 69, ST 10069",
      "items": [
        {
          "sku": "SKU-1069",
          "name": "Product 69",
          "quantity": 1,
          "unit_price": 151.64,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1070",
      "customer_name": "Customer 70",
      "email_address": "customer70@example.com",
      "address": "70 Main Street\nCity 70, ST 10070",
      "items": [
        {
          "sku": "SKU-1070",
          "name": "Product 70",
          "quantity": 1,
          "unit_price": 238.65,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1071",
      "customer_name": "Customer 71",
      "email_address": "customer71@example.com",
      "address": "71 Main Street\nCity 71, ST 10071",
      "items": [
        {
          "sku": "SKU-1071",
          "name": "Product 71",
          "quantity": 1,
          "unit_price": 77.46,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1072",
      "customer_name": "Customer 72",
      "email_address": "customer72@example.com",
      "address": "72 Main Street\nCity 72, ST 10072",
      "items": [
        {
          "sku": "SKU-1072",
          "name": "Product 72",
          "quantity": 1,
          "unit_price": 224.61,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1073",
      "customer_name": "Customer 73",
      "email_address": "customer73@example.com",
      "address": "73 Main Street\nCity 73, ST 10073",
      "items": [
        {
          "sku": "SKU-1073",
          "name": "Product 73",
          "quantity": 1,
          "unit_price": 142.0,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1074",
      "customer_name": "Customer 74",
      "email_address": "customer74@example.com",
      "address": "74 Main Street\nCity 74, ST 10074",
      "items": [
        {
          "sku": "SKU-1074",
          "name": "Product 74",
          "quantity": 1,
          "unit_price": 324.46,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1075",
      "customer_name": "Customer 75",
      "email_address": "customer75@example.com",
      "address": "75 Main Street\nCity 75, ST 10075",
      "items": [
        {
          "sku": "SKU-1075",
          "name": "Product 75",
          "quantity": 1,
          "unit_price": 374.18,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1076",
      "customer_name": "Customer 76",
      "email_address": "customer76@example.com",
      "address": "76 Main Street\nCity 76, ST 10076",
      "items": [
        {
          "sku": "SKU-1076",
          "name": "Product 76",
          "quantity": 1,
          "unit_price": 402.07,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1077",
      "customer_name": "Customer 77",
      "email_address": "customer77@example.com",
      "address": "77 Main Street\nCity 77, ST 10077",
      "items": [
        {
          "sku": "SKU-1077",
          "name": "Product 77",
          "quantity": 1,
          "unit_price": 469.12,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1078",
      "customer_name": "Customer 78",
      "email_address": "customer78@example.com",
      "address": "78 Main Street\nCity 78, ST 10078",
      "items": [
        {
          "sku": "SKU-1078",
          "name": "Product 78",
          "quantity": 1,
          "unit_price": 50.28,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1079",
      "customer_name": "Customer 79",
      "email_address": "customer79@example.com",
      "address": "79 Main Street\nCity 79, ST 10079",
      "items": [
        {
          "sku": "SKU-1079",
          "name": "Product 79",
          "quantity": 1,
          "unit_price": 325.08,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1080",
      "customer_name": "Customer 80",
      "email_address": "customer80@example.com",
      "address": "80 Main Street\nCity 80, ST 10080",
      "items": [
        {
          "sku": "SKU-1080",
          "name": "Product 80",
          "quantity": 1,
          "unit_price": 399.41,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1081",
      "customer_name": "Customer 81",
      "email_address": "customer81@example.com",
      "address": "81 Main Street\nCity 81, ST 10081",
      "items": [
        {
          "sku": "SKU-1081",
          "name": "Product 81",
          "quantity": 1,
          "unit_price": 92.95,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1082",
      "customer_name": "Customer 82",
      "email_address": "customer82@example.com",
      "address": "82 Main Street\nCity 82, ST 10082",
      "items": [
        {
          "sku": "SKU-1082",
          "name": "Product 82",
          "quantity": 1,
          "unit_price": 157.45,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1083",
      "customer_name": "Customer 83",
      "email_address": "customer83@example.com",
      "address": "83 Main Street\nCity 83, ST 10083",
      "items": [
        {
          "sku": "SKU-1083",
          "name": "Product 83",
          "quantity": 1,
          "unit_price": 427.37,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1084",
      "customer_name": "Customer 84",
      "email_address": "customer84@example.com",
      "address": "84 Main Street\nCity 84, ST 10084",
      "items": [
        {
          "sku": "SKU-1084",
          "name": "Product 84",
          "quantity": 1,
          "unit_price": 123.81,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1085",
      "customer_name": "Customer 85",
      "email_address": "customer85@example.com",
      "address": "85 Main Street\nCity 85, ST 10085",
      "items": [
        {
          "sku": "SKU-1085",
          "name": "Product 85",
          "quantity": 1,
          "unit_price": 205.12,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1086",
      "customer_name": "Customer 86",
      "email_address": "customer86@example.com",
      "address": "86 Main Street\nCity 86, ST 10086",
      "items": [
        {
          "sku": "SKU-1086",
          "name": "Product 86",
          "quantity": 1,
          "unit_price": 473.49,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1087",
      "customer_name": "Customer 87",
      "email_address": "customer87@example.com",
      "address": "87 Main Street\nCity 87, ST 10087",
      "items": [
        {
          "sku": "SKU-1087",
          "name": "Product 87",
          "quantity": 1,
          "unit_price": 132.26,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1088",
      "customer_name": "Customer 88",
      "email_address": "customer88@example.com",
      "address": "88 Main Street\nCity 88, ST 10088",
      "items": [
        {
          "sku": "SKU-1088",
          "name": "Product 88",
          "quantity": 1,
          "unit_price": 162.99,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1089",
      "customer_name": "Customer 89",
      "email_address": "customer89@example.com",
      "address": "89 Main Street\nCity 89, ST 10089",
      "items": [
        {
          "sku": "SKU-1089",
          "name": "Product 89",
          "quantity": 1,
          "unit_price": 175.26,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1090",
      "customer_name": "Customer 90",
      "email_address": "customer90@example.com",
      "address": "90 Main Street\nCity 90, ST 10090",
      "items": [
        {
          "sku": "SKU-1090",
          "name": "Product 90",
          "quantity": 1,
          "unit_price": 386.63,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1091",
      "customer_name": "Customer 91",
      "email_address": "customer91@example.com",
      "address": "91 Main Street\nCity 91, ST 10091",
      "items": [
        {
          "sku": "SKU-1091",
          "name": "Product 91",
          "quantity": 1,
          "unit_price": 184.75,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1092",
      "customer_name": "Customer 92",
      "email_address": "customer92@example.com",
      "address": "92 Main Street\nCity 92, ST 10092",
      "items": [
        {
          "sku": "SKU-1092",
          "name": "Product 92",
          "quantity": 1,
          "unit_price": 384.71,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1093",
      "customer_name": "Customer 93",
      "email_address": "customer93@example.com",
      "address": "93 Main Street\nCity 93, ST 10093",
      "items": [
        {
          "sku": "SKU-1093",
          "name": "Product 93",
          "quantity": 1,
          "unit_price": 456.4,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1094",
      "customer_name": "Customer 94",
      "email_address": "customer94@example.com",
      "address": "94 Main Street\nCity 94, ST 10094",
      "items": [
        {
          "sku": "SKU-1094",
          "name": "Product 94",
          "quantity": 1,
          "unit_price": 247.07,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1095",
      "customer_name": "Customer 95",
      "email_address": "customer95@example.com",
      "address": "95 Main Street\nCity 95, ST 10095",
      "items": [
        {
          "sku": "SKU-1095",
          "name": "Product 95",
          "quantity": 1,
          "unit_price": 340.11,
          "discount_applied": 5,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1096",
      "customer_name": "Customer 96",
      "email_address": "customer96@example.com",
      "address": "96 Main Street\nCity 96, ST 10096",
      "items": [
        {
          "sku": "SKU-1096",
          "name": "Product 96",
          "quantity": 1,
          "unit_price": 91.15,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1097",
      "customer_name": "Customer 97",
      "email_address": "customer97@example.com",
      "address": "97 Main Street\nCity 97, ST 10097",
      "items": [
        {
          "sku": "SKU-1097",
          "name": "Product 97",
          "quantity": 1,
          "unit_price": 480.09,
          "discount_applied": 15,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    },
    {
      "order_id": "O-1098",
      "customer_name": "Customer 98",
      "email_address": "customer98@example.com",
      "address": "98 Main Street\nCity 98, ST 10098",
      "items": [
        {
          "sku": "SKU-1098",
          "name": "Product 98",
          "quantity": 1,
          "unit_price": 152.36,
          "discount_applied": 10,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": true
    },
    {
      "order_id": "O-1099",
      "customer_name": "Customer 99",
      "email_address": "customer99@example.com",
      "address": "99 Main Street\nCity 99, ST 10099",
      "items": [
        {
          "sku": "SKU-1099",
          "name": "Product 99",
          "quantity": 1,
          "unit_price": 118.18,
          "discount_applied": 0,
          "image_url": "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
        }
      ],
      "is_vip": false
    }
  ];
  export default orders;