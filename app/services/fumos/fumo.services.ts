import axiosInstance from "@/app/utils/axios";

export type FumoType = {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export type CreateFumoType = {
  name: string
  image: string
  description: string
  price: string
}

export type UpdateFumoType = {
  name?: string
  image?: string
  description?: string
  price?: string
}

const FumoService = {
  getAllFumos: async (): Promise<FumoType[]> => {
    const response = await axiosInstance.get("Fumo")
    return response.data
  },

  addFumo: async (fumoPayload: CreateFumoType): Promise<FumoType> => {
    const response = await axiosInstance.post("Fumo", fumoPayload)
    return response.data
  },

  updateFumo: async (id: string, fumoPayload: UpdateFumoType): Promise<FumoType> => {
    const response = await axiosInstance.put(`Fumo/${id}`, fumoPayload)
    return response.data
  },

  deleteFumo: async (id: string): Promise<void> => {
    await axiosInstance.delete(`Fumo/${id}`)
  },
}

export default FumoService;