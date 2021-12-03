import React from 'react';
import Carrossel from '../../components/carrossel/Carrossel';
import Footer from "../../components/footer/Footer"
import Navbar from '../../components/Navbar';


function Home(){
    return(
        <>  
            <Navbar />
            <Carrossel />
            <Footer/>
            
        </>
    );
}

export default Home;