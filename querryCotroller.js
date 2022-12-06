

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

var totalQuestion;

function loadQuiz() {
    var node = document.getElementById("answerGroup"); node.querySelectorAll('*').forEach(n => n.remove());


    const currentQuizData = quizData[currentQuiz];

    totalQuestion = quizData.length - 14;

    questionNum = currentQuiz + 1;
    qNum.innerHTML = "Question " + questionNum + " /" + totalQuestion;
    questionEl.innerText = currentQuizData[0]
    subEl.innerText = currentQuizData[1]
    let answerOption = currentQuizData[2].split('/');

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

        if (currentQuiz < totalQuestion) {
            setTimeout(function () {
                loadQuiz();
                fadeQuestion();
            }, 1000);
        } else {
            let point = caculatePoint(answeredArr);
            console.log(point);

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
                // loadingPage.toggle("showLoad");
                questionHeader.add("fadeWH");
                document.getElementById("centered").classList.toggle('hide');
            }, 1500);

            // setTimeout(function () {
            //     showMajor(major, label_text);
            // }, 5700);

            setTimeout(function () {
                showForm(major, labelText);
            }, 2000);

            // setTimeout(function () {
            //     
            // }, 7000);
        }
    }
}

function caculatePoint(answered) {
    var gradeArr = [];
    var pointArr = [];
    answered.forEach(item => {
        gradeArr[answered.indexOf(item)] = point[item].split("/");
    });


    for (let i = 0; i < 6; i++) {
        let score = 0;
        for (let j = 0; j < gradeArr.length; j++) {
            score += parseInt(gradeArr[j][i]);
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



// //initialize section
// questionPage();
// loadQuiz();
submitBtn.addEventListener('click', nextQuestion);





/////////////////////// start of major Page Section //////////////////////////////////
// const majorData = {
//     'ITM': {
//         majorName: "Information Technology Management",
//         majorAbv: "ITM",
//         majorInfo: "The Information Technology Management (ITM) program is designed to develop professionals in emerging and converging information and communication technologies. A degree in ITM produces graduates who can organize business processes to support the strategic corporate needs, demands and goals at the management level. The program is designed to bridge the gap between problems of business and the capabilities of information technology, while aligning the technology with business strategies. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications and the liberal arts.",
//         careerInfo: "Students are prepared for positions in technology and management fields, such as, for example, local and national government, telecommunications, financial institutions, corporate or educational IT units, private business and NGO’s. Graduates will have the necessary knowledge, experience and skills to enter technology related careers in business and management. Job opportunities include, but are not limited to:",
//         careerList: [
//             "Business, Management and Systems Analyst",
//             "IT and project management",
//             "IT director",
//             "Information Management Specialist",
//             "Database or Web Administrator",
//             "Network Administrator",
//             "Software or Computer Applications specialist",
//             "IT Security Officer",
//             "Data Scientist",
//             "More...",
//         ],
//         courseList: [
//             "Analytic Geometry and Calculus",
//             "Maths for Computing",
//             "Survey of Computer Science",
//             "Computer Science",
//             "Foundations of Computing",
//             "Data Structures",
//             "Assembly Language ",
//             "Operating Systems",
//             "Programming Languages",
//             "Computer Graphics",
//             "Software Engineering",
//             "Introduction to Web Development ",
//             "Front-end Web Development",
//             "Database Design and Programming",
//             "Java Programming I",
//         ],
//     },

//     'BUS': {
//         majorName: "Business",
//         majorAbv: "Business",
//         majorInfo: "The Business program prepares graduates for success in the world of business, whether in Cambodia, Southeast Asia, or beyond.  Business education and the successful pursuit of a business career requires graduates to understand basic economic concepts and mathematical relationships, while at the same time being analytical and able to communicate ideas effectively through written and verbal communications. Students enrolled in Business develop core competencies in each of the functional areas of business marketing, finance, accounting and management in order to understand the interrelationships among these functional areas and how these relationships can impact the operation and value of an organization.",
//         careerInfo: "The job opportunities with a degree in business are open-ended. A typical graduate will find abroad spectrum of career opportunities in the public (governmental) or private sector; working for large or small firms; local, national, or multi-national organizations; entrepreneurial ventures; family businesses, or large publicly held enterprises. Regardless of the sector of the economy, business skills are necessary and opportunities for business graduates abound. Job titles vary greatly. Further, over time, career opportunities shift as new technologies are developed and new markets created. typical graduate today is likely to pursue any number of different opportunities over the course of a career. Here is a list of related careers:",
//         careerList: [
//             "Sales Manager",
//             "Business Consultant",
//             "Financial Analyst",
//             "Market Research Analyst",
//             "Human Resources (HR) Specialist",
//             "Loan Officer",
//             "Meeting, Convention and Event Planner",
//             "Industrial Production Manager",
//             "Management Analyst",
//             "More...",
//         ],
//         courseList: [
//             "Financial Accounting",
//             "Managerial Accounting",
//             "Information Management Systems",
//             "Information Management Systems (Lab)",
//             "Business Communication",
//             "Legal Environment for Business",
//             "Business Ethics and Social Responsibility",        
//             "Introduction to Finance",
//             "Principles of Management",
//             "Operations Management",
//             "Practical Entrepreneur",
//             "Project Management",
//             "Introduction to Human Resource Management",
//             "Strategic Management",
//             "Principles of Marketing",

//         ],
//     },

//     'Law': {
//         majorName: "Law",
//         majorAbv: "Law",
//         majorInfo: "Law is a demanding career in which the ability to analyze information and provide solutions to clients is critical to success. The Law Program designed to help students develop legal analysis, critical thinking, and problem-solving skills that will equip them for careers not only in the legal profession, but also in business, government, and other professions. Law Program is grounded in ethics and provides a wide range of courses in the areas of substantive law such as business law, contracts, criminal law, intellectual property,  international law, etc. In addition, many law courses help students develop important skills in legal analysis, research, writing, and negotiation. Courses focus on Cambodian law, United States law, Comparative law, and International law. Law majors also have the opportunity to practice skills that they have learned in internships with law firms, government ministries, and other organizations.",
//         careerInfo: "Law program prepares graduates for success in careers in law firms, legal departments of businesses, non-profit organizations, international organizations, and government. Law graduates are employed by law firms in Cambodia and the United States as well as with the Cambodian government (e.g., in the Ministry of Justice, Ministry of Posts and Telecommunications, and the Council of Ministers). In addition, some graduates have become entrepreneurs, starting and managing various businesses. In addition, graduates are well prepared for pursuing graduate degrees such as Masters of Law (LLM) and Juris Doctorate (J.D.) degrees. Here is a list of related careers:",
//         careerList: [
//             "Paralegal",
//             "Law enforcement officer",
//             "Mediator",
//             "Political affairs officer",
//             "Policy analyst",
//             "Legislative assistant",
//             "Immigration lawyer",
//             "Probation officer",
//             "Legal Consultant",
//             "Contract Attorney",
//             "More...",
//         ],
//         courseList: [
//             "English for Legal Purposes",
//             "Cambodian Civil Code I",
//             "Legal Ethics",
//             "Cambodian Criminal Law and Procedure",
//             "Labor Law",
//             "Southeast Asian Law and Legal Systems",
//             "Cambodian Civil Code II",
//             "International (Private and Public) Law",
//             "Intellectual Property",
//             "Procedure",
//             "American Common Law I",
//             "American Common Law II",
//             "American Public Law System",
//             "Legal Analysis, Research and Writing",
//             "Business Organizations",
//             "International Human Rights Law",
//             "International Commercial Transactions",
//             "International Trade Law and Policy",
//             "Environmental Law and Policy",
//         ],
//     },

//     'GLA': {
//         majorName: "Global Affairs",
//         majorAbv: "GLobal Affairs",
//         majorInfo: "Global Affairs prepare students for global leadership and service and to train the next generation of policy leaders to tackle the complex issues of a globalized world. It is intended for individuals who want to be policymakers at the national, regional, and local government agencies, international organizations, non-governmental organizations and multinational corporations. The Global Affairs program provides students an understanding of current challenges in Southeast Asian and around the world. The program fosters critical thinking by using problem-centered teaching to create evidence-based solutions. The program provides an opportunity to study crucial contemporary issues–conflict among and within nations, democratization, economic and political globalization, regional conflicts and the emerging importance of non-state actors; as well as analysis and design of foreign and domestic policies in development and security matters.",
//         careerInfo: "The Global Affairs Program offers a solid foundation for entering the work force or for graduate studies. The program prepares students for career opportunities with organizations, consulting firms or government agencies dealing with foreign affairs, international security, and the international economy. The program also provides preparation for graduate study in specialized fields such as public policy, security or international relations. Here is a list of related careers:",
//         careerList: [
//             "Economic analyst",
//             "Interpreter",
//             "Political consultant",
//             "Intelligence specialist",
//             "International benefits analyst",
//             "Language specialist",
//             "Public relations specialist",
//             "International marketing specialist",
//             "International logistics manager",
//             "More...",
//         ],
//         courseList: [
//             "Research Method and Design",
//             "Introduction to Comparative Politics",
//             "Principles of Sustainable Development",
//             "Comparative Political Theory",
//             "Globalization",
//             "Peace and Conflict Studies",
//             "Diplomacy and Foreign Policy",
//             "Diplomacy and Foreign Policy",
//             "Capstone Course",
//             "International (Private and Public) Law",
//             "International Law",
//             "Genocide",
//         ],
//     },

//     'ICT': {
//         majorName: "Information Communications and Technology",
//         majorAbv: "ICT",
//         majorInfo: "The Information and Communications Technology (ICT) program is designed to develop graduates with the ability to manage and lead the computer-based information systems. The program aligns the capabilities of information technology to business analysis and communications. Students are encouraged to sharpen their skills in Network Infrastructure and Security, Telecom, Data Science, Software Engineering, and Management Information System. Students enhance their critical thinking, problem solving, and analytical skills with knowledge of management principles. The program is a balance of technology, management, communications, and the liberal arts.",
//         careerInfo: "Students will be equipped with the necessary knowledge, real-life experience, and skills to be entrepreneurs in today’s influential industries including Telecommunications, Network, and IT. Graduates are well-prepared to enter technology related careers, such as, :",
//         careerList: [
//             "Network designer and administrator", 
//             "Core network engineer", 
//             "Radio engineer",
//             "System administrator", 
//             "Cyber security engineer/administrator",
//             "Software developer", 
//             "Database administrator",
//             "Web designer/developer", 
//             "Mobile develop",
//             "IT project manager",
//             "Data scientist",
//             "More...",
//         ],
//         courseList: [
//             "Computer Science Survey",
//             "Computer Science A",
//             "Computer Science B",
//             "Computing Science Fundamentals",
//             "Data Structure",
//             "Systems Architecture",
//             "Operating Systems",
//             "Programming Languages",
//             "Computer Graphics",
//             "Software Engineering",
//             "Final Year Project - I",
//             "Final Year Project - II",
//             "Programming and Database Design",
//             "Web Development I",
//             "Web Development II",
//             "Web Development III",
//             "Java Programming I",
//             "Math for Computing",
//             "Analytic Geometry and Calculus I",
//         ],
//     },

//     'THM': {
//         majorName: "Tourism and Hospitality Management",
//         majorAbv: "THM",
//         majorInfo: "This program is focused on preparing students to work in an economic sector of vital importance to Cambodia and of growing importance in Southeast Asia and the rest of the world, too. Graduates will be well-positioned to take managerial roles in the hotel and tourism industries either in the government or private sector and to start their own businesses. The program will prepare students with general business knowledge and skills and, in addition, the specific skills and knowledge that are essential to managers in most sectors of the modern tourism and hospitality industry. Business education for any economic sector and the successful pursuit of a business career requires graduates to understand basic economic concepts and mathematical relationships, while at the same time being analytical and able to communicate ideas effectively through written and verbal communications. Students in the THM program will take both generic Business courses and General Education courses which will equip them with these skills.",
//         careerInfo: "Tourism and Hospitality Managers are responsible for ensuring the smooth operations of the travel, hotel, tourist and other hospitality business operations to the satisfaction of their customers whilst complying with health, safety, environmental and other regulations and meeting high ethical standards and ensuring good returns on investment for the business owners. Graduates find work in government, large scale companies such as hotel chains, and smaller business operations. They may well start their own business within the tourism and hospitality sector for which opportunities abound in Cambodia. Here is a list of related careers: ",
//         careerList: [
//             "Sales and marketing manager",
//             "Hotel receptionist",
//             "Cruise ship entertainer",
//             "Resort manager",
//             "Restaurant Manager",
//             "Spa and Wellness Manager",
//             "Hotel Assistant General Manager",
//             "Catering Manager",
//             "Tour Manager",
//             "More...",
//         ],
//         courseList: [
//             "Principles & Practices of Tourism & Hospitality Management",
//             "Tourism and Hospitality Marketing",
//             "Service and Operations Management",
//             "Meetings, Conventions & Events Management",
//             "Hotel & Resort Management",
//             "International Hospitality: Problems & Planning",
//             "Food and Beverage Management",
//             "Health and Wellness Tourism",
//             "Spa Facility & Destination Management",
//             "Sustainable Tourism and Events",
//             "Financial Accounting",
//             "Managerial Accounting",
//             "Business Communication",
//             "Legal Environment for Business",
//             "Introduction to Finance",
//             "Principles of Management",
//             "Principles of Marketing",
//         ],
//     },
// }

var choosenMajor = 'hi';
let labelText = document.getElementById('labelText');
let notes = "<div id=\"noteText\"> Note: The result is NOT 100% accurate, we analyzed your input based upon the research on major and personality, students' learning experiences, and the survey. We are hoping that WIM can ease your difficulty in finding your college major. Please seek guidance from your family, friends, and especially yourselves. Your Major, Your Choice, Your Future! </div>"

let texting = "<div id=\"labelText\" style=\"text-align: center\"> </div>"

let majorIcon = document.getElementsByClassName('tooltip');

for (key of document.getElementsByClassName('BUS')) {
    key.addEventListener('click', () => {
        console.log("clicked BUS");
        hideHomepage();
        showMajor("Business", "");
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
        showMajor("Global Affairs", "");
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



    major.innerHTML = choosenMajor[0];
    labelText.innerHTML = label;
    majorTitle.innerHTML = `What is ${choosenMajor[1]}?`;
    majorInfo.innerHTML = choosenMajor[2];
    careerInfo.innerHTML = choosenMajor[3];
    note.innerHTML = label == "" ? "" : notes;

    choosenMajor[4].split('/').forEach(
        item => {
            let list = document.createElement("li");
            list.innerHTML = item;

            document.querySelector("#careerList").append(list);
        }
    );

    choosenMajor[5].split('/').forEach(
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

function showResult() {
    let answer = document.getElementById('arr').value;
    let latest = answer.replace(/\[|\]/g, '').split(',').map(i => Number(i));
    console.log(latest);
    let result = caculatePoint(latest);
    document.getElementById('answerResult').innerHTML = `[BU,Law,GA,ITM,IT,TM] <br> [${result}]`;
}