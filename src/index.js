import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

function Room() {
  const [data, SetData] = useState([]);

  function post(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let postText = document.getElementById("postText").value;
    var profileUrl = document.getElementById('proPic').value;
    var imgUrl = document.getElementById('pic').value;

    let newData = {
      postText : postText,
      name : name,
      profileUrl: profileUrl,
      imgUrl: imgUrl,
    }
    console.log(postText);
    SetData((previousValue) => {
      return previousValue.concat([newData]);
    })  
    document.getElementById("name").value = "";
    document.getElementById("postText").value = "";
    document.getElementById('proPic').value = "";
    document.getElementById('pic').value ="";

  }
  return (
    <div>
      <div className="container">
    <form onSubmit={post}>
      <input required placeholder= "Enter Your Name" type= "text" id="name"/>
      <br/>
      <textarea required placeholder= "What's your mind" type="text" id="postText"/>
      <br/>
      <input required placeholder= "Profile Picture URL" type="text" id="proPic"/>
      <br/>
      <input required placeholder= "Picture URL" type="text" id="pic"/>
      <br/>
      <button className="btn"> Post </button>
    </form>
    </div>
      {console.log("data: " , data)}

      {data.map((eachItem, i) => {
        return <div className="main">
        <div>
          <div className="profile"> <img src={eachItem.profileUrl} /></div>
          <div className="div">
            <p className="titel"> {eachItem.name}  </p>
            <p className="body"> 0sec  </p>
            <div className="clear"></div>
          </div>
        </div>
        <div>
          <p>{eachItem.postText}</p>
        </div>
        <div className="img"><img src={eachItem.imgUrl} /></div>
    
      </div>
        
      })}

    </div>
  );
}
ReactDOM.render(<Room/>,document.getElementById('root')
);

