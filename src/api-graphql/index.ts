import { useQuery, gql } from "@apollo/client";
import { MANUSCRIPTS_PUBLISHED_SINCE_DATE_QUERY } from './query.graphql';


export const ApiGraphQL = {
	async GetManuscripts() {
		const { data, loading, error } = useQuery(MANUSCRIPTS_PUBLISHED_SINCE_DATE_QUERY);
		console.log(data);
		return data;
	}
}

