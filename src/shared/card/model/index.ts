export interface Card {
    post: {
        id?: number | string;
        title?: string;
        to?: string;
        image?: string;
        body?: string;
        checked?: boolean;
        userId?: number;
        author?: string;
        name?: string;
        model?: string;
        manufacturer?: string;
        cost_in_credits?: string;
        length?: string;
        max_atmosphering_speed?: string;
        crew?: string;
        passengers?: string;
        cargo_capacity?: string;
        consumables?: string;
        hyperdrive_rating?: string;
        MGLT?: string;
        starship_class?: string;
        pilots?: string[];
        films?: string[];
        created?: Date;
        edited?: Date;
        url?: string;
    }
}
