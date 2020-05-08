import {
    database
} from './../data/data.store';
import {
    IResolvers
} from "graphql-tools";
import _ from "lodash";

const mutations: IResolvers = {
    Mutation: {
        createAuthor(__: void, {
            author
        }): any {
            const newAuthor = {
                id: String(database.authors.length + 1),
                name: author.name,
                email: author.email,
                papers: []
            };
            if (database.authors.filter(author => author.name === newAuthor.name).length === 0) {
                database.authors.push(newAuthor);
                return newAuthor;
            }
            return {
                id: '-1',
                name: `unavaible`,
                email: '',
                papers: []
            };
        },
        updateAuthor(__: void, {
            author
        }): any {
            const ve = _.findIndex(database.authors, function (o) {
                return o.id === author.id;
            });
            if (ve > -1) {
                const v = database.authors[ve].papers;
                author.reviews = v;
                database.authors[ve] = author;
                return author;
            }
            return {
                id: '-1',
                name: `unavaible`,
                email: '',
                papers: []
            };
        },
        deleteAuthor(__: void, {
            id
        }): any {
            const delAuthor = _.remove(database.authors, function (o) {
                return o.id == id;
            });
            if (delAuthor[0] === undefined) {
                return {
                    id: '-1',
                    name: `unavaible`,
                    email: '',
                    papers: []
                };
            }
            return delAuthor[0];
        },
        // Aquí Papaers y References
        createPaper(__: void, {
            paper
        }): any {
            const newPaper = {
                id: String(database.papers.length + 1),
                title: paper.title,
                authors: [],
                references: [],
            };
            if (
                database.papers.filter((author) => paper.title === newPaper.title)
                .length === 0
            ) {
                database.papers.push(newPaper);
                return newPaper;
            }
            return {
                id: "-1",
                title: `unavaible`,
                authors: [],
                references: [],
            };
        },
        updatePaper(__: void, {
            paper
        }): any {
            const ve = _.findIndex(database.papers, function (o) {
                return o.id === paper.id;
            });
            if (ve > -1) {
                const v = database.papers[ve].references;
                paper.reviews = v;
                database.papers[ve] = paper;
                return paper;
            }
            return {
                id: "-1",
                title: `unavaible`,
                authors: [],
                references: [],
            };
        },
        deletePaper(__: void, {
            id
        }): any {
            const delPaper = _.remove(database.papers, function (o) {
                return o.id == id;
            });
            if (delPaper[0] === undefined) {
                return {
                    id: "-1",
                    title: `unavaible`,
                    authors: [],
                    references: [],
                };
            }
            return delPaper[0];
        },

        createReference(__: void, {
            reference
        }): any {
            const newReference = {
                id: String(database.references.length + 1),
                PT: reference.PT,
                abstract: reference.abstract,
                annote: reference.annote,
                author: reference.author,
                doi: reference.doi,
                file: reference.file,
                issn: reference.issn,
                journal: reference.journal,
                keywords: reference.keywords,
                month: reference.month,
                pages: reference.pages,
                publisher: reference.publisher,
                title: reference.title,
                url: reference.url,
                volume: reference.volume,
                year: reference.year,
            };
            if (
                database.references.filter(
                    (reference) => reference.PT === newReference.PT
                ).length === 0
            ) {
                database.references.push(newReference);
                return newReference;
            }
            return {
                id: "-1",
                PT: `unavaible`,
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
        },
        updateReference(__: void, {
            reference
        }): any {
            const ve = _.findIndex(database.references, function (o) {
                return o.id === reference.id;
            });
            if (ve > -1) {
                const v = database.references[ve];
                reference.reviews = v;
                database.authors[ve] = reference;
                return reference;
            }
            return {
                id: "-1",
                PT: `unavaible`,
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
        },
        deleteReference(__: void, {
            id
        }): any {
            const delReference = _.remove(database.references, function (o) {
                return o.id == id;
            });
            if (delReference[0] === undefined) {
                return {
                    id: "-1",
                    PT: `unavaible`,
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
            return delReference[0];
        }
    }
}

export default mutations;