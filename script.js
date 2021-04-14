function create_text(){
var a_easy_en=["An angry","An attractive","A baby","A beautiful","A big","A blind","A blushing","A bored","A brave","A bruised","A clever","A clumsy","A cold","A confused","A cool","A cowardly","A crazy","A cuddly","A curvy","A cute","A dirty","A dizzy","An embarrassed","An evil","An excited","A fast","A female","A friendly","A frightened","A funny","A furry","A giant","A gorgeous","A graceful","A greedy","A grumpy","A hairy","A handsome","A happy","A hot","A huge","A hungry","An intelligent","An itchy","A kind","A large","A lazy","A little","A lonely","A loud","A macho","A magic","A male","A mean","A miserable","A mute","A nervous","A nosy","An old","A plump","A poor","A pretty","A quick","A quiet","A rich","A romantic","A sad","A scared","A scary","A shocked","A short","A shy","A silent","A sleepy","A slimy","A slow","A small","A smelly","A snotty","A spotty","A sticky","A strong","A striped","A stupid","A sweaty","A tall","A thin","A thirsty","A ticklish","A tiny","A tired","A tough","An ugly","A vain","A weak","A wet"];
var a_hard_en=["An acrobatic","An adorable","An adventurous","An aggressive","An alert","An ambitious","An amused","An ancient","An annoying","An anxious","An arrogant","A bad","A bubbly","A calm","A careless","A caring","A charming","A cheerful","A classy","A concerned","A considerate","A courageous","A creepy","A cruel","A curious","A damp","A disguised","A dramatic","A dusty","An eager","An educated","An elegant","An energetic","An enormous","An enthusiasic","A fabulous","A famous","A fierce","A flexible","A fluffy","A fragile","A generous","A gentle","A glamorous","A greasy","A hairless","A healthy","A helpful","An imaginary","An invicible","A jealous","A jolly","A lively","A loving","A lucky","A massive","A merry","A messy","A metal","A mighty","A miniature","A mouldy","A mysterious","A naughty","A nice","An obedient","An obnoxious","An odd","An ordinary","An outrageous","A pale","A peaceful","A perfect","A plastic","A polite","A powerful","A proud","A psychotic","A puzzled","A rabid","A royal","A rude","A sarcastic","A selfish","A sociable","A soggy","A strange","A talented","A talkative","A thoughtful","A warm","A wicked","A wild","A wise","A wooden","A young"];
var b_easy_en=["anteater","bat","beaver","bee","belly dancer","blackbird","boxer","bride","butterfly","camel","cat","cavemen","cheerleader","chicken","cow","cowboy","crab","crocodile","dancer","devil","doctor","dog","dolphin","donkey","dove","duck","elephant","fairy","fireman","fisherman","flamingo","fly","frog","giant","giraffe","gorilla","grandad","grandma","hamster","hedgehog","hippo","hippy","horse","hyena","jellyfish","kangaroo","king","kitten","lion","lobster","mermaid","monkey","monster","moose","nun","octopus","owl","parrot","penguin","pig","pilot","policeman","priest","prirate","rabbit","rat","rhino","robin","robot","santa","seal","shark","sheep","snail","snake","soldier","spider","squirrel","starfish","statue","superhero","teacher","tiger","turkey","turtle","unicorn","vampire","viking","wasp","witch","wizard","wolf","woodpecker","worm","zebra","zombie"];
var b_hard_en=["actor","albatross","alien","ant","armadillo","astronaut","baboon","badger","biker","buffalo","builder","bulldog","burglar","cannibal","caterpillar","chameleon","cheetah","comedian","deer","detective","dinosaur","dj","doll","dragon","dragonfly","elf","farmer","flea","fox","gerbil","ghost","gladiator","gnome","goat","goblin","goose","goth","iguana","kingfisher","koala","ladybird","leopard","leprechaun","lifeguard","lizard","llama","maggot","magician","magpie","manatee","meerkat","mime","ninja","nurse","orangutan","ostrich","otter","panda","paramedic","peacock","phoenix","pigeon","platypus","poet","polar bear","poodle","porcupine","prawn","president","prime minister","princess","punk","queen","rapper","rastafarian","reindeer","sailor","salmon","samurai","scarecrow","scientist","sea lion","skeleton","skunk","sloth","spy","stick insect","swan","toad","tortoise","tourist","vulture","weasel","werewolf","whale","yeti"];
var c_easy_en=["ballet dancing.","blowing bubbles.","bouncing a ball.","bowling.","breaking eggs.","building a sandcastle.","building a snowman.","canoeing.","casting a spell.","catching a ball.","chopping onions.","climbing a tree.","crawling.","digging a hole.","diving.","doing a cartwheel.","doing a handstand.","doing a jigsaw puzzle.","doing a roly poly.","doing yoga.","drawing a picture.","drinking poison.","driving a car.","eating spaghetti.","feeding the ducks.","fencing.","fishing.","flying.","flying a kite.","giggling.","giving birth.","having a bath.","having a picnic.","having a shower.","hiding.","hula hooping.","ice skating.","jogging.","juggling.","knitting a scarf.","lifting weights.","lighting a match.","listening to the radio.","looking in the mirror.","making a fire.","milking a cow.","moshing.","opening presents.","painting a portrait.","playing basketball.","playing cricket.","playing darts.","playing football.","playing golf.","playing netball.","playing tennis.","playing the bongos.","playing the drums.","playing the flûte.","playing the guitar.","playing the harp.","playing the piano.","playing the recorder.","playing the saxophone.","playing the trumpet.","playing the violin.","playing volleyball.","popping bubbles.","proposing.","reading a book.","reading a newspaper.","reading a magazine.","riding a bike.","riding a horse.","riding a motorbike.","roller-skating.","running marathon.","shooting an arrow.","shopping.","singing in the rain.","skateboarding.","skiing.","skipping.","sledging.","smashing plates.","sneezing.","snorkelling.","snowboarding.","squeezing a spot.","sunbathing.","surfing.","swimming in the sea.","taking a photo.","taking a selfie.","trampolining.","walking the dog."];
var c_hard_en=["arranging flowers.","baking a cake.","bird watching.","boiling an egg.","breakdancing.","building a house.","bungee jumping.","carving a sculpture.","climbing a mountain.","collecting shells.","counting sheep.","cuddling a teddy bear.","dancing like a robot.","decorating a Christmas tree.","digging up potatoes.","disappearing.","doing a backflip.","doing karate.","doing origami.","doing the hula.","dreaming.","eating a bogey.","eating a rotten egg.","eating a vindaloo.","eating an oyster.","eating candy floss.","eating jellied eels.","exploring the jungle.","falling in love.","feeding a baby.","finding a pearl.","flipping pancakes.","floating in a hot hair balloon.","floating in space.","foraging for mushrooms.","gazing at the stars.","getting a haircut.","getting a massage.","getting arrested.","getting married.","going on safari.","growing a beard.","hammering a nail.","having a food fight.","having an argument.","having a nightmare.","having a sword fight.","hitchhiking.","howling a the moon.","jumping for joy.","jumping in a pile of leaves.","kissing a frog.","landing on Mars.","lifting kettle bells.","making a cup of tea.","making a pizza.","making a snow angel.","making popcorn.","making sausages.","marching in a parage.","mixing cement.","moonwalking.","picking a pepper.","picking blackberries.","planting a tree.","playing air guitar.","playing poker.","playing Randomise™.","playing roulette.","playing rounders.","playing the bagpipes.","playing with toys.","relaxing in a hammock.","riding a rollercoaster.","rock climbing.","scuba diving.","selling lemonade.","shelling peas.","sky diving.","smelling a flower.","speaking French.","studying rocket science.","swallowing a fly.","swimming with sharks.","telling a joke.","throwing a javelin.","throwing a shot put.","trainspotting.","travelling back in time.","trekking the desert.","walking in flippers.","walking in high.","walking on the moon.","water skiing.","white-water-rafting.","wishing on a star."];
var a_easy_fr=["en colère","attirant(e)","bébé","beau(belle)","gros(se)","aveugle","rougissant(e)","ennuyé(e)","courageux(se)","meurtri(e)","intelligent(e)","maladroit(e)","froid(e)","confus(e)","cool","lâche","fou(folle)","câlin(e)","curviligne","mignon(ne)","sale","étourdi(e)","embarrassé(e)","malveillant(e)","excité(e)","rapide","femelle","amical(e)","effrayé(e)","drôle","velu(e)","géant(e)","magnifique","gracieux(se)","glouton(ne)","grincheux(se)","poilu(e)","élégant(e)","heureux(se)","chaud(e)","énorme","affamé(e)","intelligent(e)","qui démange","gentil(le)","de taille large","fainéant(e)","petit(e)","solitaire","bruyant(e)","macho","magique","masculin(e)","méchant(e)","misérable","muet(te)","nerveux(se)","curieux(se)","âgé(e)","dodu(e)","pauvre","joli(e)","rapide","calme","riche","romantique","triste","effrayé(e)","angoissant(e)","choqué(e)","court(e)","timide","silencieux(se)","somnolent(e)","visqueux(se)","lent(e)","petit(e)","malodorant(e)","morveux(se)","à pois","collant(e)","fort(e)","rayé(e)","stupide","en sueur","de grande taille","mince","assoiffé(e)","chatouilleux(se)","tout(e) petit(e)","fatigué(e)","endurci(e)","moche","vaine","faible","mouillé(e)"];
var a_hard_fr=["acrobate","adorable","aventureux(se)","agressif(ve)","alerte","ambitieux(se)","amusé(e)","ancien(ne)","énervant(e)","anxieux(se)","arrogant(e)","mauvais(e)","pétillant(e)","calme","négligent(e)","bienveillant(e)","charmant(e)","de bonne humeur","classe","concerné(e)","prévenant(e)","courageux(se)","sinistre","cruel(le)","curieux(se)","humide","déguisé(e)","dramatique","poussiéreux(se)","désireux(se)","instruit(e)","élégant(e)","énergique","énorme","enthousiaste","fabuleux(se)","célèbre","féroce","souple","duveteux(se)","fragile","généreux(se)","doux(ce)","glamour","graisseux(se)","chauve","sain(e)","serviable","imaginaire","invicible","jaloux(se)","gai(e)","vif(ve)","aimant(e)","chanceux(se)","massif(ve)","joyeux(se)","désordonné(e)","métal","puissant(e)","miniature","moisi(e)","mystérieux(se)","vilain(e)","agréable","obéissant(e)","odieux(se)","étrange","ordinaire","scandaleux(se)","pâle","paisible","parfait(e)","en plastique","poli(e)","puissant(e)","fier(ère)","psychotique","perplexe","enragé(e)","royal(e)","Impoli(e)","sarcastique","égoïste","sociable","détrempé(e)","étrange","talentueux(se)","bavard(e)","réfléchi(e)","chaud(e)","méchant(e)","sauvage","sage","en bois","jeune"];
var b_easy_fr=["Un fourmilier","Une chauve souris","Un castor","Une abeille","Une danseuse orientale","Un merle","Un boxeur","Une mariée","Un papillon","Un chameau","Un chat","Un hommes des cavernes","Une majorette","Un poulet","Une vache","Un cow-boy","Un crabe","Un crocodile","Un danseur","Un diable","Un docteur","Un chien","Un dauphin","Un âne","Un colombe","Un canard","Un éléphant","Une fée","Un pompier","Un pêcheur","Un flamant rose","Une mouche","Une grenouille","Un géant","Une girafe","Un gorille","Un grand-père","Une grand-mère","Un hamster","Un hérisson","Un hippopotame","Un hippie","Un cheval","Une hyène","Une méduse","Un kangourou","Un roi","Un chaton","Un Lion","Un Homard","Une Sirène","Un singe","Un monstre","Un élan","Une nonne","Un poulpe","Une chouette","Un perroquet","Un manchot","Un cochon","Un pilote","Un policier","Un prêtre","Un pirate","Un lapin","Un rat","Un rhinocéros","Un merle","Un robot","Un père Noël","Un phoque","Un requin","Un mouton","Un escargot","Un serpent","Un soldat","Une araignée","Un écureuil","Une étoile de mer","Une statue","Un super héros","Un prof","Un tigre","Une dinde","Une tortue","Une licorne","Un vampire","Un viking","Une guêpe","Une sorcière","Un sorcier","Un loup","Un pivert","Un ver de terre","Un zèbre","Un zombi"];
var b_hard_fr=["Un acteur","Un albatros","Un extraterrestre","Une fourmi","Un tatou","Un astronaute","Un babouin","Un blaireau","Un motard","Un buffle","Un constructeur","Un bouledogue","Un cambrioleur","Un cannibale","Une chenille","Un caméléon","Un guépard","Un comédien","Un cerf","Un détective","Un dinosaure","Un DJ","Une poupée","Un dragon","Une libellule","Un elfe","Un agriculteur","Une puce","Un renard","Une gerbille","Une fantôme","Un gladiateur","Un gnome","Un chèvre","Un lutin","Une oie","Un goth","Un iguane","Un martin-pêcheur","Un koala","Une coccinelle","Un léopard","Un lutin","Un maître nageur","Un lézard","Un lama","Un asticot","Un magicien","Une pie","Un lamantin","Un suricate","Un mime","Un ninja","Un infirmière","Un orang-outan","Une autruche","Un loutre","Un panda","Un paramédic","Un paon","Un phénix","Un pigeon","Un ornithorynque","Un poète","Un ours polaire","Un caniche","Un porc-épic","Une crevette","Un président","Un premier ministre","Une princesse","Un punk","Une reine","Un rappeur","Un rasta","Un renne","Un marin","Un saumon","Un samouraï","Un épouvantail","Un scientifique","Un lion de mer","Un squelette","Une moufette","Un paresseux","Un espion","Un phasme","Un cygne","Un crapaud","Une tortue","Un touriste","Un vautour","Une belette","Un loup-garou","Une baleine","Un Yeti"];
var c_easy_fr=["dansant dans un ballet.","en train de faire des bulles.","faisant rebondir une balle.","faisant du bowling.","cassant des œufs.","construisant un château de sable.","construisant un bonhomme de neige.","en train de faire du canoë.","jetant un sort.","attrapant une balle.","hachant des oignons.","grimpant à un arbre.","en train de ramper.","creusant un trou.","faisant de la plongée.","faisant la roue.","faisant le poirier.","faisant un puzzle.","faisant une roulade.","faisant du yoga.","dessinant une image.","en train de boire du poison.","conduisant une voiture.","mangeant des spaghettis.","nourrissant des canards.","en train de faire de l'escrime.","en train de pêcher.","en train de voler.","s'amusant avec un cerf-volant.","ayant un fou rire.","en train de donner naissance.","prenant un bain.","faisant un pique-nique.","en train de prendre une douche.","en train de se cacher.","faisant du hula hoop.","faisant du patinage sur glace.","faisant du jogging.","en train de jongler.","tricotant une écharpe.","soulèvant des poids.","grattant une allumette.","écoutant la radio.","regardant dans un miroir.","en train de faire un feu.","en train de traire une vache.","faisant du mosh pit.","ouvrant des cadeaux.","peignant un portrait.","jouant au basket.","jouant au cricket.","jouant aux fléchettes.","jouant au football.","jouant au golf.","jouant au netball.","qui joue au tennis.","qui joue les bongos.","qui joue de la batterie.","qui joue de la flûte.","qui joue de la guitare.","qui joue de la harpe.","qui joue du piano.","qui joue de la flute.","qui joue du saxophone.","qui joue de la trompette.","qui joue du violon.","qui joue au volleyball.","qui éclate des bulles.","qui fait une demande en mariage.","qui lit un livre.","qui lit un journal.","qui lit un magazine.","qui fait du vélo.","qui monte à cheval.","qui fait du vélo.","qui fait du roller.","qui court un marathon.","qui tire une flèche.","qui fait du shopping.","qui chante sous la pluie.","qui fait de la planche à roulettes.","qui fait du ski.","qui fait de la corde à sauter.","qui fait de la luge.","qui fracasse des assiettes.","qui éternue.","avec un masque et un tuba.","qui fait du snowboard.","qui perce un bouton.","qui se dore la pillule.","qui fait du surf.","qui nage dans la mer.","qui prend une photo.","qui prend un selfie.","qui fait du trampoline.","qui promène un chien."];
var c_hard_fr=["qui arrange des fleurs.","qui fait un gâteau.","qui observe des oiseaux.","qui fait bouillir un œuf.","qui fait du break dance.","qui construit une maison.","qui saute à l'élastique.","qui sculpte une sculpture.","qui escalade une montagne.","qui ramasse des coquillages.","qui compte les moutons.","qui câline un ours en peluche.","aui danse comme un robot.","qui décore un sapin de Noël.","qui déterre des pommes de terre.","qui disparaît.","qui fait un salto arrière.","qui fait du karaté.","qui fait de l'origami.","qui danse la hula.","qui rêve.","qui mange une crotte de nez.","qui mange un œuf pourri.","qui mange un vindaloo.","qui mange une huître.","qui mange de la barbe à papa.","qui mange des anguilles en gelée.","qui explore la jungle.","qui tombe amoureux(se).","qui nourrit un bébé.","qui trouve une perle.","qui retourne des crêpes.","qui flotte dans une montgolfière.","qui flotte dans l'espace.","qui cherche des champignons.","qui regarde les étoiles.","qui se fait  couper les cheveux.","qui se fait masser.","qui se fait arrêter.","qui se marie.","qui fait un safari.","qui se laisser pousser la barbe.","qui martèle un clou.","qui se bat avec de la nourriture.","qui se dispute.","qui fait un cauchemar.","qui se bat à l'épée.","qui fait du stop.","qui hurle à la lune.","qui sauter de joie.","qui saute dans un tas de feuilles.","qui embrasse une grenouille.","qui atterrit sur Mars.","qui soulève des haltères.","qui fait une tasse de thé.","qui prépare une pizza.","qui fait un ange de neige.","qui fait du pop-corn.","qui prépare  des saucisses.","qui marche dans une parade.","qui mélange du ciment.","qui marche sur la lune.","qui cueille un piment.","qui cueille des mûres.","qui plante un arbre.","qui joue de la air guitare.","qui joue au poker.","qui joue à Randomise™.","qui joue à la roulette.","qui joue au baseball.","qui joue de la cornemuse.","qui joue avec des jouets.","qui se détend dans un hamac.","qui est sur des montagnes russes.","qui fait de l'escalade.","qui fait de la plongée sous-marine.","qui vend de la limonade.","qui écosse des pois.","qui fait du parachutisme.","qui sent une fleur.","qui parle français.","qui étudie la physique.","qui avale une mouche.","qui nage avec des requins.","qui raconte une blague.","qui lance un javelot.","qui lance un poids.","qui regarde passer les trains.","qui voyage dans le temps.","qui fait de la randonnée dans le désert.","qui marche avec des palmes.","qui marche avec des hauts talons.","qui marche sur la lune.","qui fait du ski nautique.","qui fait du rafting.","qui fait un souhait."];
var ae=Math.floor(Math.random()*a_easy_en.length);
var ah=Math.floor(Math.random()*a_hard_en.length);
var be=Math.floor(Math.random()*b_easy_en.length);
var bh=Math.floor(Math.random()*b_hard_en.length);
var ce=Math.floor(Math.random()*c_easy_en.length);
var ch=Math.floor(Math.random()*c_easy_en.length);
var sentence_easy_en=a_easy_en[ae]+" "+b_easy_en[be]+" "+c_easy_en[ce];
var sentence_hard_en=a_hard_en[ah]+" "+b_hard_en[bh]+" "+c_hard_en[ch];
var sentence_easy_fr=b_easy_fr[be]+" "+a_easy_fr[ae]+" "+c_easy_fr[ce];
var sentence_hard_fr=b_hard_fr[bh]+" "+a_hard_fr[ah]+" "+c_hard_fr[ch];
var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var text3=document.getElementById("text3");
var text4=document.getElementById("text4");
text1.innerHTML=sentence_easy_en;
text2.innerHTML=sentence_easy_fr;
text3.innerHTML=sentence_hard_en;
text4.innerHTML=sentence_hard_fr;
}
create_text();
document.body.addEventListener("click",create_text); 
