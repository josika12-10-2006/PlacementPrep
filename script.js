/* ===========================================================
   PlacementPrep — app logic
   =========================================================== */

const ROOMS = [
  {
    id: "quant",
    number: "Room 01",
    name: "Quantitative Aptitude",
    meta: "15 questions · 20s each",
    questions: [
      { q: "A train 150m long crosses a pole in 15 seconds. What is its speed?", options: ["36 km/h", "10 km/h", "45 km/h", "18 km/h"], answer: 0 },
      { q: "If the ratio of two numbers is 3:5 and their sum is 96, what is the smaller number?", options: ["30", "36", "40", "45"], answer: 1 },
      { q: "What is the compound interest on ₹8,000 at 10% per annum for 2 years?", options: ["₹1,600", "₹1,680", "₹1,760", "₹1,800"], answer: 1 },
      { q: "A shopkeeper marks an item 40% above cost price and gives a 10% discount. What is his profit percent?", options: ["24%", "26%", "30%", "36%"], answer: 1 },
      { q: "Find the average of the first 20 natural numbers.", options: ["10", "10.5", "11", "20"], answer: 1 },
      { q: "A can complete a job in 12 days, B in 15 days. Working together, how many days will it take?", options: ["6.67 days", "7.5 days", "8 days", "9 days"], answer: 0 },
      { q: "What is 15% of 320?", options: ["46", "48", "50", "52"], answer: 1 },
      { q: "Two pipes fill a tank in 20 and 30 minutes respectively. Together, how long to fill it?", options: ["10 min", "12 min", "15 min", "18 min"], answer: 1 },
      { q: "A sum doubles itself in 8 years at simple interest. What is the rate of interest?", options: ["10%", "12%", "12.5%", "15%"], answer: 2 },
      { q: "If x + y = 10 and xy = 21, what is x² + y²?", options: ["52", "58", "60", "64"], answer: 1 },
      { q: "A boat travels 30 km downstream in 2 hours and returns upstream in 3 hours. What is the speed of the boat in still water?", options: ["10 km/h", "12.5 km/h", "15 km/h", "17.5 km/h"], answer: 1 },
      { q: "The LCM of two numbers is 240 and their HCF is 8. If one number is 48, what is the other?", options: ["36", "40", "44", "48"], answer: 1 },
      { q: "A man's salary is increased by 20% and then decreased by 20%. What is the net change?", options: ["No change", "4% decrease", "4% increase", "2% decrease"], answer: 1 },
      { q: "How many ways can the letters of the word 'LEADER' be arranged?", options: ["360", "720", "120", "180"], answer: 0 },
      { q: "A dice is rolled once. What is the probability of getting a number greater than 4?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 1 }
    ]
  },
  {
    id: "logic",
    number: "Room 02",
    name: "Logical Reasoning",
    meta: "15 questions · 20s each",
    questions: [
      { q: "Find the odd one out: Apple, Mango, Potato, Banana", options: ["Apple", "Mango", "Potato", "Banana"], answer: 2 },
      { q: "If FRIEND is coded as HUMJTK, how is CANDLE coded?", options: ["EDRIRL", "DCPFNG", "EDRIRK", "DCQGOH"], answer: 0 },
      { q: "Complete the series: 2, 6, 12, 20, 30, ?", options: ["36", "40", "42", "44"], answer: 2 },
      { q: "Pointing to a photo, Raj said, 'She is the daughter of my grandfather's only son.' Who is she to Raj?", options: ["Sister", "Cousin", "Aunt", "Mother"], answer: 0 },
      { q: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?", options: ["Yes", "No", "Cannot be determined", "Only some"], answer: 0 },
      { q: "Find the next letter in the series: B, D, G, K, P, ?", options: ["T", "U", "V", "W"], answer: 2 },
      { q: "A is taller than B but shorter than C. D is taller than A but shorter than C. Who is tallest?", options: ["A", "B", "C", "D"], answer: 2 },
      { q: "Which number should replace the question mark: 3, 9, 27, 81, ?", options: ["162", "216", "243", "324"], answer: 2 },
      { q: "Statement: All pens are books. Some books are pencils. Conclusion: Some pencils are pens.", options: ["Definitely true", "Definitely false", "Cannot be determined", "Always false"], answer: 2 },
      { q: "If South-East becomes North, North-East becomes West, what does South become?", options: ["North-West", "South-West", "North-East", "East"], answer: 2 },
      { q: "In a certain code, each letter is shifted one place forward in the alphabet, so 'GARDEN' becomes 'HBSEFO'. How is 'FLOWER' written in that code?", options: ["GMPXFS", "GMPXFT", "GMOXFS", "HMPXFS"], answer: 0 },
      { q: "Five friends P, Q, R, S, T sit in a row. P is to the left of Q but right of R. S is to the right of Q. T is at one end. Who is in the middle?", options: ["P", "Q", "R", "Cannot be determined"], answer: 3 },
      { q: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0°", "7.5°", "15°", "30°"], answer: 1 },
      { q: "If 'CAT' is coded as '3-1-20' (each letter's position in the alphabet), how is 'DOG' coded?", options: ["4-15-7", "4-14-7", "4-15-8", "5-15-7"], answer: 0 },
      { q: "Choose the figure that continues the pattern: a square with 1 dot, 2 dots, 3 dots — how many dots in the next figure?", options: ["3", "4", "5", "6"], answer: 1 }
    ]
  },
  {
    id: "verbal",
    number: "Room 03",
    name: "Verbal Ability",
    meta: "15 questions · 20s each",
    questions: [
      { q: "Choose the synonym of 'Meticulous':", options: ["Careless", "Thorough", "Hasty", "Vague"], answer: 1 },
      { q: "Choose the antonym of 'Benevolent':", options: ["Kind", "Generous", "Malevolent", "Gentle"], answer: 2 },
      { q: "Fill in the blank: She has been working here ___ 2019.", options: ["for", "since", "from", "at"], answer: 1 },
      { q: "Identify the correctly spelled word:", options: ["Occassion", "Occasion", "Ocasion", "Occasionn"], answer: 1 },
      { q: "Choose the correct passive voice: 'They are building a bridge.'", options: ["A bridge is built by them.", "A bridge is being built by them.", "A bridge was being built by them.", "A bridge has been built by them."], answer: 1 },
      { q: "Choose the word that best completes: 'His argument was so ___ that no one could refute it.'", options: ["Frivolous", "Cogent", "Ambiguous", "Trivial"], answer: 1 },
      { q: "Identify the part of speech of the underlined word: 'She sings beautifully.'", options: ["Adjective", "Adverb", "Noun", "Verb"], answer: 1 },
      { q: "Choose the correctly punctuated sentence:", options: ["Its a great day, isnt it?", "It's a great day, isn't it?", "Its' a great day, isn't it?", "It's a great day, isnt' it?"], answer: 1 },
      { q: "Choose the one-word substitute: 'A person who can speak many languages.'", options: ["Linguist", "Polyglot", "Translator", "Bilingual"], answer: 1 },
      { q: "Choose the correctly ordered sentence.", options: ["Only he can solve this problem.", "He only can solve this problem.", "He can solve only this problem.", "He can only this problem solve."], answer: 0 },
      { q: "Choose the correct meaning of the idiom 'to bite the bullet':", options: ["To avoid a difficult task", "To face a difficult situation bravely", "To argue aggressively", "To give up easily"], answer: 1 },
      { q: "Fill in the blank: Neither the manager nor the employees ___ aware of the change.", options: ["was", "were", "is", "has"], answer: 1 },
      { q: "Choose the correct comparative form: 'This laptop is ___ than that one.'", options: ["more good", "gooder", "better", "best"], answer: 2 },
      { q: "Identify the error: 'Each of the students have submitted their assignment.'", options: ["Each of the", "have submitted", "their assignment", "No error"], answer: 1 },
      { q: "Choose the word closest in meaning to 'Ephemeral':", options: ["Permanent", "Fleeting", "Eternal", "Solid"], answer: 1 }
    ]
  },
  {
    id: "tech",
    number: "Room 04",
    name: "Technical MCQs",
    meta: "15 questions · 20s each",
    questions: [
      { q: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: 1 },
      { q: "Which data structure uses LIFO order?", options: ["Queue", "Stack", "Linked List", "Tree"], answer: 1 },
      { q: "In SQL, which keyword removes duplicate rows from a result set?", options: ["UNIQUE", "DISTINCT", "FILTER", "REMOVE"], answer: 1 },
      { q: "Which of these is NOT a valid HTTP method?", options: ["GET", "POST", "FETCH", "DELETE"], answer: 2 },
      { q: "What does 'DNS' stand for?", options: ["Domain Name System", "Data Network Service", "Digital Naming Standard", "Domain Network Server"], answer: 0 },
      { q: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"], answer: 2 },
      { q: "In OOP, what is the process of hiding implementation details called?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 2 },
      { q: "Which normal form removes transitive dependency in a database?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: 2 },
      { q: "What is the default port for HTTPS?", options: ["80", "8080", "443", "21"], answer: 2 },
      { q: "Which of these is a non-primitive data type in Java?", options: ["int", "char", "boolean", "Array"], answer: 3 },
      { q: "What does 'ACID' stand for in database transactions?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Concurrency, Isolation, Durability", "Availability, Consistency, Isolation, Durability"], answer: 0 },
      { q: "Which layer of the OSI model is responsible for routing?", options: ["Data Link", "Network", "Transport", "Session"], answer: 1 },
      { q: "What is the worst-case time complexity of Quick Sort?", options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], answer: 2 },
      { q: "In Git, which command creates a new branch and switches to it?", options: ["git branch -m", "git checkout -b", "git merge -b", "git switch --create-only"], answer: 1 },
      { q: "Which of these is an example of a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle DB"], answer: 2 }
    ]
  },
  {
    id: "hr",
    number: "Room 05",
    name: "HR / Behavioral",
    meta: "15 questions · 20s each",
    questions: [
      { q: "Interviewer: 'Tell me about yourself.' What should this answer primarily focus on?", options: ["Your entire life history", "Relevant skills and experience tied to the role", "Personal hobbies only", "Salary expectations"], answer: 1 },
      { q: "'What is your biggest weakness?' is best answered by:", options: ["Saying you have no weaknesses", "Naming a real weakness and how you're improving on it", "Naming a strength disguised as a weakness with no depth", "Avoiding the question entirely"], answer: 1 },
      { q: "The STAR method for answering behavioral questions stands for:", options: ["Situation, Task, Action, Result", "Skill, Talent, Ambition, Reward", "Situation, Time, Action, Reflection", "Strategy, Task, Achievement, Review"], answer: 0 },
      { q: "When asked 'Why should we hire you?', the strongest response:", options: ["Criticizes other candidates", "Connects your specific skills to the company's specific needs", "Focuses only on your need for a job", "Talks about unrelated achievements"], answer: 1 },
      { q: "If asked about a conflict with a teammate, you should primarily emphasize:", options: ["Who was at fault", "How you resolved it constructively", "That you avoided the person afterward", "That you reported them to a manager immediately"], answer: 1 },
      { q: "'Where do you see yourself in 5 years?' is meant to assess:", options: ["Your exact career plan in detail", "Your ambition and alignment with the company's growth", "Whether you plan to change careers", "Your family plans"], answer: 1 },
      { q: "The best way to answer 'Why do you want to work here?' is to:", options: ["Say you need any job", "Reference specific things about the company that align with your goals", "Talk only about salary and perks", "Say you applied to many companies"], answer: 1 },
      { q: "When asked about handling pressure or deadlines, the best approach is to:", options: ["Say you've never felt pressure", "Give a specific example of how you managed it effectively", "Say you avoid stressful situations", "Blame past employers for the stress"], answer: 1 },
      { q: "In a group discussion round, which behavior is viewed most positively?", options: ["Interrupting others frequently", "Listening actively and building on others' points", "Staying silent throughout", "Dominating the conversation"], answer: 1 },
      { q: "If you don't know the answer to a technical question in an interview, you should:", options: ["Make up an answer confidently", "Admit it honestly and explain your approach to finding out", "Stay silent", "Change the subject"], answer: 1 },
      { q: "What is the best time to ask questions to the interviewer?", options: ["Never ask questions", "When invited to, at the end of the interview", "Interrupt them mid-answer", "Only after receiving the offer"], answer: 1 },
      { q: "When explaining a low grade or gap in your resume, you should:", options: ["Avoid mentioning it at all", "Be honest and focus on what you learned or did during that time", "Blame external circumstances only", "Get defensive"], answer: 1 },
      { q: "Which is the most professional way to end an interview?", options: ["Leave immediately after the last question", "Thank the interviewer and express continued interest in the role", "Ask about salary aggressively", "Say nothing and wait to be dismissed"], answer: 1 },
      { q: "A recruiter asks 'How do you handle feedback?' The best response demonstrates:", options: ["Defensiveness", "Openness to feedback and willingness to improve", "Indifference", "Blaming the person giving feedback"], answer: 1 },
      { q: "What does it mean to 'answer with confidence, not arrogance' in an interview?", options: ["Exaggerating achievements", "Being clear and self-assured while staying honest and respectful", "Refusing to admit any mistakes", "Talking over the interviewer"], answer: 1 }
    ]
  }
];

const QUESTION_TIME = 20; // seconds per question
const DAILY_SET_SIZE = 10; // how many questions are served per room, per day

// --- Daily rotation: deterministic per date + room, so the set is stable
// all day but changes tomorrow. No dependencies, just a small seeded RNG. ---

function todayKey() {
  return new Date().toDateString(); // e.g. "Sun Sep 13 2026"
}

function hashToSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(array, rng) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getDailyQuestions(room) {
  const rng = mulberry32(hashToSeed(todayKey() + "::" + room.id));
  const shuffled = seededShuffle(room.questions, rng);
  return shuffled.slice(0, Math.min(DAILY_SET_SIZE, shuffled.length));
}

let state = {
  roomId: null,
  questions: [],
  index: 0,
  score: 0,
  answered: false,
  timerId: null,
  timeLeft: QUESTION_TIME,
  startedAt: null,
  log: [] // { question, chosen, correct, wasCorrect }
};

const el = (id) => document.getElementById(id);

const roomGrid = el("roomGrid");
const roomSelect = el("roomSelect");
const quizRoom = el("quizRoom");
const resultsRoom = el("resultsRoom");

function init() {
  renderRoomGrid();
  renderHeaderStats();

  el("exitBtn").addEventListener("click", () => leaveRoom());
  el("nextBtn").addEventListener("click", () => advanceQuestion());
  el("retryBtn").addEventListener("click", () => startRoom(state.roomId));
  el("lobbyBtn").addEventListener("click", () => showLobby());
}

function renderHeaderStats() {
  const streak = Number(localStorage.getItem("pp_streak") || 0);
  const best = localStorage.getItem("pp_best");
  el("streakStat").textContent = streak;
  el("bestStat").textContent = best ? best + "%" : "—";
}

function renderRoomGrid() {
  roomGrid.innerHTML = "";
  ROOMS.forEach((room) => {
    const btn = document.createElement("button");
    btn.className = "room-plaque";
    btn.innerHTML = `
      <span class="room-number">${room.number}</span>
      <span class="room-name">${room.name}</span>
      <span class="room-meta">${DAILY_SET_SIZE} questions today · ${QUESTION_TIME}s each · resets tomorrow</span>
    `;
    btn.addEventListener("click", () => startRoom(room.id));
    roomGrid.appendChild(btn);
  });
}

function showLobby() {
  quizRoom.classList.add("hidden");
  resultsRoom.classList.add("hidden");
  roomSelect.classList.remove("hidden");
  renderHeaderStats();
}

function leaveRoom() {
  clearInterval(state.timerId);
  showLobby();
}

function startRoom(roomId) {
  const room = ROOMS.find((r) => r.id === roomId);
  if (!room) return;

  state = {
    roomId,
    questions: getDailyQuestions(room),
    index: 0,
    score: 0,
    answered: false,
    timerId: null,
    timeLeft: QUESTION_TIME,
    startedAt: Date.now(),
    log: []
  };

  roomSelect.classList.add("hidden");
  resultsRoom.classList.add("hidden");
  quizRoom.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const room = ROOMS.find((r) => r.id === state.roomId);
  const q = state.questions[state.index];

  state.answered = false;
  el("nextBtn").disabled = true;
  el("questionTag").textContent = room.name;
  el("questionText").textContent = q.q;
  el("liveScore").textContent = state.score;
  el("progressText").textContent = `Question ${state.index + 1} of ${state.questions.length}`;
  el("progressFill").style.width = `${(state.index / state.questions.length) * 100}%`;

  const optionsList = el("optionsList");
  optionsList.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  q.options.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="bubble">${letters[i]}</span><span>${optText}</span>`;
    btn.addEventListener("click", () => selectAnswer(i));
    optionsList.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(state.timerId);
  state.timeLeft = QUESTION_TIME;
  updateTimerDisplay();

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      if (!state.answered) selectAnswer(-1); // time's up, no answer chosen
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = el("timer");
  const mins = Math.floor(state.timeLeft / 60).toString().padStart(2, "0");
  const secs = (state.timeLeft % 60).toString().padStart(2, "0");
  timerEl.textContent = `${mins}:${secs}`;
  timerEl.classList.toggle("low", state.timeLeft <= 10);
}

function selectAnswer(chosenIndex) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerId);

  const q = state.questions[state.index];
  const options = document.querySelectorAll(".option");
  const wasCorrect = chosenIndex === q.answer;

  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === chosenIndex) btn.classList.add("incorrect");
  });

  if (wasCorrect) state.score += 1;

  state.log.push({
    question: q.q,
    chosenText: chosenIndex >= 0 ? q.options[chosenIndex] : "No answer (time up)",
    correctText: q.options[q.answer],
    wasCorrect
  });

  el("liveScore").textContent = state.score;
  el("nextBtn").disabled = false;
  el("nextBtn").textContent = state.index === state.questions.length - 1 ? "See results" : "Next question";
}

function advanceQuestion() {
  state.index += 1;
  if (state.index >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  quizRoom.classList.add("hidden");
  resultsRoom.classList.remove("hidden");

  const total = state.questions.length;
  const accuracy = Math.round((state.score / total) * 100);
  const elapsedSec = Math.round((Date.now() - state.startedAt) / 1000);
  const mins = Math.floor(elapsedSec / 60);
  const secs = elapsedSec % 60;

  el("progressFill").style.width = "100%";
  el("resultsHeadline").textContent = accuracy >= 70 ? "Room cleared" : accuracy >= 40 ? "Decent attempt" : "Back to the books";
  el("resultScore").textContent = `${state.score}/${total}`;
  el("resultAccuracy").textContent = `${accuracy}%`;
  el("resultTime").textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

  const reviewList = el("reviewList");
  reviewList.innerHTML = "";
  state.log.forEach((item) => {
    const div = document.createElement("div");
    div.className = `review-item ${item.wasCorrect ? "right" : "wrong"}`;
    const answerLine = item.wasCorrect
      ? `<p class="review-a">Your answer: <span class="right-answer">${item.chosenText}</span></p>`
      : `<p class="review-a">Your answer: <span class="your-wrong">${item.chosenText}</span> · Correct: <span class="right-answer">${item.correctText}</span></p>`;
    div.innerHTML = `<p class="review-q">${item.question}</p>${answerLine}`;
    reviewList.appendChild(div);
  });

  updateStats(accuracy);
}

function updateStats(accuracy) {
  const today = new Date().toDateString();
  const lastPlayed = localStorage.getItem("pp_last_played");
  let streak = Number(localStorage.getItem("pp_streak") || 0);

  if (lastPlayed !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = lastPlayed === yesterday ? streak + 1 : 1;
    localStorage.setItem("pp_last_played", today);
    localStorage.setItem("pp_streak", streak);
  }

  const best = Number(localStorage.getItem("pp_best") || 0);
  if (accuracy > best) localStorage.setItem("pp_best", accuracy);

  renderHeaderStats();
}

init();