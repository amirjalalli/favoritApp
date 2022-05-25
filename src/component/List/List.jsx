import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userReducer.items);
  console.log(list);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "fetchList", payload: json }));
  }, [list]);
  console.log();

  return <div></div>;
};

export default List;
