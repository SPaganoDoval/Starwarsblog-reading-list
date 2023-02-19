import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { CardPeople } from "../views/CardPeople.jsx";


export const People = () => {
	const { store, actions } = useContext(Context);
 	const people = store.people;

	return(
		<div className="container bg-dark">
					<h1 className="text-light text-center pt-4">People</h1>
					<div className="row row-cols-1 row-cols-md-3 g-4">
						{   people.map((e, i)=>{
								let card = <CardPeople key= {i} id={i+1} birth_year = {e.birth_year} eye_color = {e.eye_color} gender = {e.gender} hair_color = {e.hair_color} height = {e.height} name = {e.name} skin_color = {e.skin_color}/>
								return card;
							})
						}
					</div>
				</div>
	);
};