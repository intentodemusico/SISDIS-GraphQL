import { database } from './../data/data.store';
import { IResolvers } from "graphql-tools";

const queries: IResolvers = {
    Query: {
        authors(): any {
            return database.authors;
        },
        author(__: void, { id }): any {
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
        }
        // Aquí Papers y References
    }
}

export default queries;