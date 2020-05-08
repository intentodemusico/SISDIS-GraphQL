import { database } from './../data/data.store';
import { IResolvers } from "graphql-tools";
import _ from "lodash";

const mutations: IResolvers = {
    Mutation: {
        createAuthor(__: void, { author }): any {
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
        updateAuthor(__: void, { author }): any {
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
        deleteAuthor(__: void, { id }): any {
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
        }
        // Aquí Papaers y References
    }
}

export default mutations;