import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

// Components
import Footer from '../components/Footer';

// Styles
import '../index.css';
import '../styles/Register.css';

// Firebase
import {auth, useFireStore} from '../auth/Firebase';

import {message} from 'antd';
import 'antd/dist/antd.css';

const Register = () => {

  // Page title
  document.title = "S'inscrire - Recetti";
  
  let history = useHistory();
  
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const AddUser = () => {
    if (password !== confirmPassword) {
      return message.error('Les mots de passe ne correspondant pas', 3);
    }

    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var today = day + '/' + month + '/' + year;

    // Create user wth email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        
        // After creating a user, get his id then create new user in the firestore database
        auth.signInWithEmailAndPassword(email, password);
        var user = auth.currentUser;
        var uid = user.uid;
        useFireStore
          .collection('users')
          .doc(uid)
          .set({
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            uid: uid,
            joinDate: today
          })
          .catch(error => alert(error));
        message.success('Bienvenue chez Recetti');
        history.push('/');
      })
      .catch(error => {
        alert(error);
      });
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');

    //} else {}
  };
  return (
    <>
      <div className="signup-form body">
        <div className="form">
          <h2>Créer un compte</h2>
          <p>Créez un compte et rejoignez Recetti !</p>
          <hr />
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <input
                  value={firstname}
                  onChange={event => setFirstname(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Nom"
                  required="required"
                />
              </div>
              <div className="col-sm-6">
                <input
                  value={lastname}
                  onChange={event => setLastname(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Prénom"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              value={email}
              onChange={event => setEmail(event.target.value)}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              value={username}
              onChange={event => setUsername(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <div className="form-group">
            <input
              value={password}
              onChange={event => setPassword(event.target.value)}
              type="password"
              className="form-control"
              placeholder="Mot de passe"
            />
          </div>
          <div className="form-group">
            <input
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
              type="password"
              className="form-control"
              placeholder="Re-taper le mot de passe"
            />
          </div>
          <div className="form-group">
            <button
              onClick={AddUser}
              type="submit"
              className="btn btn-primary btn-lg"
            >
              <i className="fa fa-plus"></i> Rejoindre
            </button>
          </div>
        </div>
        <div className="hint-text">
          Vous avez déja un compte ? <Link to="login">Se Connecter</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;