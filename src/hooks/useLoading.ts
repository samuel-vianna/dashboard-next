import React from "react";

const useLoading = () => {
  const [loading, setLoading] = React.useState(false);
  const toggleLoading = (value: boolean) => setLoading(value);

  return { loading, toggleLoading };
};

export default useLoading;
