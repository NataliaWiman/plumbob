import { Household } from "@/types";

export const households: Household[] = [
  {
    id: "bff",
    name: "BFF",
    members: [
      { id: "summer_holiday", name: "Summer Holiday", householdId: "bff" },
      { id: "travis_scott", name: "Travis Scott", householdId: "bff" },
      { id: "liberty_lee", name: "Liberty Lee", householdId: "bff" },
    ],
    description:
      "Free spirit Liberty, cheerful Summer, and geeky Travis are unlikely friends, and nothing can come between these three. Except perhaps the growing feelings both Summer and Liberty have for Travis...",
    budget: "§9,000",
    unhoused: false,
    worldId: "willow_creek",
    packId: "bg",
  },
  {
    id: "pancakes",
    name: "Pancakes",
    members: [
      { id: "bob_pancakes", name: "Bob Pancakes", householdId: "pancakes" },
      { id: "eliza_pancakes", name: "Eliza Pancakes", householdId: "pancakes" },
    ],
    description:
      "Poor, poor Bob and Eliza – have they ever been happy? It seems there's nothing one can do to please the other. Just what is keeping this couple together? Or, conversely, what is the spark that will finally drive them apart?",
    budget: "§20,000",
    unhoused: false,
    worldId: "willow_creek",
    packId: "bg",
  },
  {
    id: "spencer_kim_lewis",
    name: "Spencer-Kim-Lewis",
    members: [
      {
        id: "alice_spencer_kim",
        name: "Alice Spencer-Kim",
        householdId: "spencer_kim_lewis",
      },
      {
        id: "dennis_kim",
        name: "Dennis Kim",
        householdId: "spencer_kim_lewis",
      },
      {
        id: "olivia_kim_lewis",
        name: "Olivia Kim-Lewis",
        householdId: "spencer_kim_lewis",
      },
      {
        id: "eric_lewis",
        name: "Eric Lewis",
        householdId: "spencer_kim_lewis",
      },
      {
        id: "vivian_lewis",
        name: "Vivian Lewis",
        householdId: "spencer_kim_lewis",
      },
    ],
    description:
      "Okay, here's the breakdown: Dennis Kim and Lydia Spencer had a daughter named Alice Spencer-Kim, then divorced. Alice married Eric Lewis and had her own little girl, Olivia Kim-Lewis. They live with Alice's dad (Dennis, remember?) and Eric's mom, Vivian Lewis. Hey, no one ever said family was easy!",
    budget: "§55,500",
    unhoused: false,
    worldId: "willow_creek",
    packId: "bg",
  },
  {
    id: "goth",
    name: "Goth",
    members: [
      { id: "mortimer_goth", name: "Mortimer Goth", householdId: "goth" },
      { id: "bella_goth", name: "Bella Goth", householdId: "goth" },
      { id: "cassandra_goth", name: "Cassandra Goth", householdId: "goth" },
      { id: "alexander_goth", name: "Alexander Goth", householdId: "goth" },
    ],
    description:
      "The Goths are an aristocratic family with a dreary aura. Between Mortimer writing macabre stories and Bella's mysterious disappearances will Cassandra and Alexander grow up to be gloomy, too.",
    budget: "§45,500",
    unhoused: false,
    worldId: "willow_creek",
    packId: "bg",
  },
  {
    id: "zest",
    name: "Zest",
    members: [{ id: "johnny_zest", name: "Johnny Zest", householdId: "zest" }],
    description:
      "Johnny Zest has the stage name and the dream, but maybe not the talent... Disowned by the Landgraabs for quitting school, Johnny wants to make his own fame and fortune as a standup comedian.",
    budget: "§3,950",
    unhoused: false,
    worldId: "oasis_springs",
    packId: "bg",
  },
  {
    id: "roomies",
    name: "Roomies",
    members: [
      {
        id: "j_huntington_iii",
        name: "J Huntington III",
        householdId: "roomies",
      },
      {
        id: "mitchell_kalani",
        name: "Mitchell Kalani",
        householdId: "roomies",
      },
      { id: "gavin_richards", name: "Gavin Richards", householdId: "roomies" },
      { id: "zoe_patel", name: "Zoe Patel", householdId: "roomies" },
    ],
    description:
      "This household seems to have stepped right out of a TV sitcom. What wacky misadventures will the perky Zoe, easygoing Mitchell, uptight ladies' man J. and intellectual Gavin suffer this week? Tune in and find out!",
    budget: "§14,000",
    unhoused: false,
    worldId: "oasis_springs",
    packId: "bg",
  },
  {
    id: "caliente",
    name: "Caliente",
    members: [
      {
        id: "katrina_caliente",
        name: "Katrina Caliente",
        householdId: "caliente",
      },
      { id: "don_lothario", name: "Don Lothario", householdId: "caliente" },
      { id: "nina_caliente", name: "Nina Caliente", householdId: "caliente" },
      { id: "dina_caliente", name: "Dina Caliente", householdId: "caliente" },
    ],
    description:
      "It’s no longer girls-only now that Caliente matriarch Katrina has moved in her mooching boy toy, Don. With three fiery, attractive ladies in the house, will Don remain faithful or will he get involved with more than one Caliente woman?",
    budget: "§28,500",
    unhoused: false,
    worldId: "oasis_springs",
    packId: "bg",
  },
  {
    id: "landgraab",
    name: "Landgraab",
    members: [
      {
        id: "geoffrey_landgraab",
        name: "Geoffrey Landgraab",
        householdId: "landgraab",
      },
      {
        id: "nancy_landgraab",
        name: "Nancy Landgraab",
        householdId: "landgraab",
      },
      {
        id: "malcolm_landgraab",
        name: "Malcolm Landgraab",
        householdId: "landgraab",
      },
    ],
    description:
      "The Landgraabs seem like the perfect family; wealthy, well-mannered, brilliant. But Nancy and Geoffrey are each hiding something. Will their secrets tear them apart or will they continue to build a wealthy dynasty?",
    budget: "§85,000",
    unhoused: false,
    worldId: "oasis_springs",
    packId: "bg",
  },
  {
    id: "behr",
    name: "Behr",
    members: [
      { id: "candy_behr", name: "Candy Behr", householdId: "behr" },
      { id: "yuki_behr", name: "Yuki Behr", householdId: "behr" },
    ],
    description:
      "Yuki and Candy recently inherited a quaint, modest home from their dearly departed Grandma Behr. Geeky teen Yuki absolutely idolizes her cool DJ sister, Candy, but Yuki’s got some mad skills of her own...",
    budget: "§20,000",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "bjergsen",
    name: "Bjergsen",
    members: [
      { id: "clara_bjergsen", name: "Clara Bjergsen", householdId: "bjergsen" },
      { id: "bjorn_bjergsen", name: "Bjorn Bjergsen", householdId: "bjergsen" },
      { id: "sofia_bjergsen", name: "Sofia Bjergsen", householdId: "bjergsen" },
      { id: "elsa_bjergsen", name: "Elsa Bjergsen", householdId: "bjergsen" },
    ],
    description:
      "Teen musical prodigy Sofia has dreams -- she's going to make it big. Not even her gloomy dad, perfectionist mom, or pesky genius kid sister can stop her from making her way to the top!",
    budget: "§20,000",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "bro",
    name: "Bro",
    members: [
      { id: "sergio_romeo", name: "Sergio Romeo", householdId: "bro" },
      { id: "joaquin_le_chien", name: "Joaquin Le Chien", householdId: "bro" },
    ],
    description:
      "Tech-savvy hunk Sergio and brash DJ Joaquin have little in common... except for the finer things in life. As they climb the ranks and rake in the bucks, just how awesome can they make their sweet pad?",
    budget: "§20,000",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "free_spirits",
    name: "Free Spirits",
    members: [
      { id: "ulrike_faust", name: "Ulrike Faust", householdId: "free_spirits" },
      { id: "maaike_haas", name: "Maaike Haas", householdId: "free_spirits" },
    ],
    description:
      "Bookish Maaike, and artsy Ulrike aren't materialistic, but even these two roommates admit they could use a few upgrades around the house...",
    budget: "§5,500",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "fyres",
    name: "Fyres",
    members: [
      { id: "moira_fyres", name: "Moira Fyres", householdId: "fyres" },
      { id: "dominic_fyres", name: "Dominic Fyres", householdId: "fyres" },
      { id: "siobhan_fyres", name: "Siobhan Fyres", householdId: "fyres" },
      { id: "morgan_fyres", name: "Morgan Fyres", householdId: "fyres" },
    ],
    description:
      "Things couldn't be better between lovebirds Dominic and Moira -- too bad the same can't be said for their daughters! Free spirit Morgan just wants to have fun with her Renegade friends...",
    budget: "§20,000",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "munch",
    name: "Munch",
    members: [
      { id: "mila_munch", name: "Mila Munch", householdId: "munch" },
      { id: "gunther_munch", name: "Gunther Munch", householdId: "munch" },
      { id: "wolfgang_munch", name: "Wolfgang Munch", householdId: "munch" },
      { id: "lucas_munch", name: "Lucas Munch", householdId: "munch" },
    ],
    description:
      "Raising three kids is never easy -- particularly when one refuses to move out of the house, and one is a gloomy rebel. But Mila Munch is nothing if not dedicated to her family...",
    budget: "§25,500",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "partihaus",
    name: "Partihaus",
    members: [
      { id: "marcus_flex", name: "Marcus Flex", householdId: "partihaus" },
      { id: "paolo_rocca", name: "Paolo Rocca", householdId: "partihaus" },
      { id: "jade_rosa", name: "Jade Rosa", householdId: "partihaus" },
      {
        id: "eva_capricciosa",
        name: "Eva Capricciosa",
        householdId: "partihaus",
      },
    ],
    description:
      "Drink, flirt, dance, repeat. Jade, Eva, and Paolo jumped at the opportunity to explore the world and set up the ultimate crib in Windenburg as soon as Marcus extended the invite...",
    budget: "§16,500",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "villareal",
    name: "Villareal",
    members: [
      {
        id: "jacques_villareal",
        name: "Jacques Villareal",
        householdId: "villareal",
      },
      {
        id: "luna_villareal",
        name: "Luna Villareal",
        householdId: "villareal",
      },
      {
        id: "hugo_villareal",
        name: "Hugo Villareal",
        householdId: "villareal",
      },
      { id: "max_villareal", name: "Max Villareal", householdId: "villareal" },
    ],
    description:
      "After Jacques’ wife disappeared under... ahem, mysterious circumstances, he was left raising three kids in his enormous mansion. Luna and Hugo are good kids with typical teen problems...",
    budget: "§65,000",
    unhoused: false,
    worldId: "windenburg",
    packId: "ep02",
  },
  {
    id: "benali",
    name: "Benali",
    members: [
      { id: "salim_benali", name: "Salim Benali", householdId: "benali" },
    ],
    description:
      "Salim has grown up in the Arts Quarter, surrounded by poets, musicians and artists. He's determined to become a great writer… right after he's finished that book. Oh, and that video game he needs to beat. Come to think of it, he needs a nap too.",
    budget: "§9,600",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "bheeda",
    name: "Bheeda",
    members: [
      {
        id: "jesminder_bheeda",
        name: "Jesminder Bheeda",
        householdId: "bheeda",
      },
      { id: "arun_bheeda", name: "Arun Bheeda", householdId: "bheeda" },
    ],
    description:
      "With a baby on the way and a tiny city apartment, will Jesminder and Arun find space for their bundle of joy? Will Jesminder keep her mixology job when the baby comes, or would she rather stay at home and paint?",
    budget: "§3,200",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "feng",
    name: "Feng",
    members: [
      { id: "victor_feng", name: "Victor Feng", householdId: "feng" },
      { id: "lily_feng", name: "Lily Feng", householdId: "feng" },
    ],
    description:
      "Victor is a respected and high-powered politician. Lily is a tough businesswoman. Their respectful, yet somber nature masks their sinister, secret plans to one day take over San Myshuno!",
    budget: "§60,000",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "jang",
    name: "Jang",
    members: [
      { id: "baako_jang", name: "Baako Jang", householdId: "jang" },
      { id: "anaya_jang", name: "Anaya Jang", householdId: "jang" },
      { id: "billie_jang", name: "Billie Jang", householdId: "jang" },
    ],
    description:
      "Baako and Anaya came to the bustling city of San Myshuno so Baako could broaden his career as a rising comedian and so Anaya could get clarity on which one of her passions to focus on as her career...",
    budget: "§5,600",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "karaoke_legends",
    name: "Karaoke Legends",
    members: [
      { id: "miko_ojo", name: "Miko Ojo", householdId: "karaoke_legends" },
      { id: "akira_kibo", name: "Akira Kibo", householdId: "karaoke_legends" },
      {
        id: "darling_walsh",
        name: "Darling Walsh",
        householdId: "karaoke_legends",
      },
    ],
    description:
      "Miko's a peppy aspiring politician who shares a room with her basketball-loving buddy, Darling. Their charismatic roommate, Kibo is downright dreamy in Miko's eyes, but he couldn't be more oblivious to her obvious flirting...",
    budget: "§9,600",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "lobo",
    name: "Lobo",
    members: [{ id: "diego_lobo", name: "Diego Lobo", householdId: "lobo" }],
    description:
      "Established and novice artists alike shudder in anticipation for the day Diego Lobo steps his critical foot into their gallery. Impress him and you'll have it made for life...",
    budget: "§12,500",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "pizzazz",
    name: "Pizzazz",
    members: [
      { id: "penny_pizzazz", name: "Penny Pizzazz", householdId: "pizzazz" },
    ],
    description:
      "Penny is THE source of the coolest happenings and the latest trends in San Myshuno. But will this Online A-Lister's staunch dedication to her career get in the way of finding romance?",
    budget: "§4,000",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "rasoya",
    name: "Rasoya",
    members: [
      { id: "geeta_rasoya", name: "Geeta Rasoya", householdId: "rasoya" },
      { id: "raj_rasoya", name: "Raj Rasoya", householdId: "rasoya" },
    ],
    description:
      "Raj may be a successful Chef, but his critical mother still worries about when he's going to find a nice girl and carry on the family line…",
    budget: "§9,600",
    unhoused: false,
    worldId: "san_myshuno",
    packId: "ep03",
  },
  {
    id: "straud",
    name: "Straud",
    members: [
      {
        id: "vladislaus_straud",
        name: "Vladislaus Straud",
        householdId: "straud",
      },
    ],
    description:
      "Count Vladislaus Straud IV is the latest descendant to occupy Straud Manor. His oddly similar looking line of ancestors has resided here since the founding of Forgotten Hollow.",
    budget: "§20,000",
    unhoused: false,
    worldId: "forgotten_hollow",
    packId: "gp04",
  },
  {
    id: "vatore",
    name: "Vatore",
    members: [
      { id: "caleb_vatore", name: "Caleb Vatore", householdId: "vatore" },
      { id: "lilith_vatore", name: "Lilith Vatore", householdId: "vatore" },
    ],
    description:
      "The Vatore siblings moved into Forgotten Hollow a few years ago and are striving to make it their home. This can be quite challenging at times since they are not exactly on the best terms with Vladislaus Straud, but when asked they only ever mention a difference in their culinary tastes.",
    budget: "§20,000",
    unhoused: false,
    worldId: "forgotten_hollow",
    packId: "gp04",
  },
  {
    id: "hecking",
    name: "Hecking",
    members: [
      { id: "brent_hecking", name: "Brent Hecking", householdId: "hecking" },
      { id: "brant_hecking", name: "Brant Hecking", householdId: "hecking" },
    ],
    description:
      "Life in their new home seems to agree with newlyweds Brent and Brant. The small-town bustle inspires Brent’s painting, and Brant loves to explore the Bay's beautiful neighborhoods. But will they ever agree on who gets to take their beloved Rosie with them?",
    budget: "§30,522",
    unhoused: false,
    worldId: "brindleton_bay",
    packId: "ep04",
  },
  {
    id: "lynx",
    name: "Lynx",
    members: [
      { id: "catarina_lynx", name: "Catarina Lynx", householdId: "lynx" },
    ],
    description:
      "Cats in the neighborhood know where to go for a good meal. Catarina’s always had a soft spot for animals, and the cats she lives with have the best home a cat could ask for. Sometimes Catarina asks herself if there’s something more to life than cats… usually right before she adopts another stray.",
    budget: "§8,009",
    unhoused: false,
    worldId: "brindleton_bay",
    packId: "ep04",
  },
  {
    id: "delgato",
    name: "Delgato",
    members: [
      {
        id: "supriya_delgato",
        name: "Supriya Delgato",
        householdId: "delgato",
      },
      { id: "justin_delgato", name: "Justin Delgato", householdId: "delgato" },
      { id: "pierce_delgato", name: "Pierce Delgato", householdId: "delgato" },
      { id: "evie_delgato", name: "Evie Delgato", householdId: "delgato" },
    ],
    description:
      "While Supriya loves her full-time job as a stay-at-home mom, it’s been getting harder and harder to suppress her dreams of being a full-fledged veterinarian. Especially now that the owner of the Brindleton Pawspital is looking to sell the business...",
    budget: "§45,672",
    unhoused: false,
    worldId: "brindleton_bay",
    packId: "ep04",
  },
  {
    id: "jeong",
    name: "Jeong",
    members: [
      { id: "venessa_jeong", name: "Venessa Jeong", householdId: "jeong" },
    ],
    description:
      "Venessa Jeong just moved to Del Sol Valley from her quaint country town. She is looking to make it big as a rising actress. She has starred in a few low level commercials, but her agent always tells her she has what it takes, she just needs to find that breakthrough role.",
    budget: "§15,000",
    unhoused: false,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "bailey_moon",
    name: "Bailey-Moon",
    members: [
      { id: "octavia_moon", name: "Octavia Moon", householdId: "bailey_moon" },
      {
        id: "thorne_bailey",
        name: "Thorne Bailey",
        householdId: "bailey_moon",
      },
      {
        id: "orange_bailey_moon",
        name: "Orange Bailey-Moon",
        householdId: "bailey_moon",
      },
    ],
    description:
      "Octavia Moon and Thorne Bailey are the power couple of the century. Octavia is the lyrical genius behind all of Thorne's greatest hits. Due to Thorne's most recent mishap on social media, his public image has started to falter...",
    budget: "§50,000",
    unhoused: false,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "ward",
    name: "Ward",
    members: [{ id: "judith_ward", name: "Judith Ward", householdId: "ward" }],
    description:
      "Judith Ward is a legend in the acting community. She has starred in everything from comedies to dramas. You name it, Judith has played the role. That's not to say she is an easy person to befriend...",
    budget: "§100,000",
    unhoused: false,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "alto",
    name: "Alto",
    members: [{ id: "holly_alto", name: "Holly Alto", householdId: "alto" }],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "baby_ariel",
    name: "Baby Ariel",
    members: [
      { id: "baby_ariel", name: "Baby Ariel", householdId: "baby_ariel" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "broke",
    name: "Broke",
    members: [
      { id: "dustin_broke", name: "Dustin Broke", householdId: "broke" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "cho",
    name: "Cho",
    members: [{ id: "brytani_cho", name: "Brytani Cho", householdId: "cho" }],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "dreamer",
    name: "Dreamer",
    members: [
      { id: "dirk_dreamer", name: "Dirk Dreamer", householdId: "dreamer" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "fabulous",
    name: "Fabulous",
    members: [
      { id: "izzy_fabulous", name: "Izzy Fabulous", householdId: "fabulous" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "flemming",
    name: "Flemming",
    members: [
      { id: "kayla_flemming", name: "Kayla Flemming", householdId: "flemming" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "del_sol_valley",
    packId: "ep06",
  },
  {
    id: "sigworth",
    name: "Sigworth",
    members: [
      { id: "jess_sigworth", name: "Jess Sigworth", householdId: "sigworth" },
      {
        id: "dylan_sigworth",
        name: "Dylan Sigworth",
        householdId: "sigworth",
      },
      {
        id: "christie_sigworth",
        name: "Christie Sigworth",
        householdId: "sigworth",
      },
    ],
    description:
      "The Sigworth family is rather new in town. Jess, the mom, had to transfer to the StrangerVille National Base. After spending a few days on the base, Dylan has started to notice something is a bit off about his wife...",
    budget: "§21,337",
    unhoused: false,
    worldId: "strangerville",
    packId: "gp07",
  },
  {
    id: "cahill",
    name: "Cahill",
    members: [
      { id: "george_cahill", name: "George Cahill", householdId: "cahill" },
    ],
    description:
      "George Cahill was a retired pilot who enjoyed taking his beloved plane Penelope for long flights across the world. After passing over StrangerVille, there was a large flash of light, causing his plane to short circuit and crash...",
    budget: "§20,000",
    unhoused: false,
    worldId: "strangerville",
    packId: "gp07",
  },
  {
    id: "roswell",
    name: "Roswell",
    members: [
      { id: "ted_roswell", name: "Ted Roswell", householdId: "roswell" },
      {
        id: "meredith_roswell",
        name: "Meredith Roswell",
        householdId: "roswell",
      },
    ],
    description:
      "The Roswells are the oldest residents in StrangerVille. Ted Roswell has since become the mayor and has been aggressively pushing to get StrangerVille to be more technologically advanced...",
    budget: "§20,000",
    unhoused: false,
    worldId: "strangerville",
    packId: "gp07",
  },
  {
    id: "eclectic_arts",
    name: "Eclectic Arts",
    members: [
      {
        id: "alice_martin",
        name: "Alice Martin",
        householdId: "eclectic_arts",
      },
      {
        id: "mark_eggleston",
        name: "Mark Eggleston",
        householdId: "eclectic_arts",
      },
      {
        id: "leslie_holland",
        name: "Leslie Holland",
        householdId: "eclectic_arts",
      },
    ],
    description:
      "The Eclectic Arts Household consists of three friends who have decided to cut ties with the modern world in order to explore their inner creativity. They received a large sum of money from their parents and are using it to explore their creative dreams...",
    budget: "§20,000",
    unhoused: false,
    worldId: "strangerville",
    packId: "gp07",
  },
  {
    id: "kahananui",
    name: "Kahananui",
    members: [
      {
        id: "mele_kahananui",
        name: "Mele Kahananui",
        householdId: "kahananui",
      },
      {
        id: "alika_kahananui",
        name: "Alika Kahananui",
        householdId: "kahananui",
      },
    ],
    description:
      'As the self-appointed "Sulani ambassadors" this enterprising couple, Mele and Alika, have decided to live out their golden years in a dream retreat away from the bustle of Ohan\'ali Town.',
    budget: "§30,000",
    unhoused: false,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "ngata",
    name: "Ngata",
    members: [
      { id: "oliana_ngata", name: "Oliana Ngata", householdId: "ngata" },
      { id: "tane_ngata", name: "Tane Ngata", householdId: "ngata" },
      { id: "leila_illes", name: "Leila Illes", householdId: "ngata" },
    ],
    description:
      "Coming to Sulani for inspiration Leila didn't expect to fall in love so deeply with the islands. And it wasn't just the scenery that she fell for, but also for Oliana and her son Tane that welcomed her so easily into their family...",
    budget: "§20,000",
    unhoused: false,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "hoapili",
    name: "Hoapili",
    members: [
      { id: "keala_hoapili", name: "Keala Hoapili", householdId: "hoapili" },
      { id: "lia_hauata", name: "Lia Hauata", householdId: "hoapili" },
    ],
    description:
      "Sitting high above the center of Ohan'ali Town, Keala watches over the townsfolk who look to her for guidance. This spirited, young-at-heart grandmother has taken young Lia under her wing to pass on the knowledge and cultural history of Sulani through the generations.",
    budget: "§22,000",
    unhoused: false,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "kealoha",
    name: "Kealoha",
    members: [
      { id: "makoa_kealoha", name: "Makoa Kealoha", householdId: "kealoha" },
      {
        id: "lilliana_kealoha",
        name: "Lilliana Kealoha",
        householdId: "kealoha",
      },
      { id: "nani_kealoha", name: "Nani Kealoha", householdId: "kealoha" },
      { id: "duane_talla", name: "Duane Talla", householdId: "kealoha" },
    ],
    description:
      "The Kealohas are the epitome of Sulani: an industrious, welcoming, and tight-knit young family firmly rooted in island tradition to honor the past while supporting the bright future of their extended-family community.",
    budget: "§24,000",
    unhoused: false,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "iona",
    name: "Iona",
    members: [
      { id: "kalamainuu_iona", name: "Kalamainu'u Iona", householdId: "iona" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "mahi_ai",
    name: "Mahi'ai",
    members: [
      { id: "nalani_mahi_ai", name: "Nalani Mahi'ai", householdId: "mahi_ai" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "uha",
    name: "Uha",
    members: [{ id: "pakaa_uha", name: "Paka'a Uha", householdId: "uha" }],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "hekekia",
    name: "Hekekia",
    members: [
      {
        id: "ukupanipo_hekekia",
        name: "Ukupanipo Hekekia",
        householdId: "hekekia",
      },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "sulani",
    packId: "ep07",
  },
  {
    id: "fletcher",
    name: "Fletcher",
    members: [
      {
        id: "cameron_fletcher",
        name: "Cameron Fletcher",
        householdId: "fletcher",
      },
    ],
    description:
      "Cameron Fletcher is all about learning new things at school, he's just not sure how to make friends with the people around him. But with just a little nudge in the right direction Cameron is sure to master university life.",
    budget: "§4,000",
    unhoused: false,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "elderberry",
    name: "Elderberry",
    members: [
      {
        id: "ekram_elderberry",
        name: "Ekram Elderberry",
        householdId: "elderberry",
      },
      {
        id: "eleanore_elderberry",
        name: "Eleanore Elderberry",
        householdId: "elderberry",
      },
      {
        id: "rohan_elderberry",
        name: "Rohan Elderberry",
        householdId: "elderberry",
      },
    ],
    description:
      "Ekram and Eleanore have lived in Gibbs Hill all their lives from young love, to a growing family, and finally into retirement. Recently their teenage grandson Rohan came to live with them as he prepares to go to university soon.",
    budget: "§25,000",
    unhoused: false,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "best_of_friends",
    name: "Best of Friends",
    members: [
      {
        id: "julia_wright",
        name: "Julia Wright",
        householdId: "best_of_friends",
      },
      {
        id: "becca_clarke",
        name: "Becca Clarke",
        householdId: "best_of_friends",
      },
    ],
    description:
      "Julia and Becca have been the best of friends since they first met in kindergarten. Now as they're starting university, it's up to the pair to see if their friendship will survive this new adventure and carry them into adulthood.",
    budget: "§5,000",
    unhoused: false,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "pleasant",
    name: "Pleasant",
    members: [
      {
        id: "lilith_pleasant",
        name: "Lilith Pleasant",
        householdId: "pleasant",
      },
      {
        id: "angela_pleasant",
        name: "Angela Pleasant",
        householdId: "pleasant",
      },
    ],
    description:
      "Angela and Lilith Pleasant have moved into an old family home in Gibbs Hill to attend the prestigious universities in Britechester. Will their bond as twins survive the challenges of academic life?",
    budget: "§20,000",
    unhoused: false,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "fen",
    name: "Fen",
    members: [{ id: "jing_fen", name: "Jing Fen", householdId: "fen" }],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "mckinnon",
    name: "McKinnon",
    members: [
      { id: "lana_mckinnon", name: "Lana McKinnon", householdId: "mckinnon" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "bhamra",
    name: "Bhamra",
    members: [
      { id: "serena_bhamra", name: "Serena Bhamra", householdId: "bhamra" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "jabari",
    name: "Jabari",
    members: [
      { id: "thomas_jabari", name: "Thomas Jabari", householdId: "jabari" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "britechester",
    packId: "ep08",
  },
  {
    id: "greenburg",
    name: "Greenburg",
    members: [
      {
        id: "knox_greenburg",
        name: "Knox Greenburg",
        householdId: "greenburg",
      },
      {
        id: "mary_greenburg",
        name: "Mary Greenburg",
        householdId: "greenburg",
      },
      {
        id: "blossom_greenburg",
        name: "Blossom Greenburg",
        householdId: "greenburg",
      },
    ],
    description:
      "Mary and Blossom are a couple of old timers in this town. They're trying to spruce up the space, with Mary focused on her garden and Blossom painting up unused places. Their adopted son Knox is fighting for the family name to help make the world a little more green.",
    budget: "§15,000",
    unhoused: false,
    worldId: "evergreen_harbor",
    packId: "ep09",
  },
  {
    id: "harris",
    name: "Harris",
    members: [
      { id: "cletus_harris", name: "Cletus Harris", householdId: "harris" },
      { id: "faye_harris", name: "Faye Harris", householdId: "harris" },
      { id: "jeb_harris", name: "Jeb Harris", householdId: "harris" },
      { id: "gideon_harris", name: "Gideon Harris", householdId: "harris" },
      {
        id: "francine_spencer",
        name: "Francine Spencer",
        householdId: "harris",
      },
    ],
    description:
      "Cletus and Faye found this heritage home in Grims Quarry for dirt cheap. Cletus' free-spirited mother soon joined them. Their eldest son Jeb always wears a shameful bag on his head, and despite few jobs in the house, they live comfortably. What is going on here?",
    budget: "§20,000",
    unhoused: false,
    worldId: "evergreen_harbor",
    packId: "ep09",
  },
  {
    id: "sterling_rico",
    name: "Sterling Rico",
    members: [
      {
        id: "bess_sterling",
        name: "Bess Sterling",
        householdId: "sterling_rico",
      },
      { id: "jules_rico", name: "Jules Rico", householdId: "sterling_rico" },
    ],
    description:
      "Bess and Jules are a power couple with big dreams—about sweet sweet money. Bess is a civil designer who knows how to work the system, and Jules is a Style Influencer who charms everyone with his rejected looks. Together, they hustle Evergreen Harbor like pros.",
    budget: "§25,000",
    unhoused: false,
    worldId: "evergreen_harbor",
    packId: "ep09",
  },
  {
    id: "tinker",
    name: "Tinker",
    members: [
      { id: "yasemin_tinker", name: "Yasemin Tinker", householdId: "tinker" },
      { id: "tina_tinker", name: "Tina Tinker", householdId: "tinker" },
      { id: "olive_tinker", name: "Olive Tinker", householdId: "tinker" },
    ],
    description:
      "Tina is a very successful but stressed Freelance Crafter, and Yasemin, her equally successful spouse, just wants her to slow down and spend time with their daughter Olive—who already dreams of following in her moms' footsteps.",
    budget: "§30,000",
    unhoused: false,
    worldId: "evergreen_harbor",
    packId: "ep09",
  },
  {
    id: "akiyama",
    name: "Akiyama",
    members: [
      { id: "jenna_akiyama", name: "Jenna Akiyama", householdId: "akiyama" },
      { id: "kado_akiyama", name: "Kado Akiyama", householdId: "akiyama" },
      { id: "taku_akiyama", name: "Taku Akiyama", householdId: "akiyama" },
      { id: "miki_akiyama", name: "Miki Akiyama", householdId: "akiyama" },
    ],
    description:
      "The Akiyamas moved away from the hustle and bustle of the city to the quiet town where Kado was raised. They're hoping for a calmer life, but old feelings stir as Kado's childhood sweetheart Megumi also returns to Mt. Komorebi.",
    budget: "§24,335",
    unhoused: false,
    worldId: "mt_komorebi",
    packId: "ep10",
  },
  {
    id: "ito",
    name: "Ito",
    members: [
      { id: "naoki_ito", name: "Naoki Ito", householdId: "ito" },
      { id: "megumi_ito", name: "Megumi Ito", householdId: "ito" },
      { id: "kiyoshi_ito", name: "Kiyoshi Ito", householdId: "ito" },
      { id: "nanami_ito", name: "Nanami Ito", householdId: "ito" },
    ],
    description:
      "Megumi and Naoki Ito, both former medalist athletes, returned to their roots with big plans—though not the same ones. While Megumi focuses on family, Naoki pushes for development. Meanwhile, their kids dream of carving their own paths.",
    budget: "§42,562",
    unhoused: false,
    worldId: "mt_komorebi",
    packId: "ep10",
  },
  {
    id: "nishidake",
    name: "Nishidake",
    members: [
      {
        id: "shigeru_nishidake",
        name: "Shigeru Nishidake",
        householdId: "nishidake",
      },
      {
        id: "sachiko_nishidake",
        name: "Sachiko Nishidake",
        householdId: "nishidake",
      },
      {
        id: "kaori_nishidake",
        name: "Kaori Nishidake",
        householdId: "nishidake",
      },
    ],
    description:
      "The Nishidakes are seen as guardians of Mt. Komorebi. Shigeru is protective of the mountain, while Sachiko maintains old bonds with the Ito family. Kaori dreams of peace, love, and freedom—but her heart lies with a forbidden crush.",
    budget: "§25,000",
    unhoused: false,
    worldId: "mt_komorebi",
    packId: "ep10",
  },
  {
    id: "a_new_start",
    name: "A New Start",
    members: [
      { id: "cecilia_kang", name: "Cecilia Kang", householdId: "a_new_start" },
    ],
    description:
      "After living in the big city and having her heart broken, Cecilia ditched everything for a garden plot and some chickens. A date-gone-wrong with Michael Bell has her keeping company with critters instead of people—for now.",
    budget: "§20,000",
    unhoused: false,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "moody_mcmillan",
    name: "Moody & McMillan",
    members: [
      {
        id: "derek_mcmillan",
        name: "Derek McMillan",
        householdId: "moody_mcmillan",
      },
      { id: "ian_moody", name: "Ian Moody", householdId: "moody_mcmillan" },
    ],
    description:
      "Derek and Ian moved into Derek's old family cottage for a peaceful retirement. Despite their differences, the two live a happy life as key members of the Henford-on-Bagley community, balancing daily adventures and quiet moments.",
    budget: "§22,000",
    unhoused: false,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "scott",
    name: "Scott",
    members: [
      { id: "simon_scott", name: "Simon Scott", householdId: "scott" },
      { id: "sara_scott", name: "Sara Scott", householdId: "scott" },
    ],
    description:
      "Simon and Sara run Finchwick’s pub, The Gnome’s Arms. Sara’s living her countryside dream, but Simon—more used to city life—is still adjusting to chicken sightings. Will the possibility of a growing family bring them closer or stir things up?",
    budget: "§22,000",
    unhoused: false,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "watson",
    name: "Watson",
    members: [
      { id: "thomas_watson", name: "Thomas Watson", householdId: "watson" },
      { id: "rahmi_watson", name: "Rahmi Watson", householdId: "watson" },
      { id: "rashidah_watson", name: "Rashidah Watson", householdId: "watson" },
      { id: "imran_watson", name: "Imran Watson", householdId: "watson" },
      { id: "maira_watson", name: "Maira Watson", householdId: "watson" },
    ],
    description:
      "Thomas inherited the family estate, but keeping it—and his family—together is proving difficult. With differing dreams and tensions rising, will the Watsons grow stronger or fall apart in their ‘old new’ home?",
    budget: "§28,000",
    unhoused: false,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "chopra",
    name: "Chopra",
    members: [
      { id: "lavina_chopra", name: "Lavina Chopra", householdId: "chopra" },
      { id: "rahul_chopra", name: "Rahul Chopra", householdId: "chopra" },
    ],
    description:
      "Lavina has grown to love raising her son and managing village life. Rahul admires his mother but dreams of leaving Henford behind to explore the world. Can he follow his dreams without breaking her heart?",
    budget: "§22,000",
    unhoused: true,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "bell",
    name: "Bell",
    members: [
      { id: "michael_bell", name: "Michael Bell", householdId: "bell" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "goldbloom",
    name: "Goldbloom",
    members: [
      { id: "kim_goldbloom", name: "Kim Goldbloom", householdId: "goldbloom" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "henford_on_bagley",
    packId: "ep11",
  },
  {
    id: "laurent",
    name: "Laurent",
    members: [
      { id: "arnessa_thebe", name: "Arnessa Thebe", householdId: "laurent" },
      { id: "hector_laurent", name: "Hector Laurent", householdId: "laurent" },
      { id: "hilary_laurent", name: "Hilary Laurent", householdId: "laurent" },
      { id: "greta_laurent", name: "Greta Laurent", householdId: "laurent" },
      { id: "jace_laurent", name: "Jace Laurent", householdId: "laurent" },
    ],
    description:
      "Though the Laurent name may be new, the family has deep roots in Tartosa. From wedding venues to culinary history, this family has built an empire around love, food, and celebration.",
    budget: "§20,000",
    unhoused: false,
    worldId: "tartosa",
    packId: "gp11",
  },
  {
    id: "markovic",
    name: "Markovic",
    members: [
      { id: "lucia_markovic", name: "Lucia Markovic", householdId: "markovic" },
      { id: "mateo_markovic", name: "Mateo Markovic", householdId: "markovic" },
      { id: "tomi_markovic", name: "Tomi Markovic", householdId: "markovic" },
    ],
    description:
      "The Markovic family is known for their musical talent and strained rivalry with the Laurents. Despite their own wedding being perpetually postponed, they remain a key player in Tartosa's romantic scene.",
    budget: "§20,000",
    unhoused: false,
    worldId: "tartosa",
    packId: "gp11",
  },
  {
    id: "soto",
    name: "Soto",
    members: [
      { id: "camille_soto", name: "Camille Soto", householdId: "soto" },
      { id: "dominique_soto", name: "Dominique Soto", householdId: "soto" },
    ],
    description:
      "Camille and Dominique were married in Tartosa and returned every year until finally retiring to their favorite destination. Dominique paints the village; Camille preserves its history. Together, they are Tartosa's heart and soul.",
    budget: "§20,000",
    unhoused: true,
    worldId: "tartosa",
    packId: "gp11",
  },
  {
    id: "jaleel",
    name: "Jaleel",
    members: [
      { id: "faiz_jaleel", name: "Faiz Jaleel", householdId: "jaleel" },
    ],
    description:
      "Florist and hopeless romantic Faiz Jaleel lives in a town devoted to weddings while yearning for his own love story. Until then, he spreads joy one flower at a time.",
    budget: "§20,000",
    unhoused: true,
    worldId: "tartosa",
    packId: "gp11",
  },
  {
    id: "volkov",
    name: "Volkov",
    members: [
      {
        id: "kristopher_volkov",
        name: "Kristopher Volkov",
        householdId: "volkov",
      },
      { id: "jacob_volkov", name: "Jacob Volkov", householdId: "volkov" },
      { id: "lily_zhu", name: "Lily Zhu", householdId: "volkov" },
    ],
    description:
      "Kristopher Volkov founded the Moonwood Collective and offers refuge to wandering werewolves. Alongside Lily and his son Jacob—his chosen successor—Kristopher remains the calm and wise alpha of his pack.",
    budget: "§20,000",
    unhoused: false,
    worldId: "moonwood_mill",
    packId: "gp12",
  },
  {
    id: "howell",
    name: "Howell",
    members: [{ id: "lou_howell", name: "Lou Howell", householdId: "howell" }],
    description:
      "Lou tried to impress his date by teasing the town’s most feral werewolf… and paid for it. While Celene found a cure, Lou’s still living with the consequences. Mischievous and lost, he’s figuring out if this inner wolf is a curse or a calling.",
    budget: "§20,000",
    unhoused: true,
    worldId: "moonwood_mill",
    packId: "gp12",
  },
  {
    id: "oaklow",
    name: "Oaklow",
    members: [
      { id: "rory_oaklow", name: "Rory Oaklow", householdId: "oaklow" },
    ],
    description:
      "Rory was once under Kristopher Volkov’s wing, but eventually broke away to form the Wildfangs. Her leadership is fierce and proud—but underneath, Rory still wrestles with what kind of alpha she truly wants to be.",
    budget: "§20,000",
    unhoused: true,
    worldId: "moonwood_mill",
    packId: "gp12",
  },
  {
    id: "celene_lopez",
    name: "López",
    members: [
      { id: "celene_lopez", name: "Celene López", householdId: "celene_lopez" },
    ],
    description:
      "Celene was nearly turned into a werewolf on a date with Lou, but found a cure just in time. Now the town’s bartender, she stays close to the supernatural without getting bitten—watching, learning, and pouring drinks.",
    budget: "§20,000",
    unhoused: true,
    worldId: "moonwood_mill",
    packId: "gp12",
  },
  {
    id: "wilder",
    name: "Wilder",
    members: [
      { id: "wolfgang_wilder", name: "Wolfgang Wilder", householdId: "wilder" },
    ],
    description:
      "Wolfgang has lived in Moonwood Mill for decades, quietly promoting positive werewolf lore through his best-selling fiction. The twist? He’s secretly a werewolf himself.",
    budget: "§20,000",
    unhoused: true,
    worldId: "moonwood_mill",
    packId: "gp12",
  },
  {
    id: "harjo",
    name: "Harjo",
    members: [
      { id: "ava_harjo", name: "Ava Harjo", householdId: "harjo" },
      { id: "lucha_harjo", name: "Lucha Harjo", householdId: "harjo" },
      { id: "noah_kane", name: "Noah Kane", householdId: "harjo" },
      { id: "ash_harjo", name: "Ash Harjo", householdId: "harjo" },
    ],
    description:
      "Ava and Lucha fell in love over food and now work at the local high school. With stylish Simfluencer Ash and prankster Noah in the house, life is loud, fast, and full of love—and maybe a little chaos too.",
    budget: "§22,000",
    unhoused: false,
    worldId: "copperdale",
    packId: "ep12",
  },
  {
    id: "prescott",
    name: "Prescott",
    members: [
      { id: "tai_lum", name: "Tai Lum", householdId: "prescott" },
      { id: "mei_prescott", name: "Mei Prescott", householdId: "prescott" },
      { id: "molly_prescott", name: "Molly Prescott", householdId: "prescott" },
      { id: "amy_prescott", name: "Amy Prescott", householdId: "prescott" },
    ],
    description:
      "The Prescotts are a legacy family deeply rooted in Copperdale. Mei, the principal, keeps a close eye on her daughters Molly and Amy, with Grandpa Tai offering gentle wisdom—plus some hallway cleanup duty at school.",
    budget: "§50,000",
    unhoused: false,
    worldId: "copperdale",
    packId: "ep12",
  },
  {
    id: "price",
    name: "Price",
    members: [
      { id: "marcel_price", name: "Marcel Price", householdId: "price" },
      { id: "janae_price", name: "Janae Price", householdId: "price" },
      { id: "kevin_puri", name: "Kevin Puri", householdId: "price" },
      { id: "sidney_price", name: "Sidney Price", householdId: "price" },
      { id: "savannah_price", name: "Savannah Price", householdId: "price" },
      { id: "jayden_price", name: "Jayden Price", householdId: "price" },
    ],
    description:
      "High school sweethearts Janae and Marcel Price are raising three kids—and one exchange student—in a joyful, busy household. There's homework, sports, romance, and a lot of late-night snacks.",
    budget: "§28,000",
    unhoused: false,
    worldId: "copperdale",
    packId: "ep12",
  },
  {
    id: "hiddlestix",
    name: "Hiddlestix",
    members: [
      {
        id: "eloise_hiddlestix",
        name: "Eloise Hiddlestix",
        householdId: "hiddlestix",
      },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "copperdale",
    packId: "ep12",
  },
  {
    id: "coombes",
    name: "Coombes",
    members: [
      { id: "rita_coombes", name: "Rita Coombes", householdId: "coombes" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "copperdale",
    packId: "ep12",
  },
  {
    id: "morlind",
    name: "Morlind",
    members: [
      { id: "anjelo_morlind", name: "Anjelo Morlind", householdId: "morlind" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "copperdale",
    packId: "ep12",
  },
  {
    id: "michaelson",
    name: "Michaelson",
    members: [
      {
        id: "celeste_michaelson",
        name: "Celeste Michaelson",
        householdId: "michaelson",
      },
      {
        id: "christopher_michaelson",
        name: "Christopher Michaelson",
        householdId: "michaelson",
      },
      {
        id: "atlas_michaelson",
        name: "Atlas Michaelson",
        householdId: "michaelson",
      },
      {
        id: "orion_michaelson",
        name: "Orion Michaelson",
        householdId: "michaelson",
      },
    ],
    description:
      "Celeste and Christopher met working at a startup, bonded over shared interests, and adopted Atlas and Orion. Now they're raising two nerdy kids in their own image—and loving every second of it.",
    budget: "§20,000",
    unhoused: false,
    worldId: "san_sequoia",
    packId: "ep13",
  },
  {
    id: "robles",
    name: "Robles",
    members: [
      { id: "ignacio_robles", name: "Ignacio Robles", householdId: "robles" },
      { id: "bernice_robles", name: "Bernice Robles", householdId: "robles" },
      { id: "ian_robles", name: "Ian Robles", householdId: "robles" },
      { id: "aurelio_robles", name: "Aurelio Robles", householdId: "robles" },
    ],
    description:
      "The Robles family has deep roots in San Sequoia, going back to the early fishing boom. Now they thrive on socializing, waterfront hangs, and big family gatherings in Gilbert Gardens.",
    budget: "§20,000",
    unhoused: false,
    worldId: "san_sequoia",
    packId: "ep13",
  },
  {
    id: "robles_ruano",
    name: "Robles-Ruano",
    members: [
      { id: "jay_robles", name: "Jay Robles", householdId: "robles_ruano" },
      { id: "doli_ruano", name: "Doli Ruano", householdId: "robles_ruano" },
      { id: "tala_ruano", name: "Tala Ruano", householdId: "robles_ruano" },
    ],
    description:
      "Jay, Doli, and their daughter Tala might be a little unconventional, but they’re full of love, personality, and creative energy. Now they just hope Tala grows into her unique self too.",
    budget: "§20,000",
    unhoused: false,
    worldId: "san_sequoia",
    packId: "ep13",
  },
  {
    id: "luna_sullivan",
    name: "Luna-Sullivan",
    members: [
      {
        id: "xochitl_luna",
        name: "Xochitl Luna",
        householdId: "luna_sullivan",
      },
      {
        id: "karmine_luna",
        name: "Karmine Luna",
        householdId: "luna_sullivan",
      },
      {
        id: "eleanor_sullivan",
        name: "Eleanor Sullivan",
        householdId: "luna_sullivan",
      },
    ],
    description:
      "After tragedy struck, Eleanor stepped in to help raise her granddaughter Karmine with Xochitl. But 'Gramma-in-charge-ish' Eleanor is just as zany as the rest of them—and the Luna-Sullivans wouldn't have it any other way.",
    budget: "§20,000",
    unhoused: false,
    worldId: "san_sequoia",
    packId: "ep13",
  },
  {
    id: "kyleson",
    name: "Kyleson",
    members: [
      { id: "kyle_kyleson", name: "Kyle Kyleson", householdId: "kyleson" },
    ],
    description: "Kyle’s just… a guy. You know?",
    budget: "§20,000",
    unhoused: true,
    worldId: "san_sequoia",
    packId: "ep13",
  },
  {
    id: "gooseman",
    name: "Gooseman",
    members: [
      { id: "don_gooseman", name: "Don Gooseman", householdId: "gooseman" },
    ],
    description:
      "A retired Horse Champion, Don now lives peacefully in Galloping Gulch with his loyal horse Duke. Once a mentor to Sienna and Umber’s mother, Don enjoys quiet days surrounded by the legacy of his rodeo career.",
    budget: "§20,000",
    unhoused: false,
    worldId: "chestnut_ridge",
    packId: "ep14",
  },
  {
    id: "nectar_making_duo",
    name: "The Nectar Making Duo",
    members: [
      {
        id: "marissa_tracey",
        name: "Marissa Tracey",
        householdId: "nectar_making_duo",
      },
      {
        id: "dani_davila",
        name: "Dani Davila",
        householdId: "nectar_making_duo",
      },
    ],
    description:
      "Marissa and Dani are diving headfirst into the Nectar Making world. Marissa’s charm and ambition keep their network growing, while Dani’s dedication to flavor drives their artistry. Their passion sometimes clashes—but they never give up on each other.",
    budget: "§20,000",
    unhoused: false,
    worldId: "chestnut_ridge",
    packId: "ep14",
  },
  {
    id: "grove",
    name: "Grove",
    members: [
      { id: "umber_grove", name: "Umber Grove", householdId: "grove" },
      { id: "juniper_grove", name: "Juniper Grove", householdId: "grove" },
      { id: "wren_grove", name: "Wren Grove", householdId: "grove" },
    ],
    description:
      "Umber and Juniper’s love blossomed through horses and hometown charm. Now raising their son Wren on their family ranch, they pass down love, legacy, and foal-training wisdom—helped by Luna and the foal, Starbrite.",
    budget: "§20,000",
    unhoused: false,
    worldId: "chestnut_ridge",
    packId: "ep14",
  },
  {
    id: "sienna_flapjack",
    name: "Sienna & Flapjack",
    members: [
      {
        id: "sienna_grove",
        name: "Sienna Grove",
        householdId: "sienna_flapjack",
      },
    ],
    description:
      "With Flapjack by her side, Sienna has claimed multiple Horse Championship titles. After her parents passed, she focused on training and teaching at Hay Now! Equestrian Center, continuing her family’s indigenous legacy with pride.",
    budget: "§20,000",
    unhoused: false,
    worldId: "chestnut_ridge",
    packId: "ep14",
  },
  {
    id: "cahyaputri",
    name: "Cahyaputri",
    members: [
      {
        id: "vanesha_cahyaputri",
        name: "Vanesha Cahyaputri",
        householdId: "cahyaputri",
      },
      {
        id: "zhafira_cahyaputri",
        name: "Zhafira Cahyaputri",
        householdId: "cahyaputri",
      },
    ],
    description:
      "After a tragic microwavable water accident, Vanesha stepped into the role of guardian for her younger sister, Zhafira. With tenant chaos and teenage drama all in one home, Vanesha juggles responsibilities with reluctant grace.",
    budget: "§20,000",
    unhoused: false,
    worldId: "tomarang",
    packId: "ep15",
  },
  {
    id: "linh_sadya",
    name: "Linh-Sadya",
    members: [
      { id: "chanh_linh", name: "Chánh Linh", householdId: "linh_sadya" },
      { id: "arturo_linh", name: "Arturo Linh", householdId: "linh_sadya" },
      { id: "lien_sadya", name: "Liên Sadya", householdId: "linh_sadya" },
      { id: "alon_sadya", name: "Alon Sadya", householdId: "linh_sadya" },
      { id: "cam_sadya", name: "Cam Sadya", householdId: "linh_sadya" },
    ],
    description:
      "With elderly parents and a young child, Liên and Alon Sadya live a life of multigenerational chaos. Fortunately, their finances are steady—even if their home is anything but.",
    budget: "§20,000",
    unhoused: false,
    worldId: "tomarang",
    packId: "ep15",
  },
  {
    id: "linh",
    name: "Linh",
    members: [{ id: "thi_linh", name: "Thi Linh", householdId: "linh" }],
    description:
      "Living below the Linh-Sadya household, quirky aunt Thi embraces solitude, eccentric art, and well-kept secrets. She's an open book... except for that one thing behind the clown painting.",
    budget: "§20,000",
    unhoused: false,
    worldId: "tomarang",
    packId: "ep15",
  },
  {
    id: "bun_ma",
    name: "Bun Ma",
    members: [
      { id: "bua_bun_ma", name: "Bua Bun Ma", householdId: "bun_ma" },
      { id: "kasem_bun_ma", name: "Kasem Bun Ma", householdId: "bun_ma" },
      { id: "nin_bun_ma", name: "Nin Bun Ma", householdId: "bun_ma" },
      { id: "sud_bun_ma", name: "Sud Bun Ma", householdId: "bun_ma" },
    ],
    description:
      "Bua insisted her son’s family move in so she could help raise her grandson. As Sud grows up under one roof with his parents and grandmother, tradition and love hold the family together.",
    budget: "§20,000",
    unhoused: false,
    worldId: "tomarang",
    packId: "ep15",
  },
  {
    id: "panya_li",
    name: "Li",
    members: [{ id: "panya_li", name: "Panya Li", householdId: "panya_li" }],
    description: "",
    budget: "§20,000",
    unhoused: true,
    worldId: "tomarang",
    packId: "ep15",
  },
  {
    id: "nadir",
    name: "Nadir",
    members: [
      { id: "aziz_nadir", name: "Aziz Nadir", householdId: "nadir" },
      { id: "valentina_nadir", name: "Valentina Nadir", householdId: "nadir" },
    ],
    description:
      "High school sweethearts turned city dwellers, Aziz and Valentina once built flower bouquets together—now she builds love stories for others as the city’s most sought-after Matchmaker. But as Valentina’s career soars, will her own love story survive?",
    budget: "§20,000",
    unhoused: false,
    worldId: "ciudad_enamorada",
    packId: "ep16",
  },
  {
    id: "dynamic_daters",
    name: "Dynamic Daters",
    members: [
      {
        id: "manuel_aguilar",
        name: "Manuel Aguilar",
        householdId: "dynamic_daters",
      },
      {
        id: "carmen_ortega",
        name: "Carmen Ortega",
        householdId: "dynamic_daters",
      },
      { id: "elia_cruz", name: "Elia Cruz", householdId: "dynamic_daters" },
      {
        id: "yoltic_xicotencatl",
        name: "Yoltic Xicoténcatl",
        householdId: "dynamic_daters",
      },
    ],
    description:
      "A retired CEO, a loyal personal chef, a dramatic dreamboat, and a style guru walk into a house... no punchline here, just four friends chasing entertainment, romance, and plot twists in the heart of Ciudad Enamorada.",
    budget: "§20,000",
    unhoused: false,
    worldId: "ciudad_enamorada",
    packId: "ep16",
  },
  {
    id: "lopez",
    name: "López",
    members: [
      { id: "monica_lopez", name: "Mónica López", householdId: "lopez" },
      { id: "carlos_lopez", name: "Carlos López", householdId: "lopez" },
      { id: "luz_lopez", name: "Luz López", householdId: "lopez" },
    ],
    description:
      "After her gnome-sculpting ex left the family, Mónica focused on her kids. Now, with adulthood creeping in for Carlos and Luz, she’s exploring her romantic side again—only to fall for her son’s high school classmate, the ever-dreamy Manuel Aguilar.",
    budget: "§20,000",
    unhoused: false,
    worldId: "ciudad_enamorada",
    packId: "ep16",
  },
  {
    id: "izadi_gomes",
    name: "Izadi-Gomes",
    members: [
      { id: "esther_gomes", name: "Esther Gomes", householdId: "izadi_gomes" },
      {
        id: "zuleika_izadi",
        name: "Zuleika Izadi",
        householdId: "izadi_gomes",
      },
    ],
    description:
      "Esther was searching for a ghostly roommate when Zuleika, fresh from a Cowplant accident, moved in. Now they're roommates—and coworkers in the afterlife—learning the ropes of ghostly living and employment under Grim's guidance.",
    budget: "§30,000",
    unhoused: false,
    worldId: "ravenwood",
    packId: "ep17",
  },
  {
    id: "gomes",
    name: "Gomes",
    members: [
      { id: "tziporah_gomes", name: "Tziporah Gomes", householdId: "gomes" },
      { id: "radwan_gomes", name: "Radwan Gomes", householdId: "gomes" },
      { id: "zelmira_gomes", name: "Zelmira Gomes", householdId: "gomes" },
    ],
    description:
      "Tziporah and Radwan tried ghosthood, but decided it's not for them—yet. While Radwan keeps Tziporah safe from accidental death, their child Zelmira is diving into the occult, guided by a mysterious tarot card and a possible Goth family tie.",
    budget: "§52,170",
    unhoused: false,
    worldId: "ravenwood",
    packId: "ep17",
  },
  {
    id: "aether",
    name: "Aether",
    members: [
      { id: "kai_aether", name: "Kai Aether", householdId: "aether" },
      { id: "ekade_aether", name: "Ekade Aether", householdId: "aether" },
      { id: "takama_aether", name: "Takama Aether", householdId: "aether" },
    ],
    description:
      "Kai Aether doesn’t believe in ghosts—which is awkward, since he is one. Now his husband Ekade and son Takama are navigating afterlife denial and spectral confusion in one of Ravenwood’s oddest households.",
    budget: "§75,000",
    unhoused: false,
    worldId: "ravenwood",
    packId: "ep17",
  },
  {
    id: "specter",
    name: "Specter",
    members: [
      { id: "olive_specter", name: "Olive Specter", householdId: "specter" },
      { id: "nyon_specter", name: "Nyon Specter", householdId: "specter" },
      { id: "layne_coffin", name: "Layne Coffin", householdId: "specter" },
    ],
    description:
      "Olive Specter’s past is full of... mysteries. As she prepares to marry rocker Layne Coffin, rumors swirl about her late husbands and Nyon’s murky parentage. Is Grim watching this household closely for a reason? Almost certainly.",
    budget: "§100,000",
    unhoused: false,
    worldId: "ravenwood",
    packId: "ep17",
  },
  {
    id: "koopman",
    name: "Koopman",
    members: [
      { id: "gert_koopman", name: "Gert Koopman", householdId: "koopman" },
      {
        id: "jolanda_koopman",
        name: "Jolanda Koopman",
        householdId: "koopman",
      },
    ],
    description:
      "The Koopmans have kept their pottery legacy alive for decades. But now Gert and Jolanda’s love feels more like wet clay than a finished piece. Can this creative couple rekindle the fire?",
    budget: "§20,000",
    unhoused: false,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "urbane_housesharers",
    name: "Urbane Housesharers",
    members: [
      {
        id: "cannonball_coleman",
        name: "Cannonball Coleman",
        householdId: "urbane_housesharers",
      },
      {
        id: "crispin_black",
        name: "Crispin Black",
        householdId: "urbane_housesharers",
      },
      {
        id: "ollie_mark",
        name: "Ollie Mark",
        householdId: "urbane_housesharers",
      },
    ],
    description:
      "A jazz musician, an eccentric art collector, and a kid in the middle of it all—this house is full of banter, music, and life. Cannonball might not own his dream club yet, but he may have found something better: family.",
    budget: "§40,000",
    unhoused: false,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "sarpong",
    name: "Sarpong",
    members: [
      { id: "nia_sarpong", name: "Nia Sarpong", householdId: "sarpong" },
      { id: "lerato_sarpong", name: "Lerato Sarpong", householdId: "sarpong" },
    ],
    description:
      "Nia returned to her hometown with tattoo dreams and her daughter Lerato in tow. As Nia carves her future in ink, Lerato watches the stars—both hoping to shine bright in Nordhaven.",
    budget: "§22,000",
    unhoused: false,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "loden",
    name: "Loden",
    members: [
      { id: "hattie_loden", name: "Gramma Hattie Loden", householdId: "loden" },
      { id: "dahlia_loden", name: "Dahlia Loden", householdId: "loden" },
      { id: "nora_loden", name: "Nora Loden", householdId: "loden" },
      { id: "freya_loden", name: "Freya Loden", householdId: "loden" },
      { id: "erik_loden", name: "Erik Loden", householdId: "loden" },
    ],
    description:
      "The Koffieboon café has been in the Loden family for generations. Now Nora runs it with the support of her wife Dahlia and mama Hattie, but she worries that her kids may not want to inherit the legacy.",
    budget: "§55,000",
    unhoused: false,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "hoffman",
    name: "Hoffman",
    members: [
      { id: "bruno_hoffman", name: "Bruno Hoffman", householdId: "hoffman" },
      { id: "felix_hoffman", name: "Felix Hoffman", householdId: "hoffman" },
    ],
    description:
      "Bruno's candy stall is a town staple. Just as retirement loomed, his grandson Felix stepped up. Together, they’re rebuilding more than a business—they’re mending a legacy.",
    budget: "§55,000",
    unhoused: true,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "nyhus",
    name: "Nyhus",
    members: [{ id: "corey_nyhus", name: "Corey Nyhus", householdId: "nyhus" }],
    description:
      "Corey is content pouring drinks, watching life swirl around him. But even a content heart can feel a little empty. Maybe someday, someone will order more than just a coffee—with cream.",
    budget: "§22,000",
    unhoused: true,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "amri",
    name: "Amri",
    members: [{ id: "zain_amri", name: "Zain Amri", householdId: "amri" }],
    description:
      "Zain finally took the leap—armed with a guitar, optimism, and a dream. They know the odds are steep, but their heart is in it. Stardom or not, they’re here to sing.",
    budget: "§21,000",
    unhoused: true,
    worldId: "nordhaven",
    packId: "ep18",
  },
  {
    id: "mystical_besties",
    name: "Mystical Besties",
    members: [
      {
        id: "nadya_kishka",
        name: "Nadya Kishka",
        householdId: "mystical_besties",
      },
      {
        id: "iris_ladipo",
        name: "Iris Ladipo",
        householdId: "mystical_besties",
      },
    ],
    description:
      "After a magical night outside a fairy house, Nadya and Iris bonded instantly. Now living together, they embrace nature, chaos, and a dash of enchantment as they chase their mystical destinies.",
    budget: "§20,000",
    unhoused: false,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "ladipo",
    name: "Ladipo",
    members: [
      { id: "flora_ladipo", name: "Flora Ladipo", householdId: "ladipo" },
      { id: "ayo_ladipo", name: "Ayo Ladipo", householdId: "ladipo" },
    ],
    description:
      "Flora and Ayo prefer screens to soil—but their daughter Iris didn’t. Now, with their family split by ideals, they must decide what matters more: their comfort or reconnecting with their daughter.",
    budget: "§20,000",
    unhoused: false,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "nhoam",
    name: "Nhoam",
    members: [{ id: "glen_nhoam", name: "Glen Nhoam", householdId: "nhoam" }],
    description:
      "Surrounded by gnomes and nature, Glen lives a quiet life of woodworking, storytelling, and enchantments. With his wife gone and daughter grown, he keeps the magic alive one gnome at a time.",
    budget: "§20,000",
    unhoused: false,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "enchanted_lovers",
    name: "Enchanted Lovers",
    members: [
      {
        id: "todd_attenberry",
        name: "Todd Attenberry",
        householdId: "enchanted_lovers",
      },
      {
        id: "elric_demuray",
        name: "Elric DeMuray",
        householdId: "enchanted_lovers",
      },
    ],
    description:
      "Todd and Elric are a fairytale couple on the surface, but under the lilypads and glitter lies deeper questioning. While Todd thrives in apothecary work, Elric wonders if wings clip more than they lift.",
    budget: "§20,000",
    unhoused: false,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "summerdream",
    name: "Summerdream",
    members: [
      {
        id: "titania_summerdream",
        name: "Titania Summerdream",
        householdId: "summerdream",
      },
      {
        id: "oberon_summerdream",
        name: "Oberon Summerdream",
        householdId: "summerdream",
      },
      {
        id: "mara_summerdream",
        name: "Mara Summerdream",
        householdId: "summerdream",
      },
    ],
    description:
      "High Fae of Everdew, the Summerdreams flourish in chaos. Titania and Oberon’s romantic strife is matched only by their flair. Meanwhile, their daughter Mara awaits her wings and her own rise into faedom.",
    budget: "§45,000",
    unhoused: false,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "spruce_almighty",
    name: "Spruce Almighty",
    members: [
      {
        id: "spruce_almighty",
        name: "Spruce Almighty",
        householdId: "spruce_almighty",
      },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "mother_nature",
    name: "Mother Nature",
    members: [
      {
        id: "mother_nature",
        name: "Mother Nature",
        householdId: "mother_nature",
      },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "care_ren",
    name: "Care Ren",
    members: [{ id: "care_ren", name: "Care Ren", householdId: "care_ren" }],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "zhaleh_amani",
    name: "Zhaleh Amani",
    members: [
      { id: "zhaleh_amani", name: "Zhaleh Amani", householdId: "zhaleh_amani" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "innisgreen",
    packId: "ep19",
  },
  {
    id: "joe_trader",
    name: "Joe Trader",
    members: [
      { id: "joe_trader", name: "Joe Trader", householdId: "joe_trader" },
    ],
    description: "",
    budget: "§0",
    unhoused: true,
    worldId: "innisgreen",
    packId: "ep19",
  },
];
