import logoPen from '../images/Vector.png';
import { api } from '../utils/Api.js';
import { useState, useEffect } from 'react';
import Card from './Card.js';

export default function Main(props) {

  const [state, setState] = useState({
    userName: '',
    userDescription: '',
    userAvatar: '',
  });

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setState({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar,
        })
      })

  }, [])

  useEffect(() => {
    api.getAllCards()
      .then((data) => {
        const newCards = data.map((card) => {
          return {
            cName: card.name,
            cLink: card.link,
            cLikes: card.likes.length
          }
        })
        console.log(newCards)
        setCards(newCards)
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${state.userAvatar})` }}>
          <img
            className="profile__avatar-pen"
            src={logoPen}
            alt="Ручка"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{state.userName}</h1>
          <h2 className="profile__profession">{state.userDescription}</h2>
        </div>
        <button className="profile__edit-button" type="button" onClick={props.onEditProfile} />
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="elements">
        {
          cards.map((card) => {
            return <Card onClick={props.onCardClick} nameImage={card.cName} linkImage={card.cLink} likesImage={card.cLikes}/>
          })
        }
      </section>
    </main>
  );
}