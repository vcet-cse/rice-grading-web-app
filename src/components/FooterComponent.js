import React from 'react';

function Footer(props){
    return(
        <div className="footer footer-area">
            <div className="text-center">
                <div className="text-white">Copyright &copy;{" "}{ new Date().getFullYear() }{" "}
                        All rights reserved | This Project is made with{" "} 
                        <span className="fa fa-heart text-danger" aria-hidden="true"></span>
                        {" & "}
                        <span className="fa fa-gavel text-danger" aria-hidden="true"></span>
                        {" "}by 
                    </div>
                <div className="text-success">VCET</div>
            </div>
        </div>
    );
}

export default Footer;