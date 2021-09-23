window.onload = function () {
  console.log("Client-side code running");

  document.getElementById("mint").onclick = function mint() {
    mintbetternft();
  };

  document.getElementById("connect wallet").onclick = function connect() {
    connectWallet();
  };

  document.getElementById("show nft").onclick = function show() {
    getNFTsOfUser();
  };
};
var walletID = "x";
var theTransactionHash = "";
var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [],
		"name": "baseURI",
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
		"inputs": [],
		"name": "cost",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
		"inputs": [],
		"name": "getPrice",
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
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
		"inputs": [],
		"name": "maxMintAmount",
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
		"inputs": [],
		"name": "maxSupply",
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
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_mintAmount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
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
		"inputs": [],
		"name": "owner",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "setCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_extensionURI",
				"type": "string"
			}
		],
		"name": "setOwnedTokenURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_extensionURI",
				"type": "string"
			}
		],
		"name": "setTokenExtensionURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newmaxMintAmount",
				"type": "uint256"
			}
		],
		"name": "setmaxMintAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
		"inputs": [],
		"name": "symbol",
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
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
		"inputs": [],
		"name": "totalSupply",
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
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "walletOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

var address = "0x8570eeb3733611AC0E4cbC77FE5b38d7c6797BE0";
var jsonBaseAddress = "https://vectornft.mypinata.cloud/ipfs/";
var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

function connectWallet() {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    ethereum
      .enable()
      .then(() => {
        console.log("Ethereum enabled");
        web3.eth.getAccounts(function (err, acc) {
          if (err != null) {
            self.setStatus("There was an error fetching your accounts");
            return;
          }
          if (acc.length > 0) {
            console.log(acc);
            walletID = acc[0];
            document.getElementById("demo").innerHTML = "CONNECTED!";
            return;
          }
        });
      })
      .catch(() => {
        console.warn("User didn't allow access to accounts.");
        document.getElementById("demo").innerHTML = "CONNECTION REJECTED!";
        waitLogin();
      });
  } else {
    console.log("Non-Ethereum browser detected. You should consider installing MetaMask.");
    document.getElementById("demo").innerHTML = "METAMASK NOT FOUND! PLEASE INSTALL OR USE A DAPP!";
  }
  // })
}


async function mintbetternft() {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    ethereum
      .enable()
      .then(() => {
        console.log("Ethereum enabled");
        web3.eth.getAccounts(function (err, acc) {
          if (err != null) {
            self.setStatus("There was an error fetching your accounts");
            return;
          }
          if (acc.length > 0) {
            var contract = new web3.eth.Contract(abi, address);
            let contractFunctionData = contract.methods.mint(acc[0], 1).encodeABI();
            var price = 0;
            contract.methods.getPrice().call((err, result) => {
              if (!err) {
                price = result;
                console.log(result);
                web3.eth.sendTransaction(
                  {
                    from: acc[0],
                    to: address,
                    value: price,
                    data: contractFunctionData,
                  }).on('receipt', function(receipt) {
                    //console.log(receipt);
                    console.log(web3.utils.hexToNumber(receipt.logs[0].topics[3]));
                    document.getElementById("mintprocess").innerHTML = "SUCCESSFULLY MINTED AN NFT";
                    /*$.ajax({
                      url: "test1",
                      success: function (res) {
                        console.log("server response is", res);
                        console.log(typeof res);
                        // send Change URI transaction
                        
                        setTokenURI(eceipt.logs[0].topics[3], res);
                          let functionData = contract.methods.setOwnedTokenURI(receipt.logs[0].topics[3], res).encodeABI();
                          web3.eth.sendTransaction(
                            {
                              from: acc[0],
                              to: address,
                              value: 1,
                              data: functionData,
                            }).on('receipt', function(receipt) {
                              console.log("Token at: " + web3.utils.hexToNumber(receipt.logs[0].topics[3])+ " Set to uri at:" + res);                     
                            });
                        //TODO unpin last nft if mint was not allowed
                      },
                    });*/

                  });
                  
                
              } else document.getElementById("mintprocess").innerHTML = "ERROR CALCULATING PRICE";
            });
          }
        });
      })
      .catch(() => {
        console.warn("User didn't allow access to accounts.");
        waitLogin();
      });
  } else {
    console.log("ERROR.");
  }
}

function setTokenURI(id, ipfs) {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    ethereum
      .enable()
      .then(() => {
        console.log("Ethereum enabled");
        web3.eth.getAccounts(function (err, acc) {
          if (err != null) {
            self.setStatus("There was an error fetching your accounts");
            return;
          }
          if (acc.length > 0) {
            var contract = new web3.eth.Contract(abi, address);
            let functionData = contract.methods.setOwnedTokenURI(id, ipfs).encodeABI();
            var price = 0;
            contract.methods.getPrice().call((err, result) => {
              if (!err) {
                price = result;
                console.log(result);
                web3.eth.sendTransaction(
                  {
                    from: acc[0],
                    to: address,
                    value: 0,
                    data: contractFunctionData,
                  }).on('receipt', function(receipt) {
                      console.log("Token at: " + id+ " Set to uri at:" + ipfs);                     
                });          
              } else document.getElementById("mintprocess").innerHTML = "ERROR CALCULATING PRICE";
            });
          }
        });
      })
      .catch(() => {
        console.warn("User didn't allow access to accounts.");
        waitLogin();
      });
  } else {
    console.log("ERROR.");
  }
}

function getNFTsOfUser() {
  // DELETE ALREADY SHOWING NFTs
  const myNode = document.getElementById("placetoshownfts");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  var contract = new web3.eth.Contract(abi, address);
  contract.methods.balanceOf(walletID).call((err, result) => {
    if (!err) {
      numerOfTokensUserHas = result;
      arrayOfTokensUserHas = [];
      for (let i = 0; i < result; i++) {
        contract.methods.tokenOfOwnerByIndex(walletID, i).call((err, result) => {
          arrayOfTokensUserHas.push(result);

          contract.methods.tokenURI(result).call((err, result) => {
            console.log(result);
            getJSON(result, function(err, data) {   
              var theURL = data.image;
              var img = document.createElement("img");
              var tokenNumber = document.createElement("h2");
              var lineBreak = document.createElement("br");
              img.src = theURL;
              img.class = "nftimages";
              img.style = "width: 100%;max-width: 200px;height: auto;display: block;margin-left: auto;margin-right: auto;";
              tokenNumber.style = "font-size: max(2vw, 30px);text-align: center;";
              tokenNumber.innerHTML = data.name;
              document.getElementById("placetoshownfts").appendChild(tokenNumber);
              document.getElementById("placetoshownfts").appendChild(img);
              document.getElementById("placetoshownfts").appendChild(lineBreak);
            });
          });
          
        });
      }
    } else document.getElementById("numberoftokens").innerHTML = err;
  });
}
