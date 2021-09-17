import React, { useRef, useState } from "react";
import { useAuth } from "./auth/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from './assets/images/reset-email.svg'
// ant design component call
import styled from "styled-components";
import { Row, message } from "antd";
import Footer from './Footer'
const ForgotPassword = () => {
  document.title = "Récupérer votre mot de passe - Recetti";
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSumbit = async (e) => {
    e.preventDefault();
    message.info("Veuillez attendre ...", 2.5);
    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      message.success("Email envoyé! Accédez a votre boite mail et terminer l'action",5);
      history.push("login");
    } catch {
      message.error("Vous devez enter une adresse Email valide !", 3);
    }
    setLoading(false);
  };

    return (
      <>
        <div class="mb-5">
          <div class="login-form">
            <form onSubmit={handleSumbit} method="post">
              <center><img style={{width:'160px'}} src={logo} /></center>
              <h4 class="modal-title">Récupérer mon Mot de Passe</h4>
              <div class="form-group">
                <label>Email <span className="rose">*</span> </label>
                <input required ref={emailRef} type="email" class="form-control" placeholder="Taper votre E-mail ici" />
              </div>
              <button disabled={loading} type="submit" class="btn btn-primary btn-block btn-lg"><i class="fa fa-refresh"></i> Envoyer l'email de récupération</button>              
            </form>			
          </div>
        </div>
        <Footer/>
        </>
  );
};

export default ForgotPassword;

/* styles */

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--neut-gray);
`;

const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--neut-black);
`;

const Text = styled.h1`
  margin: 1rem 0.5rem;
  color: var(--neut-white);
  text-transform: capitalize;
`;

const Form = styled.form`
  border: 2px solid var(--neut-black);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  margin: 2rem 1rem;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 500px;
  border: none;
  outline: none;
  padding: 12px 15px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  text-align: start;
  font-size: 15px;
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  margin: 0rem auto;
  border-radius: 15px;
  color: var(--neut-white);
  outline: var(--neut-black);
  background-color: var(--neut-black);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--neut-black);
    outline: var(--pola-cyan);
    background-color: var(--pola-cyan);
  }
`;
