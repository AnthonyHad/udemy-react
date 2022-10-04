import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
      alt="First Meetup"
      title="First Meetup"
      address="Some Streert"
      description="some meetup"
    />
  );
}

export async function getStaticPaths() {
  //we usually fetch Ids from the database
  return {
    fallback: false, // if set to true would help us to not pre generate all of our pages but just most of them
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch the data for a single meetup
  //cannot use react hooks in here
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        title: 'First Meetup',
        address: 'Some Streert',
        description: 'some meetup',
      },
    },
  };
}

export default MeetupDetails;
