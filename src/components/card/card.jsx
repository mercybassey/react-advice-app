import React  from "react"
import axios from "axios"
import './card.css'

class Card extends React.Component {
    state = {advice: " "}

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip
            this.setState({advice:advice})
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        const {advice} = this.state

        return(
          <div className="main">
              <div className="cap">
                  <h2 className="heading">{advice}</h2>
                  <button className="button" onClick={this.fetchAdvice}>
                      <span>Give Me Advice</span>
                  </button>
              </div>
          </div>
        )
    }
}

export default Card;
