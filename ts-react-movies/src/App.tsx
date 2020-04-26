import React from "react";
import Greetings from "./Greetings";

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function App({ firstName, lastName }: Person) {
  let user = new Student("Lee", "jae", "min");
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <>
      <div>
        Hello, {firstName} {lastName}
      </div>
      <div>
        {user.fullName} {user.firstName}
      </div>
      <div>-------------------------------------------------------------</div>
      <Greetings name="Ya" mark="!" onClick={onClick} />
    </>
  );
}
export default App;
