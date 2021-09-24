import React, {useRef, useState} from 'react';
import {useAuth} from '../auth/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import Footer from '../Footer';

import {message} from 'antd';
import '../styles/Login.css';
import '../../App.css';
import logo from '../assets/images/recetti-logo.png';

const Login = () => {
  document.title = 'Se Connecter - Recetti';

  const emailRef = useRef();
  const passwordRef = useRef();

  const {login} = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSumbit = async e => {
    // prevent all default exeptions
    e.preventDefault();

    if (emailRef.current.value || passwordRef.current.value === '') {
      try {
        setLoading(true);
        message.info('Veuillez attendre ...', 1.5);
        await login(emailRef.current.value, passwordRef.current.value);
        message.success('Connecté avec succés !', 3);
        history.push('/');
      } catch {
        message.error('Please verify your informations');
      }
    } else {
      message.error('Veuillez remplir tous les champs', 2);
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <div className="login-form">
          <br />
          <form onSubmit={handleSumbit} method="post">
            <div className="mb-3">
              <center>
                <img style={{width: '100px'}} src={logo} alt="Recetti logo" />
              </center>
            </div>
            <h4 className="modal-title">Se connecter a Recetti</h4>
            <div className="form-group">
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                placeholder="Nom d'utilisateur ou E-mail"
                name="username"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                ref={passwordRef}
                type="password"
                className="form-control"
                placeholder="Mot De Passe"
                name="password"
                required="required"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              name="login"
              className="btn btn-primary btn-block btn-lg"
            >
              <i className="fa fa-arrow-right"></i> Se Connecter
            </button>
          </form>
          <div className="text-center small mt-2">
            Vous n'avez pas un compte ?
            <Link to="register"> Créez un compte</Link>
          </div>
          <div className="text-center small mt-2">
            Mot de passe oublié ?
            <Link to="forgot-password"> Récupérer votre compte</Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;