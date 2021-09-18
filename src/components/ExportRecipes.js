import React, { useEffect, useState } from "react";
import { useFireStore } from "./auth/Firebase";

const ExportRecipes = ({ category }) => {
  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection("bucket")
        .doc("recipes")
        .collection(`${category}`)
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSockets(data);
        });
    };

    pullData();
  }, []);

  return (
    <>
      {sockets.map((socket, index) => {
        return (
          <div className="col-sm-4">
            <div class="card shadow">
              <img class="card-img-top" src={socket.image} alt={"Image de "+socket.name} />
              <div class="card-body">
                  <h5 class="card-title">{socket.name}</h5>
                  <p class="card-text">{socket.description}</p>
                  <a href={`../recettes/${socket.category}/${socket.id}`} class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        );
      })}    
    </>
  );
};

export default ExportRecipes;
