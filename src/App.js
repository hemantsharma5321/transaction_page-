
import './App.css';
import SideNav from './components/SisdeNav';
import TopBar from './components/TopBar';
import TransactionTable from './components/TransactionTable';


function App() {
  return (
    <div className='app'>
      <SideNav />
      <TopBar/>
      <TransactionTable/>
    </div>
  );
}

export default App;
