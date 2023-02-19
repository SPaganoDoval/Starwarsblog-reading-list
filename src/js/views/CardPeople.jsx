import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const CardPeople = ({ id, birth_year, eye_color, gender, hair_color, height, name, skin_color }) => {
    const { store, actions } = useContext(Context);
    const people = store.people;

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Hair Color: {hair_color} </p>
                    <p className="card-text">Eye-Color: {eye_color} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/people/${id}`} className="btn btn-secondary" 
                            onClick={() => actions.getPeople({id: id, name: name, birth_year: birth_year, eye_color: eye_color, gender: gender, hair_color: hair_color, height: height, skin_color: skin_color })}>
                                Details
                        </Link>
                        <Link className="btn btn-outline-warning" 
                            onClick={() => actions.favorites({ name, id })}>
                                <i className="far fa-heart fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}