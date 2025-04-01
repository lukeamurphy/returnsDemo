const stores = [
    {
      "store_id": "S-001",
      "store_name": "Jones-Fuller",
      "store_type": "Flagship",
      "location": "476 Hamilton Plain\nJoshuashire, AR 42007",
      "capacity": 8204,
      "returns_enabled": false
    },
    {
      "store_id": "S-002",
      "store_name": "Kelley, Bishop and Stone",
      "store_type": "Outlet",
      "location": "0304 Robert Ville\nSouth Mariaton, LA 70573",
      "capacity": 5148,
      "returns_enabled": true
    },
    {
      "store_id": "S-003",
      "store_name": "Scott, Kelly and Reyes",
      "store_type": "Outlet",
      "location": "374 Welch Isle\nCalderonport, MS 93305",
      "capacity": 6288,
      "returns_enabled": false
    },
    {
      "store_id": "S-004",
      "store_name": "Randolph-Burnett",
      "store_type": "Mall",
      "location": "PSC 6275, Box 2523\nAPO AE 94831",
      "capacity": 2386,
      "returns_enabled": true
    },
    {
      "store_id": "S-005",
      "store_name": "Perkins, Parker and Watson",
      "store_type": "Mall",
      "location": "07995 Conway Stravenue Suite 102\nNew Natasha, KY 63487",
      "capacity": 8387,
      "returns_enabled": true
    },
    {
      "store_id": "S-006",
      "store_name": "Owens LLC",
      "store_type": "Standalone",
      "location": "Unit 8692 Box 8390\nDPO AA 21217",
      "capacity": 6058,
      "returns_enabled": true
    },
    {
      "store_id": "S-007",
      "store_name": "Thornton, Mack and Melendez",
      "store_type": "Outlet",
      "location": "USCGC Kane\nFPO AA 97835",
      "capacity": 4860,
      "returns_enabled": true
    },
    {
      "store_id": "S-008",
      "store_name": "Osborne-Crawford",
      "store_type": "Standalone",
      "location": "Unit 1405 Box 7458\nDPO AA 23361",
      "capacity": 4282,
      "returns_enabled": false
    },
    {
      "store_id": "S-009",
      "store_name": "Henry LLC",
      "store_type": "Outlet",
      "location": "134 Jones Fords Suite 725\nPort Robert, ME 50319",
      "capacity": 1288,
      "returns_enabled": false
    },
    {
      "store_id": "S-010",
      "store_name": "Munoz-Fleming",
      "store_type": "Flagship",
      "location": "456 Anderson Haven Suite 876\nDeanburgh, VT 14654",
      "capacity": 5699,
      "returns_enabled": false
    },
    {
      "store_id": "S-011",
      "store_name": "Henry, Raymond and Dixon",
      "store_type": "Mall",
      "location": "USCGC Norton\nFPO AP 21946",
      "capacity": 1633,
      "returns_enabled": false
    },
    {
      "store_id": "S-012",
      "store_name": "Bender-Duncan",
      "store_type": "Flagship",
      "location": "68672 Lucas Mews\nZacharyside, NH 47280",
      "capacity": 6746,
      "returns_enabled": false
    },
    {
      "store_id": "S-013",
      "store_name": "Fuentes-Morris",
      "store_type": "Flagship",
      "location": "2201 Smith Circles Suite 874\nEast Robertbury, MA 80164",
      "capacity": 4496,
      "returns_enabled": false
    },
    {
      "store_id": "S-014",
      "store_name": "Thompson-Shaw",
      "store_type": "Mall",
      "location": "579 Nathan Station Apt. 089\nSouth Eric, ID 52535",
      "capacity": 1853,
      "returns_enabled": true
    },
    {
      "store_id": "S-015",
      "store_name": "Manning-Campos",
      "store_type": "Outlet",
      "location": "991 Long Springs\nEast Crystalbury, NJ 83244",
      "capacity": 4550,
      "returns_enabled": false
    },
    {
      "store_id": "S-016",
      "store_name": "English, Brewer and Williams",
      "store_type": "Standalone",
      "location": "USNV Wang\nFPO AE 59335",
      "capacity": 4197,
      "returns_enabled": true
    },
    {
      "store_id": "S-017",
      "store_name": "White, Norris and Smith",
      "store_type": "Outlet",
      "location": "735 Rios Hills Apt. 173\nWest Pamelaburgh, WV 46483",
      "capacity": 2621,
      "returns_enabled": false
    },
    {
      "store_id": "S-018",
      "store_name": "Kelly, Walker and Nichols",
      "store_type": "Flagship",
      "location": "3270 Stewart Rapids Apt. 650\nWest Frankville, SD 78409",
      "capacity": 8365,
      "returns_enabled": false
    },
    {
      "store_id": "S-019",
      "store_name": "George-Jackson",
      "store_type": "Mall",
      "location": "PSC 2417, Box 0899\nAPO AA 72774",
      "capacity": 5526,
      "returns_enabled": true
    },
    {
      "store_id": "S-020",
      "store_name": "Blanchard-Jenkins",
      "store_type": "Flagship",
      "location": "379 Melissa Route Apt. 453\nKingland, CO 04166",
      "capacity": 1381,
      "returns_enabled": true
    },
    {
      "store_id": "S-021",
      "store_name": "Jones Ltd",
      "store_type": "Flagship",
      "location": "3618 David Underpass\nEast Anthonyland, MA 43681",
      "capacity": 3394,
      "returns_enabled": false
    },
    {
      "store_id": "S-022",
      "store_name": "Mora, Moody and Bradford",
      "store_type": "Flagship",
      "location": "20325 Lauren Drive Apt. 423\nWest Timothymouth, NJ 65216",
      "capacity": 6548,
      "returns_enabled": false
    },
    {
      "store_id": "S-023",
      "store_name": "Day-Savage",
      "store_type": "Mall",
      "location": "16222 Virginia Rest Suite 662\nNorth Billshire, OK 15321",
      "capacity": 5332,
      "returns_enabled": false
    },
    {
      "store_id": "S-024",
      "store_name": "Gonzalez-Simmons",
      "store_type": "Flagship",
      "location": "870 Adams River\nWest Bryanmouth, FL 39510",
      "capacity": 2253,
      "returns_enabled": false
    },
    {
      "store_id": "S-025",
      "store_name": "Martin-Perkins",
      "store_type": "Standalone",
      "location": "99704 Brandt Pass Suite 804\nMartinezchester, VA 16330",
      "capacity": 4189,
      "returns_enabled": true
    },
    {
      "store_id": "S-026",
      "store_name": "Davis-Harrison",
      "store_type": "Standalone",
      "location": "395 Aaron Lodge Suite 700\nChrisbury, UT 56406",
      "capacity": 6295,
      "returns_enabled": true
    },
    {
      "store_id": "S-027",
      "store_name": "Gallegos, Aguirre and Williams",
      "store_type": "Flagship",
      "location": "020 Howell Canyon Suite 017\nNew Christopherport, MN 71598",
      "capacity": 8273,
      "returns_enabled": false
    },
    {
      "store_id": "S-028",
      "store_name": "Barrett, Richardson and Cross",
      "store_type": "Standalone",
      "location": "63940 Patel Expressway\nRebekahside, IN 12097",
      "capacity": 6482,
      "returns_enabled": true
    },
    {
      "store_id": "S-029",
      "store_name": "Ellis-Hill",
      "store_type": "Standalone",
      "location": "105 Reed Harbors Suite 938\nPaynebury, IN 40985",
      "capacity": 5507,
      "returns_enabled": true
    },
    {
      "store_id": "S-030",
      "store_name": "Gutierrez, Richardson and Richardson",
      "store_type": "Outlet",
      "location": "Unit 9571 Box 9072\nDPO AP 96712",
      "capacity": 7051,
      "returns_enabled": false
    }
  ];
  export default stores;