import React from 'react';
import Button from '../Button/Button';

function List(props) {
  function isSearched(searchTerm) {
    return (item) => {
      return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  }

  return (
    <div className="App">
      { props.list.filter(isSearched(props.pattern)).map(item =>
        <div key={item.objectID}>
          <span>
            <a href={item.url}>
              {item.title}
            </a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <Button
              onClick={() => props.onDismiss(item.objectID)}
              type="button"
            >
              Dismiss
            </Button>
          </span>
        </div>
        )
      }
    </div>
  );
}

export default List;
