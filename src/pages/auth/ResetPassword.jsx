import React from 'react';
import {BASE_PATH_URL} from '@config/index';
import CustomHeader from '@components/UI/CustomHeader';
import ResetPasswordForm from '@components/Auth/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <div>
      <CustomHeader title="Restablecer Contraseña" />
      <div className="flex">
        <div className="flex-1 px-6 md:px-0">
          <ResetPasswordForm />
        </div>
        <div className="hidden md:flex flex-1">
          <img
            src={`${BASE_PATH_URL}/uca-bg.jpg`}
            className="h-screen py-8"
            alt="UCA"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
