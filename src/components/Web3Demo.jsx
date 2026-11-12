import React, { Component } from 'react'
import Web3 from 'web3'
export default class Web3Demo extends Component {
    async componentDidMount() {
        await this.loadInfo();
        await this.loadContract();
    }
    async loadInfo() {
        console.log("load web3 info")
        const web3 = new Web3(window.ethereum)
        const netId = await web3.eth.net.getId()
        console.log("net id = ", netId)
        web3.eth.requestAccounts().then(console.log)
        const accounts = await web3.eth.requestAccounts()
        console.log(accounts[0])

    }
    async loadContract() {
        console.log("load contract information")
    }
    render() {
        return (
            <div><h1>Hi this is a Web3 Demo</h1></div>
        )
    }
}