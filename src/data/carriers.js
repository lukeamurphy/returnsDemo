const carriers = [
    {
      "carrier_name": "FedEx",
      "services": [
        "Express",
        "Standard"
      ],
      "rates": "$10.38 per kg",
      "regions_covered": [
        "West",
        "North",
        "Central",
        "East"
      ],
      "lead_time_days": 4,
      "service_type": "LTL"
    },
    {
      "carrier_name": "DHL",
      "services": [
        "Same-day",
        "Scheduled"
      ],
      "rates": "$6.76 per kg",
      "regions_covered": [
        "North",
        "Central",
        "South",
        "East"
      ],
      "lead_time_days": 5,
      "service_type": "LTL"
    },
    {
      "carrier_name": "USPS",
      "services": [
        "Locker",
        "Pickup"
      ],
      "rates": "$14.41 per kg",
      "regions_covered": [
        "South",
        "Central",
        "East",
        "West"
      ],
      "lead_time_days": 4,
      "service_type": "Parcel"
    }
  ];
  export default carriers;