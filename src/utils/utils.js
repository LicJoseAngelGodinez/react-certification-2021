

export const processQueryParams = (params) => {
  let result = "?";

  for (let i = 0; i < params.length; i++) {
      const param = params[i];
      const connector = i === 0 ? '' : '&';
      const {field, value} = param;

      result += `${connector}${field}=${value}`;
  }

  return result;
};

export const createQueryParams = ({value, key}) => {
  return [
    { field: "q", value },
    { field: "part", value: "id" },
    { field: "part", value: "snippet" },
    { field: "maxResults", value: 25 },
    { field: "type", value: "video" },
    { field: "key", value: key },
  ];
};

export const processVideoResponse = (videos) => {  
  return videos.filter( (video) => video.id.videoId );
};