import React from "react";

const ItemsHome = (props) => {
    const listItems = props.map((n) => <p>{n}</p>);
    return(
        <div className="item">
            <div className="contFeedback">
              <p>0</p>
              <p>votes</p>
            </div>
            <div className="contFeedback">
              <p>0</p>
              <p>answers</p>
            </div>
            <div className="contFeedback">
              <p>0</p>
              <p>views</p>
            </div>
            <div className="linkQuestions">
            <div className="tags">
                <p></p>
            </div>
            { listItems }
            </div>
          </div>
    )
}


export default ItemsHome;