import React, { useState, useEffect, use } from "react";
import "./index.css";
function Results({ cat }) {
  // Accept 'cat' as a prop
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://emojihub.yurace.pro/api/all/category/${cat}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (cat) {
      // Only fetch if cat has a value
      fetchData();
    }
  }, [cat]);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section id="results">
        {data.map((emoji) => (
          <section key={emoji.name} className="card">
            <h1
              className="emoji"
              dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}
            />
            <p>emoji name : {emoji.name}</p>
            <p>emoji category : {emoji.category}</p>
          </section>
        ))}
      </section>
    </>
  );
}

export default Results;
