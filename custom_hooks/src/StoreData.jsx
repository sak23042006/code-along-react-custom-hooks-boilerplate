import { useEffect, useState } from "react";

function InputText(key, Value) {
  const Store_Local = localStorage.getItem(key);
  const Store_Session = sessionStorage.getItem(key);

  if (Store_Local) {
    return JSON.parse(Store_Local);
  }

  if (Store_Session) {
    return JSON.parse(Store_Session);
  }
  return Value;
}



function StoreData(key, Value) {

  const [input, setInput] = useState(() => InputText(key, Value));

  useEffect(() => {
    const Display = JSON.stringify(input);
    localStorage.setItem(key, Display);
    sessionStorage.setItem(key, Display);
  }, [key, input]);

  return [input, setInput];
}

export default StoreData;