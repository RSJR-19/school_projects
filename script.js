const hobbyFrame = document.getElementById('hobbyFrame');
const foodFrame = document.getElementById('foodFrame');
const charFrame = document.getElementById('charFrame');

const hobbyTitle = document.getElementById('hobbyTitle');
const foodTitle = document.getElementById('foodTitle');
const charTitle = document.getElementById('charTitle');


const hobbyPics = [
    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFWLvo91NYJpEkN0z8ypIAQDfAbxx1BkDwA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSie2cOgkS5UgaXmj4gJzAMyIyGnTNJwOBUwg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfu3xzJ8bm2Blcdi4Fd-c5-IOwg_XdCdiz3Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7hvsGw7kmRON3uTWgChWbCGwj3du398evg&s"
]
const hobbyNames = [
    "Programming",
    "Playing Chess",
    "Reading Books",
    "Watching Movies",
    "Solving Puzzles"
]

const foodPics = [
    "https://yummykitchentv.com/wp-content/uploads/2023/08/champorado-recipe-500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46U8f-OzBwjwxxAl14x-MAO4HIEOyy9CflQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSj4YWPjHD3K6KOa1FwXwtlNk6RmXzJgPnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ejaDPu089k1l4gOhJT2ZDRWwV_Ru4TORDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72uGVG4_GrARTXVIxwlzjKaWc_KsFg8R0eA&s"
]
const foodNames = [
    "Champorado",
    "Beef Pares",
    "Chicken Adobo",
    "Ginisang Togue",
    "Mango Sago"
]

const charPics = [
    "https://www.sideshow.com/storage/product-images/913435/batman-armory-with-bruce-wayne-20_dc-comics_square.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjNs3DV8Agv5EC1RIXqFPxoSNukfwRREUxA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzDoCjj9bdKLLVEEHtkOP_m73yEdlIPWF9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOCGQkddJAsF7XCn4qpDMf7mta6lybnKJmA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfsZQarIEX766g_zHv7XnJRl0iGGwf9q92Q&s"
]
const charNames = [
    "Bruce Wayne (Batman)",
    "The Joker (Batman)",
    "Anakin Skywalker (Star Wars)",
    "Morpheus (Matrix)",
    "Lex Luthor (Superman)"
]



let index = 0; 

let intervalFrame = setInterval(()=>{
    hobbyFrame.src = hobbyPics[index % hobbyPics.length];
    hobbyTitle.innerHTML = hobbyNames[index % hobbyNames.length];
    hobbyFrame.alt = hobbyNames[index % hobbyNames.length]
    hobbyFrame.title = hobbyNames[index % hobbyNames.length]
    

    foodFrame.src = foodPics[index % foodPics.length];
    foodTitle.innerHTML = foodNames[index % foodNames.length];
    foodFrame.alt = foodNames[index % foodNames.length]
    foodFrame.title = foodNames[index % foodNames.length]

    charFrame.src = charPics[index % charPics.length];
    charTitle.innerHTML = charNames[index % charNames.length];
    charFrame.alt = charNames[index % charNames.length]
    charFrame.title = charNames[index % charNames.length]

    index ++
},2000)