import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return(
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-8">
                        <h1>Rice grain grading</h1>
                        <p>
                            Quality of grain is of great importance for human beings 
                            as it directly impacts the human health.
                            Get to the Know Grade of rice you are using by 
                            uploading rice image to our grading system.
                        </p>
                    </div>
                    <div className="col-12 col-sm-2 ml-4">
                        <img src="assets/gif/header.gif" alt="description of gif" className="header-gif" />
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
}

export default Header;