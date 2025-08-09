import { useGame } from "../useGame";

const List = ({ title, className, data }) => {
  const { userValue } = useGame();

  return (
    <div className={`list ${className}`}>
      <div className="list__title">{title}</div>
      <ul className="list__data">
        {data.map((card) => {
          if (userValue.includes(card)) {
            return <li>{card}</li>;
          }else{
            return <li>...</li>
          }
        })}
      </ul>
    </div>
  );
};

export default List;
