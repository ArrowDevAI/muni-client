import { createRoot } from 'react-dom/client';
import MainView from './components/main-view/mainView';
import Container from 'react-bootstrap/Container';

import "bootstrap/dist/css/bootstrap.min.css";



const MuniApp = () => {
  return (
<Container>
  <MainView/>
</Container>
);
};


const container = document.querySelector("#root");
const root = createRoot(container);


root.render(<MuniApp />);