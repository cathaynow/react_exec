import React, { useContext } from "react";

import FavoritesContext from "../store/favorite-context";
import { MeetupList } from "../components/meetups/MeetupList";

export const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>NO! Your Favorites</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};
