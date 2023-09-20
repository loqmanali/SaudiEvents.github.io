'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "180273b821c2df0f1968d0f754a9d2b7",
"index.html": "cdd007a786286331908201f061946b04",
"/": "cdd007a786286331908201f061946b04",
"main.dart.js": "52d78f08da3c0bf3b9c0f4c87b0f0169",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "c6a64ee1bae21e8cf94a819cd6f6a40e",
"icons/Icon-192.png": "c6a64ee1bae21e8cf94a819cd6f6a40e",
"icons/Icon-maskable-192.png": "c6a64ee1bae21e8cf94a819cd6f6a40e",
"icons/Icon-maskable-512.png": "c6a64ee1bae21e8cf94a819cd6f6a40e",
"icons/Icon-512.png": "c6a64ee1bae21e8cf94a819cd6f6a40e",
"manifest.json": "0504119b77b0f74c0ee995153ea887e5",
"assets/shorebird.yaml": "e89e1b78ad1fa8e278c22088370a0052",
"assets/AssetManifest.json": "b3c89bb47deaca1b4b6315dfe7710bb0",
"assets/NOTICES": "0ba99969be62803921953f7bea18f91d",
"assets/FontManifest.json": "40f7cf25e5329568900e4ca07644034a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lib/config/config.json": "639df4f07f246765c053c32acc3189e3",
"assets/AssetManifest.bin": "f9bb15c50e45f3b6d8cddeda30ec85d1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6651934e356a7394c224938aac8e26",
"assets/assets/svg/drinkin_water_icon.svg": "8126e2cf948329c4bb5408fdb0a856ef",
"assets/assets/svg/sport.svg": "3dfabb082997c6c8f3891ce680392f4c",
"assets/assets/svg/nature_public_parks.svg": "f885489d4249a8b89685ac59c8fe87fb",
"assets/assets/svg/pts_icon.svg": "0ef8e8d50645847189e546656ddc5f89",
"assets/assets/svg/bg_sign_in_with_email.svg": "ee013ce9aab4da602ec54b60ce89e9c8",
"assets/assets/svg/comedy.svg": "1ebfd7f9184ea1d5692141885975e571",
"assets/assets/svg/circus.svg": "68dff36804455b456ae8175a7bf6f2f1",
"assets/assets/svg/privacy_policy_icon.svg": "864a358cbca83420c960e34c0a08012f",
"assets/assets/svg/bg_forgot_password.svg": "83a83e3a477ffeb230f05d80fb161d5b",
"assets/assets/svg/literature_poetry.svg": "1e892dd63992332c6bb871cee50e8c84",
"assets/assets/svg/heritage_culture.svg": "9930689e0d590fc3a1ae4ced20a52f2d",
"assets/assets/svg/search_icon.svg": "5aba857c875fc1eff722a4438b084d87",
"assets/assets/svg/theatrical_shows.svg": "b5aef0c10e2cabc0b06f6196c1cc548e",
"assets/assets/svg/retail_fachion.svg": "db3a6625c2c274d815aba76414d129a3",
"assets/assets/svg/shopping.svg": "8a717b0f7ce7b7831b4c365e7e92251f",
"assets/assets/svg/transit-station.svg": "6781aad2f1877e1d01353dbe22b06f7b",
"assets/assets/svg/tiktok_icon.svg": "ea532ee3c5f93f8f370dbb3bdbc60793",
"assets/assets/svg/kids.svg": "9b8782870856e77f4f2c0d0c6145e7f5",
"assets/assets/svg/zones_icon.svg": "49166b920294e5dcfd45587c98314220",
"assets/assets/svg/gaming.svg": "b205218286b33ca84e07f16b6d7001ca",
"assets/assets/svg/youtube_icon.svg": "04d8da970827de37b091476db310fe4a",
"assets/assets/svg/help_icon.svg": "ec22bffb756afc179d57ced92045672d",
"assets/assets/svg/chat_icon.svg": "79a1e54d9692e5a77ee98ed0281371a8",
"assets/assets/svg/home_icon.svg": "5fa11a181a70ec4a4b8ecc253d09e044",
"assets/assets/svg/interestContinue.svg": "22a92cc6ae9cad954e045dc5e790a2f5",
"assets/assets/svg/coupon_icon.svg": "9baf013275a549fa3a20d55ea590f440",
"assets/assets/svg/square-pin.svg": "3a2a0199bddb81bfea375976816968f1",
"assets/assets/svg/map_icon.svg": "c820b5a3d45b6ef004fc8bbc77a95f29",
"assets/assets/svg/bg_help.svg": "385475430196e162bc9d2536aea24bde",
"assets/assets/svg/shield.svg": "23bf2ac8e244749f11dd4b15c0042513",
"assets/assets/svg/experience.svg": "ae151db9066cc2eab1501a69ddcc34a7",
"assets/assets/svg/toilet_icon.svg": "2bb7fb9204f654378ec065653725e6d7",
"assets/assets/svg/google_icon.svg": "f9a1608b01c0b7eca0fd507b2167aa9b",
"assets/assets/svg/ticket_icon.svg": "c62e985740ddae33da34c8a12addf584",
"assets/assets/svg/bg1_filter_map_zone.svg": "3f8d4b8c48108d9a4b616ddc52778798",
"assets/assets/svg/shop_icon.svg": "e3952be6e052ae5c869d0f847f95a491",
"assets/assets/svg/more_icon.svg": "56dced3ca90635b4d54e009bf7947028",
"assets/assets/svg/backgroundHomeIcon5.svg": "33462375d8e62d672571ce0e9b71f4de",
"assets/assets/svg/bg2_filter_map_zone.svg": "56b0827aa16218896e9bb4ab283de057",
"assets/assets/svg/movies.svg": "cbcc01c9607fa18ae549626ed73936c1",
"assets/assets/svg/show_password_icon.svg": "65963ea8f9187985ef6ef0c563364242",
"assets/assets/svg/sign_in_email_icon.svg": "b79767666533207710efd7cedd84586f",
"assets/assets/svg/twitter_icon.svg": "aa5f24449ff9ecb383c05d2a67909e49",
"assets/assets/svg/square.svg": "32d8491906e92f200b3bc3f741a20afd",
"assets/assets/svg/whatsapp_icon.svg": "9754cff0012d5741974b5a56cceaeb91",
"assets/assets/svg/phone_icon.svg": "4bc37a6f8342dfe52d63a3af74fd0a3a",
"assets/assets/svg/saudi_event_logo_with_color.svg": "ec63a37dc4425f39caa827ec0cb81260",
"assets/assets/svg/square-rounded.svg": "7476597a8fc451f727397412e2fc862a",
"assets/assets/svg/live_shows.svg": "0bef922f89af3859cd6952b38b74297a",
"assets/assets/svg/jeddah_logo.svg": "acd1653124a2b5d52516b88815288a45",
"assets/assets/svg/avatar_icon.svg": "df0fc38b909a0dfcdf0f780bb793d7c0",
"assets/assets/svg/stars_icon.svg": "154baa76fe254a2b06844099c10e00f3",
"assets/assets/svg/facebook_icon.svg": "c961ce638bfd20f611902afe083e7123",
"assets/assets/svg/email_icon.svg": "2bc1c1cd9e75fcf3058f1c2ebc7a4c18",
"assets/assets/svg/contact_us_icon.svg": "e0d765ca979ec8d12e9e8be0ac5ebcdd",
"assets/assets/svg/location_icon.svg": "7e6cd2dcfb120bfbee557b314880409d",
"assets/assets/svg/qr_icon.svg": "256ce4fe639918e3242589071154cb68",
"assets/assets/svg/events_icon.svg": "2f4b7fa8625f2e5e1864b4769b099e0a",
"assets/assets/svg/train-station.svg": "c3711ca65da6958dd4b0e961f1ecc32f",
"assets/assets/svg/points_icon.svg": "dc7c2cc289df34cb519b6943454ddf6e",
"assets/assets/svg/filter_icon.svg": "68662406f14a6a9beee76618cea225dd",
"assets/assets/svg/map-pin.svg": "dfb55af2f89b623370a8265c27cb5670",
"assets/assets/svg/arts.svg": "25c0f46b79364637ceb37734f15da2db",
"assets/assets/svg/backgroundHome3.svg": "923df6b524a85cf99b6fedd7be6dcf45",
"assets/assets/svg/route.svg": "0c09ac8703388697c36451f3574d1948",
"assets/assets/svg/apple_icon.svg": "1402773b25af8343cc9c2ba90bbb5e6c",
"assets/assets/svg/hide_password_icon.svg": "544671b5e631f59adfc07739854bbbeb",
"assets/assets/svg/change_password_icon.svg": "1a8c4d52508e92161e1aec669afdb055",
"assets/assets/svg/language_icon.svg": "1b0dee5efd1a0cc367118d24b4bc012b",
"assets/assets/svg/saudi_events_logo.svg": "1bb048bb6fc093f035df0736328b8c87",
"assets/assets/svg/notification_icon.svg": "96c19c2cd0edca7c7854353e5c5bef62",
"assets/assets/svg/watch_icon.svg": "a4e388ad5765c1a3332d93f069967401",
"assets/assets/svg/sponsors_icon.svg": "a919ccc465c49733b411b5ade856d203",
"assets/assets/svg/food.svg": "be91d72f82dfb6e9f32db2dffdc89a03",
"assets/assets/svg/backgroundHome4.svg": "9f4b7ca8bde1f4be65f927e70b26a758",
"assets/assets/translation/en.json": "f2154102372d9b01497c41c34d642c9f",
"assets/assets/translation/ar.json": "2d4eb6c1dbafdc6af929d92b6a777cfe",
"assets/assets/image/selectLang/3x/selectLang.png": "c32dacfaf85fb99d6115a74ee449071e",
"assets/assets/image/selectLang/selectLang.png": "c32dacfaf85fb99d6115a74ee449071e",
"assets/assets/image/selectLang/2x/selectLang.png": "820365232f3d0972ab2061f006ce5669",
"assets/assets/image/selectLang/1x/selectLang.png": "56d1e51df32b2e8838d057ebfadeeea3",
"assets/assets/image/home_background.png": "f8959e4b9e630aa8723296f9e6648bde",
"assets/assets/image/home-background2.png": "cc610070e0ea6b9bc3708dc4c66cdbfa",
"assets/assets/image/empty_search.png": "f66730977602827df9762cbe7b3911c3",
"assets/assets/image/areaOfInterestsBack/3x/areaOfInterestsBack.png": "1afdcaf5eb0ca1a73b57d82778710569",
"assets/assets/image/areaOfInterestsBack/Contents.json": "318ab56d2b823ed55741494ababc0186",
"assets/assets/image/areaOfInterestsBack/2x/areaOfInterestsBack.png": "52411e5c48b5933bf8f6ea9a1684ae56",
"assets/assets/image/areaOfInterestsBack/areaOfInterestsBack.png": "ec50ef81b3c3f11b0d3e0086c792eb5d",
"assets/assets/image/areaOfInterestsBack/1x/areaOfInterestsBack.png": "ec50ef81b3c3f11b0d3e0086c792eb5d",
"assets/assets/image/saudi_founding_day.png": "9b8466eee7ba050761a039c917b999c8",
"assets/assets/image/bg_personal_info.jpg": "863bec591810364859b9ba5c9e729ff5",
"assets/assets/image/logo.png": "c6a64ee1bae21e8cf94a819cd6f6a40e",
"assets/assets/image/jeddah_logo.png": "24b47df2714b99b70e5f0092084f0573",
"assets/assets/image/riyadhLogoios.png": "00b334d452039532646d5ed22b476fd7",
"assets/assets/map_style/mosque-tr.png": "ab4025b6bc2f4934859e76cf9b254802",
"assets/assets/map_style/mosque.png": "9b0ab28cef3b89f62f183e4a82d250dc",
"assets/assets/map_style/location-marker.png": "d2a1f30d8404f7333ce61f194bcaffed",
"assets/assets/map_style/stadium.png": "88f6173e07f8edaf9854e3fddf8019d4",
"assets/assets/map_style/mall.png": "0356bcff81f9bc3a78122b775299e5cb",
"assets/assets/map_style/shopping-cart.png": "7440d4fa2e6386288083afc6c293e588",
"assets/assets/map_style/location.png": "06cf792b958d6b045a2e9244fd5628f9",
"assets/assets/map_style/dark_map.json": "5b790227db3b56097dfe9a1df0090db1",
"assets/assets/fonts/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/Fasthand-Regular.ttf": "3a1d9b02dd654301b68fcd74153e8d70",
"assets/assets/fonts/SaudiEventsIcons.ttf": "834f00cc7074f9bd84531661909874d8",
"assets/assets/fonts/Gilroy-Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/assets/fonts/Gilroy-Light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/assets/fonts/Gilroy-Bold.ttf": "889a4b5ce3a780faedb74390fc49a07a",
"assets/assets/fonts/El_Messiri/ElMessiri-VariableFont_wght.ttf": "9a7c22c54526567a2cd3046a5a6dcbe5",
"assets/assets/fonts/El_Messiri/static/ElMessiri-Medium.ttf": "3b70155662023f0f4e6ffd53e3277e55",
"assets/assets/fonts/El_Messiri/static/ElMessiri-Regular.ttf": "ecd6ec55d5899a286bbd93ed148992b4",
"assets/assets/fonts/El_Messiri/static/ElMessiri-Bold.ttf": "286ef705c6bd954162a3f7cc3de64f1d",
"assets/assets/fonts/El_Messiri/static/ElMessiri-SemiBold.ttf": "b0d8c4bd377d00c6113eb1532d28579a",
"assets/assets/fonts/OTF/Somar-SemiBold.otf": "a5d5095c233905b4fb0812375006fec5",
"assets/assets/fonts/OTF/Somar-RegularItalic.otf": "982685a48dcab538aae3bd2f3b008b12",
"assets/assets/fonts/OTF/Somar-LightItalic.otf": "cb6048e2cd7feb1d22be3259bc785270",
"assets/assets/fonts/OTF/Somar-Light.otf": "820a5b9b0d1dd00f6e6d52594ccb0ec3",
"assets/assets/fonts/OTF/Somar-Regular.otf": "11116b5b968217e6d117425861979093",
"assets/assets/fonts/OTF/Somar-BlackItalic.otf": "c2368b039ad7b31f255d6e384055c16d",
"assets/assets/fonts/OTF/Somar-ExtraBold.otf": "35b0a235af7f2effc8ce650fa9fff23f",
"assets/assets/fonts/OTF/Somar-SemiBoldItalic.otf": "310698690ebaa8ecfe486cff7f41e94b",
"assets/assets/fonts/OTF/Somar-Bold.otf": "aa3dd8681f1f43ae6099ea2b4a4458ff",
"assets/assets/fonts/OTF/Somar-Thin.otf": "3caedb01627e79ce7d3eaf679b948f39",
"assets/assets/fonts/OTF/Somar-MediumItalic.otf": "4e953bed5b94a4917b1d4bd04103bb53",
"assets/assets/fonts/OTF/Somar-ThinItalic.otf": "f42de84f3b39c87844c1e40b0130fb97",
"assets/assets/fonts/OTF/Somar-ExtraLight.otf": "e3838b2b5ff982fa9aa5a0b42d8623df",
"assets/assets/fonts/OTF/Somar-Black.otf": "828bfc260c7dadab4bdb13e1b9c63ba2",
"assets/assets/fonts/OTF/Somar-ExtraBoldItalic.otf": "c41f9893f6fb832928f94f81269800a6",
"assets/assets/fonts/OTF/Somar-BoldItalic.otf": "06b8b414bfe6fa2ac11beba53e3442a3",
"assets/assets/fonts/OTF/Somar-ExtraLightItalic.otf": "7ce9fda35de6258845353994208625ef",
"assets/assets/fonts/OTF/Poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/OTF/Poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/assets/fonts/OTF/Poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/fonts/OTF/Poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/fonts/OTF/Poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/OTF/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/OTF/Poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/fonts/OTF/Poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/fonts/OTF/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/OTF/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/OTF/Poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/fonts/OTF/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/OTF/Poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/OTF/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/OTF/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/OTF/Poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/OTF/Poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/assets/fonts/OTF/Somar-Medium.otf": "85aace0fe1196ac583e1a6196201c7d7",
"assets/assets/fonts/neo-sans/NeoSansArabicMedium.ttf": "134a9eec996235bd6df76c863ec233c6",
"assets/assets/fonts/neo-sans/NeoSansArabicBlack.ttf": "de81589d8829136398cdc296a8e05a75",
"assets/assets/fonts/neo-sans/NeoSansArabicRegular.ttf": "f6e895d8c1d12739e54a0ca9df6903d5",
"assets/assets/fonts/neo-sans/NeoSansArabicBold.ttf": "004f0b515ed92586beb66b9bb63573e4",
"assets/assets/fonts/neo-sans/NeoSansArabic.ttf": "98748ff0346faf6227ef8a87e4231a7c",
"assets/assets/fonts/neo-sans/NeoSansArabicLight.ttf": "c9482a2d87d793e479317ae1bfe19f9a",
"assets/assets/fonts/neo-sans/Neo_Sans_Medium.ttf": "82fc07f295a2879a4fe3f490a716537d",
"assets/assets/fonts/neo-sans/NeoSansArabicUltra.ttf": "8f1e08dbcfd27ea7962d31633a2903d1",
"assets/assets/fonts/Gilroy-Heavy.ttf": "2b57bf6ef2611353b4890d83fe3973c6",
"assets/assets/gif/Splash-Screen2.gif": "07a24a2dfa8f773b924da3c580d7043c",
"assets/assets/gif/BackgroundAnimationRiyadh.gif": "132d9d6a3defe362d96bda257f7076cc",
"assets/assets/gif/BackgroundAnimation.gif": "f48ed08a8196494371a4d557ad32b733",
"assets/assets/gif/SplashScreen.gif": "b6790326b2d0c693e9380c5c9aa992bd",
"assets/assets/gif/BackgroundAnimationSaudi.gif": "cce29d15f61d4aa683bda7d08d443f94",
"assets/assets/gif/BackgroundAnimationJeddah.gif": "a244778df14c91ffdc01e4bd1d8e6ae2",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
