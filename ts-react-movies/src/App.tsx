import React from "react";

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
  return (
    <>
      <div>
        Hello, {firstName} {lastName}
      </div>
      <div>
        {user.fullName} {user.firstName}
      </div>
    </>
  );
}
export default App;
