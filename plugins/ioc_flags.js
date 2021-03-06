// [Follow the Rio 2016 @Olympics on Twitter, Vine, and Periscope | Twitter Blogs](https://blog.twitter.com/2016/follow-the-rio-2016-olympics-on-twitter-vine-and-periscope)
// [Twitter、Vine、Periscopeで #オリンピック をより楽しみましょう | Twitter Blogs](https://blog.twitter.com/ja/2016/rio0802)
// [Join the #Paralympics conversation on Twitter | Twitter Blogs](https://blog.twitter.com/2016/join-the-paralympics-conversation-on-twitter)

var tweScript = document.createElement('script');
tweScript.type = 'text/javascript';
tweScript.src = '//twemoji.maxcdn.com/2/twemoji.min.js';
document.getElementsByTagName('body')[0].appendChild(tweScript);

var emojiStyle = document.createElement('style');
emojiStyle.type = 'text/css';
emojiStyle.innerHTML = '.flag img.emoji { margin: 0 0.3em; width: 1em; }';
document.getElementsByTagName('head')[0].appendChild(emojiStyle);

registerPlugin({
	newMessageElement: function(el) {
		// IOC: [ ISO-3166-1 Alpha-3, ISO-3166-1 Alpha-2, Unicode, ...], // Country Name
		var countryFlags = {
			//     [       'AC', 0x1F1E6, 0x1F1E8], //
			//     [       'CP', 0x1F1E8, 0x1F1F5], //
			//     [       'DG', 0x1F1E9, 0x1F1EC], //
			//     [       'EA', 0x1F1EA, 0x1F1E6], //
			//     [       'EU', 0x1F1EA, 0x1F1FA], //
			//     [       'IC', 0x1F1EE, 0x1F1E8], //
			//     [       'TA', 0x1F1F9, 0x1F1E6], //
			'AFG': ['AFG', 'AF', 0x1F1E6, 0x1F1EB], // Afghanistan
			//     ['AIA', 'AI', 0x1F1E6, 0x1F1EE], // Anguilla
			//     ['ALA', 'AX', 0x1F1E6, 0x1F1FD], // Åland Islands
			'ALB': ['ALB', 'AL', 0x1F1E6, 0x1F1F1], // Albania
			'ALG': ['DZA', 'DZ', 0x1F1E9, 0x1F1FF], // Algeria
			'AND': ['AND', 'AD', 0x1F1E6, 0x1F1E9], // Andorra
			'ANG': ['AGO', 'AO', 0x1F1E6, 0x1F1F4], // Angola
			'ANT': ['ATG', 'AG', 0x1F1E6, 0x1F1EC], // Antigua and Barbuda
			'ARG': ['ARG', 'AR', 0x1F1E6, 0x1F1F7], // Argentina
			'ARM': ['ARM', 'AM', 0x1F1E6, 0x1F1F2], // Armenia
			'ARU': ['ABW', 'AW', 0x1F1E6, 0x1F1FC], // Aruba
			'ASA': ['ASM', 'AS', 0x1F1E6, 0x1F1F8], // American Samoa
			//     ['ATA', 'AQ', 0x1F1E6, 0x1F1F6], // Antarctica
			//     ['ATF', 'TF', 0x1F1F9, 0x1F1EB], // French Southern Territories
			'AUS': ['AUS', 'AU', 0x1F1E6, 0x1F1FA], // Australia
			'AUT': ['AUT', 'AT', 0x1F1E6, 0x1F1F9], // Austria
			'AZE': ['AZE', 'AZ', 0x1F1E6, 0x1F1FF], // Azerbaijan
			'BAH': ['BHS', 'BS', 0x1F1E7, 0x1F1F8], // Bahamas
			'BAN': ['BGD', 'BD', 0x1F1E7, 0x1F1E9], // Bangladesh
			'BAR': ['BRB', 'BB', 0x1F1E7, 0x1F1E7], // Barbados
			'BDI': ['BDI', 'BI', 0x1F1E7, 0x1F1EE], // Burundi
			'BEL': ['BEL', 'BE', 0x1F1E7, 0x1F1EA], // Belgium
			'BEN': ['BEN', 'BJ', 0x1F1E7, 0x1F1EF], // Benin
			'BER': ['BMU', 'BM', 0x1F1E7, 0x1F1F2], // Bermuda
			//     ['BES', 'BQ', 0x1F1E7, 0x1F1F6], // Bonaire, Saint Eustatius and Saba
			//     ['BHR', 'BH', 0x1F1E7, 0x1F1ED], // Bahrain
			'BHU': ['BTN', 'BT', 0x1F1E7, 0x1F1F9], // Bhutan
			'BIH': ['BIH', 'BA', 0x1F1E7, 0x1F1E6], // Bosnia and Herzegovina
			'BIZ': ['BLM', 'BL', 0x1F1E7, 0x1F1F1], // Saint Barthélemy
			'BLR': ['BLR', 'BY', 0x1F1E7, 0x1F1FE], // Belarus
			//     ['BLZ', 'BZ', 0x1F1E7, 0x1F1FF], // Belize
			'BOL': ['BOL', 'BO', 0x1F1E7, 0x1F1F4], // Bolivia, Plurinational State of
			'BOT': ['BWA', 'BW', 0x1F1E7, 0x1F1FC], // Botswana
			'BRA': ['BRA', 'BR', 0x1F1E7, 0x1F1F7], // Brazil
			'BRN': ['BHR', 'BH', 0x1F1E7, 0x1F1ED], // Bahrain
			'BRU': ['BRN', 'BN', 0x1F1E7, 0x1F1F3], // Brunei Darussalam
			'BUL': ['BGR', 'BG', 0x1F1E7, 0x1F1EC], // Bulgaria
			'BUR': ['BFA', 'BF', 0x1F1E7, 0x1F1EB], // Burkina Faso
			//     ['BVT', 'BV', 0x1F1E7, 0x1F1FB], // Bouvet Island
			'CAF': ['CAF', 'CF', 0x1F1E8, 0x1F1EB], // Central African Republic
			'CAM': ['KHM', 'KH', 0x1F1F0, 0x1F1ED], // Cambodia
			'CAN': ['CAN', 'CA', 0x1F1E8, 0x1F1E6], // Canada
			'CAY': ['CYM', 'KY', 0x1F1F0, 0x1F1FE], // Cayman Islands
			//     ['CCK', 'CC', 0x1F1E8, 0x1F1E8], // Cocos (Keeling) Islands
			'CGO': ['COG', 'CG', 0x1F1E8, 0x1F1EC], // Congo
			'CHA': ['TCD', 'TD', 0x1F1F9, 0x1F1E9], // Chad
			'CHI': ['CHL', 'CL', 0x1F1E8, 0x1F1F1], // Chile
			'CHN': ['CHN', 'CN', 0x1F1E8, 0x1F1F3], // China
			'CIV': ['CIV', 'CI', 0x1F1E8, 0x1F1EE], // Côte d'Ivoire
			'CMR': ['CMR', 'CM', 0x1F1E8, 0x1F1F2], // Cameroon
			'COD': ['COD', 'CD', 0x1F1E8, 0x1F1E9], // Congo, the Democratic Republic of the
			'COK': ['COK', 'CK', 0x1F1E8, 0x1F1F0], // Cook Islands
			'COL': ['COL', 'CO', 0x1F1E8, 0x1F1F4], // Colombia
			'COM': ['COM', 'KM', 0x1F1F0, 0x1F1F2], // Comoros
			'CPV': ['CPV', 'CV', 0x1F1E8, 0x1F1FB], // Cape Verde
			'CRC': ['CRI', 'CR', 0x1F1E8, 0x1F1F7], // Costa Rica
			'CRO': ['HRV', 'HR', 0x1F1ED, 0x1F1F7], // Croatia
			'CUB': ['CUB', 'CU', 0x1F1E8, 0x1F1FA], // Cuba
			//     ['CUW', 'CW', 0x1F1E8, 0x1F1FC], // Curaçao
			//     ['CXR', 'CX', 0x1F1E8, 0x1F1FD], // Christmas Island
			'CYP': ['CYP', 'CY', 0x1F1E8, 0x1F1FE], // Cyprus
			'CZE': ['CZE', 'CZ', 0x1F1E8, 0x1F1FF], // Czech Republic
			'DEN': ['DNK', 'DK', 0x1F1E9, 0x1F1F0], // Denmark
			'DJI': ['DJI', 'DJ', 0x1F1E9, 0x1F1EF], // Djibouti
			'DMA': ['DMA', 'DM', 0x1F1E9, 0x1F1F2], // Dominica
			'DOM': ['DOM', 'DO', 0x1F1E9, 0x1F1F4], // Dominican Republic
			'ECU': ['ECU', 'EC', 0x1F1EB, 0x1F1E8], // Ecuador
			'EGY': ['EGY', 'EG', 0x1F1EA, 0x1F1EC], // Egypt
			'ERI': ['ERI', 'ER', 0x1F1EA, 0x1F1F7], // Eritrea
			'ESA': ['SLV', 'SV', 0x1F1F8, 0x1F1FB], // El Salvador
			//     ['ESH', 'EH', 0x1F1EA, 0x1F1ED], // Western Sahara
			'ESP': ['ESP', 'ES', 0x1F1EA, 0x1F1F8], // Spain
			'EST': ['EST', 'EE', 0x1F1EA, 0x1F1EA], // Estonia
			'ETH': ['ETH', 'ET', 0x1F1EA, 0x1F1F9], // Ethiopia
			'FIJ': ['FJI', 'FJ', 0x1F1EB, 0x1F1EF], // Fiji
			'FIN': ['FIN', 'FI', 0x1F1EB, 0x1F1EE], // Finland
			//     ['FLK', 'FK', 0x1F1EB, 0x1F1F0], // Falkland Islands (Malvinas)
			'FRA': ['FRA', 'FR', 0x1F1EB, 0x1F1F7], // France
			//     ['FRO', 'FO', 0x1F1EB, 0x1F1F4], // Faroe Islands
			'FSM': ['FSM', 'FM', 0x1F1EB, 0x1F1F2], // Micronesia, Federated States of
			'GAB': ['GAB', 'GA', 0x1F1EC, 0x1F1E6], // Gabon
			'GAM': ['GMB', 'GM', 0x1F1EC, 0x1F1F2], // Gambia
			'GBR': ['GBR', 'GB', 0x1F1EC, 0x1F1E7], // United Kingdom
			'GBS': ['GNB', 'GW', 0x1F1EC, 0x1F1FC], // Guinea-Bissau
			'GEO': ['GEO', 'GE', 0x1F1EC, 0x1F1EA], // Georgia
			'GEQ': ['GNQ', 'GQ', 0x1F1EC, 0x1F1F6], // Equatorial Guinea
			'GER': ['DEU', 'DE', 0x1F1E9, 0x1F1EA], // Germany
			//     ['GGY', 'GG', 0x1F1EC, 0x1F1EC], // Guernsey
			'GHA': ['GHA', 'GH', 0x1F1EC, 0x1F1ED], // Ghana
			//     ['GIB', 'GI', 0x1F1EC, 0x1F1EE], // Gibraltar
			//     ['GLP', 'GP', 0x1F1EC, 0x1F1F5], // Guadeloupe
			//     ['GNQ', 'GQ', 0x1F1EC, 0x1F1F6], // Equatorial Guinea
			'GRE': ['GRC', 'GR', 0x1F1EC, 0x1F1F7], // Greece
			//     ['GRL', 'GL', 0x1F1EC, 0x1F1F1], // Greenland
			'GRN': ['GRD', 'GD', 0x1F1EC, 0x1F1E9], // Grenada
			'GUA': ['GTM', 'GT', 0x1F1EC, 0x1F1F9], // Guatemala
			//     ['GUF', 'GF', 0x1F1EC, 0x1F1EB], // French Guiana
			'GUI': ['GIN', 'GN', 0x1F1EC, 0x1F1F3], // Guinea
			'GUM': ['GUM', 'GU', 0x1F1EC, 0x1F1FA], // Guam
			'GUY': ['GUY', 'GY', 0x1F1EC, 0x1F1FE], // Guyana
			'HAI': ['HTI', 'HT', 0x1F1ED, 0x1F1F9], // Haiti
			'HKG': ['HKG', 'HK', 0x1F1ED, 0x1F1F0], // Hong Kong
			//     ['HMD', 'HM', 0x1F1ED, 0x1F1F2], // Heard Island and McDonald Islands
			'HON': ['HND', 'HN', 0x1F1ED, 0x1F1F3], // Honduras
			'HUN': ['HUN', 'HU', 0x1F1ED, 0x1F1FA], // Hungary
			//     ['IMN', 'IM', 0x1F1EE, 0x1F1F2], // Isle of Man
			'INA': ['IDN', 'ID', 0x1F1EE, 0x1F1E9], // Indonesia
			'IND': ['IND', 'IN', 0x1F1EE, 0x1F1F3], // India
			//     ['IOT', 'IO', 0x1F1EE, 0x1F1F4], // British Indian Ocean Territory
			'IRI': ['IRN', 'IR', 0x1F1EE, 0x1F1F7], // Iran, Islamic Republic of
			'IRL': ['IRL', 'IE', 0x1F1EE, 0x1F1EA], // Ireland
			'IRQ': ['IRQ', 'IQ', 0x1F1EE, 0x1F1F6], // Iraq
			'ISL': ['ISL', 'IS', 0x1F1EE, 0x1F1F8], // Iceland
			'ISR': ['ISR', 'IL', 0x1F1EE, 0x1F1F1], // Israel
			'ISV': ['VIR', 'VI', 0x1F1FB, 0x1F1EE], // Virgin Islands, U.S.
			'ITA': ['ITA', 'IT', 0x1F1EE, 0x1F1F9], // Italy
			'IVB': ['VGB', 'VG', 0x1F1FB, 0x1F1EC], // Virgin Islands, British
			'JAM': ['JAM', 'JM', 0x1F1EF, 0x1F1F2], // Jamaica
			//     ['JEY', 'JE', 0x1F1EF, 0x1F1EA], // Jersey
			'JOR': ['JOR', 'JO', 0x1F1EF, 0x1F1F4], // Jordan
			'JPN': ['JPN', 'JP', 0x1F1EF, 0x1F1F5], // Japan
			'KAZ': ['KAZ', 'KZ', 0x1F1F0, 0x1F1FF], // Kazakhstan
			'KEN': ['KEN', 'KE', 0x1F1F0, 0x1F1EA], // Kenya
			'KGZ': ['KGZ', 'KG', 0x1F1F0, 0x1F1EC], // Kyrgyzstan
			'KIR': ['KIR', 'KI', 0x1F1F0, 0x1F1EE], // Kiribati
			'KOR': ['KOR', 'KR', 0x1F1F0, 0x1F1F7], // Korea, Republic of
			'KOS': ['   ', 'XK', 0x1F1FD, 0x1F1F0], // Kosovo
			'KSA': ['SAU', 'SA', 0x1F1F8, 0x1F1E6], // Saudi Arabia
			'KUW': ['KWT', 'KW', 0x1F1F0, 0x1F1FC], // Kuwait
			'LAO': ['LAO', 'LA', 0x1F1F1, 0x1F1E6], // Lao People's Democratic Republic
			'LAT': ['LVA', 'LV', 0x1F1F1, 0x1F1FB], // Latvia
			'LBA': ['LBY', 'LY', 0x1F1F1, 0x1F1FE], // Libya
			'LBR': ['LBR', 'LR', 0x1F1F1, 0x1F1F7], // Liberia
			'LCA': ['LCA', 'LC', 0x1F1F1, 0x1F1E8], // Saint Lucia
			'LES': ['LSO', 'LS', 0x1F1F2, 0x1F1F8], // Lesotho
			'LIB': ['LBN', 'LB', 0x1F1F1, 0x1F1E7], // Lebanon
			'LIE': ['LIE', 'LI', 0x1F1F1, 0x1F1EE], // Liechtenstein
			'LTU': ['LTU', 'LT', 0x1F1F1, 0x1F1F9], // Lithuania
			'LUX': ['LUX', 'LU', 0x1F1F1, 0x1F1FA], // Luxembourg
			//     ['MAC', 'MO', 0x1F1F2, 0x1F1F4], // Macao
			'MAD': ['MDG', 'MG', 0x1F1F2, 0x1F1EC], // Madagascar
			//     ['MAF', 'MF', 0x1F1F2, 0x1F1EB], // Saint Martin (French part)
			'MAR': ['MAR', 'MA', 0x1F1F2, 0x1F1E6], // Morocco
			'MAS': ['MYS', 'MY', 0x1F1F2, 0x1F1FE], // Malaysia
			'MAW': ['MWI', 'MW', 0x1F1F2, 0x1F1FC], // Malawi
			'MDA': ['MDA', 'MD', 0x1F1F2, 0x1F1E9], // Moldova, Republic of
			'MDV': ['MDV', 'MV', 0x1F1F2, 0x1F1FB], // Maldives
			'MEX': ['MEX', 'MX', 0x1F1F2, 0x1F1FD], // Mexico
			'MGL': ['MNG', 'MN', 0x1F1F2, 0x1F1F3], // Mongolia
			'MHL': ['MHL', 'MH', 0x1F1F2, 0x1F1ED], // Marshall Islands
			'MKD': ['MKD', 'MK', 0x1F1F2, 0x1F1F0], // Macedonia, the former Yugoslav Republic of
			'MLI': ['MLI', 'ML', 0x1F1F2, 0x1F1F1], // Mali
			'MLT': ['MLT', 'MT', 0x1F1F2, 0x1F1F9], // Malta
			'MNE': ['MNE', 'ME', 0x1F1F2, 0x1F1EA], // Montenegro
			//     ['MNP', 'MP', 0x1F1F2, 0x1F1F5], // Northern Mariana Islands
			'MON': ['MCO', 'MC', 0x1F1F2, 0x1F1E8], // Monaco
			'MOZ': ['MOZ', 'MZ', 0x1F1F2, 0x1F1FF], // Mozambique
			'MRI': ['MUS', 'MU', 0x1F1F2, 0x1F1FA], // Mauritius
			//     ['MSR', 'MS', 0x1F1F2, 0x1F1F8], // Montserrat
			'MTN': ['MRT', 'MR', 0x1F1F2, 0x1F1F7], // Mauritania
			//     ['MTQ', 'MQ', 0x1F1F2, 0x1F1F6], // Martinique
			'MYA': ['MMR', 'MM', 0x1F1F2, 0x1F1F2], // Myanmar
			//     ['MYT', 'YT', 0x1F1FE, 0x1F1F9], // Mayotte
			'NAM': ['NAM', 'NA', 0x1F1F3, 0x1F1E6], // Namibia
			'NCA': ['NIC', 'NI', 0x1F1F3, 0x1F1EE], // Nicaragua
			//     ['NCL', 'NC', 0x1F1F3, 0x1F1E8], // New Caledonia
			'NED': ['NLD', 'NL', 0x1F1F3, 0x1F1F1], // Netherlands
			'NEP': ['NPL', 'NP', 0x1F1F3, 0x1F1F5], // Nepal
			//     ['NFK', 'NF', 0x1F1F3, 0x1F1EB], // Norfolk Island
			'NGR': ['NGA', 'NG', 0x1F1F3, 0x1F1EC], // Nigeria
			'NIG': ['NER', 'NE', 0x1F1F3, 0x1F1EA], // Niger
			//     ['NIU', 'NU', 0x1F1F3, 0x1F1FA], // Niue
			'NOR': ['NOR', 'NO', 0x1F1F3, 0x1F1F4], // Norway
			'NRU': ['NRU', 'NR', 0x1F1F3, 0x1F1F7], // Nauru
			'NZL': ['NZL', 'NZ', 0x1F1F3, 0x1F1FF], // New Zealand
			'OMA': ['OMN', 'OM', 0x1F1F4, 0x1F1F2], // Oman
			'PAK': ['PAK', 'PK', 0x1F1F5, 0x1F1F0], // Pakistan
			'PAN': ['PAN', 'PA', 0x1F1F5, 0x1F1E6], // Panama
			'PAR': ['PRY', 'PY', 0x1F1F5, 0x1F1FE], // Paraguay
			//     ['PCN', 'PN', 0x1F1F5, 0x1F1F3], // Pitcairn
			'PER': ['PER', 'PE', 0x1F1F5, 0x1F1EA], // Peru
			'PHI': ['PHL', 'PH', 0x1F1F5, 0x1F1ED], // Philippines
			'PLE': ['PSE', 'PS', 0x1F1F5, 0x1F1F8], // Palestinian Territory, Occupied
			'PLW': ['PLW', 'PW', 0x1F1F5, 0x1F1FC], // Palau
			'PNG': ['PNG', 'PG', 0x1F1F5, 0x1F1EC], // Papua New Guinea
			'POL': ['POL', 'PL', 0x1F1F5, 0x1F1F1], // Poland
			'POR': ['PRT', 'PT', 0x1F1F5, 0x1F1F9], // Portugal
			'PRK': ['PRK', 'KP', 0x1F1F0, 0x1F1F5], // Korea, Democratic People's Republic of
			'PUR': ['PRI', 'PR', 0x1F1F5, 0x1F1F7], // Puerto Rico
			//     ['PYF', 'PF', 0x1F1F5, 0x1F1EB], // French Polynesia
			'QAT': ['QAT', 'QA', 0x1F1F6, 0x1F1E6], // Qatar
			//     ['REU', 'RE', 0x1F1F7, 0x1F1EA], // Réunion
			'ROU': ['ROU', 'RO', 0x1F1F7, 0x1F1F4], // Romania
			'RSA': ['ZAF', 'ZA', 0x1F1FF, 0x1F1E6], // South Africa
			'RUS': ['RUS', 'RU', 0x1F1F7, 0x1F1FA], // Russian Federation
			'RWA': ['RWA', 'RW', 0x1F1F7, 0x1F1FC], // Rwanda
			'SAM': ['WSM', 'WS', 0x1F1FC, 0x1F1F8], // Samoa
			'SEN': ['SEN', 'SN', 0x1F1F8, 0x1F1F3], // Senegal
			'SEY': ['SYC', 'SC', 0x1F1F8, 0x1F1E8], // Seychelles
			//     ['SGS', 'GS', 0x1F1EC, 0x1F1F8], // South Georgia and the South Sandwich Islands
			//     ['SHN', 'SH', 0x1F1F8, 0x1F1ED], // Saint Helena, Ascension and Tristan da Cunha
			'SIN': ['SGP', 'SG', 0x1F1F8, 0x1F1EC], // Singapore
			//     ['SJM', 'SJ', 0x1F1F8, 0x1F1EF], // Svalbard and Jan Mayen
			'SKN': ['KNA', 'KN', 0x1F1F0, 0x1F1F3], // Saint Kitts and Nevis
			'SLE': ['SLE', 'SL', 0x1F1F8, 0x1F1F1], // Sierra Leone
			'SLO': ['SVN', 'SI', 0x1F1F8, 0x1F1EE], // Slovenia
			'SMR': ['SMR', 'SM', 0x1F1F8, 0x1F1F2], // San Marino
			'SOL': ['SLB', 'SB', 0x1F1F8, 0x1F1E7], // Solomon Islands
			'SOM': ['SOM', 'SO', 0x1F1F8, 0x1F1F4], // Somalia
			//     ['SPM', 'PM', 0x1F1F5, 0x1F1F2], // Saint Pierre and Miquelon
			'SRB': ['SRB', 'RS', 0x1F1F7, 0x1F1F8], // Serbia
			'SRI': ['LKA', 'LK', 0x1F1F1, 0x1F1F0], // Sri Lanka
			'SSD': ['SSD', 'SS', 0x1F1F8, 0x1F1F8], // South Sudan
			'STP': ['STP', 'ST', 0x1F1F8, 0x1F1F9], // Sao Tome and Principe
			'SUD': ['SDN', 'SD', 0x1F1F8, 0x1F1E9], // Sudan
			'SUI': ['CHE', 'CH', 0x1F1E8, 0x1F1ED], // Switzerland
			'SUR': ['SUR', 'SR', 0x1F1F8, 0x1F1F7], // Suriname
			'SVK': ['SVK', 'SK', 0x1F1F8, 0x1F1F0], // Slovakia
			'SWE': ['SWE', 'SE', 0x1F1F8, 0x1F1EA], // Sweden
			'SWZ': ['SWZ', 'SZ', 0x1F1F8, 0x1F1FF], // Swaziland
			//     ['SXM', 'SX', 0x1F1F8, 0x1F1FD], // Sint Maarten (Dutch part)
			'SYR': ['SYR', 'SY', 0x1F1F8, 0x1F1FE], // Syrian Arab Republic
			'TAN': ['TZA', 'TZ', 0x1F1F9, 0x1F1FF], // Tanzania, United Republic of
			//     ['TCA', 'TC', 0x1F1F9, 0x1F1E8], // Turks and Caicos Islands
			'TGA': ['TON', 'TO', 0x1F1F9, 0x1F1F4], // Tonga
			'THA': ['THA', 'TH', 0x1F1F9, 0x1F1ED], // Thailand
			'TJK': ['TJK', 'TJ', 0x1F1F9, 0x1F1EF], // Tajikistan
			//     ['TKL', 'TK', 0x1F1F9, 0x1F1F0], // Tokelau
			'TKM': ['TKM', 'TM', 0x1F1F9, 0x1F1F2], // Turkmenistan
			'TLS': ['TLS', 'TL', 0x1F1F9, 0x1F1F1], // Timor-Leste
			'TOG': ['TGO', 'TG', 0x1F1F9, 0x1F1EC], // Togo
			//     ['TWN', 'TW', 0x1F1F9, 0x1F1FC], // Taiwan, Province of China
			'TTO': ['TTO', 'TT', 0x1F1F9, 0x1F1F9], // Trinidad and Tobago
			'TUN': ['TUN', 'TN', 0x1F1F9, 0x1F1F3], // Tunisia
			'TUR': ['TUR', 'TR', 0x1F1F9, 0x1F1F7], // Turkey
			'TUV': ['TUV', 'TV', 0x1F1F9, 0x1F1FB], // Tuvalu
			'UAE': ['ARE', 'AE', 0x1F1E6, 0x1F1EA], // United Arab Emirates
			'UGA': ['UGA', 'UG', 0x1F1FA, 0x1F1EC], // Uganda
			'UKR': ['UKR', 'UA', 0x1F1FA, 0x1F1E6], // Ukraine
			//     ['UMI', 'UM', 0x1F1FA, 0x1F1F2], // United States Minor Outlying Islands
			'URU': ['URY', 'UY', 0x1F1FA, 0x1F1FE], // Uruguay
			'USA': ['USA', 'US', 0x1F1FA, 0x1F1F8], // United States
			'UZB': ['UZB', 'UZ', 0x1F1FA, 0x1F1FF], // Uzbekistan
			'VAN': ['VUT', 'VU', 0x1F1FB, 0x1F1FA], // Vanuatu
			//     ['VAT', 'VA', 0x1F1FB, 0x1F1E6], // Holy See (Vatican City State)
			'VEN': ['VEN', 'VE', 0x1F1FB, 0x1F1EA], // Venezuela, Bolivarian Republic of
			'VIE': ['VNM', 'VN', 0x1F1FB, 0x1F1F3], // Viet Nam
			'VIN': ['VCT', 'VC', 0x1F1FB, 0x1F1E8], // Saint Vincent and the Grenadines
			//     ['WLF', 'WF', 0x1F1FC, 0x1F1EB], // Wallis and Futuna
			'YEM': ['YEM', 'YE', 0x1F1FE, 0x1F1EA], // Yemen
			'ZAM': ['ZMB', 'ZM', 0x1F1FF, 0x1F1F2], // Zambia
			'ZIM': ['ZWE', 'ZW', 0x1F1FF, 0x1F1FC], // Zimbabwe
			// ---- other ----
			'GOLD': ['', '', 0x1F947], // First Place Medal
			'SILVER': ['', '', 0x1F948], // Second Place Medal
			'BRONZE': ['', '', 0x1F949] // Third Place Medal
		};

		var organization = {
			'TPE': 'Taipei',
			'ROT': 'Refugee_Olympic_Athletes',
			'REFUGEEOLYMPICTEAMS': 'Refugee_2',
			'OLYMPICS': 'Olympics',
			'OLYMPICGAMES': 'Olympics',
			'オリンピック': 'Olympics',
			'PARALYMPICS': 'Logo_paralympics_2016_v5',
			'パラリンピック': 'Logo_paralympics_2016_v5',
			'PARALYMPICFLAME': 'Rio_Records',
			'RIORECORDS': 'flame_paralympics_2016',
			'RIO2016': 'Paralympics_Rio2016___final',
			'リオ2016': 'Rio2016',
			'ROADTORIO': 'Rio2016',
			'OPENINGCEREMONY': 'Opening_Ceremony_Paralympics_2016',
			'開会式': 'Opening_Ceremony_Paralympics_2016',
			'CLOSINGCEREMONY': 'ClosingCeremony',
			'ARCHERY': 'Archery',
			'アーチェリー': 'Archery',
			'ARTISTICGYMNASTICS': 'ArtisticGymnastics',
			'体操': 'ArtisticGymnastics',
			'ATHLETICS': 'Athletics',
			'陸上': 'Athletics',
			'BADMINTON': 'Badminton',
			'バドミントン': 'Badminton',
			'BASKETBALL': 'Basketball',
			'バスケットボール': 'Basketball',
			'BEACHVOLLEYBALL': 'BeachVolleyball',
			'ビーチバレー': 'BeachVolleyball',
			'BOCCIA': 'Boccia',
			'ボッチャ': 'Boccia',
			'BOXING': 'Boxing',
			'ボクシング': 'Boxing',
			'CANOESLALOM': 'CanoeSlalom',
			'カヌースラローム': 'CanoeSlalom',
			'CANOESPRINT': 'CanoeSprint',
			'カヌースプリント': 'CanoeSprint',
			'CYCLINGBMX': 'CyclingBMX',
			'CYCLINGMOUNTAINBIKE': 'CyclingMountainBike',
			'CYCLINGROAD': 'CyclingRoad',
			'CYCLINGTRACK': 'CyclingTrack',
			'自転車': 'CyclingTrack',
			'DIVING': 'Diving',
			'EQUESTRIAN': 'Equestrian',
			'馬術': 'Equestrian',
			'FENCING': 'Fencing',
			'フェンシング': 'Fencing',
			'FOOTBALL': 'Football',
			'FOOTBALL5': 'Football_5_A_Side',
			'5人制サッカー': 'Football_5_A_Side',
			'FOOTBALL7': 'Football7_a_side_paralympics_2016',
			'7人制サッカー': 'Football7_a_side_paralympics_2016',
			'GOALBALL': 'Goalball_v2',
			'ゴールボール': 'Goalball_v2',
			'GOLF': 'Golf',
			'ゴルフ': 'Golf',
			'HANDBALL': 'Handball',
			'ハンドボール': 'Handball',
			'HOCKEY': 'Hockey',
			'ホッケー': 'Hockey',
			'JUDO': 'Judo',
			'柔道': 'Judo',
			'MARATHONSWIMMING': 'MarathonSwimming',
			'マラソンスイミング': 'MarathonSwimming',
			'MODERNPENTATHLON': 'ModernPentathlon',
			'近代五種': 'ModernPentathlon',
			'POWERLIFTING': 'Powerlifting_paralympics_2016_v2',
			'パワーリフティング': 'Powerlifting_paralympics_2016_v2',
			'RHYTHMICGYMNASTICS': 'RhythmicGymnastics',
			'新体操': 'RhythmicGymnastics',
			'ROWING': 'Rowing',
			'ボート': 'Rowing',
			'RUGBYSEVENS': 'RugbySevens',
			'ラグビー': 'RugbySevens',
			'SAILING': 'Sailing',
			'セーリング': 'Sailing',
			'SHOOTING': 'Shooting',
			'SHOOTINGSPORT': 'Shooting_Sport_v2',
			'射撃': 'Shooting_Sport_v2',
			'SWIMMING': 'Swimming',
			'競泳': 'Swimming',
			'SYNCHRONISEDSWIMMING': 'SynchronisedSwimming',
			'シンクロ': 'SynchronisedSwimming',
			'TABLETENNIS': 'TableTennis',
			'卓球': 'TableTennis',
			'TAEKWONDO': 'Taekwondo',
			'テコンドー': 'Taekwondo',
			'TENNIS': 'Tennis',
			'テニス': 'Tennis',
			'TRAMPOLINEGYMNASTICS': 'TrampolineGymnastics',
			'トランポリン': 'TrampolineGymnastics',
			'TRIATHLON': 'Triathlon',
			'トライアスロン': 'Triathlon',
			'VOLLEYBALL': 'Volleyball',
			'バレー': 'Volleyball',
			'WATERPOLO': 'WaterPolo',
			'水球': 'WaterPolo',
			'WEIGHTLIFTING': 'Weightlifting',
			'ウエイトリフティング': 'Weightlifting',
			'WHEELCHAIRBASKETBALL': 'Wheelchair_Basketball_Fixed',
			'車椅子バスケットボール': 'Wheelchair_Basketball_Fixed',
			'WHEELCHAIRFENCING': 'Wheelchair_Fencing_Fixed',
			'車いすフェンシングバスケットボール': 'Wheelchair_Fencing_Fixed',
			'WHEELCHAIRTENNIS': 'Wheelchair_Tennis_Fixed',
			'車いすテニス': 'Wheelchair_Tennis_Fixed',
			'WHEELCHAIRRUGBY': 'Wheelchair_Rugby_Fixed',
			'WRESTLING': 'Wrestling',
			'レスリング': 'Wrestling',
			'とと姉ちゃん': 'NHKMorningDrama',
			'高校野球': 'JapanHighSchoolBaseballEmoji',
			'KHL': 'KHL_Season_Start',
			'КХЛ': 'KHL_Season_Start'
		};

		// status
		var elStatus;
		for (var i = 0; i < el.children.length; i++) {
			elStatus = el.children[i];
			if (elStatus.className && elStatus.className.indexOf('status') > -1) break;
		}

		var elHashtag, elFlag;
		var index, countryCode;
		for (var i = 0; i < elStatus.children.length; i++) {
			// hashtag
			elHashtag = elStatus.children[i];
			if (!elHashtag.className || elHashtag.className.indexOf('hashtag') < 0) continue;

			// country-code
			countryCode = elHashtag.innerHTML.match(/[#＃](\S+)/);
			if (!countryCode || countryCode.length < 1) continue;

			// Generate flag
			index = countryCode[1].toUpperCase();
			elFlag = undefined;
			if (countryFlags[index]) {
				elFlag = createFlagElement(twemoji.parse(countryFlags[index].slice(2).map(function(s) {
					return twemoji.convert.fromCodePoint(s);
				}).join('')));
			} else if (organization[index]) {
				elFlag = createFlagElement(getFlagImageHTML(organization[index]));
			}

			elFlag && elStatus.insertBefore(elFlag, elHashtag.nextSibling);
		}

		function getFlagImageHTML(iconName) {
			return [
				'<img class="emoji" draggable="false" alt="" src="//abs.twimg.com/hashflags/',
				iconName,
				'/',
				iconName,
				'.png">'
			].join('');
		}

		function createFlagElement(innerHTML) {
			var el = document.createElement('span');
			el.className = 'flag';
			el.innerHTML = innerHTML;
			return el;
		}
	}
});
