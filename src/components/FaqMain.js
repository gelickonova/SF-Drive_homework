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
                        <QuestionButton queText="Могу ли я отменить бронь?" ariaControls="faq1_desc" answerText="Some Text"/>
                    <QuestionButton queText="Могу ли я вернуть деньги, если не подошёл автомобиль?" ariaControls="faq2_desc" answerText="Some Text"/>
                    <QuestionButton queText="Что делать, если случилось ДТП?" ariaControls="faq3_desc" answerText="Some Text"/>
                    <QuestionButton queText="Могу ли я оставить автомобиль в удобном для меня месте?" ariaControls="faq4_desc" answerText="Данный вопрос обсуждается с собственником, но как правило
                            автомобиль
                            нужно вернуть туда, где вы его получили."/>
                    <QuestionButton queText="Что делать, если собственник просит заплатить ему напрямую?" ariaControls="faq5_desc" answerText="Some Text"/>
                    <QuestionButton queText="Должен ли я заправлять автомобиль?" ariaControls="faq6_desc" answerText="Some Text"/>
                </dl>
            </section>
        </main>);
    }
}
