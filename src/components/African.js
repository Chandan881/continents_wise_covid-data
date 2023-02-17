import "./Asia.css";
import React, { useEffect, useState } from "react";

const African = () => {
  const [data, setData] = useState([]);



  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6361b18d5dmsh08d8963b44a29fep17c0d6jsn6096cdf46046',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa",
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6361b18d5dmsh08d8963b44a29fep17c0d6jsn6096cdf46046',
                'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
        }
      );
      const jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
    })();
  }, []);

  return (
    <div className="ritmid">
      <div className="headr">
        <div className="searchHead">
          <h1 className="livup">
            Africa Data <span className="smllsiz">-Live update</span>
          </h1>
          <input
            className="inptst"
            type="text"
            placeholder="Your Country"
          ></input>
        </div>
        <div className="Table-dark">
          <table className="table">
            <thead className="Thead">
              <tr className="fntsiz">
                <th className="forbd">NUM</th>
                <th className="forbd">COUNTRY</th>
                <th className="forbd">TOTAL CASE</th>
                <th className="forbd">NEW CASE</th>
                <th className="forbd">INFECTION RISK</th>
                <th className="forbd">
                  SERIOUS,<br></br>CRITICAL
                </th>
                <th className="forbd">ACTIVE CASES</th>
                <th className="forbd">TOTAL DEATHS</th>
                <th className="forbd">NEW DEATHS</th>
                <th className="forbd">CASE FATELITY RATE(CFR)</th>
              </tr>
            </thead>

            <tbody className="Thead">
              {data.map((item, ind) => (
                <tr key={ind} className="fntsiz">
                  <td className="tddsg yel">{item.rank}</td>
                  <td className="tddsg wht">{item.Country}</td>
                  <td className="tddsg grn">{item.TotalCases}</td>
                  <td className="tddsg grn">{item.NewCases}</td>
                  <td className="tddsg grn">{item.Infection_Risk}</td>
                  <td className="tddsg org">{item.Serious_Critical}</td>
                  <td className="tddsg yel">{item.ActiveCases}</td>
                  <td className="tddsg rid">{item.TotalDeaths}</td>
                  <td className="tddsg rid">{item.NewDeaths}</td>
                  <td className="tddsg blu">{item.Case_Fatality_Rate}</td>

                </tr>
              ))}

              {}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default African;