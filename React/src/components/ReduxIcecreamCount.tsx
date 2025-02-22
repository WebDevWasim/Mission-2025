import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../store/icecream/IcecreamAction";

const ReduxIcecreamCount = () => {
  const noOfIcecreams = useSelector(({ icecream }) => icecream.noOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No Of Cackes - {noOfIcecreams}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
};

export default ReduxIcecreamCount;
