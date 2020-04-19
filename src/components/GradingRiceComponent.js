import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Input, Form } from 'reactstrap';
import Results from './ResultsComponent';
import { Link } from 'react-router-dom';

class Grade extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          imageURL: '/assets/images/select_image_placeholder.jpg',
          results: null,
          isLoding: "none"
        };
    
        //this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.displayImage = this.displayImage.bind(this);
    }

    displayImage(ev){
        ev.preventDefault();
        if (ev.target.files && ev.target.files[0]) {
          this.setState({
                imageURL: URL.createObjectURL(ev.target.files[0])
          });
        }
    }

    handleUploadImage(ev) {
        ev.preventDefault();
        const data = new FormData();
        var riceName = this.riceType.value;
        if(riceName === "NONE"){
            alert("SELECT IMAGE TYPE");
        }
        else if(this.uploadInput.files[0] == null){
            alert("Select Image Please");
        }
        else{
            this.setState({ 
                isLoding: "block"
            });
            data.append('image', this.uploadInput.files[0], riceName);
            fetch('http://192.168.43.159:3001/uploadWeb', {
                method: 'POST',
                body: data,
            }).then((response) => {
                response.json().then((body) => {
                    this.setState({
                        results: body
                    });
                    this.setState({ 
                        isLoding: "none"
                    });
                });
            });
            
        }

    }

    
    render(){
        return(
            <div className="container">
                <img src="/assets/gif/loding_gif.gif" style={{display: this.state.isLoding}} class="loding-gif"/>
                <center>
                    <div className="row">
                        <div className="col-12 col-xs-12 col-sm-6">
                            <form onSubmit={this.handleUploadImage} >
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <div className="mt-4 mb-4">
                                            <div>
                                                <img id="target" src={this.state.imageURL} height="250vmin"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <center>
                                            <input key="target" name="Select File" ref={(ref) => { this.uploadInput = ref; }} onChange={this.displayImage} type="file" className="bg-secondary" />
                                        </center>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 mt-2">
                                        <center>
                                            <select id="cars" ref={(ref) => { this.riceType = ref; }} className="bg-secondary select-image"  >
                                                <option value="NONE" >-- Select Grain Type --</option>
                                                <option value="BOILED_BASMATI">Boiled Basmati</option>
                                                <option value="BOILED_POLISHED_RED">Boiled Polished Red</option>
                                            </select>
                                        </center>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                    <Button type="submit" className="mt-2 mb-4" >START GRADING</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-xs-12 col-sm-6">  
                            <Results resu = {this.state.results} />
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default Grade;