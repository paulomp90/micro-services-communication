import './App.css';
import Content from './components/Content';
import { useEffect, useState } from 'react';

export const App = () => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    window.postMessage({ micro: 'body', message: name });
  }, [name]);

  return <Content name={name} onNameChange={setName} />;
};
