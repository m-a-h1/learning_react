import commentsApis from "./apiStore";

const { GET_COMMENTS } = commentsApis;

export const getCommentAction = async () => {
  try {
    const response = await fetch(GET_COMMENTS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(">>>>> error ", error);
    return [];
  }
};
