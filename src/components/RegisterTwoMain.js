import React from 'react';
import cameraIcon from '../img/camera-icon.svg'
import axios from "axios";

export default class RegisterOneMain extends React.Component {
    render() {
        document.title = "Шаг 2 из 3"
        return (<main className="step-two-main">
            <div>
                <p className="step">Шаг 2 из 3</p>
                <h1>Загрузите своё фото</h1>
                <p className="description">Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</p>
            </div>
            <form encType="multipart/form-data" method="post" className="form">
                <label htmlFor="upload-photo" className="label-upload-photo">
                    <img src={cameraIcon} alt="форма для отправки фото" className="photo-icon"/>
                        <input type="file" className="photo-input"
                               id="upload-photo" accept="image/png, image/jpeg"/>
                </label>
                <div className="footerBtn">
                    <input type="submit" value="Продолжить" className="continueBtn activeBtn" onClick={(e) => {
                        e.preventDefault()
                        axios.post("/registration/step2", this.state).then(res => res.data).then(data => {
                            if(data) this.props.history.push('/registration/step3')
                        })
                    }}/>
                </div>
            </form>
        </main>)
    }
}