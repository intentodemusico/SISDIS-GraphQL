import { IResolvers } from "graphql-tools";
import queries from "./queries";
import types from "./types";
import mutations from "./mutations";

const resolversMap: IResolvers = {
    ...queries,    
    ...types,
    ...mutations
}

export default resolversMap;