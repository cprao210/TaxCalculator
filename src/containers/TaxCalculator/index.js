import React, { useCallback, useState } from "react";
import InputBox from "../../components/InputBox";
import { getIncomeTax } from "./utils";

const initialState = { income: "", age: "" };

const TaxCalculator = () => {
  const [income, setIncome] = useState(initialState.income);
  const [age, setAge] = useState(initialState.age);

  const handleInput = useCallback((e) => {
    const { value } = e.target;
    setIncome(value);
  }, []);

  const handleAge = useCallback((e) => {
    const { value } = e.target;
    setAge(value);
  }, []);

  return (
    <div className="taxCalculatorModel">
      <div className="inputModel">
        <InputBox
          value={income}
          onChange={handleInput}
          name={"income"}
          id={"income"}
        />
        <InputBox value={age} onChange={handleAge} name={"age"} id={"age"} />
      </div>

      <div className="outputModel">totalTax: {getIncomeTax(income, age)}</div>
    </div>
  );
};

export default TaxCalculator;
