export interface StarshipsResponse {
    results: Starship[];
}

export interface Starship {
    name?: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
    id?: number;
    title?: string;
    image?: string;
    body?: string;
    author?: string;
    userId?: number;
    checked?: boolean;
}