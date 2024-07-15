import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function SmartphonesDetail() {
  let params = useParams();
  const navigate = useNavigate();
  const [Smartphone, setSmartphone] = useState({});
  useEffect(() => {
    fetch(
      "https://63213c8efd698dfa29f447a8.mockapi.io/SmartPhones/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSmartphone(res);
      });
  }, []);
  return (
    <>
      <table
        style={{
          backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjk9MdlAcSmZXa62CbFZ6TUhiONuvSTgfdA&usqp=CAU')",
          width:"700px",height:"200px",border:"5px solid purple"
        }}
      >
        <tr>
          <td style={{ fontSize:"1.5em", fontWeight:"bold"}}>SmartphoneName:</td>
          <td style={{ fontSize:"1.5em"}}>{Smartphone.SmartphoneName}</td>
        </tr>
        <tr>
          <td style={{ fontSize:"1.5em", fontWeight:"bold"}}>SmartphoneModel:</td>
          <td style={{ fontSize:"1.5em"}}>
            {Smartphone.SmartphoneModel} 
          </td>
        </tr>
        <tr>
          <td style={{ fontSize:"1.5em", fontWeight:"bold"}}>SmartphoneMaker:</td>
          <td style={{ fontSize:"1.5em"}}>{Smartphone.SmartphoneMaker}</td>
        </tr>
        <tr>
          <td style={{fontSize:"1.5em", fontWeight:"bold"}}>SmartPhoneDecription:</td>
          <td style={{ fontSize:"1.5em"}}>{Smartphone.SmartPhoneDecription}</td>
        </tr>
        
        <tr>
          <td style={{marginRight:"50%" , fontSize:"1.5em", fontWeight:"bold"}}>SmartPhoneImage:</td>
          <td style={{ fontSize:"1.5em"}} ><img src={Smartphone.SmartPhoneImage} style={{height:"30%", width:"30%"}}/></td>
        </tr>
        
        <tr>
          <td style={{ fontSize:"1.5em", fontWeight:"bold"}}>SmartPhonePrice:</td>
          <td style={{ fontSize:"1.5em"}}>{Smartphone.SmartPhonePrice}</td>
        </tr>
        <tr>
          <td>
            <button 
              style={{color:"red"}}
              onClick={() => {
                fetch(
                  "https://63213c8efd698dfa29f447a8.mockapi.io/SmartPhones/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/SmartPhones");
                });
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              style={{color:"red"}}
              onClick={() => {
                navigate("/Smartphone/edit/" + params.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default SmartphonesDetail;
