import { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [db, setDb] = useState([]);



  const LoadinData = (param)=>{
    setDb([...db,param])
    if (db.length > 0){
        for (const iterator of db) {
          console.log(iterator)
        }
    }
    
}
  const data = { db, LoadinData}

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};
export { ApiProvider };
export default ApiContext;
