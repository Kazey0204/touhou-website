import axiosInstance from "@/app/utils/axios";

export type FumoType = {
  FumoId: string;
  FumoName: string;
  FumoDescription: string;
  FumoPrice: string;
  FumoImage: string;
};

export type CreateFumoType = {
  FumoName: string;
  FumoImage: string;
  FumoDescription: string;
  FumoPrice: string;
};

export type UpdateFumoType = {
  FumoName?: string;
  FumoImage?: string;
  FumoDescription?: string;
  FumoPrice?: string;
};

// Khai báo các dịch vụ CRUD (Create, Read, Update, Delete) - xem, thêm, sửa, xóa dữ liệu
const FumoService = {

  getAllFumos: async (): Promise<FumoType[]> => {
    const response = await axiosInstance.get("Fumo");
    return response.data;
  },

  addFumo: async (fumoPayload: CreateFumoType): Promise<FumoType> => {
    const response = await axiosInstance.post("Fumo", fumoPayload);
    return response.data;
  },

  updateFumo: async (id: string, fumoPayload: UpdateFumoType): Promise<FumoType> => {
    const response = await axiosInstance.put(`Fumo/${id}`, fumoPayload);
    return response.data;
  },

  deleteFumo: async (id: string): Promise<void> => {
    await axiosInstance.delete(`Fumo/${id}`);
  },
};

export default FumoService;

