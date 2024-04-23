const locations = {
	village: {
		key: 'village',
		name: 'WIOSKA',
		description: 'Obecnie znajdujesz się w skromnej wiosce. Pozornie nic ciekawego tu nie ma, jednak jeśli pójdziesz odpowiednią drogą, możesz odkryć to, o czym tylko słyszano w legendach...',
		routes: [
			'forest',
			'road'
		]
	},
	forest: {
		key: 'forest',
		name: 'LAS',
		description: 'Las jest bardzo ciemny. To była pierwsza decyzja do podjęcia. Jak myślisz, czy warto zagłebiać się dalej i tym samym być może zyskać skarby świata, czy lepiej wrócić na szlak, który jest uczęszczany przez ludzi, więc masz więcej pewności, że w razie gdyby coś ci się stało nie umarłbyś sam?',
		routes: [
			'village',
			'dark-forest'
		]
	},
	'dark-forest': {
		key: 'dark-forest',
		name: 'MROCZNY LAS',
		description: 'Jest tu bardzo ciemno. Nawet ptaki nie siedzą na drzewach, bo światło słoneczne tu nie dociera. Czy to jest dobra droga? Nie wiem, szanowny wędrowcze, ja tu jestem tylko lektorem.',
		routes: [
			'forest',
		]
	},
	road: {
		key: 'road',
		name: 'SZLAK',
		description: 'Długi szlak. Nie widać końca, a słońce nie daje o sobie zapomnieć. Jest droga na skróty do miasta - szlak kupiecki, jednak jest on zwykle nawiedzany przez bandytów, którzy pragnąc łupu nie szczędzą nikogo ani niczego. Jeśli chcesz jak najszybciej zakończyć podróż, to śmiało, zapraszam. Jest jeszcze droga na plażę, zapraszamy do Gdańska, też mamy swoje skarby w razie gdyby okazało się, że wybrałeś złą drogę.',
		routes: [
			'village',
			'beach',
			'trade',
		]
	},
	beach: {
		key: 'beach',
		name: 'PLAŻA',
		description: 'Mokro i piaszczyście. Jak to nad morzem. A któż to, proszę państwa?? Trafiłeś do Gdańska, czyli do Astorii i Maćka, czyyyli do osób, które wiedzą więcej niż ktokolwiek na temat skarbu. Ale żeby wiedzieć więcej, musisz iść najpierw dowiedzieć się, jaka jest cena za takie informacje. Niestety, twoja podróż może trwać dłużej, niż się tego spodziewałeś.',
		routes: [
			'road',
			'oliwa'
		]
	},
	oliwa: {
		key: 'oliwa',
		name: 'ŻABIANKA TERROR',
		description: 'Spokojnie, to ulubione miejsce w Gdańsku tych dwóch, od których zależy twoja wyprawa. Idziesz do Natalki, przyjaciółki Astorii, bo ma ci coś do przekazania.',
		routes: [
			'beach',
			'astoria',
		]
	},
	astoria: {
		key: 'astoria',
		name: 'ASTORIA I MACIEK',
		description: 'No w końcu! Masz to, co Natalka ci dała? Tak? To świetnie i dla ciebie i dla nas. Znaczy nie wiem czy dla ciebie też, ale dla nas tak. Mamy dla ciebie dobre informacje: to koniec twojej podróży, zdobyłeś to, o co się tak rozchodzi --- 💎 --- . Nie wiem, czy skorzystasz, ale zapraszamy!'
	},
	trade: {
		key: 'trade',
		name: 'SZLAK KUPIECKI',
		description: 'Brakuje tu kupców. Ciekawe czemu, co? Niejeden został tu brutalnie zamordowany, bo przecież naszyjnik z podrabianego złota jest ważniejszy od ludzkiego życia, right? No cóż, zdarza się i tak. Może będziesz miał szczęście i nie natrafisz na nikogo.',
		routes: [
			'road',
			'mountains',
			'city'
		]
	},
	mountains: {
		key: 'mountains',
		name: 'GÓRY',
		description: 'Kto by pomyślał, że wspinaczka w górach może być taka przyjemna, szczególnie po tym jak uciekałeś przed bandytami. Widać na horyzoncie jakiś budynek. Pewnie jesteś zmęczony, a masz do wyboru jeszcze tylko jaskinię.',
		routes: [
			'trade',
			'mountains-cave',
			'monastery'
		]
	},
	'mountains-cave': {
		key: 'cave',
		name: 'JASKINIA',
		description: 'Trafiłeś na idealne miejsce do przespania się i nabrania sił.',
		routes: [
			'mountains',
		]
	},
	monastery: {
		key: 'monastery',
		name: 'KLASZTOR',
		description: 'Trafiłeś na sektę. Niestety zostajesz tam już na zawsze, bo jedynym sposobem odejścia jest śmierć.'
	},
	city: {
		key: 'city',
		name: 'MIASTO',
		description: '*szum wiatru* Ale pustka co? Ciekawe co tu się wydarzyło. To miasto... a w sumie to już nie, wygląda jakby spadła na nie bomba. Myślisz że jest tu czego szukać? Pamiętaj, że aby teraz wrócić do wioski, musisz przejść szlak z powrotem. Oczywiście, jak zawsze, masz opcję dalszej drogi. Pustynia. Wiem, wiem, niezbyt ciekawe miejsce do podróży, ale co jeśli warto?',
		routes: [
			'trade',
			'desert'
		]
	},
	desert: {
		key: 'desert',
		name: 'PUSTYNIA',
		description: 'Gorąco w chuj. Nie wiem czy widzisz to co ja, ale tam jest chyba jakiś wodopój... Musisz nabrać sił przed dalszą wędrówką, nie sądzisz? Do najbliższego miesteczka jest jeszcze kawałek, ale jak wolisz.',
		routes: [
			'country-town',
			'city',
			'oaza'
		]
	},
	oaza: {
		key: 'oaza',
		name: 'OAZA',
		description: 'Niestety, to była tylko fatamorgana. Jesteś tak wycieńczony, że nie zdołasz nawet wrócić na szlak. Przykro mi, umierasz...',
	},
	'country-town': {
		key: 'country-town',
		name: 'MIASTO KOWBOI',
		description: '',
		routes: [
			'desert',
		]
	}
}

module.exports = locations;