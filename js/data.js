//create an array of objects for all the datas.
// start with questionaires. follow with another object containing the choice and correct answer

const questions = [
    {
        question: "Which team is the 1996 NBA Champions?",
        answers: [
            { choice: "Utah Jazz", correct: false },
            { choice: "Houston Rockets", correct: false },
            { choice: "Los Angeles Lakers", correct: false },
            { choice: "Chicago Bulls", correct: true },
        ],
        trivia: "The Chicago Bulls won the 1996 NBA Finals, marking the team's 4th championship after their 3-peat from '91-'93."        
    },
    {
        question: "Which Men's Basketball Team won the first Gold Medal in 1936 Berlin Olympics?",
        answers: [
            { choice: "Yugoslavia", correct: false },
            { choice: "Philippines", correct: false },
            { choice: "Spain", correct: false },
            { choice: "United States", correct: true },
        ],
        trivia: "The United States won the first mens basketball gold medal in the Olympics."        
    },
    {
        question: "Who scored the most points in Olympics basketball?",
        answers: [
            { choice: "Oscar Schmidt", correct: true },
            { choice: "Carmelo Anthony", correct: false },
            { choice: "Pau Gasol", correct: false },
            { choice: "Andrew Gaze", correct: false },
        ],
        trivia: "Brazilian player Oscar Schmidt still holds the most points in Olympics Basketball."
    },
    {
        question: "Which country won the Olympics men's basketball gold medal match against Italy in 2004?",
        answers: [
            { choice: "United States", correct: false },
            { choice: "Argentina", correct: true },
            { choice: "China", correct: false },
            { choice: "Croatia", correct: false },
        ],
        trivia: "Argentina won the gold medal match against Italy in 2004."
    },
    {
        question: "Who is the NBA all-time triple-double leader?",
        answers: [
            { choice: "Nikola Jokić", correct: false },
            { choice: "Magic Johnson", correct: false },
            { choice: "Oscar Robertson", correct: false },
            { choice: "Russel Westbrook", correct: true },
        ],
        trivia: "Russel Westbrook holds record for the most career triple-doubles."
    },
    {
        question: "Who won the Season, All-Star and Finals MVP in the same NBA season?",
        answers: [
            { choice: "LeBron James", correct: false },
            { choice: "Kareem-Abdul Jabbar", correct: false },
            { choice: "Michael Jordan", correct: true },
            { choice: "Kobe Bryant", correct: false },
        ],
        trivia: "Michael Jordan won all three MVPs in a season along with Shaquille O'Neal and Willis Reed."
    },
    {
        question: "Who is the youngest NBA Season MVP?",
        answers: [
            { choice: "LeBron James", correct: false },
            { choice: "Magic Johnson", correct: false },
            { choice: "Karl Malone", correct: false },
            { choice: "Derrick Rose", correct: true },
        ],
        trivia: "Derrick Rose won the MVP in 2011 at the age of 22 years old."
    },
    {
        question: "Which NBA team holds the best Win-Lose record in a season?",
        answers: [
            { choice: "Cleveland Cavaliers", correct: false },
            { choice: "Chicago Bulls", correct: false },
            { choice: "Boston Celtics", correct: false },
            { choice: "Golden State Warriors", correct: true },
        ],
        trivia: "The 2016 Golden State Warriors had a record of 73-9 while the 1996 Bulls had a 72-10 record."
    },
    {
        question: "Who is the first pick during the 1996 NBA Draft?",
        answers: [
            { choice: "Kobe Bryant", correct: false },
            { choice: "Allen Iverson", correct: true },
            { choice: "Steve Nash", correct: false },
            { choice: "Peja Stojaković", correct: false },
        ],
        trivia: "Allen Iverson is the first overall pick in 1996 NBA Draft."
    },
    {
        question: "Which player scored 13 points in 33 seconds in an NBA game?",
        answers: [
            { choice: "Kevin Durant", correct: false },
            { choice: "Tracy McGrady", correct: true },
            { choice: "Kobe Bryant", correct: false },
            { choice: "Shaquille O'neal", correct: false },
        ],
        trivia: "Tracy McGrady had this performance against the Spurs in 2004."
    },
    {
        question: "Who invented the sport of Basketball?",
        answers: [
            { choice: "Red Auerbach", correct: false },
            { choice: "Dr. James Naismith", correct: true },
            { choice: "Larry O'Brien", correct: false },
            { choice: "David Stern", correct: false },
        ],
        trivia: "Dr. James Naismith invented the game of Basketball in December of 1891."
    },
    {
        question: "Who scored the most points in a single NBA game?",
        answers: [
            { choice: "Wilt Chamberlain", correct: true },
            { choice: "Bill Russell", correct: false },
            { choice: "Kobe Bryant", correct: false },
            { choice: "Luka Dončíć", correct: false },
        ],
        trivia: "Wilt Chamberlain still holds the record since 1962 by scoring 100 points."
    },
    {
        question: "Which team has the most NBA championships?",
        answers: [
            { choice: "Los Angeles Lakers", correct: false },
            { choice: "Golden State Warriors", correct: false },
            { choice: "Boston Celtics", correct: true },
            { choice: "Chicago Bulls", correct: false },
        ],
        trivia: "Boston Celtics holds the record with 18 championships."
    },
    {
        question: "Which team did Yao Ming played in his career?",
        answers: [
            { choice: "Cleveland Cavaliers", correct: false },
            { choice: "Dallas Mavericks", correct: false },
            { choice: "San Antonio Spurs", correct: false },
            { choice: "Houston Rockets", correct: true },
        ],
        trivia: "Yao Ming played for the Houston Rockets during his NBA career."
    },
    {
        question: "Which player won a three-peat championship from 2001-2003?",
        answers: [
            { choice: "Tim Duncan", correct: false },
            { choice: "Kobe Bryant", correct: true },
            { choice: "Dwyane Wade", correct: false },
            { choice: "Allen Iverson", correct: false },
        ],
        trivia: "Kobe Bryant along with Shaquille O'Neal led the Lakers to win the 2000-2002 NBA championships."
    },
    {
        question: "Which player DID NOT play for the Boston Celtics?",
        answers: [
            { choice: "Larry Bird", correct: false },
            { choice: "Bill Russell", correct: false },
            { choice: "Jerry West", correct: true },
            { choice: "Bob Cousey", correct: false },
        ],
        trivia: "Jerry West played for the Los Angeles Lakers from 1960 to 1974."
    },
    {
        question: "Which player DID NOT play for the Los Angeles Lakers?",
        answers: [
            { choice: "Magic Johnson", correct: false },
            { choice: "Shaquille O'neal", correct: false },
            { choice: "Luka Dončíć", correct: false },
            { choice: "Kevin McHale", correct: true },
        ],
        trivia: "Kevin McHale played for the Boston Celtics from 1980 to 1993."
    },
    {
        question: "Who has the all-time most 3-Pointers made?",
        answers: [
            { choice: "Stephen Curry", correct: true },
            { choice: "Klay Thompson", correct: false },
            { choice: "Ray Allen", correct: false },
            { choice: "Reggie Miller", correct: false },
        ],
        trivia: "Stephen Curry holds the record for most 3-Pointers made. He is considered the greatest shooter of all-time."
    },
    {
        question: "Who is the all-time NBA career points leader?",
        answers: [
            { choice: "Michael Jordan", correct: false },
            { choice: "Karl Malone", correct: false },
            { choice: "Kareem Abdul-Jabbar", correct: false },
            { choice: "LeBron James", correct: true },
        ],
        trivia: "LeBron James holds the record after passing Kareem Abdul-Jabbar's 39-year record in 2023."
    },
    {
        question: "Which player played for the Serbia Men's Basketball Team?",
        answers: [
            { choice: "Luka Dončíć", correct: false },
            { choice: "Dirk Nowitzki", correct: false },
            { choice: "Toni Kukoč", correct: false },
            { choice: "Nikola Jokić", correct: true },
        ],
        trivia: "Nikola Jokić is an active player for Serbia since the 2016 Rio de Janeiro Olympics."
    },
]

