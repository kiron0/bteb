import { useEffect, useState } from "react";

const useTitle = (titleText: string) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = titleText + " | BTEB Result Management System";
    setTitle(titleText);
  }, [titleText]);

  return [title];

};

export default useTitle;
