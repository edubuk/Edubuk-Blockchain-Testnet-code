<!DOCTYPE html>
<html >
  <head>
    <title>Edubuk information at Blockchain</title>

    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
    <script src="./node_modules/web3/dist/web3.min.js"></script>
    <script src="./signup.js"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://unpkg.com/moralis/dist/moralis.js"></script> -->

  </head>

  <body class="container">

    <h1 class="page-header">Edubuk information at Blockchain - Polygon network</h1>

    <div class="row">
      <div>
        <h3 class="sub-header">Signup Here using Metamask Wallet Address</h3>
        <form class="form-inline" role="form">
          <div class="form-group">
            <table>
              <tr>
                <td><label for="newInfo">Email:</label> </td>
                <td>
                  <input class="form-control" id="newInfo">
                </td>
                <td><label for="newInfo1">Name:</label> </td>
                <td>
                  <input class="form-control" id="newInfo1">
                </td>
                <td><label for="newInfo2">Acc_type:</label> </td>
                <td>
                  <input class="form-control" id="newInfo2">
                </td>
              </tr>
            </table>
          </div>
          <a href="#" onclick="sign_up_new()" class="btn btn-primary">Record on Blockchain</a>
        </form>
      </div>
    </div>

    <div class="row">
      <div>
        <h3 class="sub-header">Companies and Employees: Login Here</h3>
        <form class="form-inline" role="form">
          <a href="#" onclick="registerGetInfo()" class="btn btn-primary">Retrieve from Blockchain</a>
          <div class="form-group">
            <table>
              <tr>
                <td><label for="lastInfo">Web3 Address:</label> </td>
                <td>
                  <input class="form-control" id="lastInfo">
                </td>
                <!-- <td>Info:</td>
                <td>
                  <label id="lastInfo">
                </td> -->
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>

  </body>
</html>