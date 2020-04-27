import React, { useState, useContext } from "react";
import GithubContex from "../../contex/github/githubContex";
import AlertContex from "../../contex/alert/alertContex";

const Search = () => {
  const githubContex = useContext(GithubContex);
  const alertContex = useContext(AlertContex);
  const [text, setText] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContex.setAlert("Please Enter something", "light");
    } else {
      githubContex.searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          placeholder='Search users..'
          name='text'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContex.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContex.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
