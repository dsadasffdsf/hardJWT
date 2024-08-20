import React, { FC, useEffect, useState } from 'react';
import { alertStyles } from '../modules/alertModel/alertStyles';
import { useDispatch } from 'react-redux';
import { remAlert } from '../redux/slices/alertSlice';
import { AlertProps } from '../modules/alertModel/IAlert';

const Alert: FC<AlertProps> = ({ message, alertType }) => {
  const dispatch = useDispatch();
  const { container, iconPath, label } = alertStyles[alertType];

  const [alertStyle, setAlertStyle] = useState('opacity-0');

  const showHandler = () => {
    setAlertStyle('opacity-100 translate-y-4');
    setTimeout(() => {
      setAlertStyle('opacity-0');
      setTimeout(() => {
        dispatch(remAlert());
      }, 2000);
    }, 4000);
  };

  useEffect(() => {
    showHandler();
  }, []);

  return (
    <>
      <div className="absolute w-max translate-x-[-50%] select-none ">
        <div className={`${alertStyle} alertAnimation`}>
          <div
            className={`flex items-center p-4 bg-slate-50 mb-4 text-sm ${container}`}
            role="alert">
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d={iconPath} />
            </svg>
            <span className="sr-only">{label}</span>
            <div>
              <span className="font-medium">{label}</span> {message}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
