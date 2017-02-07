import React from 'react';

export const Subject = (props) => {

  console.log("props1: ", props)
  console.log("props2: ", props.subject)
  console.log("props3: ", props.subject.resources[0].title)
  console.log("props4: ", props.subject.resources[0].url)

  return(
    <div>
      <h3>{props.subject.subject}</h3>
      <ul>
        {props.subject.resources.map((r, i) => {
          return <li key={i}><a href={r.url}>{r.title}</a></li>}) }
      </ul>
    </div>
  )

};

export default Subject;
