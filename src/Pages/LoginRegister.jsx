import { Link } from 'react-router-dom';

const LoginRegister = () => {
  return (
    <div className="LoginRegister-Page">
      <div className="auth-form-container">
        <h2 className="LoginRegister-h2">
          Donare <span className="culoare-red">LSE</span> Sange
        </h2>
        <div className="div-link">
          <Link
            className="btn-culoare-alb info link-btn "
            type="button"
            to="/login"
          >
            Log in
          </Link>
          <span className="distantate-span"></span>
          <Link
            className=" btn-culoare-rosu info link-btn "
            type="button"
            to="/signup"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
