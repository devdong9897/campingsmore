import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const DemoApp = () => {
  const handleDateClick = arg => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
    />
  );
};

export default DemoApp;
