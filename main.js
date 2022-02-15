// const { default: Moralis } = require("moralis/types");

/* Moralis init code */
const serverUrl = "https://rwwqvzq9zydg.usemoralis.com:2053/server";
const appId = "3MmwpfyqFzpKL8A8cz22CZjfNEnI1ahNAqSxs560";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
      let user = Moralis.User.current();
      if (!user) {
        try{
            user = await Moralis.authenticate({ signingMessage: "Log in using Metamask" });
            await Moralis.enableWeb3();
            console.log("logged in user:", user);
            console.log(user.get('ethAddress'));
        }   catch(error) {
            console.log(error)
          }
      }
    }


async function logOut() {
  await Moralis.User.logOut();
  alert("You are Logged Out, See You Soon!");
  console.log("logged out");
}

// function email2(){
// var email3 = document.getElementById("email1").value; 
// }

// function name2(){
//   var name3 = document.getElementById("name1").value; 
//   }
  
// function acctype2(){
//     var acctype3 = document.getElementById("acctype1").value; 
//     }
    
function email2(){
  var email3 = document.getElementById("email1").value; 
  return email3 
}
  
function name2(){
 var name3 = document.getElementById("name1").value; 
  return name3  
}
    
function acctype2(){
 var acctype3 = document.getElementById("acctype1").value; 
  return acctype3  
}
  

// async function getEmployeeData() {
// var Web3 = require('web3');
// const web3 = new Web3(Web3.givenprovider);
// const accounts = await web3.eth.getAccounts()
// const contract = new web3.eth.Contract(ABI4,"0x5d003c4f3b1b082213c37f38e5cfe05ab8a897d1");
// await contract.methods.sign_up(email2(),name2(),acctype2()).send({from:accounts[0]})
// }

// document.getElementById("btn-employeedata").onclick = getEmployeeData;





async function signupnew(){

 var options = {
   chain: "Mumbai",
   contractAddress:"0x5d003c4f3b1b082213c37f38e5cfe05ab8a897d1",
   functionName: "sign_up",
   abi:ABI4,
   params:{
     email: email2.email3,
     name: name2.name3,
     acc_type: acctype2.acctype3
    },
    // msgValue: Moralis.Units.ETH(0.1) 
 }
  await Moralis.enableWeb3();
  // user = await Moralis.a uthenticate({ signingMessage: "Log in using Metamask" });
  await Moralis.executeFunction(options);

  console.log("logged out");
}


document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-signupnew").onclick = signupnew;


  var ABI4 = [
    {
      "constant": true,
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issue_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valid_till",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "linked_clp_id",
          "type": "uint256"
        }
      ],
      "name": "add_certification_clp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issue_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valid_till",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "linked_grade_id",
          "type": "uint256"
        }
      ],
      "name": "add_certification_grade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issue_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valid_till",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "linked_miitprofile_id",
          "type": "uint256"
        }
      ],
      "name": "add_certification_miitprofile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issue_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valid_till",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "linked_skill_id",
          "type": "uint256"
        }
      ],
      "name": "add_certification_skill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "studentid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "clp_name",
          "type": "string"
        }
      ],
      "name": "add_clp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "company_id",
          "type": "uint256"
        }
      ],
      "name": "add_employee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "starting_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ending_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "company_id",
          "type": "uint256"
        }
      ],
      "name": "add_experience",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "studentid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "grade_name",
          "type": "string"
        }
      ],
      "name": "add_grade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "starting_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ending_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "institute_id",
          "type": "uint256"
        }
      ],
      "name": "add_internship",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "studentid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "miitprofile_name",
          "type": "string"
        }
      ],
      "name": "add_miitprofile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "learner_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "starting_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ending_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "expert_id",
          "type": "uint256"
        }
      ],
      "name": "add_project",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employeeid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "skill_name",
          "type": "string"
        }
      ],
      "name": "add_skill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "address_to_id",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "dean_id",
          "type": "uint256"
        }
      ],
      "name": "approve_dean",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "company_id",
          "type": "uint256"
        }
      ],
      "name": "approve_employee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "exp_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "company_id",
          "type": "uint256"
        }
      ],
      "name": "approve_experience",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "expert_id",
          "type": "uint256"
        }
      ],
      "name": "approve_expert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "int_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "institute_id",
          "type": "uint256"
        }
      ],
      "name": "approve_internship",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        }
      ],
      "name": "approve_manager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proj_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expert_id",
          "type": "uint256"
        }
      ],
      "name": "approve_project",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "certifications",
      "outputs": [
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issue_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valid_till",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "clps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "verified",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "companies",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wallet_address",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "email_to_address",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "employees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "company_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wallet_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "is_employed",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "is_manager",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "is_approved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "num_skill",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "clp_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "endorsing_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "comment",
          "type": "string"
        }
      ],
      "name": "endorse_clp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "grade_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "endorsing_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "comment",
          "type": "string"
        }
      ],
      "name": "endorse_grade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "student_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "miitprofile_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "endorsing_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "comment",
          "type": "string"
        }
      ],
      "name": "endorse_miitprofile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "employee_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "skill_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "endorsing_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "comment",
          "type": "string"
        }
      ],
      "name": "endorse_skill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "endorsments",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "endorser_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "comment",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "experiences",
      "outputs": [
        {
          "internalType": "string",
          "name": "starting_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ending_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "employee_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "company_id",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "is_approved",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "experts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wallet_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "is_expertadmin",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "grades",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "verified",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "institutes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wallet_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "is_dean",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "internships",
      "outputs": [
        {
          "internalType": "string",
          "name": "starting_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ending_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "currently_intern",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "institute_id",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "is_approved",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "is_company",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "is_expert",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "is_institute",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "learners",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "institute_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expert_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wallet_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "is_alearner",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "is_expert",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "num_skill",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "logincompany",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "loginexpert",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        }
      ],
      "name": "logininstitute",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "miitprofiles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "verified",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "projects",
      "outputs": [
        {
          "internalType": "string",
          "name": "starting_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ending_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "currently_enrolled",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "expert_id",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "is_approved",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "acc_type",
          "type": "string"
        }
      ],
      "name": "sign_up",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "skills",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "verified",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "students",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "institute_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "edubukcompany_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "wallet_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "is_collegestudent",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "is_dean",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "is_edubukadmin",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "num_degree",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "num_skill",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "num_miitprofile",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "num_clp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "num_grade",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "num_internship",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "new_address",
          "type": "address"
        }
      ],
      "name": "update_wallet_address",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

 /* var options = {
    chain: "Mumbai",
    address: "0x5d003c4f3b1b082213c37f38e5cfe05ab8a897d1",
    function_name: "sign_up",
    abi: ABI4,
    params: {email: any, name:"", company: any, employee: any, institute: any, student: any, expert: any, learner: any}
  };
  */

  //var sign_up = await Moralis.Web3API.native.runContractFunction(options)
  
  //var events = await Moralis.Web3API.native.getContractEvents(options);
  
  
   /* const signUp = async () => {
    try {
      await state.contract.methods
        .sign_up(state.email, 'name', 'company', 'employee', 'institute', 'student', 'expert', 'learner')
        .send({ from: state.account });
      alert('signed up');
    } catch (e) {
      console.error(e);
    }
  };




const signUp = () => {
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    chain: "Mumbai",
    abi: ABI4,
    contractAddress: "0x5d003c4f3b1b082213c37f38e5cfe05ab8a897d1",
    functionName: "sign_up",
    params: {
      secondsAgos: [0, 10],
    },
  });
}

document.getElementById("btn-signup").onclick = signUp;
*/