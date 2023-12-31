import React, { useContext } from 'react'
// context
import { BankContext } from '../assets/context/BankContext';
// components
import InputForm from "../components/InputForm"

const CreateAccountPage = () => {
    const {dbApp, setDBapp, setLoggedIn} = useContext(BankContext);

    return(
        <InputForm onRegisterCustomer={newCustomer => setDBapp([...dbApp, newCustomer])} dbApp={dbApp} setLoggedIn={setLoggedIn} />
    );
}

export default CreateAccountPage;
