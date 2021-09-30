import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

// Auth
import {useAuth} from '../auth/AuthContext';

// Footer component
import Footer from '../components/Footer';

// antd message component
import {message} from 'antd';

// Logo
import logo from '../assets/images/recetti-logo.png';

// Css custom styles
import '../styles/Login.css';
import '../App.css';

const Login = () => {

  // Page title
  document.title = 'Se Connecter - Recetti';

  const emailRef = useRef();
  const passwordRef = useRef();

  const {login} = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSumbit = async (e) => {

    // prevent all default exeptions
    e.preventDefault();

    if (emailRef.current.value || passwordRef.current.value === '') {
      try {

        // Disable button
        setLoading(true);

        // Show waiting message to the user
        message.info('Veuillez attendre ...', 1.5);

        // Try login attempt
        await login(emailRef.current.value, passwordRef.current.value);

        // Show success message to the user
        message.success('Connecté avec succés !', 3);

        // Rdirect to the homepage
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
    </>
  );
};

export default Login;