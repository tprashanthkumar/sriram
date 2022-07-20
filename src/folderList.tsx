import React from "react";
import "./folderlist.css";

interface IFolderList {
  list: any[];
  onSelectFolder: (folderItem: any) => void;
}

export const FolderList = (props: IFolderList) => {
  return (
    <div>
      {props.list.map((i) => {
        return (
          <div
            onClick={props.onSelectFolder.bind(null, i)}
            className="folderItem"
          >
            {i.name}
          </div>
        );
      })}
    </div>
  );
};
