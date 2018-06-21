import React from 'react';

class WordCircle extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 200 200">
        <path 
          id="circle" 
          d="
            M 100, 100
            m -75, 0
            a 75,75 0 1,0 150,0
            a 75,75 0 1,0 -150,0
            "
          fill="transparent"
        />
        <text width="500">
          <textPath xlinkHref="#circle">
            {this.props.words && this.props.words.map(word => ` ${word} *`)}
          </textPath>
        </text>
      </svg>
    )
  }
}

export default WordCircle;
