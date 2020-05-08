import {
    database
} from './../data/data.store';
import {
    IResolvers
} from "graphql-tools";

const queries: IResolvers = {
    Query: {
        authors(): any {
            return database.authors;
        },
        author(__: void, {
            id
        }): any {
            const result = database.authors.filter(author => author.id === id)[0];
            if (result === undefined) {
                return {
                    id: '-1',
                    name: `error id: ${id}`,
                    email: '',
                    papers: []
                }
            }
            return result;
        },
        papers(): any {
            return database.papers;
        },
        references(): any {
            return database.references;
        },
        // Aquí Papers y References
        paper(__: void, {
            id
        }): any {
            const result = database.papers.filter((paper) => paper.id === id)[0];
            if (result === undefined) {
                return {
                    id: "-1",
                    title: `error id: ${id}`,
                    authors: [],
                    references: [],
                };
            }
            return result;
        },
        reference(__: void, {
            id
        }): any {
            const result = database.references.filter(
                (reference) => reference.id === id
            )[0];
            if (result === undefined) {
                return {
                    id: "-1",
                    PT: `error id: ${id}`,
                    abstract: "",
                    annote: "",
                    author: "",
                    doi: "",
                    file: "",
                    issn: "",
                    journal: "",
                    keywords: "",
                    month: "",
                    pages: "",
                    publisher: "",
                    title: "",
                    url: "",
                    volume: "",
                    year: "",
                };
            }
            return result;
        },
    }


}

export default queries;