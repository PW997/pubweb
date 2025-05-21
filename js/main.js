async function fetchAppointments() {
  const response = await fetch("json/list.json");
  // let url = "https://raw.githubusercontent.com/siuchoing/my_project/refs/heads/master/json/list.json";
  // const response = await fetch(url);
  console.log("response", response);
  const appointments = await response.json();
  console.log("appointments", appointments);
  renderAppointments(appointments);
}

function renderAppointments(appointments) {
  const tbody = document.getElementById("appointment-body");
  tbody.innerHTML = ""; // Clear existing content

  appointments.forEach((appointment) => {
    // creates an HTML element of the type specified—in this case, a table row.
    const tr = document.createElement("tr");
    tr.className = "content";

    tr.innerHTML = `
          <td>
            <div class="user-info">
              <div class="avator">
                <img src="img/${appointment.patient.avatar}" width="250" height="250" alt="" />
              </div>
              <div class="user-profile">
                <div class="user-name">${appointment.patient.name}</div>
                <div class="user-text">${appointment.patient.age} yrs, ${appointment.patient.gender}</div>
              </div>
            </div>
          </td>
          <td>
            <button class="${appointment.status.toLowerCase()}-btn">${appointment.status}</button>
          </td>
          <td>
            <div class="time fw600">${appointment.appointment.time}</div>
            <div class="date sm">${appointment.appointment.date}</div>
          </td>
          <td>
            <div class="fw600">${appointment.phone}</div>
            <div class="sm">
              <a href="tel:${appointment.phone.replace(/\s+/g, '')}">Contact</a>
            </div>
          </td>
          <td class="doctor-name fw600">${appointment.doctor}</td>
          <td class="action-link">
            <div class="fw600">${appointment.patient.email}</div>
            <div class="sm">
              <a href="mailto:${appointment.patient.email}">Send Email</a>
            </div>
          </td>
        `;

    //adds the newly created row (tr) to the table body (tbody).
    tbody.appendChild(tr);
  });
}

// Fetch and render the appointments on page load
window.onload = fetchAppointments;
// Use fetchAppointments(); The API call is made immediately, before the window finishes loading
// Use fetchAppointments; The API call will be made after the window has fully loaded, 
// which is typically the desired behavior for loading data.
