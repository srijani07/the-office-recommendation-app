import "./styles.css";
import { useState } from "react";

var listOne = [
  "S1,E5 : Basketball",
  "S2,E12 : The Injury",
  "S4, E13 : Dinner Party",
  "S4,E14 : Goodbye, Toby",
  "S5,E14 : Stress Relief"
];
var listTwo = [
  "S2,E22 : Casino Night",
  "S3, E22 : Beach Games",
  "S7,E22 : Goodbye, Michael",
  "S9,E12 : Customer Loyalty",
  "S9, E24 : Finale"
];
var listThree = [
  "S3, E23 : The Job",
  "S4,E1 : Fun Run",
  "S5,E28 : Company Picnic",
  "S6,E4 : Niagara",
  "S7,E19 : Garage Sale"
];
var listFour = [
  "S2, E3 : Office Olympics",
  "S2,E11 : Booze Cruise",
  "S6,E14 : The Banker",
  "S9, E21 : Livin' The Dream",
  "S9, E22 : A.A.R.M"
];
const feelings = {
  "need to laugh": listOne,
  "need to cry": listTwo,
  "feeling loved": listThree,
  "feeling sentimental": listFour
};

export default function App() {
  var [episode, setEpisode] = useState([]);
  var feelingsList = Object.keys(feelings);

  function clickHandler(item) {
    episode = feelings[item];
    setEpisode(episode);
  }
  return (
    <div className="App">
      <h1>the office reccos :)</h1>
      <div>
        <ul>
          {feelingsList.map(function print(item) {
            return (
              <li class="options" key={item} onClick={() => clickHandler(item)}>
                {item}
              </li>
            );
          })}
        </ul>
        <div>
          <ul class="episode-list">
            {episode.map(function print(item) {
              return <li key={item}>{item} </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
