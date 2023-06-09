import classes from "./MeetupItem.module.css";
import { Card } from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

export const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemsIsFavorite = favoritesCtx.itemsIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemsIsFavorite) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemsIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
