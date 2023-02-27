import { useState } from 'react';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [tel, setTel] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [verifPass, setVerifPass] = useState(true);
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="LoginRegister">
      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={e => setName(e.target.value)}
            id="name"
            placeholder="full Name"
          />
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="phone">Telefon</label>
          <input
            value={tel}
            onChange={e => setTel(e.target.value)}
            type="tel"
            placeholder="Numar Telefon"
            id="phone"
            name="telefon"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={e => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="confirmpassword">confirmare password</label>
          <input
            value={confirmPass}
            onChange={e => {
              setConfirmPass(e.target.value);
              setVerifPass(pass == confirmPass ? true : false);
            }}
            type="password"
            placeholder="********"
            id="confirmpassword"
            name="confirmpassword"
          />
          {!verifPass ? (
            <h6 className="parolagresita-text">Parolele nu corespund</h6>
          ) : (
            <h6></h6>
          )}
          <button type="submit">Register</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch('Login')}
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};

export default SignIn;
