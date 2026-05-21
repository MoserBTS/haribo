import type {CardProps} from "../models/model.ts";
import {API_URL_BASE} from "../models/model.ts";

export default class Haribo_rest {
    static getAll(): Promise<Haribo[] | null> {
        return fetch(`${API_URL_BASE}/bonbons`)
            .then(response => response.json())
    }
}