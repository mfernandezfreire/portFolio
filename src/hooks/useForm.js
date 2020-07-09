import { useState } from "react";
export default (initialVal) => {
  const [state, setState] = useState(initialVal);
  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const resetState = () => {
    setState({
      email: "",
      subject: "",
      message: "",
    });
  };
  return [state, handleState, resetState];
};
