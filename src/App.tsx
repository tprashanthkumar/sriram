import React from "react";
import "./App.css";
import { Content } from "./content";
import { FolderList } from "./folderList";

const App = () => {
  const [mailListData, setMailListData] = React.useState<any[]>([]);

  const folderArray = [
    { name: "inbox", id: "inbox" },
    { name: "sent", id: "sent" },
    { name: "spam", id: "spam" },
  ];

  const mailList = [
    { subject: "sub1", folder: "inbox", id: "mail1" },
    { subject: "sub2", folder: "sent", id: "mail2" },
    { subject: "sub3", folder: "spam", id: "mail3" },
    { subject: "sub4", folder: "spam", id: "mail4" },
  ];

  const handleSelectFolder = (selectedFolder: any) => {
    const selectedFolderMails = mailList.filter(
      (i) => i.folder === selectedFolder.id
    );
    setMailListData(selectedFolderMails);
  };

  return (
    <div>
      <p>Welcome to Gmail 2.0</p>
      <div className="parentContainer">
        <div className="folderListContainer">
          <FolderList list={folderArray} onSelectFolder={handleSelectFolder} />
        </div>
        <div className="folderContentContainer">
          <Content mailList={mailListData} />
        </div>
      </div>
    </div>
  );
};

export default App;
