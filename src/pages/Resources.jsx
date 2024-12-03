import { useState, useEffect } from 'react';
import axios from 'axios';
import he from 'he';
import Seo from '../components/Seo';

import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import { IoArrowForward } from "react-icons/io5";

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Resources = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState(null);

  const endpoint = `${baseUrl}/resources?_embed`;

  useEffect(() => {
    axios.get(endpoint)
      .then((res) => {
        setResources(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const truncateContent = (content) => {
    const decodedContent = he.decode(content);
    const textOnly = decodedContent.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g, " ").trim();
    const firstSentence = textOnly.split(/(?<=[.!?])\s+/)[0];
    return firstSentence + (textOnly.length > firstSentence.length ? "" : "");
  };

  const filterResourcesByTopic = (topicName) => {
    return resources.filter((resource) =>
      resource.class_list && resource.class_list.some((classItem) => classItem.includes(topicName))
    );
  }

  const MappedResources = ({ topicName }) => {
    const filterResources = filterResourcesByTopic(topicName);

    return filterResources.map((resource, index) => (
      <a href={`#/resources/${resource.id}`} key={resource.slug + "-" + index} className='single-post-container'>
        <h3 className='title'>{truncateContent(resource.title.rendered)}</h3>
        <p>{truncateContent(resource.content.rendered)}</p>
        <div className='container-button'>
        <div className='secondary-button card-arrow' href={`#/resources/${resource.id}`}><IoArrowForward /></div>
        </div>
      </a>
    ));
  };

  return (
    <>
      <Seo
        title="All resources - Storytime Foundation"
        description="Browse all the latest resources."
      />
      <PageHeader
        img_url='/header-bg-imgs/resources-header.jpg'
        surtitle=''
        title={
          <>
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
          </>
        }
        subtitle='Explore useful articles, research, links and ideas for reading and play with tamariki'
        includeBtn={false}
        includeSvg={true}
      />

      <section className='content-section beige-section resources-posts--container'>
        <ContentSection 
          title='Resources for whānau' 
          includeSvg={false}
        />
        <section className='populated-posts resources-sections'>
          <div id="homeCont" className='post-container'>
              {loading ? (
                <div className='loader'>
                  <h3>Loading</h3>
                  <div className="custom-loader"></div>
                </div>
              ) : (
                <>
                  <MappedResources topicName="topic-resources" />
                </>
              )}
            </div>
        </section>

        <div className='white-background'>
        <ContentSection 
            title='Research and information' 
            includeSvg={false}
          />
        </div>
        <section className='populated-posts resources-sections page-break'>
          <div id="homeCont" className='post-container'>
            {loading ? (
              <div className='loader'>
                <h3>Loading</h3>
                <div className="custom-loader"></div>
              </div>
            ) : (
              <>
                <MappedResources topicName="topic-research" />
              </>
            )}
          </div>
        </section>
        
        <ContentSection 
              title='Research and information' 
              includeSvg={true}
            />
        <section className='populated-posts resources-sections'>
          <div id="homeCont" className='post-container'>
            {loading ? (
              <div className='loader'>
                <h3>Loading</h3>
                <div className="custom-loader"></div>
              </div>
            ) : (
              <>

                <MappedResources topicName="topic-links" />
              </>
            )}
          </div>
        </section>

        <div className='category-container'></div>
      </section>
    </>
  )
}

export default Resources
