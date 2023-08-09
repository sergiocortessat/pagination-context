import { useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    (async () => {
      let response = await fetch(url, { method });
      if (!response.ok) {
        setState({
          data: null,
          loading: false,
          error: "An error occurred",
        });
      }
      let data = await response.json();
      setState({
        data,
        loading: false,
        error: "",
      });
    })();
  }, [url, method]);
  return state;
};

export default useFetch;
