import React from 'react';
import logo from './todo_logo.png';
import './App.css';

class App extends React.Component{

  //create a constructor//
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  //Add item//
  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      //(...) means want to append all the existing values into it//
      const list = [...this.state.list]; 
      list.push(newItem);
      

      /*setState is a vary special method whenever you want to update 
      anything inside the state you never touch the state directly in
      react, you always touch the state by using set state method*/  

       //set state methods//
      this.setState({  
        list,
        newItem: ""
      });
    }
  }

  //Delete item//
  deleteItem(id){
    //bring out all the list here == copy of the list//
    const list = [...this.state.list];

    //updated list//
    const updatedList = list.filter(item => item.id !== id);
    //(filter) = is a method which expects you to pass on a callback//
    /*(item.id !== id) if the item id is not equal to the id that we are passing in
    then we want to keep that item in the list*/
    /*(item.id !== id) if the item id is equal to the id that we are passing in then 
    we want to remove that item from the list*/

    this.setState({list: updatedList});
  }

  //Update input//
  updateInput(input){
    this.setState({newItem: input}); //newItem being updated by input//
  }


  render(){
    return (
      <div>
        <img src={logo} width="230" height="200" className='logo' />
        <h1 className='App-title'>ToDo List App</h1>
        <div className="container">
          Add an Item....
          <br />
          <input 
            type="text" 
            className="input-text" 
            placeholder="Write a Todo" 
            required
            value={this.state.newItem}
            onChange={
              e => this.updateInput(e.target.value)
            }
          />
          <button 
          className="add-btn"
            onClick={
            () => this.addItem(this.state.newItem)
          }
          disabled={
            !this.state.newItem.length
          }
          >
            Add ToDo
          </button>
          <div className="list">
            <ul>

              {/*(map) = is a method which expects you to pass on a callback*/}
              {/*(item) = is a parameter which is going to represent each item in the list*/}
              {/*(=>) = is a fat arrow function*/}
              {/*(return) = is a return statement*/}

              {this.state.list.map(item => {
                {/*(return) = is a keyword which is going to return something*/}
                {/*(item.value) = is the value of the item*/}
                return(
                  <li key={item.id}>  {/*(item.id) = is the id of the item*/}
                    <input
                      type="checkbox"  
                      name="idDone"
                      checked={item.isDone}
                      onChange = {
                        a => this.deleteItem(a.target.id)
                      }
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)} 
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              
              {/*<li>
                <input type="checkbox" className="" id="" />
                Record Youtube video
                <button className="btn">
                  Delete
                </button>
            </li>*/}
            </ul>
        </div>
      </div>  
    </div> 
    );
  }
}
export default App;

