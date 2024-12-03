import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Seo from '../components/Seo';

const WorkSinglePage = () => {
  const { pageId } = useParams();

  const workContent = {
    page1: { 
      title: 'Child centric visiting', 
      subtitle: 'The connectivity between whānau members with the child at the centre',
      mainImage: '/header-bg-imgs/child-visiting.webp',
      content: [
        { type: 'h2', text: '' },
        { type: 'h3', text: 'A programme using books and activities to enhance the experience of Visiting Day in prison between parent and child when visiting with whānau. ' },
        { type: 'p', text: 'We know that tamariki are vulnerable to a raft of negative impacts that are the result of having a key whānau member in custody, with the resulting disconnection as a major driver of those negative effects. Child-Centric Visits focus on whakawhanaungatanga: connectivity between whānau members with the child at the centre, and therefore requires that the visit becomes a more child-friendly environment, one in which the child feels welcomed and wants to return. This child-centric approach not only serves whānau connectivity but also allows the parent to practise engaging with their tamariki in prosocial activities in an environment that invites and models that.' },
        { type: 'h2', text: 'Child-Centric Visiting in action' },
        { type: 'p', text: 'We have progressed with Child-Centric Visiting (CCV) and have regular Child-Centric Visits in place at Christchurch Women’s Prison (CWP) and Northern Region Corrections Facility (NRCF). Storytime Foundation delivered a special Christmas event at NRCF in 2022 that was a great success and received national news coverage on Newshub. Part of our strategy in further developing these visits is to create spaces and/or facilities in which to build and strengthen whānau relationships. This includes more comfortable visiting rooms and more suitable visiting times, audio-visual link (AVL) access, whānau days, and the ability for whānau to visit more often.' },
        { type: 'h3', text: 'Child-Centric Visiting – research and results' },
        { type: 'li', text: '“Corrections Prisoners rejoice as charity organises visiting day activities for them and their children” – Newshub' },
        { type: 'p', text: 'Storytime Foundation’s Child-Centric Visiting programme features in the Newshub story on dads in prison. ' },
        { type: 'a', text: 'Read article here', href: 'https://www.newshub.co.nz/home/new-zealand/2022/12/prisoners-rejoice-as-charity-organises-visiting-day-activities-for-them-and-their-children.html' },
        { type: 'li', text: '“Fathers at Auckland Prison bond with their children as part of parenting programme” – RNZ' },
        { type: 'p', text: 'Storytime Foundation helps fathers bond with their children at Christmas.' },
        { type: 'a', text: 'Read article here', href: 'https://www.rnz.co.nz/news/national/432781/fathers-at-auckland-prison-bond-with-their-children-as-part-of-parenting-programme' },
      ],
    },
    page2: { 
      title: 'Taonga mō ngā Tamariki', 
      mainImage: '/header-bg-imgs/tamariki.webp',
      content: [
        { type: 'h2', text: 'Taonga mō ngā Tamariki Overview' },
        { type: 'h3', text: 'This programme extends Storytime Foundation’s reach to parents under the care or management of Ara Poutama Aotearoa/Department of Corrections who have children aged 0-12 years.' },
        { type: 'p', text: 'The Taonga mō ngā Tamariki programme shares with parents and caregivers the benefits of reading, storytelling, singing and playing with children. It gives whānau access to a choice of books and resources tailored to their languages and interests, and that support their culture and identity. It provides them with the skills, confidence, and encouragement to play with and read to their tamariki. It is argued that building these skills will lead to parents and caregivers enjoying time reading with their children, which serves to strengthen the attachment and connection between children and their parents, thereby reducing the likelihood of recidivism. Ultimately, the evidence suggests that these conditions support and positively impact the wellbeing of parents and tamariki, including generating educational benefits, and that these lasting effects can help disrupt the cycle of offending.' },
        { type: 'h2', text: 'Taonga mō ngā Tamariki in action' },
        { type: 'p', text: 'Taonga mō ngā Tamariki(TMNT) is based on an adaptation of the Early Reading Together/Reading Together Te Pānui Ngātahi programmes and combines books, games and resources with workshops. It is designed to inform and foster positive whānau-tamariki relationships and is delivered to parents currently under the care or management of Ara Poutama Aotearoa/Department of Corrections. TMNT is delivered nationwide both in secure Corrections facilities as well as Community Corrections facilities.' },
        { type: 'h2', text: 'Research and results' },
        { type: 'li', text: 'Storytime Foundation Evaluation – TMNT' },
        { type: 'p', text: 'An evaluative report on the impacts and outcomes of the Taonga mō ngā Tamariki programme from 2017 to March 2021.' },
        { type: 'a', text: 'Read the report here', href: 'https://www.educationcounts.govt.nz/__data/assets/pdf_file/0019/209503/Storytime-Foundation-Evaluation-Taonga-mo-nga-Tamariki.pdf' },
        { type: 'a', text: 'Click here for a summary sheet of the report', href: 'https://www.educationcounts.govt.nz/__data/assets/pdf_file/0006/209508/Taonga-mo-nga-Tamariki-Evaluation-Summary-A3-FINAL.pdf' },
        { type: 'li', text: 'Theory of Change' },
        { type: 'p', text: 'A flow-chart illustrating the theory of change at the heart of Taonga mō ngā Tamariki.' },
        { type: 'a', text: 'See the chart here', href: 'https://www.educationcounts.govt.nz/__data/assets/pdf_file/0003/209505/Taonga-mo-nga-Tamariki-Theory-of-Change-A3-FINAL.pdf' },
        { type: 'li', text: 'Taonga mō ngā Tamariki – In Our Words' },
        { type: 'p', text: 'An illustrated overview of participant feedback in the Taonga mō ngā Tamariki programme.' },
        { type: 'a', text: 'See the feedback here', href: 'https://www.educationcounts.govt.nz/__data/assets/pdf_file/0020/209504/Taonga-mo-nga-Tamariki-In-Our-Words-A3-FINAL.pdf' },
        { type: 'li', text: 'Cost Benefit Analysis' },
        { type: 'p', text: 'An illustrated overview of the cost-benefit analysis of Taonga mō ngā Tamariki.' },
        { type: 'a', text: 'See the chart here', href: 'https://www.educationcounts.govt.nz/__data/assets/pdf_file/0005/219866/A3-Taonga-mo-nga-Tamariki-Programme-Cost-Benefit-Analysis.pdf' },
      ],
    },
    page3: {
        title: 'Storytime Books',
        subtitle: 'The power of reading together',
        mainImage: '/header-bg-imgs/books.jpg',
        content: [
          { type: 'h2', text: '' },
          { type: 'h3', text: 'storytimebooks.org.nz is a social enterprise arm of the Storytime Foundation. It is dedicated to creating books designed to help whānau build early attachment and nurture bonds with their children through the power of reading together.' },
          { type: 'p', text: 'Our first title, the Pepeha Cloth Book, is available now and 100% of profits from each sale support the provision of books and programmes to our target families. This ‘Get One, Give One’ programme means that for every copy sold, we donate a second copy to a family who wouldn’t otherwise have access to it. This helps us to help more families strengthen bonds and build stronger whānau connections.  This initiative has been developed with the generous support of the Tindall Foundation and our other key sponsors.' },
          { type: 'h3', text: 'Visit the shop to purchase a book and find out more' },
          { type: 'img', src: '/section-imgs/CEO-Tony-Culliney-Pepeha--1024x683.webp', alt: 'pepeha cloth book' },
            { type: 'img', src: '/section-imgs/Storytime-Pepeha-Book-with-baby-1024x464.webp', alt: 'pepeha cloth book' },
        ],
      },
    page4: { 
      title: 'First 1000 days', 
      subtitle: 'Supporting early bonds',
      mainImage: '/header-bg-imgs/first1000days.jpg',
          content: [
            { type: 'h2', text: '' },
      { type: 'h3', text: 'Our First 1000 Days programme focuses on New Zealand’s most vulnerable whānau with children aged 0-3 years old.' },
      { type: 'p', text: 'It recognises the importance of this time in a child’s life when it comes to building early bonds with parents/caregivers and establishing a sense of security and belonging in a family unit. Extensive research shows that when parents and whānau hold babies and children close and share the stories in books – reading the words, talking about the pictures, and singing the songs – children feel safe and loved, and learn to understand and use the language they need for life-long learning. Storytime Foundation supports Tamariki Ora/Well Child providers and other agencies with story and picture books, training, and resources that they deliver through their work with families around Aotearoa. Programmes of this nature have been shown to enhance the relationship between the parent and child, reduce parents’ stress, and improve educational and social outcomes for children. ' },
      { type: 'h3', text: '“This service has been such an easy and awesome way to engage whānau around the idea of reading, bedtime routines and creating attachment ‘moments of meeting’ with their tamariki and pēpi. It is a very ‘non-threatening’ way to introduce the concepts of reading books to babies and children, as we can use the books to ‘role model’ pointing out things, naming things etc… and discuss what kind of books baby’s like at different stages. This has been a really helpful way to articulate the importance of reading not only for language and academic development, but also for the opportunity to be with your child and promote attachment, safe and consistent bedtime rituals etc…..I also love that these books are in other languages. Thank you for providing this excellent resource for our whānau and tamariki/pēpi that we work with.”' },
      { type: 'h4', text: 'Mel Desmarais – Whānau Worker/Registered Social Worker (MappSW, MA) Whanau Awhina Plunket Family Start' },
      { type: 'p', text: 'First 1000 Days was originally developed as Books for Babies in 1997 in association with Plunket, Auckland Libraries, and Auckland District Health Board. It builds on Books for Babies and amalgamates this with our programmes for toddlers and older children. First 1000 Days uses books, games, activities, and storytelling as a medium to foster stronger whānau and a better society, for today and tomorrow. To date, more than 350 Tamariki Ora/Well Child professionals have been trained to deliver its resources and education to families. We provide a range of books in te reo Māori as well as bilingual books and titles in Pasifika and other languages. We are grateful to the Ministry of Education for assisting with funding titles in home and heart languages. In 2018, we launched our first Storytime Book, Pepeha Cloth Book, which is a picture book for babies aged 0-12 months. Inspired by the rich Māori tradition of pepeha, it is designed to encourage the sharing of whānau purakau/stories and connections.' },
      { type: 'h2', text: 'Research and results' },
      { type: 'li', text: 'Fostering a love of stories in a child’s first years is key to lifelong reading | RNZ News' },
      { type: 'p', text: 'Children’s literacy rates are falling around the globe. In response, a number of governments – including New Zealand’s – are overhauling the way reading is taught in primary school.' },
      { type: 'a', text: 'Read More', href: 'https://www.rnz.co.nz/news/national/529066/fostering-a-love-of-stories-in-a-child-s-first-years-is-key-to-lifelong-reading' },
      { type: 'li', text: 'Childhood poverty, brain development and the benefits of reading' },
      { type: 'p', text: 'Exploring the links between early childhood poverty and poorer brain development – and how reading can help counteract it.' },
      { type: 'a', text: 'Read More', href: 'https://theconversation.com/poverty-is-linked-to-poorer-brain-development-but-reading-can-help-counteract-it-208966' },
      { type: 'li', text: 'Spotlight on NZ preschooler development' },
      { type: 'p', text: 'An analysis of the prevalence and predictors of developmental health difficulties in New Zealand preschoolers. Jin Russell, Cameron C. Grant, Susan Morton, Simon Denny & Sarah-Jane Paine (Tūhoe) (2022):  Prevalence and predictors of developmental health difficulties within New Zealand preschool-aged children: a latent profile analysis, Journal of the Royal Society of New Zealand, DOI:10.1080/03036758.2022.2083188  ' },
      { type: 'a', text: 'Read Research Article', href: 'https://www.tandfonline.com/doi/full/10.1080/03036758.2022.2083188' },
    ],
    },
  };

  const currentPage = workContent[pageId];

  if (!currentPage) {
    return <div>Page not found!</div>;
  }

  return (
    <>
    <Seo
      title="Our impact - Storytime Foundation"
      description="Read about our work and impact."
    />
      <section className='single-page--container'>
        <BackButton />
        <div className='single-page'>
          <div 
            className='single-page--header' 
            style={{ 
              backgroundImage: `url(${currentPage.mainImage})`, 
            }}
          >
            <div className='single-page--header--titles'>
              <h2>{currentPage.title}</h2>
              <h3>{currentPage.subtitle}</h3>
            </div>
          </div>
          <div className='single-page--content'>
          {currentPage.content.map((block, index) => {
              switch (block.type) {
                case 'h2':
                  return <h2 key={index}>{block.text}</h2>;
                case 'h3':
                  return <h3 key={index}>{block.text}</h3>;
                  case 'h4':
                    return <h4 key={index}>{block.text}</h4>;
                case 'p':
                  return <p key={index}>{block.text}</p>;
                  case 'li':
                    return <li key={index}>{block.text}</li>;
                case 'a':
                    return <a className='link' key={index} href={block.href}>{block.text}</a>;
                case 'img':
                  return <img key={index} src={block.src} alt={block.alt} />;
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSinglePage;
