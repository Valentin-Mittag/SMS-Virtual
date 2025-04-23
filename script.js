function showMessages(number) {
  const messageBox = document.getElementById("messageBox");
  const messages = {
    "+1 202-555-0123": [
      "Tu código de verificación es: 123456",
      "Recordatorio: tu cita es mañana a las 15hs."
    ],
    "+54 911-1234-5678": [
      "¡Bienvenido a nuestro servicio!",
      "Tu token es: ABCD-1234"
    ],
    "+44 20-7946-0958": [
      "Hello! Your OTP is 987654.",
      "Your parcel has been shipped."
    ]
  };

  const selectedMessages = messages[number] || ["No hay mensajes disponibles."];
  messageBox.innerHTML = `<h3>Mensajes para ${number}</h3><ul>` + 
    selectedMessages.map(msg => `<li>${msg}</li>`).join('') + `</ul>`;
}