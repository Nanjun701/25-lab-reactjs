import './ProfileCard.css'
import { useState } from 'react';

function ProfileCard(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-card">
      <h2>{props.emoji} {props.name}</h2>
      <p>Hobby: {props.hobby}</p>
      <button onClick={() => setLikes(likes + 1)}>
        ♥️ Likes: {likes}
      </button>
    </div>
  );
}

export default ProfileCard;
