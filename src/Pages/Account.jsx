import React, { useState } from 'react';
import '../styles/account.scss';

function MyAccount() {
  let userFirstName = 'Mihnea';
  let userLastName = 'Familie';

  const [userWeight, setUserWeight] = useState('80');
  const [userHeight, setUserHeight] = useState('190');
  const [userAge, setUserAge] = useState('19');
  const [userBloodType, setUserBloodType] = useState('B+');

  return (
    <section className="account-section">
      <div className="account-div-principal">
        <div className="account-div-info">
          <h2>Nume: {userLastName}</h2>
          <h2>Prenume : {userFirstName}</h2>
          <h4>Varsta : {userAge}</h4>
          <h4>Inaltime : {userHeight} cm</h4>
          <h4>Greutate : {userWeight} kg</h4>
        </div>
        <div className="account-div-bloodtype">
          <div className="bloodtype-circle active">A+</div>
          <div className="bloodtype-circle">A-</div>
          <div className="bloodtype-circle">B+</div>
          <div className="bloodtype-circle">B-</div>
          <div className="bloodtype-circle">O+</div>
          <div className="bloodtype-circle">AB+</div>
          <div className="bloodtype-circle">AB-</div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
