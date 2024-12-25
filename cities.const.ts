import { City } from "./components/TravelRecap";

const cities: City[] = [
    // Existing cities
    { name: "New York", lat: 40.7128, lng: -74.006, code: "us" },
    { name: "London", lat: 51.5074, lng: -0.1278, code: "gb" },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, code: "jp" },
    { name: "Sydney", lat: -33.8688, lng: 151.2093, code: "au" },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, code: "br" },

    // Additional cities
    // United States (us)
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437, code: "us" },
    { name: "Las Vegas", lat: 36.1699, lng: -115.1398, code: "us" },
    { name: "Miami", lat: 25.7617, lng: -80.1918, code: "us" },
    { name: "San Francisco", lat: 37.7749, lng: -122.4194, code: "us" },
    { name: "Orlando", lat: 28.5383, lng: -81.3792, code: "us" },

    // United Kingdom (gb)
    { name: "Edinburgh", lat: 55.9533, lng: -3.1883, code: "gb" },
    { name: "Manchester", lat: 53.4808, lng: -2.2426, code: "gb" },
    { name: "Birmingham", lat: 52.4862, lng: -1.8904, code: "gb" },
    { name: "Glasgow", lat: 55.8642, lng: -4.2518, code: "gb" },
    { name: "Liverpool", lat: 53.4084, lng: -2.9916, code: "gb" },

    // Japan (jp)
    { name: "Kyoto", lat: 35.0116, lng: 135.7681, code: "jp" },
    { name: "Osaka", lat: 34.6937, lng: 135.5023, code: "jp" },
    { name: "Nara", lat: 34.6851, lng: 135.8048, code: "jp" },
    { name: "Hiroshima", lat: 34.3853, lng: 132.4553, code: "jp" },
    { name: "Fukuoka", lat: 33.5904, lng: 130.4017, code: "jp" },
    { name: "Sapporo", lat: 43.0621, lng: 141.3544, code: "jp" },
    { name: "Nagoya", lat: 35.1815, lng: 136.9066, code: "jp" },
    { name: "Hakone", lat: 35.2320, lng: 139.1068, code: "jp" },
    { name: "Kanazawa", lat: 36.5613, lng: 136.6562, code: "jp" },
    { name: "Kobe", lat: 34.6901, lng: 135.1955, code: "jp" },

    // Australia (au)
    { name: "Melbourne", lat: -37.8136, lng: 144.9631, code: "au" },
    { name: "Brisbane", lat: -27.4698, lng: 153.0251, code: "au" },
    { name: "Perth", lat: -31.9505, lng: 115.8605, code: "au" },
    { name: "Adelaide", lat: -34.9285, lng: 138.6007, code: "au" },
    { name: "Gold Coast", lat: -28.0167, lng: 153.4000, code: "au" },

    // Brazil (br)
    { name: "São Paulo", lat: -23.5505, lng: -46.6333, code: "br" },
    { name: "Salvador", lat: -12.9714, lng: -38.5014, code: "br" },
    { name: "Brasília", lat: -15.8267, lng: -47.9218, code: "br" },
    { name: "Fortaleza", lat: -3.7172, lng: -38.5434, code: "br" },
    { name: "Belo Horizonte", lat: -19.9167, lng: -43.9345, code: "br" },

    // France (fr)
    { name: "Paris", lat: 48.8566, lng: 2.3522, code: "fr" },
    { name: "Nice", lat: 43.7102, lng: 7.2620, code: "fr" },
    { name: "Lyon", lat: 45.7640, lng: 4.8357, code: "fr" },
    { name: "Marseille", lat: 43.2965, lng: 5.3698, code: "fr" },
    { name: "Bordeaux", lat: 44.8378, lng: -0.5792, code: "fr" },
    { name: "Toulouse", lat: 43.6045, lng: 1.4442, code: "fr" },
    { name: "Strasbourg", lat: 48.5734, lng: 7.7521, code: "fr" },
    { name: "Cannes", lat: 43.5528, lng: 7.0174, code: "fr" },
    { name: "Montpellier", lat: 43.6117, lng: 3.8767, code: "fr" },
    { name: "Lille", lat: 50.6292, lng: 3.0573, code: "fr" },

    // Italy (it)
    { name: "Rome", lat: 41.9028, lng: 12.4964, code: "it" },
    { name: "Venice", lat: 45.4408, lng: 12.3155, code: "it" },
    { name: "Florence", lat: 43.7696, lng: 11.2558, code: "it" },
    { name: "Milan", lat: 45.4642, lng: 9.1900, code: "it" },
    { name: "Naples", lat: 40.8518, lng: 14.2681, code: "it" },
    { name: "Pisa", lat: 43.7166, lng: 10.4036, code: "it" },
    { name: "Verona", lat: 45.4384, lng: 10.9916, code: "it" },
    { name: "Bologna", lat: 44.4949, lng: 11.3426, code: "it" },
    { name: "Turin", lat: 45.0703, lng: 7.6869, code: "it" },
    { name: "Amalfi", lat: 40.6333, lng: 14.6025, code: "it" },

    // Germany (de)
    { name: "Berlin", lat: 52.5200, lng: 13.4050, code: "de" },
    { name: "Munich", lat: 48.1351, lng: 11.5820, code: "de" },
    { name: "Frankfurt", lat: 50.1109, lng: 8.6821, code: "de" },
    { name: "Hamburg", lat: 53.5511, lng: 9.9937, code: "de" },
    { name: "Cologne", lat: 50.9375, lng: 6.9603, code: "de" },
    { name: "Düsseldorf", lat: 51.2277, lng: 6.7735, code: "de" },
    { name: "Stuttgart", lat: 48.7758, lng: 9.1829, code: "de" },
    { name: "Dresden", lat: 51.0504, lng: 13.7373, code: "de" },
    { name: "Leipzig", lat: 51.3397, lng: 12.3731, code: "de" },
    { name: "Heidelberg", lat: 49.3988, lng: 8.6724, code: "de" },


    // Spain (es)
    { name: "Barcelona", lat: 41.3851, lng: 2.1734, code: "es" },
    { name: "Madrid", lat: 40.4168, lng: -3.7038, code: "es" },
    { name: "Seville", lat: 37.3886, lng: -5.9823, code: "es" },
    { name: "Granada", lat: 37.1773, lng: -3.5986, code: "es" },
    { name: "Valencia", lat: 39.4699, lng: -0.3763, code: "es" },
    { name: "Bilbao", lat: 43.2630, lng: -2.9350, code: "es" },
    { name: "Malaga", lat: 36.7213, lng: -4.4214, code: "es" },
    { name: "Toledo", lat: 39.8628, lng: -4.0273, code: "es" },
    { name: "Cordoba", lat: 37.8882, lng: -4.7794, code: "es" },
    { name: "San Sebastian", lat: 43.3183, lng: -1.9812, code: "es" },

    // India (in)
    { name: "New Delhi", lat: 28.6139, lng: 77.2090, code: "in" },
    { name: "Mumbai", lat: 19.0760, lng: 72.8777, code: "in" },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873, code: "in" },
    { name: "Agra", lat: 27.1767, lng: 78.0081, code: "in" },
    { name: "Goa", lat: 15.2993, lng: 74.1240, code: "in" },
    { name: "Bengaluru", lat: 12.9716, lng: 77.5946, code: "in" },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639, code: "in" },
    { name: "Chennai", lat: 13.0827, lng: 80.2707, code: "in" },
    { name: "Varanasi", lat: 25.3176, lng: 82.9739, code: "in" },
    { name: "Udaipur", lat: 24.5854, lng: 73.7125, code: "in" },

    // China (cn)
    { name: "Beijing", lat: 39.9042, lng: 116.4074, code: "cn" },
    { name: "Shanghai", lat: 31.2304, lng: 121.4737, code: "cn" },
    { name: "Guangzhou", lat: 23.1291, lng: 113.2644, code: "cn" },
    { name: "Chengdu", lat: 30.5728, lng: 104.0668, code: "cn" },
    { name: "Xi'an", lat: 34.3416, lng: 108.9398, code: "cn" },
    { name: "Shenzhen", lat: 22.5431, lng: 114.0579, code: "cn" },
    { name: "Hangzhou", lat: 30.2741, lng: 120.1551, code: "cn" },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694, code: "cn" },
    { name: "Guilin", lat: 25.2742, lng: 110.2991, code: "cn" },
    { name: "Suzhou", lat: 31.2989, lng: 120.5853, code: "cn" },

    // Canada (ca)
    { name: "Toronto", lat: 43.6511, lng: -79.3832, code: "ca" },
    { name: "Vancouver", lat: 49.2827, lng: -123.1207, code: "ca" },
    { name: "Montreal", lat: 45.5017, lng: -73.5673, code: "ca" },
    { name: "Calgary", lat: 51.0447, lng: -114.0719, code: "ca" },
    { name: "Ottawa", lat: 45.4215, lng: -75.6972, code: "ca" },
    { name: "Quebec City", lat: 46.8139, lng: -71.2082, code: "ca" },
    { name: "Whistler", lat: 50.1163, lng: -122.9574, code: "ca" },
    { name: "Halifax", lat: 44.6488, lng: -63.5752, code: "ca" },
    { name: "Banff", lat: 51.1784, lng: -115.5708, code: "ca" },
    { name: "Victoria", lat: 48.4284, lng: -123.3656, code: "ca" },

    // South Africa (za)
    { name: "Cape Town", lat: -33.9249, lng: 18.4241, code: "za" },
    { name: "Johannesburg", lat: -26.2041, lng: 28.0473, code: "za" },
    { name: "Durban", lat: -29.8587, lng: 31.0218, code: "za" },
    { name: "Pretoria", lat: -25.7479, lng: 28.2293, code: "za" },
    { name: "Port Elizabeth", lat: -33.7139, lng: 25.5207, code: "za" },
    { name: "Stellenbosch", lat: -33.9333, lng: 18.8602, code: "za" },
    { name: "Knysna", lat: -34.0360, lng: 23.0471, code: "za" },
    { name: "Franschhoek", lat: -33.9069, lng: 19.1255, code: "za" },
    { name: "Hermanus", lat: -34.4141, lng: 19.2378, code: "za" },
    { name: "Kruger National Park", lat: -24.0167, lng: 31.4852, code: "za" },

    // Mexico (mx)
    { name: "Mexico City", lat: 19.4326, lng: -99.1332, code: "mx" },
    { name: "Cancún", lat: 21.1619, lng: -86.8515, code: "mx" },
    { name: "Guadalajara", lat: 20.6597, lng: -103.3496, code: "mx" },
    { name: "Monterrey", lat: 25.6866, lng: -100.3161, code: "mx" },
    { name: "Tulum", lat: 20.2110, lng: -87.4657, code: "mx" },
    { name: "Playa del Carmen", lat: 20.6296, lng: -87.0739, code: "mx" },
    { name: "Puerto Vallarta", lat: 20.6534, lng: -105.2253, code: "mx" },
    { name: "Cozumel", lat: 20.4229, lng: -86.9223, code: "mx" },
    { name: "Oaxaca", lat: 17.0654, lng: -96.7237, code: "mx" },
    { name: "San Miguel de Allende", lat: 20.9148, lng: -100.7431, code: "mx" },

    // Thailand (th)
    { name: "Bangkok", lat: 13.7563, lng: 100.5018, code: "th" },
    { name: "Chiang Mai", lat: 18.7883, lng: 98.9853, code: "th" },
    { name: "Phuket", lat: 7.8804, lng: 98.3923, code: "th" },
    { name: "Pattaya", lat: 12.9236, lng: 100.8825, code: "th" },
    { name: "Krabi", lat: 8.0863, lng: 98.9063, code: "th" },
    { name: "Ayutthaya", lat: 14.3532, lng: 100.5689, code: "th" },
    { name: "Hua Hin", lat: 12.5684, lng: 99.9577, code: "th" },
    { name: "Koh Samui", lat: 9.5120, lng: 100.0130, code: "th" },
    { name: "Chiang Rai", lat: 19.9103, lng: 99.8406, code: "th" },
    { name: "Sukhothai", lat: 17.0070, lng: 99.8230, code: "th" },

    // Turkey (tr)
    { name: "Istanbul", lat: 41.0082, lng: 28.9784, code: "tr" },
    { name: "Antalya", lat: 36.8969, lng: 30.7133, code: "tr" },
    { name: "Cappadocia", lat: 38.6431, lng: 34.8268, code: "tr" },
    { name: "Izmir", lat: 38.4192, lng: 27.1287, code: "tr" },
    { name: "Bodrum", lat: 37.0344, lng: 27.4305, code: "tr" },
    { name: "Pamukkale", lat: 37.9204, lng: 29.1244, code: "tr" },
    { name: "Ankara", lat: 39.9208, lng: 32.8541, code: "tr" },
    { name: "Marmaris", lat: 36.8550, lng: 28.2742, code: "tr" },
    { name: "Fethiye", lat: 36.6214, lng: 29.1164, code: "tr" },
    { name: "Trabzon", lat: 41.0015, lng: 39.7178, code: "tr" },

    // Indonesia (id)
    { name: "Bali", lat: -8.4095, lng: 115.1889, code: "id" },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456, code: "id" },
    { name: "Yogyakarta", lat: -7.7956, lng: 110.3695, code: "id" },
    { name: "Bandung", lat: -6.9175, lng: 107.6191, code: "id" },
    { name: "Surabaya", lat: -7.2504, lng: 112.7688, code: "id" },
    { name: "Lombok", lat: -8.6529, lng: 116.3249, code: "id" },
    { name: "Ubud", lat: -8.5191, lng: 115.2635, code: "id" },
    { name: "Makassar", lat: -5.1354, lng: 119.4238, code: "id" },
    { name: "Medan", lat: 3.5952, lng: 98.6722, code: "id" },
    { name: "Semarang", lat: -6.9667, lng: 110.4167, code: "id" },

    // UAE (ae)
    { name: "Dubai", lat: 25.276987, lng: 55.296249, code: "ae" },
    { name: "Abu Dhabi", lat: 24.453884, lng: 54.377343, code: "ae" },
    { name: "Sharjah", lat: 25.3463, lng: 55.4209, code: "ae" },
    { name: "Al Ain", lat: 24.2075, lng: 55.7447, code: "ae" },
    { name: "Ajman", lat: 25.4052, lng: 55.5136, code: "ae" },
    { name: "Fujairah", lat: 25.1283, lng: 56.3265, code: "ae" },
    { name: "Ras Al Khaimah", lat: 25.8007, lng: 55.9762, code: "ae" },
    { name: "Umm Al Quwain", lat: 25.5647, lng: 55.5552, code: "ae" },
    { name: "Khor Fakkan", lat: 25.3310, lng: 56.3419, code: "ae" },
    { name: "Hatta", lat: 24.7968, lng: 56.1281, code: "ae" },

    // Russia (ru)
    { name: "Moscow", lat: 55.7558, lng: 37.6173, code: "ru" },
    { name: "Saint Petersburg", lat: 59.9343, lng: 30.3351, code: "ru" },
    { name: "Kazan", lat: 55.8304, lng: 49.0661, code: "ru" },
    { name: "Sochi", lat: 43.6028, lng: 39.7342, code: "ru" },
    { name: "Yekaterinburg", lat: 56.8389, lng: 60.6057, code: "ru" },
    { name: "Novosibirsk", lat: 55.0084, lng: 82.9357, code: "ru" },
    { name: "Vladivostok", lat: 43.1155, lng: 131.8855, code: "ru" },
    { name: "Rostov-on-Don", lat: 47.2357, lng: 39.7015, code: "ru" },
    { name: "Kaliningrad", lat: 54.7104, lng: 20.4522, code: "ru" },
    { name: "Nizhny Novgorod", lat: 56.3269, lng: 44.0059, code: "ru" },

    // Vietnam (vn)
    { name: "Hanoi", lat: 21.0285, lng: 105.8542, code: "vn" },
    { name: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297, code: "vn" },
    { name: "Ha Long Bay", lat: 20.9101, lng: 107.1839, code: "vn" },
    { name: "Da Nang", lat: 16.0544, lng: 108.2022, code: "vn" },
    { name: "Hoi An", lat: 15.8801, lng: 108.3380, code: "vn" },
    { name: "Hue", lat: 16.4637, lng: 107.5909, code: "vn" },
    { name: "Nha Trang", lat: 12.2388, lng: 109.1967, code: "vn" },
    { name: "Sapa", lat: 22.3350, lng: 103.8304, code: "vn" },
    { name: "Phu Quoc", lat: 10.2270, lng: 103.9630, code: "vn" },
    { name: "Can Tho", lat: 10.0452, lng: 105.7469, code: "vn" },

    // Malaysia (my)
    { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869, code: "my" },
    { name: "George Town", lat: 5.4141, lng: 100.3288, code: "my" },
    { name: "Langkawi", lat: 6.3564, lng: 99.7830, code: "my" },
    { name: "Malacca", lat: 2.1896, lng: 102.2501, code: "my" },
    { name: "Kota Kinabalu", lat: 5.9804, lng: 116.0735, code: "my" },
    { name: "Ipoh", lat: 4.5975, lng: 101.0901, code: "my" },
    { name: "Cameron Highlands", lat: 4.4691, lng: 101.3889, code: "my" },
    { name: "Johor Bahru", lat: 1.4927, lng: 103.7414, code: "my" },
    { name: "Kuching", lat: 1.5533, lng: 110.3591, code: "my" },



    // Philippines (ph)


    { name: "Boracay", lat: 11.9674, lng: 121.9248, code: "ph" },
    { name: "Palawan", lat: 9.8349, lng: 118.7382, code: "ph" },
    { name: "Davao City", lat: 7.1907, lng: 125.4553, code: "ph" },
    { name: "Baguio", lat: 16.4023, lng: 120.5960, code: "ph" },
    { name: "Vigan", lat: 17.5738, lng: 120.3869, code: "ph" },
    { name: "Tagaytay", lat: 14.1061, lng: 120.9741, code: "ph" },

    // Philippines (ph)
    { name: "Manila", lat: 14.5995, lng: 120.9842, code: "ph" },
    { name: "Cebu City", lat: 10.3157, lng: 123.8854, code: "ph" },
    { name: "Bohol", lat: 9.8490, lng: 124.1435, code: "ph" },
    { name: "Iloilo City", lat: 10.7202, lng: 122.5621, code: "ph" },


    // Singapore (sg)
    { name: "Singapore", lat: 1.3521, lng: 103.8198, code: "sg" },
    // Myanmar (mm)
    { name: "Yangon", lat: 16.8409, lng: 96.1735, code: "mm" },
    { name: "Bagan", lat: 21.1717, lng: 94.8585, code: "mm" },
    { name: "Mandalay", lat: 21.9162, lng: 96.0844, code: "mm" },
    { name: "Inle Lake", lat: 20.5662, lng: 96.9261, code: "mm" },
    { name: "Naypyidaw", lat: 19.7633, lng: 96.0785, code: "mm" },
    { name: "Ngapali Beach", lat: 18.4500, lng: 94.3333, code: "mm" },
    { name: "Pyin Oo Lwin", lat: 22.0353, lng: 96.4699, code: "mm" },
    { name: "Hpa-An", lat: 16.8892, lng: 97.6346, code: "mm" },
    { name: "Golden Rock", lat: 17.4836, lng: 97.0990, code: "mm" },
    { name: "Taunggyi", lat: 20.7883, lng: 97.0378, code: "mm" },

    // Sri Lanka (lk)
    { name: "Colombo", lat: 6.9271, lng: 79.8612, code: "lk" },
    { name: "Kandy", lat: 7.2906, lng: 80.6337, code: "lk" },
    { name: "Galle", lat: 6.0326, lng: 80.2167, code: "lk" },
    { name: "Ella", lat: 6.8753, lng: 81.0463, code: "lk" },
    { name: "Nuwara Eliya", lat: 6.9497, lng: 80.7891, code: "lk" },
    { name: "Sigiriya", lat: 7.9579, lng: 80.7603, code: "lk" },
    { name: "Jaffna", lat: 9.6615, lng: 80.0255, code: "lk" },
    { name: "Trincomalee", lat: 8.5874, lng: 81.2152, code: "lk" },
    { name: "Arugam Bay", lat: 6.8390, lng: 81.8365, code: "lk" },
    { name: "Anuradhapura", lat: 8.3114, lng: 80.4037, code: "lk" }

]


const citiesComboBox = [
    {
        "label": "New York",
        "value": "New York"
    },
    {
        "label": "London",
        "value": "London"
    },
    {
        "label": "Tokyo",
        "value": "Tokyo"
    },
    {
        "label": "Sydney",
        "value": "Sydney"
    },
    {
        "label": "Rio de Janeiro",
        "value": "Rio de Janeiro"
    },
    {
        "label": "Los Angeles",
        "value": "Los Angeles"
    },
    {
        "label": "Las Vegas",
        "value": "Las Vegas"
    },
    {
        "label": "Miami",
        "value": "Miami"
    },
    {
        "label": "San Francisco",
        "value": "San Francisco"
    },
    {
        "label": "Orlando",
        "value": "Orlando"
    },
    {
        "label": "Edinburgh",
        "value": "Edinburgh"
    },
    {
        "label": "Manchester",
        "value": "Manchester"
    },
    {
        "label": "Birmingham",
        "value": "Birmingham"
    },
    {
        "label": "Glasgow",
        "value": "Glasgow"
    },
    {
        "label": "Liverpool",
        "value": "Liverpool"
    },
    {
        "label": "Kyoto",
        "value": "Kyoto"
    },
    {
        "label": "Osaka",
        "value": "Osaka"
    },
    {
        "label": "Nara",
        "value": "Nara"
    },
    {
        "label": "Hiroshima",
        "value": "Hiroshima"
    },
    {
        "label": "Fukuoka",
        "value": "Fukuoka"
    },
    {
        "label": "Sapporo",
        "value": "Sapporo"
    },
    {
        "label": "Nagoya",
        "value": "Nagoya"
    },
    {
        "label": "Hakone",
        "value": "Hakone"
    },
    {
        "label": "Kanazawa",
        "value": "Kanazawa"
    },
    {
        "label": "Kobe",
        "value": "Kobe"
    },
    {
        "label": "Melbourne",
        "value": "Melbourne"
    },
    {
        "label": "Brisbane",
        "value": "Brisbane"
    },
    {
        "label": "Perth",
        "value": "Perth"
    },
    {
        "label": "Adelaide",
        "value": "Adelaide"
    },
    {
        "label": "Gold Coast",
        "value": "Gold Coast"
    },
    {
        "label": "São Paulo",
        "value": "São Paulo"
    },
    {
        "label": "Salvador",
        "value": "Salvador"
    },
    {
        "label": "Brasília",
        "value": "Brasília"
    },
    {
        "label": "Fortaleza",
        "value": "Fortaleza"
    },
    {
        "label": "Belo Horizonte",
        "value": "Belo Horizonte"
    },
    {
        "label": "Paris",
        "value": "Paris"
    },
    {
        "label": "Nice",
        "value": "Nice"
    },
    {
        "label": "Lyon",
        "value": "Lyon"
    },
    {
        "label": "Marseille",
        "value": "Marseille"
    },
    {
        "label": "Bordeaux",
        "value": "Bordeaux"
    },
    {
        "label": "Toulouse",
        "value": "Toulouse"
    },
    {
        "label": "Strasbourg",
        "value": "Strasbourg"
    },
    {
        "label": "Cannes",
        "value": "Cannes"
    },
    {
        "label": "Montpellier",
        "value": "Montpellier"
    },
    {
        "label": "Lille",
        "value": "Lille"
    },
    {
        "label": "Rome",
        "value": "Rome"
    },
    {
        "label": "Venice",
        "value": "Venice"
    },
    {
        "label": "Florence",
        "value": "Florence"
    },
    {
        "label": "Milan",
        "value": "Milan"
    },
    {
        "label": "Naples",
        "value": "Naples"
    },
    {
        "label": "Pisa",
        "value": "Pisa"
    },
    {
        "label": "Verona",
        "value": "Verona"
    },
    {
        "label": "Bologna",
        "value": "Bologna"
    },
    {
        "label": "Turin",
        "value": "Turin"
    },
    {
        "label": "Amalfi",
        "value": "Amalfi"
    },
    {
        "label": "Berlin",
        "value": "Berlin"
    },
    {
        "label": "Munich",
        "value": "Munich"
    },
    {
        "label": "Frankfurt",
        "value": "Frankfurt"
    },
    {
        "label": "Hamburg",
        "value": "Hamburg"
    },
    {
        "label": "Cologne",
        "value": "Cologne"
    },
    {
        "label": "Düsseldorf",
        "value": "Düsseldorf"
    },
    {
        "label": "Stuttgart",
        "value": "Stuttgart"
    },
    {
        "label": "Dresden",
        "value": "Dresden"
    },
    {
        "label": "Leipzig",
        "value": "Leipzig"
    },
    {
        "label": "Heidelberg",
        "value": "Heidelberg"
    },
    {
        "label": "Barcelona",
        "value": "Barcelona"
    },
    {
        "label": "Madrid",
        "value": "Madrid"
    },
    {
        "label": "Seville",
        "value": "Seville"
    },
    {
        "label": "Granada",
        "value": "Granada"
    },
    {
        "label": "Valencia",
        "value": "Valencia"
    },
    {
        "label": "Bilbao",
        "value": "Bilbao"
    },
    {
        "label": "Malaga",
        "value": "Malaga"
    },
    {
        "label": "Toledo",
        "value": "Toledo"
    },
    {
        "label": "Cordoba",
        "value": "Cordoba"
    },
    {
        "label": "San Sebastian",
        "value": "San Sebastian"
    },
    {
        "label": "New Delhi",
        "value": "New Delhi"
    },
    {
        "label": "Mumbai",
        "value": "Mumbai"
    },
    {
        "label": "Jaipur",
        "value": "Jaipur"
    },
    {
        "label": "Agra",
        "value": "Agra"
    },
    {
        "label": "Goa",
        "value": "Goa"
    },
    {
        "label": "Bengaluru",
        "value": "Bengaluru"
    },
    {
        "label": "Kolkata",
        "value": "Kolkata"
    },
    {
        "label": "Chennai",
        "value": "Chennai"
    },
    {
        "label": "Varanasi",
        "value": "Varanasi"
    },
    {
        "label": "Udaipur",
        "value": "Udaipur"
    },
    {
        "label": "Beijing",
        "value": "Beijing"
    },
    {
        "label": "Shanghai",
        "value": "Shanghai"
    },
    {
        "label": "Guangzhou",
        "value": "Guangzhou"
    },
    {
        "label": "Chengdu",
        "value": "Chengdu"
    },
    {
        "label": "Xi'an",
        "value": "Xi'an"
    },
    {
        "label": "Shenzhen",
        "value": "Shenzhen"
    },
    {
        "label": "Hangzhou",
        "value": "Hangzhou"
    },
    {
        "label": "Hong Kong",
        "value": "Hong Kong"
    },
    {
        "label": "Guilin",
        "value": "Guilin"
    },
    {
        "label": "Suzhou",
        "value": "Suzhou"
    },
    {
        "label": "Toronto",
        "value": "Toronto"
    },
    {
        "label": "Vancouver",
        "value": "Vancouver"
    },
    {
        "label": "Montreal",
        "value": "Montreal"
    },
    {
        "label": "Calgary",
        "value": "Calgary"
    },
    {
        "label": "Ottawa",
        "value": "Ottawa"
    },
    {
        "label": "Quebec City",
        "value": "Quebec City"
    },
    {
        "label": "Whistler",
        "value": "Whistler"
    },
    {
        "label": "Halifax",
        "value": "Halifax"
    },
    {
        "label": "Banff",
        "value": "Banff"
    },
    {
        "label": "Victoria",
        "value": "Victoria"
    },
    {
        "label": "Cape Town",
        "value": "Cape Town"
    },
    {
        "label": "Johannesburg",
        "value": "Johannesburg"
    },
    {
        "label": "Durban",
        "value": "Durban"
    },
    {
        "label": "Pretoria",
        "value": "Pretoria"
    },
    {
        "label": "Port Elizabeth",
        "value": "Port Elizabeth"
    },
    {
        "label": "Stellenbosch",
        "value": "Stellenbosch"
    },
    {
        "label": "Knysna",
        "value": "Knysna"
    },
    {
        "label": "Franschhoek",
        "value": "Franschhoek"
    },
    {
        "label": "Hermanus",
        "value": "Hermanus"
    },
    {
        "label": "Kruger National Park",
        "value": "Kruger National Park"
    },
    {
        "label": "Mexico City",
        "value": "Mexico City"
    },
    {
        "label": "Cancún",
        "value": "Cancún"
    },
    {
        "label": "Guadalajara",
        "value": "Guadalajara"
    },
    {
        "label": "Monterrey",
        "value": "Monterrey"
    },
    {
        "label": "Tulum",
        "value": "Tulum"
    },
    {
        "label": "Playa del Carmen",
        "value": "Playa del Carmen"
    },
    {
        "label": "Puerto Vallarta",
        "value": "Puerto Vallarta"
    },
    {
        "label": "Cozumel",
        "value": "Cozumel"
    },
    {
        "label": "Oaxaca",
        "value": "Oaxaca"
    },
    {
        "label": "San Miguel de Allende",
        "value": "San Miguel de Allende"
    },
    {
        "label": "Bangkok",
        "value": "Bangkok"
    },
    {
        "label": "Chiang Mai",
        "value": "Chiang Mai"
    },
    {
        "label": "Phuket",
        "value": "Phuket"
    },
    {
        "label": "Pattaya",
        "value": "Pattaya"
    },
    {
        "label": "Krabi",
        "value": "Krabi"
    },
    {
        "label": "Ayutthaya",
        "value": "Ayutthaya"
    },
    {
        "label": "Hua Hin",
        "value": "Hua Hin"
    },
    {
        "label": "Koh Samui",
        "value": "Koh Samui"
    },
    {
        "label": "Chiang Rai",
        "value": "Chiang Rai"
    },
    {
        "label": "Sukhothai",
        "value": "Sukhothai"
    },
    {
        "label": "Istanbul",
        "value": "Istanbul"
    },
    {
        "label": "Antalya",
        "value": "Antalya"
    },
    {
        "label": "Cappadocia",
        "value": "Cappadocia"
    },
    {
        "label": "Izmir",
        "value": "Izmir"
    },
    {
        "label": "Bodrum",
        "value": "Bodrum"
    },
    {
        "label": "Pamukkale",
        "value": "Pamukkale"
    },
    {
        "label": "Ankara",
        "value": "Ankara"
    },
    {
        "label": "Marmaris",
        "value": "Marmaris"
    },
    {
        "label": "Fethiye",
        "value": "Fethiye"
    },
    {
        "label": "Trabzon",
        "value": "Trabzon"
    },
    {
        "label": "Bali",
        "value": "Bali"
    },
    {
        "label": "Jakarta",
        "value": "Jakarta"
    },
    {
        "label": "Yogyakarta",
        "value": "Yogyakarta"
    },
    {
        "label": "Bandung",
        "value": "Bandung"
    },
    {
        "label": "Surabaya",
        "value": "Surabaya"
    },
    {
        "label": "Lombok",
        "value": "Lombok"
    },
    {
        "label": "Ubud",
        "value": "Ubud"
    },
    {
        "label": "Makassar",
        "value": "Makassar"
    },
    {
        "label": "Medan",
        "value": "Medan"
    },
    {
        "label": "Semarang",
        "value": "Semarang"
    },
    {
        "label": "Dubai",
        "value": "Dubai"
    },
    {
        "label": "Abu Dhabi",
        "value": "Abu Dhabi"
    },
    {
        "label": "Sharjah",
        "value": "Sharjah"
    },
    {
        "label": "Al Ain",
        "value": "Al Ain"
    },
    {
        "label": "Ajman",
        "value": "Ajman"
    },
    {
        "label": "Fujairah",
        "value": "Fujairah"
    },
    {
        "label": "Ras Al Khaimah",
        "value": "Ras Al Khaimah"
    },
    {
        "label": "Umm Al Quwain",
        "value": "Umm Al Quwain"
    },
    {
        "label": "Khor Fakkan",
        "value": "Khor Fakkan"
    },
    {
        "label": "Hatta",
        "value": "Hatta"
    },
    {
        "label": "Moscow",
        "value": "Moscow"
    },
    {
        "label": "Saint Petersburg",
        "value": "Saint Petersburg"
    },
    {
        "label": "Kazan",
        "value": "Kazan"
    },
    {
        "label": "Sochi",
        "value": "Sochi"
    },
    {
        "label": "Yekaterinburg",
        "value": "Yekaterinburg"
    },
    {
        "label": "Novosibirsk",
        "value": "Novosibirsk"
    },
    {
        "label": "Vladivostok",
        "value": "Vladivostok"
    },
    {
        "label": "Rostov-on-Don",
        "value": "Rostov-on-Don"
    },
    {
        "label": "Kaliningrad",
        "value": "Kaliningrad"
    },
    {
        "label": "Nizhny Novgorod",
        "value": "Nizhny Novgorod"
    },
    {
        "label": "Hanoi",
        "value": "Hanoi"
    },
    {
        "label": "Ho Chi Minh City",
        "value": "Ho Chi Minh City"
    },
    {
        "label": "Ha Long Bay",
        "value": "Ha Long Bay"
    },
    {
        "label": "Da Nang",
        "value": "Da Nang"
    },
    {
        "label": "Hoi An",
        "value": "Hoi An"
    },
    {
        "label": "Hue",
        "value": "Hue"
    },
    {
        "label": "Nha Trang",
        "value": "Nha Trang"
    },
    {
        "label": "Sapa",
        "value": "Sapa"
    },
    {
        "label": "Phu Quoc",
        "value": "Phu Quoc"
    },
    {
        "label": "Can Tho",
        "value": "Can Tho"
    },
    {
        "label": "Kuala Lumpur",
        "value": "Kuala Lumpur"
    },
    {
        "label": "George Town",
        "value": "George Town"
    },
    {
        "label": "Langkawi",
        "value": "Langkawi"
    },
    {
        "label": "Malacca",
        "value": "Malacca"
    },
    {
        "label": "Kota Kinabalu",
        "value": "Kota Kinabalu"
    },
    {
        "label": "Ipoh",
        "value": "Ipoh"
    },
    {
        "label": "Cameron Highlands",
        "value": "Cameron Highlands"
    },
    {
        "label": "Johor Bahru",
        "value": "Johor Bahru"
    },
    {
        "label": "Kuching",
        "value": "Kuching"
    },
    {
        "label": "Manila",
        "value": "Manila"
    },
    {
        "label": "Cebu City",
        "value": "Cebu City"
    },
    {
        "label": "Boracay",
        "value": "Boracay"
    },
    {
        "label": "Palawan",
        "value": "Palawan"
    },
    {
        "label": "Davao City",
        "value": "Davao City"
    },
    {
        "label": "Baguio",
        "value": "Baguio"
    },
    {
        "label": "Vigan",
        "value": "Vigan"
    },
    {
        "label": "Tagaytay",
        "value": "Tagaytay"
    },
    {
        "label": "Bohol",
        "value": "Bohol"
    },
    {
        "label": "Iloilo City",
        "value": "Iloilo City"
    },
    {
        "label": "Singapore",
        "value": "Singapore"
    },
    {
        "label": "Yangon",
        "value": "Yangon"
    },
    {
        "label": "Bagan",
        "value": "Bagan"
    },
    {
        "label": "Mandalay",
        "value": "Mandalay"
    },
    {
        "label": "Inle Lake",
        "value": "Inle Lake"
    },
    {
        "label": "Naypyidaw",
        "value": "Naypyidaw"
    },
    {
        "label": "Ngapali Beach",
        "value": "Ngapali Beach"
    },
    {
        "label": "Pyin Oo Lwin",
        "value": "Pyin Oo Lwin"
    },
    {
        "label": "Hpa-An",
        "value": "Hpa-An"
    },
    {
        "label": "Golden Rock",
        "value": "Golden Rock"
    },
    {
        "label": "Taunggyi",
        "value": "Taunggyi"
    },
    {
        "label": "Colombo",
        "value": "Colombo"
    },
    {
        "label": "Kandy",
        "value": "Kandy"
    },
    {
        "label": "Galle",
        "value": "Galle"
    },
    {
        "label": "Ella",
        "value": "Ella"
    },
    {
        "label": "Nuwara Eliya",
        "value": "Nuwara Eliya"
    },
    {
        "label": "Sigiriya",
        "value": "Sigiriya"
    },
    {
        "label": "Jaffna",
        "value": "Jaffna"
    },
    {
        "label": "Trincomalee",
        "value": "Trincomalee"
    },
    {
        "label": "Arugam Bay",
        "value": "Arugam Bay"
    },
    {
        "label": "Anuradhapura",
        "value": "Anuradhapura"
    }
]

export { cities, citiesComboBox };