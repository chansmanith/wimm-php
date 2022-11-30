//data Section
const quizData = [
    {
        //1
        question: "What place do you prefer to be at most to complete your assignments?",
        subtitle: "Place where enjoy doing your homeworks or review the lesson.",
        answer: [
            "Library", //15/25/20/10/10/20
            "Office", //20/25/15/15/15/10
            "Classes", //15/20/25/10/10/20
            "Coffee Shop", //25/10/15/10/15/25
            "Your Room", //10/20/15/20/25/10
            "Public Park", //25/15/20/5/5/30
        ],
    },
    {
        //2
        question: "Which are your most enjoyable activity?",
        subtitle: "Your daily hobbies that you always do.",
        answer: [
            "Reading books, articles, newspapers", //20/25/25/5/10/15
            "Writing, Listening to Music/Podcast", //15/20/15/20/15/15
            "Traveling, Shopping, Camping", //20/10/20/10/15/25
            "Watching Videos, Dramas, Movies", //20/15/15/15/15/20
        ],
    },
    {
        //3
        question: "What skill do you think you are best at?",
        subtitle: "",
        answer: [
            "Communication", //20/15/20/10/15/20
            "Being attentive", //15/25/20/10/15/15
            "Quick Learning", //15/20/15/15/20/15
            "Memorizing", //15/20/20/15/15/15
            "Analyzing", //15/15/10/25/30/5
            "Problem-solving", //20/15/15/15/20/15
        ],
    },
    {
        //4
        question: "What skill do you think is your weakness?",
        subtitle: "",
        answer: [
            "Communication", //10/10/10/30/25/10
            "Being attentive", //10/20/10/30/20/10
            "Quick Learning", //20/10/20/20/10/20
            "Memorizing", //20/10/15/20/20/15
            "Analyzing", //15/25/15/15/15/15
            "Problem-solving", //15/20/15/20/15/15
        ],
    },
    {
        //5
        question: "Which type of person would you like to communicate with?",
        subtitle: "You can think of your friend or family personality to answer this question.",
        answer: [
            "Talkative", //25/15/20/10/5/25
            "Serious", //15/20/20/15/15/15
            "Understandable", //20/15/15/15/20/15
            "Energetic", //15/15/15/20/20/15
            "Funny", //25/10/15/10/15/25
            "No One", //10/15/10/25/20/15
        ],
    },
    {
        //6
        question: "Which of the following is best describe yourself as a person?",
        subtitle: "What do you see yourselves? Look at the mirror!",
        answer: [
            "Active", //20/20/15/15/10/20
            "Shy", //15/15/15/20/20/15
            "Creative", //20/10/10/20/20/20
            "Adventurous", //15/15/15/15/15/25
            "Diligent", //20/20/20/10/10/20
            "Considerate", //15/20/15/15/20/15
        ],
    },
    {
        //7
        question: "Which would you want to improve your country in the future?",
        subtitle: "You can take times to think of this question",
        answer: [
            "A higher rate of nonviolent", //15/35/35/0/0/15
            "Better and cleaner environment", //10/15/30/0/0/45
            "Improvement of quality in technology", //15/0/5/35/35/10
            "Stable economy", //35/0/35/0/0/30
            "Better connection with your neighbors", //10/10/35/5/10/30
            "More accurate of information in publishment", //15/30/20/10/10/15
        ],
    },
    {
        //8
        question: "Which of the following that people would describe most about you?",
        subtitle: "Your family or friends who used to describe about you, or what personality that public potray you.",
        answer: [
            "Stubborn person", //15/20/10/15/15/25
            "Risk taker", //25/10/20/10/15/20
            "Open-mind person", //15/25/20/10/15/15
            "Generous person", //10/15/25/15/15/20
            "Flexible person", //15/10/20/25/15/15
            "Heart-kindness person", //10/15/20/15/20/20
        ],
    },
    {
        //9
        question: "Which of the following that you think you have the most understanding in?",
        subtitle: "Most likely the things you used to learn from high school",
        answer: [
            "Global Warming", //10/15/30/10/10/25
            "Profit and loss", //25/15/5/15/15/25
            "Globalization", //15/15/20/15/15/20
            "Free speech", //15/25/20/10/15/15
            "Data gathering", //10/10/10/30/30/10
            "Debating", //15/35/25/5/5/15
        ],
    },
    {
        //10
        question: "Which of the following types of movies would you like to watch the most?",
        subtitle: "",
        answer: [
            "Adventure", //10/15/30/10/10/25
            "Investment", //25/10/10/15/15/25
            "Sci-fi", //10/15/15/25/20/15
            "Historical", //10/15/30/10/10/25
            "Legal drama", //15/40/20/5/5/15
            "Documentary", //20/20/20/10/10/20
        ],
    },
    {
        //11
        question: "Which of the following activities would you like to try in the future?",
        subtitle: "",
        answer: [
            "Making new friends", //25/10/20/10/15/20
            "Helping a community", //15/15/20/10/10/30
            "Investing in Stocks", //25/5/10/20/20/20
            "Joining a debate", //10/35/20/10/10/15
            "Learning about privacy security", //15/15/10/25/20/15
            "Assuring the information", //10/15/15/25/30/5
        ],
    },
    {
        //12
        question: "Which of the following would you like to spend your time on watching?",
        subtitle: "It can be videos from every social media like Youtube, Facebook, Instagram or TikTok",
        answer: [
            "Wildlife documentaries", //10/10/25/10/15/30
            "History documentaries", //10/25/25/10/10/20
            "Traveling videos", //25/10/20/10/10/25
            "News reporting", //10/20/25/15/25/5
            "World Modern trending", //15/10/20/20/15/20
            "Music videos", //25/10/10/15/15/25
        ],
    },
    {
        //13
        question: "Which of the following goodwills would you want to be involved in the most?",
        subtitle: "",
        answer: [
            "Helping people in the rural community", //10/20/20/5/15/30
            "Helping people to be accessible in information", //10/15/20/20/20/15
            "Helping people to have the right", //10/35/20/10/10/15
            "Helping people to decide a better future", //30/10/20/10/10/20
        ],
    },
    {
        //14
        question: "Which of the following subjects are you good at during high school?",
        subtitle: "",
        answer: [
            "Mathematic, Physic, Chemistry", //10/0/0/40/50/0
            "Literature, History, Geograpghy", //15/25/35/0/0/25
            "Science, Biology, Earthology", //5/5/5/25/30/30
            "Social Studies, Art, Ethics", //25/25/25/0/0/25
        ],
    },
    {
        //15
        question: "Which of the following experiences did you have in high school?",
        subtitle: "",
        answer: [
            "Making money", //25/10/15/10/15/25
            "Created somethings out of materials", //15/0/0/35/30/20
            "Getting to know more friends", //30/5/25/5/5/30
            "Going on a trip with friends", //15/15/25/10/10/25
            "Studying, Group Discussing, Tutoring", //25/20/25/5/0/25
            "Some or All of the above", //20/15/15/15/15/20
        ],
    },
];

const point = {

    "1.1": [13, 27, 17, 13, 7, 23],
    "1.2": [23, 27, 13, 7, 13, 7],
    "1.3": [17, 23, 27, 7, 9, 17],
    "1.4": [27, 7, 17, 7, 13, 27],
    "1.5": [16,16,16,16,18,16],
    "1.6": [27, 13, 17, 9, 7, 33],

    "2.1": [17, 27, 27, 3, 7, 17],
    "2.2": [13, 17, 17, 23, 17, 13],
    "2.3": [20, 7, 23, 7, 17, 30],
    "2.4": [23, 23, 23, 13, 15, 23],

    "3.1": [23, 13, 23, 7, 13, 23],
    "3.2": [13, 27, 23, 7, 13, 13],
    "3.3": [23, 13, 13, 13, 17, 17],
    "3.4": [13, 25, 23, 7, 13, 13],
    "3.5": [13, 13, 5, 27, 33, 13],
    "3.6": [23, 33, 10, 13, 23, 12],

    "4.1": [13, 13, 13, 27, 23, 7],
    "4.2": [7, 23, 7, 33, 23, 7],
    "4.3": [23, 13, 17, 17, 13, 23],
    "4.4": [23, 7, 13, 23, 25, 33],
    "4.5": [23, 29, 13, 11, 13, 7],
    "4.6": [17, 23, 13, 23, 13, 13],

    "5.1": [27, 23, 23, 9, 7, 22],
    "5.2": [13, 23, 23, 13, 15, 17],
    "5.3": [13, 13, 13, 17, 23, 13],
    "5.4": [13, 13, 13, 23, 25, 17],
    "5.5": [27, 7, 17, 9, 13, 27],
    "5.6": [7, 17, 7, 27, 17, 13],

    "6.1": [29, 23, 13, 13, 7, 17],
    "6.2": [13, 13, 17, 21, 23, 13],
    "6.3": [23, 7, 7, 23, 21, 17],
    "6.4": [13, 13, 13, 9, 13, 29],
    "6.5": [23, 23, 23, 9, 7, 17],
    "6.6": [15, 17, 13, 15, 23, 12],

    "7.1": [13, 37, 27, 3, 0, 13],
    "7.2": [27, 17, 33, 0, 3, 23],
    "7.3": [13, 3, 7, 37, 27, 7],
    "7.4": [37, 3, 37, 0, 0, 37],
    "7.5": [7, 7, 37, 3, 7, 33],
    "7.6": [12, 32, 23, 9, 7, 17],

    "8.1": [15, 21, 9, 17, 15, 27],
    "8.2": [25, 11, 19, 10, 15, 20],
    "8.3": [20, 20, 17, 10, 15, 15],
    "8.4": [10, 15, 24, 16, 14, 22],
    "8.5": [15, 9, 21, 25, 15, 15],
    "8.6": [13, 15, 17, 15, 20, 20],

    "9.1": [12, 13, 29, 11, 12, 23],
    "9.2": [25, 13, 5, 15, 17, 22],
    "9.3": [16, 14, 22, 13, 17, 18],
    "9.4": [15, 35, 25, 0, 0, 18],
    "9.5": [12, 8, 11, 29, 32, 8],
    "9.6": [16, 34, 24, 5, 3, 19],

    "10.1": [20, 13, 33, 5, 9, 20],
    "10.2": [27, 7, 12, 13, 17, 23],
    "10.3": [12, 13, 17, 27, 19, 16],
    "10.4": [10, 14, 31, 10, 12, 23],
    "10.5": [16, 39, 19, 6, 4, 17],
    "10.6": [20, 21, 19, 8, 10, 22],

    "11.1": [25, 10, 20, 10, 15, 20],
    "11.2": [25, 15, 20, 13, 9, 30],
    "11.3": [30, 5, 10, 17, 13, 15],
    "11.4": [10, 35, 20, 13, 17, 15],
    "11.5": [10, 25, 10, 25, 20, 15],
    "11.6": [10, 15, 15, 25, 30, 5],

    "12.1": [11, 11, 23, 11, 14, 29],
    "12.2": [10, 26, 24, 13, 9, 22],
    "12.3": [25, 9, 22, 8, 11, 30],
    "12.4": [13, 18, 26, 14, 26, 4],
    "12.5": [15, 11, 19, 19, 16, 19],
    "12.6": [26, 11, 8, 11, 19, 26],

    "13.1": [20, 19, 21, 4, 11, 25],
    "13.2": [11, 14, 21, 19, 21, 15],
    "13.3": [11, 34, 21, 9, 11, 14],
    "13.4": [31, 9, 21, 9, 8, 22],

    "14.1": [25, 0, 0, 39, 50, 0],
    "14.2": [15, 26, 34, 0, 2, 23],
    "14.3": [3, 6, 5, 26, 29, 30],
    "14.4": [20, 35, 25, 0, 5, 15],

    "15.1": [26, 14, 10, 9, 16, 24],
    "15.2": [16, 0, 0, 36, 29, 19],
    "15.3": [31, 4, 26, 4, 6, 29],
    "15.4": [16, 14, 24, 9, 11, 24],
    "15.5": [24, 21, 25, 5, 0, 30],
    "15.6": [21, 14, 15, 16, 14, 20],
}



//variable section
let currentQuiz = 0;
const qNum = document.getElementById("qNum");
const questionEl = document.getElementById('question');
const subEl = document.getElementById('subtitle');
const submitBtn = document.getElementById('submit');
const sub = document.querySelector('#submit').classList;

const answerContentFade = () => document.querySelector("#answerContent").classList.toggle("fadeUp");
const answerHide = () => document.querySelector("#answerContent").classList.add("opacityZero");
const nextButtonShow = () => document.querySelector("#next").classList.toggle("fadeIn");
const showQuestionBg = () => document.querySelector("#querry #bg").classList.toggle("textFadeIn");
const mainPageOnOff = () => document.querySelector("#centered").classList.toggle("fadeOut");
const questionHeader = document.querySelector("#querry").classList;
const loadingPage = document.querySelector("#load").classList;


//function section
const fadeQuestion = () => {
    sub.remove('changeColor');
    answerContentFade();
};

function loadQuiz() {
    var node = document.getElementById("answerGroup"); node.querySelectorAll('*').forEach(n => n.remove());

    const currentQuizData = quizData[currentQuiz];

    questionNum = currentQuiz + 1;
    totalQuestion = quizData.length;
    qNum.innerHTML = "Question " + questionNum + " /" + totalQuestion;
    questionEl.innerText = currentQuizData.question
    subEl.innerText = currentQuizData.subtitle;
    let answerOption = currentQuizData.answer;

    for (var i = 0; i < answerOption.length; i++) {
        let input = document.createElement("input");
        let label = document.createElement("label");

        input.type = "radio";
        input.name = "answer";
        input.id = `${currentQuiz + 1}.${i + 1}`;
        input.className = "answer";

        label.htmlFor = `${currentQuiz + 1}.${i + 1}`;
        label.innerText = answerOption[i];
        label.style = answerOption.length == 4 ? "flex: 2 0 30%" : "";
        document.querySelector("#answerGroup").append(input, label);
    }


    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach(
        anw => anw.addEventListener('click', enableBTN)
    );
}

function enableBTN() {
    const answerEls = document.querySelectorAll('.answer');
    getSelected(answerEls);
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            sub.add('changeColor');
        }
    })


}

function getSelected(answerEls) {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    })

    return answer;
}

var answeredArr = [];

function nextQuestion() {
    const answerEls = document.querySelectorAll('.answer');
    const answer = getSelected(answerEls);
    answeredArr[Math.floor(answer) - 1] = answer;
    if (answer) {

        currentQuiz++;
        fadeQuestion();

        if (currentQuiz < quizData.length) {
            setTimeout(function () {
                loadQuiz();
                fadeQuestion();
            }, 1000);
        } else {
            let point = caculatePoint(answeredArr);

            let label_text = `<div id="labelText" style="text-align: center"> Based on your personality, <br> WIM thinks your most suitable major is:`;

            let majorNo = point.indexOf(Math.max(...point));
            let major;

            switch (majorNo) {
                case 0:
                    major = 'BUS';
                    break;
                case 1:
                    major = 'Law';
                    break;
                case 2:
                    major = 'GLA';
                    break;
                case 3:
                    major = 'ITM';
                    break;
                case 4:
                    major = 'ICT';
                    break;
                case 5:
                    major = 'THM';
                    break;
            }

            answerHide();

            nextButtonShow();

            setTimeout(function () {
                showQuestionBg();
                questionHeader.add("fadeO");
            }, 800);

            setTimeout(function () {
                loadingPage.toggle("showLoad");
                questionHeader.add("fadeWH");
                document.getElementById("centered").classList.toggle('hide');
            }, 1500);

            setTimeout(function () {
                showMajor(major, label_text);
            }, 5700);

            setTimeout(function () {
                loadingPage.toggle("showLoad");
            }, 7000);
        }
    }
}



function caculatePoint(answered) {
    var gradeArr = [];
    var pointArr = [];
    answered.forEach(item => {
        gradeArr[answered.indexOf(item)] = point[item];
    });


    for (let i = 0; i < 6; i++) {
        let score = 0;
        for (let j = 0; j < gradeArr.length; j++) {
            score += gradeArr[j][i];
        }
        pointArr.push(score);
    }

    return pointArr;
}





function questionPage() {
    document.querySelector("#findMajor").addEventListener("click", function () {

        mainPageOnOff();
        questionHeader.toggle("fadeIn");


        setTimeout(function () {
            showQuestionBg();
        }, 1000);

        setTimeout(function () {
            answerContentFade();
            nextButtonShow();
        }, 1700);
    })
}



//initialize section
questionPage();
loadQuiz();
submitBtn.addEventListener('click', nextQuestion);





/////////////////////// start of major Page Section //////////////////////////////////
const majorData = {
    'ITM': {
        majorName: "Information Technology Management",
        majorAbv: "ITM",
        majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
        careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
        careerList: [
            "Business, Management and Systems Analyst",
            "IT and project management",
            "IT director",
            "Information Management Specialist",
            "Database or Web Administrator",
            "Network Administrator",
            "Software or Computer Applications specialist",
            "IT Security Officer",
            "Data Scientist",
            "More...",
        ],
        courseList: [
            "Analytic Geometry and Calculus",
            "Maths for Computing",
            "Survey of Computer Science",
            "Computer Science",
            "Foundations of Computing",
            "Data Structures",
            "Assembly Language ",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Introduction to Web Development ",
            "Front-end Web Development",
            "Database Design and Programming",
            "Java Programming I",
        ],
    },

    'BUS': {
        majorName: "Business",
        majorAbv: "Business",
        majorInfo: "The Business program prepares graduates for success in the world of business, whether in Cambodia, Southeast Asia, or beyond.  Business education and the successful pursuit of a business career requires graduates to understand basic economic concepts and mathematical relationships, while at the same time being analytical and able to communicate ideas effectively through written and verbal communications. Students enrolled in Business develop core competencies in each of the functional areas of business marketing, finance, accounting and management in order to understand the interrelationships among these functional areas and how these relationships can impact the operation and value of an organization.",
        careerInfo: "The job opportunities with a degree in business are open-ended. A typical graduate will find abroad spectrum of career opportunities in the public (governmental) or private sector; working for large or small firms; local, national, or multi-national organizations; entrepreneurial ventures; family businesses, or large publicly held enterprises. Regardless of the sector of the economy, business skills are necessary and opportunities for business graduates abound. Job titles vary greatly. Further, over time, career opportunities shift as new technologies are developed and new markets created. typical graduate today is likely to pursue any number of different opportunities over the course of a career. Here is a list of related careers:",
        careerList: [
            "Sales Manager",
            "Business Consultant",
            "Financial Analyst",
            "Market Research Analyst",
            "Human Resources (HR) Specialist",
            "Loan Officer",
            "Meeting, Convention and Event Planner",
            "Industrial Production Manager",
            "Management Analyst",
            "More...",
        ],
        courseList: [
            "Financial Accounting",
            "Managerial Accounting",
            "Information Management Systems",
            "Information Management Systems (Lab)",
            "Business Communication",
            "Legal Environment for Business",
            "Business Ethics and Social Responsibility",        
            "Introduction to Finance",
            "Principles of Management",
            "Operations Management",
            "Practical Entrepreneur",
            "Project Management",
            "Introduction to Human Resource Management",
            "Strategic Management",
            "Principles of Marketing",

        ],
    },

    'Law': {
        majorName: "Law",
        majorAbv: "Law",
        majorInfo: "Law is a demanding career in which the ability to analyze information and provide solutions to clients is critical to success. The Law Program designed to help students develop legal analysis, critical thinking, and problem-solving skills that will equip them for careers not only in the legal profession, but also in business, government, and other professions. Law Program is grounded in ethics and provides a wide range of courses in the areas of substantive law such as business law, contracts, criminal law, intellectual property,  international law, etc. In addition, many law courses help students develop important skills in legal analysis, research, writing, and negotiation. Courses focus on Cambodian law, United States law, Comparative law, and International law. Law majors also have the opportunity to practice skills that they have learned in internships with law firms, government ministries, and other organizations.",
        careerInfo: "Law program prepares graduates for success in careers in law firms, legal departments of businesses, non-profit organizations, international organizations, and government. Law graduates are employed by law firms in Cambodia and the United States as well as with the Cambodian government (e.g., in the Ministry of Justice, Ministry of Posts and Telecommunications, and the Council of Ministers). In addition, some graduates have become entrepreneurs, starting and managing various businesses. In addition, graduates are well prepared for pursuing graduate degrees such as Masters of Law (LLM) and Juris Doctorate (J.D.) degrees. Here is a list of related careers:",
        careerList: [
            "Paralegal",
            "Law enforcement officer",
            "Mediator",
            "Political affairs officer",
            "Policy analyst",
            "Legislative assistant",
            "Immigration lawyer",
            "Probation officer",
            "Legal Consultant",
            "Contract Attorney",
            "More...",
        ],
        courseList: [
            "English for Legal Purposes",
            "Cambodian Civil Code I",
            "Legal Ethics",
            "Cambodian Criminal Law and Procedure",
            "Labor Law",
            "Southeast Asian Law and Legal Systems",
            "Cambodian Civil Code II",
            "International (Private and Public) Law",
            "Intellectual Property",
            "Procedure",
            "American Common Law I",
            "American Common Law II",
            "American Public Law System",
            "Legal Analysis, Research and Writing",
            "Business Organizations",
            "International Human Rights Law",
            "International Commercial Transactions",
            "International Trade Law and Policy",
            "Environmental Law and Policy",
        ],
    },

    'GLA': {
        majorName: "Global Affairs",
        majorAbv: "GLobal Affairs",
        majorInfo: "Global Affairs prepare students for global leadership and service and to train the next generation of policy leaders to tackle the complex issues of a globalized world. It is intended for individuals who want to be policymakers at the national, regional, and local government agencies, international organizations, non-governmental organizations and multinational corporations. The Global Affairs program provides students an understanding of current challenges in Southeast Asian and around the world. The program fosters critical thinking by using problem-centered teaching to create evidence-based solutions. The program provides an opportunity to study crucial contemporary issues–conflict among and within nations, democratization, economic and political globalization, regional conflicts and the emerging importance of non-state actors; as well as analysis and design of foreign and domestic policies in development and security matters.",
        careerInfo: "The Global Affairs Program offers a solid foundation for entering the work force or for graduate studies. The program prepares students for career opportunities with organizations, consulting firms or government agencies dealing with foreign affairs, international security, and the international economy. The program also provides preparation for graduate study in specialized fields such as public policy, security or international relations. Here is a list of related careers:",
        careerList: [
            "Economic analyst",
            "Interpreter",
            "Political consultant",
            "Intelligence specialist",
            "International benefits analyst",
            "Language specialist",
            "Public relations specialist",
            "International marketing specialist",
            "International logistics manager",
            "More...",
        ],
        courseList: [
            "Research Method and Design",
            "Introduction to Comparative Politics",
            "Principles of Sustainable Development",
            "Comparative Political Theory",
            "Globalization",
            "Peace and Conflict Studies",
            "Diplomacy and Foreign Policy",
            "Diplomacy and Foreign Policy",
            "Capstone Course",
            "International (Private and Public) Law",
            "International Law",
            "Genocide",
        ],
    },

    'ICT': {
        majorName: "Information Communications and Technology",
        majorAbv: "ICT",
        majorInfo: "The Information and Communications Technology (ICT) program is designed to develop graduates with the ability to manage and lead the computer-based information systems. The program aligns the capabilities of information technology to business analysis and communications. Students are encouraged to sharpen their skills in Network Infrastructure and Security, Telecom, Data Science, Software Engineering, and Management Information System. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications, and the liberal arts.",
        careerInfo: "Students will be equipped with the necessary knowledge, real-life experience, and skills to be entrepreneurs in today’s influential industries including Telecommunications, Network, and IT. Graduates are well-prepared to enter technology related careers, such as, :",
        careerList: [
            "Network designer and administrator", 
            "Core network engineer", 
            "Radio engineer",
            "System administrator", 
            "Cyber security engineer/administrator",
            "Software developer", 
            "Database administrator",
            "Web designer/developer", 
            "Mobile develop",
            "IT project manager",
            "Data scientist",
            "More...",
        ],
        courseList: [
            "Computer Science Survey",
            "Computer Science A",
            "Computer Science B",
            "Computing Science Fundamentals",
            "Data Structure",
            "Systems Architecture",
            "Operating Systems",
            "Programming Languages",
            "Computer Graphics",
            "Software Engineering",
            "Final Year Project - I",
            "Final Year Project - II",
            "Programming and Database Design",
            "Web Development I",
            "Web Development II",
            "Web Development III",
            "Java Programming I",
            "Math for Computing",
            "Analytic Geometry and Calculus I",
        ],
    },

    'THM': {
        majorName: "Tourism and Hospitality Management",
        majorAbv: "THM",
        majorInfo: "This program is focused on preparing students to work in an economic sector of vital importance to Cambodia and of growing importance in Southeast Asia and the rest of the world, too. Graduates will be well-positioned to take managerial roles in the hotel and tourism industries either in the government or private sector and to start their own businesses. The program will prepare students with general business knowledge and skills and, in addition, the specific skills and knowledge that are essential to managers in most sectors of the modern tourism and hospitality industry. Business education for any economic sector and the successful pursuit of a business career requires graduates to understand basic economic concepts and mathematical relationships, while at the same time being analytical and able to communicate ideas effectively through written and verbal communications. Students in the THM program will take both generic Business courses and General Education courses which will equip them with these skills.",
        careerInfo: "Tourism and Hospitality Managers are responsible for ensuring the smooth operations of the travel, hotel, tourist and other hospitality business operations to the satisfaction of their customers whilst complying with health, safety, environmental and other regulations and meeting high ethical standards and ensuring good returns on investment for the business owners. Graduates find work in government, large scale companies such as hotel chains, and smaller business operations. They may well start their own business within the tourism and hospitality sector for which opportunities abound in Cambodia. Here is a list of related careers: ",
        careerList: [
            "Sales and marketing manager",
            "Hotel receptionist",
            "Cruise ship entertainer",
            "Resort manager",
            "Restaurant Manager",
            "Spa and Wellness Manager",
            "Hotel Assistant General Manager",
            "Catering Manager",
            "Tour Manager",
            "More...",
        ],
        courseList: [
            "Principles & Practices of Tourism & Hospitality Management",
            "Tourism and Hospitality Marketing",
            "Service and Operations Management",
            "Meetings, Conventions & Events Management",
            "Hotel & Resort Management",
            "International Hospitality: Problems & Planning",
            "Food and Beverage Management",
            "Health and Wellness Tourism",
            "Spa Facility & Destination Management",
            "Sustainable Tourism and Events",
            "Financial Accounting",
            "Managerial Accounting",
            "Business Communication",
            "Legal Environment for Business",
            "Introduction to Finance",
            "Principles of Management",
            "Principles of Marketing",
        ],
    },
}

var choosenMajor = 'hi';
let labelText = document.getElementById('labelText');
let notes = "<div id=\"noteText\"> Note: The result is NOT 100% accurate, we analyzed your input based upon the research on major and personality, students' learning experiences, and the survey. We are hoping that WIM can ease your difficulty in finding your college major. Please seek guidance from your family, friends, and especially yourselves. Your Major, Your Choice, Your Future! </div>"

let texting = "<div id=\"labelText\" style=\"text-align: center\"> </div>"

let majorIcon = document.getElementsByClassName('tooltip');

for (key of document.getElementsByClassName('BUS')) {
    key.addEventListener('click', () => {
        console.log("clicked BUS");
        hideHomepage();
        showMajor("BUS", "");
    });
}

for (key of document.getElementsByClassName('LAW')) {
    key.addEventListener('click', () => {
        console.log("clicked LAW");
        hideHomepage();
        showMajor("Law", "");
    });
}

for (key of document.getElementsByClassName('GLA')) {
    key.addEventListener('click', () => {
        console.log("clicked GLA");
        hideHomepage();
        showMajor("GLA", "");
    });
}

for (key of document.getElementsByClassName('IT')) {
    key.addEventListener('click', () => {
        console.log("clicked IT");
        hideHomepage();
        showMajor("ITM", "");
    });
}

for (key of document.getElementsByClassName('THM')) {
    key.addEventListener('click', () => {
        console.log("clicked THM");
        hideHomepage();
        showMajor("THM", "");
    });
}

for (key of document.getElementsByClassName('ICT')) {
    key.addEventListener('click', () => {
        console.log("clicked ICT");
        hideHomepage();
        showMajor("ICT", "");
    });
}

function hideHomepage() {
    document.getElementById('centered').classList.toggle('fadeOut');

    setTimeout(() => {
        document.getElementById('centered').style.display = 'none';
    }, 500);
}

function showMajor(choosen_major, label) {

    choosenMajor = majorData[choosen_major];

    document.getElementById('padding').classList.toggle('fadePad');

    setTimeout(() => {
        document.getElementById('majorBg').classList.toggle('slideIn');
        document.getElementById('majorName').classList.toggle('slide');
    }, 1000);




    let major = document.getElementById('major');
    let majorTitle = document.getElementById('majorTitle');
    let majorInfo = document.getElementById('majorInfo');
    let careerInfo = document.getElementById('careerInfo');
    let labelText = document.getElementById('texting');
    let note = document.getElementById('noted');



    major.innerHTML = choosenMajor.majorName;
    labelText.innerHTML = label;
    majorTitle.innerHTML = `What is ${choosenMajor.majorAbv}?`;
    majorInfo.innerHTML = choosenMajor.majorInfo;
    careerInfo.innerHTML = choosenMajor.careerInfo;
    note.innerHTML = label == "" ? "" : notes;

    choosenMajor.careerList.forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#careerList").append(list);
        }
    );

    choosenMajor.courseList.forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#courseList").append(list);
        }
    );
}



document.getElementById('findAgain').addEventListener('click', () => {
    window.location.reload();
});

document.getElementById('home').addEventListener('click', () => {
    window.location.reload();
});

/////////////////////// end of major Page Section //////////////////////////////////

function showResult(){
    let answer = document.getElementById('arr').value;
    let latest = answer.replace(/\[|\]/g,'').split(',').map(i=>Number(i));
    console.log(latest);
    let result = caculatePoint(latest);
    document.getElementById('answerResult').innerHTML = `[BU,Law,GA,ITM,IT,TM] <br> [${result}]`;
}