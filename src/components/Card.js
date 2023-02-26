export default function Card(card) {
    
    function handleClick() {
        props.onCardClick(props.card);
      }  

    return (
        <div className="element">
            <button className="element__delete button" type="button" />
            <img className="element__image" alt={card.nameImage} type="button" src={card.linkImage}/>
            <div className="element__container-bottom">
              <h2 className="element__title">{card.nameImage}</h2>
              <button className="element__like" type="button" />
              <h3 className="element__number">{card.likesImage}</h3>
            </div>
          </div>
    );
}