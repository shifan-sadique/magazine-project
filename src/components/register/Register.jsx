import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { db, auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./register.css";
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';


export default function Register(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const [batch, setBatch] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [isMagazineEditor, setIsMagazineEditor] = useState(false);
  const [errors, setErrors] = useState({});
  const [editorKey, setEditorKey] = useState("");
  const [per,setPerc]= useState(null);
  const [status,setStatus] = useState("pending")

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };


  useEffect(() => {
    const uploadfile = () =>{

      const name=new Date().getTime()+ profilePhoto.name
      console.log(name)
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, profilePhoto);


// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
        break;
    }
  }, 
  (error) => {

    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setProfilePhotoUrl(downloadURL);
      // Update the profile photo URL in the database
      const authUser = auth.currentUser;
      if (authUser) {
        const userRef = doc(db, "user", authUser.uid);
        setDoc(
          userRef,
          {
            profilePhotoUrl: downloadURL,
          },
          { merge: true }
        )
          .then(() => {
            console.log("Profile photo URL updated in the database");
          })
          .catch((error) => {
            console.error("Error updating profile photo URL in the database: ", error);
          });
      }
    });
  }
);
};

profilePhoto && uploadfile();
}, [profilePhoto]);

  const validateForm = () => {
    const errors = {};

    // Validate phone number
    if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    // Validate password
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      errors.password = "Password must contain both letters and numbers";
    }


    // Validate confirm password
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        // Create user in Firebase Authentication
        let profilePhotoUrl = "";
        if (isMagazineEditor) {
            if(editorKey != "123")
            {
              alert("Wrong Key");
              return;
            }
        }


        const authUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log(authUser);
        console.log(authUser.user);
        console.log(authUser.user.uid);

        // Add user details to the database
        const data = {
          id: authUser.user.uid,
          name,
          phoneNumber,
          email,
          profilePhotoUrl,
          batch,
          rollNumber,
          specialization,
          experience,
          isMagazineEditor,
          status,
          timestamp: serverTimestamp(),
        };

        const userRef = await setDoc(doc(db, "user", authUser.user.uid), data); // Use setDoc instead of addDoc with the specific document ID
        console.log("Document written with ID: ");

        // Redirect to register details page
        await navigate(-1); // Navigate to the desired page

        
      } catch (error) {
        console.error("Error creating user or adding document: ", error);
      }
    }
  };


  return (
    <div className="register">
    <form className="registerForm" onSubmit={handleSubmit}>
      <span className="registerTitle">COMMITTEE REGISTRATION</span>

      <div className="avatarContainer">
      <Avatar className="avatar" src={profilePhotoUrl || ""}>
          <AccountCircleIcon />
      </Avatar>
          <label className="profilepic" htmlFor="profilePhoto">
            Click to Upload Profile Photo
          </label>
        </div>
        <input
          className="profilepic"
          type="file"
          id="profilePhoto"
          accept="image/*"
          onChange={(event) =>setProfilePhoto(event.target.files[0])}
        />

      

      <label htmlFor="name">Name</label>
      <input className='registerInput' type="text" placeholder="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      
      <label htmlFor="phoneNumber">Phone Number</label>
      <input className='registerInput' type="number" placeholder="Mobile" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
      
      <label htmlFor="email">Email</label>
      <input className='registerInput' type="text" placeholder="Email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <label htmlFor="password">Password</label>
      <input className='registerInput' type="password" placeholder="Password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      {errors.password && <div className="error">{errors.password}</div>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input className='registerInput' type="password" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}


      <label htmlFor="batch">Batch</label>
      <input className='registerInput' type="text" placeholder="Batch" id="batch" value={batch} onChange={(event) => setBatch(event.target.value)} />

      <label htmlFor="rollNumber">Roll Number</label>
      <input className='registerInput' type="text" placeholder="Roll Number" id="rollNumber" value={rollNumber} onChange={(event) => setRollNumber(event.target.value)} />

      <label htmlFor="specialization">Area Of Interest</label>
      <input className='registerInput' type="text" placeholder="Specialization" id="specialization" value={specialization} onChange={(event) => setSpecialization(event.target.value)} />

      <label htmlFor="experience">Experience</label>
      <input className='registerInput' type="text" placeholder="Experience" id="experience" value={experience} onChange={(event) => setExperience(event.target.value)} />

      <div className="editorSwitch">
          <FormControlLabel
            control={
              <Switch
                checked={isMagazineEditor}
                onChange={(event) => setIsMagazineEditor(event.target.checked)}
              />
            }
            label="Are you the magazine editor?"
          />
          {isMagazineEditor && (
            <TextField
              label="Editor Key"
              value={editorKey}
              onChange={(event) => setEditorKey(event.target.value)}
              variant="outlined"
              className="editorKeyInput"
            />
          )}
        </div>

      <button disabled={per != null && per < 100} type="submit" className="registerButton">Register</button>
      <button onClick={handleGoBack} className="registerButton">Login</button>

    </form>
  </div>
);
}


