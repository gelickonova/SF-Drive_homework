import React from 'react';
import {useHistory} from "react-router-dom";

export default class RegisterOneMain extends React.Component {
    render() {
        document.title = "Регистрация"
        return (
            <main>
                <form method="post" className="form">
                    <div>
                        <p className="step">Шаг 1 из 3</p>
                        <h1>Расскажите о себе</h1>
                    </div>
                    <section className="sectionMain FourInputs">
                        <h2>Информация о вас</h2>
                        <p id="p1">ФИО</p>
                        <label id="input1" className="longInput">
                            <input placeholder="ФИО полностью"/>
                        </label>
                        <p id="p2">Дата рождения</p>
                        <label id="input2" className="shortInput">
                            <input type="date"/>
                        </label>
                        <p id="p3">Электронная почта</p>
                        <label id="input3" className="longInput">
                            <input placeholder="mail@example.com"/>
                            <p className="invalidContentError hidden">Неверная почта</p>
                        </label>
                        <p id="p4">Телефон</p>
                        <label id="input4" className="shortInput">
                            <input placeholder="+7 900 000-00-00"/>
                        </label>

                    </section>
                    <section className="sectionMain FourInputs">
                        <h2>Паспорт</h2>
                        <p id="p5">Серия и номер</p>
                        <label id="input5" className="shortInput">
                            <input placeholder="0000 000000"/>
                        </label>
                        <p id="p6">Дата выдачи</p>
                        <label id="input6" className="shortInput">
                            <input type="date"/>
                        </label>
                        <p id="p7">Кем выдан</p>
                        <label id="input7" className="longInput">
                            <input placeholder="Название органа выдавшего паспорт"/>
                        </label>
                        <p id="p8">Код подразделения</p>
                        <label id="input8" className="shortInput">
                            <input placeholder="000-000"/>
                        </label>
                    </section>
                    <section className="sectionMain TwoInputs">
                        <h2>Водительское удостоверение</h2>
                        <p id="p9">Серия и номер</p>
                        <label id="input9" className="shortInput">
                            <input placeholder="0000 000000"/>
                        </label>
                        <p id="p10">Дата выдачи</p>
                        <label id="input10" className="shortInput">
                            <input type="date" placeholder="00.00.0000"/>
                        </label>
                    </section>
                    <section className="sectionMain TwoInputs">
                        <h2>Пароль</h2>
                        <p id="p11">Придумайте пароль</p>
                        <label id="input11" className="longInput">
                            <input type="text" placeholder="•••••••••••••••••••"/>
                        </label>
                        <p id="p12">Повторите пароль</p>
                        <label id="input12" className="longInput">
                            <input placeholder="•••••••••••••••••••"/>
                            <p className="invalidContentError hidden">Неверная почта</p>
                        </label>
                    </section>
                    <div className="someClass">
                        <label htmlFor="submit-button">
                            <input type="submit" value="Продолжить" id="submit-button"
                                   className="continueBtn activeBtn" onClick={()=>{const history = useHistory();
                                history.push("/stepTwo")}}/>
                        </label>

                    </div>
                </form>
            </main>
        )
    }
}