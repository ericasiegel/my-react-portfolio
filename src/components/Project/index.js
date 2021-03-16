import React, { useState } from 'react';
// import the projects array
import projectInfo from '../../projects.json';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';


function Project() {
    // use useState to use the new variable 'projectList' and connect it to the projects aray
    const [projectList] = useState([
        {
            id: 1,
            name: "The Pet Finder",
            image: "../../../public/assets/images/thedogspot.jpeg",
            description: "Discover your favorite dog breeds. Find the breed that is right for you and save them to your favorites.",
            github: "https://github.com/nrhuizar/The-Pet-Rescuer.git",
            link: "https://nrhuizar.github.io/The-Pet-Rescuer/"
        },
        {
            id: 2,
            name: "myCipe",
            image: "../../../public/assets/images/mycipe.png",
            description: "The place to show off your Chef skills and share your recipes",
            github: "https://github.com/naomiilang/myCipe.git",
            link: "https://mycipeteam.herokuapp.com/"
        },
        {
            id: 3,
            name: "CMs Tech Blog",
            image: "../../../public/assets/images/techblog.png",
            description: "Connect with other professionals in the Tech field and share your comments on current and new tech.",
            github: "https://github.com/ericasiegel/cms-blog.git",
            link: "https://cms-blog-db.herokuapp.com/"
        },
        {
            id: 4,
            name: "Work Day Scheduler",
            image: "../../../public/assets/images/dayscheduler.jpeg",
            description: "An active daily calendar where you can save your schedule by the hour.",
            github: "https://github.com/ericasiegel/daily-calendar.git",
            link: "https://ericasiegel.github.io/daily-calendar/"
        },
        {
            id: 5,
            name: "Weather Dashboard",
            image: "../../../public/assets/images/weatherdash.jpeg",
            description: "Find your daily and 5-Day forecast in a city around the world.",
            github: "https://github.com/ericasiegel/weather-dashboard.git",
            link: "https://ericasiegel.github.io/weather-dashboard/"
        },
        {
            id: 6,
            name: "My Team Generator",
            image: "../../../public/assets/images/images/myteam.png",
            description: "Generate a contact list for your employees.",
            github: "https://github.com/ericasiegel/my-team.git",
            link: "https://ericasiegel.github.io/my-team/dist/index.html"
        }
    ]);
    // map through the project list and render a card for each project
    return (
        <div>
            <h3>My Projects</h3>
            <Wrapper>
                {projectList.map(p => (
                    <ProjectCard
                        id={p.id}
                        key={p.id}
                        name={p.name}
                        image={p.image}
                        description={p.description}
                        github={p.github}
                        link={p.link}
                    />
                ))}
            </Wrapper>
        </div>
    )
}

export default Project;