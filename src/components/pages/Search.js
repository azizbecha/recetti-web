import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {useFireStore} from '../auth/Firebase'
const Search = () =>{
  let match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:Category/:Keyword`}>
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  );
}


function SearchResult() {
  let { Category, Keyword } = useParams();
  const [sockets, setSockets] = useState([]);

  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection("bucket")
        .doc("recipes")
        .collection(`${Category}`)
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
                        <Link to={`../../recettes/${socket.category}/${socket.id}`} class="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        );
      })}
    </>
  );
}

export default Search;