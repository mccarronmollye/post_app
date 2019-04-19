import React from "react";
import { posts } from '../data';

class NewPost extends React.Component{
  constructor(){
    super();

    this.state = {
      title: "",
      content: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleContentChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  addPost = event => {
    //add post to posts
  }

  render(){
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Title
            <input id="title" name="title" type="text" onChange={event => this.handleTitleChange(event)} value={this.state.title}/>
          </label>
        </div>
        <div>
          <label>
            Password
           <input id="content" name="content" type="text" onChange={event => this.handleContentChange(event)} value={this.state.content}/>
          </label>
        </div>
        <div>
          <button onClick={this.addPost} type="submit">Add New Post</button>
        </div>
      </form>
    )
  }
}

export default NewPost
