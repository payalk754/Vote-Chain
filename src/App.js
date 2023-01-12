import React, { useEffect,useState,Component } from 'react';
import './App.css';
import Home from './components/Home';
import UserNavbar from './components/UserNavbar';
import AdminNavbar from './components/AdminNavbar';
import SignIn from './components/signin';
import AsignIn from './components/asignin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Guidlines from './pages/User/Guidlines';
import Registration from './pages/User/Registration';
import Vote from './pages/User/Vote';
import Logout from './pages/User/Logout';
import CreateElection from './pages/admin/CreateElection';
import User from './pages/admin/user';
import Register from './pages/admin/Register';
import Candidate from './pages/admin/candidate';
import ElectionStatus from './pages/admin/phase';
import Results from './pages/User/Results';
import { NavigateBeforeOutlined } from '@material-ui/icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/app';
import 'firebase/database';
import '@firebase/firestore';
import UserDashboard from './components/UserDashboard';
import Electionabi from './contracts/Election.json';
import Web3 from 'web3';
import { GiVote } from 'react-icons/gi';
import candidateInfo from './pages/admin/candidateInfo';

function App (){
 /* componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }*/

  const [Currentaccount, setCurrentaccount] = useState([]);
  
  
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  },[])
  const firebaseApp = firebase.apps[0];
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  const loadBlockchainData = async () => {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account =  accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];

    if(networkData){
      const election = new web3.eth.Contract(Electionabi.abi,networkData.address);
      console.log(election);
    }else
    {
      window.alert('smart contract is not deployed on current network');
    }
  };
  /*const [refresh, setrefresh] = useState(0);

  let content;
  const [loading2, setloading2] = useState(false);

  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Hello, setHello] = useState({});

  const loadWeb3 = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setLoading(true);
    if (
      typeof window.ethereum == "undefined" 
    ) {
      return;
    }
    const web3 = new Web3(window.ethereum);

    let url = window.location.href;
    console.log(url);

    const accounts = await web3.eth.getAccounts();

    
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    
    
    if (networkId == 42) {
      // const hello = new web3.eth.Contract(Helloabi.abi, networkData.address);
      const hello = {}
      setHello(hello);

      setLoading(false);
    } else {
      window.alert("the contract not deployed to detected network.");
      setloading2(true);
    }
  };*/
  
  return (
    <>
    
    
      <Router>
      
          <Route path='/' exact component={Home} />
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/asignin' exact component={AsignIn}/>
          
          
          <Switch> 
             
              
             
                  
                 {/*<Route path='/AdminNavbar' exact component={AdminNavbar}/>*/}
                  <Switch>
                  <Route path='/CreateElection' exact component={CreateElection} />
                  <Route path='/candidate' exact component={Candidate} />
                  <Route path='/candidateInfo' exact component={candidateInfo} />
                  <Route path='/register' exact component={Register} />
                  <Route path='/user' exact component={User} />
                  <Route path='/phase' exact component={ElectionStatus} />
                  
                  <Route path='/logout' exact component={Home} />
                </Switch>
                
                
            
          
          </Switch>
          <Switch>
            
                
                {/*<Route path='/UserDashboard' exact component={UserDashboard}/>*/}
                <Switch>
                  <Route path='/guidelines' exact component={Guidlines} />
                  <Route path='/registration' exact component={Registration} />
                  <Route path='/vote' exact component={Vote} />
                  <Route path='/results' exact component={Results} />
                </Switch>
                    
              
            
            
           </Switch>
          
           
          
          
         
        </Router>
       
          
    </>
  );
  
};

export default App;