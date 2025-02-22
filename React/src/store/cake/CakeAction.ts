import { BUY_CAKE } from "./CakeActionTypes";

export const buyCake = (qty = 1) => {
  return {
    type: BUY_CAKE,
    payload: qty,
  };
};
