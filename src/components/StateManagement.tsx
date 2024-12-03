import { useState } from "react";
import styled from "styled-components";

const Border = styled.div`
  border: solid grey 3px;
  border-radius: 8px;
  padding: 20px;
  width: 50vw;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 20px;
  flex-direction: column;
`;

const Output = styled.div`
  background-color: lightgrey;
  border-radius: 8px;
  padding: 10px;
  flex: 4;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  background-color: #ff00be;
  color: white;
  border-radius: 8px;
  padding: 10px;
  flex: 1;
  cursor: pointer;
`;

interface Person {
  firstName: string;
  lastName: string;
  fullName: () => string;
}

const StateManagement = () => {
  const [fruit, setFruit] = useState<string>("banana");
  const [numbersArray, setNumbersArray] = useState<number[]>([1]);
  const [person, setPerson] = useState<any>({
    firstName: "Simone",
    lastName: "Müller",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  });

  const totalFruits = (numbersArray: number[]) => {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
    }
    return sum;
  };

  const updateState = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      firstName: { value: string };
      newNumber: { value: number };
      fruit: { value: string };
    };
    setPerson({ ...person, firstName: target.firstName.value });
    setNumbersArray([...numbersArray, target.newNumber.value | 0]);
    setFruit(target.fruit.value);

    target.firstName.value = "";
    target.newNumber.value = 0;
    target.fruit.value = "";
  };

  return (
    <Border>
      <Output>
        <b>{person.fullName()}</b> eats{" "}
        <b>
          {totalFruits(numbersArray) + " "}
          {totalFruits(numbersArray) > 1 ? fruit + "s" : fruit}
        </b>
        .
      </Output>
      <StyledForm onSubmit={updateState}>
        <label htmlFor="firstName">
          First name: <input id="firstName" type="text" />
        </label>
        <label htmlFor="newNumber">
          Adds to sum: <input id="newNumber" type="number" />
        </label>
        <label htmlFor="fruit">
          Fruit: <input id="fruit" type="text" />
        </label>
        <UpdateButton type="submit">Update State</UpdateButton>
      </StyledForm>
    </Border>
  );
};

export default StateManagement;
