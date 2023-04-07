import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // ...
  } else {
    //const resData = await response.json();
    //return resData.events;
    //const res  = new Response("any data", {status: 201});
    return response;
  }
} 