import React, { useState } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
//Creating IPFS client
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
});

export default function Create() {

    const [buffer, setBuffer] = useState(null);
    const [picHash, setPicHash] = useState("QmbvZ5nrwX1m26K3mnM5ekPBFsRSXTGBRnuLa3kU1EGSqM");
    const captureFile = (event) => {
        event.preventDefault();
        // PROCESSING FILE FOR IPFS
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            setBuffer(Buffer(reader.result));
        }
        // console.log("File uploaded");
    }

    /* Example Hash:- QmbvZ5nrwX1m26K3mnM5ekPBFsRSXTGBRnuLa3kU1EGSqM 
   Example url:- https://ipfs.infura.io/ipfs/QmbvZ5nrwX1m26K3mnM5ekPBFsRSXTGBRnuLa3kU1EGSqM
*/
    const onsubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
        ipfs.add(buffer, (error, result) => {
            setPicHash(result[0].hash);
            console.log('ipfs result', result);
            if (error) {
                console.error(error);
                return;
            }
        });
    }


    return (
        <div>
            <Header />
            <img src={"https://ipfs.infura.io/ipfs/"+picHash} className="App-logo" alt="logo" />
            <p>&nbsp;</p>
            
            <form onSubmit={onsubmit}>
                <input type='file' onChange={captureFile} />
                <input type='submit' />
            </form>
            <Footer />
        </div>
    );
}