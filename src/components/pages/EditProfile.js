import React, {useState, useEffect, useRef} from 'react';
import {auth, useFireStore} from '../auth/Firebase';
import {Container, Row, Col} from 'react-bootstrap';
import {message} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import logo from '../assets/images/recetti-logo.png'
import edit from '../assets/images/edit-profile.jpg'

const EditProfile = () => {
    const history = useHistory();
    var userId = auth.currentUser.uid;
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `Editer mon profil - Recetti`;
    useFireStore
    .collection('users')
    .doc(`${userId}`)
    .get()
    .then(async snapshot => {
        var data = snapshot.data();
        if (data) {
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setUsername(data.username);
            setEmail(data.email);
            
        }
    });

    const updateData = () => {
        setLoading(true);
        auth.updateEmail(email);
        useFireStore.collection("users").doc(auth.currentUser.uid).update(
            {
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email
            }
        ).then(() => {
            message.success("Vos informations sont modifiés avec succés !");
            history.push("/");
        })
    }

    return (
        <>
            <Container>
                <div className="login-form">
                    <br />
                    <form method="post">
                    <div className="mb-3">
                        <center>
                            <img style={{width: '150px'}} src={edit} alt="Recetti logo" />
                        </center>
                    </div>
                    <h4 className="modal-title">Editer mes informations</h4>
                    <div className="form-group">
                        <Row>
                            <Col sm={6}>
                                <input
                                    value={firstname}
                                    onChange={event => setFirstname(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Nom"
                                    required="required"
                                />
                            </Col>
                            <Col sm={6}>
                            <input
                                value={lastname}
                                onChange={event => setLastname(event.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Nom"
                                required="required"
                            />
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group">
                        <input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Nom"
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Nom"
                            required="required"
                        />
                    </div>
                    <button
                        onClick={updateData}
                        type="submit"
                        disabled={loading}
                        name="login"
                        className="btn btn-primary btn-block btn-lg"
                    >
                        <i className="fa fa-arrow-right"></i> Se Connecter
                    </button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default EditProfile;