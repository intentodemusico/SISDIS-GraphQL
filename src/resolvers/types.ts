import { database } from '../data/data.store';
import { IResolvers } from "graphql-tools";
import _ from "lodash";

const types: IResolvers = {
    Author: {
        papers: parent => {
            const paperList : Array<any> = [];
            parent.papers.map((id: String) => {
                paperList.push(_.filter(database.papers, ['id', id])[0]);
            });
            return paperList;
        }
    },
    Paper: {
        authors: parent => {
            const authorList : Array<any> = [];
            parent.authors.map((id: String) => {
                authorList.push(_.filter(database.authors, ['id', id])[0]);
            });
            return authorList;
        },
        references: parent => {
            const referenceList : Array<any> = [];
            parent.references.map((id: String) => {
                referenceList.push(_.filter(database.references, ['id', id])[0]);
            });
            return referenceList;
        }        
    }
}

export default types;