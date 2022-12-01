import { useState } from "react";

const useShowMore = (initialCount) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const incrementVisibleCount = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return [visibleCount, incrementVisibleCount];
};

export default useShowMore;
