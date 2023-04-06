import { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [db, setDb] = useState([]);

  const LoadinData = (param) => {
    
    if (db.indexOf ( param ) === - 1) {
      setDb([...db, param]);
    }
  };
  const data = { db, LoadinData };

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};
export { ApiProvider };
export default ApiContext;
