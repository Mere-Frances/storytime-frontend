import { NavLink } from 'react-router-dom';
import ContentSection from '../components/ContentSection';
import Sponsors from '../components/Sponsors';
import Seo from '../components/Seo';

const Home = () => {

    return (
        <>
        <Seo
          title="Home - Storytime Foundation"
          description="Welcome to the Storytime Foundation"
        />
        <section className='home-header'>
            <div className='home-header--content--container'>
                <h3>Welcome to the</h3>
                <h1>
                <span>s</span>
                <span>t</span>
                <span>o</span>
                <span>r</span>
                <span>y</span>
                <span>t</span>
                <span>i</span>
                <span>m</span>
                <span>e</span><br/>
                <span>f</span>
                <span>o</span>
                <span>u</span>
                <span>n</span>
                <span>d</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span></h1>
                <h3>Building bonds with books</h3>

                <div className='button-container'>
                    <div className='primary-button'>
                        <NavLink
                            to='/ourwork'
                        >
                            Learn more
                        </NavLink>
                    </div>
                    <div className='primary-button'>
                        <NavLink
                            to='/donate'
                        >
                            Donate
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className='work-matters--section'>
            <h2>Why our work matters</h2>
            <p>Our programmes provide books, education, and tools that help parents facing challenging times 
            to build safe and secure relationships with their tamariki.</p>
            <div className='blob-shapes--container'>
                <div className='blob blob-one'>
                    <h2>305,000</h2>
                    <h3>Books distributed</h3>
                </div>
                <div className='blob blob-two'>
                    <h2>78,000</h2>
                    <h3>Families assisted</h3>
                </div>
                <div className='blob blob-three'>
                    <h2>23</h2>
                    <h3>Years of service</h3>
                </div>
            </div>
        </section>

        <section className='content-section beige-section'>
            <ContentSection 
            title='Strengthening Whānau' 
            img_url='/section-imgs/blog-img-two-kids-reading.png' 
            alt='two kids reading'
            paragraph={
                <> 
                Storytime Foundation helps to strengthen whānau facing adversity in Aotearoa by supporting the building of bonds between a parent and child.
                <br/><br/>Early attachment can significantly improve outcomes in life for tamariki and their wider family and is especially important during the first 1000 days.
                <br/><br/>Reading together is one of the most effective ways to create these bonds and has positive effects on literacy and communication.
                <br/><br/>Storytime Foundation provides free books, education, and resources to New Zealand’s most vulnerable families in partnership with Well Child Tamariki Ora/Pēpi Ora and Family Start providers, Ministry of Education, and Department of Corrections.
                </>
            }
        />
        </section>

        <section className='content-section blue-section'>
            <ContentSection  
                className='blue-section'
                title='Supporting Whānau' 
                img_url='/section-imgs/blob-father-daughter-reading.png' 
                alt='father and daughter reading'
                paragraph={
                    <>
                    Storytime Foundation works with vulnerable whānau around Aotearoa to help them build strong bonds with their tamariki.
                    <br/><br/>Research shows that establishing these bonds of security and connection can help both children and their parents/caregivers to reduce stress and process emotions better, and to improve overall family cohesion.
                    <br/><br/>For these families, the stress and anxiety of their situation can get in the way of developing these important relationships, or they may simply lack the resources or knowledge.
                    <br/><br/>“Providing access to books for children under five years is important, as it helps to develop early literacy skills, cognitive skills, language skills, [and] exposes them to new ideas and knowledge, and promotes positive parent-child interaction. All these factors can help to lay a strong foundation for future academic success and lifelong wellbeing.” Storytime Foundation 2023 Annual Report
                    </>
                }
            />
        </section>

        <section className='content-section'>
            <ContentSection 
                title='Te Tiriti o Waitangi' 
                img_url='/section-imgs/kid-reading.png' 
                alt='kid reading'
                paragraph={
                    <>
                    At Storytime Foundation we are committed to honouring Te Tiriti o Waitangi in an ongoing journey of learning through our vision, goals, and everyday practices aimed at supporting whānau to thrive.
                    <br/><br/>This means connecting with our programme partners and whānau in ways that are authentic, culturally responsive, and mana-enhancing.
                    <br/><br/>We are dedicated to honouring and incorporating tikanga Māori practices in our work and community engagements as we actively learn and deepen our understanding of these traditions.  We are committed to respecting mana whenua and integrating these practices in a meaningful way. 
                    </>
                }
                includeSvg={false}
            />
        </section>

        <section className='content-section pink-section'>
            <ContentSection  
                className='pink-section'
                title='Building bonds with books' 
                img_url='/section-imgs/mother-and-child-reading.png'
                alt='mother and child reading' 
                paragraph={
                    <>
                    For many whānau around New Zealand it can be challenging to access the knowledge and resources needed to build the bonds of early attachment. Storytime Foundation’s book-focused programmes provide the tools to help, in turn building more cohesive families and improving social outcomes.
                    <br/><br/>Holding a child close while sharing a story can make them feel safe and loved, with many positive flow-on effects. It can help them to suffer less stress, understand and process their environment better, and do better at school. It can also help to reduce parents’ stress and impact positively on the wider family unit.
                    <br/><br/>Our goal is for every parent to know the importance of reading and storytelling with their tamariki and for children in Aotearoa to grow up healthy – nurtured in homes rich in language and love.
                    </>
                }
            />
        </section>

        <section className='product-preview--container'>
            <div className='product-preview--details'>
                <img src='/section-imgs/blob-svg.svg' alt='blob shape'/>
                <div className='product-preview--titles'>
                    <h2>Give one, get one</h2>
                    <p>Our first title, the Pepeha Cloth Book, is available now. And for every book you buy, we will gift a second one to another family. We call it ‘Give One, Get One’.</p>
                    <div className='primary-button'>
                    <NavLink
                        to='/shop/singlepage'
                    >
                        Buy now
                    </NavLink>
                </div>
                </div>
                <img/>
            </div>
        </section>

        <Sponsors/>
        </>
    )
}

export default Home
