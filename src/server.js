const express = require('express');

const app = express();

app.use(express.static('public'));
// app.get('/', (req, res) => {
//   res.send('.....yolo....');
// });

app.listen(3000, () => {
  console.log('server is running...')
});

// https://event.on24.com/eventRegistration/console/EventConsoleApollo.jsp?&eventid=1621336&sessionid=1&username=&partnerref=&format=fhvideo1&mobile=false&flashsupportedmobiledevice=false&helpcenter=false&key=AB15D55DBF120BC93A0BE6834D2B400F&text_language_id=en&playerwidth=1000&playerheight=650&overwritelobby=y&eventuserid=206895607&contenttype=A&mediametricsessionid=169155627&mediametricid=2320140&usercd=206895607&mode=launch#
// 46:07
