import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.png'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>Sobre a QAZANDO</h2>
                                <h4>Se você quer ficar "qazando" em um nível a cima, esse é o lugar certo!</h4>
                                <p>A qazando surgiu com o propósito de descomplicar a automação de testes no mundo da tecnologia.
                                    Por isso, oferecemos cursos de automação de testes de uma maneira simples, rápida e descomplicada.
                                    Eduardo Finotti e Herbert Soares juntam suas experiências em QA em grandes empresas para passar tudo que aprenderam em anos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
