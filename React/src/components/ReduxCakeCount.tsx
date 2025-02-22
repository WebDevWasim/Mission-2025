import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../store/cake/CakeAction";

const ReduxCakeCount = () => {
  const noOfCakes = useSelector(({ cake }) => cake.noOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No Of Cackes - {noOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(buyCake(5))}>Buy 5 Cakes</button>
    </div>
  );
};

export default ReduxCakeCount;
