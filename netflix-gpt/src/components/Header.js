import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute w-full h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="">
        <img className="w-56" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className=" flex z-10">
          <p className="m-6 font-bold">{user.displayName}</p>
          <img
            className="m-4 w-10 h-10 shadow-xl"
            src={USER_AVATAR}
            alt="logo"
          />
          <button
            onClick={handleSignOut}
            className="m-4 w-20 h-10 bg-gray-300 rounded-xl shadow-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
