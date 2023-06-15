import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const twitterlogo = "https://icon-library.com/images/twitter-icon-white-transparent/twitter-icon-white-transparent-24.jpg"
const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare"
  },
  {
    quote: "All that glitters is not gold.",
    author: "William Shakespeare"
  },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    author: "William Shakespeare"
  },
  {
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John F. Kennedy"
  },
  {
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    author: "Abraham Lincoln"
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return(
      <Box />
    )
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'sample quote text',
      author: 'sample author'
    }
  }
  
  changeQuote = () => {
  let rand = Math.floor(1 + (Math.random() * 6))
    this.setState({
      quote: quotes[rand].quote,
      author: quotes[rand].author
    })
  }
  
  render() {
  return(
    <>
      <div id="quote-box">
        <h1 id="text">{this.state.quote}</h1>
        <h2 id="author">-{this.state.author}</h2>
        <div id="buttons">
          <a id="tweet-quote" href="twitter.com/intent/tweet"><img id="twitter-pic" src={twitterlogo} /></a>
          <button id="new-quote" onClick={this.changeQuote}>New Quote</button>
        </div>
      </div>
    </>
  )
  }
}
root.render(<App/>)
