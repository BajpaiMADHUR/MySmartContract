var Bank = artifacts.require("Bank");
MediaSourceHandle.exports = function (deployer) {
    deployer.deploy(Bank);
};