import React from "react";
import Item from "./Item";

const ItemList = ({ menu_id, items, updateItem, deleteItem }) => (
  <div>
    {items.map(item => {
      if (item.menu_id === menu_id) {
        return <Item
          key={item.id}
          menu_id={menu_id}
          {...item}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      }
    }
    )}

  </div>
);

export default ItemList;