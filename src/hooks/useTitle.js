import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Playful Delights | ${title}`;
  }, [title]);
};

export default useTitle;
