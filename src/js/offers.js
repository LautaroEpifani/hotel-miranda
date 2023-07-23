let roomsList = [
  {
    title: "Queen Bed A-12324",
    image: "../../images/home/room2.jpg",
    room_type: "Single Bed",
    room_number: 10,
    amenities: [
      { a_name: "wifi", icon: "wifi", isChecked: true },
      { a_name: "air_conditioner", icon: "air_conditioner" },
      { a_name: "double_bed", icon: "double_bed" },
      { a_name: "towels", icon: "towels", isChecked: true },
      { a_name: "shop_near", icon: "shop_near" },
      { a_name: "cleaning", icon: "cleaning" },
      { a_name: "breakfast", icon: "breakfast" },
      { a_name: "kitchen", icon: "kitchen" },
      { a_name: "shower", icon: "shower" },
    ],
    price: 245,
    discount: 10,
    offer: "yes",
    offer_price: 145,
    description: "Beautiful and cozy room ",
    cancellation:
      "Any cancellation or reschedule made less than 10 days will result in a cancellation fee. The amount of the fee will be equal to 20% of the reserved services or $100, whichever is more.",
    status: "Avaliable",
  },
  {
    title: "Classic Double Bed B-12324",
    image: "../../images/home/room3.jpg",
    room_type: "Double Bed",
    room_number: 3,
    amenities: [
      { a_name: "wifi", icon: "wifi", isChecked: true },
      { a_name: "air_conditioner", icon: "air_conditioner" },
      { a_name: "double_bed", icon: "double_bed" },
      { a_name: "towels", icon: "towels" },
      { a_name: "shop_near", icon: "shop_near" },
      { a_name: "cleaning", icon: "cleaning" },
      { a_name: "breakfast", icon: "breakfast" },
      { a_name: "kitchen", icon: "kitchen" },
      { a_name: "shower", icon: "shower" },
    ],
    price: 345,
    discount: 10,
    offer: "yes",
    offer_price: 245,
    description: "Beautiful and cozy room ",
    cancellation:
      "Any cancellation or reschedule made less than 10 days will result in a cancellation fee. The amount of the fee will be equal to 20% of the reserved services or $100, whichever is more.",
    status: "Booked",
  },
  {
    title: "Luxury Room  D-1231",
    room_type: "Double Superior",
    image: "../../images/home/room7.jpg",
    room_number: 2,
    amenities: [
      { a_name: "wifi", icon: "wifi", isChecked: true },
      { a_name: "air_conditioner", icon: "air_conditioner" },
      { a_name: "double_bed", icon: "double_bed" },
      { a_name: "towels", icon: "towels" },
      { a_name: "shop_near", icon: "shop_near" },
      { a_name: "cleaning", icon: "cleaning" },
      { a_name: "breakfast", icon: "breakfast" },
      { a_name: "kitchen", icon: "kitchen" },
      { a_name: "shower", icon: "shower" },
    ],
    price: 345,
    discount: 10,
    offer: "yes",
    offer_price: 300,
    description: "Beautiful and cozy room ",
    cancellation:
      "Any cancellation or reschedule made less than 10 days will result in a cancellation fee. The amount of the fee will be equal to 20% of the reserved services or $100, whichever is more.",
    status: "Avaliable",
  },
  {
    title: "Luxury Suite Room  X-1342",
    image: "../../images/home/room5.jpg",
    room_type: "Suite",
    room_number: 5,
    amenities: [
      { a_name: "wifi", icon: "wifi", isChecked: true },
      { a_name: "air_conditioner", icon: "air_conditioner" },
      { a_name: "double_bed", icon: "double_bed" },
      { a_name: "towels", icon: "towels" },
      { a_name: "shop_near", icon: "shop_near" },
      { a_name: "cleaning", icon: "cleaning" },
      { a_name: "breakfast", icon: "breakfast" },
      { a_name: "kitchen", icon: "kitchen" },
      { a_name: "shower", icon: "shower" },
    ],
    price: 345,
    discount: 10,
    offer: "yes",
    offer_price: 300,
    description: "Beautiful and cozy room ",
    cancellation:
      "Any cancellation or reschedule made less than 10 days will result in a cancellation fee. The amount of the fee will be equal to 20% of the reserved services or $100, whichever is more.",
    status: "Avaliable",
  },
  {
    title: "King's Bed X-2342",
    image: "../../images/home/room6.jpg",
    room_type: "Single Bed",
    room_number: 10,
    amenities: [
      { a_name: "wifi", icon: "wifi", isChecked: true },
      { a_name: "air_conditioner", icon: "air_conditioner" },
      { a_name: "double_bed", icon: "double_bed" },
      { a_name: "towels", icon: "towels" },
      { a_name: "shop_near", icon: "shop_near" },
      { a_name: "cleaning", icon: "cleaning" },
      { a_name: "breakfast", icon: "breakfast" },
      { a_name: "kitchen", icon: "kitchen" },
      { a_name: "shower", icon: "shower" },
    ],
    price: 245,
    offer: "yes",
    offer_price: 145,
    cancellation:
      "Any cancellation or reschedule made less than 10 days will result in a cancellation fee. The amount of the fee will be equal to 20% of the reserved services or $100, whichever is more.",
    status: "Booked",
    description: "Beautiful and Cozy Room",
  },
];

document.querySelector(".offer").innerHTML = roomsList.map((room) =>
      `<div class="double-bed__container">
        <img class="offer-image" src=${room.image} alt="" />
        <div class="sub-container">
          <div class="title-container">
            <div class="price-container">
              <div class="original-container">
                <h2 class="original">$500</h2>
                <span class="night">/Night</span>
              </div>
              <h2 class="discount">$345<span class="night">/Night</span></h2>
            </div>
          </div>
          <h6>${room.room_type}</h6>
          <h1>${room.title}</h1>
       
        <div class="text-container">
          <div class="desktop">
            <div class="container-text">
              <p class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                vitae, suscipit expedita quaerat repudiandae, magnam, voluptate
                saepe placeat magni eveniet quo repellat! Tenetur, facere. Magni
                molestias distinctio nostrum quam eaque corporis cupiditate neque
                suscipit? Sint possimus culpa sed mollitia voluptatum doloremque
                beatae rerum esse nemo in debitis id accusantium iure, nihil
                recusandae vitae illo quos ut aliquid omnis sapiente? Facere
                minima eum ut culpa fuga deleniti veritatis eaque eligendi,
                dolores inventore consequatur provident nesciunt modi. Adipisci,
                ratione quasi minima reprehenderit tenetur et praesentium aliquid!
                Blanditiis fugiat vel dolorem illo, numquam est suscipit odit
                consequatur, labore aspernatur esse corporis consectetur
                excepturi.
              </p>
              <button>Book now</button>
            </div>
            <div class="container-grid">
              <div class="row">
                <div class="column">
                  <h6>
                    <span
                      ><img
                        src="./assets/acondicionador-de-aire.png"
                        alt="" /></span
                    >Air conditioner
                  </h6>
                  <h6>
                    <span><img src="./assets/desayuno.png" alt="" /></span
                    >Breakfast
                  </h6>
                  <h6>
                    <span><img src="./assets/cleaning.png" alt="" /></span
                    >Cleaning
                  </h6>
                  <h6>
                    <span><img src="./assets/comida.png" alt="" /></span>Grocery
                  </h6>
                  <h6>
                    <span><img src="./assets/sex-shop.png" alt="" /></span>Shop
                    near
                  </h6>
                  <h6>
                    <span><img src="./assets/apoyo.png" alt="" /></span>24/7
                    Online Support
                  </h6>
                  <h6>
                    <span><img src="./assets/seguridad.png" alt="" /></span
                    >Smart Security
                  </h6>
                </div>
                <div class="column">
                  <h6>
                    <span><img src="./assets/wifi.png" alt="" /></span>High
                    speed Wifi
                  </h6>
                  <h6>
                    <span><img src="./assets/cocina.png" alt="" /></span>Kitchen
                  </h6>
                  <h6>
                    <span><img src="./assets/ducha.png" alt="" /></span>Shower
                  </h6>
                  <h6>
                    <span><img src="./assets/cama.png" alt="" /></span>Single
                    Bed
                  </h6>
                  <h6>
                    <span><img src="./assets/toalla.png" alt="" /></span>Towers
                  </h6>
                  <h6>
                    <span><img src="./assets/clave.png" alt="" /></span>Stron
                    Locker
                  </h6>
                  <h6>
                    <span><img src="./assets/lider.png" alt="" /></span>Expert
                    Team
                  </h6>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="amenities__container">
        <h1 class="title">Amenities</h1>
        <div class="container-grid">
          <div class="row">
            <div class="column">
              <h6>
                <span
                  ><img
                    src="./assets/acondicionador-de-aire.png"
                    alt="" /></span
                >Air conditioner
              </h6>
              <h6>
                <span><img src="./assets/desayuno.png" alt="" /></span>Breakfast
              </h6>
              <h6>
                <span><img src="./assets/cleaning.png" alt="" /></span>Cleaning
              </h6>
              <h6>
                <span><img src="./assets/comida.png" alt="" /></span>Grocery
              </h6>
              <h6>
                <span><img src="./assets/sex-shop.png" alt="" /></span>Shop near
              </h6>
              <h6>
                <span><img src="./assets/apoyo.png" alt="" /></span>24/7 Online
                Support
              </h6>
              <h6>
                <span><img src="./assets/seguridad.png" alt="" /></span>Smart
                Security
              </h6>
            </div>
            <div class="column">
              <h6>
                <span><img src="./assets/wifi.png" alt="" /></span>High speed
                Wifi
              </h6>
              <h6>
                <span><img src="./assets/cocina.png" alt="" /></span>Kitchen
              </h6>
              <h6>
                <span><img src="./assets/ducha.png" alt="" /></span>Shower
              </h6>
              <h6>
                <span><img src="./assets/cama.png" alt="" /></span>Single Bed
              </h6>
              <h6>
                <span><img src="./assets/toalla.png" alt="" /></span>Towers
              </h6>
              <h6>
                <span><img src="./assets/clave.png" alt="" /></span>Stron Locker
              </h6>
              <h6>
                <span><img src="./assets/lider.png" alt="" /></span>Expert Team
              </h6>
            </div>
          </div>
        </div>
        <button>Book now</button>
        </div>
        `
  ).join("");
