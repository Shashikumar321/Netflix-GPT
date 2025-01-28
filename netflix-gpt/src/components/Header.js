import { LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="absolute  h-20 px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-56" src={LOGO} alt='logo' />
        </div>
    )
}

export default Header;