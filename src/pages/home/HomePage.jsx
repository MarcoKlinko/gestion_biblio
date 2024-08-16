import React from "react";
import s from "./style.module.css";
import bgcard from "../../assets/card-header.png";

const HomePage = () => {

    document.title = "Home"
    
    return <div className={`${s.main}`}>
        <div className={`${s.bannierImage}`}>
        </div>
        <div className={`${s.homeWrapper}`}>
            <div className={`${s.cardWrapper}`}>
                <div className={`${s.cardHome}`}>
                    <div className={`${s.cardHomeBody}`}>
                        <h3>Subtitle</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam vero saepe! Deserunt ex, dolores optio cum quos sequi sunt.</p>
                    </div>
                    <img src={bgcard} alt="" />
                </div>
                <div className={`${s.subTitleHome}`}>
                    <h4>Subtitle</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, obcaecati?</p>
                </div>
            </div>
            <div className={`${s.typesLib}`}>
                <h1>Types of libraries</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minus eos, repudiandae ex earum ad debitis ipsa voluptatum quasi soluta incidunt 
                    quas deleniti porro hic nobis natus! Id commodi maiores atque laboriosam nihil in ut nostrum, 
                    dolorem accusantium repellat quaerat velit illo fuga dolor vel assumenda porro tempore? At consequuntur
                     similique, nemo perferendis eligendi assumenda magni quibusdam aliquid ratione reprehenderit nulla, ex sit est.
                    Eligendi deserunt debitis provident. Harum eaque odit velit itaque, libero eum molestiae at repudiandae nobis vero ipsa similique 
                    veritatis perferendis quia 
                    sapiente blanditiis aspernatur cumque incidunt aperiam voluptatibus. Quibusdam molestias esse aliquid expedita voluptate ipsam minima. Velit?
                </p>
            </div>
        </div>
    </div>
}

export default HomePage;