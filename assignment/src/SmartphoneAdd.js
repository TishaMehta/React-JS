import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Smartphones from "./Smartphones";

export default function SmartphoneAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
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
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>Enter Smartphonename</td>
          <td>:</td>
          <td>
            <input
              value={data.SmartphoneName}
              onChange={(e) => {
                setData({ ...data, SmartphoneName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter SmartPhoneImage</td>
          <td>:</td>
          <td>
            <input
              value={data.SmartPhoneImage}
              onChange={(e) => {
                setData({ ...data, SmartPhoneImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter SmartphoneModel</td>
          <td>:</td>
          <td>
            <input
              value={data.SmartphoneModel}
              onChange={(e) => {
                setData({ ...data, SmartphoneModel: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter SmartphoneMaker</td>
          <td>:</td>
          <td>
            <input
              value={data.SmartphoneMaker}
              onChange={(e) => {
                setData({ ...data, SmartphoneMaker: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter SmartPhoneDecription</td>
          <td>:</td>
          <td>
            <input
              value={data.SmartPhoneDecription}
              onChange={(e) => {
                setData({ ...data, SmartPhoneDecription: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        
        <tr>
          <td>Enter SmartPhonePrice</td>
          <td>:</td>
          <td>
            <input
              value={data.SmartPhonePrice}
              onChange={(e) => {
                setData({ ...data, SmartPhonePrice: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        


        <tr>
          <td colSpan="3">
            <button
              onClick={() => {
                if (params.id > 0) {
                } else {
                  fetch(
                    "https://63213c8efd698dfa29f447a8.mockapi.io/SmartPhones" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/SmartPhones");
                  });
                }
                fetch("https://63213c8efd698dfa29f447a8.mockapi.io/SmartPhones", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(() => {
                  navigate("/SmartPhones");
                });
              }}
            >
              {params.id > 0 && "Edit"}
              {!(params.id > 0) && "Add"}
              smartphone
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
