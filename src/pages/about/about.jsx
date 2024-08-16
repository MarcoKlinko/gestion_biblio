import React from "react";

const AboutPage = () => {

    document.title = "About us"

    return <section className="section-gap info-area" id="about">
    <div className="container">				
        <div className="single-info row mt-40 align-items-center">
            <div className="col-lg-6 col-md-12 text-center no-padding info-left">
                <div className="info-thumb">
                    <img src="img/about-img.jpg" className="img-fluid info-img" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 no-padding info-rigth">
                <div className="info-content">
                    <h2 className="pb-30">Dr. Travor James</h2>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.								
                    </p>
                    <br/>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.									
                    </p>
                    <br/>
                    <img src="/img/signature.png" alt="" />
                    </div>
            </div>
        </div>
    </div>
</section>

}

export default AboutPage;