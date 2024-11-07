// placeDetail.js
const placesData = {
    amaravati: {
      name: "Amaravati",
      description: "Amaravati is known for its ancient Buddhist stupa...",
      image: "/images/amravati.jpg", // Ensure this image path is correct
      extraPlaces: [
        {
          id: 1,
          name: "Bhattiprolu",
          description: "A historical site known for its archaeological significance.",
          image: "/images/bhattiprolu.jpg",
        },
        {
          id: 2,
          name: "Guntur",
          description: "Famous for its rich cultural heritage.",
          image: "/images/guntur.jpg",
        },
      ],
    },
    tirupati: {
      name: "Tirupati",
      description: "Tirupati is famous for its Venkateswara Temple...",
      image: "/images/tirupati.jpg", // Ensure this image path is correct
      extraPlaces: [
        {
          id: 1,
          name: "Sri Kalahasti",
          description: "Famous for the Kalahasteeswara Temple.",
          image: "/images/sri_kalahasti.jpg",
        },
        {
          id: 2,
          name: "Chittoor",
          description: "Known for its rich heritage and temples.",
          image: "/images/chittoor.jpg",
        },
      ],
    },
    // Add more places here if needed...
  };
  
  export default placesData;
  
 
  