const quizData = [
    { question: "Quel est le plus grand océan du monde ?", options: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"], correct: "Océan Pacifique" },
    { question: "Quelle est la capitale de la France ?", options: ["Madrid", "Paris", "Berlin", "Rome"], correct: "Paris" },
    { question: "Qui a écrit 'Les Misérables' ?", options: ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Molière"], correct: "Victor Hugo" },
    { question: "Quelle planète est la plus proche du soleil ?", options: ["Terre", "Vénus", "Mars", "Mercure"], correct: "Mercure" },
    { question: "Combien y a-t-il de continents sur Terre ?", options: ["5", "6", "7", "8"], correct: "7" },
    { question: "Qui a peint la Joconde ?", options: ["Vincent van Gogh", "Claude Monet", "Léonard de Vinci", "Pablo Picasso"], correct: "Léonard de Vinci" },
    { question: "Quelle est la plus grande planète du système solaire ?", options: ["Terre", "Mars", "Jupiter", "Saturne"], correct: "Jupiter" },
    { question: "Quelle est la langue officielle du Brésil ?", options: ["Espagnol", "Anglais", "Portugais", "Français"], correct: "Portugais" },
    { question: "Qui a découvert l'Amérique ?", options: ["Christophe Colomb", "Marco Polo", "Vasco de Gama", "Ferdinand Magellan"], correct: "Christophe Colomb" },
    { question: "Quel est le symbole chimique du fer ?", options: ["Fe", "F", "Ir", "Fr"], correct: "Fe" },
    { question: "Quel est le plus long fleuve du monde ?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
    { question: "Quelle est la capitale de l'Italie ?", options: ["Milan", "Rome", "Venise", "Florence"], correct: "Rome" },
    { question: "Qui est le fondateur de Microsoft ?", options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], correct: "Bill Gates" },
    { question: "Quelle est la monnaie officielle du Japon ?", options: ["Yuan", "Won", "Yen", "Dollar"], correct: "Yen" },
    { question: "Quel est le plus petit pays du monde ?", options: ["Monaco", "Vatican", "San Marin", "Liechtenstein"], correct: "Vatican" },
    { question: "Quelle est la plus haute montagne du monde ?", options: ["Mont Everest", "K2", "Kangchenjunga", "Lhotse"], correct: "Mont Everest" },
    { question: "Quelle est la date de la prise de la Bastille ?", options: ["14 juillet 1789", "4 juillet 1776", "14 juillet 1790", "4 juillet 1789"], correct: "14 juillet 1789" },
    { question: "Quel est le plus grand désert du monde ?", options: ["Désert du Sahara", "Désert d'Arabie", "Désert de Gobi", "Désert de Kalahari"], correct: "Désert du Sahara" },
    { question: "Quelle est la capitale de l'Australie ?", options: ["Sydney", "Melbourne", "Brisbane", "Canberra"], correct: "Canberra" },
    { question: "Quel est l'élément chimique dont le symbole est O ?", options: ["Or", "Oxygène", "Osmium", "Oxydium"], correct: "Oxygène" },
    { question: "Qui a écrit 'Hamlet' ?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: "William Shakespeare" },
    { question: "Quel est le plus grand pays du monde ?", options: ["Canada", "Chine", "États-Unis", "Russie"], correct: "Russie" },
    { question: "Quel est le plus grand lac du monde ?", options: ["Lac Supérieur", "Lac Victoria", "Lac Baïkal", "Mer Caspienne"], correct: "Mer Caspienne" },
    { question: "Quelle est la capitale de l'Allemagne ?", options: ["Munich", "Hambourg", "Berlin", "Francfort"], correct: "Berlin" },
    { question: "Qui a inventé l'ampoule électrique ?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Marie Curie"], correct: "Thomas Edison" },
    { question: "Quelle est la langue officielle de la Chine ?", options: ["Mandarin", "Cantonais", "Anglais", "Hindi"], correct: "Mandarin" },
    { question: "Quel est le plus grand volcan du monde ?", options: ["Kilimandjaro", "Etna", "Vésuve", "Mauna Loa"], correct: "Mauna Loa" },
    { question: "Quel est le plus grand océan du monde ?", options: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"], correct: "Océan Pacifique" },
    { question: "Quelle est la monnaie officielle de la Suisse ?", options: ["Euro", "Dollar", "Franc suisse", "Livre sterling"], correct: "Franc suisse" },
    { question: "Quel est le plus grand pays d'Afrique ?", options: ["Égypte", "Afrique du Sud", "Algérie", "Nigeria"], correct: "Algérie" },
    { question: "Qui a écrit 'Le Petit Prince' ?", options: ["J.K. Rowling", "Antoine de Saint-Exupéry", "Victor Hugo", "Gabriel Garcia Marquez"], correct: "Antoine de Saint-Exupéry" },
    { question: "Quelle est la capitale du Canada ?", options: ["Toronto", "Vancouver", "Montréal", "Ottawa"], correct: "Ottawa" },
    { question: "Quel est le plus grand pays d'Asie ?", options: ["Chine", "Inde", "Indonésie", "Japon"], correct: "Chine" },
    { question: "Quelle est la capitale de l'Espagne ?", options: ["Barcelone", "Madrid", "Séville", "Valence"], correct: "Madrid" },
    { question: "Quel est le plus grand animal terrestre ?", options: ["Éléphant d'Afrique", "Giraffe", "Rhinocéros", "Hippopotame"], correct: "Éléphant d'Afrique" },
    { question: "Quelle est la plus grande île du monde ?", options: ["Bornéo", "Nouvelle-Guinée", "Groenland", "Madagascar"], correct: "Groenland" },
    { question: "Quelle est la capitale de la Russie ?", options: ["Saint-Pétersbourg", "Moscou", "Kazan", "Novossibirsk"], correct: "Moscou" },
    { question: "Quel est le plus petit os du corps humain ?", options: ["Le fémur", "Le tibia", "L'étrier", "Le cubitus"], correct: "L'étrier" },
    { question: "Quelle est la capitale de l'Inde ?", options: ["Mumbai", "New Delhi", "Bangalore", "Chennai"], correct: "New Delhi" },
    { question: "Quel est le plus grand continent ?", options: ["Afrique", "Amérique du Nord", "Asie", "Europe"], correct: "Asie" },
    { question: "Quelle est la capitale de la Chine ?", options: ["Shanghai", "Pékin", "Hong Kong", "Canton"], correct: "Pékin" },
    { question: "Quel est l'élément chimique dont le symbole est Au ?", options: ["Argent", "Platine", "Or", "Aluminium"], correct: "Or" },
    { question: "Quelle est la capitale du Brésil ?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: "Brasília" },
    { question: "Quel est le plus grand désert du monde ?", options: ["Désert du Sahara", "Désert de Gobi", "Désert de Kalahari", "Désert d'Arabie"], correct: "Désert du Sahara" },
    { question: "Quelle est la capitale de l'Égypte ?", options: ["Alexandrie", "Le Caire", "Gizeh", "Louqsor"], correct: "Le Caire" },
    { question: "Qui a écrit 'Don Quichotte' ?", options: ["Miguel de Cervantes", "Gabriel Garcia Marquez", "Pablo Neruda", "Jorge Luis Borges"], correct: "Miguel de Cervantes" },
    { question: "Quelle est la capitale de la Grèce ?", options: ["Athènes", "Thessalonique", "Patras", "Héraklion"], correct: "Athènes" },
    { question: "Quel est le plus long fleuve d'Amérique du Sud ?", options: ["Amazon", "Orénoque", "Paraná", "Magdalena"], correct: "Amazon" }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.options) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[letter]}">
                    ${currentQuestion.options[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} sur ${quizData.length} correct`;
}

const quiz = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();

submitButton.addEventListener('click', showResults);
