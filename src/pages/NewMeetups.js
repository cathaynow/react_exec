import React from "react";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

export const NewMeetups = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://react-test-374be-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
