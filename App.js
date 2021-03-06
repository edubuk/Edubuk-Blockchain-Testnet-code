//Connecting frontend with smart contracts using web3

import './App.css';
import React, { Component } from 'react';
// import React, {Component} from 'react';
import Web3 from 'web3';
import Navbar from './Navbar'






// const App = () => {
//   const [state, setState] = useState({
//     web3: null,
//     contract: null,
//     email: '',
//     account: '',
//     accountId: '',
//     signedIn: false,
//     loaded: false,
//   });
//   // ...
// };



// //Using this instance, we can get the connected network info and get the correct smart contract ABIs. Then all of this data will be updated in the state variable with the useState React hook.

// const initWeb3 = async () => {
//   if (window.ethereum) {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     try {
//       const web3 = new Web3(window.ethereum);
//       const account = (await web3.eth.getAccounts())[0];
//       const netId = await web3.eth.net.getId();
//       const address = SmartContract.networks[netId].address;
//       const contract = new web3.eth.Contract(SmartContract.abi, address);
//       const accountId = await contract.methods.address_to_id(account).call();
//       setState({
//         ...state,
//         web3,
//         account,
//         contract,
//         accountId,
//         loaded: true,
//       });
//       console.log('setup complete');
//     } catch (e) {
//       alert(e);
//     }
//   } else {
//     alert('web3 not detected');
//   }
// };

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      console.log(marketplace)
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

constructor(props) {
  super(props)
  this.state = {
    // account: '',
    // productCount: 0,
    // products: [],
    // loading: true

    // web3: null,
    contract: null,
    email: '',
    account: '',
    accountId: '',
    signedIn: false,
    loaded: false,

  }
}


render() {
  return (
    <div>
      <Navbar account={this.state.account} />
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <a
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <h1>Dapp University Starter Kit</h1>
              <p>
                Edit <code>src/components/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEARN BLOCKCHAIN <u><b>NOW! </b></u>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
}

export default App;



























//Function to login the user
// const login = async () => {
//   try {
//     const accountType = await state.contract.methods.login(state.email).call({
//       from: state.account,
//     });
//     console.log('account type:', accountType);
//     setState({ ...state, signedIn: true });
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to sign up the user
// const signUpemployee = async () => {
//   try {
//     await state.contract.methods
//       .sign_up(state.email, 'name', 'employee')
//       .send({ from: state.account });
//     alert('signed up');
//   } catch (e) {
//     console.error(e);
//   }
// };
// document.getElementById("btn-signupemployee").onclick = signUpemployee;

// const signUp = async () => {
//   try {
//     await state.contract.methods
//       .sign_up(state.email, 'name', 'company', 'employee', 'institute', 'student', 'expert', 'learner')
//       .send({ from: state.account });
//     alert('signed up');
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to request adding user to company
// const requestCompany = async (startDate, endDate, role, companyId) => {
//   try {
//     await state.contract.methods.add_experience(
//       state.accountId,
//       startDate,
//       endDate,
//       role,
//       companyId
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to request adding user to Institute
// const requestInstitute = async (startDate, endDate, stream, instituteId) => {
//   try {
//     await state.contract.methods.add_internship(
//       state.accountId,
//       startDate,
//       endDate,
//       stream,
//       instituteId
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to request adding user to Expert
// const requestExpert = async (startDate, endDate, course, expertId) => {
//   try {
//     await state.contract.methods.add_project(
//       state.accountId,
//       startDate,
//       endDate,
//       course,
//       expertId
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to approve an employee into the company 
// const approveEmployee = async (experienceId, companyId) => {
//   try {
//     await state.contract.methods.approve_experience(experienceId, companyId);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to approve Student into the Institute
// const approveStudent = async (internshipId, instituteId) => {
//   try {
//     await state.contract.methods.approve_internship(internshipId, instituteId);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to approve Learner into the Expert
// const approveLearner = async (projectId, expertId) => {
//   try {
//     await state.contract.methods.approve_project(projectId, expertId);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to update the linked wallet address
// const updateWallet = async (newAddress) => {
//   try {
//     await state.contract.methods.update_wallet_address(state.email, newAddress);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to approve a user as a manager
// const approveManager = async (empId) => {
//   try {
//     await state.contract.methods.approve_manager(empId);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to approve a user as a Dean
// const approveDean = async (studentId) => {
//   try {
//     await state.contract.methods.approve_dean(studentId);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to approve a user as a Expert
// const approveExpert = async (learnerId) => {
//   try {
//     await state.contract.methods.approve_expert(learnerId);
//   } catch (e) {
//     console.error(e);
//   }
// };


//Function to add a certificate
// const addCertificate = async (
//   certUrl,
//   issueDate,
//   validTill,
//   certName,
//   issuer,
//   linkedSkill
// ) => {
//   try {
//     await state.contract.methods.add_certification(
//       state.accountId,
//       certUrl,
//       issueDate,
//       validTill,
//       certName,
//       issuer,
//       linkedSkill
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to add a skill
// const addSkill = async (skillName) => {
//   try {
//     await state.contract.methods.add_skill(state.accountId, skillName);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to add MIIT Profile
// const addmiitprofile = async (miitprofileName) => {
//   try {
//     await state.contract.methods.add_miitprofile(state.accountId, miitprofileName);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to add Customized Learning Plan CLP
// const addclp = async (clpName) => {
//   try {
//     await state.contract.methods.add_clp(state.accountId, clpName);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to add Grade
// const addgrade = async (gradeName) => {
//   try {
//     await state.contract.methods.add_grade(state.accountId, gradeName);
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to endorse a skill
// const endorseSkill = async (empId, skillId, comment) => {
//   const date = new Date();
//   try {
//     await state.contract.methods.endorse_skill(
//       empId,
//       skillId,
//       `${date.getMonth()} ${date.getFullYear()}`,
//       comment
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to endorse MIIT Profile
// const endorsemiitprofile = async (studentId, miitprofileId, comment) => {
//   const date = new Date();
//   try {
//     await state.contract.methods.endorse_miitprofile(
//       studentId,
//       miitprofileId,
//       `${date.getMonth()} ${date.getFullYear()}`,
//       comment
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to endorse Customized Learning Plan CLP
// const endorseclp = async (studentId, clpId, comment) => {
//   const date = new Date();
//   try {
//     await state.contract.methods.endorse_clp(
//       studentId,
//       clpId,
//       `${date.getMonth()} ${date.getFullYear()}`,
//       comment
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

//Function to endorse Grade
// const endorsegrade = async (studentId, gradeId, comment) => {
//   const date = new Date();
//   try {
//     await state.contract.methods.endorse_grade(
//       studentId,
//       gradeId,
//       `${date.getMonth()} ${date.getFullYear()}`,
//       comment
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };


