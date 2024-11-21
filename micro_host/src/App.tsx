import { App as Header } from 'micro_header/app';
import { App as Body } from 'micro_body/app';

const App = () => {
  return (
    <div className="content">
      <Header />
      <Body />
    </div>
  );
};

export default App;
