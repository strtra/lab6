import React, { Component } from 'react'
import Web3 from 'web3'
import Simple from "../sol/Simple.json"
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
        try {
            const web3 = new Web3(window.ethereum)
            const netId = await web3.eth.net.getId()
            const simple1 = new web3.eth.Contract(
                Simple.abi,
                Simple.networks[netId].address
            )
            console.log("load success", simple1._address)
            const manager_address = await simple1.methods.manager().call()
            console.log("manager address=", manager_address)
        } catch (e) {
            console.log("Error happened while load contracts,", e)
        }
    }
    render() {
        return (
            <div><h1>Hi this is a Web3 Demo</h1></div>
        )
    }
}