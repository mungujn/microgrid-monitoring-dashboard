# Micro electrical grid monitoring dashboard

A web application for remotely monitoring relatively simple electrical grids. Built using [React.js](https://reactjs.org/ "React.js") and the [material-ui react library](https://material-ui.com/ "Material UI").

Upon launching the application, a user logs in with an email address and a password. Authentication is provided by [firebase](https://firebase.google.com/products/auth/ "firebase auth"). Once authenticated they move on to a control dashboard.

The dashboard has two main components;

* A Micro-grid diagram which is constantly updated with the current values of currents and voltages as reported by the system.
  The diagram is an svg object. Drawn using [draw.io](https://www.draw.io "Draw.io") and turned into a React component using [react inline svg](https://github.com/gilbarbara/react-inlinesvg "SVG to react")
* A table that display past system states i.e. past values of currents and voltages in the system

Table and grid values are sent from the physical circuit by a GSM module which is programmed to hit an endpoint. The endpoint is a service that parses data and then stores it in a database ([firebase](https://firebase.google.com/products/realtime-database/ "Firebase real time db"))

The backend service runs in a Node.js container provided by [firebase](https://firebase.google.com/products/functions/ "Cloud functions").

This particular micro grid case study was for a hospital in Kanungu which is a district in a remote part of Uganda

<img src="https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/screenshot.PNG"/>
            <p>Screenshot with mock current and voltage values</p>
