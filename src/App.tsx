import {AdminHome} from './components/index';
import { DateProvider } from './lib/contexts/date';
import "./App.css";


function App() {

  return (
    <>
      <DateProvider>
        <div className='font-serif'>
          <AdminHome/>
        </div>
      </DateProvider>
    </>
  );
}

export default App;
