import React, { useEffect, useState } from "react";
import { MeetupList } from "../components/meetups/MeetupList";

export const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState();
  const [meetData, setMeetData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-test-374be-default-rtdb.firebaseio.com/meetup.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>로딩중...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetData} />
    </section>
  );
};
