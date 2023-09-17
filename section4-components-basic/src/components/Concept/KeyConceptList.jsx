import React from 'react'
import KeyConcept from './KeyConcept'


const KeyConceptList = (props) => {
  return (
    <ul id="concepts">
      {props.concepts.map(keyConcept => (
        <li className="concept">
          <KeyConcept 
            title={keyConcept.title} 
            image={keyConcept.image}
            description={keyConcept.description}
          />
        </li>
      ))};
    </ul>
  );
}

export default KeyConceptList;