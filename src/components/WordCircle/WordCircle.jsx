import React from 'react';

class WordCircle extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 200 200">
        <path 
          id="circle" 
          d="
            M 100, 100
            m -100, 0
            a 100,100 0 1,0 200,0
            a 100,100 0 1,0 -200,0
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
