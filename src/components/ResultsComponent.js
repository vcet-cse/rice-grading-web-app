import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Input, Form } from 'reactstrap';

const colorSet = {"G_1":"green", "G_3":"red", "P":"gray", "G_2":"yellow"};
const resultSet = {"P":"PREMIUM", "G_1":"GRADE 1", "G_2":"GRADE 2", "G_3":"GRADE 3"};
const bgColors = (grade) => {return(colorSet[grade]);}
const gradeString = (grade) => {return(resultSet[grade]);}

const Results = (props) => {

    if(props.resu !== null){
        return(
            <div className="mt-4 mb-4">
                <Card>
                    <CardBody className="bg-light">
                        <CardTitle className="text-center"><strong><h3>Result</h3></strong></CardTitle>
                        <CardText>
                            <span className="reasult_heading" style={{backgroundColor: bgColors(props.resu.Result)}}>
                                {gradeString(props.resu.Result)}
                            </span>
                            <br /><br />
                            <span>
                                <strong>
                                    Given Rice Grain is : {props.resu.Grain_Type}<br />
                                    Total Identified Grains : {props.resu.Total}<br />
                                    No of Damaged Grains : {props.resu.Damage}<br />
                                    No of Correct Grains : {props.resu.Correct}<br />
                                </strong>
                            </span>
                            <img id="target" src="http://192.168.43.159:3001/get_images/image/Image_result/foo.png" height="250vmin"  />
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }else{
        return(
            <div className="mt-4 mb-4">
                <Card>
                    <CardBody className="bg-info">
                        <CardTitle><strong>Rice Grain Grading System</strong></CardTitle>
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
        );
    }
}

export default Results;
