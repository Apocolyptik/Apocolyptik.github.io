import { names } from "./names.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const text = document.getElementById("text");
const button = document.getElementById("gen-btn");

const options = {
  names,
  age: ["child", "adolescent", "adult", "elderly"],
  species: ["earth pony", "unicorn", "pegasus", "bat pony", "kirin", "seapony", "hippogriff", "zebra", "griffon", "changeling", "reformed changeling", "draconequus", "crystal pony"],
  //colorPalette: a WIP feature
  personalityTrait: ["abrasive", "abrupt", "absentminded", "adaptable", "admirable", "adventurous", "affectionate", "aggressive,", "agreeable", "aimless", "alert", 
  "aloof", "ambitious", "amiable", "amicable", "amoral", "angry", "anxious", "apathetic", "arbitrary", "argumentative", "arrogant", "articulate", "asocial", "aspiring", 
  "assertive", "athletic", "authoritarian", 
  //B
  "barbaric", "belligerent", "benevolent", "bewildered", "big-headed", "boisterous", "bizarre", "blunt", "boastful", "boorish", "boring", "bossy", "brave", "bright", 
  "brilliant", "broad-minded", "brutal", "businesslike", 
  //C
  "calculating", "callous", "calm", "cantankerous", "capable", "captivating", "careful", "careless", "caring", "cautious", "challenging", "charismatic", "charming", 
  "cheerful", "childish", "clever", "clingy", "clumsy", "coarse", "cold", "compassionate", "competitive", "complacent", "compulsive", "conceited", "confident", "confidential", 
  "conservative", "considerate", "contradictory", "cooperative", "courageous", "courteous", "cowardly", "crafty", "cranky", "crass", "crazy", "creative", "criminal", "critical", 
  "cruel", "cultured", "cunning", "curious", "cute", "cynical", 
  //D
  "daring", "decadent", "deceitful", "decent", "deceptive", "decisive", "dedicated", "delicate", "demanding", "dependable", "dependent", "desperate", "destructive", "detached", 
  "determined", "devious", "difficult", "dignified", "diligent", "diplomatic", "disciplined", "disconcerting", "discouraging", "discourteous", "discreet", "dishonest", "disloyal", 
  "disobedient", "disorderly", "disorganized", "disputatious", "disrespectful", "disruptive", "dissolute", "dissonant", "distinctive", "distractible", "disturbing", "dogmatic", 
  "dominating", "domineering", "dramatic", "dreamy", "driving", "droll", "dry", "dull", "dutiful", "dynamic", 
  //E
  "earnest", "easily discouraged", "easygoing", "educated", "effeminate", "efficient", "egocentric", "elegant", "eloquent", "emotional", "empathetic", "encouraging", "energetic", 
  "enigmatic", "enthusiastic", "envious", "erratic", "esthetic", "excitable", "exciting", "expedient", "experimental", "extraordinary", "extravagant", "extreme", "exuberant", 
  //F
  "familial", "fanatical", "fanciful", "fearful", "fearless", "fickle", "fidgety", "fiery", "finicky", "firm", "fixed", "flexible", "flirtatious", "focused", "folksy", "foolish", 
  "forceful", "forgetful", "forgiving", "formal", "fraudulent", "friendly", "frightening", "frisky", "frivolous", "frugal", "fun-loving", "funny", "fussy", 
  //G
  "gallant", "generous", "gentle", "genuine", "glamorous", "gloomy", "graceless", "gracious", "grand", "greedy", "grim", "grumpy", "gullible", 
  //H
  "hard-working", "hardy", "harsh", "hateful", "haughty", "healthy", "hearty", "hedonistic", "helpful", "herioc", "hesitant", "honest", "honorable", "hostile", "humble", 
  "humorous", "hyperactive", "hypnotic", 
  //I
  "idealistic", "ignorant", "illiterate", "imaginative", "imitative", "impartial", "impassive", "impatient", "impersonal", "impolite", "impractical", "impressionable", 
  "impressive", "imprudent", "impulsive", "inattentive", "inconsiderate", "inconsistent", "indecisive", "independent", "indiscreet", "individualistic", "indulgent", 
  "inert", "inflexible", "inhibited", "innovative", "insecure", "insensitive", "insightful", "insincere", "insulting", "intelligent", "intense", "intolerant", "intuitive", 
  "inventive", "irrational", "irresponsible", "irritable", 
  //JKL
  "jealous", "keen", "kind", "lazy", "leaderly", "leisurely", "logical", "loving", "loyal", "lyrical", 
  //M
  "malicious", "mannerless", "materialistic", "maternal", "maticulous", "mature", "mean", "mechanical", "meddlesome", "melancholic", "mellow", "methodical", "meticulous", 
  "miserable", "misguided", "mistaken", "moderate", "modern", "modest", "monstrous", "moody", "moralistic", "morbid", "murderous", "mystical", 
  //N
  "naive", "narcissistic", "narrow-minded", "nasty", "naughty", "neglectful", "nervous", "neurotic", "neutral", "nice", "nightsighted", "nihilistic", 
  //O
  "obedient", "objective", "obnoxious", "observant", "obsessive", "obstinate", "odd", "old-fashioned", "one-dimensional", "opinionated", "opportunistic", "optimistic", "orderly", 
  "organized", "original", "outrageous", "outspoken", "over-emotional", 
  //P
  "paranoid", "passionate", "passive", "paternalistic", "patient", "patronizing", "peaceful", "pedantic", "perceptive", "a perfectionist", "persistent", "persuasive", "pessimistic", 
  "petty", "philosophical", "phlegmatic", "picky", "pioneering", "playful", "polite", "pompous", "possessive", "powerful", "power-hungry", "practical", "precise", "predatory", 
  "predictable", "prejudiced", "preoccupied", "presumptuous", "pretentious", "prim", "principled", "private", "profound", "protective", "proud", "provocative", "prudent", 
  "psychotic", "punctual", "pure", "puritanical", "purposeful", 
  //QR
  "quarrelsome", "quick-witted", "quick-tempered", "quiet", "quirky", "rational", "reactionary", "reckless", "regretful", "relaxed", "relentless", "reliable", "repentant", "repressed", 
  "resentful", "reserved", "resourceful", "respectful", "responsible", "restrained", "retiring", "reverential", "ridiculous", "rigid", "ritualistic", "romantic", "rowdy", "royal", 
  "rude", "rustic", "ruthless", 
  //S
  "sadistic", "sage", "sanctimonious", "sane", "sarcastic", "scheming", "scholarly", "scornful", "secretive", "secure", "sedentary", "self-confident", "self-disciplined", 
  "self-centered", "self-conscious", "self-critical", "self-indulgent", "selfish", "selfless", "self-sufficent", "sensible", "sensitive", "sensual", "sentimental", "seraphic", 
  "serious", "shallow", "shrewd", "shy", "silly", "sincere", "skeptical", "skillful", "sly", "smooth", "sociable", "soft", "softheaded", "solemn", "solitary", "sophisticated", 
  "sordid", "specialized", "spontaneous", "stable", "steely", "stern", "stiff", "stingy", "stoic", "straightforward", "strict", "strong", "strong-willed", "stubborn", "studious", 
  "stupid", "stylish", "suave", "subjective", "submissive", "subtle", "sullen", "superficial", "superstitious", "surly", "surprising", "suspicious", "sweet", "sympathetic", 
  //T
  "tactless", "tasteful", "tasteless", "teacherly", "tense", "thoughtful", "thoughtless", "tidy", "timid", "tolerant", "touchy", "tough", "transparent", "treacherous", 
  "troublesome", "trusting", 
  //U
  "unambitious", "unappreciative", "unassuming", "uncaring", "uncivilized", "uncooperative", "uncreative", "understanding", "undisciplined", "unfathomable", "unfriendly", 
  "ungrateful", "unimaginative", "unimpressive", "uninhibited", "unkind", "unpredictable", "unreflective", "unreliable", "unrestrained", "unruly", "unstable", "untrustworthy", 
  //VWXYZ
  "vain", "valiant", "vengeful", "venomous", "versatile", "vindictive", "vivacious", "vulgar", "vulnerable", "warmhearted", "weak-willed", "whimsical", "wise", "wishful", "witty", "youthful", "zany"],
  misc: [""],
  height: [""],
  bodyType: [""],
  cutieMark:[""],
  hair: {
    hairLength: [""],
    hairTexture: [""]
  }
};

const createRandomCreature = () => {
  return {
    names: options.age[getRandomInt(options.names.length)],
    age: options.age[getRandomInt(options.age.length)],
    species: options.species[getRandomInt(options.species.length)],
    personalityTrait: options.personalityTrait[getRandomInt(options.personalityTrait.length)]
  };
};

button.addEventListener("click", () => {
  const creature = createRandomCreature();
  text.innerText = `Your new character is called ${creature.names}. They are ${
    ["a", "e", "i", "o", "u"].includes(creature.age[0]) ? "an" : "a"
  } ${creature.age} ${creature.species}. Their personality can be described as ${creature.personalityTrait}.`;
});