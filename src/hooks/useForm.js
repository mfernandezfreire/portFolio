import { useState } from "react";
export default (initialVal) => {
  const [state, setState] = useState(initialVal);
  const handleState = (e) => {
    console.log(e.target.name);
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
