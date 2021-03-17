import React from 'react';

// render the about section
function About () {
    return (
        <div>
            <h3>About Me</h3>
            <div className='about'>
                    <img src={require(`../../assets/images/erica.jpg`).default}
                        alt='Erica Siegel Pic'
                        className='img-thumbnail mx-5'
                    />
                    <p>
                        I am a current manager at Terra, a restaurant at Eataly. I love acting, horses, and reading. 
                        I am excited to learn coding and start a new chapter. My coding journey actually began when I was around 16 years old. I started buidling website with expage.com.
                        I started wanting to create my own horse website and even attempted to allow to have users sign in to their own accounts. 
                        For this website I won an Internet Web Award, and after that I started my own side job of creating websites.
                        Coding has always been something I am passionate about, and I am excited to take it to the next level.
                    </p>
            </div>
        </div>
    )
}

export default About;