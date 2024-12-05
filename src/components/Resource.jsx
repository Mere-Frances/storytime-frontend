import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from './BackButton';
import Seo from './Seo';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Resource = () => {
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [h3Content, setH3Content] = useState('');
  const { id } = useParams();
  const [seoData, setSeoData] = useState(null);

  const endpoint = `${baseUrl}/resources/${id}?_embed`;

  useEffect(() => {
    axios.get(`${endpoint}`)
      .then((res) => {
        setResource(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [endpoint]);

  useEffect(() => {
    if (resource && resource.content && resource.content.rendered) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(resource.content.rendered, "text/html");
      const h3 = doc.querySelector("h3");
      if (h3) {
        setH3Content(h3.innerHTML);
      }
    }
  }, [resource]);

  function getFeaturedImage(resource) {
    if (resource && resource._embedded && resource._embedded['wp:featuredmedia'] && resource._embedded['wp:featuredmedia'][0].source_url) {
      return resource._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return 'https://via.placeholder.com/150';
    }
  }

  if (loading) {
    return <div className='loader'>
    <h3>Loading</h3>
    <div className="custom-loader"></div>
  </div>;
  }

  return (
    <>
      <Seo
          title={resource.yoast_head_json?.title || resource.title.rendered}
          description={resource.yoast_head_json?.description}
          image={resource.yoast_head_json?.og_image?.[0]?.url}
          url={window.location.href}
      />
      <section className='single-page--container'>
        <BackButton />
        <div key={resource.slug} className='single-page'>
          <div className='single-page--header' style={{ backgroundImage: `url(${getFeaturedImage(resource)})` }}>
            <div className='single-page--header--titles'>
              <h2>{resource.title.rendered}</h2>
              <h3 className='wp-block-heading'>{h3Content}</h3>
            </div>
          </div>

          <div className='single-page--content' dangerouslySetInnerHTML={{ __html: resource.content.rendered }} />
        </div>
      </section>
    </>
  );
};

export default Resource;
