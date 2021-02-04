import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    const { heroId } = useParams();
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ])
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    if (!hero){
        return <Redirect to={'/'}/>;
    }
    const handleReturn = () => {
        if(history.length <= 2){
            if(publisher === 'DC Comics'){
                history.push(`/dc`);
            }else{
                history.push(`/`);
            }
        }else{
            history.goBack();
        }
    }
    return (
        <div className="row mt-5 ">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${ heroId }.jpg`}
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> { alter_ego }</li>
                    <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
                    <li className="list-group-item"><b>First Appearance:</b> { first_appearance }</li>
                </ul>
                <h3>characters</h3>
                <p>{ characters }</p>
                <button 
                    className="btn btn-primary"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
