# Micro electrical grid monitoring dashboard

A web application for remotely monitoring relatively micro electrical grids. Built using [ReactJs](https://reactjs.org/ 'React.js') and the [material-ui react library](https://material-ui.com/ 'Material UI').

After launching the application, a user logs in with an email address and a password. Authentication is provided by [firebase](https://firebase.google.com/products/auth/ 'firebase auth'). Once authenticated they move on to a control dashboard.

The dashboard has two main components;

-   A Micro-grid diagram which is constantly updated with the current values of currents and voltages as reported by the grid.
    The diagram is an svg object. Drawn using [draw.io](https://www.draw.io 'Draw.io') and turned into a React component using [react inline svg](https://github.com/gilbarbara/react-inlinesvg 'SVG to react')
-   A table that display values of current and voltage over time

Table and grid values are sent from the physical circuit by a GSM module which is programmed to hit an endpoint. The endpoint is Node.js service that parses data and then stores it in a database ([firebase](https://firebase.google.com/products/realtime-database/ 'Firebase real time db'))

The backend service runs in a Node.js [container](https://firebase.google.com/products/functions/ 'Firebase cloud functions').

## Micro grids

A micro grid refers to a group of interconnected loads and distributed energy resources within clearly defined boundaries that acts as a single controllable entity with respect to the grid.
Micro grids are small scale grids and usually provide power for rural areas away from the national grid. Micro grids make use of distributed energy sources and these can be both conventional and renewable sources and these include wind, solar, hydro power among others. The energy source
to use depends on the resource availability, geographical location and load demand.
Renewable energy sources are prominent in micro-grid projects with hydro power and solar energy being the commonly used in Uganda.

This particular micro grid case study was for a hospital in Kanungu, a district in a remote part of Uganda.

![Hospital location](https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/hospital.jpg 'Hospital location')

![The hospitals power house](https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/power-house.jpg 'The hospitals power house')

![Physical power meters](https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/power-meters.png 'Physical power meters')

![Proteus grid simulation](https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/proteus-simulation.jpg 'Proteus grid simulation')

![Physical grid simulation using an arduino](https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/micro-grid.png 'Physical grid simulation using an arduino')

![Web app screenshot](https://raw.githubusercontent.com/mungujn/microgrid-monitoring-dashboard/master/static/web-app.png 'Web app screenshot')

Grid research, design, simulation and diagrams courtesy of Edward Kategaya and Albert Tumwebaze