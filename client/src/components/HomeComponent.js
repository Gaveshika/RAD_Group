import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container home text-center align-self-center">
        <br/><br/><br/>
            
            <h1 className="main-txt" align="center"> Welcome to the UCSC Library</h1>
            
            <div className="row box darkbg justify-content-center">            
           
                               <h6>Welcome to Our Library - Where Books Come to Life! 📚✨ </h6> 
                <h6> Students, embark on your reading journey by registering with us. Dive into a world of knowledge and imagination!</h6>
            
               
            
            </div>
                
        </div>
            
        );
}

}

export default Home;