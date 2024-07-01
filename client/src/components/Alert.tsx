import React, { FC, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { alertStyles } from '../modules/alertModel/alertStyles';

interface AlertPros {
  message: string;
  alertType: string;
}

type Timer = ReturnType<typeof setTimeout>

const Alert: FC<AlertPros> = forwardRef(({ message, alertType }, ref) => {
  const [alertStyle, setAlertStyle] = useState('opacity-0');
  const timeoutRef = useRef<Timer | null>(null);

  const showHandler = () => {
    setAlertStyle('opacity-100 translate-y-4');
  };

  const startTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      console.log(timeoutRef.current);
      setAlertStyle('opacity-0');
    }, 4000);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const handleMouseLeave = () => {
    startTimer();
  };

  useImperativeHandle(ref, () => ({
    showHandler,
  }));
  console.log(alertStyles[alertType]);
  const { container, iconPath, label } = alertStyles[alertType];
  return (
    <>
      <div className="absolute right-1/2 left-1/2 top-[30px] w-max translate-x-[-50%] select-none">
        <div className={`${alertStyle} alertAnimation`}>
          <div
            className={`flex items-center p-4 mb-4 text-sm ${container}`}
            role="alert"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
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
});

export default Alert;
