import React from "react";
import "./folderlist.css";

interface IContent {
  //   list: any[];
  mailList: any[];
}

export const Content = (props: IContent) => {
  return (
    <div>
      {props.mailList.map((i) => {
        return <div className="folderItem">{i.subject}</div>;
      })}
    </div>
  );
};
