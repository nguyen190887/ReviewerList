import {Reviewer} from './reviewer';

export interface ReviewTeam {
    id: number;
    name: string;
    reviewers: Reviewer[];
    selected: boolean;
    workingProduct: string;
    manager: string;
}