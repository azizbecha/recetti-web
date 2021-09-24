import React, {useState, useEffect, useRef} from 'react';
import {useFireStore, useFireStorage} from '../auth/Firebase';
import {useAuth} from '../auth/AuthContext';
import {useHistory} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {message} from 'antd';
import 'antd/dist/antd.css';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const AddRecipe = () => {

  document.title = 'Ajouter une Recette - Recetti';
  const [image, setImage] = useState('');
  const nameRef = useRef();
  const categoryRef = useRef();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const {currentUser} = useAuth();
  const [socket, setSocket] = useState({});

  const history = useHistory();

  const makeId = length => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const emptyInputs = () => {
    setImage('');
    nameRef.current.value = '';
    setIngredients("");
    setDescription("");
    categoryRef.current.value = '';
  };
  const GetProfileData = async () => {
    const docs = useFireStore.collection('users').doc(`${currentUser.uid}`);
    const docsRef = await docs.get();
    setSocket(docsRef.data());
  };

  useEffect(() => {
    return GetProfileData();
  });

  var firstname = socket.firstname;
  var lastname = socket.lastname;
  var fullname = firstname + ' ' + lastname;

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var today = day + '/' + month + '/' + year;

  const submitRecipe = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      message.info('Veuillez attendre ...', 2.5);

      if (image == null) {
        message.error('Vous devez ajouter une image pour la recette !', 3);
      }
      const recipeId = makeId(15);
      const uploadImage = useFireStorage
        .ref(`/recettes/${recipeId}`)
        .put(image);
      uploadImage.on(
        'state_changed',
        snapshot => {
          //console.log("Image Upload Progress")
        },
        error => {
          console.log(error);
        },
        function () {
          uploadImage.snapshot.ref
            .getDownloadURL()
            .then(function (downloadURL) {
              var category = categoryRef.current.value;
              useFireStore
                .collection('bucket')
                .doc('recipes')
                .collection(categoryRef.current.value)
                .doc(`${recipeId}`)
                .set({
                  image: downloadURL,
                  id: recipeId,
                  name: nameRef.current.value,
                  ingredients: ingredients,
                  description: description,
                  category: categoryRef.current.value,
                  byUser: fullname,
                  authorId: currentUser.uid,
                  date: today,
                })
                .then(() => {
                  message.success('Votre recette a été bien ajoutée', 3);
                  emptyInputs();
                  setLoading(false);
                  history.push(`recettes/${category}/${recipeId}`);
                })
                .catch(error => alert(error));
            });
        },
      );
    } catch {
      message.error("Une erreur s'est produite !", 2);
      history.push('/');
    }
  };
  return (
    <>
      <Container>
        <h2 className="mt-5 mb-4 font-weight-bold text-center">
          <i className="fa fa-plus rose"></i> Ajouter une recette
        </h2>
        <form method="post" onSubmit={submitRecipe}>
          <div className="form-group mb-3 mt-3">
            <label>
              Nom de la recette <span className="rose">*</span>
            </label>
            <input
              ref={nameRef}
              required
              type="text"
              className="form-control"
              placeholder="Entrer le nom de la recette"
            />
          </div>
          <div className="form-group">
            <label>
              Ingrédients <span className="rose">*</span>
            </label>
            <ReactQuill
              theme='snow'
              value={ingredients}
              onChange={setIngredients}
            />
          </div>
          <div className="form-group">
            <label>
              Description <span className="rose">*</span>
            </label>
            <ReactQuill
              theme='snow'
              value={description}
              onChange={setDescription}
            />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>
                  Catégorie <span className="rose">*</span>
                </label>
                <select ref={categoryRef} className="custom-select" required="true">
                  <option selected disabled>
                    Cliquez ici pour choisir la catégorie
                  </option>
                  <option value="petit-dejeuner">Petit déjeuner</option>
                  <option value="dejeuner">Déjeuner</option>
                  <option value="diner">Diner</option>
                  <option value="dessert">Dessert</option>
                </select>
              </div>
              <div className="col">
                <label>
                  Image <span className="rose">*</span>
                </label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Télécharger</span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      onChange={e => {
                        setImage(e.target.files[0]);
                      }}
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label className="custom-file-label">
                      Choisir une image
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-block"
          >
            <i className="fa fa-arrow-right"></i> Ajouter
          </button>
        </form>
      </Container>
    </>
  );
};

export default AddRecipe;
