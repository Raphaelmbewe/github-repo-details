/* eslint-disable @typescript-eslint/ban-ts-comment */
import toast, { ToastType } from 'react-hot-toast';
export const notify = (type: ToastType, msg: string) =>
      // @ts-expect-error
  toast[type](msg);
export const formatDate = (inputDate: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
      };
    
      const dateObject = new Date(inputDate);
      const formattedDate: string = dateObject.toLocaleDateString('en-GB', options);
    
      return formattedDate.replace(/\//g, '/');
  }