

export interface CardResponseList {
    object: string;
    total_cards: number;
    has_more: boolean;
    next_page: string | null;
    data: CardResponse[];
}
export interface CardResponse {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: number[];
    mtgo_id: number;
    tcgplayer_id: number;
    cardmarket_id: number;
    name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_status: string;
    image_uris: {
        small: string;
        normal: string;
        large: string;
        png: string;
        art_crop: string;
        border_crop: string;
    };
    mana_cost: string;
    cmc: number;
    type_line: string;
    oracle_text: string;
    power: string;
    toughness: string;
    colors: string[];
    color_indicator: string[];
    color_identity: string[];
    keywords: string[];
    all_parts: {
        object: string;
        id: string;
        component: string;
        name: string;
        type_line: string;
        uri: string;
    }[];
    legalities: {
        standard: string;
        future: string;
        historic: string;
        timeless: string;
        gladiator: string;
        pioneer: string;
        explorer: string;
        modern: string;
        legacy: string;
        pauper: string;
        vintage: string;
        penny: string;
        commander: string;
        oathbreaker: string;
        standardbrawl: string;
        brawl: string;
        alchemy: string;
        paupercommander: string;
        duel: string;
        oldschool: string;
        premodern: string;
        predh: string;
    };
    games: string[];
    reserved: boolean;
    game_changer: boolean;
    foil: boolean;
    nonfoil: boolean;
    finishes: string[];
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    variation: boolean;
    set_id: string;
    set: string;
    set_name: string;
    set_type: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    card_back_id: string;
    artist: string;
    artist_ids: string[];
    illustration_id: string;
    border_color: string;
    frame: string;
    frame_effects: string[];
    security_stamp: string;
    full_art: boolean;
    textless: boolean;
    booster: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    penny_rank: number;
    preview: {
        source: string;
        source_uri: string;
        previewed_at: string;
    };
    prices: {
        usd: string;
        usd_foil: string;
        usd_etched: string | null;
        eur: string;
        eur_foil: string;
        tix: string;
    };
    related_uris: {
        gatherer: string;
        tcgplayer_infinite_articles: string;
        tcgplayer_infinite_decks: string;
        edhrec: string;
    };
    purchase_uris: {
        tcgplayer: string;
        cardmarket: string;
        cardhoarder: string;
    };
}
export interface CardResponseListError {
    object: string;
    status: number;
    code: string;
    details: string;
    type: string;
    message: string;
    data: {
        query: string;
        status: number;
        code: string;
        details: string;
        type: string;
        message: string;
    };
}
