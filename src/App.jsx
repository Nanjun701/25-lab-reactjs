import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome/Welcome.jsx'
import ProfileCard from './Components/ProfileCard/ProfileCard.jsx'
import ImageCard from './Components/ImageCard/ImageCard.jsx'
import imageData from "./data/images.json";

function App() {
  const name ="Nanjun";
  const fact = "11111";
  const [images, setImages] = useState([
    {id: 1, url:"src/assets/images/1.JPG", title:"1"},
    {id: 2, url:"src/assets/images/2.JPG", title:"2"}
  ])
  const moveImageToFront = (index) => {
    //stores the new image array in memory with the selected image at the front
    const newImages = [...images]; 
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
    setImages(newImages);
  };
  // const [images, setImages] = useState(imageData);
  return (
    <>        
    <Welcome name="Nanjun"/>
    <h2>Hello, {name}!</h2>
    <p>{fact}</p>
    <ProfileCard name="Rachel" hobby="Hiking" emoji="🐱" />

    <div className="image-card">
      {images.map((img, i) => (
        <ImageCard
          key={img.id}
          image={img}
          onMoveToFront={() => moveImageToFront(i)}
        />
      ))}
    </div>

    <button
      onClick={() =>
        setImages([...images].sort(() => Math.random() - 0.5))
    }
    >
      Shuffle Images
    </button>
    </>
  );
}

export default App
