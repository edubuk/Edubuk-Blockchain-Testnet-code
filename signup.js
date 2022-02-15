// Source code to interact with smart contract

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
  });
  console.log (window.web3.currentProvider)
  
  // contractAddress and abi are setted after contract deploy
  var contractAddress = '0x9DB06dC28C2963CA5dd76c2719267215377C3D2b';
  var abi = JSON.parse( '[{"inputs": [{"internalType": "string","name": "email", "type": "string"},{"internalType": "string","name": "name","type": "string"},{"internalType": "string","name": "acc_type","type": "string"}],"name": "sign_up","outputs": [],"stateMutability": "nonpayable","type": "function"}]' );
  
  //contract instance
  contract = new web3.eth.Contract(abi, contractAddress);
  
  // Accounts
  var account;
  
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      alert("No account found! Make sure the Ethereum client is configured properly.");
      return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
  });
  
  //Smart contract functions
  function sign_up_new() {
    email = $("#newInfo").val();
    name = $("#newInfo1").val();
    acc_type = $("#newInfo2").val();
    contract.methods.sign_up (email,name,acc_type).send( {from: account}).then( function(tx) {
      console.log("Transaction: ", tx);
    });
    $("#newInfo").val('');
    $("#newInfo1").val('');
    $("#newInfo2").val('');
  }
  
  function login_company_employee() {
    contract.methods.logincompany().call().then( function( info ) {
      console.log("info: ", info);
      document.getElementById('lastInfo').innerHTML = info;
    });
  }