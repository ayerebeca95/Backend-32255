const persona = {
    name: "Mate",
    lastname: "Naran",
    edad: 3,
    country: 'Col'
  }
  
  /*console.log(persona)
  console.log(Object.keys(persona))
  console.log(Object.values(persona))
  console.log(Object.entries(persona))*/


  const teams = [ {
    Argentina: "Messi",
    brasil : "Neymar",
    uruguay: "Suarez"
  },{
    inglaterra: 2,
    italia: 3,
    alemania: 4
  }]

  const teamsNames = teams.map((team) => Object.keys(team));
  console.log("Teams Names:", teamsNames);

  const totalCoups = teams
  .map((team) =>Object.values(team))
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
  console.log("Total coups:", totalCoups);
