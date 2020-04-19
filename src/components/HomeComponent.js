import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';

const HomePage = () => {
        return(
            <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="mt-4 mb-4">
                            <Card>
                                <CardBody className="bg-info">
                                    <CardTitle className="text-center"><strong>Rice Grain Grading System</strong></CardTitle>
                                    <CardText>
                                        <strong>
                                            Quality of grain is of great importance for human beings as it 
                                            directly impacts the human health. Hence there is a great need to 
                                            measure a quality of grain and identifying adulteration or non-quality elements
                                            and analyzing the grain sample manually is more time consuming and 
                                            complicated process, and having more chances of 
                                            errors with the subjectivity of human perception.
                                            Demand for the quality of the food grains we consume day by day.
                                            India is the second largest producers of food grains.
                                            With increasing demand traders cheat shopkeepers by poor quality of 
                                            rice and farmers by giving them less money than they deserve.
                                            The main purpose of grading algorithm is to find out the grade of the rice.
                                            The quality analysis of the grain type is done and graded the grain type as 
                                            Premium grade 1, grade2 and grade 3 depending  on features.
                                        </strong>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="mt-4 mb-4">
                            <img src="/assets/images/home_rice.gif" className="home_gif"/>
                        </div>
                    </div>
                </div>
                <center>
                    <Link to="/grade">
                        <Button className="mt-4 mb-4" >START GRADING</Button>
                    </Link>
                </center>
            </div>
            </div>
        );
}

export default HomePage;