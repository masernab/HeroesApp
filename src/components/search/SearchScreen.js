import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    


    const initialForm = {
        searchText: q
    }
    const heroesFiltered = useMemo(() => getHeroByName(q), [q])
    
    const [{searchText}, handleInputChange ] = useForm( initialForm )
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }
    return (
        <div>
            <div className="row">
                <div className="col-5">
                    <form onSubmit={ handleSubmit }>
                        <h4>Search Form</h4>
                        <hr/>
                        <input
                            className="form-control"
                            name="searchText"
                            onChange= { handleInputChange }
                            placeholder="Buscar..."
                            type="text"
                            autoComplete="off"
                            value={searchText}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 btn-block"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero =>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
