import './ImageCard.css'

function ImageCard({image,onMoveToFront}){
    return(
        <div className="image-card"> 
            <img src={image.url} alt={image.title}/>
            <button onClick={onMoveToFront}>Move to Front</button>
            <p>{image.title}</p>
            <p>Date:{image.date}</p>
        </div>
    );
}
 
export default ImageCard;