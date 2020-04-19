import React from 'react';

function Footer(props){
    return(
        <div className="footer footer-area">
            <div className="text-center">
                <div className="align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href="http://google.com/+"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
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