import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
constructor(props){
  super(props)
  this.state={
    users:[]
  }
}

componentDidMount(){
  fetch("https://randomuser.me/api/?results=10")
  .then(res => res.json())
  .then((parsedJSON => parsedJSON.result.map(data=> (
    {
    id: '${data.id.name}' ,
    firstName : '${data.name.first}' ,
    lastName : '${data.name.last}' ,
    location :'${data.location.state}, ${data.nat}'  ,
    thumbnail: '${data.picture.large}',
    }
  )))
    .then(users => this.setState({
      users,
      isLoaded : false
    }))
    .catch(error => console.log('parsing failed', error))
}
render(){
  const {users}= this.state;
  return(
    <div className="boxWhite">
    <h2> Random USers</h2>
    {
      users.lenght >0 ? users.map(item => {
        const {id, firstName,lastName,location,thumbnail}= item ;
        return(

          <div key={id} className="bgCircle">
          <center><img src={thumbnail} alt={firstName} className="circe"/></center><br/>
          <div className="ctr">
          {firstName} {lastName} <br/>
          {location}
          </div>
          </div>
        );
      }) : null
    }
    </div>
  );
}
}

class App extends React.Component{
  render(){
    return(
      <div className ="App">
      <header className="App-header">
      <Data />
      </header>
      </div>
    );
  }
}

export default App;








// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class Data extends React.Component{
//   constructor(props){
//     super(props)
//     this.state= {
//       siswa: [
//         {
//           id:1,
//           nama: 'Natasya Putri H',
//         },
//         {
//           id:2,
//           nama: 'Alya acis',
//         },
//         {
//           id:3,
//           nama: 'Panderman',
//         }
//       ]
//     }
//   }
//   render(){
//     return(
//       <div>
//       {
//         this.state.siswa.map((dinamis, key)=>
//         <div>
//         <h3>{dinamis.id}. {dinamis.nama}</h3>
//         </div>
//       )
//       }
//       </div>
//     );
//   }
// }
//
// class App extends React.Component{
//   render(){
//     return(
//     <div className="App">
//     <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo"/>
//     <p>
//     Mengakses JSON ReactJS
//     </p>
//     <Data/>
//     </header>
//     </div>
//   );
//   }
// }
// export default App;
