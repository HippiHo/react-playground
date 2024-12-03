import { useState } from "react";
import styled from "styled-components";

const ClockBorder = styled.div`
  border: solid grey 3px;
  border-radius: 8px;
  padding: 20px;
  width: 50vw;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const ClockTime = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const Clock = () => {
  const [time, setTime] = useState("");
  const checkTime = (i: number) => {
    let zeroNumberString: string;
    if (i < 10) {
      zeroNumberString = "0" + i;
      return zeroNumberString;
    } else {
      return i;
    }
  };

  const startTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m: string | number = today.getMinutes();
    let s: string | number = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    let newTime = h + ":" + m + ":" + s;
    setTime(newTime);
  };

  setTimeout(startTime, 1000);

  return (
    <ClockBorder>
      <ClockTime>{time}</ClockTime>
    </ClockBorder>
  );
};

export default Clock;
