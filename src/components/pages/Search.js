import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import {useFireStore} from '../auth/Firebase';
const Search = () => {
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
};

function SearchResult() {
  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1).replace('-', ' ');
  }
  let {Category, Keyword} = useParams();
  const [sockets, setSockets] = useState([]);
  Keyword.replace('%20', ' ');
  capitalize(Keyword);
  useEffect(() => {
    const pullData = async () => {
      return await useFireStore
        .collection('bucket')
        .doc('recipes')
        .collection(`${Category}`)
        .where('name', '==', Keyword)
        .onSnapshot(snapshot => {
          const data = snapshot.docs.map(doc => ({
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
            <div className="card shadow">
              <img
                className="card-img-top"
                src={socket.image}
                alt={'Image de ' + socket.name}
              />
              <div className="card-body">
                <h5 className="card-title">{socket.name}</h5>
                <p className="card-text">{socket.description}</p>
                <Link
                  to={`../../recettes/${socket.category}/${socket.id}`}
                  className="btn btn-primary"
                >
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Search;