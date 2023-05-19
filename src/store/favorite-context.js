import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemsIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((prev) => {
      return prev.concat(favoriteMeetup);
    });
  }

  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemsIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemsIsFavorite: itemsIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
