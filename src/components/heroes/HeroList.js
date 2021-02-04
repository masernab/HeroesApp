import React, { useMemo } from 'react'
import { getHeroesByPublicher } from '../../selectors/getHerobyPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublicher( publisher ), [ publisher ])
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))

            }
        </div>
    )
}
