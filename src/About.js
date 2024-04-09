import React from "react";
import UserClass from "./components/UserClass";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        velit nec urna condimentum dictum. Nulla facilisi. Phasellus vel nisi
        quam. Sed eu nisi ac mauris efficitur congue. Integer volutpat urna
        quis tortor eleifend, nec vehicula mi mollis.
      </p>
      <p className="text-lg mb-4">
        Fusce vitae tortor at enim convallis pellentesque sit amet nec nulla.
        Morbi suscipit, neque non aliquam lacinia, mauris lorem rutrum lorem,
        eget lacinia nunc turpis vel justo.
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">User Information:</h2>
        <UserClass name="Rahul (Class)" />
      </div>
    </div>
  );
};

export default About;
