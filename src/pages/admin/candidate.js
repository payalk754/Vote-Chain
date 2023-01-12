import React from 'react';
import './candidate.css';
import AdminNavbar from '../../components/AdminNavbar';
import UserNavbar from '../../components/UserNavbar';
import getWeb3 from "../../getWeb3";
import Election from "../../contracts/Election.json";

import AdminOnly from "../../components/AdminOnly";
import ipfs from '../../ipfs';
import {Component} from 'react';

{/*function Candidate() {
  return (
      <>
      <AdminNavbar />
    <body className='candetails-body'>
            <div className='candetails-box'>
                <h1 className='candetails-h1'>Candidate Details</h1>
            <table class='candetails-table'>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Party</th>
                    <th>Qualification</th>
                    
                </tr>
                <tr>
                    <td>1</td>
                    <td>Arvind Kejriwal</td>
                    <td>53</td>
                    <td>Aam Aadmi Party</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mamta Banerjee</td>
                    <td>66</td>
                    <td>All India Trinamool Congress</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>3</td>
                    <td>Narendra Modi</td>
                    <td>71</td>
                    <td>Bharatiya Janata Party</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>4</td>
                    <td>Rahul Gandhi</td>
                    <td>51</td>
                    <td>Indian National Congress</td>
                    <td></td>
                   
                </tr>
                <tr>
                    <td>5</td>
                    <td>Uddhav Thackeray</td>
                    <td>61</td>
                    <td>Shiv Sena</td>
                    <td></td>
                    
                </tr>
            </table>
            </div>

        </body>
        </>
  );
}*/}

export default class Candidate extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      ElectionInstance: undefined,
      web3: null,
      accounts: null,
      isAdmin: false,
      image: "",
      header: "",
      slogan: "",
      candidates: [],
      candidateCount: undefined,
      buffer: null,
      setBuffer: null
    };
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = async () => {
    // refreshing page only once
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }

    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Election.networks[networkId];
      const instance = new web3.eth.Contract(
        Election.abi,
        deployedNetwork && deployedNetwork.address
      );
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        web3: web3,
        ElectionInstance: instance,
        account: accounts[0],
      });

      // Total number of candidates
      const candidateCount = await this.state.ElectionInstance.methods
        .getTotalCandidate()
        .call();
      this.setState({ candidateCount: candidateCount });

      const admin = await this.state.ElectionInstance.methods.getAdmin().call();
      if (this.state.account === admin) {
        this.setState({ isAdmin: true });
      }

      // Loading Candidates details
      for (let i = 0; i < this.state.candidateCount; i++) {
        const candidate = await this.state.ElectionInstance.methods
          .candidateDetails(i)
          .call();
        this.state.candidates.push({
          id: candidate.candidateId,
          image: candidate.image,
          header: candidate.header,
          slogan: candidate.slogan,
        });
      }

      this.setState({ candidates: this.state.candidates });
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
    }
  };
 
  captureFile(event) {
    event.preventDefault()
    this.setState({ image: event.target.value });
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit(event) {
    event.preventDefault()
    ipfs.files.add(this.state.buffer, (error, result) => {
      if(error) {
        console.error(error)
        return
      }
      this.setState({ image: result[0].hash })
      console.log("okkk")
      
    })
  }
 
    
  updateHeader = (event) => {
    this.setState({ header: event.target.value });
  };
  updateSlogan = (event) => {
    this.setState({ slogan: event.target.value });
  };

  addCandidate = async () => {
    await this.state.ElectionInstance.methods
      .addCandidate(this.state.image, this.state.header, this.state.slogan)
      .send({ from: this.state.account, gas: 1000000 });
    window.location.reload();
  };

  render() {
    if (!this.state.web3) {
      return (
        <>
          {this.state.isAdmin ? <UserNavbar /> : <AdminNavbar />}
          <center>Loading Web3, accounts, and contract...</center>
        </>
      );
    }
    if (!this.state.isAdmin) {
      return (
        <>
          <AdminNavbar/>
          <AdminOnly page="Add Candidate Page." />
        </>
      );
    }
    return (
      <>
        <AdminNavbar/>
        <div className="container-main">
          
          <div className="container-item">
          
            <form className="form">
            <h2>Add a new candidate</h2>
          <small>Total candidates: {this.state.candidateCount}</small>
              <label className={"label-ac"}>
                Image
                <input
                  className={"input-ac"}
                  type="file"
                  placeholder="eg. .jpg"
                  value={this.state.file}
                  onChange={this.captureFile}
                />
              </label>
              <button
                className="btn-add"
                onClick={this.onSubmit}
              >
                Upload
              </button>
              <label className={"label-ac"}>
                Name
                <input
                  className={"input-ac"}
                  type="text"
                  placeholder="eg. Marcus"
                  value={this.state.header}
                  onChange={this.updateHeader}
                />
              </label>
              <label className={"label-ac"}>
                Slogan
                <input
                  className={"input-ac"}
                  type="text"
                  placeholder="eg. It is what it is"
                  value={this.state.slogan}
                  onChange={this.updateSlogan}
                />
              </label>
              <button
                className="btn-add"
                
                disabled={
                  this.state.header.length < 3 || this.state.header.length > 21
                }
                onClick={this.addCandidate}
              >
                Add
              </button>
            </form>
            </div>
          </div>
        
        {loadAdded(this.state.candidates)}
      </>
    );
  }
}
export function loadAdded(candidates) {
  const renderAdded = (candidate) => {
    return (
      <>
        <div className="container-list success">
          <div
            style={{
              
              maxHeight: "21px",
            }}
          >
            <div className='register-body'>
            <table className='candetails-table'>
              <tr>
                <td>{candidate.id}</td>
                <td>{candidate.header}</td>
                <td>{candidate.slogan}</td>
              </tr>
            </table>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="container-main" >
      
    </div>
  );
}



