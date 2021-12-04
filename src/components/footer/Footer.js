import React from 'react';
import '../style/styled.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <footer>
           <p style={{color: '#fff'}}> Feito pelo grupo 6 para o trabalho de conclusão da matéria Desenvolvimento Web.  <strong> Yuri Weilemann da 100!!</strong> Tic/Serratec.</p>
           <div className="container">
            <div className="footerlink1">
                <ul>
                    <li>
                        <a href="https://github.com/anaclarabull" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/><span style={{paddingLeft:8, paddingRight: 15}}>Ana</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/DaniCaovilla" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/><span style={{paddingLeft:9, paddingRight: 12}}>Dani</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/Natanalpe" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/><span style={{paddingLeft:6, paddingRight: 5.5}}>Natan</span></a>
                    </li>
                </ul>
            </div>

            <div className="footerlink2">
                <ul>
                    <li>
                        <a href="https://github.com/Paulo-BFR" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/><span style={{paddingLeft:16, paddingRight: 9}}>Paulo</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/viniciusrschiffler" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/><span style={{paddingLeft: 8}}>Vinicius</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/WillianMotta" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"/><span style={{paddingLeft: 12}}>Willian</span></a>
                    </li>
                </ul>

            </div>
        </div>  
           
           
        </footer>
    );


}