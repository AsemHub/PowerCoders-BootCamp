import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail';
const App = () => {
  return (
    <div className="ui container comments">
       <CommentDetail 
        author="Sam"
        date="Yesterday at 9:24PM"
        text="Keep it up!" 
        avatar={faker.image.avatar()}
        />
       <CommentDetail 
       author="Alex" 
       date="Yesterday at 10:16PM" 
       text="Indeed!" 
       avatar={faker.image.avatar()}
       />
       <CommentDetail 
       author="Jane" 
       date="Today at 9:23AM" 
       text="Nice blog post!" 
       avatar={faker.image.avatar()}
       />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
