import React, { useEffect, useState } from "react";

const GitHub = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://github.com/users/Ajeet2270028")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl">
      Github Follower:{data.followers}
    </div>
  );
};

export default GitHub;
