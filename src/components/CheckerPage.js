import classes from './styles/Checkerpage.module.css';
import React, { Component } from 'react';
import axios from 'axios';

class CheckerPage extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
          url : "" , 
          docfile : "" ,
          visible : false ,
          real : "" ,
          docfileUrl  : "", 
          fake : ""
        }
      }
    

      uploadFile = async(e) => {  
        console.log("uploading file" , this.state.docfile);
        this.setState({ 
        visible: false, 
      });
    
    e.preventDefault();
    const formData = new FormData(); 
    formData.append('file', this.state.docfile , this.state.docfile.name); 
    await axios({ 
      method: 'post', 
      url  : "http://0.0.0.0:8000/uploadfile/", 
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data : formData, 
    })
      .then(res => {
        console.log(res);
        this.setState({
          visible: true,
          real: res.data['real'],
          fake: res.data['fake'],
        });
    
      })
      .catch(error => {
        console.log(error); 
      });
    
    } 

    uploadUrl = async(e) => {  

        this.setState({ 
        visible: false, 
      }); 
      e.preventDefault();
      await axios({ 
      method: 'post', 
      url  : "http://0.0.0.0:8000/url/?url=" + this.state.url, 
      headers: {
        'Content-Type': 'application/json',
      },
      })
      .then(res => {
        console.log(res);
        this.setState({
          visible: true,
          real: res.data['real'],
          fake: res.data['fake'],
        });
      })
      .catch(error => {
        console.log(error); 
      });
      
      }

    render() { 
        return (
            <div>
           <div className={classes.box}>
                <h1 style={{'textAlign':'center'}}className={classes.title}>Deepfake Detector</h1>
                
                        <br /> 
                <form 
                style= {{
                    "width": "60%",
                }}
                onSubmit={this.uploadFile}>
                        <input
                        className = "form-control"
                        type="file" name="file-input" 
                       onChange={(e) => 
                        this.setState({
                          docfile: e.target.files[0],
                          docfileUrl : URL.createObjectURL(e.target.files[0])
                        })
                      } 
                    
                        />
                        <br />
                        <button type='submit' className={classes['btn-primary']}>Submit</button>
                </form>
                <br />

                <form 
                 style= {{
                    "width": "60%",
                }}
                onSubmit={this.uploadUrl}>
                        <input type="url"
                        className = "form-control"
                        onChange={(e) => {
                            this.setState({ 
                              url: e.target.value, 
                            });
                          }}
                        name="url" 
                        placeholder='Enter the url of the image' />
                        <br />
                        <button type='submit' className={classes['btn-primary']}>Submit</button>
                </form>

           </div>
           <div className={classes.results}> 
                {this.state.docfile !== "" ? (
        <img 
        style = {{
          "width" : "350px",
          "height" : "350px",
          "borderRadius" : "10px",
        }}
        src={this.state.docfileUrl} />
      ) : ( 
        <p></p>
      )} 

    {this.state.url !== "" ? (
        <img 
        style = {{
          "width" : "350px",
          "height" : "350px",
          "borderRadius" : "10px",
        }}
        src={this.state.url} />
      ) : ( 
        <p></p>
      )} 
               
               {this.state.visible ? (
<>
                <h1><b>Results:</b></h1>
                <p className={classes.resPhrase}>
                    {this.state.real > this.state.fake ? (
                        <h3>Identification is <bold>Real</bold></h3> 
                     ) : (
                        <h3>Identification is <bold>Fake</bold></h3>

                     )
    } 

                    Fake

                    <div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{"width" : `${this.state.fake}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

                    <br     />
                    Real

                    <div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{"width" : `${this.state.real}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                </p>
                </>
               ) : (
                <></>
               )}
                
           </div>
        </div>
        );
    }
}
 
export default CheckerPage;
