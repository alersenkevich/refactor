import "./App.css";

import React, { FC, useState } from "react";

import LogoIcon from "./logo.svg";

interface Item {
  id: number;
  title: string;
}

interface Props {}

export const App: FC<Props> = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  const [items, setItems] = useState<Item[]>(assembleItemList());

  return (
    <div className="App">
      <div className="App-header">
        <img src={LogoIcon} className="App-logo" alt="logo" />
      </div>
      {/* Seems that is better to put this button at the end of jsx, but I don't know if this applies to the task or not  */}
      <div>
        <button type="button" className="App-button" onClick={handleClick}>
          Add More
        </button>
      </div>
      <div>
        {items.map(({ title, id }) => (
          <div key={title + id} className="App-item">
            Title is: {title}
          </div>
        ))}
      </div>
    </div>
  );

  function handleClick(): void {
    // The Function adds new items to the existing list
    setItems((prevState) => [...prevState, ...assembleItemList()]);
  }

  function assembleItemList(): Item[] {
    const itemList: Item[] = [];

    for (let i = 0; i < 20; i++) {
      itemList.push({ id: i, title: getTitle() });
    }

    return itemList;
  }

  function getTitle(): string {
    return Math.random()
      .toString()
      .split(".")[1]
      .split("")
      .reduce((acc, alphabetIndex) => acc + alphabet[Number(alphabetIndex)], "");
  }
};
