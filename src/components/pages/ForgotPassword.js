import React, {useRef, useState} from 'react';

import {useHistory} from 'react-router-dom';

import {useAuth} from '../auth/AuthContext';

import logo from '../assets/images/reset-email.svg';

import styled from 'styled-components';

import {Row, message} from 'antd';

import Footer from '../Footer';

const ForgotPassword = () => {
  document.title = 'Récupérer votre mot de passe - Recetti';
  const emailRef = useRef();
  const {resetPassword} = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSumbit = async e => {
    e.preventDefault();
    message.info('Veuillez attendre ...', 2.5);
    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      message.success(
        "Email envoyé! Accédez a votre boite mail et terminer l'action",
        5,
      );
      history.push('login');
    } catch {
      message.error('Vous devez enter une adresse Email valide !', 3);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="mb-5">
        <div className="login-form">
          <form onSubmit={handleSumbit} method="post">
            <center>
              <img style={{width: '160px'}} src={logo} alt="Récupérer mon Mot de Passe" />
            </center>
            <h4 className="modal-title">Récupérer mon Mot de Passe</h4>
            <div className="form-group">
              <label>
                Email <span className="rose">*</span>{' '}
              </label>
              <input
                required
                ref={emailRef}
                type="email"
                className="form-control"
                placeholder="Taper votre E-mail ici"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              <i className="fa fa-refresh"></i> Envoyer l'email de récupération
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;