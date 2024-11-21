import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

export const App = () => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.micro === 'body') {
        setName(event.data.message);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return <Navbar label={name} />;
};
