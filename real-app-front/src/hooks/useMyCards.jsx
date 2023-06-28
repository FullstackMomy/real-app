import { useState, useEffect } from "react";
import cardsService from "../services/cardsService";
import { useAuth } from "../context/auth.context";

export const useMyCards = () => {
  const [cards, setCards] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getCards = async () => {
      const { data } = await cardsService.getAll();
      setCards(data);
    };
    if (user?.biz) {
      getCards();
    }
  }, []);

  return cards;
};
