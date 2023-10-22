import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";
import FoodImage from '../../assets/foodimg1.jpg'


const Hero = () => {
    return (
        <section className="section-hero">
            <div className="hero">
                <div className="hero-text-box">
                    <h1 className="heading-primary">
                        Discover the Art of Cooking
                    </h1>
                    <p className="hero-description">
                        Welcome to our culinary adventure! 🍽️ Explore a world of flavors and inspiration with our handcrafted recipes. Whether you're a seasoned chef or a kitchen novice, our delicious creations await. Join us on a gastronomic journey, and let's get cooking! Click the 'Recipes' button below to dive right in. Bon appétit! 🌟
                    </p>
                    <Link className='btn v1' to="/recipes">
                        Recipes
                    </Link>
                </div>
                <div className="hero-img-box">
                    <img
                        src={FoodImage as string}
                        alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                        className="hero-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;