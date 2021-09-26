import React, {useRef, useState} from 'react';

import {useHistory} from 'react-router-dom';

import {Container} from 'react-bootstrap';

import {useFireStore} from '../auth/Firebase';

import {message} from 'antd';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import Footer from '../Footer';

const Contact = () => {
  document.title = 'Contact - Recetti';
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [number, setNumber] = useState();
  const history = useHistory();
  const emptyInputs = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    setNumber('');
    subjectRef.current.value = '';
    messageRef.current.value = '';
  };
  const makeId = length => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const submitMessage = async e => {
    e.preventDefault();
    var messageId = makeId(20);
    // try {
    message.info('Veuillez attendre ...', 2.5);
    await useFireStore
      .collection('messages')
      .doc(messageId)
      .set({
        date: Date.now(),
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
        email: emailRef.current.value,
        phone: number,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
        id: messageId,
      })
      .then(() => {
        message.success(
          "Votre message a été bien recu \n Merci d'être en contact avec nous.",
          3,
        );
        emptyInputs();
        history.push('/');
      })
      .catch(() => {
        message.error("Une erreur s'est produite !", 2);
      });
    /*} catch {
            message.error("Une erreur s'est produite !",2);
        }*/
  };
  return (
    <>
      <Container className="mb-5">
        <h2 className="mt-5 mb-4 font-weight-bold text-center">
          <i className="fa fa-paper-plane rose"></i> Contacter nous
        </h2>
        <form method="post" onSubmit={submitMessage}>
          <div className="row">
            <div className="form-group mb-3 mt-3 col-6">
              <label>
                Nom <span className="rose">*</span>
              </label>
              <input
                ref={firstNameRef}
                required
                type="text"
                className="form-control"
                placeholder="Entrer votre nom"
              />
            </div>
            <div className="form-group mb-3 mt-3 col-6">
              <label>
                Prénom <span className="rose">*</span>
              </label>
              <input
                ref={lastNameRef}
                required
                type="text"
                className="form-control"
                placeholder="Entrer votre prénom"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group mb-3 mt-3 col-6">
              <label>
                Email <span className="rose">*</span>
              </label>
              <input
                ref={emailRef}
                required
                type="text"
                className="form-control"
                placeholder="Entrer votre email"
              />
            </div>
            <div className="form-group mb-3 mt-3 col-6">
              <label>
                Téléphone <span className="rose">*</span>
              </label>
              <PhoneInput
                defaultCountry="TN"
                className="form-control"
                placeholder="Enter le numèro de téléphone"
                value={number}
                onChange={setNumber}
              />
            </div>
          </div>
          <div className="form-group mb-3 mt-3">
            <label>
              Sujet <span className="rose">*</span>
            </label>
            <select className="form-control" ref={subjectRef} required>
              <option selected disabled hidden>-- Veuillez choisir un sujet --</option>
              <option value="Signaler une erreur / un utilisateur">
                Signaler une erreur / un utilisateur
              </option>
              <option value="Suggérer une fonctionnalité">
                Suggérer une fonctionnalité
              </option>
              <option value="Technical support">Support technique</option>

              <option value="Donner un avis">Donner un avis</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              Message <span className="rose">*</span>
            </label>
            <textarea
              ref={messageRef}
              required
              rows="5"
              className="form-control"
              placeholder="Entrer votre message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            <i className="fa fa-paper-plane"></i> Envoyer
          </button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
