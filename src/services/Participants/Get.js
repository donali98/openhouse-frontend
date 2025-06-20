import {empty, parseUrlParams} from '@utils/helpers';
import apiInstance from '@utils/instances/ApiInstance';

const getParticipants = async (
  pageNumber,
  pageSize,
  searchedWord,
  filters = {}
) => {
  const params = {
    pageNumber,
    pageSize,
    sortColumn: 'createdAt',
    sortOrder: 'desc',
    search: !empty(searchedWord) ? searchedWord : undefined,
    ...filters,
  };

  const queryParams = parseUrlParams(params, []);
  const response = await apiInstance.get(`/participants?${queryParams}`);

  return {
    rows: response.data.data.map((participant) => ({
      ...participant,
      networks: {value: participant.networks, label: participant.networks},
      networksLabel: participant.networks,
      id: participant._id,
    })),
    nRows: response.data.nItems,
    nPages: response.data.nPages,
    currentPage: response.data.currentPage,
  };
};

export default getParticipants;
