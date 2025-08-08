import Cookies from "js-cookie";
import { APIStatusEnum } from "../stores/types";

export const fetchAPI = async (
  apiUrl: string,
  onSuccess: (response: any) => void,
  onFailure: (err: Error) => void,
  setAPIStatus: (status: APIStatusEnum) => void
) => {
  try {
    setAPIStatus(APIStatusEnum.IN_PROGRESS);
    const jwtToken = Cookies.get("jwt_token");

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const data = await response.json();
    setAPIStatus(APIStatusEnum.SUCCESS);
    onSuccess(data);
  } catch (error) {
    onFailure(error);
    setAPIStatus(APIStatusEnum.FAILURE);
  }
};
