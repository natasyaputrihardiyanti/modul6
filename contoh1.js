import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
constructor(props){
  super(props)
  this.state={
    datas:[]
  }
}

componentDidMount(){
  fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
  .then(response => response.json())
  .then((data)=>{
    this.setState({datas: data});
  })
}

  render(){
    return(
    <div>
    {
      this.state.datas.map((dinamis, key)=>
      <div>
        <h3>{dinamis.nama} - Rp. {dinamis.harga}</h3>
      </div>
    )
    }
    </div>
  );
  }
}
export default contoh1;
