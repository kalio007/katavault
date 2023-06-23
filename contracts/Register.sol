//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FileRegister {
  struct File{
    string fileName;
    string fileHash;
    string fileLink;
  }

  mapping (string => File[]) private register;

  event FileAdded(string _userID, string _fileName, string _fileHash);

  function returnFiles(string memory userID) public view returns(File[] memory) {
    // File[] memory files = new File[](register[userID].length);
    // for (uint i = 0; i < register[userID].length; i++) {
    //   files[i] = register[userID][i];
    // } 
    // return files;
    return register[userID];
  }

  function addFile(
    string memory userID,
    string memory _fileName,
    string memory _fileHash,
    string memory _fileLink
  )
  public {
    register[userID].push(File(_fileName, _fileHash, _fileLink));
    emit FileAdded(userID, _fileName, _fileHash);
  }

}