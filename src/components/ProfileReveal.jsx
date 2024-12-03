import React, { useState } from 'react';

const ContentReveal = () => {
  const profiles = {
    Profile1: {
        img_url: '/src/assets/profile1.png',
        name: 'Tony Culliney',
        position: 'Chief Executive',
        description: ( <>"Tony has enjoyed a 40-year career in health, education, and social services, much of it in the public sector and in community-facing roles. He has led organisations and programmes for young people and spearheaded large-scale fundraising projects and long-term partnerships to support them. As the Chief Executive of Storytime Foundation since 2011, Tony has directed the national expansion of the organisation and its introduction of programmes into correctional facilities. Tony has a postgraduate diploma in management from the University of Waikato and is a Churchill Fellow."</>),
    },
    Profile2: {
        img_url: '/src/assets/profile2.png',
        name: 'Thomas Bendall',
        position: 'Board of Trustees Chairman',
        description: ( <>"Thomas Bendall is a Chartered Accountant and Partner at business advisory and accounting practice Bendall and Cant Auckland and has been a trustee of Storytime Foundation for over 13 years.<br/>Thomas brings his accounting expertise to play at Storytime Foundation as well as his passion for improving outcomes for vulnerable children and families."</>),
    },
    Profile3: {
        img_url: '/src/assets/profile3.png',
        name: 'James Frankham',
        position: 'Board of Trustees memeber',
        description: ( <>"James Frankham is a media publisher with experience in print, film, television, web and social and virtual reality media properties. He is the director and publisher of New Zealand Geographic and a board member of the Magazine Publishers Association.<br/>James’ concern for vulnerable families and in particular, tamariki, brings empathy and understanding in addition to his obvious skills to the Storytime Foundation Board of trustees."</>),
    },
    Profile4: {
        img_url: '/src/assets/profile4.png',
        name: 'Peter Hanning',
        position: 'Board of Trustees memeber',
        description: ( <>"Peter Hanning is a strategy consultant and systems thinker who has worked across the public and private sectors looking to improve outcomes for people, particularly Aotearoa’s pēpi, tamariki and rangitahi. Peter’s personal mission is to “make the world a better place and have fun doing it”.<br/>Peter has a BSc (Hons) in Psychology and an MSc in Marine Science, is a stay-at-home parent of three, and is passionate about water sports, with salt water running in his veins."</>),
    },
    Profile5: {
        img_url: '/src/assets/profile5.png',
        name: 'Qiujing Easterbrook-Wong',
        position: 'Board of Trustees memeber',
        description: ( <>"Qiujing Easterbrook-Wong is Co-Founder and Director of Cibus Foods Limited and Founder and Director of Borderless Productions Limited.<br/>Qiujing graduated with a BCom in 1999 and a GradDipComm in 2000. She is passionate about social change and throughout her career has worked on projects improving outcomes for vulnerable people and children.<br/>Qiujing is a Patron of Friends of Women’s Refuges Trust (FOWR)."</>),
    },
  };

  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <>
        <div className="team-profiles--container">
        {Object.keys(profiles).map((name) => (
            <div key={name} className="profile" onClick={() => setSelectedProfile(name === selectedProfile ? null : name)}>
                <div
                    key={name}
                    className="blob"
                >
                <img src={profiles[name].img_url} alt=''/>
                </div>
                <h3>{profiles[name].name}</h3>
                <p>{profiles[name].position}</p>
            </div>
        ))}
        </div>
        <div  className="team-profiles--container description">
            {selectedProfile && (
            <div className="profile-description">
            <p>{profiles[selectedProfile].description}</p>
            </div>
            )}
        </div>
    </>
  );
};

export default ContentReveal;
