import React, { useState, useEffect } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    const existingFriends = [
      { id: 1, name: 'John Doe', email: 'john@example.com', dob: '1990-05-15', gender: 'male', picture: 'https://randomuser.me/api/portraits/men/1.jpg' },
      // ... andra vänner
    ];
    setFriends(existingFriends);
  }, []);

  const handleAddFriend = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      const randomFriend = data.results[0];

      const newFriend = {
        id: friends.length + 1,
        name: `${randomFriend.name.first} ${randomFriend.name.last}`,
        email: randomFriend.email,
        dob: randomFriend.dob.date.substring(0, 10),
        gender: randomFriend.gender,
        picture: randomFriend.picture.large,
      };

      setFriends([...friends, newFriend]);
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const handleToggleDetails = (friendId) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [friendId]: !prevDetails[friendId],
    }));
  };

  const handleFilterFriends = (gender) => {
    
  };

  const handleSortFriends = (sortType) => {
    
  };

  return (
    <div>
      <h1>Mina Vänner</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.picture} alt={friend.name} />
            <strong>{friend.name}</strong>
            <button onClick={() => handleToggleDetails(friend.id)}>
              {showDetails[friend.id] ? 'Dölj Detaljer' : 'Visa Detaljer'}
            </button>
            {showDetails[friend.id] && (
              <div>
                <p>Email: {friend.email}</p>
                <p>Födelsedatum: {friend.dob}</p>
                <p>Kön: {friend.gender}</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      <button onClick={handleAddFriend}>Lägg till ny vän</button>

      <div>
        <label>
          Filtrera efter kön:
          <select onChange={(e) => handleFilterFriends(e.target.value)}>
            <option value="">Alla</option>
            <option value="male">Man</option>
            <option value="female">Kvinna</option>
          </select>
        </label>

        <label>
          Sortera efter:
          <select onChange={(e) => handleSortFriends(e.target.value)}>
            <option value="name">Förnamn</option>
            <option value="dob">Ålder</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Friends;
