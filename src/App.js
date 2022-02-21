import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/homePage/HomePage";
// import ScrollArrow from "./Scroll.jsx"
import Tour from 'reactour'
// import Cookies from 'js-cookie' 

class App extends Component {
  constructor(){
    super()
    this.state = {
      isTourOpen : true,  
      isShowingMore: false,
      countData:0,
      status:false,
      isLoading:true
    }

  }

    
  //  const Pdata = Number(Cookies.get('persist-pagecount'))
  //  if(Pdata && Pdata > 1){
  //    const unsub = db.collection('count').doc('zmTUjbygQRgOvBlyIiH2').set({
  //      "countnum": Pdata
  //    }, { merge: true })
  //  }
  // }
  

  closeTour = () =>{
    this.setState({ isTourOpen: false });
  }
  toggleShowMore = () => {
    this.setState((prevState) => ({
      isShowingMore: !prevState.isShowingMore
    }));
  };
  render(){
  if(this.state.isLoading){
     console.log(" countData",this.state.countData)   
     return <div>Loadind....</div>
  }  else {
    console.log(" countData",this.state.countData) 
    return (
    <div className="App">
      <HomePage countData = {this.state.countData} />
    </div>
  )
}
  }  


export default App;
