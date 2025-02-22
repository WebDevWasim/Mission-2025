import { useReducer } from "react";

const initialFormValue = {
  name: "",
  description: "",
  course: "react",
};

const formControlActions = {
  NAME: "NAME",
  DESCRIPTION: "DESCRIPTION",
  COURSE: "COURSE",
};
const { NAME, DESCRIPTION, COURSE } = formControlActions;

const formControlReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAME:
      return { ...state, name: payload };
    case DESCRIPTION:
      return { ...state, description: payload };
    case COURSE:
      return { ...state, course: payload };
    default:
      return state;
  }
};

const ControlledComp = () => {
  const [formControls, dispatch] = useReducer(
    formControlReducer,
    initialFormValue
  );

  const formDispatcher = (type, e) => {
    dispatch({
      type,
      payload: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({ formControls });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={formControls.name}
            onChange={(e) => formDispatcher(NAME, e)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={formControls.description}
            onChange={(e) => formDispatcher(DESCRIPTION, e)}
          />
        </label>
      </div>
      <div>
        <select
          value={formControls.course}
          onChange={(e) => formDispatcher(COURSE, e)}
        >
          Course
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComp;
