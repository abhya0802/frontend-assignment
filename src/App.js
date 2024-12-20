import React, { useState } from "react";
import { useEffect } from "react";
import "./style/app.css";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const renderPaginationComponent = () => {
    const noOfPages = Array.from({ length: Math.ceil(data?.length / 5) });
    {
      page < data?.length / 5 && <button> ▶️</button>;
    }
    return (
      <div className="paginationContainer">
        {page > 1 && (
          <button
            className="paginationButton"
            onClick={() => setPage(page - 1)}
          >
            ◀️
          </button>
        )}
        {noOfPages.map((_, i) => (
          <button
            className={
              i + 1 === page ? "activePaginationButton" : "paginationButton"
            }
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {page < data.length / 10 && (
          <button
            className="paginationButton"
            onClick={() => setPage(page + 1)}
          >
            ▶️
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    async function getAPIResponse() {
      return await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      )
        .then(async (response) => {
          if (response.status === 200) {
            const datresult = await response.json();
            setData(datresult);
          }
        })
        .catch((error) => console.log(error));
    }
    getAPIResponse();
  }, []);
  return (
    <>
      <table className="tableContainer">
        <thead>
          <tr>
            <th>SNO</th>
            <th>Percentage funded</th>

            <th>Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {data?.slice(page * 5 - 5, page * 5)?.map((item) => (
            <tr>
              <td>{item?.["s.no"]}</td>
              <td>{item?.["percentage.funded"]}</td>
              <td>{item?.["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{renderPaginationComponent()}</div>
    </>
  );
};
export default App;
