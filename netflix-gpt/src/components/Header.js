import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when the component unmounts
    return () => {
      unSubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute w-full h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="">
        <img className="w-32 md:w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex z-10 justify-between">
          <p className="m-3 md:m-6 text-gray-300 font-bold">{user.displayName}</p>
          <button className="m-2 md:m-4 w-28 h-8 bg-purple-600 text-white rounded-md" onClick={handleGptSearchClick}>{gpt.showGptSearch ? 'Home' : 'GPT Search'}</button>
          <button
            onClick={handleSignOut}
            className="m-2 md:m-4 w-20 md:w-24 h-8 bg-red-600 text-white rounded-md shadow-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
