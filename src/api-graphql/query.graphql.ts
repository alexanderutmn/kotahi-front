import { useQuery, gql } from "@apollo/client";

export const MANUSCRIPTS_PUBLISHED_SINCE_DATE_QUERY = gql`
	query($startDate: DateTime, $limit: Int){
	manuscriptsPublishedSinceDate(startDate: $startDate, limit: $limit){
		id
		status
			meta {
		title
		manuscriptId
		}
	}
	}
`;
