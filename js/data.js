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
        ]        
    },
    {
        question: "Which Men's Basketball Team won the first Gold Medal in 1936 Berlin Olympics?",
        answers: [
            { choice: "Yugoslavia", correct: false },
            { choice: "Philippines", correct: false },
            { choice: "Spain", correct: false },
            { choice: "United States", correct: true },
        ]        
    },
    {
        question: "Who scored the most points in Olympics basketball?",
        answers: [
            { choice: "Oscar Schmidt", correct: true },
            { choice: "Carmelo Anthony", correct: false },
            { choice: "Pau Gasol", correct: false },
            { choice: "Andrew Gaze", correct: false },
        ]
    },
    {
        question: "Which country won the men's basketball gold medal match against France in 2004?",
        answers: [
            { choice: "United States", correct: false },
            { choice: "Argentina", correct: true },
            { choice: "China", correct: false },
            { choice: "Croatia", correct: false },
        ]
    },
    {
        question: "Who is the NBA all-time triple-double leader?",
        answers: [
            { choice: "Nikola Jokić", correct: false },
            { choice: "Magic Johnson", correct: false },
            { choice: "Oscar Robertson", correct: false },
            { choice: "Russel Westbrook", correct: true },
        ]
    },
    {
        question: "Who won the Season, All-Star and Finals MVP in the same NBA season?",
        answers: [
            { choice: "LeBron James", correct: false },
            { choice: "Kareem-Abdul Jabbar", correct: false },
            { choice: "Michael Jordan", correct: true },
            { choice: "Kobe Bryant", correct: false },
        ]
    },
    {
        question: "Who is the youngest NBA Season MVP?",
        answers: [
            { choice: "LeBron James", correct: false },
            { choice: "Magic Johnson", correct: false },
            { choice: "Karl Malone", correct: false },
            { choice: "Derrick Rose", correct: true },
        ]
    },
    {
        question: "Which NBA team holds the best Win-Lose record in a season?",
        answers: [
            { choice: "Cleveland Cavaliers", correct: false },
            { choice: "Chicago Bulls", correct: false },
            { choice: "Boston Celtics", correct: false },
            { choice: "Golden State Warriors", correct: true },
        ]
    },
    {
        question: "Who is the first pick during the 1996 NBA Draft?",
        answers: [
            { choice: "Kobe Bryant", correct: false },
            { choice: "Allen Iverson", correct: true },
            { choice: "Steve Nash", correct: false },
            { choice: "Peja Stojaković", correct: false },
        ]
    },
    {
        question: "Which player scored 13 points in 33 seconds in an NBA game?",
        answers: [
            { choice: "Kevin Durant", correct: false },
            { choice: "Tracy McGrady", correct: true },
            { choice: "Kobe Bryant", correct: false },
            { choice: "Shaquille O'neal", correct: false },
        ]
    },
    {
        question: "Who invented the sport Basketball?",
        answers: [
            { choice: "Red Auerbach", correct: false },
            { choice: "Dr. James Naismith", correct: true },
            { choice: "Larry O'Brien", correct: false },
            { choice: "David Stern", correct: false },
        ]
    },
    {
        question: "Who scored the most points in a single NBA game?",
        answers: [
            { choice: "Wilt Chamberlain", correct: true },
            { choice: "Bill Russell", correct: false },
            { choice: "Kobe Bryant", correct: false },
            { choice: "Luka Dončíć", correct: false },
        ]
    },
    {
        question: "Which team has the most NBA championships?",
        answers: [
            { choice: "Los Angeles Lakers", correct: false },
            { choice: "Golden State Warriors", correct: false },
            { choice: "Boston Celtics", correct: true },
            { choice: "Chicago Bulls", correct: false },
        ]
    },
    {
        question: "Which team did Yao Ming played in his career?",
        answers: [
            { choice: "Cleveland Cavaliers", correct: false },
            { choice: "Dallas Mavericks", correct: false },
            { choice: "San Antonio Spurs", correct: false },
            { choice: "Houston Rockets", correct: true },
        ]
    },
    {
        question: "Which player won a three-peat championship from 2001-2003?",
        answers: [
            { choice: "Tim Duncan", correct: false },
            { choice: "Kobe Bryant", correct: true },
            { choice: "Dwyane Wade", correct: false },
            { choice: "Allen Iverson", correct: false },
        ]
    },
    {
        question: "Which player DID NOT play for the Boston Celtics?",
        answers: [
            { choice: "Larry Bird", correct: false },
            { choice: "Bill Russell", correct: false },
            { choice: "Jerry West", correct: true },
            { choice: "Bob Cousey", correct: false },
        ]
    },
    {
        question: "Which player DID NOT play for the Los Angeles Lakers?",
        answers: [
            { choice: "Magic Johnson", correct: false },
            { choice: "Shaquille O'neal", correct: false },
            { choice: "Luka Dončíć", correct: false },
            { choice: "Paul Pierce", correct: true },
        ]
    },
    {
        question: "Who has the all-time most 3-Pointers made?",
        answers: [
            { choice: "Stephen Curry", correct: true },
            { choice: "Klay Thompson", correct: false },
            { choice: "Ray Allen", correct: false },
            { choice: "Reggie Miller", correct: false },
        ]
    },
    {
        question: "Who is the all-time NBA career points leader?",
        answers: [
            { choice: "Michael Jordan", correct: false },
            { choice: "Karl Malone", correct: false },
            { choice: "Kareem Abdul-Jabbar", correct: false },
            { choice: "LeBron James", correct: true },
        ]
    },
    {
        question: "Which player played for the Serbia Men's Basketball Team?",
        answers: [
            { choice: "Luka Dončíć", correct: false },
            { choice: "Dirk Nowitzki", correct: false },
            { choice: "Toni Kukoč", correct: false },
            { choice: "Nikola Jokić", correct: true },
        ]
    },
]