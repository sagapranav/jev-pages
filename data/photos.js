// Jev Pages: the photo library.
//
// To add a photo, add one line to PHOTO_TSV:
//   Unsplash photo id | width | height | kind | tags | description
// - id: the part after "photo-" in an images.unsplash.com URL
// - kind: obj for a close-up of a thing (used for product shots); scene, people, detail or abstract for the rest
// - tags: space-separated topic names from PHOTO_TOPICS below; a photo is offered when Jev picks one of its tags
// - description: what is in the picture. Jev never sees the pictures; it chooses between these descriptions.
//
// To add a topic, add it to PHOTO_TOPICS (Jev picks from these), tag some photos with it,
// and add a line to PHOTO_WORDS so the offline preview (no key) can find it too.

const PHOTO_TSV = `
1593443320739-77f74939d0da|3000|3996|obj|coffee cafe cup|white ceramic cup with saucer on a wooden table
1670404161009-29548c027d06|4374|5467|people|coffee cup hand|a hand holding a cup of coffee
1579265898841-79c7890d69cf|4608|3072|people|coffee barista|man making coffee
1563311977-d285756282dc|5725|3817|obj|coffee cup latte|cappuccino
1559001724-fbad036dbc9e|2843|2843|obj|coffee cup latte|cafe latte
1596018589878-217d8603c4c6|4000|5000|detail|coffee pour mug|pouring coffee into a black ceramic mug
1650097364104-eef0e54af0da|2266|4029|obj|coffee latte|a cappuccino with a leaf design
1503240778100-fd245e17a273|3456|2304|obj|coffee mug|coffee in a white ceramic mug
1742549626436-bf3c11dab212|3441|5161|detail|coffee latte|close-up of latte art
1550731358-491ded4af838|2667|4000|people|coffee cup hand|person holding a cup of cappuccino
1511920170033-f8396924c348|3673|5509|detail|coffee beans|flat lay of a latte, ground coffee and beans
1610632380989-680fe40816c6|4000|6000|obj|coffee cup beans|white teacup with coffee beans
1506372023823-741c83b836fe|5472|3648|obj|coffee cup|cup of coffee on a saucer
1507133750040-4a8f57021571|4480|6720|obj|coffee mug|two green mugs of coffee from above
1616241673111-508b4662c707|3122|3609|obj|mug minimal|white ceramic mug on a white table
1594075731547-8c705bb69e50|4391|6587|obj|coffee mug|white ceramic mug with coffee
1494314671902-399b18174975|3648|5472|obj|mug plant|white ceramic mug beside green leaves
1546379753-abb7fd8cfb93|3862|4828|obj|coffee mug ceramics|brown ceramic mug filled with coffee
1503481766315-7a586b20f66d|5655|3848|obj|coffee latte|teacup with latte art
1514228742587-6b1558fcca3d|5023|3349|obj|mug minimal|white ceramic mug
1620807773206-49c1f2957417|5760|3840|obj|coffee machine|black and silver coffee maker
1598959652545-c0230cdbb01f|3840|5760|scene|cafe menu|wooden framed menu board in a cafe
1572982270699-473dfa34d7e7|5113|3409|detail|cafe lamp|glowing pendant lamp
1464979681340-bdd28a61699e|5025|3350|people|cafe counter|woman standing at a cafe counter
1542181961-9590d0c79dab|6000|4000|scene|cafe people|people sitting inside a busy cafe
1565650839149-2c48a094196c|5985|4010|scene|cafe interior|round wooden tables beside a leather sofa
1551887196-72e32bfc7bf3|4074|3244|scene|cafe bar plants|a bar with plants and hanging lights
1600093463592-8e36ae95ef56|6720|4480|scene|cafe interior|rustic cafe with wooden tables, hanging plants and wicker lights
1542372147193-a7aca54189cd|3235|4852|detail|cafe coffee|latte, croissant and a book on a cafe table
1495474472287-4d71bcdd2085|6720|4480|people|coffee friends|three people holding coffee cups together
1447933601403-0c6688de566e|4889|3728|detail|coffee beans|roasted coffee beans
1564849744694-348ecd00c279|3878|5817|scene|cafe window|empty chairs beside a sunny window
1527512666523-bb0e4389d842|4896|3264|people|cafe counter|woman sitting at the counter of a cafe
1469631423273-6995642a6a40|5184|3333|scene|cafe espresso|coffee shop with espresso machines
1645677020082-721a854c24f2|6016|4016|scene|cafe espresso|coffee bar with a machine and warm lights
1553292218-4892c2e7e1ae|3385|5078|detail|coffee barista|hands holding two portafilters of ground coffee
1532713107108-dfb5d8d2fc42|4016|5020|people|coffee barista|barista pouring latte art
1507915135761-41a0a222c709|5219|3479|people|coffee pour|pouring coffee into a white cup
1515860734122-e0d771b36d3e|5304|7952|people|coffee barista|barista pouring coffee
1599549192669-6baac5d32432|3456|5184|people|coffee barista|barista holding a steel milk pitcher
1539021897569-06e9fa3c6bb9|3534|4712|detail|coffee espresso|espresso machine pouring into a cup
1517701848373-805868efd0ac|4480|6720|people|coffee barista|barista making a cappuccino
1623334044303-241021148842|6000|4000|obj|bakery croissant|croissants on a table
1568254183919-78a4f43a2877|4271|2851|scene|bakery bread|breads on a display shelf
1483695028939-5bb13f8648b0|4896|3264|detail|bakery pastry|baked treats on a tray
1583338917451-face2751d8d5|3429|5143|scene|bakery pastry|fruit tarts and cakes on glass shelves
1555507036-ab1f4038808a|3508|2806|obj|bakery croissant|two croissants
1597528662465-55ece5734101|4949|3712|detail|bakery pastry|croissants and chocolate pastries on a wooden board
1509440159596-0249088772ff|3872|2576|obj|bakery bread|three loaves of rustic bread
1559811814-e2c57b5e69df|3744|5616|detail|bakery bread|sliced bread with a bread knife
1711672284661-bd70e38f31b2|6000|4000|scene|bakery|a bakery full of baked goods
1566698629409-787a68fc5724|5472|3648|obj|bakery bread|assorted breads in a basket
1670558889600-9e89e9fdb349|3523|5284|scene|sf city street|a cable car on a city street
1518203562797-e8ddfedac64c|1709|2560|scene|sf city street|a steep city street from below
1693669029055-25fb5ead32ec|3694|4618|scene|sf city|a city with a hill behind it
1618990908798-d5f1b73ab2e1|3024|3780|scene|sf city|trees by a white and red painted house
1730852823407-f8d6e3749205|3719|5958|scene|sf fog bridge|the Golden Gate Bridge in fog
1568225646443-495a47ed95b9|5472|3648|scene|sf bridge|the Golden Gate Bridge
1735068391170-1ced983152ed|3872|2592|scene|sf fog|a foggy view of the Bay Bridge
1705165030650-dbaed3db5a96|5405|3554|scene|sf bridge mono|black and white photo of the Golden Gate Bridge
1719210158965-1d60ceefbcd5|4655|2616|scene|fog water calm|water surrounded by low clouds
1659941983952-7a35d58d3189|7200|4800|scene|sf city sunset|a city at sunset
1503449539626-3ca98a08ad3c|4271|2837|scene|sf street colour|an orange car between painted walls
1760264412079-4ba58d188c92|4896|3672|scene|sf mural colour|colourful graffiti along a long wall
1563913800854-0d14d2e81a2a|3000|2000|scene|city colour|a blue building
1785430914159-d87a34717fa4|6000|4000|scene|sf park city|people relaxing in a sunny park with a skyline
1741952094741-e7d3bb84e8fe|4000|6000|scene|sf street|a street with brick buildings and scooters
1665792235543-0e42f20860c7|5538|3115|scene|storefront shop|a person standing in front of a shop
1715208970431-436fc26933ac|3024|4032|scene|storefront cafe people|people sitting outside a cafe
1672777368863-0d3946b57d95|3648|5472|scene|storefront cafe|tables outside a flower shop
1679241766152-0e47cd92a734|2968|3958|scene|cafe shop|coffee shop with shelves of coffee and books
1694094244883-4da7785493ab|3024|2005|detail|storefront neon|a neon open sign in a window
1700016028783-a4b71b427861|3351|5026|scene|storefront mono|black and white storefront
1567401893414-76b7b1e5a7a5|6000|4000|scene|clothing colour|assorted colourful clothes
1603400521630-9f2de124b33b|4000|6000|scene|clothing neutral|clothing racks with neutral garments
1582719188393-bb71ca45dbb9|3873|5809|scene|clothing knit colour|colourful sweaters on a rack
1625698311031-f0dd15be5144|4000|6000|obj|clothing shirt|white polo shirt on a metal rack
1718985342149-7178154e0aee|5927|3951|scene|clothing store|a clothing store with clothes and hats on display
1604882767135-b41fac508fff|3303|2202|obj|clothing coat|a coat on a rack
1598775378121-e24f7062c151|3360|2240|scene|clothing store neon|a store with a fitting rooms neon sign
1599012307530-d163bd04ecab|3072|4608|obj|clothing flatlay|brown t-shirt and grey trousers laid flat
1612851206272-c5d0cf0d26b0|3902|5845|people|fashion mono|woman in a black dress in front of a mirror
1662532577856-e8ee8b138a8b|9538|6470|people|fashion editorial sky|woman in a red outfit against a blue sky
1580478491436-fd6a937acc9e|3264|4928|people|fashion editorial|woman in a red blazer on stairs
1613915617430-8ab0fd7c6baf|2217|2771|people|fashion tailoring|person in a blazer and trousers
1603189343302-e603f7add05a|5000|3750|people|fashion mono|silhouette in a wide-sleeved black jacket on white
1645561305502-63a9ba09ab09|2680|2144|people|fashion|woman in sunglasses and a coat
1562151270-c7d22ceb586a|8333|12500|people|fashion editorial sky|woman in a yellow dress under a blue sky
1553544260-f87e671974ee|4000|4581|people|fashion editorial|three women lying on a white surface
1629511565591-a1d494ad6c58|3456|5184|people|fashion tailoring|woman in a black blazer
1659522761084-79196b64abe4|3666|4527|people|fashion|person in a white dress
1489987707025-afc232f7ea0f|4080|2720|detail|clothing shirts|shirts hanging on a rack
1490481651871-ab68de25d43d|5472|3648|scene|clothing hangers|clothes on wooden hangers
1551232864-3f0890e580d9|3255|4883|obj|clothing jackets|five jackets on a rack
1501127122-f385ca6ddd9d|2832|3776|obj|clothing shirt|grey shirt on a wooden rack by a window
1580682312385-e94d8de1cf3c|3806|5480|obj|clothing shirt minimal|white shirt on a white hanger
1540221652346-e5dd6b50f3e7|4971|3320|scene|clothing wall|colourful clothes on a wall rack
1598795737563-07467e744bac|4000|6000|obj|clothing tshirt|black t-shirt on a hanger
1556905055-8f358a7a47b2|6000|4000|detail|clothing knit flatlay|beanie, sweater, jeans and tulips on white bedding
1557303696-f0a415dc1b3e|2448|2457|detail|knit texture|close-up of brown knit
1646270968802-6bad28659329|3333|5000|obj|clothing knit|a stack of sweaters
1598871956091-1b9681ae2bf0|4608|3456|detail|knit texture|white and brown knit
1614676471928-2ed0ad1061a4|3933|5175|obj|clothing leather shoes|leather shoes beside a leather belt
1660486044177-45cd45bb5e99|3456|5184|people|fashion street|man in a hat and black jacket
1532332248682-206cc786359f|2592|3872|people|fashion street|man by a glass building
1582164256364-b0eccb922bff|4160|6240|people|fashion street colour|woman in a pink hoodie
1624338618005-0a93e308abae|4000|6000|people|fashion street colour|woman against a green and red wall
1692180142575-c31fcd106b5b|5464|8192|people|fashion street city|woman leaning on a metal structure in the city
1624353656309-8be1a6c457be|3000|4500|people|fashion street|woman walking on a sidewalk
1595950653106-6c9ebd614d3a|4000|6000|obj|shoes pastel|pastel sneakers on a geometric surface
1600269452121-4f2416e55c28|2581|3226|obj|shoes|white sneaker on athletic clothing
1560769629-975ec94e6a86|2898|3624|obj|shoes|white and orange athletic shoes on a box
1608231387042-66d1773070a5|9248|6936|obj|shoes dark|white perforated sneaker on a dark background
1600185365926-3a2ce3cdb9eb|5000|4000|obj|shoes float|sneaker floating on a light background
1595341888016-a392ef81b7de|5716|3774|obj|shoes street|sneaker on asphalt against graffiti
1666819691822-29a09f0992e5|4000|6000|obj|food bowl|a bowl of rice and vegetables
1667499823726-f2c6fc321b66|3818|5727|obj|food bowl|a bowl of salad and rice
1644704170910-a0cdf183649b|5166|3444|people|food bowl|woman holding a bowl of food
1574365321751-0fdea984d9c0|3024|3774|obj|food bowl|two bowls of cooked food
1571750007475-09cc42b58613|3072|4608|obj|food breakfast|oatmeal with nuts
1713372845398-9e5612712f37|7023|4684|obj|coffee cup|coffee on a wooden table
1696739696220-8d2e27465662|3000|2250|obj|drink can|a can of soda on a white background
1674176508097-463b009c6004|4032|3024|obj|drink cans|a large group of soda cans
1629654613528-5d0a2e4166de|4224|5280|obj|drink glass|a glass with ice and a dark drink
1511707171634-5f897ff02aa9|3024|3024|obj|tech phone app|smartphone with a colourful app beside a keyboard
1483478550801-ceba5fe50e8e|6000|4000|people|tech phone|person holding a smartphone
1640936343842-268f9d87e764|3881|4121|obj|tech phone|two phones side by side
1480694313141-fce5e697ee25|5184|3456|obj|tech phone|silver smartphone
1634403665443-81dc4d75843a|5000|2812|obj|tech phone minimal|white phone on a table
1722834228772-01d16b9bf83b|3000|2015|obj|tech phone pink|pink and white phone
1512054502232-10a0a035d672|3099|3099|obj|tech phone plant|space grey phone beside a succulent
1672080070762-764c74ee1227|3840|2160|detail|tech phone|close-up of the back of a phone
1505740420928-5e560c06d30e|5760|3840|obj|tech audio|wireless headphones laid flat
1618366712010-f4ae9c647dcb|4500|6744|obj|tech audio|black wireless headphones on a white table
1613040809024-b4ef7ba99bc3|6000|4000|obj|tech audio pink|pink and white wireless headphones
1583394838336-acd977736f90|3419|5169|obj|tech audio|black and silver headphones on white
1625786682948-2168238883d2|4000|6000|people|tech audio calm|woman in white headphones with her eyes closed
1484704849700-f032a568e944|4096|2732|obj|tech audio|corded headphones
1590658268037-6bf12165a8df|3701|2082|obj|tech audio|black and white headphones on a table
1449247709967-d4461a6a6103|3500|2333|scene|desk minimal|white wooden table near a chair
1587522384446-64daf3e2689a|3277|4096|scene|desk|monitor on a white desk
1639413665566-2f75adf7b7ca|5343|3562|scene|desk minimal|monitor on a white desk
1493934558415-9d19f0b2b4d2|7806|5304|scene|desk|computer on a wooden desk
1471897488648-5eae4ac6686b|3560|5340|obj|desk laptop|laptop beside a plant
1505209487757-5114235191e5|5592|3719|scene|desk laptop|monitor and laptop on a white table
1531935015902-64b87c1f4da5|3448|4592|scene|desk laptop|laptop on a desk
1583209814683-c023dd293cc6|5460|3642|obj|beauty pink|pink cosmetic containers and a brush
1631730486572-226d1f595b68|4500|5500|obj|beauty pink|makeup products on pink
1576426863848-c21f53c60b19|6000|4000|obj|beauty minimal|white dropper bottle on white
1629380108599-ea06489d66f5|5472|3648|obj|beauty|bottles in a woven basket
1638609927040-8a7e97cd9d6a|2391|2988|obj|beauty|tube of cream on a white plate
1598460880248-71ec6d2d582b|4000|5701|scene|beauty|wooden table with beauty products
1601049676869-702ea24cfd58|6016|4000|obj|beauty|white and brown bottles on textile
1609097164502-59a1f0f9a66f|2736|3448|obj|beauty jar|jar of cream on a table
1629732097571-b042b35aa3ed|5472|3648|obj|beauty jar|glass container on a wooden table
1667388969250-1c7220bf3f37|5000|3187|scene|restaurant|a room with tables and chairs
1551632436-cbf8dd35adfa|5064|3375|scene|restaurant people|dining room with people
1613274554329-70f997f5789f|4000|6000|scene|restaurant|white and wooden dining table
1729394405518-eaf2a0203aa7|6000|3376|scene|restaurant|a restaurant with many tables
1636405189493-181ecf851006|3914|5871|scene|restaurant|a restaurant with a tree in the room
1570560258879-af7f8e1447ac|4608|3456|people|restaurant people|people inside an eatery
1538334421852-687c439c92f4|5982|3988|scene|restaurant|wooden tables and chairs
1682778418768-16081e4470a1|8600|6450|scene|restaurant|a restaurant with wooden tables
1709548145082-04d0cde481d4|4582|3070|scene|restaurant dark|a dimly lit restaurant
1622737133809-d95047b9e673|7680|4320|abstract|abstract glow|floating cubes and glowing yellow spheres
1618005198919-d3d4b5a92ead|4000|3000|abstract|abstract pastel|pastel spheres on a gradient
1622547748225-3fc4abd2cca0|7680|4320|abstract|abstract blue|blue and white round shapes
1627637819794-fba32f82be16|3600|2025|abstract|abstract blue dark sea|layered blue waves on dark blue
1643139863038-7355941e9e89|2160|3840|abstract|abstract dark|purple and blue swirl on black
1676731820551-4b2988ae4e29|3750|5000|abstract|abstract blue|a stack of white plates on blue
1650943574955-ac02c65cfc71|5560|3706|abstract|abstract dark|spiral of dark blue blades with teal edges
1671519821564-ced7e41ee7ae|4096|3112|abstract|abstract metallic|metallic cubes in blue and purple
1709626011485-6fe000ea2dbc|8400|5600|abstract|abstract dark|black and blue squares
1618172193763-c511deb635ca|4096|3112|abstract|abstract colour|spiral of blue, purple and yellow discs
1679669693872-12d991fc9d93|8800|5256|abstract|abstract mono|black and white wavy object
1593164842264-854604db2260|3913|5877|people|wellness yoga|woman in eagle pose on a yoga mat
1599447332412-6bc6830c815a|4022|2952|people|wellness yoga|woman doing yoga
1667061481921-b31e615ae740|7952|5304|people|wellness yoga|a woman doing yoga
1676496962536-d8ef110ff6f0|3333|2500|scene|wellness calm|a room with round windows and a plant
1761035005546-62b8018b212a|4160|6240|people|wellness yoga|people stretching on mats in a studio
1730672961077-45090d35fa83|6720|4480|people|wellness calm|woman sitting cross-legged on a yoga mat
1616940779493-6958fbd615fe|6000|4000|scene|wellness calm|a pool beside a potted plant
1522071820081-009f0129c71c|7952|5304|people|team office|group of people using laptops
1603201667141-5a2d4c673378|4880|3160|people|team office|people in front of laptops
1521737604893-d14cc237f11d|7678|5038|people|team office|people around a table
1522202176988-66273c2fd55f|5231|3487|people|team office|three people laughing together
1521737852567-6949f3f9f2b5|6154|4216|people|team office|people sitting at a table
1572021335469-31706a17aaef|5760|3840|people|team office|four coworkers around a laptop
1523240795612-9a054b0db644|5472|3648|people|team office|three people laughing at a laptop
1512568400610-62da28bc8a13|4480|6720|obj|coffee latte|heart latte from above
1607681034540-2c46cc71896d|6771|4515|detail|coffee roasting|stirring freshly roasted coffee beans
1497935586351-b67a49e012bf|5021|3347|detail|coffee beans|coffee beans and ground coffee on a board
1514066558159-fc8c737ef259|4480|6720|people|coffee barista|pouring milk into coffee
1511537190424-bbbab87ac5eb|7360|4912|detail|coffee roasting|pouring coffee beans into a roaster
1522120573867-e574959f84c8|4415|6622|obj|coffee mug ceramics|three white ceramic mugs
1537130508299-46ab547b4be3|5243|3495|detail|coffee beans|coffee beans being ground
1573628684835-ca186702bbde|4476|6720|detail|coffee grinder|machine grinding coffee
1511426420268-4cfdd3763b77|4480|6720|obj|coffee cup ceramics|white and black ceramic cup on a saucer
1566417713940-fe7c737a9ef2|4631|3242|detail|bar cocktail|pouring liquor into a glass
1597075687490-8f673c6c17f6|2624|3936|obj|bar cocktail|martini glass on a wooden table
1615887023516-9b6bcd559e87|2624|3936|obj|bar cocktail|a glass with a yellow drink
1569924995012-c4c706bfcd51|3456|5184|people|bar|woman sitting at a bar
1623408859815-22534357b3db|4097|2727|detail|bar cocktail|pouring a drink into a glass
1671053811058-c6a2f8dbf8be|7008|4672|people|bar cocktail|woman holding a cocktail
1631125915902-d8abe9225ff2|4160|6240|obj|ceramics craft|three brown clay vases
1595351298020-038700609878|6240|4160|people|ceramics craft|shaping clay on a pottery wheel
1605117012605-b68dedd4accc|3038|4554|obj|ceramics cup|brown ceramic cup on a saucer
1590422749897-47036da0b0ff|3744|5616|obj|ceramics mug minimal|white ceramic mug on white
1597696929736-6d13bed8e6a8|5881|3921|obj|ceramics|ceramic vases in neutral tones
1660721671073-e139688fa3cf|2500|2500|obj|ceramics|a stack of bowls and a vase
1589051088132-06f36a22012a|3456|5184|detail|ceramics craft|hands shaping a ceramic bowl
1481401908818-600b7a676c0d|4733|3155|obj|ceramics|stoneware jugs
1620802051782-725fa33db067|2768|1848|people|bike|man riding a bicycle
1601391721091-4646369e0bb5|4635|3090|obj|bike hardware|black and grey road bike
1618322704848-b71bf61dd300|5569|3718|scene|bike city|a bicycle parked on a sidewalk
1563990308267-cd6d3cc09318|5452|3635|detail|bike hardware|bicycle close-up
1618987688327-dc0b28888fe4|5797|3724|obj|bike hardware|bicycle on a concrete floor
1649878938553-1eaac5c27375|4695|3130|people|bike city|man riding a bike down a street
1618773928121-c32242e63f39|4608|3072|scene|hotel room|white bed linen with throw pillows
1611892440504-42a792e24d32|5775|3850|scene|hotel room garden|a hotel bedroom with a wooden bed and a private garden view
1631049307264-da0ec9d70304|6720|4480|scene|hotel room|a bright bedroom with white linen
1582719478250-c89cae4dc85b|3750|2500|scene|hotel room|white bed linen on a wooden bed frame
1549638441-b787d2e11f14|5403|3602|scene|hotel room window|a white bed near a big window
1590490360182-c33d57733427|4032|3024|detail|hotel interior|red throw pillow on a white couch
1433838552652-f9a46b332c40|5760|3840|scene|travel sky|hot air balloons over a valley
1498591100911-8c4880f7c580|3591|5386|scene|travel mountains|mountain ranges at dusk
1526392060635-9d6019884377|6000|4000|scene|travel mountains|ruins among misty mountains
1476514525535-07fb3b4ae5f1|4896|3264|scene|travel lake mountains|a wooden boat on a turquoise lake below mountain peaks
1469474968028-56623f02e42e|3506|2329|scene|travel mountains sun|mountains lit by sun rays
1508556497405-ed7dcd94acfc|5157|3438|scene|travel desert|a desert dune under a blue sky
1677853561400-fe80b546d75c|5729|3819|scene|travel beach sea|a person on a beach by the ocean
1494783367193-149034c05e8f|5472|3648|scene|travel road|a lone road towards the mountains
1534438327276-14e5300c3a48|4272|2848|scene|gym|a woman in a gym surrounded by equipment
1517836357463-d25dfeac3438|4933|3289|people|gym strength|person about to lift a barbell
1623874514711-0f321325f318|6000|4000|scene|gym|weights and benches in a spacious industrial gym
1576678927484-cc907957088c|4000|6000|detail|gym|a row of dumbbells on a rack
1548690312-e3b507d8c110|3648|5472|people|gym training|woman training with battle ropes
1593079831268-3381b0db4a77|6016|4016|scene|gym|a row of treadmills on wooden floors
1722925541142-5db2668ca492|2401|3600|people|gym strength|a woman lifting a barbell
1459749411175-04bf5292ceea|5184|3456|scene|concert crowd|a crowd at a concert
1470229722913-7c0e2dbbafd3|5506|3671|scene|concert stage light|stage lights in front of an audience
1533174072545-7a4b6ad7a6c3|5760|3844|scene|concert festival|people gathered in a festival field
1514525253161-7a46d19cd819|3909|2932|scene|concert crowd|a crowd in front of a stage
1493225457124-a3eb161ffa5f|5233|3489|people|concert singer|a singer on stage
1524368535928-5b5e00ddc76b|6720|4480|scene|concert band|a band performing to a crowd
1540039155733-5bb13f8648b0|4032|3024|scene|concert stage|a crowd facing a lit stage
1600210491892-03d54c0aaf87|3000|4000|scene|interior home|a white sofa chair by a fireplace
1724582586529-62622e50c0b3|4000|2500|scene|interior home|a modern living room with a large window
1600210492493-0946911123ea|4000|3000|scene|interior home|a living room with a brown sofa and big windows
1632119580908-ae947d4c7691|5000|5000|scene|interior home colour|a living room with a green couch and a coffee table
1628744876497-eb30460be9f6|6240|4160|scene|interior home|two grey velvet sofas in a bright living room
1600210491369-e753d80a41f3|4000|3000|scene|interior home|a white sofa with a mustard cushion and framed art
1613545325268-9265e1609167|6240|4160|scene|interior home|a white couch by a glass window
1580582932707-520aed937b7b|4668|2626|scene|classroom|an empty classroom with desks and a chalkboard
1577896851231-70ef18881754|10800|7200|people|classroom teaching|a teacher in front of children
1639548538099-6f7f9aec3b92|2586|3872|scene|classroom library|wooden tables in a library lined with books
1524178232363-1fb2b075b655|5101|3401|people|classroom|a group learning in front of a projector screen
1541829070764-84a7d30dd3f3|4240|2832|scene|classroom|rows of wooden desks in a lecture hall
1511629091441-ee46146481b6|6000|4000|people|classroom teaching|a teacher writing equations on a chalkboard
1540575467063-178a50c2df87|5472|3648|scene|conference|a full room of people at a conference
1587825140708-dfaf72ae4b04|3936|2624|scene|conference stage|a speaker on stage addressing a large audience
1582192730841-2a682d7375f9|4032|3024|scene|conference stage|a panel discussion on a stage in an auditorium
1505373877841-8d25f7d46678|3000|2143|scene|conference|a talk in front of a big screen in a dim room
1475721027785-f74eccf877e2|5472|3648|detail|conference microphone|a microphone in shallow focus
1634449571010-02389ed0f9b0|5760|3840|people|salon hair|a woman getting her hair cut by a stylist
1600948836101-f9ffda59d250|5761|4000|scene|salon|black salon chairs facing round mirrors on a dark wall
1633681926022-84c23e8cb2d6|6000|4002|scene|salon|a modern hair salon with black chairs and round mirrors
1632345031435-8727f6897d53|6720|4480|people|salon nails|a woman getting her nails done
1598488035139-bdbb2231ce04|6720|4480|scene|studio music|a recording studio with guitars and a mixing console
1531651008558-ed1740375b39|2000|3000|detail|studio music mono|a studio microphone beside a pop filter
1478737270239-2f02b77fc618|4240|2827|detail|studio music|close-up of a studio microphone
1574517947730-55cb23e608c2|6720|4480|detail|studio music|an audio mixer
1511379938547-c1f69419868d|6720|4480|scene|studio music|guitars beside a side table
1621831337128-35676ca30868|4601|3067|scene|office building|a white and blue glass building
1583009640887-eafd1a994d30|3902|4878|scene|office building mono|a black and white building under a grey sky
1703355685722-2996b01483be|5000|3333|scene|office meeting|a meeting room with a view of the street
1543892607-04657ef3a279|4846|3231|scene|office building|a white concrete building in daylight
1629828874514-c1e5103f2150|4160|6240|obj|fruit peach|two whole peaches and a halved peach on white
1642372849486-f88b963cb734|2858|2858|obj|fruit peach|a couple of ripe peaches
1595124245030-41448b199d6d|3173|3966|obj|fruit peach|sliced red and yellow stone fruit
1565769583321-29e69b493031|3648|5472|obj|fruit peach|orange peach fruits
1692561796478-3c43d6656e42|6000|4000|scene|fruit peach|a box of peaches on a table
1438274754346-45322cac87e4|2048|1365|scene|fruit peach|ripe peaches on the tree
1692805949197-f66e05e9d702|8256|5504|scene|fruit peach|sliced stone fruit up close
1632751163367-01ff55bbc6b2|2592|3872|obj|fruit peach|a pile of peaches
1592858321831-dabeabc2dd65|4000|6000|obj|drink fruit peach|a glass of peach drink on white
1676693420436-7fa448f054eb|3693|5123|scene|drink fruit|a glass with ice and fruit on a table
1694019835724-c8a1b92e37c7|3654|5481|scene|drink fruit|a hand holding a drink with fruit
1601049003145-5d0fcfbb2a47|2384|2848|obj|drink fruit peach|a glass bottle of orange juice
1626032741244-736d5a491e77|4128|2752|scene|drink cans|two white and orange cans on green leaves
1613639119901-da64d78fe61f|5760|3840|scene|drink sparkling|water droplets on cold glass
1763178947981-e0501747d184|2552|3828|obj|drink sparkling cherry|bubbles rising in a dark red drink
1628200508115-3f23c3be57b3|5936|7915|obj|drink sparkling|a yellow sparkling drink in a glass
1551753103-f121bd83be46|3477|5215|obj|drink|a highball glass
1716339140080-be256d3270ce|2369|2961|obj|drink sparkling citrus fruit|orange slices in sparkling water with bubbles
1544241907-f3f1f5ded15a|3024|4032|obj|drink sparkling|soda over ice
1533007716222-4b465613a984|3661|5491|obj|drink|an ice cube dropping into a drink
1544418749-94b09b11e93f|2983|4474|scene|drink|ice and a drink being poured in daylight
1499638673689-79a0b5115d87|3532|4416|obj|drink berry fruit|a red drink with ice and leaves
1556679343-c7306c1976bc|2899|3624|obj|drink tea|a glass of iced tea
1523677011781-c91d1bbe2f9e|3731|5517|scene|drink citrus fruit|lemon beside two glasses
1621263764928-df1444c5e859|3299|4948|obj|drink citrus|a glass of lemonade
1507281549113-040fcfef650e|5568|3712|scene|drink citrus fruit|a lime drink beside sliced limes
1656936632107-0bfa69ea06de|6000|4000|scene|drink citrus|glasses of lemonade
1656936637945-571e3f0893f9|4000|5000|scene|drink citrus fruit|squeezing a lemon over lemonade
1546548970-71785318a17b|3104|4656|obj|fruit citrus|sliced pomegranate, lime and lemon from above
1610833805553-43556a0f821d|4458|6413|obj|fruit citrus|a lemon on white
1629923464290-008980c6c083|4000|6000|obj|fruit citrus|sliced orange and green citrus
1608679627228-a8393e0f3fa5|6000|4000|scene|fruit citrus|sliced oranges on black
1597714026720-8f74c62310ba|5688|3792|scene|fruit citrus|oranges under a blue sky
1578855691621-8a08ea00d1fb|3024|4032|obj|fruit citrus|limes
1528821154947-1aa3d1b74941|5221|3481|scene|fruit cherry|red cherries
1559181567-c3190ca9959b|2244|2805|obj|fruit cherry|two cherries
1610523377846-eba487f8f574|4000|5709|obj|fruit cherry|cherries up close
1520236060906-9c5ed525b025|6016|4016|scene|fruit cherry|a heap of red cherries
1528820600606-0ef5600cbfee|4360|2907|scene|fruit cherry|cherries close-up
1528821128474-27f963b062bf|5170|3447|scene|fruit cherry|two cherries on white
1594002348772-bc0cb57ade8b|2000|3000|obj|fruit berry|fresh blueberries
1596591606975-97ee5cef3a1e|3051|4470|obj|fruit berry|berries on black
1613082410785-22292e8426e7|2333|3499|obj|fruit berry|strawberries in a bowl
1556048029-9c5edf1aa695|3710|2474|scene|fruit berry|raspberries and blueberries
1601091658622-09c1cf56db22|5184|3456|scene|fruit berry|strawberries and blueberries on a plate
1425934398893-310a009a77f9|2000|1333|scene|fruit berry|mixed berries
1519591841160-6af9d9ec3c68|4000|2649|scene|fruit berry|blueberries in a dish
1475274047050-1d0c0975c63e|5456|3632|scene|stars night|stars in the night sky
1528818955841-a7f1425131b5|6000|3375|scene|stars night|the milky way
1534796636912-3b95b3ab5986|5150|3433|scene|stars night|a night sky filled with stars
1429305336325-b84ace7eba3b|5184|3456|scene|stars night|stars behind thin clouds
1444080748397-f442aa95c3e5|4240|2384|scene|stars night|stars above the trees
1518837695005-2083093ee35b|6000|4000|scene|sea|the open sea under a soft sky
1559827260-dc66d52bef19|4957|3305|scene|sea|sea waves
1498330177096-689e3fb901ca|2504|1878|scene|sea|a blue wave breaking near the shore
1508624217470-5ef0f947d8be|6000|4000|scene|sea|sea waves from above
1513553404607-988bf2703777|2893|3857|obj|sea|waves meeting sand from above
1446038202205-1c96430dbdab|5560|3712|scene|sea travel|a rocky coastline with blue water
1462400362591-9ca55235346a|5143|3587|scene|sea|the ocean by trees and rocks
1555979864-7a8f9b4fddf8|5014|3340|scene|sea|a beach line from above
1515506733362-f6161cbcfbe6|3199|2133|scene|sea|cliffs by the sea
1503756234508-e32369269deb|2232|2976|scene|sea|an empty seashore
1652007762293-351f77da346f|3667|5500|scene|coffee roasting|a wooden spoon over a bowl of beans
1623659228341-21bc94462e9f|4000|6000|obj|coffee|a bowl of coffee beans
1717380047369-30d9b9ce95e5|4108|5135|obj|coffee|coffee on a pile of beans
1755498208443-5d2b6180d934|4000|6000|obj|coffee roasting|a scoop of roasted coffee beans
1736592506202-7c15372c1df2|6240|4160|scene|coffee|bags of coffee on a shelf
1613803745799-ba6c10aace85|2437|3425|obj|beauty|a bottle beside a round jar
1717603545758-88cc454db69b|3970|5955|obj|drink tea matcha|an iced matcha latte
1631308491952-040f80133535|2307|3483|obj|drink tea matcha|pouring matcha into a glass
1589698272390-0501a07619bb|2991|1994|scene|drink tea matcha|whisking matcha in a bowl
1624893578106-a98840591afc|4000|6000|scene|drink tea matcha|sifting matcha powder
1749280447307-31a68eb38673|4265|6400|obj|drink tea matcha|an iced matcha latte on a table
1609951651556-5334e2706168|4480|6720|obj|bar cocktail|a cocktail with lime and rosemary
1657313666513-70770d329ef4|3917|5876|obj|bar cocktail citrus|blood orange cocktails
1514362545857-3bc16c4c7d1b|5010|3340|scene|bar cocktail|a tumbler on a wooden tray
1570598912132-0ba1dc952b7d|3072|4606|obj|bar cocktail citrus|orange cocktails with rosemary
1500217052183-bc01eee1a74e|2832|4240|obj|bar cocktail|a cocktail with olives, macro
1592858167090-2473780d894d|3877|5815|obj|bar cocktail berry|a pink cocktail with strawberries
`;

// The topics Jev chooses between when it reads the notes ("what should the photos show?")
const PHOTO_TOPICS = {
  coffee: 'Coffee: espresso, beans, cups', cafe: 'Inside a café', bakery: 'Bread, pastries and bakeries', food: 'Plates of food and cooking', restaurant: 'Restaurant dining rooms',
  bar: 'Bars and drinks at night', cocktail: 'Cocktails up close', drink: 'Cold drinks, juices, sodas and cans', fruit: 'Fresh fruit', peach: 'Peaches', citrus: 'Lemons, limes and oranges',
  cherry: 'Cherries', berry: 'Berries', tea: 'Tea', matcha: 'Matcha', sf: 'San Francisco streets and fog', city: 'City streets', storefront: 'Shop fronts and windows',
  clothing: 'Clothes on rails and folded', fashion: 'Fashion and lookbooks', knit: 'Knitwear and wool', shoes: 'Shoes and sneakers', beauty: 'Skincare and cosmetics',
  tech: 'Phones and gadgets', audio: 'Headphones, music gear and sound', desk: 'Laptops and desks', team: 'People working together', office: 'Offices',
  wellness: 'Yoga, calm and wellbeing', hotel: 'Hotel rooms and stays', travel: 'Mountains, lakes and travel', sea: 'The sea, beaches and coastline', stars: 'Night skies and stars',
  gym: 'Gyms and strength training', concert: 'Concerts and live music', interior: 'Homes and interiors', classroom: 'Classrooms and learning', conference: 'Conferences and talks',
  salon: 'Hair and nail salons', studio: 'Music recording studios: microphones and mixing desks', ceramics: 'Ceramics and pottery', bike: 'Bikes and cycling', abstract: 'Abstract textures and light',
  none: 'No photographs: there is nothing real to photograph',
};

// words in the notes that point at a kind of photo (code narrows the library; Jev chooses from what is left)
const PHOTO_WORDS = {
  coffee: /\b(coffee|espresso|latte|cortado|cappuccino|roast\w*|barista|beans?|brew\w*|mug)\b/i, cafe: /\b(caf[eé]s?|coffee (?:shop|bar|house)|brunch|window table)\b/i, bakery: /\b(bak\w+|bread|croissants?|pastr\w+|sourdough|buns?)\b/i,
  food: /\b(food|bowls?|meals?|lunch|dinner|salads?|chefs?|kitchens?|cook(?:s|ing)?)\b/i, restaurant: /\b(restaurants?|dining|dinner|bistros?|eatery|eateries|chefs?)\b/i, bar: /\b(bar|cocktails?|wine|drinks)\b/i, drink: /\b(soda|juice|sparkling|cans|seltzer|lemonade|kombucha|tonic|cola|beverages?|smoothies?|iced tea|matcha latte)\b/i,
  sf: /\b(san francisco|sf|mission|valencia|hayes valley|castro|soma|bay area|golden gate|fog)\b/i, city: /\b(city|street|neighbou?rhood|downtown|corner|block)\b/i, storefront: /\b(shop|store|storefront|window)\b/i,
  clothing: /\b(cloth\w*|apparel|shirts?|jackets?|denim|trousers?|overshirt|wardrobe|garments?|wear)\b/i, fashion: /\b(fashion|style|boutique|label|collection|streetwear|look)\b/i, knit: /\b(knit\w*|merino|wool|sweaters?|cashmere)\b/i, shoes: /\b(shoes?|sneakers?|footwear|boots?)\b/i,
  beauty: /\b(skincare|beauty|cosmetic\w*|serum|cream|makeup)\b/i, tech: /\b(phone|app|mobile|device|gadget|electronics?)\b/i, audio: /\b(headphones?|audio|music|sound|earbuds?|recorder|speaker)\b/i,
  desk: /\b(software|saas|dashboard|desk|remote|laptop)\b/i, team: /\b(team|teams|collaborat\w*|office|coworkers?)\b/i, abstract: /\b(ai|data|cloud|platform|api|infra\w*|agents?|model)\b/i,
  wellness: /\b(yoga|wellness|meditat\w*|calm|sleep|breath\w*)\b/i,
  hotel: /\b(hotels?|rooms?|stays?|suites?|beds?|guesthouse|resort|villa)\b/i, travel: /\b(travel|trips?|mountains?|lake|desert|islands?|tours?|journey)\b/i, sea: /\b(sea|ocean|coast(?:al|line)?|beach(?:es)?|shore(?:line)?|tides?|waves?|surf\w*|harbou?r|seaside)\b/i, gym: /\b(gym|fitness|workouts?|training|strength|lift\w*|barbells?|crossfit|fitness classes)\b/i,
  concert: /\b(concerts?|gigs?|festival|live|stage|crowd|tour|band|shows?)\b/i, interior: /\b(furniture|interior\w*|sofas?|living room|home|decor|lamps?|chairs?)\b/i, classroom: /\b(courses?|school|class|learn\w*|students?|teach\w*|lessons?)\b/i,
  conference: /\b(conference|summit|events?|talks?|speakers?|meetup)\b/i, salon: /\b(salon|hair\w*|nails|stylists?)\b/i, studio: /\b(studio|record\w*|producer|mix\w*|microphone|album|songs?)\b/i, office: /\b(agency|firm|consult\w*|law|legal|accounting|architect\w*|office)\b/i, ceramics: /\b(ceramic\w*|pottery|clay|vases?|handmade|stoneware)\b/i, bike: /\b(bikes?|bicycles?|cycling|e-?bike|ride)\b/i,
  fruit: /\b(fruit\w*|peach\w*|cherr(?:y|ies)|berr(?:y|ies)|strawberr\w*|raspberr\w*|blueberr\w*|citrus|lemon\w*|limes?|oranges?|mango\w*|apricots?|grapefruit|watermelon|pineapple|plums?)\b/i, peach: /\bpeach\w*\b/i, citrus: /\b(citrus|lemon\w*|limes?|oranges?|grapefruit|yuzu|clementines?)\b/i, cherry: /\bcherr(?:y|ies)\b/i, berry: /\b(berr(?:y|ies)|strawberr\w*|raspberr\w*|blueberr\w*)\b/i,
  tea: /\b(tea|matcha|chai)\b/i, matcha: /\bmatcha\b/i, stars: /\b(stars?|night sky|planetarium|astronom\w*|galax\w*|cosmos|milky way)\b/i, cocktail: /\b(cocktails?|mixolog\w*|martinis?|spritz)\b/i
};
