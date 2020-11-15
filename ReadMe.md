# <span style="color:#0ec2b8">_Super Galactic Age Calculator_</span>

#### _ Super Galactic Age Calculator app, 11/13/2020_

#### By _**Nataliya Zhuravleva**_

## <span style="color:#0ec2b8">Description</span>

_This application determines a user's age based on a planet's solar years. It returns user's age in Mercury, Venus, Mars and Jupiter._

_Also, this app determines how many years a user has left to live on each planet… (yikes!) 
If a user has already surpassed the average life expectancy, this app returns the number of years they have lived past the life expectancy._


## <span style="color:#0ec2b8">Setup/Installation Requirements</span>
### <span style="color:#c4f4ef">Open Locally</span>
1. _Navigate to my [Super Galactic Age Calculator repo](https://github.com/NataliyaZhuravleva/age-calc) at https://github.com/NataliyaZhuravleva/age-calc_ to view the project files and commits.
2. _Click on the green button labeled "Code"_ to copy repository URL.
3. _Clone the repository to your local machine_ by opening your machine terminal and using the command "git clone https://github.com/NataliyaZhuravleva/age-calc".
4. _Navigate to the folder "/_tests_" to see test files_
5. _Navigate to the folder "/src/js" to see javascript files_



## <span style="color:#0ec2b8">Known Bugs</span>

_No known bags_

## <span style="color:#0ec2b8">Support and contact details</span>

_If you have any questions, ideas or concerns, please, contact me at [natalindria@gmail.com](mailto:natalindria@gmail.com)_


## <span style="color:#0ec2b8">Technologies Used</span>

* _VisualStudio Code_
* _Git_
* _GitHub_
* _HTML/CSS/Bootstrap_
* _JavaScript. jQuery_
* _Node_
* _Npm_
* _ESLint_
* _Jest_

## <span style="color:#0ec2b8">Specs</span>

<table>
  <tr>
    <th>ID
    <th>Test</th>
    <th>Input</th>
    <th>Output</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Should correctly create User class with user's age</td>
    <td>user.age</td>
    <td>35</td>
    <td>True</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Should correctly create Planet class with planet name</td>
    <td>planet.name</td>
    <td>"Earth"</td>
    <td>True</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Should correctly create Planet class with planet name and ratio</td>
    <td>planet.ratio</td>
    <td>0.24</td>
    <td>True</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Should correctly create Planets class with planetsArray</td>
    <td>planets.planetsArray[0]</td>
    <td>{"name": "Earth", "ratio": 1}</td>
    <td>True</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Should correctly add planets to planetsArray</td>
    <td>planets.addPlanets(Earth)</td>
    <td>planets.planetsArray=[Earth]</td>
    <td>True</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Should correctly calculate user's age in planet years and add them to agesArray</td>
    <td>user.calculateAge(35)</td>
    <td>user.agesArray=[35, 8.4, 21.7, 65.8, 415.1]</td>
    <td>True</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Should correctly create User class with user's country</td>
    <td>user.country</td>
    <td>"USA"</td>
    <td>True</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Should correctly create Country class with id, country name and averageLifeExpectancy</td>
    <td>
        user.id<br>
        user.name<br>
        user.averageLifeExpectancy
    </td>
    <td>
        1<br>
        "USA"<br>
        79
    </td>
    <td>True</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Should correctly create Countries class with countriesArray</td>
    <td>countries.countriesArray[0]</td>
    <td>{ "id": 1, "name": "USA", "averageLifeExpectancy": 79 }</td>
    <td>True</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Should correctly add countries to countriesArray</td>
    <td>countries.addCountries(USA)</td>
    <td>countries.countriesArray=[USA]</td>
    <td>True</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Should correctly calculate user's life expectancy on Earth and add it to lifeExpectancyArray</td>
    <td>user.calculateLifeExpectancy(planets)</td>
    <td>user.lifeExpectancyArray=[79]</td>
    <td>True</td>
  </tr>
   <tr>
    <td>12</td>
    <td>Should correctly calculate user's life expectancy on all planets and add them to lifeExpectancyArray</td>
    <td>user.calculateLifeExpectancy(planets)</td>
    <td>user.lifeExpectancyArray=[79, 18.9, 48.9, 148.5, 936.9]</td>
    <td>True</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Should correctly calculate the number of years user have lived past the life expectancy if applicable and add it to pastLifeExpectancyArray</td>
    <td>user.calculateLeftToLive();</td>
    <td>user.lifeExpectancyArray=[4, 0.9, 2.5, 7.5, 47.5]</td>
    <td>True</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Should correctly calculate the number of years user has left to live on each planet if applicable and add it to leftToLiveArray</td>
    <td>user.calculateLeftToLive();</td>
    <td>user.leftToLiveArray=[44, 10.6, 27.3, 82.7, 521.8]</td>
    <td>True</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Should correctly return result string with user's age in planet years on each planet</td>
    <td>user.calculateAge(35)</td>
    <td>calculateAgeString="Your age in Earth years is 35. Your age in Mercury years is 8.4. Your age in Venus years is 21.7. Your age in Mars years is 65.8. Your age in Jupiter years is 415.1."</td>
    <td>True</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Should correctly return result string with user's life expectancy in planet years on each planet</td>
    <td>user.calculateLifeExpectancy(planets)</td>
    <td>calculateLifeExpectancyString="Your life expectancy age in Earth years is 79. Your life expectancy age in Mercury years is 18.9. Your life expectancy age in Venus years is 48.9. Your life expectancy age in Mars is 148.5. Your life expectancy age in Jupiter is 936.9."</td>
    <td>True</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Should correctly return result string with user's left to live years on each planet</td>
    <td>user.calculateLeftToLive()</td>
    <td>calculateLeftToLiveString="You should be alive 44 years more in Earth years. You should be alive 10.6 years more in Mercury years.You should be alive 27.3 years more in Venus years.You should be alive 82.7 years more in Mars years.You should be alive 521.8 years more in Jupiter years."</td>
    <td>False</td>
  </tr>
</table>

### <span style="color:#0ec2b8">License</span> 

*This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license*

Copyright (c) 2020 **_Nataliya Zhuravleva_**
