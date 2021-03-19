import React from 'react';

// let btns = document.getElementsByClassName('collapsible');
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => {
//         let answer = document.getElementById(`faq${i + 1}_desc`)
//         answer.classList.toggle('hidden');
//         if (btns[i].getAttribute('aria-expanded')==='true') {btns[i].setAttribute('aria-expanded', "false")}
//         else btns[i].setAttribute('aria-expanded', "true")
// });

// }


export default class QuestionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isHidden: true,
            hiddenClass: "hidden"
        }
    }

    render() {
        return (<React.Fragment>
                <dt>
                    <button aria-expanded={this.state.isOpen.toString()} aria-controls={this.props.ariaControls}
                            className="collapsible" onClick={() => {
                        this.state.isOpen ? this.setState ({isOpen: false}) : this.setState ({isOpen: true});
                        this.state.isHidden ? this.setState ({hiddenClass: "", isHidden: false}) : this.setState ({hiddenClass: "hidden", isHidden: true});

                    }}>
                        {this.props.queText}
                    </button>
                </dt>
                <dd>
                    <p id={this.props.ariaControls}
                       className={this.state.hiddenClass + " desc"}>{this.props.answerText}</p>
                </dd>
            </React.Fragment>
        )
    }
}