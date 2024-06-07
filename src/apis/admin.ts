import { instance } from "./axios";

export const fetchAdminNickname = async () => {
  const response = await instance.get("/api/admin/nickname");

  return response;
};

export const fetchRegisterEvent = async (page: number, size: number) => {
  const response = await instance.get(
    `/api/admin/register?page=${page}&size=${size}`
  );

  return response;
};

export const fetchRegisterEventDetail = async (id: number) => {
  const response = await instance.get(
    `/api/admin/register/detail?event_id=${id}`
  );

  return response;
};

export const searchRegisterEvent = async (
  page: number,
  size: number,
  keyword: string,
  state: string
) => {
  const response = await instance.get(
    `/api/admin/register/search?name=${keyword}&page=${page}&size=${size}&state=${state}`
  );

  return response;
};

export const resolveRegisterEvent = async (eventId: number, status: string) => {
  const response = await instance.patch("/api/admin/register", {
    event_id: eventId,
    status: status,
  });

  return response;
};
