let dados = [
    {
        titulo: "David Fincher",
        descricao: "David Fincher é um renomado cineasta americano conhecido por suas narrativas sombrias e psicológicas. Seu trabalho é caracterizado por um estilo visual meticuloso e uma abordagem intensa aos temas de suspense e crime. Entre seus filmes mais aclamados estão 'Clube da Luta', um comentário sobre a masculinidade moderna, 'Seven', um thriller sobre um serial killer, e 'A Rede Social', que explora a ascensão e os conflitos por trás do Facebook.",
        link: "https://pt.wikipedia.org/wiki/David_Fincher",
        tags: "Clube da Luta, Seven, A Rede Social, Zodíaco, Garota Exemplar, O Curioso Caso de Benjamin Button"
    },
    {
        titulo: "Jean-Luc Godard",
        descricao: "Jean-Luc Godard foi um dos pioneiros da Nouvelle Vague francesa, um movimento cinematográfico que revolucionou o cinema com suas técnicas inovadoras e narrativas não convencionais. Seus filmes, como 'Acossado', um marco do cinema moderno, e 'O Desprezo', exploram temas de alienação e crítica social com uma abordagem estilística única.",
        link: "https://pt.wikipedia.org/wiki/Jean-Luc_Godard",
        tags: "Acossado, O Desprezo, Alphaville, Pierrot Le Fou, O Demônio das Onze Horas"
    },
    {
        titulo: "Christopher Nolan",
        descricao: "Christopher Nolan é um cineasta britânico renomado por suas histórias complexas e visuais inovadores. Conhecido por suas narrativas não lineares e a exploração de temas como o tempo e a realidade, Nolan é aclamado por filmes como 'A Origem', que mistura sonhos e realidade, e 'O Cavaleiro das Trevas', um icônico thriller sobre o Batman. 'Interestelar' e 'Dunkirk' demonstram sua habilidade em criar experiências imersivas e emocionantes.",
        link: "https://pt.wikipedia.org/wiki/Christopher_Nolan",
        tags: "A Origem, O Cavaleiro das Trevas, Interestelar, Dunkirk, O Grande Truque, Tenet, Amnésia"
    },
    {
        titulo: "Denis Villeneuve",
        descricao: "Denis Villeneuve é um diretor canadense conhecido por suas histórias visuais impressionantes e narrativas profundas. Seus filmes, como 'A Chegada', que explora a comunicação com extraterrestres, e 'Blade Runner 2049', uma sequência do clássico de ficção científica, são elogiados por seu estilo estético e complexidade emocional. 'Duna' e 'Sicario' também destacam seu talento para criar tensionantes e envolventes experiências cinematográficas.",
        link: "https://pt.wikipedia.org/wiki/Denis_Villeneuve",
        tags: "A Chegada, Blade Runner 2049, Duna, Sicario, Incêndios"
    },
    {
        titulo: "James Gunn",
        descricao: "James Gunn é um cineasta americano conhecido por sua abordagem irreverente e humorística em filmes de super-heróis. Ele ganhou destaque com 'Guardiões da Galáxia', que combinou humor, ação e uma trilha sonora memorável, e 'O Esquadrão Suicida', que trouxe uma nova perspectiva ao gênero. Seus trabalhos são marcados por um estilo único e personagens excêntricos.",
        link: "https://pt.wikipedia.org/wiki/James_Gunn",
        tags: "Guardiões da Galáxia, O Esquadrão Suicida, Seres Rastejantes"
    },
    {
        titulo: "Spike Jonze",
        descricao: "Spike Jonze é um cineasta e produtor americano conhecido por sua visão criativa e inovadora. Seus filmes, como 'Quero Ser John Malkovich', exploram temas de identidade e surrealismo com um toque de humor, enquanto 'Ela' oferece uma visão sensível e futurista sobre o amor e a tecnologia. Jonze é aclamado por sua habilidade em criar experiências cinematográficas únicas e provocativas.",
        link: "https://pt.wikipedia.org/wiki/Spike_Jonze",
        tags: "Quero Ser John Malkovich, Ela, Adaptação"
    },
    {
        titulo: "Sofia Coppola",
        descricao: "Sofia Coppola é uma diretora americana conhecida por suas histórias intimistas e atmosféricas. Seus filmes frequentemente exploram a experiência feminina e o sentimento de isolamento. 'Encontros e Desencontros' é um exemplo de seu estilo visual e narrativo delicado, enquanto 'Maria Antonieta' oferece uma visão única e estilizada da vida da famosa rainha. Coppola é aclamada por sua habilidade em capturar momentos de introspecção e beleza.",
        link: "https://pt.wikipedia.org/wiki/Sofia_Coppola",
        tags: "Encontros e Desencontros, Maria Antonieta, As Virgens Suicidas"
    },
    {
        titulo: "Bong Joon-ho",
        descricao: "Bong Joon-ho é um cineasta sul-coreano amplamente reconhecido por suas narrativas socialmente conscientes e seu estilo visual distinto. 'Parasita', vencedor do Oscar, é um exemplo de sua habilidade em misturar drama e comédia enquanto critica as desigualdades sociais. Outros filmes notáveis, como 'O Hospedeiro' e 'Expresso do Amanhã', mostram sua capacidade de explorar temas complexos através de gêneros variados.",
        link: "https://pt.wikipedia.org/wiki/Bong_Joon-ho",
        tags: "Parasita, O Hospedeiro, Expresso do Amanhã, Memórias de um Assassino, Okja"
    },
    {
        titulo: "Greta Gerwig",
        descricao: "Greta Gerwig é uma cineasta e atriz americana conhecida por seus filmes que exploram a experiência feminina com profundidade e autenticidade. 'Lady Bird' e 'Adoráveis Mulheres' são exemplos de seu talento para criar narrativas envolventes e personagens complexos. Gerwig é elogiada por seu olhar sensível e sua capacidade de capturar a essência das relações humanas.",
        link: "https://pt.wikipedia.org/wiki/Greta_Gerwig",
        tags: "Lady Bird, Adoráveis Mulheres, Barbie, Frances Ha"
    },
    {
        titulo: "Taika Waititi",
        descricao: "Taika Waititi é um cineasta neozelandês conhecido por seu humor irreverente e estilo único. 'Thor: Ragnarok' trouxe uma nova abordagem ao universo Marvel com sua combinação de comédia e ação, enquanto 'Jojo Rabbit' usa sátira para explorar temas de guerra e intolerância. Waititi é aclamado por sua habilidade em criar filmes que são ao mesmo tempo engraçados e profundos.",
        link: "https://pt.wikipedia.org/wiki/Taika_Waititi",
        tags: "Thor: Ragnarok, Jojo Rabbit, O Que Fazemos nas Sombras"
    },
    {
        titulo: "Jordan Peele",
        descricao: "Jordan Peele é um diretor e roteirista americano que revitalizou o gênero de terror com uma abordagem crítica e socialmente consciente. 'Corra!' e 'Nós' são exemplos de seu talento para usar o terror como uma metáfora para questões sociais e raciais, enquanto 'Nope' continua a explorar temas provocativos com um estilo inovador.",
        link: "https://pt.wikipedia.org/wiki/Jordan_Peele",
        tags: "Corra!, Nós, Nope"
    },
    {
        titulo: "Guillermo del Toro",
        descricao: "Guillermo del Toro é um cineasta mexicano conhecido por sua habilidade em criar mundos fantásticos e suas histórias ricas em detalhes. 'O Labirinto do Fauno' e 'A Forma da Água' são exemplos de sua capacidade de combinar o sobrenatural com temas humanos profundos. Del Toro é aclamado por seu estilo visual único e sua criatividade na construção de mitos e fábulas.",
        link: "https://pt.wikipedia.org/wiki/Guillermo_del_Toro",
        tags: "O Labirinto do Fauno, A Forma da Água, Hellboy, A Colina Escarlate"
    },
    {
        titulo: "Martin Scorsese",
        descricao: "Martin Scorsese é um dos diretores mais influentes e aclamados do cinema americano. Conhecido por seus dramas intensos e retratos de personagens complexos, Scorsese criou obras-primas como 'Taxi Driver', que explora a alienação urbana, e 'Os Bons Companheiros', um retrato épico do crime organizado. Seu trabalho, incluindo 'O Lobo de Wall Street' e 'O Irlandês', é marcado por uma abordagem audaciosa e uma profunda compreensão da psicologia humana.",
        link: "https://pt.wikipedia.org/wiki/Martin_Scorsese",
        tags: "Taxi Driver, Os Bons Companheiros, O Lobo de Wall Street, A Ilha do Medo, O Irlandês"
    },
    {
        titulo: "Quentin Tarantino",
        descricao: "Quentin Tarantino é conhecido por seu estilo distintivo, que combina diálogos afiados, violência estilizada e uma paixão pelo cinema. Filmes como 'Pulp Fiction' e 'Kill Bill' são emblemáticos de sua abordagem inovadora e sua habilidade em contar histórias não lineares. Tarantino também é elogiado por 'Bastardos Inglórios' e 'Era Uma Vez em... Hollywood', que demonstram seu talento para reimaginar a história e a cultura pop.",
        link: "https://pt.wikipedia.org/wiki/Quentin_Tarantino",
        tags: "Pulp Fiction, Kill Bill, Bastardos Inglórios, Django Livre, Era Uma Vez em... Hollywood"
    },
    {
        titulo: "Wes Anderson",
        descricao: "Wes Anderson é um cineasta conhecido por seu estilo visual idiossincrático e narrativas excêntricas. Seus filmes, como 'O Grande Hotel Budapeste' e 'Moonrise Kingdom', são caracterizados por uma estética simétrica e uma paleta de cores vibrantes. Anderson é aclamado por sua capacidade de criar mundos únicos e personagens peculiares, explorando temas de família e identidade com um toque de humor e melancolia.",
        link: "https://pt.wikipedia.org/wiki/Wes_Anderson",
        tags: "O Grande Hotel Budapeste, A Vida Marinha com Steve Zissou, Moonrise Kingdom, Ilha dos Cachorros"
    },
    {
        titulo: "Damien Chazelle",
        descricao: "Damien Chazelle é um diretor e roteirista americano conhecido por suas obras intensamente emocionantes e tecnicamente impressionantes. 'La La Land', um musical que celebra o sonho e a realidade, e 'Whiplash', um drama sobre a busca pela perfeição, são exemplos de sua habilidade em capturar a paixão e a tensão. Chazelle também é reconhecido por 'O Primeiro Homem' e 'Babylon', que exploram temas de ambição e transformação.",
        link: "https://pt.wikipedia.org/wiki/Damien_Chazelle",
        tags: "La La Land, Whiplash, O Primeiro Homem, Babylon"
    },
    {
        titulo: "Yorgos Lanthimos",
        descricao: "Yorgos Lanthimos é um cineasta grego conhecido por suas histórias provocativas e surrealistas. Seus filmes, como 'O Lagosta', exploram temas de controle social e alienação de maneira inovadora e muitas vezes perturbadora. 'A Favorita' e 'O Sacrifício do Cervo Sagrado' demonstram sua capacidade de criar atmosferas intensas e complexas, desafiando as convenções do cinema tradicional.",
        link: "https://pt.wikipedia.org/wiki/Yorgos_Lanthimos",
        tags: "O Lagosta, A Favorita, O Sacrifício do Cervo Sagrado"
    },
    {
        titulo: "Paul Thomas Anderson",
        descricao: "Paul Thomas Anderson é um cineasta americano conhecido por suas narrativas profundas e personagens complexos. Seus filmes, como 'Magnólia', exploram a interconexão das vidas humanas com uma abordagem emocionalmente ressonante. 'Sangue Negro' é uma análise visceral da ambição e da corrupção, enquanto 'O Mestre' e 'Vício Inerente' destacam seu talento para criar histórias intricadas e multifacetadas.",
        link: "https://pt.wikipedia.org/wiki/Paul_Thomas_Anderson",
        tags: "Magnólia, Sangue Negro, O Mestre, Vício Inerente"
    },
    {
        titulo: "Pedro Almodóvar",
        descricao: "Pedro Almodóvar é um cineasta espanhol aclamado por sua capacidade de combinar cores vibrantes e emoções intensas em suas histórias. 'Tudo Sobre Minha Mãe' e 'Volver' são exemplos de sua habilidade em explorar temas de identidade, maternidade e o papel das mulheres na sociedade. 'A Pele que Habito' e 'Dor e Glória' mostram sua capacidade de criar dramas emocionantes e visuais deslumbrantes.",
        link: "https://pt.wikipedia.org/wiki/Pedro_Almod%C3%B3var",
        tags: "Tudo Sobre Minha Mãe, Volver, Dor e Glória, A Pele que Habito"
    },
    {
        titulo: "Spike Lee",
        descricao: "Spike Lee é um cineasta americano conhecido por seu trabalho socialmente consciente e seu estilo único. Seus filmes, como 'Faça a Coisa Certa', exploram temas de racismo e injustiça com uma abordagem incisiva e emocional. 'Malcolm X' oferece uma visão profunda sobre o ativista dos direitos civis, e 'Infiltrado na Klan' combina comédia e drama para criticar o racismo contemporâneo.",
        link: "https://pt.wikipedia.org/wiki/Spike_Lee",
        tags: "Faça a Coisa Certa, Malcolm X, Infiltrado na Klan, O Plano Perfeito"
    },
    {
        titulo: "Steven Spielberg",
        descricao: "Steven Spielberg é um dos diretores mais influentes e bem-sucedidos da história do cinema. Seus filmes abrangem uma vasta gama de gêneros, desde aventuras épicas como 'Jurassic Park' e 'Indiana Jones' até dramas comoventes como 'A Lista de Schindler'. Conhecido por sua habilidade em criar experiências cinematográficas emocionantes e universalmente apelativas, Spielberg continua a ser uma força inovadora no cinema.",
        link: "https://pt.wikipedia.org/wiki/Steven_Spielberg",
        tags: "Jurassic Park, E.T., Tubarão, A Lista de Schindler, Indiana Jones"
    }
];
