import React, {useRef, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {useFireStore} from '../auth/Firebase';
import {message} from 'antd';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const Contact = () => {
  document.title = 'Contact - Recetti';
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
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
    <div>
      <Container>
        <h2 class="mt-5 mb-4 font-weight-bold text-center">
          <i class="fa fa-paper-plane rose"></i> Contacter nous
        </h2>
        <form method="post" onSubmit={submitMessage}>
          <div class="row">
            <div class="form-group mb-3 mt-3 col-6">
              <label>
                Nom <span className="rose">*</span>
              </label>
              <input
                ref={firstNameRef}
                required
                type="text"
                class="form-control"
                placeholder="Entrer le nom de la recette"
              />
            </div>
            <div class="form-group mb-3 mt-3 col-6">
              <label>
                Prénom <span className="rose">*</span>
              </label>
              <input
                ref={lastNameRef}
                required
                type="text"
                class="form-control"
                placeholder="Entrer le nom de la recette"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group mb-3 mt-3 col-6">
              <label>
                Email <span className="rose">*</span>
              </label>
              <input
                ref={emailRef}
                required
                type="text"
                class="form-control"
                placeholder="Entrer le nom de la recette"
              />
            </div>
            <div class="form-group mb-3 mt-3 col-6">
              <label>
                Téléphone <span className="rose">*</span>
              </label>
              <PhoneInput
                defaultCountry="TN"
                class="form-control"
                placeholder="Enter le numèro de téléphone"
                value={number}
                onChange={setNumber}
              />
            </div>
          </div>
          <div class="form-group mb-3 mt-3">
            <label>
              Sujet <span className="rose">*</span>
            </label>
            <select class="form-control" ref={subjectRef} required>
              <option value="" selected disabled hidden>
                Select a subject
              </option>
              <option value="Presale product questions">
                Presale product questions
              </option>
              <option value="Technical support">Technical support</option>
              <option value="Product registration assistance">
                Product registration assistance
              </option>
              <option value="Software authorization assistance">
                Software authorization assistance
              </option>
              <option value="Bug report">Bug report</option>
              <option value="Warranty claim or service inquiry">
                Warranty claim or service inquiry
              </option>
              <option value="Parts inquiry">Parts inquiry</option>
              <option value="Sales order assistance or status">
                Sales order assistance or status
              </option>
              <option value="Customer feedback">Customer feedback</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>
              Message <span className="rose">*</span>
            </label>
            <textarea
              ref={messageRef}
              required
              rows="5"
              type="text"
              class="form-control"
              placeholder="Entrer les ingrédients de la recette"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            <i class="fa fa-arrow-right"></i> Envoyer
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
