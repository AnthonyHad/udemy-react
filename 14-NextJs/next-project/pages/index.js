import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    address: 'Rue de la Bourse, 75001, Paris',
    description: 'our first french BTC meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    address: 'Rue de la Liberté, 75001, Paris',
    description: 'our second french BTC meetup',
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   //send http request and fetch
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   // similar to Node JS we have access to req and response objects
//   //can be a disadvantage if we want to wait for every request
//   const req = context.req;
//   const res = context.res;
//   //code will always run on the server
//   // we can run operation on credentials

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

//only works in page component files
//gets called before calling the component function
//next Js would wait for the data to be loaded and with that we'd load data with the required data
//can run code which is run on a server, it will never end up on the client side, it's executed during the
//build process
export async function getStaticProps() {
  //fetch data from API, file system

  //awlays need to return an object
  //issue that we can have here is that if the data changes we would see outdated data unless we rebuild/redeploy
  //good use case for personal blog for example unless we add the revalidate property unlocking Incremental Static Generation
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 1, // will regenerate the page every 10 seconds (but sometimes it's not enough we want to regenerate every request)
  };
}

export default HomePage;
