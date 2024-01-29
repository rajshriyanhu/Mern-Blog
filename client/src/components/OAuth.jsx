import { AiFillGoogleCircle } from "react-icons/ai";
import { Button } from "flowbite-react";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUel: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6" />
      Continue with Google
    </Button>
  );
}
