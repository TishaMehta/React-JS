import { useEffect } from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetch("https://63213c8efd698dfa29f447a8.mockapi.io/SmartPhones")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSmartphones(res);
      });
  }, []);

  const formatedsmartphone = smartphones.map((smart) => {
    return (
      <>
        
        <Link to={"../smartphone/"+smart.id}>
       <h4 style={{fontsize:100}}>{smart.SmartphoneName}</h4>
       </Link>
       <img src={smart.SmartPhoneImage} alt="asdf" width="20%" hight="20%"/>
      </>
    );
  });
  return formatedsmartphone;
}
export default  Smartphones;


