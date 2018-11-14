import React from 'react';
import PropTypes from 'prop-types';
import Schedule from './Schedule';
const marketSchedule = [
   {
      day: 'Sunday',
      location: 'Lents International',
      hours: '9:00am - 2:00pm',
      booth: '4A'
   },
   {
      day: 'Monday',
      location: 'Pioneer Courthouse Square',
      hours: '10:00am - 2:00pm',
      booth: '7C'
   },
   {
      day: 'Tuesday',
      location: 'Hillsboro',
      hours: '5:00pm - 8:30pm',
      booth: '1F'
   },
   {
      day: 'Wednesday',
      location: 'Shemanski Park',
      hours: '10:00am - 2:00pm',
      booth: '3E'
   },
   {
      day: 'Thursday',
      location: 'Northwest Portland',
      hours: '2:00pm - 6:00pm',
      booth: '6D'
   },
   {
      day: 'Saturday',
      location: 'Beaverton',
      hours: '10:00am - 1:30pm',
      booth: '9G'
   },
   {
      day: 'BlackFriday',
      location: 'Seattle',
      hours: '4:00am - 11:00am',
      booth: 'ParkingLot'
   }
];

function ScheduleList() {
   return (
      <div>
         {marketSchedule.map((schedule, index) =>
            <div>
               <style jsx>{`
               border: 2px solid cyan;
               border-radius: 5px;
               margin-bottom: 10px;
               padding: 5px;
               background: lightgrey;
               `}</style>

               <Schedule
                  location={schedule.location}
                  day={schedule.day}
                  hours={schedule.hours}
                  booth={schedule.booth}
                  key={index}
               />
            </div>
         )}
      </div>
   );
}

export default ScheduleList;

