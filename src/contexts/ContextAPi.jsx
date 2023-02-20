import { createContext, useState } from "react";
import fruit from "../json/api.json";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [db, setDb] = useState(fruit);
  const data = db;
  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};
export { ApiProvider };
export default ApiContext;
