import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import './Vote.css';
import img1 from '../../assets/arvindkejriwal.jpg';
import img2 from '../../assets/mamata.jpg';
import img3 from '../../assets/narendra modi.jpg';
import img4 from '../../assets/rahulgandhi.jpg';
import img5 from '../../assets/nota.jpg';
import img6 from '../../assets/Uddhav.jpg';
import UserNavbar from '../../components/UserNavbar';
import AdminNavbar from '../../components/AdminNavbar';
/*import Img from '..';*/
import NotInit from "../../components/NotInit";

// Contract
import getWeb3 from "../../getWeb3";
import Election from "../../contracts/Election.json";
import StartEnd from '../../components/StartEnd';


/*import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';

class Vote extends Component {
  render() {
    return (
     <div>
      <Container>
       <Row>
       <Col md={3}>
        
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
       </Col>
       </Row>
     </Container>
     <Container>
       <Row>
       <Col md={3}>
        
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
       </Col>
       </Row>
     </Container>
     <Container>
       <Row>
       <Col md={3}>
        
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
       </Col>
       </Row>
     </Container>
     </div>
     
     
    );
  };
};*/

/*import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';*/
{/*import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Button,Row,Col, Container}
 from 'reactstrap';

class Vote extends Component {
  render() {
    return (
      <>
      <UserNavbar />
      <body className='vote-body'>
      <div className='row1'>
        <div classname='col1-1'>
        <Card>
              <CardImg top width="50%" src={img1} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Arvind Kejriwal</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Aam Aadmi Party</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span>  {' '} </span>
        <div className='col1-2'>
        <Card>
        <CardImg top width="50%" src={img2} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Mamta Banerjee</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">All India Trinamool Congress</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span> </span>
        <div className='col1-3'>
        <Card>
        <CardImg top width="50%" src={img3} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Narendra Modi</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Bharatiya Janata Party</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
      </div> 
    
      <div className='row2'>
        <div className='col2-1'>
        <Card>
        <CardImg top width="50%" src={img4} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Rahul Gandhi </CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Indian National Congress</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span> </span>
        <div className='col2-2'>
        <Card>
        <CardImg top width="50%" src={img6} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Uddhav Thackeray</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Shiv Sena</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <div className='col2-3'>
        <Card>
        <CardImg top width="50%" src={img5} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">NOTA</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">NOTA</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span> </span>
        
      </div>
      </body>
      </>
      

    );
  };
};




export default Vote;*/}
export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ElectionInstance: undefined,
      account: null,
      web3: null,
      isAdmin: false,
      candidateCount: undefined,
      candidates: [],
      isElStarted: false,
      isElEnded: false,
      currentVoter: {
        address: undefined,
        name: null,
        phone: null,
        hasVoted: false,
        isVerified: false,
        isRegistered: false,
      },
    };
  }
  componentDidMount = async () => {
    // refreshing once
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

      // Get total number of candidates
      const candidateCount = await this.state.ElectionInstance.methods
        .getTotalCandidate()
        .call();
      this.setState({ candidateCount: candidateCount });

      // Get start and end values
      const start = await this.state.ElectionInstance.methods.getStart().call();
      this.setState({ isElStarted: start });
      const end = await this.state.ElectionInstance.methods.getEnd().call();
      this.setState({ isElEnded: end });

      // Loading Candidates details
      for (let i = 1; i <= this.state.candidateCount; i++) {
        const candidate = await this.state.ElectionInstance.methods
          .candidateDetails(i - 1)
          .call();
        this.state.candidates.push({
          id: candidate.candidateId,
          image: candidate.image,
          header: candidate.header,
          slogan: candidate.slogan,
        });
      }
      this.setState({ candidates: this.state.candidates });

      // Loading current voter
      const voter = await this.state.ElectionInstance.methods
        .voterDetails(this.state.account)
        .call();
      this.setState({
        currentVoter: {
          address: voter.voterAddress,
          name: voter.name,
          phone: voter.phone,
          hasVoted: voter.hasVoted,
          isVerified: voter.isVerified,
          isRegistered: voter.isRegistered,
        },
      });

      // Admin account and verification
      const admin = await this.state.ElectionInstance.methods.getAdmin().call();
      if (this.state.account === admin) {
        this.setState({ isAdmin: true });
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  renderCandidates = (candidate) => {
    const castVote = async (id) => {
      await this.state.ElectionInstance.methods
        .vote(id)
        .send({ from: this.state.account, gas: 1000000 });
      window.location.reload();
    };
    const confirmVote = (id, header) => {
      var r = window.confirm(
        "Vote for " + header + " with Id " + id + ".\nAre you sure?"
      );
      if (r === true) {
        castVote(id);
      }
    };
    return (
<div className='container' style={{marginLeft:"100px"}}>
      <div className="container-winner" >
        <div className="winner-info">
          <p className="winner-tag"><h1></h1></p>
          <h2>Name: {candidate.header}</h2>
          <p className="winner-slogan">Slogan: {candidate.slogan}</p>
          
        </div>
        <div className="winner-votes">
        
          <div className="vote-count"><img src={`https://ipfs.io/ipfs/${candidate.image}`} style={{width:"200px", height:"200px"}} alt=""/></div>
          
        
        </div>
        <div className="votes-tag"><button
            onClick={() => confirmVote(candidate.id, candidate.header)}
            className="vote-bth" 
            disabled={
              !this.state.currentVoter.isRegistered ||
              !this.state.currentVoter.isVerified ||
              this.state.currentVoter.hasVoted
            }
          >
            Vote
          </button></div>
      </div>
     {/* <div class='register-bodyy'>
      <div className="container-item">
        <div className="candidate-info" >
          <h2>
            {candidate.header} <small>#{candidate.id}</small>
          </h2>
          <p className="slogan">{candidate.slogan}</p>
        </div>
        <div className="vote-btn-container" >
          
        </div>
      </div>
          </div>*/}
          </div>
    );
  };

  render() {
    if (!this.state.web3) {
      return (
        <>
          {this.state.isAdmin ? <UserNavbar /> : <UserNavbar />}
          <center>Loading Web3, accounts, and contract...</center>
        </>
      );
    }

    return (
      <>
        {this.state.isAdmin ? <UserNavbar /> : <UserNavbar />}
        <div>
          {!this.state.isElStarted && !this.state.isElEnded ? (
            <NotInit />
          ) : this.state.isElStarted && !this.state.isElEnded ? (
            <>
              {this.state.currentVoter.isRegistered ? (
                this.state.currentVoter.isVerified ? (
                  this.state.currentVoter.hasVoted ? (
                    <div className="container-item success">
                      <div>
                        <strong>You've casted your vote.</strong>
                        <p />
                        <center>
                          <Link
                            to="/Results"
                            style={{
                              color: "black",
                              textDecoration: "underline",
                            }}
                          >
                            See Results
                          </Link>
                        </center>
                      </div>
                    </div>
                  ) : (
                    <div className="container-item info">
                      <center style={{marginLeft:"650px"}}><h3>Go ahead and cast your vote.</h3></center>
                    </div>
                  )
                ) : (
                  <div className="container-item attention">
                    <center><h3 style={{marginLeft:"690px"}}>Please wait for admin to verify.</h3></center>
                  </div>
                )
              ) : (
                <>
                  <div className="container-item attention">
                    <center>
                      <p>You're not registered. Please register first.</p>
                      <br />
                      <Link
                        to="/Registration"
                        style={{ color: "black", textDecoration: "underline" }}
                      >
                        Registration Page
                      </Link>
                    </center>
                  </div>
                </>
              )}
              <div className="container-main">
                <h2>Candidates</h2>
                <small>Total candidates: {this.state.candidates.length}</small>
                {this.state.candidates.length < 1 ? (
                  <div className="container-item attention">
                    <center>Not one to vote for.</center>
                  </div>
                ) : (
                  <>
                    {this.state.candidates.map(this.renderCandidates)}
                    <div
                      className="container-item"
                      style={{ border: "0px solid black" }}
                    >
                      
                    </div>
                  </>
                )}
              </div>
            </>
          ) : !this.state.isElStarted && this.state.isElEnded ? (
            <>
              <div className="container-item attention">
                <center>
                  <h3 style={{marginLeft:"690px"}}>The Election ended.</h3>
                  <br />
                  <Link
                    to="/Results"
                    style={{ color: "black", textDecoration: "underline" }}
                  >
                    See results
                  </Link>
                </center>
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}