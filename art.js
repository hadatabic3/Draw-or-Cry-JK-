console.log("I work bro!");

const notes = document.getElementById("notes");
const promptBox = document.getElementById("prompt-box");
const promptBtn = document.getElementById("prompt");

let promptUsed = false;
let randomPrompt;

const artPrompterData = {
  subjects: [
    'A frog', 'A girl', 'A shadow', 'A lizard', 'A building', 'God', 'A tree',
    'A floating island', 'A glowing orb', 'An old radio', 'A mustard seed',
    'A broken mirror', 'A mysterious doorway', 'A tired angel', 'A wildflower',
    'A glowing lantern', 'An abandoned playground', 'A shadow puppet',
    'A paper boat', 'A cracked statue'
  ],
  actions: [
    'waiting', 'glowing', 'hiding', 'transforming', 'wrestling with a thought',
    'floating', 'whispering secrets', 'breaking free', 'fading away',
    'catching light', 'holding a memory', 'shedding skin', 'chasing dreams',
    'walking through fog', 'balancing hope and fear', 'melting into the background',
    'dancing with shadows', 'breathing life into stillness', 'carrying a burden',
    'reaching for something unseen'
  ],
  moods: [
    'hopeful', 'chaotic', 'nostalgic', 'dramatic', 'cozy', 'eerie', 'playful',
    'melancholic', 'dreamy', 'whimsical', 'tense', 'peaceful', 'mysterious',
    'bittersweet', 'vibrant', 'muted', 'surreal', 'grounded', 'comforting', 'restless'
  ],
  styles: [
    'in 3 colors only', 'with no outlines', 'using just circles', 'like a 90s poster',
    'WEBTOON-style', 'pixel art', 'with heavy shadows', 'minimalistic line art',
    'collage style', 'watercolor effect', 'neon glow', 'glitch art', 'low poly',
    'paper cutout style', 'hand-drawn sketch', 'monochrome with one accent color',
    'pop art', 'abstract shapes', 'geometric pattern overlay', 'sumi-e ink painting style'
  ]
};

const noCheatingMessages = [
  "Hey! No cheating allowed!",
  "One prompt only, friend!",
  "Patience is a virtue!",
  "You get one shot at this!",
  "No sneak peeks, promise!",
  "Gotta live with what you got!",
  "No take backs!",
  "This prompt is yours — for better or worse!",
  "No cheating! Be creative!",
  "One prompt to rule them all!"
];

const displayPrompt = () => {
  promptBox.textContent = randomPrompt;
  promptBox.style.backgroundColor = "white";
  promptBox.style.borderRadius = "8px";
  promptBox.style.opacity = "0.6"; // Decimal value is more reliable
  promptBox.style.boxShadow = "inset 0 1px 3px rgba(0,0,0,0.1)";
};

promptBtn.addEventListener("click", () => {
  if (!promptUsed) {
    const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

    const subject = getRandom(artPrompterData.subjects);
    const action = getRandom(artPrompterData.actions);
    const mood = getRandom(artPrompterData.moods);
    const style = getRandom(artPrompterData.styles);

    randomPrompt = `${subject}, ${action}. (${mood}, ${style})`;
    console.log(randomPrompt);

    displayPrompt();
    promptUsed = true;
  } else {
    const message = noCheatingMessages[Math.floor(Math.random() * noCheatingMessages.length)];
    notes.textContent = message;
    console.log("ah ah ahhh, no cheating!");
  }
});
