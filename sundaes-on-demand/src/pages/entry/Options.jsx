
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import Row from "react-bootstrap/Row";
import axios from "axios";
export default function Options({optionType}) {
  // optionType is "scoops" or "toppings"
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((err) => {
        // TODO handle response error
      });
  }, [optionType]);
  //TODO replace null with ToppingOption once available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption ;

  const OptionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <Row>{OptionItems}</Row>;
}
