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
    { question: "Quel est le plus long fleuve d'Amérique du Sud ?", options: ["Amazon", "Orénoque", "Paraná", "Magdalena"], correct: "Amazon" },
    { question: "Quel est l'élément chimique dont le symbole est O ?", options: ["Oxygène", "Or", "Ozone", "Osmium"], correct: "Oxygène" },
    { question: "Qui a peint la Joconde ?", options: ["Vincent van Gogh", "Pablo Picasso", "Léonard de Vinci", "Claude Monet"], correct: "Léonard de Vinci" },
    { question: "Quel est le plus grand océan du monde ?", options: ["Atlantique", "Indien", "Arctique", "Pacifique"], correct: "Pacifique" },
    { question: "Dans quel pays se trouve la ville de Kyoto ?", options: ["Japon", "Chine", "Corée du Sud", "Inde"], correct: "Japon" },
    { question: "Quel est le plus haut sommet du monde ?", options: ["K2", "Mont Kilimandjaro", "Everest", "Mont Blanc"], correct: "Everest" },
    { question: "En quelle année a eu lieu le premier pas de l'homme sur la Lune ?", options: ["1965", "1969", "1971", "1975"], correct: "1969" },
    { question: "Quel est le plus grand pays du monde ?", options: ["Chine", "États-Unis", "Canada", "Russie"], correct: "Russie" },
    { question: "Quel est le pays d'origine de la pizza ?", options: ["France", "Italie", "Grèce", "Espagne"], correct: "Italie" },
    { question: "Qui a écrit 'Les Misérables' ?", options: ["Émile Zola", "Victor Hugo", "Molière", "Gustave Flaubert"], correct: "Victor Hugo" },
    { question: "Quel est le plus grand désert du monde ?", options: ["Désert de Gobi", "Sahara", "Karakum", "Désert d'Atacama"], correct: "Sahara" },
    { question: "Quel est l'animal national de l'Australie ?", options: ["Kangourou", "Koala", "Émeu", "Dingo"], correct: "Kangourou" },
    { question: "Quelle est la capitale de l'Allemagne ?", options: ["Berlin", "Munich", "Hambourg", "Cologne"], correct: "Berlin" },
    { question: "Qui a écrit 'Romeo et Juliette' ?", options: ["William Shakespeare", "Molière", "Victor Hugo", "Racine"], correct: "William Shakespeare" },
    { question: "Quel est le plus grand lac d'Afrique ?", options: ["Lac Victoria", "Lac Tanganyika", "Lac Malawi", "Lac Tchad"], correct: "Lac Victoria" },
    { question: "Quel est l'animal terrestre le plus rapide ?", options: ["Guépard", "Léopard", "Lion", "Antilope"], correct: "Guépard" },
    { question: "Quel est l'élément chimique dont le symbole est Fe ?", options: ["Fer", "Fluor", "Françaisium", "Fermium"], correct: "Fer" },
    { question: "Quel est le plus long fleuve du monde ?", options: ["Nil", "Amazon", "Yangzi", "Mississippi"], correct: "Amazon" },
    { question: "En quelle année la Tour Eiffel a-t-elle été inaugurée ?", options: ["1889", "1900", "1920", "1945"], correct: "1889" },
    { question: "Quel est l'organe principal du système circulatoire ?", options: ["Cerveau", "Cœur", "Rein", "Poumon"], correct: "Cœur" },
    { question: "Quelle est la langue officielle du Brésil ?", options: ["Espagnol", "Portugais", "Anglais", "Français"], correct: "Portugais" },
    { question: "Quel est le plus grand mammifère terrestre ?", options: ["Éléphant d'Afrique", "Girafe", "Rhino", "Bison"], correct: "Éléphant d'Afrique" },
    { question: "En quelle année a eu lieu la Révolution Française ?", options: ["1776", "1789", "1799", "1804"], correct: "1789" },
    { question: "Qui a peint 'Les Nymphéas' ?", options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Paul Cézanne"], correct: "Claude Monet" },
    { question: "Quel est le premier président des États-Unis ?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correct: "George Washington" },
    { question: "Quel est le nom de la première femme dans l'espace ?", options: ["Sally Ride", "Valentina Terechkova", "Mae Jemison", "Yuri Gagarin"], correct: "Valentina Terechkova" },
    { question: "Quel est le plus petit pays du monde ?", options: ["Monaco", "Saint-Marin", "Vatican", "Malte"], correct: "Vatican" },
    { question: "Quel est le pays d'origine du sushi ?", options: ["Chine", "Corée", "Japon", "Thaïlande"], correct: "Japon" },
    { question: "Quel est le nom du premier homme à avoir marché sur la Lune ?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], correct: "Neil Armstrong" },
    { question: "Quelle est la monnaie du Royaume-Uni ?", options: ["Euro", "Livre sterling", "Dollar", "Yen"], correct: "Livre sterling" },
    { question: "Qui a découvert la pénicilline ?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Thomas Edison"], correct: "Alexander Fleming" },
    { question: "Quel est l'océan qui borde la côte est des États-Unis ?", options: ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Océan Arctique"], correct: "Océan Atlantique" },
    { question: "Quel est l'élément chimique dont le symbole est Na ?", options: ["Néon", "Natrium", "Nitrate", "Nickel"], correct: "Natrium" },
    { question: "Quel est le pays le plus peuplé au monde ?", options: ["Inde", "Chine", "États-Unis", "Indonésie"], correct: "Chine" },
    { question: "En quelle année a été signé le Traité de Versailles ?", options: ["1918", "1920", "1919", "1945"], correct: "1919" },
    { question: "Quel est le plus grand pays d'Afrique ?", options: ["Algérie", "Nigeria", "Afrique du Sud", "Égypte"], correct: "Algérie" },
    { question: "Quel est l'instrument de musique à cordes joué avec un archet ?", options: ["Guitare", "Piano", "Violon", "Flûte"], correct: "Violon" },
    { question: "Quel est le pays d'origine du chocolat ?", options: ["Suisse", "Belgique", "Mexique", "France"], correct: "Mexique" },
    { question: "Quelle est la capitale de l'Italie ?", options: ["Florence", "Rome", "Milan", "Naples"], correct: "Rome" },
    { question: "Qui a écrit '1984' ?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: "George Orwell" },
    { question: "Quelle est la vitesse de la lumière ?", options: ["300 000 km/s", "500 000 km/s", "100 000 km/s", "1 000 000 km/s"], correct: "300 000 km/s" },
    { question: "Dans quelle ville se trouve le Colisée ?", options: ["Athènes", "Paris", "Rome", "Madrid"], correct: "Rome" },
    { question: "Quelle est la principale source d'énergie du Soleil ?", options: ["Fission nucléaire", "Fusion nucléaire", "Électricité", "Magnetisme"], correct: "Fusion nucléaire" },
    { question: "Quel est le plus grand reptile terrestre ?", options: ["Crocodile du Nil", "Serpent python", "Iguane", "Dragon de Komodo"], correct: "Dragon de Komodo" },
    { question: "Quel est le seul continent sans serpents ?", options: ["Europe", "Antarctique", "Asie", "Amérique du Nord"], correct: "Antarctique" },
    { question: "Quel est le premier livre de la Bible ?", options: ["Genèse", "Exode", "Lévitique", "Psaumes"], correct: "Genèse" },
    { question: "Qui est le dieu grec de la guerre ?", options: ["Apollon", "Arès", "Zeus", "Poséidon"], correct: "Arès" },
    { question: "Quel est l'organe du corps humain qui produit l'insuline ?", options: ["Cœur", "Foie", "Pancréas", "Reins"], correct: "Pancréas" },
    { question: "Quel est le plus grand pays d'Amérique du Sud ?", options: ["Brésil", "Argentine", "Chili", "Colombie"], correct: "Brésil" },
    { question: "Qui a peint 'La Nuit étoilée' ?", options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Edvard Munch"], correct: "Vincent van Gogh" },
    { question: "Quel est l'élément chimique dont le symbole est H ?", options: ["Hélium", "Hydrogène", "Holmium", "Hafnium"], correct: "Hydrogène" }
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
