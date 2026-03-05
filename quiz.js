// ===== CHEMISTRY QUIZ DATA =====
const TOPICS = [
  { id: 'atomic', name: 'Atomic Structure', icon: '⚛️' },
  { id: 'periodic', name: 'Periodic Table', icon: '📊' },
  { id: 'bonding', name: 'Chemical Bonding', icon: '🔗' },
  { id: 'reactions', name: 'Chemical Reactions', icon: '⚗️' },
  { id: 'stoichiometry', name: 'Stoichiometry', icon: '⚖️' },
  { id: 'gases', name: 'Gases', icon: '💨' },
  { id: 'thermochem', name: 'Thermochemistry', icon: '🔥' },
  { id: 'equilibrium', name: 'Equilibrium', icon: '⚖️' },
  { id: 'acidbase', name: 'Acids & Bases', icon: '🧪' },
  { id: 'electrochemistry', name: 'Electrochemistry', icon: '⚡' },
];

const QUESTIONS = [
  // === ATOMIC STRUCTURE ===
  { topic: 'atomic', difficulty: 'easy', q: 'What is the charge of a proton?', options: ['+1', '-1', '0', '+2'], answer: 0, exp: 'Protons have a positive charge of +1 and are found in the nucleus.' },
  { topic: 'atomic', difficulty: 'easy', q: 'Which subatomic particle has no charge?', options: ['Proton', 'Electron', 'Neutron', 'Positron'], answer: 2, exp: 'Neutrons are electrically neutral and located in the nucleus.' },
  { topic: 'atomic', difficulty: 'easy', q: 'The atomic number of an element represents:', options: ['Number of neutrons', 'Number of protons', 'Atomic mass', 'Number of electrons in outer shell'], answer: 1, exp: 'The atomic number equals the number of protons in the nucleus.' },
  { topic: 'atomic', difficulty: 'medium', q: 'The Bohr model of the atom describes electrons as:', options: ['Clouds of probability', 'Moving in fixed circular orbits', 'Stationary around the nucleus', 'Wave functions'], answer: 1, exp: 'Bohr proposed electrons orbit the nucleus in fixed circular energy levels.' },
  { topic: 'atomic', difficulty: 'medium', q: 'Which quantum number describes the shape of an orbital?', options: ['Principal (n)', 'Angular momentum (l)', 'Magnetic (ml)', 'Spin (ms)'], answer: 1, exp: 'The angular momentum quantum number (l) describes the shape of the orbital (s, p, d, f).' },
  { topic: 'atomic', difficulty: 'medium', q: 'How many orbitals are in the 3d subshell?', options: ['3', '5', '7', '1'], answer: 1, exp: 'The d subshell has ml values from -2 to +2, giving 5 orbitals.' },
  { topic: 'atomic', difficulty: 'hard', q: 'Which of the following electron configurations violates the Pauli Exclusion Principle?', options: ['1s² 2s²', '1s² 2p⁶', '1s² 2s¹', '1s³'], answer: 3, exp: 'The Pauli Exclusion Principle states no orbital can hold more than 2 electrons with opposite spins. 1s³ would require 3 electrons in one orbital.' },
  { topic: 'atomic', difficulty: 'hard', q: "According to Heisenberg's Uncertainty Principle:", options: ['Energy and mass cannot both be known precisely', 'Position and momentum cannot both be known precisely', 'Charge and spin cannot both be known precisely', 'Speed and direction cannot both be known precisely'], answer: 1, exp: "Heisenberg's principle states Δx·Δp ≥ ℏ/2, meaning position and momentum cannot be simultaneously measured with perfect precision." },
  
  // === PERIODIC TABLE ===
  { topic: 'periodic', difficulty: 'easy', q: 'Elements in the same group of the periodic table have the same number of:', options: ['Protons', 'Neutrons', 'Valence electrons', 'Energy levels'], answer: 2, exp: 'Elements in the same group share the same number of valence electrons, giving them similar chemical properties.' },
  { topic: 'periodic', difficulty: 'easy', q: 'Which element has the symbol Na?', options: ['Nickel', 'Nitrogen', 'Sodium', 'Neon'], answer: 2, exp: 'Na comes from the Latin word "Natrium" for sodium.' },
  { topic: 'periodic', difficulty: 'easy', q: 'What type of element is found in Group 1 of the periodic table?', options: ['Noble gases', 'Halogens', 'Alkali metals', 'Alkaline earth metals'], answer: 2, exp: 'Group 1 elements (Li, Na, K, Rb, Cs, Fr) are alkali metals.' },
  { topic: 'periodic', difficulty: 'medium', q: 'Electronegativity generally increases as you move:', options: ['Down a group and left across a period', 'Up a group and right across a period', 'Down a group and right across a period', 'Up a group and left across a period'], answer: 1, exp: 'Electronegativity increases going up a group and to the right across a period toward fluorine.' },
  { topic: 'periodic', difficulty: 'medium', q: 'Which of the following elements has the largest atomic radius?', options: ['Na', 'Mg', 'Al', 'Si'], answer: 0, exp: 'Sodium (Na) has the largest atomic radius since atomic radius decreases across a period from left to right.' },
  { topic: 'periodic', difficulty: 'hard', q: 'The first ionization energy generally increases across a period, but there is a drop from:', options: ['Li to Be', 'Be to B', 'N to O', 'O to F'], answer: 1, exp: 'There is a drop from Be to B because B has a 2p electron (higher energy, easier to remove) vs. Be with a paired 2s orbital.' },
  { topic: 'periodic', difficulty: 'hard', q: "Which element has the highest electronegativity on Pauling's scale?", options: ['Oxygen', 'Chlorine', 'Nitrogen', 'Fluorine'], answer: 3, exp: 'Fluorine has the highest electronegativity (3.98) on the Pauling scale.' },

  // === CHEMICAL BONDING ===
  { topic: 'bonding', difficulty: 'easy', q: 'An ionic bond forms between:', options: ['Two nonmetals', 'Two metals', 'A metal and a nonmetal', 'Two noble gases'], answer: 2, exp: 'Ionic bonds form through electron transfer between metals (losing electrons) and nonmetals (gaining electrons).' },
  { topic: 'bonding', difficulty: 'easy', q: 'Water (H₂O) is an example of a molecule with:', options: ['Ionic bonds', 'Covalent bonds', 'Metallic bonds', 'Hydrogen bonds only'], answer: 1, exp: 'Water molecules are held together by covalent bonds (shared electrons between O and H atoms).' },
  { topic: 'bonding', difficulty: 'medium', q: 'What is the bond angle in a tetrahedral molecule?', options: ['90°', '109.5°', '120°', '180°'], answer: 1, exp: 'Tetrahedral geometry (like CH₄) has bond angles of approximately 109.5°.' },
  { topic: 'bonding', difficulty: 'medium', q: 'Which of the following molecules is polar?', options: ['CO₂', 'CCl₄', 'BF₃', 'H₂O'], answer: 3, exp: 'H₂O is polar because of its bent shape and the electronegativity difference between O and H.' },
  { topic: 'bonding', difficulty: 'medium', q: 'VSEPR theory is used to predict:', options: ['Bond energies', 'Molecular geometry', 'Reaction rates', 'Oxidation states'], answer: 1, exp: 'VSEPR (Valence Shell Electron Pair Repulsion) theory predicts the 3D shape of molecules.' },
  { topic: 'bonding', difficulty: 'hard', q: 'Which hybridization does a carbon atom in ethylene (C₂H₄) exhibit?', options: ['sp', 'sp²', 'sp³', 'sp³d'], answer: 1, exp: 'Carbon in ethylene is sp² hybridized, forming a double bond with one sigma and one pi bond.' },
  { topic: 'bonding', difficulty: 'hard', q: 'London dispersion forces are caused by:', options: ['Permanent dipoles', 'Temporary induced dipoles', 'Ion-ion interactions', 'Covalent bonds'], answer: 1, exp: 'London dispersion forces arise from temporary induced dipoles due to momentary electron distribution imbalances.' },

  // === CHEMICAL REACTIONS ===
  { topic: 'reactions', difficulty: 'easy', q: 'In a synthesis reaction:', options: ['One compound breaks into two substances', 'Two substances combine to form one compound', 'An element replaces another in a compound', 'Two compounds exchange ions'], answer: 1, exp: 'Synthesis: A + B → AB. Two or more reactants combine to form a single product.' },
  { topic: 'reactions', difficulty: 'easy', q: 'What is conserved in a chemical reaction?', options: ['Volume', 'Mass', 'Temperature', 'Color'], answer: 1, exp: 'According to the law of conservation of mass, matter is neither created nor destroyed in chemical reactions.' },
  { topic: 'reactions', difficulty: 'medium', q: 'In a redox reaction, oxidation involves:', options: ['Gain of electrons', 'Loss of electrons', 'Gain of protons', 'Loss of protons'], answer: 1, exp: 'OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons).' },
  { topic: 'reactions', difficulty: 'medium', q: 'Which type of reaction produces a precipitate?', options: ['Combustion', 'Acid-base neutralization', 'Double displacement', 'Synthesis'], answer: 2, exp: 'Double displacement (metathesis) reactions can produce an insoluble precipitate when ions combine.' },
  { topic: 'reactions', difficulty: 'hard', q: 'What is the oxidation state of Mn in KMnO₄?', options: ['+2', '+4', '+6', '+7'], answer: 3, exp: 'K is +1, O is -2 (×4 = -8). So Mn + 1 - 8 = 0, therefore Mn = +7.' },
  { topic: 'reactions', difficulty: 'hard', q: 'In a galvanic cell, oxidation occurs at the:', options: ['Cathode', 'Anode', 'Salt bridge', 'Electrolyte'], answer: 1, exp: 'In electrochemical cells: oxidation occurs at the anode (AnOx), reduction at the cathode (RedCat).' },

  // === STOICHIOMETRY ===
  { topic: 'stoichiometry', difficulty: 'easy', q: 'Avogadro's number (6.022 × 10²³) represents the number of:', options: ['Grams in a mole', 'Particles in a mole', 'Liters in a mole at STP', 'Joules in a mole'], answer: 1, exp: 'One mole of any substance contains 6.022 × 10²³ particles (atoms, molecules, etc.).' },
  { topic: 'stoichiometry', difficulty: 'easy', q: 'The molar mass of H₂O is approximately:', options: ['10 g/mol', '16 g/mol', '18 g/mol', '20 g/mol'], answer: 2, exp: 'H₂O: 2(1) + 16 = 18 g/mol. H is 1 g/mol each, O is 16 g/mol.' },
  { topic: 'stoichiometry', difficulty: 'medium', q: 'How many moles are in 44 g of CO₂? (Molar mass of CO₂ = 44 g/mol)', options: ['0.5 mol', '1 mol', '2 mol', '44 mol'], answer: 1, exp: 'Moles = mass ÷ molar mass = 44 g ÷ 44 g/mol = 1 mol.' },
  { topic: 'stoichiometry', difficulty: 'medium', q: 'The limiting reagent in a reaction is:', options: ['The reactant present in excess', 'The reactant that is completely consumed first', 'The product formed in greatest amount', 'The most massive reactant'], answer: 1, exp: 'The limiting reagent is consumed completely and determines the maximum amount of product formed.' },
  { topic: 'stoichiometry', difficulty: 'hard', q: 'For the reaction: N₂ + 3H₂ → 2NH₃. If 2 mol N₂ and 4 mol H₂ react, what is the limiting reagent?', options: ['N₂', 'H₂', 'NH₃', 'Neither; both react completely'], answer: 1, exp: 'N₂ needs 3× H₂: 2 mol N₂ needs 6 mol H₂, but only 4 mol H₂ available. H₂ is limiting.' },
  { topic: 'stoichiometry', difficulty: 'hard', q: 'Percent yield = (actual yield / theoretical yield) × 100. If theoretical yield is 50 g and actual yield is 40 g, percent yield is:', options: ['40%', '80%', '125%', '60%'], answer: 1, exp: 'Percent yield = (40/50) × 100 = 80%.' },

  // === GASES ===
  { topic: 'gases', difficulty: 'easy', q: 'Boyle's Law states that at constant temperature, pressure and volume are:', options: ['Directly proportional', 'Inversely proportional', 'Equal', 'Independent'], answer: 1, exp: "Boyle's Law: P₁V₁ = P₂V₂ at constant T. Pressure and volume are inversely proportional." },
  { topic: 'gases', difficulty: 'easy', q: 'STP (Standard Temperature and Pressure) is defined as:', options: ['25°C and 1 atm', '0°C and 1 atm', '100°C and 1 atm', '0 K and 1 atm'], answer: 1, exp: 'STP is 0°C (273.15 K) and 1 atm. At STP, one mole of ideal gas occupies 22.4 L.' },
  { topic: 'gases', difficulty: 'medium', q: 'The ideal gas law is expressed as:', options: ['PV = nRT', 'P₁V₁ = P₂V₂', 'V/T = k', 'PV = RT'], answer: 0, exp: 'PV = nRT where P=pressure, V=volume, n=moles, R=gas constant, T=temperature in Kelvin.' },
  { topic: 'gases', difficulty: 'medium', q: 'Charles's Law describes the relationship between gas volume and:', options: ['Pressure (constant T)', 'Temperature (constant P)', 'Amount of gas', 'Molar mass'], answer: 1, exp: "Charles's Law: V/T = constant at fixed pressure. Volume and temperature are directly proportional." },
  { topic: 'gases', difficulty: 'hard', q: "According to Graham's Law of Effusion, lighter gases effuse:", options: ['Slower than heavier gases', 'At the same rate as heavier gases', 'Faster than heavier gases', 'Only at higher temperatures'], answer: 2, exp: "Graham's Law: rate ∝ 1/√M. Lighter gases (smaller molar mass) effuse faster." },

  // === THERMOCHEMISTRY ===
  { topic: 'thermochem', difficulty: 'easy', q: 'An exothermic reaction:', options: ['Absorbs heat from surroundings', 'Releases heat to surroundings', 'Has no heat change', 'Only occurs at high temperature'], answer: 1, exp: 'Exothermic reactions release energy to surroundings, resulting in negative ΔH.' },
  { topic: 'thermochem', difficulty: 'easy', q: 'The specific heat of water is 4.184 J/(g·°C). This means:', options: ['Water requires 4.184 J to heat 1 kg by 1°C', 'Water requires 4.184 J to heat 1 g by 1°C', 'Water holds 4.184 J at 25°C', 'Water freezes at 4.184°C'], answer: 1, exp: 'Specific heat capacity is the energy needed to raise 1 gram of substance by 1°C.' },
  { topic: 'thermochem', difficulty: 'medium', q: 'Hess's Law states that the enthalpy change of a reaction:', options: ['Depends on the pathway taken', 'Is independent of the pathway taken', 'Is always negative', 'Equals the activation energy'], answer: 1, exp: "Hess's Law: ΔH is a state function. The total enthalpy change is independent of the reaction pathway." },
  { topic: 'thermochem', difficulty: 'medium', q: 'Which process represents a negative entropy change (ΔS < 0)?', options: ['Ice melting', 'Water evaporating', 'Water freezing', 'Dissolving salt in water'], answer: 2, exp: 'Water freezing increases order (liquid → solid), decreasing entropy (ΔS < 0).' },
  { topic: 'thermochem', difficulty: 'hard', q: 'The Gibbs free energy equation ΔG = ΔH - TΔS predicts a spontaneous reaction when:', options: ['ΔG > 0', 'ΔG = 0', 'ΔG < 0', 'ΔG is undefined'], answer: 2, exp: 'A reaction is thermodynamically spontaneous when ΔG < 0 (negative Gibbs free energy change).' },

  // === EQUILIBRIUM ===
  { topic: 'equilibrium', difficulty: 'easy', q: 'At chemical equilibrium:', options: ['Reaction has stopped', 'Forward and reverse rates are equal', 'Only forward reaction occurs', 'Concentrations are zero'], answer: 1, exp: 'At equilibrium, the forward and reverse reaction rates are equal, so concentrations remain constant.' },
  { topic: 'equilibrium', difficulty: 'medium', q: "Le Chatelier's Principle states that if a system at equilibrium is disturbed, it will:", options: ['Stop reacting', 'Shift to oppose the disturbance', 'Shift to increase the disturbance', 'Double the reaction rate'], answer: 1, exp: "Le Chatelier's Principle: a system at equilibrium adjusts to counteract any applied stress." },
  { topic: 'equilibrium', difficulty: 'medium', q: 'For the reaction A ⇌ B, if Keq = 1000, the equilibrium favors:', options: ['Reactants', 'Products', 'Neither; equal amounts', 'Cannot determine'], answer: 1, exp: 'A large Keq (>>1) indicates products are favored at equilibrium.' },
  { topic: 'equilibrium', difficulty: 'hard', q: 'Increasing pressure on a gas-phase equilibrium will shift the reaction toward:', options: ['More moles of gas', 'Fewer moles of gas', 'The exothermic direction', 'The endothermic direction'], answer: 1, exp: 'Increasing pressure favors the side with fewer moles of gas to reduce pressure.' },

  // === ACIDS & BASES ===
  { topic: 'acidbase', difficulty: 'easy', q: 'A Brønsted-Lowry acid is a substance that:', options: ['Accepts a proton', 'Donates a proton', 'Accepts an electron pair', 'Donates an electron pair'], answer: 1, exp: 'A Brønsted-Lowry acid donates a proton (H⁺) to a base.' },
  { topic: 'acidbase', difficulty: 'easy', q: 'What is the pH of a neutral solution at 25°C?', options: ['0', '7', '14', '1'], answer: 1, exp: 'At 25°C, a neutral solution has [H⁺] = [OH⁻] = 10⁻⁷ M, giving pH = 7.' },
  { topic: 'acidbase', difficulty: 'medium', q: 'A buffer solution resists changes in:', options: ['Temperature', 'Volume', 'pH', 'Pressure'], answer: 2, exp: 'Buffers resist pH changes when small amounts of acid or base are added.' },
  { topic: 'acidbase', difficulty: 'medium', q: 'The conjugate base of H₂SO₄ is:', options: ['H₃SO₄⁺', 'HSO₄⁻', 'SO₄²⁻', 'OH⁻'], answer: 1, exp: 'H₂SO₄ donates one proton to form HSO₄⁻ (hydrogen sulfate ion), its conjugate base.' },
  { topic: 'acidbase', difficulty: 'hard', q: 'The Henderson-Hasselbalch equation is used to calculate the pH of:', options: ['Strong acid solutions', 'Buffer solutions', 'Pure water', 'Neutral salts'], answer: 1, exp: 'pH = pKa + log([A⁻]/[HA]) — the Henderson-Hasselbalch equation applies to buffer solutions.' },

  // === ELECTROCHEMISTRY ===
  { topic: 'electrochemistry', difficulty: 'easy', q: 'In electrolysis, the cathode is where:', options: ['Oxidation occurs', 'Reduction occurs', 'Electrons are produced', 'Anions are formed'], answer: 1, exp: 'At the cathode, cations are reduced by gaining electrons.' },
  { topic: 'electrochemistry', difficulty: 'medium', q: "The standard hydrogen electrode (SHE) has a standard reduction potential of:", options: ['+1.00 V', '0.00 V', '-1.00 V', '+0.76 V'], answer: 1, exp: 'By convention, the SHE is assigned E° = 0.00 V and is used as the reference electrode.' },
  { topic: 'electrochemistry', difficulty: 'medium', q: 'Faraday's constant represents:', options: ['Charge of one electron', 'Charge of one mole of electrons', 'Energy of one mole of photons', 'Mass of one mole of protons'], answer: 1, exp: "Faraday's constant F ≈ 96,485 C/mol represents the charge of one mole of electrons." },
  { topic: 'electrochemistry', difficulty: 'hard', q: 'A positive standard cell potential (E°cell > 0) indicates:', options: ['Non-spontaneous reaction', 'Spontaneous reaction', 'Equilibrium state', 'Endothermic reaction'], answer: 1, exp: 'E°cell > 0 → ΔG° < 0 → spontaneous reaction. The relationship is ΔG° = -nFE°.' },
];

// ===== QUIZ STATE =====
let state = {
  selectedTopic: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  timer: null,
  timeLeft: 30,
  timeSpent: [],
  difficulty: 'all',
  questionCount: 10,
};

// ===== DOM REFS =====
const screens = {
  home: document.getElementById('home-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen'),
};

// ===== UTILITY =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ===== TOPIC CARDS =====
function renderTopics() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = TOPICS.map(t => {
    const count = QUESTIONS.filter(q => q.topic === t.id).length;
    return `<div class="topic-card" data-id="${t.id}" onclick="selectTopic('${t.id}')">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-name">${t.name}</div>
      <div class="topic-count">${count} questions</div>
    </div>`;
  }).join('');
}

function selectTopic(id) {
  state.selectedTopic = (state.selectedTopic === id) ? null : id;
  document.querySelectorAll('.topic-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.id === state.selectedTopic);
  });
}

// ===== QUIZ SETUP =====
function startQuiz() {
  state.difficulty = document.getElementById('difficulty').value;
  state.questionCount = parseInt(document.getElementById('question-count').value);

  let pool = QUESTIONS;
  if (state.selectedTopic) pool = pool.filter(q => q.topic === state.selectedTopic);
  if (state.difficulty !== 'all') pool = pool.filter(q => q.difficulty === state.difficulty);

  if (pool.length === 0) {
    alert('No questions match your selection. Please choose different filters.');
    return;
  }

  state.questions = shuffle(pool).slice(0, state.questionCount);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.timeSpent = [];

  showScreen('quiz');
  renderQuestion();
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;
  state.answered = false;

  // Header
  const topicInfo = TOPICS.find(t => t.id === q.topic);
  document.getElementById('current-topic-badge').textContent = (topicInfo?.icon || '') + ' ' + (topicInfo?.name || q.topic);
  document.getElementById('current-difficulty-badge').textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  document.getElementById('question-counter').textContent = (state.currentIndex + 1) + ' / ' + total;
  document.getElementById('current-score').textContent = state.score;

  // Progress
  const pct = ((state.currentIndex) / total * 100);
  document.getElementById('progress-bar').style.width = pct + '%';

  // Question
  document.getElementById('question-text').textContent = q.q;

  // Options
  const letters = ['A', 'B', 'C', 'D'];
  const container = document.getElementById('options-container');
  container.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="selectAnswer(${i})" id="opt-${i}">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  // Feedback
  const feedback = document.getElementById('feedback');
  feedback.className = 'feedback';
  feedback.textContent = '';

  // Next btn
  document.getElementById('next-btn').style.display = 'none';

  // Timer
  startTimer();
}

// ===== TIMER =====
function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = 30;
  const display = document.getElementById('timer-display');
  const timerEl = document.getElementById('timer');
  display.textContent = state.timeLeft;
  timerEl.className = 'timer';

  state.timer = setInterval(() => {
    state.timeLeft--;
    display.textContent = state.timeLeft;
    
    if (state.timeLeft <= 10) timerEl.className = 'timer warning';
    if (state.timeLeft <= 5) timerEl.className = 'timer danger';
    
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      if (!state.answered) timeOut();
    }
  }, 1000);
}

function timeOut() {
  state.answered = true;
  state.timeSpent.push(30);
  const q = state.questions[state.currentIndex];
  
  // Show correct answer
  document.getElementById('opt-' + q.answer).classList.add('correct');
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
  
  const feedback = document.getElementById('feedback');
  feedback.className = 'feedback wrong';
  feedback.textContent = '⏰ Time's up! The correct answer was: ' + q.options[q.answer];
  
  document.getElementById('next-btn').style.display = 'block';
}

// ===== ANSWER SELECTION =====
function selectAnswer(index) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);
  state.timeSpent.push(30 - state.timeLeft);

  const q = state.questions[state.currentIndex];
  const isCorrect = index === q.answer;
  
  if (isCorrect) state.score++;

  // Style buttons
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === index && !isCorrect) btn.classList.add('wrong');
  });

  // Feedback
  const feedback = document.getElementById('feedback');
  if (isCorrect) {
    feedback.className = 'feedback correct';
    feedback.textContent = '✅ Correct! ' + q.exp;
  } else {
    feedback.className = 'feedback wrong';
    feedback.textContent = '❌ Incorrect. ' + q.exp;
  }

  document.getElementById('current-score').textContent = state.score;
  document.getElementById('next-btn').style.display = 'block';
}

// ===== NEXT QUESTION =====
function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ===== RESULTS =====
function showResults() {
  clearInterval(state.timer);
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);
  const avgTime = state.timeSpent.length > 0 
    ? Math.round(state.timeSpent.reduce((a,b) => a+b, 0) / state.timeSpent.length)
    : 0;

  document.getElementById('score-percent').textContent = pct + '%';
  document.getElementById('stat-correct').textContent = state.score;
  document.getElementById('stat-wrong').textContent = total - state.score;
  document.getElementById('stat-time').textContent = avgTime + 's';

  let emoji, msg;
  if (pct >= 90) { emoji = '🏆'; msg = 'Outstanding! You're a chemistry master!'; }
  else if (pct >= 75) { emoji = '🎉'; msg = 'Great job! You have a solid grasp of chemistry!'; }
  else if (pct >= 60) { emoji = '👍'; msg = 'Good effort! Keep studying to improve!'; }
  else if (pct >= 40) { emoji = '📚'; msg = 'Keep practicing! Review the topics you struggled with.'; }
  else { emoji = '💪'; msg = 'Don't give up! Chemistry takes time to master.'; }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('performance-msg').textContent = msg;

  // Animate score circle
  const circle = document.querySelector('.score-circle');
  circle.style.background = `conic-gradient(var(--primary) 0deg ${pct * 3.6}deg, var(--bg-card2) ${pct * 3.6}deg 360deg)`;

  showScreen('results');
}

// ===== EVENT LISTENERS =====
document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('retry-btn').addEventListener('click', () => {
  showScreen('home');
  state.selectedTopic = null;
  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
  setTimeout(startQuiz, 100);
});
document.getElementById('home-btn').addEventListener('click', () => {
  clearInterval(state.timer);
  state.selectedTopic = null;
  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
  showScreen('home');
});

// ===== INIT =====
renderTopics();
