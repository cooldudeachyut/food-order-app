import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../ui/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setamountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = Number(enteredAmount.trim());

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a vlid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
