import React, {useState, useEffect, useRef} from 'react';
import app, {db, useFireStore, useFireStorage} from './auth/Firebase';
import {useAuth} from './auth/AuthContext';
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import {useHistory} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {message} from 'antd';
import "antd/dist/antd.css";

const AddRecipe = () => {

    const [image , setImage] = useState('');
    const nameRef = useRef();
    const ingRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const [imgUrl, setImgUrl] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { currentUser, logout } = useAuth();
    const [socket, setSocket] = useState({});

    const history = useHistory();
    
    const makeId = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const emptyInputs = () => {
        setImage("");
        nameRef.current.value = "";
        ingRef.current.value = "";
        descriptionRef.current.value = "";
        categoryRef.current.value = "";
    }
    const GetProfileData = async () => {
        const docs = useFireStore
            .collection("users")
            .doc(`${currentUser.uid}`);
        const docsRef = await docs.get();
        setSocket(docsRef.data());
    };
    
    useEffect(() => {
        return GetProfileData();
    });

    var firstname = socket.firstname;
    var lastname = socket.lastname;
    var fullname = firstname+" "+lastname;

    var day = new Date().getDay();
    var month = new Date().getMonth();
    var year = new Date().getYear();
    var today = day+"/"+month+"/"+year; 

    const submitRecipe = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            message.info("Veuillez attendre ...", 2.5);
            
            if(image == null) {
                message.error("Vous devez ajouter une image pour la recette !", 3)
            }
            const recipeId = makeId(15);
            const uploadImage = useFireStorage.ref(`/recettes/${recipeId}`).put(image);
            uploadImage.on('state_changed', (snapshot) => {
                //console.log("Image Upload Progress")
            },
            (error) => {
                //console.log(error);
            },
            function() {
                uploadImage.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    db.collection('bucket').doc('recipes').collection(categoryRef.current.value).doc(`${recipeId}`).set({
                        image: downloadURL,
                        id: recipeId,
                        name: nameRef.current.value,
                        ingredients: ingRef.current.value,
                        description: descriptionRef.current.value,
                        category: categoryRef.current.value,
                        byUser: fullname,
                        date: today
                    }).then(() => {
                        message.success("Votre recette a été bien ajoutée", 3);
                        emptyInputs();
                        setLoading(false);
                        history.push(`recettes/${recipeId}`)
            
                    }).catch(error => alert(error))
                });
        })
            
        } catch {
            message.error("Une erreur s'est produite !",2);
            history.push("/")
        }
        
    }
    return (
        <div>
            <Container>
                <h2 class="mt-5 mb-4 font-weight-bold text-center"><i class="fa fa-plus rose"></i> Ajouter une recette</h2>
                <form method="post" onSubmit={submitRecipe}>
                    <div class="form-group mb-3 mt-3">
                        <label>Nom de la recette <span className="rose">*</span></label>
                        <input ref={nameRef} required type="text" class="form-control" placeholder="Entrer le nom de la recette" />
                    </div>
                    <div class="form-group">
                        <label>Ingrédients <span className="rose">*</span></label>
                        <textarea ref={ingRef} required rows="5" type="text" class="form-control" placeholder="Entrer les ingrédients de la recette" ></textarea>
                    </div>
                    <div class="form-group">
                        <label>Description <span className="rose">*</span></label>
                        <textarea ref={descriptionRef} required rows="5" type="text" class="form-control" placeholder="Entrer la description de la recette" ></textarea>
                    </div>
                    <div class="form-group">
                        <div className="row">
                            <div className="col">
                                <label>Catégorie <span className="rose">*</span></label>
                                <select ref={categoryRef} class="custom-select" required="true">
                                    <option selected disabled>Cliquez ici pour choisir la catégorie</option>
                                    <option value="petit-dejeuner">Petit déjeuner</option>
                                    <option value="dejeuner">Déjeuner</option>
                                    <option value="diner">Diner</option>
                                    <option value="dessert">Dessert</option>
                                </select>
                            </div>
                            <div className="col">
                                <label>Image <span className="rose">*</span></label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Télécharger</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} class="custom-file-input" id="inputGroupFile01"  />
                                        <label class="custom-file-label" for="inputGroupFile01">Choisir une image</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={loading} class="btn btn-primary btn-block"><i class="fa fa-arrow-right"></i> Ajouter</button>
                </form>
            </Container>
        </div>
    );
}

export default AddRecipe;