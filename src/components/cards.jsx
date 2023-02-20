import "../styles/cards.css";

const Cards = ({children}) => {
  return (
    <div className="container-cards">
        {children}
    </div>
  );
};

export default Cards;
