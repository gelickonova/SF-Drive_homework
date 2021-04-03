import React from 'react';
import axios from "axios";

export default class RegisterOneMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            birthDate: '',
            email: '',
            phoneNumber: '',
            passportID: '',
            dateOfIssue: '',
            issuingAuthority: '',
            departmentCode: '',
            numberOfLicense: '',
            dateOfLicense: '',
            password: '',
            repeatPassword: ''
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        // switch (target.name) {
        //
        //     case 'fullName':
        //         break
        //     case 'birthDate':
        //         break
        //     case 'email':
        //         break
        //     case 'phoneNumber':
        //         break
        //     case 'passportID':
        //         break
        //     case 'dateOfIssue':
        //         break
        //     case 'issuingAuthority':
        //         break
        //     case 'departmentCode':
        //         break
        //     case 'numberOfLicense':
        //         break
        //     case 'dateOfLicense':
        //         break
        //     case 'password':
        //         break
        //     case 'repeatPassword':
        //         break
        // }
    }


    render() {
        document.title = "Регистрация"
        return (
            <main>
                {/*<form method="post" className="form">*/}
                    <form className="form">
                    <div>
                        <p className="step">Шаг 1 из 3</p>
                        <h1>Расскажите о себе</h1>
                    </div>
                    <section className="sectionMain FourInputs">
                        <h2>Информация о вас</h2>
                        <p id="p1">ФИО</p>
                        <label id="input1" className="longInput">
                            <input required placeholder="ФИО полностью" name="fullName" value={this.state.fullName}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p2">Дата рождения</p>
                        <label id="input2" className="shortInput">
                            <input required type="date" name="birthDate" value={this.state.birthDate}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p3">Электронная почта</p>
                        <label id="input3" className="longInput">
                            <input required placeholder="mail@example.com" name="email" value={this.state.email}
                                   onInput={this.handleInputChange.bind(this)}/>
                            <p className="invalidContentError hidden">Неверная почта</p>
                        </label>
                        <p id="p4">Телефон</p>
                        <label id="input4" className="shortInput">
                            <input placeholder="+7 900 000-00-00" name="phoneNumber" value={this.state.phoneNumber}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>

                    </section>
                    <section className="sectionMain FourInputs">
                        <h2>Паспорт</h2>
                        <p id="p5">Серия и номер</p>
                        <label id="input5" className="shortInput">
                            <input placeholder="0000 000000" name="passportID" value={this.state.passportID}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p6">Дата выдачи</p>
                        <label id="input6" className="shortInput">
                            <input type="date" name="dateOfIssue" value={this.state.dateOfIssue}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p7">Кем выдан</p>
                        <label id="input7" className="longInput">
                            <input placeholder="Название органа выдавшего паспорт" name="issuingAuthority"
                                   value={this.state.issuingAuthority} onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p8">Код подразделения</p>
                        <label id="input8" className="shortInput">
                            <input placeholder="000-000" name="departmentCode" value={this.state.departmentCode}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                    </section>
                    <section className="sectionMain TwoInputs">
                        <h2>Водительское удостоверение</h2>
                        <p id="p9">Серия и номер</p>
                        <label id="input9" className="shortInput">
                            <input placeholder="0000 000000" name="numberOfLicense" value={this.state.numberOfLicense}
                                   onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p10">Дата выдачи</p>
                        <label id="input10" className="shortInput">
                            <input type="date" placeholder="00.00.0000" name="dateOfLicense"
                                   value={this.state.dateOfLicense} onInput={this.handleInputChange.bind(this)}/>
                        </label>
                    </section>
                    <section className="sectionMain TwoInputs">
                        <h2>Пароль</h2>
                        <p id="p11">Придумайте пароль</p>
                        <label id="input11" className="longInput">
                            <input required type="text" placeholder="•••••••••••••••••••" name="password"
                                   value={this.state.password} onInput={this.handleInputChange.bind(this)}/>
                        </label>
                        <p id="p12">Повторите пароль</p>
                        <label id="input12" className="longInput">
                            <input required placeholder="•••••••••••••••••••" name="repeatPassword"
                                   value={this.state.repeatPassword} onInput={this.handleInputChange.bind(this)}/>
                            <p className="invalidContentError hidden">Неверная почта</p>
                        </label>
                    </section>
                    <div className="someClass">
                        <label htmlFor="submit-button">
                            <input type="submit" value="Продолжить" id="submit-button"
                                   className="continueBtn activeBtn" onClick={(e) => {
                                e.preventDefault()
                                axios.post("/registration/step1", this.state).then(res => res.data).then(data => {
                                    if(data) this.props.history.push('/registration/step2')
                                })
                            }}/>
                        </label>
                    </div>
                </form>
            </main>
        )
    }
}