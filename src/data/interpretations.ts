export type CardInterpretation = {
	name: string;
	upright: string;
	reversed: string;
	keywords: string[];
};

// Major Arcana (index 0–21)
export const majorArcana: CardInterpretation[] = [
	{
		name: 'The Fool',
		upright:
			'New beginnings, spontaneity, and a free spirit. A leap of faith into the unknown. Trust the journey even without knowing the destination.',
		reversed:
			'Recklessness, risk-taking without thought, or holding back out of fear. Naivety leading to poor choices.',
		keywords: ['beginnings', 'innocence', 'spontaneity', 'free spirit'],
	},
	{
		name: 'The Magician',
		upright:
			'Manifestation, resourcefulness, and willpower. You have all the tools you need. Channel your focus and make it happen.',
		reversed:
			'Manipulation, poor planning, or untapped talents. Trickery and illusions. Potential wasted through lack of direction.',
		keywords: ['willpower', 'creation', 'manifestation', 'resourcefulness'],
	},
	{
		name: 'The High Priestess',
		upright:
			'Intuition, sacred knowledge, and the subconscious mind. Trust your inner voice. Mysteries are revealing themselves.',
		reversed:
			'Secrets, withdrawal, or ignoring your intuition. Information is being hidden. Disconnect from your inner self.',
		keywords: ['intuition', 'mystery', 'subconscious', 'inner voice'],
	},
	{
		name: 'The Empress',
		upright:
			'Abundance, nurturing, and fertility. Nature, beauty, and creative expression are flowing. A time of growth and comfort.',
		reversed:
			'Creative block, dependence on others, or neglecting self-care. Smothering energy. Disconnection from nature.',
		keywords: ['abundance', 'nurturing', 'fertility', 'nature'],
	},
	{
		name: 'The Emperor',
		upright:
			'Authority, structure, and stability. A solid foundation built through discipline. Leadership and control over your domain.',
		reversed:
			'Tyranny, rigidity, or lack of discipline. Domination and inflexibility. Authority misused or absent.',
		keywords: ['authority', 'structure', 'control', 'stability'],
	},
	{
		name: 'The Hierophant',
		upright:
			'Tradition, conformity, and spiritual wisdom. Seeking guidance from established institutions or mentors. Shared beliefs.',
		reversed:
			'Rebellion, subversiveness, or challenging the status quo. Personal beliefs over doctrine. Breaking free from convention.',
		keywords: ['tradition', 'conformity', 'wisdom', 'spiritual guidance'],
	},
	{
		name: 'The Lovers',
		upright:
			'Love, harmony, and relationships. A meaningful connection or choice. Alignment of values and mutual attraction.',
		reversed:
			'Disharmony, imbalance, or misalignment of values. A difficult choice. Self-love needed before union with another.',
		keywords: ['love', 'harmony', 'relationships', 'choices'],
	},
	{
		name: 'The Chariot',
		upright:
			'Determination, willpower, and triumph. Overcoming obstacles through confidence and control. Victory through focus.',
		reversed:
			'Lack of direction, aggression, or feeling powerless. Obstacles overwhelming you. Loss of control.',
		keywords: ['determination', 'willpower', 'triumph', 'control'],
	},
	{
		name: 'Strength',
		upright:
			'Inner strength, courage, and patience. Gentle power over brute force. Compassion and quiet confidence tame the wild.',
		reversed:
			'Self-doubt, weakness, or raw emotion unchecked. Insecurity. Lacking the courage to face challenges.',
		keywords: ['courage', 'patience', 'inner strength', 'compassion'],
	},
	{
		name: 'The Hermit',
		upright:
			'Soul-searching, introspection, and inner guidance. A period of solitude for deeper understanding. The answers are within.',
		reversed:
			'Isolation, loneliness, or withdrawal. Refusing guidance. Lost in darkness without your inner light.',
		keywords: ['introspection', 'solitude', 'guidance', 'soul-searching'],
	},
	{
		name: 'Wheel of Fortune',
		upright:
			'Change, cycles, and destiny. The wheel turns — luck and fate are in motion. Embrace the ups and downs.',
		reversed:
			'Bad luck, resistance to change, or broken cycles. Fighting against the natural flow. External forces disrupting plans.',
		keywords: ['change', 'cycles', 'fate', 'turning point'],
	},
	{
		name: 'Justice',
		upright:
			'Fairness, truth, and cause and effect. Accountability and balanced judgment. The truth will come to light.',
		reversed:
			'Unfairness, dishonesty, or lack of accountability. Avoiding consequences. A biased or unjust outcome.',
		keywords: ['fairness', 'truth', 'accountability', 'balance'],
	},
	{
		name: 'The Hanged Man',
		upright:
			'Surrender, letting go, and new perspectives. Pause and see the world differently. Sacrifice leads to greater wisdom.',
		reversed:
			'Stalling, resistance, or indecision. Refusing to let go. Martyrdom without purpose.',
		keywords: ['surrender', 'perspective', 'letting go', 'pause'],
	},
	{
		name: 'Death',
		upright:
			'Endings, transformation, and transition. Something must end for the new to begin. Profound change is underway.',
		reversed:
			'Resistance to change, stagnation, or fear of endings. Clinging to what no longer serves you.',
		keywords: ['transformation', 'endings', 'transition', 'change'],
	},
	{
		name: 'Temperance',
		upright:
			'Balance, moderation, and patience. Blending opposites into harmony. Finding the middle path brings peace.',
		reversed:
			'Imbalance, excess, or lack of long-term vision. Extremes and impatience. Losing your sense of calm.',
		keywords: ['balance', 'moderation', 'patience', 'harmony'],
	},
	{
		name: 'The Devil',
		upright:
			'Shadow self, attachment, and bondage. Unhealthy patterns or addictions holding you captive. Awareness is the first step to freedom.',
		reversed:
			'Release, breaking free, or reclaiming power. Detaching from toxic situations. The chains were always unlocked.',
		keywords: ['shadow', 'attachment', 'bondage', 'temptation'],
	},
	{
		name: 'The Tower',
		upright:
			'Sudden upheaval, chaos, and revelation. Structures built on false foundations crumble. Destruction clears the way for truth.',
		reversed:
			'Averting disaster, fear of change, or delaying the inevitable. The tower shakes but hasn\'t fallen yet.',
		keywords: ['upheaval', 'chaos', 'revelation', 'sudden change'],
	},
	{
		name: 'The Star',
		upright:
			'Hope, faith, and renewal. After the storm, the stars appear. Inspiration and serenity guide you forward.',
		reversed:
			'Despair, disconnection, or lack of faith. Feeling lost without hope. The light is there but you can\'t see it yet.',
		keywords: ['hope', 'faith', 'renewal', 'inspiration'],
	},
	{
		name: 'The Moon',
		upright:
			'Illusion, fear, and the subconscious. Things are not as they seem. Navigate through uncertainty with intuition.',
		reversed:
			'Release of fear, clarity emerging, or repressed emotions surfacing. The fog is lifting.',
		keywords: ['illusion', 'fear', 'subconscious', 'uncertainty'],
	},
	{
		name: 'The Sun',
		upright:
			'Joy, success, and vitality. Warmth and positivity radiate. A time of clarity, celebration, and childlike happiness.',
		reversed:
			'Temporary sadness, lack of clarity, or overly optimistic. The sun is behind clouds but still shining.',
		keywords: ['joy', 'success', 'vitality', 'positivity'],
	},
	{
		name: 'Judgement',
		upright:
			'Reflection, reckoning, and awakening. A call to rise up and embrace your higher purpose. Evaluate your past with honesty.',
		reversed:
			'Self-doubt, refusal of self-examination, or ignoring the call. Avoiding the inner reckoning.',
		keywords: ['reflection', 'reckoning', 'awakening', 'purpose'],
	},
	{
		name: 'The World',
		upright:
			'Completion, accomplishment, and wholeness. A cycle fulfilled. Integration and celebration of all you\'ve achieved.',
		reversed:
			'Incompletion, shortcuts, or delays. So close to the finish line but something holds you back.',
		keywords: ['completion', 'wholeness', 'accomplishment', 'fulfillment'],
	},
];

// Minor Arcana — keyed by "suit-value" e.g. "wands-Ace"
export const minorArcana: Record<string, CardInterpretation> = {
	// === WANDS ===
	'wands-Ace': {
		name: 'Ace of Wands',
		upright: 'Inspiration, new opportunities, growth, and potential. A spark of creative energy ignites.',
		reversed: 'Delays, lack of motivation, or missed opportunities. The spark fizzles before catching.',
		keywords: ['inspiration', 'potential', 'creation', 'new venture'],
	},
	'wands-2': {
		name: 'Two of Wands',
		upright: 'Planning, future vision, and decisions. The world is in your hands — choose your path.',
		reversed: 'Fear of the unknown, lack of planning, or playing it too safe.',
		keywords: ['planning', 'decisions', 'discovery', 'vision'],
	},
	'wands-3': {
		name: 'Three of Wands',
		upright: 'Expansion, foresight, and overseas opportunities. Your plans are taking shape on the horizon.',
		reversed: 'Obstacles to growth, delays in plans, or frustration with progress.',
		keywords: ['expansion', 'foresight', 'progress', 'exploration'],
	},
	'wands-4': {
		name: 'Four of Wands',
		upright: 'Celebration, harmony, and homecoming. A milestone reached. Joy shared with others.',
		reversed: 'Lack of harmony, transition, or feeling unwelcome. Celebration postponed.',
		keywords: ['celebration', 'harmony', 'homecoming', 'community'],
	},
	'wands-5': {
		name: 'Five of Wands',
		upright: 'Conflict, competition, and tension. Clashing egos and differing opinions. Healthy rivalry.',
		reversed: 'Avoiding conflict, inner tension, or resolution of disputes.',
		keywords: ['conflict', 'competition', 'tension', 'struggle'],
	},
	'wands-6': {
		name: 'Six of Wands',
		upright: 'Victory, recognition, and public success. Your efforts are celebrated. Confidence earned.',
		reversed: 'Ego, fall from grace, or lack of recognition. Hollow victory.',
		keywords: ['victory', 'recognition', 'success', 'pride'],
	},
	'wands-7': {
		name: 'Seven of Wands',
		upright: 'Perseverance, defending your position, and standing your ground. You have the high ground.',
		reversed: 'Giving up, overwhelmed, or feeling besieged. Too many battles at once.',
		keywords: ['perseverance', 'defense', 'courage', 'standing firm'],
	},
	'wands-8': {
		name: 'Eight of Wands',
		upright: 'Swift action, movement, and rapid progress. Things are accelerating. Messages incoming.',
		reversed: 'Delays, frustration, or scattered energy. Waiting for things to land.',
		keywords: ['speed', 'movement', 'progress', 'momentum'],
	},
	'wands-9': {
		name: 'Nine of Wands',
		upright: 'Resilience, persistence, and last stand. Battered but not broken. One more push.',
		reversed: 'Exhaustion, paranoia, or giving up too soon. The weight is too much.',
		keywords: ['resilience', 'persistence', 'courage', 'endurance'],
	},
	'wands-10': {
		name: 'Ten of Wands',
		upright: 'Burden, responsibility, and hard work. Carrying too much. Delegate or set something down.',
		reversed: 'Release of burdens, learning to delegate, or avoiding responsibility.',
		keywords: ['burden', 'responsibility', 'overwork', 'stress'],
	},
	'wands-Page': {
		name: 'Page of Wands',
		upright: 'Enthusiasm, exploration, and free spirit. A new creative venture or message of inspiration.',
		reversed: 'Lack of direction, procrastination, or a hasty decision.',
		keywords: ['enthusiasm', 'exploration', 'discovery', 'free spirit'],
	},
	'wands-Knight': {
		name: 'Knight of Wands',
		upright: 'Energy, passion, and adventure. Charging forward with confidence. Bold action.',
		reversed: 'Impulsiveness, recklessness, or delays. Passion without direction.',
		keywords: ['energy', 'passion', 'adventure', 'action'],
	},
	'wands-Queen': {
		name: 'Queen of Wands',
		upright: 'Courage, confidence, and determination. Warm, vibrant, and socially magnetic. Lead with fire.',
		reversed: 'Selfishness, jealousy, or demanding nature. Confidence turned to arrogance.',
		keywords: ['courage', 'confidence', 'warmth', 'determination'],
	},
	'wands-King': {
		name: 'King of Wands',
		upright: 'Leadership, vision, and entrepreneurial spirit. A natural leader who inspires others.',
		reversed: 'Impulsiveness, ruthlessness, or high expectations. Tyrannical leadership.',
		keywords: ['leadership', 'vision', 'boldness', 'charisma'],
	},
	// === CUPS ===
	'cups-Ace': {
		name: 'Ace of Cups',
		upright: 'New love, compassion, and emotional awakening. The heart overflows with feeling.',
		reversed: 'Emotional loss, blocked feelings, or emptiness. The cup is turned inward.',
		keywords: ['love', 'compassion', 'emotion', 'new feelings'],
	},
	'cups-2': {
		name: 'Two of Cups',
		upright: 'Partnership, unity, and mutual attraction. A deep connection between two souls.',
		reversed: 'Imbalance in a relationship, breakup, or lack of harmony.',
		keywords: ['partnership', 'unity', 'connection', 'attraction'],
	},
	'cups-3': {
		name: 'Three of Cups',
		upright: 'Celebration, friendship, and community. Joyful gatherings and shared happiness.',
		reversed: 'Overindulgence, gossip, or isolation from friends.',
		keywords: ['celebration', 'friendship', 'community', 'joy'],
	},
	'cups-4': {
		name: 'Four of Cups',
		upright: 'Apathy, contemplation, and disconnection. Lost in thought, missing what is offered.',
		reversed: 'Awareness, acceptance, or choosing to engage. Seeing the opportunity at last.',
		keywords: ['apathy', 'contemplation', 'reevaluation', 'discontent'],
	},
	'cups-5': {
		name: 'Five of Cups',
		upright: 'Loss, grief, and regret. Focusing on what was spilled, not what remains standing.',
		reversed: 'Acceptance, moving on, or finding peace after loss. Turning around to see what\'s left.',
		keywords: ['loss', 'grief', 'regret', 'mourning'],
	},
	'cups-6': {
		name: 'Six of Cups',
		upright: 'Nostalgia, childhood memories, and innocence. A gift from the past. Simple joys.',
		reversed: 'Living in the past, unrealistic memories, or stuck in nostalgia.',
		keywords: ['nostalgia', 'innocence', 'memories', 'reunion'],
	},
	'cups-7': {
		name: 'Seven of Cups',
		upright: 'Fantasy, illusion, and wishful thinking. Many choices but not all are real. Discernment needed.',
		reversed: 'Clarity, focus, or making a choice. Cutting through the illusions.',
		keywords: ['fantasy', 'illusion', 'choices', 'daydreaming'],
	},
	'cups-8': {
		name: 'Eight of Cups',
		upright: 'Walking away, disillusionment, and seeking deeper meaning. Leaving behind what no longer fulfills.',
		reversed: 'Fear of change, clinging, or aimless drifting. Unable to leave.',
		keywords: ['departure', 'disillusionment', 'seeking', 'letting go'],
	},
	'cups-9': {
		name: 'Nine of Cups',
		upright: 'Contentment, satisfaction, and wishes fulfilled. The wish card. Emotional abundance.',
		reversed: 'Dissatisfaction, materialism, or unfulfilled wishes. Wanting more despite having enough.',
		keywords: ['contentment', 'satisfaction', 'wishes', 'gratitude'],
	},
	'cups-10': {
		name: 'Ten of Cups',
		upright: 'Harmony, family, and emotional fulfillment. The happy ending. Love in its fullest form.',
		reversed: 'Broken family, disharmony, or misaligned values in relationships.',
		keywords: ['harmony', 'family', 'fulfillment', 'happiness'],
	},
	'cups-Page': {
		name: 'Page of Cups',
		upright: 'Creative opportunity, intuitive message, and curiosity. A dreamer with a gentle heart.',
		reversed: 'Emotional immaturity, creative block, or escapism.',
		keywords: ['creativity', 'intuition', 'curiosity', 'sensitivity'],
	},
	'cups-Knight': {
		name: 'Knight of Cups',
		upright: 'Romance, charm, and following the heart. A proposal or invitation guided by emotion.',
		reversed: 'Moodiness, unrealistic expectations, or jealousy. Charm without substance.',
		keywords: ['romance', 'charm', 'imagination', 'beauty'],
	},
	'cups-Queen': {
		name: 'Queen of Cups',
		upright: 'Compassion, calm, and emotional security. Deeply intuitive and nurturing. Trust your feelings.',
		reversed: 'Emotional insecurity, codependency, or martyrdom. Overwhelmed by feelings.',
		keywords: ['compassion', 'calm', 'intuition', 'nurturing'],
	},
	'cups-King': {
		name: 'King of Cups',
		upright: 'Emotional balance, diplomacy, and generosity. Mastery over feelings. Wise and compassionate.',
		reversed: 'Emotional manipulation, moodiness, or volatility. Feelings used as weapons.',
		keywords: ['balance', 'diplomacy', 'generosity', 'wisdom'],
	},
	// === SWORDS ===
	'swords-Ace': {
		name: 'Ace of Swords',
		upright: 'Clarity, breakthrough, and new ideas. A sharp mind cuts through confusion. Truth revealed.',
		reversed: 'Confusion, miscommunication, or clouded judgment. The blade is dull.',
		keywords: ['clarity', 'breakthrough', 'truth', 'intellect'],
	},
	'swords-2': {
		name: 'Two of Swords',
		upright: 'Indecision, stalemate, and avoidance. Blindfolded to the truth. A choice must be made.',
		reversed: 'Information overload, lesser of two evils, or breaking a deadlock.',
		keywords: ['indecision', 'stalemate', 'avoidance', 'blocked emotions'],
	},
	'swords-3': {
		name: 'Three of Swords',
		upright: 'Heartbreak, sorrow, and grief. Painful truth pierces the heart. Necessary suffering.',
		reversed: 'Recovery, forgiveness, or releasing pain. The wounds begin to heal.',
		keywords: ['heartbreak', 'sorrow', 'grief', 'painful truth'],
	},
	'swords-4': {
		name: 'Four of Swords',
		upright: 'Rest, recovery, and contemplation. A necessary retreat. Recharge before the next battle.',
		reversed: 'Restlessness, burnout, or forced back into action too soon.',
		keywords: ['rest', 'recovery', 'contemplation', 'retreat'],
	},
	'swords-5': {
		name: 'Five of Swords',
		upright: 'Conflict, defeat, and winning at all costs. A hollow victory. Choose your battles wisely.',
		reversed: 'Reconciliation, making amends, or moving past conflict.',
		keywords: ['conflict', 'defeat', 'betrayal', 'loss'],
	},
	'swords-6': {
		name: 'Six of Swords',
		upright: 'Transition, moving on, and leaving trouble behind. Calmer waters ahead. A necessary journey.',
		reversed: 'Stuck, unable to move on, or unresolved baggage. The boat won\'t sail.',
		keywords: ['transition', 'moving on', 'journey', 'healing'],
	},
	'swords-7': {
		name: 'Seven of Swords',
		upright: 'Deception, strategy, and stealth. Getting away with something. Cunning over confrontation.',
		reversed: 'Coming clean, conscience, or getting caught. The truth surfaces.',
		keywords: ['deception', 'strategy', 'stealth', 'cunning'],
	},
	'swords-8': {
		name: 'Eight of Swords',
		upright: 'Restriction, imprisonment, and victim mentality. Trapped by your own thoughts. The bindings are loose.',
		reversed: 'Freedom, release, or new perspective. Realizing the cage was open all along.',
		keywords: ['restriction', 'imprisonment', 'helplessness', 'self-limiting'],
	},
	'swords-9': {
		name: 'Nine of Swords',
		upright: 'Anxiety, nightmares, and despair. The mind torments itself in the dark. Worry spirals.',
		reversed: 'Hope, reaching out, or overcoming anxiety. Dawn approaches.',
		keywords: ['anxiety', 'nightmares', 'despair', 'worry'],
	},
	'swords-10': {
		name: 'Ten of Swords',
		upright: 'Painful ending, rock bottom, and betrayal. The worst is over. From here, you can only rise.',
		reversed: 'Recovery, regeneration, or resisting an inevitable end.',
		keywords: ['ending', 'rock bottom', 'betrayal', 'finality'],
	},
	'swords-Page': {
		name: 'Page of Swords',
		upright: 'Curiosity, mental agility, and new ideas. A sharp young mind eager to learn and communicate.',
		reversed: 'Gossip, haste, or all talk and no action. Scattered thinking.',
		keywords: ['curiosity', 'intellect', 'communication', 'vigilance'],
	},
	'swords-Knight': {
		name: 'Knight of Swords',
		upright: 'Ambition, fast action, and determination. Charging into battle with a sharp mind. Unstoppable.',
		reversed: 'Impulsiveness, burnout, or no direction. Speed without purpose.',
		keywords: ['ambition', 'action', 'determination', 'speed'],
	},
	'swords-Queen': {
		name: 'Queen of Swords',
		upright: 'Clear thinking, independence, and direct communication. Perceptive and unbiased judgment.',
		reversed: 'Cold-hearted, bitter, or overly critical. Intellect without empathy.',
		keywords: ['clarity', 'independence', 'perception', 'honesty'],
	},
	'swords-King': {
		name: 'King of Swords',
		upright: 'Intellectual power, authority, and truth. A fair and analytical leader. Decisions made with logic.',
		reversed: 'Manipulation, tyranny, or abuse of power. Logic weaponized.',
		keywords: ['authority', 'intellect', 'truth', 'logic'],
	},
	// === PENTACLES ===
	'pentacles-Ace': {
		name: 'Ace of Pentacles',
		upright: 'New financial opportunity, prosperity, and manifestation. A seed of material abundance planted.',
		reversed: 'Missed opportunity, lack of planning, or financial instability.',
		keywords: ['opportunity', 'prosperity', 'manifestation', 'abundance'],
	},
	'pentacles-2': {
		name: 'Two of Pentacles',
		upright: 'Balance, adaptability, and juggling priorities. Keeping multiple things in motion with grace.',
		reversed: 'Overwhelm, disorganization, or financial imbalance. Dropping the ball.',
		keywords: ['balance', 'adaptability', 'juggling', 'flexibility'],
	},
	'pentacles-3': {
		name: 'Three of Pentacles',
		upright: 'Teamwork, collaboration, and skilled work. Building something meaningful together.',
		reversed: 'Lack of teamwork, poor quality, or disharmony in a group effort.',
		keywords: ['teamwork', 'collaboration', 'craftsmanship', 'learning'],
	},
	'pentacles-4': {
		name: 'Four of Pentacles',
		upright: 'Security, control, and conservation. Holding tight to what you have. Stability through caution.',
		reversed: 'Greed, materialism, or fear of loss. Hoarding blocks the flow.',
		keywords: ['security', 'control', 'conservation', 'possessiveness'],
	},
	'pentacles-5': {
		name: 'Five of Pentacles',
		upright: 'Financial loss, poverty, and isolation. Hard times and feeling left out in the cold.',
		reversed: 'Recovery, finding help, or spiritual poverty ending. The door to warmth is open.',
		keywords: ['hardship', 'loss', 'isolation', 'worry'],
	},
	'pentacles-6': {
		name: 'Six of Pentacles',
		upright: 'Generosity, charity, and sharing wealth. Giving and receiving in balance.',
		reversed: 'Strings attached, debt, or one-sided generosity. Power imbalance in giving.',
		keywords: ['generosity', 'charity', 'sharing', 'balance'],
	},
	'pentacles-7': {
		name: 'Seven of Pentacles',
		upright: 'Patience, long-term investment, and assessment. Waiting for the harvest. Evaluating progress.',
		reversed: 'Impatience, poor returns, or wasted effort. The crop isn\'t growing.',
		keywords: ['patience', 'investment', 'assessment', 'perseverance'],
	},
	'pentacles-8': {
		name: 'Eight of Pentacles',
		upright: 'Diligence, mastery, and skill development. Dedicated practice. Crafting your expertise.',
		reversed: 'Perfectionism, lack of focus, or uninspired work. Going through the motions.',
		keywords: ['diligence', 'mastery', 'skill', 'dedication'],
	},
	'pentacles-9': {
		name: 'Nine of Pentacles',
		upright: 'Luxury, self-sufficiency, and financial independence. Enjoying the fruits of your labor.',
		reversed: 'Over-investment in work, financial setback, or superficial success.',
		keywords: ['luxury', 'independence', 'abundance', 'self-worth'],
	},
	'pentacles-10': {
		name: 'Ten of Pentacles',
		upright: 'Wealth, inheritance, and family legacy. Long-term success and generational abundance.',
		reversed: 'Financial failure, family disputes, or loss of legacy.',
		keywords: ['wealth', 'legacy', 'family', 'inheritance'],
	},
	'pentacles-Page': {
		name: 'Page of Pentacles',
		upright: 'Ambition, desire to learn, and new financial venture. A studious and grounded young energy.',
		reversed: 'Lack of progress, procrastination, or unrealistic goals.',
		keywords: ['ambition', 'learning', 'opportunity', 'diligence'],
	},
	'pentacles-Knight': {
		name: 'Knight of Pentacles',
		upright: 'Hard work, routine, and responsibility. Slow and steady wins the race. Reliable and thorough.',
		reversed: 'Boredom, stagnation, or laziness. Stuck in a rut.',
		keywords: ['hard work', 'routine', 'responsibility', 'patience'],
	},
	'pentacles-Queen': {
		name: 'Queen of Pentacles',
		upright: 'Nurturing, practical, and financially secure. A warm provider who creates abundance with care.',
		reversed: 'Work-life imbalance, smothering, or financial insecurity.',
		keywords: ['nurturing', 'practical', 'abundance', 'security'],
	},
	'pentacles-King': {
		name: 'King of Pentacles',
		upright: 'Wealth, business acumen, and discipline. A master of the material world. Generous and stable.',
		reversed: 'Greed, indulgence, or poor financial management. Wealth without wisdom.',
		keywords: ['wealth', 'business', 'discipline', 'stability'],
	},
};

export function getInterpretation(
	arcana: 'major' | 'minor',
	key: number | string,
): CardInterpretation | undefined {
	if (arcana === 'major') {
		return majorArcana[key as number];
	}

	return minorArcana[key as string];
}

export function getAllCards(): Array<{
	arcana: 'major' | 'minor';
	key: string | number;
	interpretation: CardInterpretation;
}> {
	const cards: Array<{
		arcana: 'major' | 'minor';
		key: string | number;
		interpretation: CardInterpretation;
	}> = [];

	for (const [i, interp] of majorArcana.entries()) {
		cards.push({arcana: 'major', key: i, interpretation: interp});
	}

	for (const [key, interp] of Object.entries(minorArcana)) {
		cards.push({arcana: 'minor', key, interpretation: interp});
	}

	return cards;
}
