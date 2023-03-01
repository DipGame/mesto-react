export default function Card(props) {
    
  function handleClick() {
    props.onCardClick(props.card);
  } 

    return (
        <div className="element">
            <button className="element__delete button" type="button" />
            <img onClick={handleClick} className="element__image" alt={props.name} type="button" src={props.link}/>
            <div className="element__container-bottom">
              <h2 className="element__title">{props.name}</h2>
              <button className="element__like" type="button" />
              <h3 className="element__number">{props.likes}</h3>
            </div>
          </div>
    );
}