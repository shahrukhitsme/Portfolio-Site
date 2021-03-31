let projectDetails = [
  {
    "title": "TODO LIST",
    "description" : "A single page todo list manager, created using React and Google firebase. It authenticates the user and allows the user to save personal todos.",
    "isHosted" : "true",
    "siteLink" : "https://todo-list-4a0c6.web.app",
    "gitLink" : "https://github.com/shahrukhitsme/Todo-List"
  },{
    "title": "Portfolio (Old)",
    "description" : "This is my previous version of portfolio, when I was a newbie.",
    "isHosted" : "true",
    "siteLink" : "https://portfolio-srk.netlify.app/",
    "gitLink" : "https://github.com/shahrukhitsme/portfolio"
  },{
    "title": "DS & Algo",
    "description" : "Check out the repository where you will find hundreds of codes that I write almost everyday.",
    "isHosted" : "false",
    "siteLink" : "",
    "gitLink" : "https://github.com/shahrukhitsme/Competitive-Programs"
  },{
    "title": "Automation",
    "description" : "Automate a google form to fill in as many responses as many there are items in the data, using nodejs and selenium.",
    "isHosted" : "false",
    "siteLink" : "",
    "gitLink" : "https://github.com/shahrukhitsme/Google-Form-Automation"
  },{
    "title": "Dynamic UI from data with pagination",
    "description" : "A simple UI page which makes HTTP request, fetches data, and updates the UI, also adding pagination.",
    "isHosted" : "true",
    "siteLink" : "https://nostalgic-hawking-0d1842.netlify.app/",
    "gitLink" : "https://github.com/shahrukhitsme/reactTaskByWhitePanda"
  },{
    "title": "NewsGrid",
    "description" : "A News website with mock data, with responsive styling.",
    "isHosted" : "true",
    "siteLink" : "https://infallible-haibt-48404e.netlify.app/index.html",
    "gitLink" : "https://github.com/shahrukhitsme/NewsGrid"
  },{
    "title": "EdgeLedger",
    "description" : "A simple single page created using Html5, Css3. It is responsive, which adapts itself according to different devices it is viewed from.",
    "isHosted" : "true",
    "siteLink" : "https://wonderful-benz-0d8510.netlify.app/",
    "gitLink" : "https://github.com/shahrukhitsme/EdgeLedger"
  },{
    "title": "Monopoly Game Manager",
    "description" : "This is an expense manager for the famous business/monopoly game, You won't need to handle physical notes/coins if you use this.",
    "isHosted" : "true",
    "siteLink" : "https://hardcore-goldstine-9912f3.netlify.app/manager.html",
    "gitLink" : "https://github.com/shahrukhitsme/Business-Game-Manager"
  },{
    "title": "Pig Dice Game",
    "description" : "Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to hold. If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues. If a player chooses to hold, their turn total is added to their score, and it becomes the next player's turn. The first player to score the goal score or more points wins.For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score.",
    "isHosted" : "true",
    "siteLink" : "https://trusting-ride-4cdf0a.netlify.app/",
    "gitLink" : "https://github.com/shahrukhitsme/Pig-Dice-Game"
  },{
    "title": "Color Guessing Game",
    "description" : "Here, you will be given an RGB color code and a color palette, from which you have to select the appropriate one.",
    "isHosted" : "true",
    "siteLink" : "https://silly-wiles-3024ae.netlify.app/colorgame",
    "gitLink" : "https://github.com/shahrukhitsme/Color-Guessing-Game"
  },{
    "title": "Budget App",
    "description" : "A small project to implement JavaScript concepts in a structured manner. You can add earnings and expenses and view your transaction details.",
    "isHosted" : "true",
    "siteLink" : "https://romantic-austin-fe414a.netlify.app/",
    "gitLink" : "https://github.com/shahrukhitsme/BudgetApp/tree/develop"
  },{
    "title": "Portfolio",
    "description" : "This site which you are on. It is responsive and created developed sing HTML, SASS and JS",
    "isHosted" : "false",
    "siteLink" : "",
    "gitLink" : "https://github.com/shahrukhitsme/Portfolio-Site"
  }
];

let currentModalProject = {};

document.getElementById("floatingButton").style.visibility = 'hidden';
document.getElementById("floatingButton").style.opacity = 0;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 250) {
    document.getElementById("floatingButton").style.visibility = 'visible';
    document.getElementById("floatingButton").style.opacity = 1;
  } else {
    document.getElementById("floatingButton").style.visibility = 'hidden';
    document.getElementById("floatingButton").style.opacity = 0;
  }
  prevScrollpos = currentScrollPos;
}

init();

function init(){
  updateWorkEx();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal(event);
  }
})


function  updateWorkEx(){
  let workEx = document.getElementById("workEx");
  if(workEx==null)
    return;
  let dt1 = new Date("February 24, 2018 08:11:00");
  let dt2 = new Date();
  workEx.innerText += ` ${diff_years(dt1, dt2)} years`;
}

function diff_years(dt2, dt1) 
 {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(round(diff/365.25, 1));
 }

 function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function openModal(currentModalTitle){
  let modal = document.getElementById("modal");
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  if(currentModalTitle!=""){
    for(let index in projectDetails){
      let project = projectDetails[index];
      if(project["title"].toUpperCase()==currentModalTitle.toUpperCase()){
        currentModalProject = project;
        document.getElementById("title").innerText = currentModalProject["title"];
        document.getElementById("modalDescription").innerText = currentModalProject["description"];
        if(currentModalProject["isHosted"].toUpperCase()!="TRUE"){
          toggleSiteButtonVisibility();
        }
        break;
      }
    }
  }
}

function toggleSiteButtonVisibility(){
  let siteLink = document.getElementById("siteLink");
  siteLink.style.display = "none";
}

function closeModal(e){
  let modal = document.getElementById("modal");
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  currentModalProject = {};
  if(e)
    e.preventDefault();
}

function visitSite(e){
  let key = e.target.id;
  if(currentModalProject!={}){
    window.open(currentModalProject[key]);
  }
}