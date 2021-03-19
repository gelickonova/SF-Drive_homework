import React from 'react';
import QuestionButton from "./QuestionButton";
import QuestionImg from "../img/questions.svg"

export default class AboutUsMain extends React.Component {
    render() {
        return (<main>
            <section className="faq-section">
                <img src={QuestionImg} alt="Рисунок" className="faq-pic"/>
                    <h1 className="faq-h1">Частые вопросы</h1>
                    <p className="faq-text">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            </section>
            <section className="questions">
                <dl className="faq-list">
                        <QuestionButton queText="Могу ли я отменить бронь?" ariaControls="faq1_desc" answerText="Some Text"></QuestionButton>
                    <dt>
                        <button aria-expanded="false" aria-controls="faq2_desc" className="collapsible">
                            Могу ли я вернуть деньги, если не подошёл автомобиль?
                        </button>
                    </dt>
                    <dd>
                        <p id="faq2_desc" className="desc hidden"></p>
                    </dd>
                    <dt>
                        <button aria-expanded="false" aria-controls="faq3_desc" className="collapsible">
                            Что делать, если случилось ДТП?
                        </button>
                    </dt>
                    <dd>
                        <p id="faq3_desc" className="desc hidden"></p>
                    </dd>
                    <dt>
                        <button aria-expanded="true" aria-controls="faq4_desc" className="collapsible">
                            Могу ли я оставить автомобиль в удобном для меня месте?
                        </button>
                    </dt>
                    <dd>
                        <p id="faq4_desc" className="desc">Данный вопрос обсуждается с собственником, но как правило
                            автомобиль
                            нужно вернуть туда, где вы его получили.</p>
                    </dd>
                    <dt>
                        <button aria-expanded="false" aria-controls="faq5_desc" className="collapsible">
                            Что делать, если собственник просит заплатить ему напрямую?
                        </button>
                    </dt>
                    <dd>
                        <p id="faq5_desc" className="desc hidden"></p>
                    </dd>
                    <dt>
                        <button aria-expanded="false" aria-controls="faq6_desc" className="collapsible">
                            Должен ли я заправлять автомобиль?
                        </button>
                    </dt>
                    <dd>
                        <p id="faq6_desc" className="desc"></p>
                    </dd>
                </dl>
            </section>
        </main>);
    }
}
